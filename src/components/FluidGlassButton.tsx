import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import locationicon from "../assets/animations/locationicon.lottie?url";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

type TintColor = "clear" | "blue" | "purple" | "emerald";
type SurfaceTheme = "dark" | "light";

interface FluidGlassButtonProps {
  children?: React.ReactNode;
  tint?: TintColor;
  theme?: SurfaceTheme;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const TINT_CONFIG: Record<
  TintColor,
  { primaryBlob: string; secondaryBlob: string; glowColor: string }
> = {
  clear: {
    primaryBlob: "rgba(255, 255, 255, 0.45)",
    secondaryBlob: "rgba(210, 235, 255, 0.35)",
    glowColor: "rgba(255, 255, 255, 0.55)",
  },
  blue: {
    primaryBlob: "rgba(56, 189, 248, 0.55)",
    secondaryBlob: "rgba(99, 102, 241, 0.45)",
    glowColor: "rgba(125, 211, 252, 0.65)",
  },
  purple: {
    primaryBlob: "rgba(192, 132, 252, 0.55)",
    secondaryBlob: "rgba(244, 114, 182, 0.45)",
    glowColor: "rgba(216, 180, 254, 0.65)",
  },
  emerald: {
    primaryBlob: "rgba(52, 211, 153, 0.55)",
    secondaryBlob: "rgba(20, 184, 166, 0.45)",
    glowColor: "rgba(110, 231, 183, 0.65)",
  },
};

export function FluidGlassButton({
  children = "Open map",
  tint = "blue",
  theme = "dark",
  onClick,
}: FluidGlassButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const colors = TINT_CONFIG[tint];
  const isDark = theme === "dark";

  // Pointer coordinates for dynamic glass highlights
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 220, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 220, damping: 24 });

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  // Click ripple surge effect at exact pointer coordinates
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const newRipple = {
        id: Date.now(),
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setRipples((prev) => [...prev, newRipple]);
    }
    onClick?.(e);
  }

  const pointerHighlight = useMotionTemplate`radial-gradient(115px circle at ${smoothX}px ${smoothY}px, ${colors.glowColor}, transparent 75%)`;

  return (
    <>
      {/* SVG Liquid Refraction Filter for fluid glass warping */}
      <svg
        style={{ position: "absolute", width: 0, height: 0 }}
        aria-hidden="true"
      >
        <defs>
          <filter id="fluid-glass-refraction">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.025 0.045"
              numOctaves="2"
              seed="3"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                dur={isHovered ? "2.4s" : "6s"}
                values="0.025 0.045; 0.045 0.025; 0.025 0.045"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={isHovered ? "15" : "7"}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <motion.button
        ref={buttonRef}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "3px 15px",
          width: "fit-content",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          borderRadius: "9999px",
          color: "#D1D1D1",
          fontWeight: 600,
          fontSize: "28px",
          fontFamily:"var(--font-love)",
          letterSpacing: "0.02em",
          cursor: "pointer",
          background: isDark
            ? "#121063"
            : "rgba(255, 255, 255, 0.55)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          border: isDark
            ? "1px solid rgba(255, 255, 255, 0.35)"
            : "1px solid rgba(15, 23, 42, 0.16)",
          boxShadow: isDark
            ? "0 10px 30px rgba(0, 0, 0, 0.35), inset 0 1px 1.5px rgba(255, 255, 255, 0.7), inset 0 -2px 4px rgba(255, 255, 255, 0.15)"
            : "0 10px 25px rgba(15, 23, 42, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.9), inset 0 -2px 4px rgba(15, 23, 42, 0.06)",
        }}
      >
        {/* 1. Warped Fluid Liquid Blobs (Distorted by SVG Shader Filter) */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "-20%",
            filter: "url(#fluid-glass-refraction)",
            opacity: 0.9,
            pointerEvents: "none",
          }}
        >
          <motion.span
            animate={{
              x: ["-15%", "25%", "-15%"],
              y: ["-10%", "15%", "-10%"],
              rotate: [0, -120, 0],
            }}
            transition={{
              duration: isHovered ? 3.5 : 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: "10%",
              left: "15%",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${colors.primaryBlob} 0%, transparent 70%)`,
            }}
          />
          <motion.span
            animate={{
              x: ["20%", "-20%", "20%"],
              y: ["15%", "-15%", "15%"],
              rotate: [0, -120, 0],
            }}
            transition={{
              duration: isHovered ? 4 : 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              bottom: "5%",
              right: "15%",
              width: "130px",
              height: "130px",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${colors.secondaryBlob} 0%, transparent 70%)`,
            }}
          />
        </div>

        {/* 2. Floating Glass Particles */}
        {[
          { left: "22%", delay: 0, size: 3 },
          { left: "52%", delay: 1.1, size: 4 },
          { left: "78%", delay: 0.6, size: 2.5 },
        ].map((particle, index) => (
          <motion.span
            key={index}
            aria-hidden="true"
            animate={{
              y: [18, -22],
              opacity: [0, 0.85, 0],
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              bottom: "4px",
              left: particle.left,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: "50%",
              background: isDark
                ? "rgba(255, 255, 255, 0.9)"
                : "rgba(255, 255, 255, 1)",
              boxShadow: "0 0 6px rgba(255, 255, 255, 0.95)",
              pointerEvents: "none",
            }}
          />
        ))}

        {/* 3. Dynamic Hover Reflection Highlight */}
        <motion.span
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: pointerHighlight,
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.25s ease",
            pointerEvents: "none",
          }}
        />

        {/* 4. Click Ripple Surge Effect */}
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              aria-hidden="true"
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 4.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              onAnimationComplete={() =>
                setRipples((prev) =>
                  prev.filter((item) => item.id !== ripple.id)
                )
              }
              style={{
                position: "absolute",
                left: ripple.x - 25,
                top: ripple.y - 25,
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.15) 65%, transparent 100%)",
                pointerEvents: "none",
              }}
            />
          ))}
        </AnimatePresence>

        {/* Button Text */}

        <span
          style={{
            position: "relative",
            zIndex: 2,
            display: "inline-flex",
            alignItems: "center",
            // gap: "8px",
            textShadow: isDark ? "0 1px 4px rgba(0, 0, 0, 0.35)" : "none",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              position: "relative",
              zIndex: 2,
              width: "60px",
              height: "24px",
              flexShrink: 0,
            }}
          >
            <DotLottieReact
              src={locationicon}
              loop
              autoplay
              // style={{ width: "100%", height: "100%" }}
            />
          </span>
          {children}
        </span>
      </motion.button>
    </>
  );
}
