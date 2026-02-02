"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useVelocity } from "framer-motion";

export function WarpCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [isHovering, setIsHovering] = useState(false);

    // Mola MUITO suave e "preguiçosa" para o efeito de arrasto pesado
    const springConfig = { damping: 20, stiffness: 100, mass: 2 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    // Velocidade para efeitos avançados (opcional, mas deixa mais legal)
    const velocityX = useVelocity(springX);
    const velocityY = useVelocity(springY);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = target.tagName === "BUTTON" || 
                                target.tagName === "A" || 
                                target.closest("button") || 
                                target.closest("a") ||
                                target.getAttribute("role") === "button";
            setIsHovering(!!isClickable);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        // Container geral que some no mobile
        <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
            
            {/* 1. A MIRA CENTRAL (Ponto preciso, segue instantâneo) */}
            <motion.div
                className="fixed top-0 left-0"
                style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
            >
                {/* Desenha um pequeno '+' com CSS */}
                <div className={`relative w-4 h-4 flex items-center justify-center transition-colors duration-300 ${isHovering ? 'text-neon-cyan' : 'text-white'}`}>
                    <div className="absolute w-full h-[1px] bg-current"></div>
                    <div className="absolute h-full w-[1px] bg-current"></div>
                </div>
            </motion.div>

            {/* 2. O HUD EXTERNO (Brackets giratórios com lag) */}
            <motion.div
                className="fixed top-0 left-0"
                style={{ 
                    x: springX, 
                    y: springY,
                    translateX: "-50%", 
                    translateY: "-50%" 
                }}
            >
                <motion.div
                    // Gira constantemente
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    // No hover, ele para de girar e trava no alvo, mudando de cor
                    style={{
                        width: isHovering ? 60 : 80, // Encolhe no hover para "travar a mira"
                        height: isHovering ? 60 : 80,
                    }}
                    className={`relative transition-all duration-300 ${isHovering ? 'text-neon-cyan drop-shadow-[0_0_10px_rgba(0,243,255,0.8)]' : 'text-purple-500/50'}`}
                >
                    {/* Usando SVG para desenhar os "Brackets" tecnológicos nos cantos */}
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Canto Superior Esquerdo */}
                        <path d="M30 10H10V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        {/* Canto Superior Direito */}
                        <path d="M70 10H90V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        {/* Canto Inferior Direito */}
                        <path d="M90 70V90H70" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        {/* Canto Inferior Esquerdo */}
                        <path d="M10 70V90H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </motion.div>
            </motion.div>
        </div>
    );
}