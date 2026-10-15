'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Copy, Check, ArrowRight } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    service: string;
    timeline: string;
    budget: string;
    message: string;
}

export function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        service: 'Backend & MVP Development',
        timeline: 'Standard (2–4 weeks)',
        budget: 'Fixed Project ($1k–$5k)',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Prepare the formatted subject and email body
        const subject = encodeURIComponent(`Project Inquiry: ${formData.service} — ${formData.name}`);
        const bodyContent = 
`Hello Rounak,

I would like to discuss a freelance project / consulting engagement.

1. Client / Company Name: ${formData.name}
2. Contact Email: ${formData.email}
3. Service Pillar: ${formData.service}
4. Target Timeline: ${formData.timeline}
5. Budget / Engagement Model: ${formData.budget}

Project Scope & Requirements:
${formData.message}

Looking forward to hearing from you.
Best regards,
${formData.name}`;

        const mailtoUrl = `mailto:rounakneema414@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

        // Give tactile feedback
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            // Open the user's default email client pre-filled
            window.location.href = mailtoUrl;
        }, 500);
    };

    const handleCopyDetails = () => {
        const text = 
`Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}
Timeline: ${formData.timeline}
Budget: ${formData.budget}
Message: ${formData.message}`;

        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    if (isSubmitted) {
        return (
            <div className="p-8 border-2 border-black rounded-2xl bg-zinc-950 text-white shadow-xl text-center space-y-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-2xl font-black tracking-tight mb-2">Scope Details Prepared</h3>
                    <p className="text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
                        Your pre-formatted inquiry was dispatched to your mail client. If it did not open automatically, copy your inquiry below and send directly to <span className="text-white font-mono font-bold">rounakneema414@gmail.com</span>.
                    </p>
                </div>

                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl text-left font-mono text-xs text-zinc-300 space-y-1">
                    <div><span className="text-zinc-500">Service:</span> {formData.service}</div>
                    <div><span className="text-zinc-500">Timeline:</span> {formData.timeline}</div>
                    <div><span className="text-zinc-500">From:</span> {formData.name} ({formData.email})</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <button
                        onClick={handleCopyDetails}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                    >
                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        {copied ? 'Copied to Clipboard' : 'Copy Inquiry Text'}
                    </button>
                    <a
                        href={`mailto:rounakneema414@gmail.com?subject=Project%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white hover:bg-zinc-200 text-black rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                    >
                        <span>Re-open Email Client</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-zinc-500 hover:text-zinc-300 underline font-mono block mx-auto pt-2"
                >
                    &larr; Edit Details &amp; Submit Again
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label className="block text-xs font-mono uppercase font-bold text-gray-700 mb-2">
                        Your Name / Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Rivera or Acme Labs"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-black transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-xs font-mono uppercase font-bold text-gray-700 mb-2">
                        Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-black transition-colors"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                    <label className="block text-xs font-mono uppercase font-bold text-gray-700 mb-2">
                        Service Pillar
                    </label>
                    <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-3 border border-gray-200 rounded-lg text-xs font-mono bg-white focus:outline-none focus:border-black transition-colors"
                    >
                        <option value="Backend & MVP Development">Backend &amp; MVP Development</option>
                        <option value="Cybersecurity & Vulnerability Assessment">Cybersecurity &amp; Pentesting</option>
                        <option value="DevSecOps & CI/CD Automation">DevSecOps &amp; CI/CD</option>
                        <option value="AI Systems & Document Intelligence">AI &amp; Document Intelligence</option>
                        <option value="General Technical Consulting">Technical Consulting</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-mono uppercase font-bold text-gray-700 mb-2">
                        Timeline
                    </label>
                    <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3 py-3 border border-gray-200 rounded-lg text-xs font-mono bg-white focus:outline-none focus:border-black transition-colors"
                    >
                        <option value="Urgent (1–2 weeks)">Urgent (1–2 weeks)</option>
                        <option value="Standard (2–4 weeks)">Standard (2–4 weeks)</option>
                        <option value="Longer Horizon (1–2 months)">Longer Horizon (1–2 months)</option>
                        <option value="Advisory Retainer">Advisory Retainer</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-mono uppercase font-bold text-gray-700 mb-2">
                        Engagement Scope
                    </label>
                    <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3 py-3 border border-gray-200 rounded-lg text-xs font-mono bg-white focus:outline-none focus:border-black transition-colors"
                    >
                        <option value="Fixed Project (< $2.5k)">Fixed Project (&lt; $2.5k)</option>
                        <option value="Full MVP ($2.5k – $7.5k)">Full MVP ($2.5k – $7.5k)</option>
                        <option value="Infrastructure Sprint">Infrastructure Sprint</option>
                        <option value="Hourly / Weekly Retainer">Weekly Retainer</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-xs font-mono uppercase font-bold text-gray-700 mb-2">
                    Project Overview &amp; Objectives <span className="text-red-500">*</span>
                </label>
                <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe what you are building or securing: existing tech stack, key bottlenecks or security goals, and desired deliverables..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:border-black transition-colors leading-relaxed"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-black hover:bg-zinc-800 text-white font-bold font-mono text-xs uppercase tracking-widest rounded-xl transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2 hover:translate-y-[-1px] disabled:opacity-50"
            >
                {isSubmitting ? (
                    <span>Preparing Transmission...</span>
                ) : (
                    <>
                        <Send className="w-4 h-4" />
                        <span>Send Scoped Project Inquiry</span>
                    </>
                )}
            </button>
        </form>
    );
}
