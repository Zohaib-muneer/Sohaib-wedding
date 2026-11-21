import React, { useRef, useState } from 'react';
import './MovingCurtains.css';
import weddingNasheed from '../assets/audio/Wedding Nasheed.mp3';

export default function MovingCurtains({ children }) {
  const [stage, setStage] = useState('closed'); // 'closed' | 'pulling' | 'open'
  const audioRef = useRef(null);

  const handleOpen = () => {
    if (stage !== 'closed') return;

    audioRef.current?.play().catch((error) => {
      console.error('Unable to play the opening audio:', error);
    });

    setStage('pulling');
    setTimeout(() => {
      setStage('open');
    }, 320);
  };

  const isPulling = stage === 'pulling';
  const isOpen = stage === 'open';

  const velvetPleats = {
    backgroundImage:
      'repeating-linear-gradient(90deg, #140001 0px, #420508 18px, #850c13 38px, #420508 58px, #140001 80px)',
  };

  const twistedStringVertical = {
    backgroundImage:
      'repeating-linear-gradient(35deg, #78350f 0px, #f59e0b 3px, #fef3c7 5px, #92400e 8px, #451a03 10px)',
  };

  return (
    <section
      onClick={handleOpen}
      className={`relative min-h-screen w-full overflow-hidden bg-[#1a0102] ${
        !isOpen ? 'cursor-pointer' : ''
      }`}
    >
      <audio ref={audioRef} src={weddingNasheed} preload="none" />

      {/* Wrapped Hero Content */}
      <div
        className={`relative z-10 min-h-screen w-full transition-transform duration-[2400ms] ease-out ${
          isOpen ? 'scale-100' : 'scale-[0.97]'
        }`}
      >
        {children}
      </div>

      {/* Left Curtain */}
      <div
        style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
        className={`absolute top-0 left-0 z-20 h-full w-1/2 pointer-events-none transition-transform duration-[2400ms] ${
          isOpen ? '-translate-x-[76%] sm:-translate-x-[70%]' : 'translate-x-0'
        }`}
      >
        {/* Inner Curtain Fabric */}
        <div
          style={velvetPleats}
          className={`h-full w-full shadow-[18px_0_40px_rgba(0,0,0,0.95)] border-r-2 border-amber-400/60 ${
            isOpen
              ? 'origin-top animate-breeze-left'
              : 'origin-left animate-closed-left'
          }`}
        />

        {/* Left Smooth Draped Braided String (SVG) */}
        <svg
          viewBox="0 0 400 120"
          preserveAspectRatio="none"
          className={`absolute top-10 left-0 w-full h-28 overflow-visible origin-left transition-all duration-1000 ease-out ${
            isOpen
              ? 'rotate-12 translate-y-6 opacity-85'
              : isPulling
              ? 'translate-y-1.5 scale-y-105'
              : 'rotate-0 translate-y-0 opacity-100'
          }`}
        >
          <defs>
            <linearGradient id="stringGoldLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#78350f" />
              <stop offset="35%" stopColor="#f59e0b" />
              <stop offset="60%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
          </defs>
          {/* Soft Shadow on Velvet */}
          <path
            d="M -10 20 Q 190 95, 400 42"
            fill="none"
            stroke="rgba(0,0,0,0.7)"
            strokeWidth="7"
            strokeLinecap="round"
            transform="translate(0, 6)"
          />
          {/* Braided String */}
          <path
            d="M -10 20 Q 190 95, 400 42"
            fill="none"
            stroke="url(#stringGoldLeft)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Twisted Thread Detail */}
          <path
            d="M -10 20 Q 190 95, 400 42"
            fill="none"
            stroke="#451a03"
            strokeWidth="5"
            strokeDasharray="4 5"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Right Curtain */}
      <div
        style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
        className={`absolute top-0 right-0 z-20 h-full w-1/2 pointer-events-none transition-transform duration-[2400ms] ${
          isOpen ? 'translate-x-[76%] sm:translate-x-[70%]' : 'translate-x-0'
        }`}
      >
        {/* Inner Curtain Fabric */}
        <div
          style={velvetPleats}
          className={`h-full w-full shadow-[-18px_0_40px_rgba(0,0,0,0.95)] border-l-2 border-amber-400/60 ${
            isOpen
              ? 'origin-top animate-breeze-right'
              : 'origin-right animate-closed-right'
          }`}
        />

        {/* Right Smooth Draped Braided String (SVG) */}
        <svg
          viewBox="0 0 400 120"
          preserveAspectRatio="none"
          className={`absolute top-10 right-0 w-full h-28 overflow-visible origin-right transition-all duration-1000 ease-out ${
            isOpen
              ? '-rotate-12 translate-y-6 opacity-85'
              : isPulling
              ? 'translate-y-1.5 scale-y-105'
              : 'rotate-0 translate-y-0 opacity-100'
          }`}
        >
          <defs>
            <linearGradient id="stringGoldRight" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#78350f" />
              <stop offset="35%" stopColor="#f59e0b" />
              <stop offset="60%" stopColor="#fef3c7" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>
          </defs>
          {/* Soft Shadow on Velvet */}
          <path
            d="M 410 20 Q 210 95, 0 42"
            fill="none"
            stroke="rgba(0,0,0,0.7)"
            strokeWidth="7"
            strokeLinecap="round"
            transform="translate(0, 6)"
          />
          {/* Braided String */}
          <path
            d="M 410 20 Q 210 95, 0 42"
            fill="none"
            stroke="url(#stringGoldRight)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Twisted Thread Detail */}
          <path
            d="M 410 20 Q 210 95, 0 42"
            fill="none"
            stroke="#451a03"
            strokeWidth="5"
            strokeDasharray="4 5"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Top Header Hanging Pull Strings & Tassels (Left & Right) */}
      <div
        className={`absolute top-0 left-6 sm:left-12 z-30 flex flex-col items-center origin-top animate-cord-left pointer-events-none transition-transform duration-500 ${
          isOpen
            ? 'translate-y-4'
            : isPulling
            ? 'translate-y-8'
            : 'translate-y-0'
        }`}
      >
        <div style={twistedStringVertical} className="w-1.5 h-28 sm:h-36 shadow-md" />
        <div className="w-3.5 h-3.5 rounded-full bg-amber-400 border border-amber-200 shadow-md -mt-1" />
        <div className="w-4 h-10 rounded-b-lg bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-lg" />
      </div>

      <div
        className={`absolute top-0 right-6 sm:right-12 z-30 flex flex-col items-center origin-top animate-cord-right pointer-events-none transition-transform duration-500 ${
          isOpen
            ? 'translate-y-4'
            : isPulling
            ? 'translate-y-8'
            : 'translate-y-0'
        }`}
      >
        <div style={twistedStringVertical} className="w-1.5 h-28 sm:h-36 shadow-md" />
        <div className="w-3.5 h-3.5 rounded-full bg-amber-400 border border-amber-200 shadow-md -mt-1" />
        <div className="w-4 h-10 rounded-b-lg bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-lg" />
      </div>

      {/* Top Header Center Opening Knot & Wax Seal */}
      <div
        className={`absolute top-0 inset-x-0 z-30 flex flex-col items-center pt-5 sm:pt-7 pointer-events-none px-4 text-center transition-all duration-1000 ${
          isOpen
            ? 'opacity-0 -translate-y-6 scale-105'
            : isPulling
            ? 'translate-y-2 scale-95 opacity-100'
            : 'opacity-100 translate-y-0 scale-100'
        }`}
      >
        {/* Top Hanging Twisted String */}
        <div style={twistedStringVertical} className="w-1.5 h-6 shadow-md" />

        {/* Realistic Two-Piece Rope Knot that splits apart when tapped */}
        <div className="relative z-20 flex items-center justify-center -my-1">
          <div
            style={twistedStringVertical}
            className={`w-4 h-6 rounded-full border border-amber-200/80 shadow-md transition-all duration-700 ${
              isOpen
                ? '-translate-x-10 -rotate-45 opacity-0'
                : 'translate-x-0.5 rotate-12 opacity-100'
            }`}
          />
          <div
            style={twistedStringVertical}
            className={`w-4 h-6 rounded-full border border-amber-200/80 shadow-md transition-all duration-700 ${
              isOpen
                ? 'translate-x-10 rotate-45 opacity-0'
                : '-translate-x-0.5 -rotate-12 opacity-100'
            }`}
          />
        </div>

        {/* Wax Seal / Opening Clasp */}
        <div className="px-5 py-4 rounded-full border-double bg-[#2a0305]/95 border-2 border-amber-400/80 shadow-[0_0_30px_rgba(251,191,36,0.45)] animate-pulse">
          <span className="text-amber-200 font-play tracking-widest uppercase text-xs sm:text-sm block">
            Tap to
            <br />
            Open
            <span className="flex justify-center text-5xl sm:text-6xl font-love italic mt-1">
              S.A
            </span>
          </span>
        </div>

        {/* Hanging Twisted String Tails below the Seal */}
        <div className="flex gap-2.5 -mt-1">
          <div
            style={twistedStringVertical}
            className="w-1 h-12 origin-top animate-cord-left rounded-b-full shadow"
          />
          <div
            style={twistedStringVertical}
            className="w-1 h-12 origin-top animate-cord-right rounded-b-full shadow"
          />
        </div>
      </div>

      {/* Top Royal Valance */}
      <div className="absolute top-0 inset-x-0 z-30 h-14 pointer-events-none bg-gradient-to-b from-black/90 via-[#2a0305]/75 to-transparent" />
    </section>
  );
}
