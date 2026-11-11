"use client";

import { useEffect, useState } from "react";

export function CinematicHud() {
  const [timecode, setTimecode] = useState("00:00:04:18");
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);
  const [oscillator, setOscillator] = useState<OscillatorNode | null>(null);
  const [gainNode, setGainNode] = useState<GainNode | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setTimecode((prev) => {
        const [h, m, s, f] = prev.split(":").map(Number);
        let frames = f + 1;
        let seconds = s;
        let minutes = m;
        let hours = h;
        if (frames >= 24) {
          frames = 0;
          seconds += 1;
          if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
            if (minutes >= 60) {
              minutes = 0;
              hours += 1;
            }
          }
        }
        const formatted = [hours, minutes, seconds, frames]
          .map((v) => String(v).padStart(2, "0"))
          .join(":");
        return formatted;
      });
    }, 1000 / 24);
    return () => clearInterval(id);
  }, []);

  const toggleSound = () => {
    if (!isPlaying) {
      try {
        const AudioContext = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(110, ctx.currentTime);
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        setAudioCtx(ctx);
        setOscillator(osc);
        setGainNode(gain);
        setIsPlaying(true);
      } catch {
        // Audio init prevented.
      }
    } else {
      if (gainNode && audioCtx && oscillator) {
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
        setTimeout(() => {
          try {
            oscillator.stop();
            oscillator.disconnect();
          } catch {
            // ignore
          }
        }, 800);
      }
      setIsPlaying(false);
    }
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-30 flex flex-col justify-between p-6 md:p-12 opacity-40">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2 text-primary font-label-metadata text-label-metadata uppercase tracking-[0.3em]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-error animate-ping" />
          <span>REC ● RAJRAM CELLULOID MASTER</span>
        </div>
        <div className="font-label-metadata text-label-metadata text-secondary tracking-[0.25em]">
          LENS: COOKE ANAMORPHIC /i 40MM T2.3
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div className="font-label-metadata text-label-metadata text-on-surface-variant tracking-[0.3em]">
          CANVAS: 2.39:1 CINEMASCOPE | 4K LOG-C
        </div>
        <div className="font-label-metadata text-label-metadata text-primary tracking-[0.3em]">{timecode}</div>
      </div>
    </div>
  );
}
