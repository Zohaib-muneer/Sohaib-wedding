import { useId } from "react";
import { motion } from "framer-motion";

const THEME_PALETTES = {
  crimson: {
    foil: ["#AA771C", "#FCF6BA", "#D49B35", "#FFF4C2", "#9A6B16"],
    accent: "#E2AF4A",
    highlight: "#FFF3C4",
    glowPrimary: "rgba(195, 35, 65, 0.34)",
    glowSecondary: "rgba(212, 155, 53, 0.20)",
  },
  emerald: {
    foil: ["#9C7A1C", "#FFF4B8", "#C9A227", "#FEF0B8", "#856514"],
    accent: "#D4AF37",
    highlight: "#FFF6CC",
    glowPrimary: "rgba(16, 145, 98, 0.32)",
    glowSecondary: "rgba(201, 162, 39, 0.22)",
  },
  midnight: {
    foil: ["#8E9BAE", "#FFFFFF", "#D6B878", "#F1F5F9", "#7C8BA1"],
    accent: "#E2C785",
    highlight: "#FFFFFF",
    glowPrimary: "rgba(65, 105, 225, 0.32)",
    glowSecondary: "rgba(148, 163, 184, 0.20)",
  },
  burgundy: {
    foil: ["#A66E58", "#FFE8DC", "#E09F87", "#FFF0E8", "#8A5440"],
    accent: "#E4A88E",
    highlight: "#FFF0E5",
    glowPrimary: "rgba(160, 28, 72, 0.34)",
    glowSecondary: "rgba(228, 168, 142, 0.20)",
  },
};

const DIAMOND_SPARKLES = [
  { x: "14%", y: "22%", size: 15, delay: 0.2, dur: 4.4 },
  { x: "86%", y: "24%", size: 17, delay: 1.4, dur: 4.9 },
  { x: "18%", y: "78%", size: 14, delay: 2.1, dur: 4.6 },
  { x: "82%", y: "76%", size: 16, delay: 0.8, dur: 5.2 },
  { x: "50%", y: "14%", size: 13, delay: 1.9, dur: 4.5 },
  { x: "50%", y: "86%", size: 13, delay: 0.5, dur: 5.0 },
  { x: "9%", y: "50%", size: 11, delay: 2.7, dur: 5.3 },
  { x: "91%", y: "50%", size: 11, delay: 1.1, dur: 4.8 },
];

const GOLD_DUST = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: `${(i * 29 + 11) % 92 + 4}%`,
  y: `${(i * 47 + 15) % 85 + 8}%`,
  size: (i % 3) + 2,
  dur: 5 + (i % 4) * 1.4,
  delay: (i % 5) * 0.7,
}));

export default function RoyalMughalHdBg({ theme = "crimson" }) {
  const uid = useId().replace(/:/g, "");
  const palette = THEME_PALETTES[theme] || THEME_PALETTES.crimson;

  const foilId = `foil-${uid}`;
  const jaaliId = `jaali-${uid}`;
  const glowId = `glow-${uid}`;

  const corners = [
    { top: 8, left: 8, rot: 0 },
    { top: 8, right: 8, rot: 90 },
    { bottom: 8, right: 8, rot: 180 },
    { bottom: 8, left: 8, rot: 270 },
  ];

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* Hidden Global SVG Definitions for Metallic Foil & Jaali Texture */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id={foilId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.foil[0]} />
            <stop offset="25%" stopColor={palette.foil[1]} />
            <stop offset="50%" stopColor={palette.foil[2]} />
            <stop offset="75%" stopColor={palette.foil[3]} />
            <stop offset="100%" stopColor={palette.foil[4]} />
          </linearGradient>

          <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Seamless Mughal Jaali Lattice Pattern */}
          <pattern id={jaaliId} width="56" height="56" patternUnits="userSpaceOnUse">
            <path
              d="M 28 0 L 56 28 L 28 56 L 0 28 Z"
              fill="none"
              stroke={palette.accent}
              strokeWidth="0.6"
              opacity="0.16"
            />
            <circle
              cx="28"
              cy="28"
              r="7"
              fill="none"
              stroke={palette.accent}
              strokeWidth="0.5"
              opacity="0.14"
            />
            <circle cx="0" cy="0" r="2" fill={palette.highlight} opacity="0.15" />
            <circle cx="56" cy="0" r="2" fill={palette.highlight} opacity="0.15" />
            <circle cx="0" cy="56" r="2" fill={palette.highlight} opacity="0.15" />
            <circle cx="56" cy="56" r="2" fill={palette.highlight} opacity="0.15" />
          </pattern>
        </defs>
      </svg>

      {/* 1. Full-Card HD Mughal Jaali Texture Layer */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.65,
        }}
      >
        <rect width="100%" height="100%" fill={`url(#${jaaliId})`} />
      </svg>

      {/* 2. Soft Vignette & Multi-Layered Atmospheric Glows */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, transparent 42%, rgba(0, 0, 0, 0.42) 100%)",
        }}
      />

      <motion.div
        animate={{ scale: [0.92, 1.15, 0.92], opacity: [0.45, 0.85, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "min(520px, 85vw)",
          height: "min(520px, 85vw)",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${palette.glowPrimary} 0%, ${palette.glowSecondary} 45%, transparent 72%)`,
          filter: "blur(32px)",
        }}
      />

      {/* 3. Crisp Inner Embossed Double Frame */}
      <div
        style={{
          position: "absolute",
          inset: "12px",
          border: `1px solid ${palette.accent}45`,
          boxShadow: `inset 0 0 28px ${palette.glowSecondary}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "18px",
          border: `1px dashed ${palette.accent}35`,
        }}
      />

      {/* 4. 4-Corner High-Detail Paisley Medallions (Never Stretch!) */}
      {corners.map((pos, idx) => (
        <motion.svg
          key={idx}
          viewBox="0 0 120 120"
          animate={{ opacity: [0.42, 0.72, 0.42] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
          style={{
            position: "absolute",
            width: "min(115px, 22vw)",
            height: "min(115px, 22vw)",
            transform: `rotate(${pos.rot}deg)`,
            ...pos,
          }}
        >
          <path d="M 10 105 L 10 22 Q 10 10 22 10 L 105 10" fill="none" stroke={`url(#${foilId})`} strokeWidth="1.6" />
          <path d="M 18 85 L 18 26 Q 18 18 26 18 L 85 18" fill="none" stroke={palette.accent} strokeWidth="0.9" strokeDasharray="3 4" />
          {/* Ornate Paisley Curl */}
          <path
            d="M 22 22 Q 66 20 76 48 Q 80 66 60 72 Q 42 76 40 56 Q 39 42 54 44"
            fill={`${palette.accent}1A`}
            stroke={`url(#${foilId})`}
            strokeWidth="1.3"
          />
          {/* Corner Lotus Accent */}
          <path d="M 20 20 L 38 26 L 26 38 Z" fill={palette.highlight} opacity="0.6" />
          <circle cx="24" cy="24" r="3" fill={palette.highlight} />
        </motion.svg>
      ))}

      {/* 5. Top Swaying Pearl & Crystal Drop Festoons */}
      <svg
        viewBox="0 0 800 110"
        style={{
          position: "absolute",
          top: "12px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(760px, 92%)",
          height: "auto",
          opacity: 0.65,
        }}
      >
        <path d="M 40 6 Q 220 56 400 14 Q 580 56 760 6" fill="none" stroke={`url(#${foilId})`} strokeWidth="1.2" />
        {[120, 220, 310, 490, 580, 680].map((cx, i) => (
          <motion.g
            key={i}
            animate={{ rotate: [-2.5, 2.5, -2.5] }}
            transition={{ duration: 4.5 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
            style={{ transformOrigin: `${cx}px 24px`, transformBox: "view-box" }}
          >
            <line x1={cx} y1="22" x2={cx} y2={i % 2 === 0 ? 58 : 70} stroke={palette.accent} strokeWidth="0.9" />
            <circle cx={cx} cy={i % 2 === 0 ? 40 : 46} r="2" fill={palette.highlight} />
            {/* Faceted Crystal Drop */}
            <path
              d={`M ${cx} ${i % 2 === 0 ? 58 : 70} L ${cx + 5} ${i % 2 === 0 ? 68 : 80} L ${cx} ${i % 2 === 0 ? 78 : 90} L ${cx - 5} ${i % 2 === 0 ? 68 : 80} Z`}
              fill={`${palette.highlight}70`}
              stroke={`url(#${foilId})`}
              strokeWidth="1"
            />
          </motion.g>
        ))}
      </svg>

      {/* 6. Centerpiece 3-Tier Embossed Gold-Foil Royal Crest */}
      <div
        style={{
          position: "relative",
          width: "min(590px, 90vw)",
          height: "min(590px, 90vw)",
        }}
      >
        {/* Expanding Luxury Halo Ripple */}
        <motion.div
          animate={{ scale: [0.5, 1.05], opacity: [0.4, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeOut" }}
          style={{
            position: "absolute",
            inset: "10%",
            borderRadius: "50%",
            border: `1.2px solid ${palette.accent}`,
          }}
        />

        {/* Tier 1: Outer 24-Petal Royal Lotus Ring (Clockwise) */}
        <motion.svg
          viewBox="0 0 500 500"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.54 }}
        >
          <circle cx="250" cy="250" r="232" fill="none" stroke={`url(#${foilId})`} strokeWidth="1.2" strokeDasharray="3 7" />
          <circle cx="250" cy="250" r="220" fill="none" stroke={`url(#${foilId})`} strokeWidth="1" />
          {Array.from({ length: 24 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 15} 250 250)`}>
              <path
                d="M 250 18 C 260 44, 260 72, 250 88 C 240 72, 240 44, 250 18 Z"
                fill={`${palette.accent}18`}
                stroke={`url(#${foilId})`}
                strokeWidth="1.1"
              />
              {i % 2 === 0 && (
                <circle cx="250" cy="11" r="2.2" fill={palette.highlight} transform="rotate(7.5 250 250)" />
              )}
            </g>
          ))}
        </motion.svg>

        {/* Tier 2: Middle 16-Point Shamseh Sunburst (Counter-Clockwise) */}
        <motion.svg
          viewBox="0 0 500 500"
          animate={{ rotate: -360 }}
          transition={{ duration: 85, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.56 }}
        >
          <circle cx="250" cy="250" r="168" fill="none" stroke={`url(#${foilId})`} strokeWidth="1.4" />
          <circle cx="250" cy="250" r="158" fill="none" stroke={palette.accent} strokeWidth="0.9" strokeDasharray="4 4" />
          {Array.from({ length: 16 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 22.5} 250 250)`}>
              <path
                d="M 250 78 Q 266 112 250 146 Q 234 112 250 78 Z"
                fill={`${palette.accent}14`}
                stroke={`url(#${foilId})`}
                strokeWidth="1.2"
              />
              <circle cx="250" cy="70" r="2.4" fill={palette.highlight} />
            </g>
          ))}
        </motion.svg>

        {/* Tier 3: Inner Mughal Khatam Star & Pearl Core (Breathing + Slow Spin) */}
        <motion.svg
          viewBox="0 0 500 500"
          animate={{ rotate: 360, scale: [0.95, 1.05, 0.95] }}
          transition={{
            rotate: { duration: 100, repeat: Infinity, ease: "linear" },
            scale: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.6 }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 45} 250 250)`}>
              <path
                d="M 250 132 C 264 162, 264 190, 250 212 C 236 190, 236 162, 250 132 Z"
                fill={`${palette.accent}20`}
                stroke={`url(#${foilId})`}
                strokeWidth="1.3"
              />
              <circle cx="250" cy="122" r="2.5" fill={palette.highlight} />
            </g>
          ))}
          <rect x="210" y="210" width="80" height="80" fill="none" stroke={`url(#${foilId})`} strokeWidth="1.4" />
          <rect
            x="210"
            y="210"
            width="80"
            height="80"
            fill="none"
            stroke={`url(#${foilId})`}
            strokeWidth="1.4"
            transform="rotate(45 250 250)"
          />
          <circle cx="250" cy="250" r="24" fill={`${palette.accent}25`} stroke={palette.highlight} strokeWidth="1.1" />
        </motion.svg>

        {/* 7. Faceted Diamond Sparkles (With Glow Filter) */}
        {DIAMOND_SPARKLES.map((sp, i) => (
          <motion.svg
            key={i}
            viewBox="0 0 20 20"
            animate={{
              scale: [0.5, 1.3, 0.5],
              opacity: [0.15, 1, 0.15],
              rotate: [0, 45, 0],
            }}
            transition={{ duration: sp.dur, repeat: Infinity, ease: "easeInOut", delay: sp.delay }}
            style={{
              position: "absolute",
              left: sp.x,
              top: sp.y,
              width: `${sp.size}px`,
              height: `${sp.size}px`,
              filter: `url(#${glowId})`,
            }}
          >
            <path d="M 10 0 L 12.2 7.8 L 20 10 L 12.2 12.2 L 10 20 L 7.8 12.2 L 0 10 L 7.8 7.8 Z" fill={palette.highlight} />
          </motion.svg>
        ))}
      </div>

      {/* 8. Floating Ambient Gold Shimmer Dust */}
      {GOLD_DUST.map((d) => (
        <motion.div
          key={d.id}
          animate={{
            y: [16, -34, 16],
            opacity: [0, 0.85, 0],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{ duration: d.dur, repeat: Infinity, ease: "easeInOut", delay: d.delay }}
          style={{
            position: "absolute",
            left: d.x,
            top: d.y,
            width: `${d.size}px`,
            height: `${d.size}px`,
            borderRadius: "50%",
            backgroundColor: palette.highlight,
            boxShadow: `0 0 8px ${palette.accent}`,
          }}
        />
      ))}
    </div>
  );
}