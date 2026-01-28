"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    
    // Posição do mouse (Motion Values para performance)
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Física de mola para o anel (delay suave)
    const springConfig = { damping: 25, stiffness: 120 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16); // Centraliza (32px / 2)
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Detecta se é um elemento clicável
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a") ||
                target.getAttribute("role") === "button"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* O cursor padrão do sistema fica oculto via CSS global, 
                mas mantemos ele visível para fallback se o JS falhar. 
                Veja o passo 2. */}

            {/* 1. O Ponto Central (Segue rápido) */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorX, // Sem spring, segue instantâneo
                    y: cursorY,
                    translateX: "12px", // Ajuste fino
                    translateY: "12px"
                }}
            />

            {/* 2. O Anel Externo (Segue com atraso/mola) */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-purple-500 rounded-full pointer-events-none z-[9998]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1, // Cresce no hover
                    borderColor: isHovering ? "rgba(6, 182, 212, 0.5)" : "rgba(168, 85, 247, 0.5)", // Roxo -> Ciano
                    backgroundColor: isHovering ? "rgba(6, 182, 212, 0.1)" : "transparent",
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
            />
        </>
    );
}