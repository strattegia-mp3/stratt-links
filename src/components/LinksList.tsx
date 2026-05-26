"use client";

import { motion } from "framer-motion";
import { LinkButton } from "./LinkButton";
import { mainLinks } from "@/data/linksData";

export function LinksList() {
  return (
    <motion.section
      className="w-full px-5 flex flex-col gap-2.5"
      initial="hidden"
      animate="visible"
    >
      {mainLinks.map((item, index) => (
        <LinkButton key={item.id} item={item} index={index} />
      ))}
    </motion.section>
  );
}
