"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/linksData";
import { ThemeToggle } from "./ThemeToggle";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function Profile() {
  return (
    <motion.header
      className="relative flex flex-col items-center text-center pt-10 pb-6 px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Theme toggle — top right */}
      <motion.div
        className="absolute top-8 right-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <ThemeToggle />
      </motion.div>

      {/* Avatar */}
      <motion.div variants={itemVariants} className="relative mb-5">
        {/* Glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/30 via-blue-500/20 to-emerald-500/20 blur-xl scale-110 opacity-60 dark:opacity-40" />
        {/* Gradient border */}
        <div className="relative p-[2px] rounded-full bg-gradient-to-br from-violet-500 via-blue-400 to-emerald-400">
          <div className="rounded-full bg-zinc-100 dark:bg-zinc-900 p-[2px]">
            <Image
              src={profile.avatarUrl}
              alt={`Foto de ${profile.name}`}
              width={88}
              height={88}
              className="rounded-full object-cover w-[88px] h-[88px]"
              priority
              onError={(e) => {
                // Fallback to initials avatar
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `<div class="w-[88px] h-[88px] rounded-full bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">${profile.avatarFallback}</div>`;
                }
              }}
            />
          </div>
        </div>
        {/* Online indicator */}
        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-zinc-100 dark:border-zinc-900 shadow-lg" />
      </motion.div>

      {/* Name */}
      <motion.h1
        variants={itemVariants}
        className="text-[22px] font-bold tracking-tight text-content-main leading-none mb-1"
      >
        {profile.name}
      </motion.h1>

      {/* Username */}
      <motion.p
        variants={itemVariants}
        className="text-xs font-semibold text-brand-main tracking-wide mb-3"
      >
        {profile.username}
      </motion.p>

      {/* Bio */}
      <motion.p
        variants={itemVariants}
        className="text-sm text-content-muted max-w-[240px] leading-relaxed"
      >
        {profile.bio}
        <span className="text-content-main font-semibold">@{profile.role}</span>
      </motion.p>
    </motion.header>
  );
}
