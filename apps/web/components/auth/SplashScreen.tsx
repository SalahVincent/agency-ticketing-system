'use client';

import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out effect after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Complete transition after fade-out finishes
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#f8f9fa] flex flex-col items-center justify-between p-8 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div />

      {/* Center Brand Identity */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="w-20 h-20 rounded-3xl bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex items-center justify-center text-emerald-600">
          <span className="material-symbols-outlined text-4xl">directions_bus</span>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1a1c1c]">
            CAMEWEGO
          </div>
          <p className="text-xs text-[#7e7576] font-medium tracking-wide mt-1">
            Travel & Express Manager
          </p>
        </div>
      </div>

      {/* Progress Spinner */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-5 h-5 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
        <span className="text-[11px] text-[#7e7576] font-mono">Initializing...</span>
      </div>
    </div>
  );
}