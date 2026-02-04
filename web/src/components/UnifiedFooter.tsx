'use client';

export function UnifiedFooter() {
    return (
        <footer className="fixed bottom-0 left-0 w-full z-50 border-t border-gray-200 bg-white/90 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-12 flex justify-between items-center text-xs font-mono text-gray-400 tracking-wider">
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span>ONLINE</span>
                </div>
                <div className="flex items-center gap-6">
                    <a href="https://github.com/rounakneema" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GITHUB</a>
                    <a href="https://www.linkedin.com/in/Rnks23" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LINKEDIN</a>
                    <a href="mailto:rounakneema414@gmail.com" className="hover:text-red-500 transition-colors">MAIL</a>
                    <span>© {new Date().getFullYear()} ENGINEERING LOGS</span>
                </div>
            </div>
        </footer>
    );
}
