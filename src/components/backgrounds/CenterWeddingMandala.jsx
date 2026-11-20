import { motion } from "framer-motion";

const THEME_COLORS = {
  crimson: { accent: "#D49B35", glow: "rgba(190, 45, 70, 0.28)" },
  emerald: { accent: "#C9A227", glow: "rgba(25, 140, 95, 0.25)" },
  midnight: { accent: "#D6B878", glow: "rgba(70, 110, 210, 0.25)" },
  burgundy: { accent: "#C99E44", glow: "rgba(155, 35, 65, 0.28)" },
};

const SPARKLES = [
  { x: "22%", y: "65%", delay: 0, dur: 5 },
  { x: "78%", y: "60%", delay: 1.2, dur: 6 },
  { x: "35%", y: "28%", delay: 2.1, dur: 5.5 },
  { x: "68%", y: "30%", delay: 0.7, dur: 6.5 },
  { x: "50%", y: "78%", delay: 1.6, dur: 5.8 },
  { x: "18%", y: "42%", delay: 2.8, dur: 6.2 },
];

export default function CenterWeddingMandala({ theme = "crimson" }) {
  const { accent, glow } = THEME_COLORS[theme] || THEME_COLORS.crimson;

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
      <div
        style={{
          position: "relative",
          width: "min(560px, 88vw)",
          height: "min(560px, 88vw)",
        }}
      >
        {/* 1. Breathing Center Glow */}
        <motion.div
          animate={{ scale: [0.9, 1.12, 0.9], opacity: [0.45, 0.8, 0.45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: "12%",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`,
            filter: "blur(26px)",
          }}
        />

        {/* 2. Outer 16-Petal Lotus Ring (Clockwise) */}
        <motion.svg
          viewBox="0 0 500 500"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.48,
          }}
        >
          <circle
            cx="250"
            cy="250"
            r="228"
            fill="none"
            stroke={accent}
            strokeWidth="1.2"
            strokeDasharray="4 8"
          />
          <circle
            cx="250"
            cy="250"
            r="214"
            fill="none"
            stroke={accent}
            strokeWidth="1"
          />
          {Array.from({ length: 16 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 22.5} 250 250)`}>
              <path
                d="M 250 26 C 266 56, 266 94, 250 112 C 234 94, 234 56, 250 26 Z"
                fill={`${accent}1A`}
                stroke={accent}
                strokeWidth="1.3"
              />
              <circle
                cx="250"
                cy="18"
                r="2.5"
                fill={accent}
                transform="rotate(11.25 250 250)"
              />
            </g>
          ))}
        </motion.svg>

        {/* 3. Middle 12-Point Filigree Ring (Counter-Clockwise) */}
        <motion.svg
          viewBox="0 0 500 500"
          animate={{ rotate: -360 }}
          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.52,
          }}
        >
          <circle
            cx="250"
            cy="250"
            r="156"
            fill="none"
            stroke={accent}
            strokeWidth="1.4"
          />
          <circle
            cx="250"
            cy="250"
            r="146"
            fill="none"
            stroke={accent}
            strokeWidth="1"
            strokeDasharray="5 5"
          />
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 250 250)`}>
              <path
                d="M 250 92 Q 274 128 250 162 Q 226 128 250 92 Z"
                fill="none"
                stroke={accent}
                strokeWidth="1.3"
              />
              <circle cx="250" cy="84" r="2.8" fill={accent} />
            </g>
          ))}
        </motion.svg>

        {/* 4. Inner Mughal Star & Lotus Crest (Breathing + Slow Spin) */}
        <motion.svg
          viewBox="0 0 500 500"
          animate={{
            rotate: [0, 360],
            scale: [0.94, 1.05, 0.94],
          }}
          transition={{
            rotate: { duration: 110, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.55,
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 45} 250 250)`}>
              <path
                d="M 250 148 C 262 172, 262 195, 250 214 C 238 195, 238 172, 250 148 Z"
                fill={`${accent}22`}
                stroke={accent}
                strokeWidth="1.3"
              />
            </g>
          ))}
          <rect
            x="216"
            y="216"
            width="68"
            height="68"
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
          />
          <rect
            x="216"
            y="216"
            width="68"
            height="68"
            fill="none"
            stroke={accent}
            strokeWidth="1.5"
            transform="rotate(45 250 250)"
          />
          <circle
            cx="250"
            cy="250"
            r="22"
            fill={`${accent}20`}
            stroke={accent}
            strokeWidth="1.2"
          />
        </motion.svg>

        {/* 5. Floating Gold Shimmer Particles */}
        {SPARKLES.map((sp, i) => (
          <motion.div
            key={i}
            animate={{
              y: [15, -35, 15],
              opacity: [0, 0.9, 0],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: sp.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: sp.delay,
            }}
            style={{
              position: "absolute",
              left: sp.x,
              top: sp.y,
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: accent,
              boxShadow: `0 0 10px ${accent}`,
            }}
          />
        ))}
      </div>
    </div>
  );
}