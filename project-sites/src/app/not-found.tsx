import Link from 'next/link';
import { Home, FileWarning } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-black font-mono relative overflow-hidden">

            {/* Background Grid */}
            <div className="fixed inset-0 z-0 opacity-[0.3]" style={{
                backgroundImage: `linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
            }}></div>

            <div className="relative z-10 text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full mb-6 border border-red-100">
                    <FileWarning className="w-8 h-8 text-red-500" />
                </div>

                <h1 className="text-6xl font-black mb-4 tracking-tighter">404</h1>
                <h2 className="text-xl font-bold text-gray-800 mb-6 uppercase tracking-widest">Signal Lost</h2>

                <p className="text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
                    The requested resource could not be located on this server. It may have been moved, deleted, or is currently classified.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-lg"
                >
                    <Home className="w-4 h-4" />
                    RETURN TO BASE
                </Link>
            </div>

            <div className="absolute bottom-6 text-[10px] text-gray-400 font-mono">
                ERR_CODE: NOT_FOUND // SYSTEM_ID: ROUNAK_NEEMA_PF
            </div>
        </div>
    );
}
