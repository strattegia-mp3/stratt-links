"use client";

import { motion } from "framer-motion";
import { Profile } from "@/components/Profile";
import { LinksList } from "@/components/LinksList";
import { FeaturedProject } from "@/components/FeaturedProject";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center">
      {/* Background gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        {/* Top brand blob */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-brand-main opacity-20 dark:opacity-[0.05] blur-[80px]" />

        {/* Bottom blue blob */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500 opacity-20 dark:opacity-[0.04] blur-[80px]" />

        {/* Center success blob */}
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-success-main opacity-15 dark:opacity-[0.03] blur-[60px]" />
      </div>

      {/* Card wrapper */}
      <div className="relative w-full max-w-sm mx-auto flex flex-col gap-3">
        {/* Profile header */}
        <Profile />

        {/* Main links */}
        <LinksList />

        {/* Divider */}
        <motion.div
          className="px-5 w-full"
          initial={{ opacity: 0, scaleX: 0.95, y: 8 }}
          animate={{ opacity: 1, scaleX: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <div className="h-px bg-outline-subtle w-full" />
        </motion.div>

        {/* Featured project */}
        <FeaturedProject />

        {/* WhatsApp CTA */}
        <WhatsAppCTA />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
