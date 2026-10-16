'use client';

import React, { useState } from 'react';

export function TerminalTabs() {
  const [activeTab, setActiveTab] = useState<'build' | 'scan' | 'deploy'>('build');

  return (
    <div className="rounded-2xl bg-[#0f1115] border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.25)] overflow-hidden font-mono text-xs text-neutral-300">
      {/* Top Header Bar */}
      <div className="h-11 bg-[#16181f] border-b border-neutral-800 px-4 flex items-center justify-between">
        {/* Window Dots */}
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block"></span>
        </div>

        {/* Interactive Tabs */}
        <div className="flex items-center space-x-1 bg-[#0f1115] p-1 rounded-lg border border-neutral-800/80">
          <button
            onClick={() => setActiveTab('build')}
            className={`px-3 py-1 rounded text-[11px] font-medium transition-all ${
              activeTab === 'build'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Build
          </button>
          <button
            onClick={() => setActiveTab('scan')}
            className={`px-3 py-1 rounded text-[11px] font-medium transition-all ${
              activeTab === 'scan'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Scan
          </button>
          <button
            onClick={() => setActiveTab('deploy')}
            className={`px-3 py-1 rounded text-[11px] font-medium transition-all ${
              activeTab === 'deploy'
                ? 'bg-neutral-800 text-white shadow-sm'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Deploy
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="p-5 sm:p-6 overflow-x-auto min-h-[300px] leading-relaxed">
        {activeTab === 'build' && (
          <div className="space-y-4">
            <div>
              <span className="text-neutral-400">$ </span>
              <span className="text-white">docker build -t pipelineforge:prod .</span>
            </div>
            <div className="text-neutral-400 space-y-0.5 text-[11px]">
              <div className="text-neutral-300">[+] Building 12.4s (12/12) FINISHED</div>
              <div className="flex justify-between max-w-md">
                <span>=&gt; [internal] load build definition</span>
                <span className="text-neutral-500">0.1s</span>
              </div>
              <div className="flex justify-between max-w-md">
                <span>=&gt; [internal] load .dockerignore</span>
                <span className="text-neutral-500">0.1s</span>
              </div>
              <div className="flex justify-between max-w-md">
                <span>=&gt; [stage-1] build application</span>
                <span className="text-neutral-500">8.3s</span>
              </div>
              <div className="flex justify-between max-w-md">
                <span>=&gt; [stage-2] copy to distroless image</span>
                <span className="text-neutral-500">2.1s</span>
              </div>
              <div className="flex justify-between max-w-md">
                <span>=&gt; exporting to image</span>
                <span className="text-neutral-500">0.5s</span>
              </div>
              <div className="flex justify-between max-w-md">
                <span>=&gt; naming to pipelineforge:prod</span>
                <span className="text-neutral-500">0.2s</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-neutral-400">$ </span>
              <span className="text-white">trivy image pipelineforge:prod</span>
              <div className="text-emerald-400 font-semibold mt-1">No vulnerable packages found</div>
            </div>

            <div className="pt-2">
              <span className="text-neutral-400">$ </span>
              <span className="text-white">docker images | grep pipelineforge</span>
              <div className="text-neutral-300 mt-1 grid grid-cols-3 max-w-xs text-[11px]">
                <span className="text-neutral-500">REPOSITORY</span>
                <span className="text-neutral-500">TAG</span>
                <span className="text-neutral-500">SIZE</span>
                <span className="text-white font-medium">pipelineforge</span>
                <span className="text-neutral-300">prod</span>
                <span className="text-emerald-400 font-bold">8MB</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'scan' && (
          <div className="space-y-4">
            <div>
              <span className="text-neutral-400">$ </span>
              <span className="text-white">trivy image --severity HIGH,CRITICAL pipelineforge:prod</span>
            </div>
            <div className="text-neutral-400 space-y-1 text-[11px]">
              <div>2026-10-15T12:00:00Z INFO Vulnerability database up to date</div>
              <div>2026-10-15T12:00:01Z INFO Analyzing target OS: gcr.io/distroless/static-debian11</div>
              <div className="text-neutral-300 pt-1">pipelineforge:prod (debian 11.9)</div>
              <div>=======================================================</div>
              <div>Total: 0 (UNKNOWN: 0, LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 0)</div>
            </div>
            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Security gate passed: zero CVE vulnerabilities detected</span>
            </div>
          </div>
        )}

        {activeTab === 'deploy' && (
          <div className="space-y-4">
            <div>
              <span className="text-neutral-400">$ </span>
              <span className="text-white">helm upgrade --install pipelineforge ./helm/pipelineforge -n prod</span>
            </div>
            <div className="text-neutral-400 space-y-1 text-[11px]">
              <div className="text-neutral-300">Release &quot;pipelineforge&quot; has been upgraded. Happy Helming!</div>
              <div>STATUS: deployed</div>
              <div>REVISION: 14</div>
              <div>TEST SUITE: None</div>
            </div>

            <div className="pt-2">
              <span className="text-neutral-400">$ </span>
              <span className="text-white">kubectl get pods -n prod -l app=pipelineforge</span>
              <div className="text-neutral-300 mt-1 font-mono text-[11px] space-y-0.5">
                <div className="text-neutral-500">NAME                               READY   STATUS    RESTARTS   AGE</div>
                <div className="text-emerald-300">pipelineforge-7f89d4697-2kz9x     1/1     Running   0          42s</div>
                <div className="text-emerald-300">pipelineforge-7f89d4697-9nm4p     1/1     Running   0          42s</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
