"use client";

import { motion } from "framer-motion";
import { socialLinks, profile } from "@/data/linksData";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full flex flex-col items-center gap-4 pt-2 pb-10 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.2 }}
    >
      {/* Social links */}
      <div className="flex items-center gap-2">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-200 bg-surface border border-outline-subtle text-content-muted hover:text-content-main hover:border-outline-elevated"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={15} />
              <span className="sr-only">{social.label}</span>
            </motion.a>
          );
        })}
      </div>

      {/* Copyright */}
      <p className="text-[11px] text-content-muted text-center opacity-80">
        © {year} {profile.name} · Todos os direitos reservados
      </p>
    </motion.footer>
  );
}
