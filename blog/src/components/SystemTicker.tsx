'use client';

export function SystemTicker() {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-black/80 border-t border-cyan-500/20 backdrop-blur-sm z-50 overflow-hidden h-[30px] leading-[30px]">
            <div className="inline-block whitespace-nowrap animate-ticker font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                <span className="mr-12 text-cyan-400">:: SYSTEM_STATUS: OPTIMAL</span>
                <span className="mr-12">:: TRAFFIC_ANALYSIS: NORMAL</span>
                <span className="mr-12 text-red-400">:: THREAT_INTEL: CVE-2025-1102 DETECTED</span>
                <span className="mr-12">:: NEW_LOG_ENTRY: K8S_AUDIT_V2</span>
                <span className="mr-12 text-green-400">:: CONNECTION_SECURE</span>
                <span className="mr-12">:: VISITOR_IP: [REDACTED]</span>
                <span className="mr-12 text-cyan-400">:: SENTINEL_V4.0_ONLINE</span>
                {/* Duplicate for seamless loop */}
                <span className="mr-12 text-cyan-400">:: SYSTEM_STATUS: OPTIMAL</span>
                <span className="mr-12">:: TRAFFIC_ANALYSIS: NORMAL</span>
                <span className="mr-12 text-red-400">:: THREAT_INTEL: CVE-2025-1102 DETECTED</span>
                <span className="mr-12">:: NEW_LOG_ENTRY: K8S_AUDIT_V2</span>
                <span className="mr-12 text-green-400">:: CONNECTION_SECURE</span>
                <span className="mr-12">:: VISITOR_IP: [REDACTED]</span>
                <span className="mr-12 text-cyan-400">:: SENTINEL_V4.0_ONLINE</span>
            </div>
        </div>
    );
}
