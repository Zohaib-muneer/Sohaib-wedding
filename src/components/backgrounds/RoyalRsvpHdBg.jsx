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
  { x: "14%", y: "20%", size: 15, delay: 0.2, dur: 4.3 },
  { x: "86%", y: "22%", size: 17, delay: 1.5, dur: 4.9 },
  { x: "18%", y: "79%", size: 14, delay: 2.2, dur: 4.6 },
  { x: "82%", y: "77%", size: 16, delay: 0.9, dur: 5.2 },
  { x: "50%", y: "13%", size: 13, delay: 1.7, dur: 4.5 },
  { x: "50%", y: "87%", size: 13, delay: 0.4, dur: 5.0 },
  { x: "9%", y: "50%", size: 12, delay: 2.6, dur: 5.3 },
  { x: "91%", y: "50%", size: 12, delay: 1.1, dur: 4.8 },
];

const GOLD_DUST = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: `${((i * 27 + 15) % 92) + 4}%`,
  y: `${((i * 49 + 13) % 85) + 8}%`,
  size: (i % 3) + 2,
  dur: 5 + (i % 4) * 1.4,
  delay: (i % 5) * 0.7,
}));

export default function RoyalRsvpHdBg({ theme = "burgundy" }) {
  const uid = useId().replace(/:/g, "");
  const palette = THEME_PALETTES[theme] || THEME_PALETTES.burgundy;

  const foilId = `rsvp-foil-${uid}`;
  const ogeeId = `rsvp-ogee-${uid}`;
  const glowId = `rsvp-glow-${uid}`;

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

          {/* Ogee / Quatrefoil Moroccan Silk Trellis Pattern */}
          <pattern id={ogeeId} width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 30 0 C 38 15, 45 22, 60 30 C 45 38, 38 45, 30 60 C 22 45, 15 38, 0 30 C 15 22, 22 15, 30 0 Z"
              fill="none"
              stroke={palette.accent}
              strokeWidth="0.6"
              opacity="0.16"
            />
            <circle
              cx="30"
              cy="30"
              r="7"
              fill="none"
              stroke={palette.accent}
              strokeWidth="0.45"
              opacity="0.13"
            />
            <circle cx="0" cy="0" r="2" fill={palette.highlight} opacity="0.14" />
            <circle cx="60" cy="0" r="2" fill={palette.highlight} opacity="0.14" />
            <circle cx="0" cy="60" r="2" fill={palette.highlight} opacity="0.14" />
            <circle cx="60" cy="60" r="2" fill={palette.highlight} opacity="0.14" />
          </pattern>
        </defs>
      </svg>

      {/* 1. Ogee Quatrefoil Trellis Layer */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.65,
        }}
      >
        <rect width="100%" height="100%" fill={`url(#${ogeeId})`} />
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

      {/* 3. Rounded Royal Invitation Double Frame */}
      <div
        style={{
          position: "absolute",
          inset: "12px",
          borderRadius: "20px",
          border: `1px solid ${palette.accent}48`,
          boxShadow: `inset 0 0 28px ${palette.glowSecondary}`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "19px",
          borderRadius: "14px",
          border: `1px dashed ${palette.accent}38`,
        }}
      />

      {/* 4. 4-Corner Calligraphic Scrollwork & Quatrefoil Seals */}
      {corners.map((pos, idx) => (
        <motion.svg
          key={idx}
          viewBox="0 0 120 120"
          animate={{ opacity: [0.44, 0.76, 0.44] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
          style={{
            position: "absolute",
            width: "min(115px, 22vw)",
            height: "min(115px, 22vw)",
            transform: `rotate(${pos.rot}deg)`,
            ...pos,
          }}
        >
          {/* Concave Notched Invitation Corner */}
          <path
            d="M 10 105 L 10 34 Q 34 34 34 10 L 105 10"
            fill="none"
            stroke={`url(#${foilId})`}
            strokeWidth="1.5"
          />
          {/* S-Curve Scroll Flourishes */}
          <path
            d="M 18 82 C 18 52, 42 52, 42 32 C 42 18, 60 18, 82 18"
            fill="none"
            stroke={palette.accent}
            strokeWidth="1.1"
          />
          <circle
            cx="24"
            cy="24"
            r="9"
            fill={`${palette.accent}1C`}
            stroke={`url(#${foilId})`}
            strokeWidth="1.2"
          />
          <circle cx="24" cy="24" r="3" fill={palette.highlight} />
        </motion.svg>
      ))}

      {/* 5. Top Royal Ribbon Swag & Silk Tassel Brooches */}
      <svg
        viewBox="0 0 800 105"
        style={{
          position: "absolute",
          top: "12px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(740px, 90%)",
          height: "auto",
          opacity: 0.68,
        }}
      >
        <path
          d="M 45 8 Q 220 48 400 18 Q 580 48 755 8"
          fill="none"
          stroke={`url(#${foilId})`}
          strokeWidth="1.3"
        />
        <path
          d="M 85 8 Q 240 36 400 18 Q 560 36 715 8"
          fill="none"
          stroke={palette.accent}
          strokeWidth="0.7"
          strokeDasharray="3 4"
        />
        {[175, 400, 625].map((cx, i) => {
          const topY = cx === 400 ? 18 : 29;
          const len = cx === 400 ? 46 : 32;
          return (
            <motion.g
              key={i}
              animate={{ rotate: [-2, 2, -2] }}
              transition={{
                duration: 4.6 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              style={{ transformOrigin: `${cx}px ${topY}px`, transformBox: "view-box" }}
            >
              <circle cx={cx} cy={topY} r="3.5" fill={palette.highlight} />
              {/* Silk Tassel Skirt */}
              <path
                d={`M ${cx} ${topY + 4} L ${cx + 7} ${topY + len} L ${cx} ${topY + len - 5} L ${cx - 7} ${topY + len} Z`}
                fill={`${palette.accent}35`}
                stroke={`url(#${foilId})`}
                strokeWidth="1"
              />
            </motion.g>
          );
        })}
      </svg>

      {/* 6. Centerpiece 3-Tier Scalloped Wax-Seal & Quatrefoil Cartouche */}
      <div
        style={{
          position: "relative",
          width: "min(590px, 90vw)",
          height: "min(590px, 90vw)",
        }}
      >
        {/* Expanding Quatrefoil Halo Ripple */}
        <motion.div
          animate={{ scale: [0.5, 1.04], opacity: [0.42, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeOut" }}
          style={{
            position: "absolute",
            inset: "13%",
            borderRadius: "36%",
            border: `1.2px solid ${palette.accent}`,
          }}
        />

        {/* Tier 1: Outer 20-Scallop Royal Wax-Seal Ring (Clockwise) */}
        <motion.svg
          viewBox="0 0 500 500"
          animate={{ rotate: 360 }}
          transition={{ duration: 118, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.55 }}
        >
          <circle
            cx="250"
            cy="250"
            r="204"
            fill="none"
            stroke={`url(#${foilId})`}
            strokeWidth="1.2"
          />
          <circle
            cx="250"
            cy="250"
            r="194"
            fill="none"
            stroke={palette.accent}
            strokeWidth="0.9"
            strokeDasharray="3 6"
          />
          {Array.from({ length: 20 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 18} 250 250)`}>
              {/* Scalloped Seal Lobes */}
              <path
                d="M 226 48 Q 250 12 274 48"
                fill={`${palette.accent}18`}
                stroke={`url(#${foilId})`}
                strokeWidth="1.2"
              />
              <circle cx="250" cy="20" r="2.2" fill={palette.highlight} />
            </g>
          ))}
        </motion.svg>

        {/* Tier 2: Middle Interlocking Quatrefoil Cartouche (Counter-Clockwise) */}
        <motion.svg
          viewBox="0 0 500 500"
          animate={{ rotate: -360 }}
          transition={{ duration: 86, repeat: Infinity, ease: "linear" }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.58 }}
        >
          {/* Primary 4-Lobe Quatrefoil Frame */}
          <path
            d="M 250 74 C 304 74, 326 116, 344 156 C 384 174, 426 196, 426 250 C 426 304, 384 326, 344 344 C 326 384, 304 426, 250 426 C 196 426, 174 384, 156 344 C 116 326, 74 304, 74 250 C 74 196, 116 174, 156 156 C 174 116, 196 74, 250 74 Z"
            fill={`${palette.accent}12`}
            stroke={`url(#${foilId})`}
            strokeWidth="1.5"
          />
          {/* Rotated 45deg Companion Quatrefoil */}
          <path
            d="M 250 74 C 304 74, 326 116, 344 156 C 384 174, 426 196, 426 250 C 426 304, 384 326, 344 344 C 326 384, 304 426, 250 426 C 196 426, 174 384, 156 344 C 116 326, 74 304, 74 250 C 74 196, 116 174, 156 156 C 174 116, 196 74, 250 74 Z"
            fill="none"
            stroke={palette.accent}
            strokeWidth="1.1"
            strokeDasharray="5 4"
            transform="rotate(45 250 250)"
          />
          {Array.from({ length: 8 }).map((_, i) => (
            <circle
              key={i}
              cx="250"
              cy="66"
              r="2.6"
              fill={palette.highlight}
              transform={`rotate(${i * 45} 250 250)`}
            />
          ))}
        </motion.svg>

        {/* Tier 3: Inner Signet Diamond & Royal Crest Core */}
        <motion.svg
          viewBox="0 0 500 500"
          animate={{ rotate: 360, scale: [0.95, 1.05, 0.95] }}
          transition={{
            rotate: { duration: 100, repeat: Infinity, ease: "linear" },
            scale: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.62 }}
        >
          {/* 4-Point Royal Crest Diamonds */}
          {Array.from({ length: 4 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 90} 250 250)`}>
              <path
                d="M 250 128 C 270 162, 270 192, 250 218 C 230 192, 230 162, 250 128 Z"
                fill={`${palette.accent}22`}
                stroke={`url(#${foilId})`}
                strokeWidth="1.3"
              />
              <circle cx="250" cy="118" r="2.8" fill={palette.highlight} />
            </g>
          ))}
          {/* Inner Cut-Diamond Signet Medallion */}
          <polygon
            points="250,190 310,250 250,310 190,250"
            fill={`${palette.accent}18`}
            stroke={`url(#${foilId})`}
            strokeWidth="1.4"
          />
          <circle
            cx="250"
            cy="250"
            r="30"
            fill={`${palette.accent}28`}
            stroke={palette.highlight}
            strokeWidth="1.1"
          />
        </motion.svg>

        {/* 7. Faceted Diamond Sparkles */}
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
            <path
              d="M 10 0 L 12.2 7.8 L 20 10 L 12.2 12.2 L 10 20 L 7.8 12.2 L 0 10 L 7.8 7.8 Z"
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