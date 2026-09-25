import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# Revealr

> Adaptive high-concurrency network scanner and vulnerability mapping platform built with Go, Python, and SQLite.

## Overview
Revealr is an extensible, modular network reconnaissance platform designed for high-speed service discovery, stateful banner fingerprinting, and offline vulnerability mapping. It is developed and maintained by Rounak Neema.

- Official Domain: https://revealr.rounakneema.in
- Author: Rounak Neema (https://rounakneema.in)
- Source Repository: https://github.com/rounakneema/Revealr
- Primary Technologies: Go, Python, SQLite, Raw Sockets, Concurrency

## System Architecture

Revealr operates across four distinct decoupled architectural layers:

1. **Concurrency Scanning Engine (Go)**:
   - Raw socket SYN probe generation bypassing standard OS socket allocation.
   - Bounded goroutine worker pool with token-bucket rate limiting (--rate flag).
   - Capable of sustaining 50,000+ probes/minute on local LAN networks.

2. **State Manager (SQLite)**:
   - Incremental scan state persistence to local SQLite database.
   - Scan Resumption: Allows interrupted scans to resume from the last completed port partition without re-scanning.
   - Network Drift Detection: Automatically computes structural diffs between successive scan sessions, alerting on newly exposed ports or decommissioned services.

3. **Service Fingerprinter**:
   - Secondary connection banner grabber for active ports.
   - Built-in signature matching for common application protocols (HTTP, SSH, SMTP, Redis, MySQL, etc.).
   - Header extraction and software version identification.

4. **Python Plugin Bridge**:
   - Subprocess IPC over standard streams (stdin/stdout) exchanging structured JSON payloads.
   - Enables writing custom offline vulnerability heuristics, CVE correlation checks, and service fingerprinting modules in Python without recompiling the Go binary.

## Scan Timing Profiles (IDS Evasion)
- **Paranoid** (\`--profile paranoid\`): < 1,000 ports/min, randomized port dispatch order, high jitter between packets, packet fragmentation.
- **Stealthy** (\`--profile stealthy\`): ~5,000 ports/min, randomized port dispatch, moderate jitter.
- **Polite** (\`--profile polite\`): ~10,000 ports/min (default), low jitter, sequential chunks.
- **Aggressive** (\`--profile aggressive\`): ~50,000 ports/min, zero jitter, maximal concurrency.

## Performance Benchmark
- Documented Target Throughput: ~50,000 ports/minute under benchmark test configuration on local Gigabit Ethernet network.
- Full 65,535 port probe completed in ~0.8 seconds at maximum rate.

## Sub-Pages & Documentation Links
- System Architecture Deep-Dive: https://revealr.rounakneema.in/architecture
- Benchmark Methodology & Numbers: https://revealr.rounakneema.in/benchmarks
- Security Model & Timing Controls: https://revealr.rounakneema.in/security
- CLI Documentation & Flag Reference: https://revealr.rounakneema.in/docs
- Changelog & Releases: https://revealr.rounakneema.in/changelog

## License & Responsible Use
Revealr is intended strictly for authorized security evaluations, penetration testing, and systems auditing with explicit written owner authorization.
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
## Author & Related Projects
- Author: Rounak Neema (https://rounakneema.in)
- GitHub Profile: https://github.com/rounakneema
- LinkedIn: https://linkedin.com/in/Rnks23

### Also By Rounak Neema:
- Dizzy: https://dizzy.rounakneema.in
- MetroMind: https://metromind.rounakneema.in
- PipelineForge: https://pipelineforge.rounakneema.in
;}

