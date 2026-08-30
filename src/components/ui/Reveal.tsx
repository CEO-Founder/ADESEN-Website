"use client";

import { motion } from "framer-motion";

/**
 * Subtle slide-in on scroll. Deliberately animates position only (never
 * opacity) so content is always visible even if JavaScript fails to load
 * or the IntersectionObserver never fires (e.g. some crawlers/headless
 * renderers) — a fade-from-invisible approach would risk permanently
 * hidden content in those cases, which is unacceptable for an NGO site
 * that donors and government partners rely on for information.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 16 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
