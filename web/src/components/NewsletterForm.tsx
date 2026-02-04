'use client';

import { useState } from 'react';

export function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="mt-16 p-8 md:p-12 rounded-2xl glass-panel border border-cyan/20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto text-center">
                <div className="inline-block mb-4 px-4 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-xs font-mono text-cyan tracking-widest">
          // JOIN_THE_NETWORK
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Stay Ahead of the Curve
                </h3>

                <p className="text-gray-400 mb-8 text-lg font-light">
                    Get the latest security research, engineering logs, and classified updates delivered directly to your inbox.
                </p>

                {status === 'success' ? (
                    <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-lg font-mono text-sm animate-in fade-in slide-in-from-bottom-2">
                        &gt; SUBSCRIBER_ADDED_TO_DATABASE
                        <br />
                        &gt; WELCOME_ABOARD_OPERATIVE
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="ENTER_EMAIL_ADDRESS..."
                            required
                            className="flex-1 bg-black/30 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 font-mono text-sm transition-all"
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="bg-cyan hover:bg-cyan-400 text-black font-bold py-4 px-8 rounded-lg transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 font-mono text-sm tracking-wider"
                        >
                            {status === 'loading' ? 'PROCESSING...' : 'SUBSCRIBE'}
                        </button>
                    </form>
                )}

                <p className="mt-6 text-xs text-gray-600 font-mono">
                    NO_SPAM_PROTOCOL_ACTIVE // UNSUBSCRIBE_ANYTIME
                </p>
            </div>
        </div>
    );
}
