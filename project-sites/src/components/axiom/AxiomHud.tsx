'use client';
import React, { useEffect, useState } from 'react';

export function AxiomHud() {
    const [focusWidth, setFocusWidth] = useState(0);
    const [goalWidth, setGoalWidth] = useState(0);

    useEffect(() => {
        // Trigger animation after mount
        const timer = setTimeout(() => {
            setFocusWidth(78);
            setGoalWidth(91);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full max-w-4xl mx-auto mb-12 border border-[#333] bg-[#050505] text-[#e0e0e0] font-mono text-xs md:text-sm shadow-xl mt-8">
            <div className="border-b border-[#333] px-4 py-2 flex justify-between items-center bg-black">
                <span className="text-gray-500">┌────────────────────</span>
                <span className="font-bold tracking-widest px-4 text-white">
                    AXIOM OS <span className="text-[#00d4aa]">● RUNNING</span>
                </span>
                <span className="text-gray-500">─────────────────┐</span>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Col: State */}
                <div>
                    <div className="text-gray-500 mb-4 uppercase tracking-widest border-b border-[#333] pb-2">Current State</div>
                    
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="w-24 text-gray-400">Focus</span>
                            <div className="flex-1 mx-4 bg-[#111] h-4 relative overflow-hidden flex">
                                <div 
                                    className="bg-[#00d4aa] h-full transition-all duration-1000 ease-out" 
                                    style={{ width: `${focusWidth}%` }}
                                ></div>
                                <div 
                                    className="bg-gray-800 h-full transition-all duration-1000 ease-out opacity-20" 
                                    style={{ width: `${100 - focusWidth}%` }}
                                ></div>
                            </div>
                            <span className="w-12 text-right text-[#00d4aa] font-bold">{focusWidth}%</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <span className="w-24 text-gray-400">Intent</span>
                            <div className="flex-1 mx-4">
                                <span className="text-white font-bold bg-[#111] px-2 py-1 border border-[#333]">DEEP_WORK</span>
                            </div>
                            <span className="w-12"></span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <span className="w-24 text-gray-400">Goal Align</span>
                            <div className="flex-1 mx-4 bg-[#111] h-4 relative overflow-hidden flex">
                                <div 
                                    className="bg-[#00d4aa] h-full transition-all duration-1000 ease-out" 
                                    style={{ width: `${goalWidth}%` }}
                                ></div>
                                <div 
                                    className="bg-gray-800 h-full transition-all duration-1000 ease-out opacity-20" 
                                    style={{ width: `${100 - goalWidth}%` }}
                                ></div>
                            </div>
                            <span className="w-12 text-right text-[#00d4aa] font-bold">{goalWidth}%</span>
                        </div>
                    </div>
                </div>
                
                {/* Right Col: Active Apps */}
                <div>
                    <div className="text-gray-500 mb-4 uppercase tracking-widest border-b border-[#333] pb-2">Active Apps</div>
                    
                    <ul className="space-y-3">
                        <li className="flex justify-between items-center">
                            <span className="text-white">Chrome</span>
                            <span className="text-gray-500">21m</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-white">VS Code</span>
                            <span className="text-gray-500">48m</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span className="text-white">Terminal</span>
                            <span className="text-gray-500">12m</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-[#333] p-4 bg-black space-y-2">
                <div className="flex items-center space-x-3 text-sm">
                    <span className="text-gray-500">POLICY ENGINE</span>
                    <span className="text-[#00d4aa]">✓ Activity aligned with declared goal</span>
                </div>
                <div className="flex items-center space-x-6 text-sm">
                    <span className="flex items-center space-x-2">
                        <span className="text-gray-500">SPECTER DAEMON</span>
                        <span className="text-[#00d4aa]">● Running</span>
                    </span>
                    <span className="text-[#333]">│</span>
                    <span className="flex items-center space-x-2">
                        <span className="text-gray-500">OLLAMA</span>
                        <span className="text-[#00d4aa]">● Running</span>
                    </span>
                </div>
            </div>
            
            <div className="border-t border-[#333] px-4 py-2 text-gray-500 text-right bg-black">
                └────────────────────────────────────────────────────────────┘
            </div>
        </div>
    );
}
