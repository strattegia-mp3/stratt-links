"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappCTA } from "@/data/linksData";

export function WhatsAppCTA() {
  return (
    <motion.section
      className="w-full px-5"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.65, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.a
        href={whatsappCTA.url}
        target="_blank"
        rel="noopener noreferrer"
        /* Gradiente ajustado para o verde característico do WhatsApp com sombra correspondente */
        className="group relative flex items-center justify-between w-full px-4 py-3.5 rounded-2xl overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-[0_8px_24px_rgba(34,197,94,0.25)] dark:shadow-[0_8px_24px_rgba(34,197,94,0.15)]"
        whileHover={{ scale: 1.015, transition: { duration: 0.15 } }}
        whileTap={{ scale: 0.975 }}
      >
        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

        <div className="flex items-center gap-3 relative z-10">
          {/* Fundo do ícone com efeito Glass (vidro) */}
          <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-inner shadow-white/20">
            <MessageCircle size={17} className="text-white" />
          </div>
          <div>
            <p className="text-[13.5px] font-semibold leading-tight drop-shadow-sm">
              {whatsappCTA.label}
            </p>
            <p className="text-[11px] font-medium text-white/80">
              {whatsappCTA.sublabel}
            </p>
          </div>
        </div>

        {/* Badge Online Melhorado */}
        <div className="relative z-10 flex items-center gap-1.5 bg-black/15 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1">
          {/* Animação de pulso profissional */}
          <span className="relative flex w-1.5 h-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-green-100"></span>
          </span>
          <span className="text-[9px] font-bold uppercase tracking-widest text-white">
            Online
          </span>
        </div>
      </motion.a>
    </motion.section>
  );
}
