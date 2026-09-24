---
title: 'What I Learned Building a Go-Powered Raw Packet Scanner (Part 1)'
date: '2026-01-02'
tags: ['GO', 'NETWORKING', 'SECURITY', 'ENGINEERING']
excerpt: 'Part 1 of the Revealr series. Raw packet crafting in Go is messy and unforgiving. Learn how to bypass net.Dial, handle OS interference, and build a SYN scanner from scratch.'
author: 'ROUNAK'
---

*This is Part 1 of a blog series where I write about the mistakes, crashes, and lessons I learned while building **Revealr**, my own network scanner.*

---

We all know `nmap`. You run `nmap -sS target`, and within seconds, it calmly tells you exactly which ports are open.

For a long time, I had a simple explanation in my head for why it was so fast:
*"These tools are fast because they are written in C by geniuses from 30 years ago who understood things I never will."*

But recently, I started writing more Go. And naturally, this thought came up:
*Go is fast. Go has Goroutines. Why can't I just launch 10,000 goroutines and scan ports myself?*

So I tried. And that’s when I realized something important: **It’s not about the language. It’s about the technique.**

## The Real Problem: Being Too "Polite"

If you write a normal Go scanner using the standard library function `net.Dial("tcp", "target:80")`, you are doing things the "official" way. You are asking the Operating System (OS) to make a full connection.

Think of it like calling a friend:

1. You dial the number.
2. They pick up.
3. You say "Hello."
4. They say "Hello."
5. **Then** you hang up.

This is the **TCP Three-Way Handshake**.

This is safe, but it is heavy.
If you scan 1,000 ports this way, you are making 1,000 full phone calls. Your computer works hard to track the state of every call, the target server gets annoyed by the logs, and firewalls start blocking you.

## The "Missed Call" Technique (SYN Scan)

Professional scanners don’t make full calls. They give a **Missed Call**.

1. **Send SYN** (The Ring).
2. **Receive SYN-ACK** (The phone was picked up).
3. **Send RST** (Cut the call immediately).

You never say hello. You never start a conversation. You just confirm that someone picked up.

That’s what a **SYN Scan** is.

* **Fast:** No waiting for handshakes.
* **Stealthy:** Less likely to clutter application logs.
* **Efficient:** Your OS doesn't need to allocate memory for a full socket.

But here is the catch: **You cannot do this with `net.Dial`.** The standard library forces you to be polite. To send a "Missed Call," you have to craft the packets yourself—byte by byte.

## The "Oh No" Phase: Crafting Packets by Hand

At first, I genuinely thought: *"It’s just data bytes. How hard can it be?"*

It turns out, very hard.

When you use **Raw Sockets**, the OS stops helping you. You are responsible for building the Ethernet header, the IP header, and the TCP header manually.

* One wrong bit? The packet is dropped.
* No error message.
* No warning.
* Just silence.

**The Checksum Bug That Cost Me Hours**
I spent 6 hours one night debugging a scanner that worked perfectly on `localhost` but failed completely on my LAN. Wireshark showed packets leaving my laptop, but no replies ever came back.

The issue? **The TCP Checksum.**

TCP checksums are calculated using a "Pseudo-Header"—a fake header that includes the Source IP and Destination IP. I had forgotten to include this step. The routers on the network looked at my packet, did the math, saw it didn't match, and silently threw my packets in the trash.

Here’s what the packet construction actually looks like using the `gopacket` library. Notice the comment I added to save my future self:

```go
// Constructing the TCP Layer
tcpLayer := &layers.TCP{
    SrcPort: layers.TCPPort(srcPort),
    DstPort: layers.TCPPort(dstPort),
    Seq:     1105024978, // Random sequence number
    SYN:     true,       // The "Missed Call" flag
    Window:  14600,      // Window size
}

// CRITICAL: You must tell the TCP layer about the IP layer.
// Without this, the checksum calculation WILL be wrong.
tcpLayer.SetNetworkLayerForChecksum(ipLayer)

// Serialize the layers into bytes
buf := gopacket.NewSerializeBuffer()
opts := gopacket.SerializeOptions{
    FixLengths:       true, 
    ComputeChecksums: true,
}
err := gopacket.SerializeLayers(buf, opts, ethLayer, ipLayer, tcpLayer)

```

## When Your Own OS Becomes the Enemy

This was the most confusing bug I faced—and honestly, one of the most educational.

I finally got the SYN packet crafting right.

* Packets were going out.
* Servers were replying with SYN-ACK.
* Everything looked perfect in Wireshark.

And yet… my scanner showed **nothing**. No open ports. Just silence.

**What Was Actually Happening?**
I was running the scanner on my own laptop. When a server replied with a SYN-ACK, my **Operating System kernel** saw that packet too, not just my program.

The OS Kernel thought:
*"Wait, I don't remember starting a TCP connection to this server. Why is it replying to me?"*

From the Kernel’s point of view, this looked suspicious. So it did what it is designed to do. It immediately sent a **RST (Reset)** packet back to the server.

Basically, my OS was telling the server: *"Ignore this. I didn't ask for it."*

By the time my scanner tried to read the response, the connection was already dead. My own system was sabotaging me—not out of malice, but out of correctness.

**The Fix: The Dummy Listener**
To fix this, you have to convince the OS to stop panicking. There are a few ways to do this (like complex `iptables` firewall rules), but the approach I used early on was a **Dummy Listener**.

The idea is simple:

1. Open a standard local socket on the *exact same source port* you are using for scanning.
2. Don't send any data through it. Just let it sit there.
3. Now, when the SYN-ACK comes back, the Kernel sees the open socket and thinks:
*"Ah, I see an owner for this port. This traffic is expected."*

Once the Kernel sees a listener bound to that port, it stops sending the automatic RST packets. Your raw packet code finally gets the response without interference.

*(I’m intentionally not dumping the full implementation here because it involves some tricky edge cases with port reuse, and there are cleaner ways to do it depending on if you are on Linux or Windows. I will break this down properly in the next blog).*

## The Correlation Problem (Matching Replies)

Another thing that confused me early on: Once you send 5,000 packets into the void, the replies come back in random order. Packets don't come back with a sticky note saying *"Replying to scan job #42."*

You need a way to match the answer to the question.

I used a simple **Correlation Map**. I created a unique key for every probe I sent out.

```go
// Key format: "TargetIP:TargetPort:MyPort"
key := fmt.Sprintf("TCP:%s:%d:%d", srcIP, remotePort, localPort)

// Store the channel so we know where to send the reply
ps.correlationMap.Store(key, responseChan)

```

When a packet arrives, I check the map. If the key exists, I pass the packet to the waiting goroutine. If not, I ignore it. It’s not fancy, but it is reliable under load.

## Major Takeaways

If you are planning to try this, keep these hard-earned lessons in mind:

1. **You Need Root/Admin:** You cannot send raw packets without `sudo` (Linux) or Administrator (Windows). The OS doesn't trust normal users with this power.
2. **MAC Addresses Matter:** If you are scanning outside your local network (like on the internet), your Destination MAC is **your Gateway's MAC**, not the target server's MAC. I wasted a full day figuring this out.
3. **Rate Limit Aggressively:** Home routers are fragile creatures. If you flood them with 10,000 packets at once, they will just crash. Use a semaphore or a token bucket to limit your speed.

## Final Thoughts

High-level networking feels clean and simple. Raw networking is not.
It is messy. It is unforgiving. And you are fighting two battles: one against the network, and one against your own Operating System.

But once you understand raw packets, the network stack stops feeling like magic—and starts feeling like exposed wiring. And when your code correctly identifies its first open port from a raw SYN-ACK?

That feeling stays.

**Coming Next in Part 2:**
I’ll go deeper into **UDP Scanning**—where silence means everything, and debugging feels like shouting into a dark cave and waiting for an echo. (And I'll show you the full code for managing that Dummy Listener).
