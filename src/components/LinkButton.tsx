"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { LinkItem } from "@/data/linksData";

interface LinkButtonProps {
  item: LinkItem;
  index: number;
}

const variantStyles = {
  primary:
    "bg-gradient-to-r from-violet-600 to-blue-600 text-white border-violet-600/40 dark:border-violet-400/30 shadow-[0_4px_20px_rgba(139,92,246,0.2)] dark:shadow-[0_4px_24px_rgba(139,92,246,0.15)]",
  secondary:
    "bg-surface border-outline-subtle text-content-main backdrop-blur-sm",
  accent: "bg-success-soft border-success-outline text-success-main",
};

const badgeStyles = {
  primary: "bg-white/20 text-white",
  secondary: "bg-brand-soft text-brand-main",
  accent: "bg-success-soft text-success-main",
};

export function LinkButton({ item, index }: LinkButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 20, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-20, 20], [1, -1]);
  const rotateY = useTransform(x, [-20, 20], [-1, 1]);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const Icon = item.icon;

  return (
    <motion.a
      ref={ref}
      href={item.url}
      target={item.isExternal ? "_blank" : undefined}
      rel={item.isExternal ? "noopener noreferrer" : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        group relative flex items-center gap-3.5 w-full px-4 py-3.5
        rounded-2xl border transition-shadow duration-300 isolate
        ${variantStyles[item.variant]}
      `}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1 + index * 0.05,
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        scale: 1.01,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      whileTap={{ scale: 0.985 }}
    >
      {/* Icon container */}
      <div
        style={{ transform: "translateZ(10px)" }}
        className={`
          flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center
          transition-transform duration-300 ease-out group-hover:scale-105
          ${item.variant === "primary" ? "bg-white/15 backdrop-blur-sm border border-white/10" : "bg-surface-icon"}
        `}
      >
        <Icon
          size={17}
          className={
            item.variant === "primary" ? "text-white" : "text-content-muted"
          }
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0" style={{ transform: "translateZ(5px)" }}>
        <div className="flex items-center gap-2">
          <span className="text-[13.5px] font-semibold leading-tight truncate">
            {item.label}
          </span>
          {item.badge && (
            <span
              className={`
                text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full flex-shrink-0
                ${badgeStyles[item.variant]}
              `}
            >
              {item.badge}
            </span>
          )}
        </div>
        {item.description && (
          <p
            className={`
              text-[11px] mt-0.5 truncate
              ${item.variant === "primary" ? "text-white/85" : "text-content-muted"}
            `}
          >
            {item.description}
          </p>
        )}
      </div>

      {/* Arrow */}
      <ExternalLink
        size={13}
        style={{ transform: "translateZ(10px)" }}
        className={`
          flex-shrink-0 opacity-40 group-hover:opacity-80 transition-all duration-300 ease-out
          group-hover:translate-x-0.5 group-hover:-translate-y-0.5
          ${item.variant === "primary" ? "text-white" : "text-content-muted"}
        `}
      />
    </motion.a>
  );
}
