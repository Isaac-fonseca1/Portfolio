"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Preloader() {
    const [count, setCount] = useState(0);

    // Simula um carregamento de 0% a 100%
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Aumenta aleatoriamente para parecer real
                return prev + Math.floor(Math.random() * 10) + 1;
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
           
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#030014] overflow-hidden"
        >
            
            <div className="absolute inset-0 bg-grid-tech opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 blur-3xl" />
            
            <div className="relative flex items-center justify-center scale-[0.8] md:scale-100">
       
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute w-64 h-64 rounded-full border-[1px] border-cyan-500/30 border-t-cyan-500 border-r-transparent shadow-[0_0_30px_rgba(0,243,255,0.2)]"
                />
                 {/* --- Anel Médio (Roxo - Médio, direção oposta) --- */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                    className="absolute w-48 h-48 rounded-full border-[2px] border-purple-500/40 border-b-purple-500 border-l-transparent shadow-[0_0_30px_rgba(176,0,255,0.3)]"
                />
                 {/* --- Anel Interno (Azul - Rápido) --- */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute w-32 h-32 rounded-full border-[3px] border-blue-500/50 border-l-blue-400 border-r-transparent shadow-[0_0_40px_rgba(59,130,246,0.4)]"
                />

                {/* --- Núcleo Central Pulsante --- */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 flex items-center justify-center w-20 h-20 bg-[#030014] rounded-full border border-white/10 shadow-[inset_0_0_20px_rgba(176,0,255,0.5)]"
                >
                    {/* Obriga o número a ter 3 dígitos para não pular o layout */}
                    <span className="text-xl font-mono font-bold text-white tracking-widest">
                        {Math.min(count, 100).toString().padStart(3, '0')}
                    </span>
                    <span className="text-xs text-purple-400 absolute -bottom-6 font-mono tracking-[0.2em]">
                        SYSTEM INIT
                    </span>
                </motion.div>

                {/* Partículas de Energia (Satélites) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="absolute w-56 h-56"
                >
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full blur-[2px] shadow-[0_0_10px_#00f3ff]" />
                </motion.div>
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute w-40 h-40"
                >
                    <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full blur-[3px] shadow-[0_0_15px_#b000ff]" />
                </motion.div>
            </div>

            {/* Barra de Progresso Inferior */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${count}%` }}
                />
            </div>
        </motion.div>
    );
}