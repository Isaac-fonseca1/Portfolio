"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Barra fina cobalto no topo da janela, traduzindo o progresso de scroll.
 * Usa spring pra deslocar com suavidade.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.4,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 inset-x-0 h-[2px] bg-accent z-[60] pointer-events-none"
    />
  );
}
