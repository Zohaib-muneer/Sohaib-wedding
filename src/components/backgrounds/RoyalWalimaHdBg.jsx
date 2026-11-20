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

const STAR_SPARKLES = [
  { x: "12%", y: "20%", size: 16, delay: 0.3, dur: 4.5 },
  { x: "88%", y: "22%", size: 17, delay: 1.2, dur: 5.0 },
  { x: "16%", y: "80%", size: 14, delay: 2.0, dur: 4.7 },
  { x: "84%", y: "78%", size: 16, delay: 0.7, dur: 5.1 },
  { x: "50%", y: "12%", size: 14, delay: 1.8, dur: 4.4 },
  { x: "50%", y: "88%", size: 14, delay: 0.6, dur: 4.9 },
  { x: "8%", y: "52%", size: 12, delay: 2.5, dur: 5.2 },
  { x: "92%", y: "48%", size: 12, delay: 1.0, dur: 4.8 },
];

const GOLD_DUST = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: `${((i * 31 + 13) % 92) + 4}%`,
  y: `${((i * 43 + 17) % 84) + 8}%`,
  size: (i % 3) + 2,
  dur: 5.2 + (i % 4) * 1.3,
  delay: (i % 5) * 0.65,
}));

export default function RoyalWalimaHdBg({ theme = "emerald" }) {
  const uid = useId().replace(/:/g, "");
  const palette = THEME_PALETTES[theme] || THEME_PALETTES.emerald;

  const foilId = `walima-foil-${uid}`;
  const starJaaliId = `walima-jaali-${uid}`;
  const glowId = `walima-glow-${uid}`;

  const corners = [
    { top: 8, left: 8, rot: 0 },
    { top: 8, right: 8, rot: 90 },
    { bottom: 8, right: 8, rot: 180 },
    { bottom: 8, left: 8, rot: 270 },
  ];

  const lanterns = [
    { cx: 150, topY: 22, chainLen: 28 },
    { cx: 275, topY: 16, chainLen: 42 },
    { cx: 400, topY: 34, chainLen: 48 },
    { cx: 525, topY: 16, chainLen: 42 },
    { cx: 650, topY: 22, chainLen: 28 },
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
      {/* Hidden Global SVG Definitions */}
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

          {/* 8-Point Islamic Star & Octagon Jaali Pattern */}
          <pattern id={starJaaliId} width="64" height="64" patternUnits="userSpaceOnUse">
            <polygon
              points="32,6 40,24 58,32 40,40 32,58 24,40 6,32 24,24"
              fill="none"
              stroke={palette.accent}
              strokeWidth="0.6"
              opacity="0.16"
            />
            <polygon
              points="32,14 45,19 50,32 45,45 32,50 19,45 14,32 19,19"
              fill="none"
              stroke={palette.accent}
              strokeWidth="0.45"
              opacity="0.13"
            />
            <circle cx="32" cy="32" r="2.2" fill={palette.highlight} opacity="0.16" />
            <circle cx="0" cy="0" r="1.8" fill={palette.highlight} opacity="0.14" />
            <circle cx="64" cy="0" r="1.8" fill={palette.highlight} opacity="0.14" />
            <circle cx="0" cy="64" r="1.8" fill={palette.highlight} opacity="0.14" />
            <circle cx="64" cy="64" r="1.8" fill={palette.highlight} opacity="0.14" />
          </pattern>
        </defs>
      </svg>

      {/* 1. Star & Octagon Jaali Texture */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.65,
        }}
      >
        <rect width="100%" height="100%" fill={`url(#${starJaaliId})`} />
      </svg>

      {/* 2. Soft Vignette & Atmospheric Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, transparent 42%, rgba(0, 0, 0, 0.44) 100%)",
        }}
      />

      <motion.div
        animate={{ scale: [0.92, 1.14, 0.92], opacity: [0.45, 0.85, 0.45] }}
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

      {/* 3. Beveled Royal Arch Inner Frames */}
      <div
        style={{
          position: "absolute",
          inset: "12px",
          border: `1px solid ${palette.accent}48`,
          boxShadow: `inset 0 0 28px ${palette.glowSecondary}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "20px",
          border: `1px dotted ${palette.accent}40`,
        }}
      />

      {/* 4. 4-Corner Mughal Arch & Arabesque Brackets */}
      {corners.map((pos, idx) => (
        <motion.svg
          key={idx}
          viewBox="0 0 130 130"
          animate={{ opacity: [0.45, 0.78, 0.45] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
          style={{
            position: "absolute",
            width: "min(120px, 23vw)",
            height: "min(120px, 23vw)",
            transform: `rotate(${pos.rot}deg)`,
            ...pos,
          }}
        >
          {/* Beveled Architectural Corner */}
          <path
            d="M 10 112 L 10 38 L 38 10 L 112 10"
            fill="none"
            stroke={`url(#${foilId})`}
            strokeWidth="1.6"
          />
          <path
            d="M 18 96 L 18 42 L 42 18 L 96 18"
            fill="none"
            stroke={palette.accent}
            strokeWidth="0.9"
            strokeDasharray="3 3"
          />
          {/* Pointed Mihrab Corner Leaf */}
          <path
            d="M 22 22 C 44 16, 62 24, 68 38 C 52 44, 44 52, 38 68 C 24 62, 16 44, 22 22 Z"
            fill={`${palette.accent}1A`}
            stroke={`url(#${foilId})`}
            strokeWidth="1.2"
          />
          <polygon
            points="32,26 38,32 32,38 26,32"
            fill={palette.highlight}
            opacity="0.75"
          />
        </motion.svg>
      ))}

      {/* 5. Top Scalloped Arch Festoon & Swaying Fanous Lanterns */}
      <svg
        viewBox="0 0 800 135"
        style={{
          position: "absolute",
          top: "12px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(760px, 92%)",
          height: "auto",
          opacity: 0.72,
        }}
      >
        <path
          d="M 30 8 Q 150 42 275 16 Q 400 54 525 16 Q 650 42 770 8"
          fill="none"
          stroke={`url(#${foilId})`}
          strokeWidth="1.3"
        />
        {lanterns.map(({ cx, topY, chainLen }, i) => {
          const y0 = topY + chainLen;
          return (
            <motion.g
              key={i}
              animate={{ rotate: [-2.2, 2.2, -2.2] }}
              transition={{
                duration: 4.8 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.28,
              }}
              style={{ transformOrigin: `${cx}px ${topY}px`, transformBox: "view-box" }}
            >
              <line
                x1={cx}
                y1={topY}
                x2={cx}
                y2={y0}
                stroke={palette.accent}
                strokeWidth="0.95"
              />
              <circle cx={cx} cy={topY + chainLen * 0.5} r="2" fill={palette.highlight} />
              {/* Mughal Fanous Lantern Silhouette */}
              <path
                d={`M ${cx} ${y0} Q ${cx + 6} ${y0 + 6} ${cx + 8} ${y0 + 10} L ${cx + 11} ${y0 + 22} L ${cx + 6} ${y0 + 34} L ${cx} ${y0 + 40} L ${cx - 6} ${y0 + 34} L ${cx - 11} ${y0 + 22} L ${cx - 8} ${y0 + 10} Q ${cx - 6} ${y0 + 6} ${cx} ${y0} Z`}
                fill={`${palette.highlight}30`}
                stroke={`url(#${foilId})`}
                strokeWidth="1.1"
              />
              <circle cx={cx} cy={y0 + 22} r="2.6" fill={palette.highlight} opacity="0.85" />
            </motion.g>
          );
        })}
      </svg>

      {/* 6. Centerpiece 3-Tier Octagonal Rub-el-Hizb & Mihrab Crest */}
      <div
        style={{
          position: "relative",
          width: "min(590px, 90vw)",
          height: "min(590px, 90vw)",
        }}
      >
        {/* Expanding Octagonal Halo Ripple */}
        <motion.div
          animate={{ scale: [0.52, 1.04], opacity: [0.42, 0], rotate: [22.5, 22.5] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeOut" }}
          style={{
            position: "absolute",
            inset: "14%",
            borderRadius: "18%",
            border: `1.2px solid ${palette.accent}`,
          }}
        />

        {/* Tier 1: Outer 12-Arch Scalloped Mihrab Dome Ring (Clockwise) */}
        <motion.svg
          viewBox="0 0 500 500"
          animate={{ rotate: 360 }}
          transition={{ duration: 130, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.54 }}
        >
          <circle
            cx="250"
            cy="250"
            r="234"
            fill="none"
            stroke={`url(#${foilId})`}
            strokeWidth="1.1"
            strokeDasharray="2 6"
          />
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 250 250)`}>
              {/* Pointed Mughal Arch Dome */}
              <path
                d="M 250 18 Q 278 44 270 78 L 250 92 L 230 78 Q 222 44 250 18 Z"
                fill={`${palette.accent}16`}
                stroke={`url(#${foilId})`}
                strokeWidth="1.2"
              />
              <circle cx="250" cy="11" r="2.3" fill={palette.highlight} />
            </g>
          ))}
        </motion.svg>

        {/* Tier 2: Middle 8-Point Rub-el-Hizb Octagram Lattice (Counter-Clockwise) */}
        <motion.svg
          viewBox="0 0 500 500"
          animate={{ rotate: -360 }}
          transition={{ duration: 92, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.58 }}
        >
          {/* Overlapping Chamfered Squares forming Islamic 8-Point Star */}
          <rect
            x="126"
            y="126"
            width="248"
            height="248"
            rx="14"
            fill={`${palette.accent}0E`}
            stroke={`url(#${foilId})`}
            strokeWidth="1.4"
          />
          <rect
            x="126"
            y="126"
            width="248"
            height="248"
            rx="14"
            fill={`${palette.accent}0E`}
            stroke={`url(#${foilId})`}
            strokeWidth="1.4"
            transform="rotate(45 250 250)"
          />
          <rect
            x="144"
            y="144"
            width="212"
            height="212"
            rx="10"
            fill="none"
            stroke={palette.accent}
            strokeWidth="0.9"
            strokeDasharray="4 4"
          />
          <rect
            x="144"
            y="144"
            width="212"
            height="212"
            rx="10"
            fill="none"
            stroke={palette.accent}
            strokeWidth="0.9"
            strokeDasharray="4 4"
            transform="rotate(45 250 250)"
          />
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={i}
              cx="250"
              cy="64"
              r="2.8"
              fill={palette.highlight}
              transform={`rotate(${i * 45} 250 250)`}
            />
          ))}
        </motion.svg>

        {/* Tier 3: Inner Octagonal Jewel & 8-Facet Starburst Core */}
        <motion.svg
          viewBox="0 0 500 500"
          animate={{ rotate: 360, scale: [0.95, 1.05, 0.95] }}
          transition={{
            rotate: { duration: 105, repeat: Infinity, ease: "linear" },
            scale: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.62 }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 45} 250 250)`}>
              <polygon
                points="250,140 264,178 250,210 236,178"
                fill={`${palette.accent}22`}
                stroke={`url(#${foilId})`}
                strokeWidth="1.2"
              />
            </g>
          ))}
          {/* Central Faceted Octagon Core */}
          <polygon
            points="250,212 277,223 288,250 277,277 250,288 223,277 212,250 223,223"
            fill={`${palette.accent}26`}
            stroke={`url(#${foilId})`}
            strokeWidth="1.5"
          />
          <polygon
            points="250,226 267,233 274,250 267,267 250,274 233,267 226,250 233,233"
            fill="none"
            stroke={palette.highlight}
            strokeWidth="1"
          />
        </motion.svg>

        {/* 7. 8-Point Starburst Sparkles */}
        {STAR_SPARKLES.map((sp, i) => (
          <motion.svg
            key={i}
            viewBox="0 0 24 24"
            animate={{
              scale: [0.55, 1.25, 0.55],
              opacity: [0.18, 1, 0.18],
              rotate: [0, 22.5, 0],
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
            <path
              d="M 12 0 L 14 9 L 21 3 L 15 10 L 24 12 L 15 14 L 21 21 L 14 15 L 12 24 L 10 15 L 3 21 L 9 14 L 0 12 L 9 10 L 3 3 L 10 9 Z"
              fill={palette.highlight}
            />
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