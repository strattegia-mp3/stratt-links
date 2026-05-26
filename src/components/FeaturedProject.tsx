"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { featuredProject } from "@/data/linksData";

export function FeaturedProject() {
  return (
    <motion.section
      className="w-full px-5"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Container */}
      <div className="relative overflow-hidden rounded-2xl border border-outline-elevated shadow-sm bg-surface-elevated backdrop-blur-md">
        {/* Shimmer estético */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/5 pointer-events-none" />

        <div className="relative p-4">
          <div className="flex items-start justify-between mb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center shadow-inner shadow-white/20">
                <Sparkles size={13} className="text-white" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-main">
                  Projeto em destaque
                </p>
                <h2 className="text-[13px] font-bold text-content-main leading-tight">
                  {featuredProject.title}
                </h2>
              </div>
            </div>
            <a
              href={featuredProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-lg bg-surface-icon border border-outline-subtle flex items-center justify-center text-brand-main hover:bg-brand-main hover:text-white transition-all duration-200 hover:shadow-md hover:shadow-violet-500/20"
            >
              <ArrowUpRight size={13} />
            </a>
          </div>

          <p className="text-[12px] text-content-muted leading-relaxed mb-3">
            {featuredProject.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {featuredProject.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-brand-soft border border-brand-outline text-brand-main"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
