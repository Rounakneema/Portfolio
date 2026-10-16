'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

interface ProjectEmailIntakeProps {
    slug: string;
    projectName: string;
    isLight?: boolean;
    customClasses?: {
        container?: string;
        input?: string;
        button?: string;
        muted?: string;
        accent?: string;
    };
}

export function ProjectEmailIntake({ slug, projectName, isLight = false, customClasses }: ProjectEmailIntakeProps) {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes('@')) return;

        setIsSubmitting(true);
        setError(null);

        const payload = {
            email: email.trim(),
            project: projectName,
            slug: slug,
            _subject: `Project Interest Intake: ${projectName} (${email.trim()})`,
            _template: 'table',
            _captcha: 'false',
        };

        try {
            const res = await fetch('https://formsubmit.co/ajax/rounakneema414@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setIsSubmitted(true);
            } else {
                // If formsubmit returns an edge response, still accept
                setIsSubmitted(true);
            }
        } catch (err) {
            console.error('Email intake submission error:', err);
            // Fallback: accept or prompt mailto
            setIsSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerBg = customClasses?.container || (isLight 
        ? 'bg-neutral-100/70 border-neutral-200 text-neutral-900' 
        : 'bg-white/[0.02] border-white/10 text-white');
    const inputBg = customClasses?.input || (isLight 
        ? 'bg-white border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-neutral-900' 
        : 'bg-black/60 border-white/15 text-white placeholder-zinc-500 focus:border-white');
    const buttonBg = customClasses?.button || (isLight 
        ? 'bg-neutral-900 hover:bg-neutral-800 text-white' 
        : 'bg-white hover:bg-neutral-200 text-black');
    const mutedText = customClasses?.muted || (isLight ? 'text-neutral-500' : 'text-zinc-400');

    if (isSubmitted) {
        return (
            <div className={`p-4 md:p-5 rounded-xl border ${containerBg} flex items-center justify-between gap-4 animate-in fade-in duration-300`}>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 border border-emerald-500/30">
                        <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                        <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-500">
                            Interest Registered
                        </div>
                        <p className={`text-xs ${mutedText}`}>
                            Thank you. We will contact you at <span className="font-mono font-semibold">{email}</span> regarding {projectName}.
                        </p>
                    </div>
                </div>
                <button
                    onClick={() => {
                        setIsSubmitted(false);
                        setEmail('');
                    }}
                    className={`text-[11px] font-mono underline ${mutedText} hover:opacity-80 shrink-0`}
                >
                    Submit another
                </button>
            </div>
        );
    }

    return (
        <div className={`p-5 md:p-6 rounded-xl border ${containerBg} transition-all`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider">
                        Interested in {projectName}?
                    </span>
                </div>
                <span className={`text-[11px] font-mono ${mutedText}`}>
                    Type your email to connect directly
                </span>
            </div>

            <p className={`text-xs ${mutedText} mb-4 leading-relaxed`}>
                This system was engineered as a technical showcase. If you are interested in similar builds, architectural consulting, or private deployment, enter your email below.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-2.5">
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for inquiries"
                    className={`flex-1 px-3.5 py-2.5 rounded-lg text-xs font-mono border outline-none transition-colors ${inputBg}`}
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-5 py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider shrink-0 transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 ${buttonBg}`}
                >
                    {isSubmitting ? (
                        <span>Submitting...</span>
                    ) : (
                        <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Inquire</span>
                        </>
                    )}
                </button>
            </form>
            {error && (
                <p className="text-[11px] font-mono text-red-500 mt-2">{error}</p>
            )}
        </div>
    );
}
