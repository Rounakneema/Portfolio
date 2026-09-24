'use client';

import { useCallback } from 'react';

export function useSound() {
    const playTone = useCallback((freq: number, type: OscillatorType, duration: number, vol: number) => {
        const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContext) return;

        const audioCtx = new AudioContext();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gain.gain.setValueAtTime(vol, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    }, []);

    const playHover = useCallback(() => {
        playTone(1200, 'sine', 0.05, 0.05);
        playTone(2000, 'triangle', 0.05, 0.02);
    }, [playTone]);

    const playClick = useCallback(() => {
        playTone(400, 'square', 0.1, 0.05);
        playTone(100, 'sawtooth', 0.2, 0.05);
    }, [playTone]);

    return { playHover, playClick };
}
