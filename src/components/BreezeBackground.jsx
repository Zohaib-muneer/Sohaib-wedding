import React from 'react';
import './BreezeBackground.css';

const GOLD_DUST = [
  { top: '82%', left: '12%', size: 'w-1.5 h-1.5', delay: '0s', duration: '9s' },
  { top: '68%', left: '25%', size: 'w-1 h-1', delay: '2.1s', duration: '11s' },
  { top: '86%', left: '42%', size: 'w-2 h-2', delay: '1.2s', duration: '10s' },
  { top: '72%', left: '58%', size: 'w-1 h-1', delay: '3.5s', duration: '8.5s' },
  { top: '88%', left: '74%', size: 'w-1.5 h-1.5', delay: '0.8s', duration: '12s' },
  { top: '55%', left: '18%', size: 'w-1 h-1', delay: '4.2s', duration: '9.5s' },
  { top: '50%', left: '82%', size: 'w-1.5 h-1.5', delay: '2.7s', duration: '10.5s' },
  { top: '62%', left: '50%', size: 'w-1 h-1', delay: '5s', duration: '11.5s' },
];

const PETALS_DATA = [
  { left: '15%', delay: '0s', duration: '15s', size: 'w-3.5 h-2.5' },
  { left: '34%', delay: '4s', duration: '17s', size: 'w-3 h-2' },
  { left: '55%', delay: '2s', duration: '14s', size: 'w-4 h-3' },
  { left: '72%', delay: '6.5s', duration: '16s', size: 'w-3 h-2' },
  { left: '86%', delay: '9s', duration: '18s', size: 'w-3.5 h-2.5' },
];

const STARS_DATA = [
  { top: '12%', left: '18%', delay: '0s', duration: '3.5s' },
  { top: '18%', left: '78%', delay: '1.2s', duration: '4.2s' },
  { top: '26%', left: '32%', delay: '2.4s', duration: '3.8s' },
  { top: '15%', left: '56%', delay: '0.7s', duration: '4.5s' },
  { top: '34%', left: '85%', delay: '1.9s', duration: '3.2s' },
  { top: '29%', left: '12%', delay: '3.1s', duration: '4.8s' },
];

const LANTERNS_DATA = [
  { left: '16%', delay: '0s', duration: '15s' },
  { left: '48%', delay: '5s', duration: '18s' },
  { left: '80%', delay: '2.5s', duration: '16s' },
];

const HEARTS_DATA = [
  { left: '10%', delay: '0s', duration: '13s', size: 'w-4 h-4' },
  { left: '22%', delay: '4.5s', duration: '15s', size: 'w-3 h-3' },
  { left: '76%', delay: '2s', duration: '14s', size: 'w-3.5 h-3.5' },
  { left: '88%', delay: '6s', duration: '12.5s', size: 'w-4 h-4' },
  { left: '14%', delay: '8.5s', duration: '16s', size: 'w-3 h-3' },
  { left: '82%', delay: '10s', duration: '14.5s', size: 'w-3 h-3' },
];

const THEMES = {
  crimson: {
    baseBg: '#160001',
    vignette: 'radial-gradient(circle at 50% 42%, #4a060a 0%, #260204 55%, #0d0001 100%)',
    wave1: 'radial-gradient(ellipse at 35% 45%, rgba(245, 158, 11, 0.22) 0%, rgba(124, 10, 17, 0.28) 45%, transparent 75%)',
    wave2: 'radial-gradient(ellipse at 70% 55%, rgba(254, 243, 199, 0.14) 0%, rgba(133, 12, 19, 0.32) 48%, transparent 78%)',
    artColor: 'text-amber-300',
    archBorder: 'border-amber-400/20',
  },
  emerald: {
    baseBg: '#02140c',
    vignette: 'radial-gradient(circle at 50% 42%, #064e3b 0%, #022c22 55%, #01120c 100%)',
    wave1: 'radial-gradient(ellipse at 35% 45%, rgba(251, 191, 36, 0.24) 0%, rgba(6, 95, 70, 0.3) 45%, transparent 75%)',
    wave2: 'radial-gradient(ellipse at 70% 55%, rgba(253, 224, 71, 0.16) 0%, rgba(4, 120, 87, 0.32) 48%, transparent 78%)',
    artColor: 'text-amber-300',
    archBorder: 'border-amber-300/25',
  },
  midnight: {
    baseBg: '#030712',
    vignette: 'radial-gradient(circle at 50% 42%, #1e1b4b 0%, #0f172a 55%, #020617 100%)',
    wave1: 'radial-gradient(ellipse at 35% 45%, rgba(251, 191, 36, 0.18) 0%, rgba(49, 46, 129, 0.3) 45%, transparent 75%)',
    wave2: 'radial-gradient(ellipse at 70% 55%, rgba(224, 231, 255, 0.14) 0%, rgba(30, 58, 138, 0.32) 48%, transparent 78%)',
    artColor: 'text-amber-200',
    archBorder: 'border-amber-200/20',
  },
  burgundy: {
    baseBg: '#1c030a',
    vignette: 'radial-gradient(circle at 50% 40%, #5c0a24 0%, #330413 55%, #140107 100%)',
    wave1: 'radial-gradient(ellipse at 30% 40%, rgba(253, 224, 71, 0.2) 0%, rgba(159, 18, 57, 0.28) 48%, transparent 78%)',
    wave2: 'radial-gradient(ellipse at 70% 60%, rgba(254, 243, 199, 0.16) 0%, rgba(136, 19, 55, 0.32) 50%, transparent 80%)',
    artColor: 'text-amber-200',
    archBorder: 'border-amber-300/25',
  },
};

/* Bridal Art 1: Hanging Traditional Jhumka Ornament */
function BridalJhumka({ className }) {
  return (
    <svg
      viewBox="0 0 80 180"
      className={`w-14 h-32 sm:w-20 sm:h-44 opacity-30 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      {/* Hanging Beaded Chain */}
      <line x1="40" y1="0" x2="40" y2="55" strokeDasharray="3 3" />
      <circle cx="40" cy="20" r="2.5" fill="currentColor" />
      <circle cx="40" cy="40" r="2.5" fill="currentColor" />
      {/* Top Floral Stud */}
      <circle cx="40" cy="65" r="9" />
      <circle cx="40" cy="65" r="3.5" fill="currentColor" />
      {/* Jhumka Bell Dome */}
      <path d="M18 115 C18 82, 62 82, 62 115 Z" />
      <path d="M24 103 L56 103" strokeDasharray="2 2" />
      <line x1="15" y1="115" x2="65" y2="115" strokeWidth="2" />
      {/* Dangling Pearl Drops */}
      {[20, 30, 40, 50, 60].map((x, idx) => (
        <g key={idx}>
          <line x1={x} y1="115" x2={x} y2={idx === 2 ? 142 : 134} />
          <circle cx={x} cy={idx === 2 ? 145 : 137} r="2.5" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

/* Bridal Art 2: Henna / Mehndi Paisley & Lotus Motif */
function BridalPaisley({ className }) {
  return (
    <svg
      viewBox="0 0 180 260"
      className={`w-36 h-52 sm:w-48 sm:h-72 animate-paisley ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      {/* Outer Paisley Curve */}
      <path d="M90 25 C145 45, 155 135, 110 195 C80 235, 30 215, 35 165 C40 120, 85 120, 75 75 C68 45, 80 30, 90 25 Z" />
      {/* Inner Henna Filigree */}
      <path
        d="M90 48 C128 65, 134 128, 102 175 C82 202, 50 188, 54 155 C58 125, 88 125, 82 90"
        strokeDasharray="3 3"
      />
      {/* Delicate Mehndi Dots & Petals */}
      <circle cx="95" cy="145" r="14" />
      <circle cx="95" cy="145" r="5" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, idx) => (
        <circle
          key={idx}
          cx={95 + 21 * Math.cos((deg * Math.PI) / 180)}
          cy={145 + 21 * Math.sin((deg * Math.PI) / 180)}
          r="2"
          fill="currentColor"
        />
      ))}
      {/* Trailing Vine Tendrils */}
      <path d="M75 215 Q55 240 30 235" />
      <path d="M110 195 Q135 220 155 205" />
    </svg>
  );
}

/* Bridal Art 3: Corner Floral Vine Ornament */
function CornerOrnament({ className }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-20 h-20 sm:w-28 sm:h-28 text-amber-300/60 animate-corner ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M5 95 L5 25 Q5 5 25 5 L95 5" />
      <path d="M12 85 L12 30 Q12 12 30 12 L85 12" strokeDasharray="3 3" />
      <path d="M5 45 Q28 45 28 28 Q45 28 45 5" />
      <circle cx="20" cy="20" r="3" fill="currentColor" />
      <circle cx="38" cy="12" r="1.5" fill="currentColor" />
      <circle cx="12" cy="38" r="1.5" fill="currentColor" />
    </svg>
  );
}

export default function BreezeBackground({
  theme = 'crimson',        // 'crimson' | 'emerald' | 'midnight' | 'burgundy'
  petalType = 'rose',       // 'rose' | 'marigold' | 'jasmine'
  showParticles = true,
  showPetals = true,
  showArch = true,
  showGarlands = true,      // Top swaying bridal flower garlands (Gajra/Haar)
  showJhumkas = true,       // Hanging swaying bridal jhumkas
  showPaisley = true,      // Side henna / mehndi paisley line-art
  showRings = true,        // Interlocked wedding rings drawing (great for RSVP/Hero)
  showStars = false,
  showLanterns = false,
  showHearts = false,
  showCorners = false,
}) {
  const activeTheme = THEMES[theme] || THEMES.crimson;

  const getPetalGradient = () => {
    if (petalType === 'marigold') {
      return 'radial-gradient(circle at 30% 30%, #fbbf24 0%, #d97706 65%, #92400e 100%)';
    }
    if (petalType === 'jasmine') {
      return 'radial-gradient(circle at 30% 30%, #ffffff 0%, #fef3c7 70%, #d97706 100%)';
    }
    return 'radial-gradient(circle at 30% 30%, #be123c 0%, #881337 60%, #4c0519 100%)';
  };

  return (
    <div
      style={{ backgroundColor: activeTheme.baseBg }}
      className="breeze-bg absolute inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {/* 1. Deep Royal Vignette Base */}
      <div style={{ background: activeTheme.vignette }} className="absolute inset-0" />

      {/* 2. Top Chandelier Warm Spotlight Rays */}
      <div
        style={{
          background:
            'conic-gradient(from 165deg at 50% -10%, transparent 0deg, rgba(251, 191, 36, 0.14) 15deg, transparent 30deg, rgba(254, 243, 199, 0.1) 45deg, transparent 60deg)',
        }}
        className="absolute -inset-x-20 top-0 h-full origin-top animate-light-beam blur-xl"
      />

      {/* 3. Drifting Breeze Light Waves */}
      <div
        style={{ background: activeTheme.wave1 }}
        className="absolute -inset-16 animate-breeze-wave blur-2xl"
      />
      <div
        style={{ background: activeTheme.wave2 }}
        className="absolute -inset-16 animate-breeze-wave-reverse blur-3xl"
      />

      {/* 4. Top Swaying Bridal Flower Garlands (Gajra / Toran) */}
      {showGarlands && (
        <svg
          viewBox="0 0 800 110"
          preserveAspectRatio="none"
          className={`absolute top-0 inset-x-0 w-full h-24 sm:h-28 opacity-35 animate-garland ${activeTheme.artColor}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          {/* Left & Right Draped Jasmine Garlands */}
          <path d="M0 5 Q200 75 400 12 Q600 75 800 5" />
          <path d="M0 15 Q200 92 400 22 Q600 92 800 15" strokeDasharray="4 6" />
          {/* Hanging Flower Buds along the Garland */}
          {[80, 140, 200, 260, 320, 480, 540, 600, 660, 720].map((x, idx) => {
            const dropY = idx % 2 === 0 ? 78 : 65;
            return (
              <g key={idx}>
                <line x1={x} y1="45" x2={x} y2={dropY} strokeDasharray="2 2" />
                <circle cx={x} cy={dropY + 4} r="3.5" fill="currentColor" />
              </g>
            );
          })}
        </svg>
      )}

      {/* 5. Hanging Swaying Bridal Jhumkas (Left & Right) */}
      {showJhumkas && (
        <>
          <BridalJhumka
            className={`absolute top-0 left-3 sm:left-8 animate-jhumka-left ${activeTheme.artColor}`}
          />
          <BridalJhumka
            className={`absolute top-0 right-3 sm:right-8 animate-jhumka-right ${activeTheme.artColor}`}
          />
        </>
      )}

      {/* 6. Henna / Mehndi Paisley Art on Left & Right Sides */}
      {showPaisley && (
        <>
          <BridalPaisley
            className={`absolute bottom-8 -left-6 sm:left-4 ${activeTheme.artColor}`}
          />
          <BridalPaisley
            className={`absolute bottom-8 -right-6 sm:right-4 scale-x-[-1] ${activeTheme.artColor}`}
          />
        </>
      )}

      {/* 7. Interlocked Wedding Rings Line-Art */}
      {showRings && (
        <svg
          viewBox="0 0 260 180"
          className={`absolute inset-0 m-auto w-64 h-44 sm:w-80 sm:h-56 animate-rings ${activeTheme.artColor}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <circle cx="105" cy="105" r="48" />
          <circle cx="155" cy="105" r="48" />
          <path d="M130 24 L144 38 L130 52 L116 38 Z" />
          <path d="M130 52 L130 66 M116 38 L102 38 M144 38 L158 38" />
        </svg>
      )}

      {/* 8. Twinkling Night Stars */}
      {showStars &&
        STARS_DATA.map((star, idx) => (
          <span
            key={idx}
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-amber-100 shadow-[0_0_10px_#fef3c7] animate-twinkle"
          />
        ))}

      {/* 9. Royal Mughal Arch Frame Border */}
      {showArch && (
        <div
          className={`absolute inset-4 sm:inset-8 rounded-t-full border ${activeTheme.archBorder} shadow-[inset_0_0_50px_rgba(251,191,36,0.08)]`}
        />
      )}

      {/* 10. Corner Floral Filigree Ornaments */}
      {showCorners && (
        <>
          <CornerOrnament className="absolute top-3 left-3" />
          <CornerOrnament className="absolute top-3 right-3 scale-x-[-1]" />
          <CornerOrnament className="absolute bottom-3 left-3 scale-y-[-1]" />
          <CornerOrnament className="absolute bottom-3 right-3 scale-[-1]" />
        </>
      )}

      {/* 11. Floating Golden Hearts */}
      {showHearts &&
        HEARTS_DATA.map((heart, idx) => (
          <svg
            key={idx}
            viewBox="0 0 24 24"
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
            }}
            className={`absolute bottom-0 text-amber-300/70 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] animate-heart ${heart.size}`}
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ))}

      {/* 12. Rising Warm Candle Lanterns */}
      {showLanterns &&
        LANTERNS_DATA.map((lantern, idx) => (
          <div
            key={idx}
            style={{
              left: lantern.left,
              animationDelay: lantern.delay,
              animationDuration: lantern.duration,
            }}
            className="absolute bottom-0 w-4 h-6 rounded-t-lg rounded-b-sm bg-gradient-to-t from-amber-600 via-amber-300 to-amber-100 shadow-[0_0_18px_rgba(251,191,36,0.85)] opacity-80 animate-lantern"
          />
        ))}

      {/* 13. Drifting Flower Petals */}
      {showPetals &&
        PETALS_DATA.map((petal, idx) => (
          <span
            key={idx}
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              background: getPetalGradient(),
            }}
            className={`absolute -top-6 rounded-tl-full rounded-br-full shadow-[0_4px_10px_rgba(0,0,0,0.6)] border border-amber-200/20 animate-petal ${petal.size}`}
          />
        ))}

      {/* 14. Floating Golden Dust Motes */}
      {showParticles &&
        GOLD_DUST.map((particle, idx) => (
          <span
            key={idx}
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
            className={`absolute rounded-full bg-amber-200/85 shadow-[0_0_8px_rgba(251,191,36,0.95)] blur-[0.4px] animate-dust ${particle.size}`}
          />
        ))}
    </div>
  );
}