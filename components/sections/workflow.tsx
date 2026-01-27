"use client";

import React from "react";
import { Section } from "../layout/Section";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { PenTool, Code, Container, Rocket } from "lucide-react";

export function Workflow() {
    const { t } = useLanguage();

    const icons = [PenTool, Code, Container, Rocket];

    return (
        <Section id="workflow" className="py-24 relative">
             {/* Fundo Decorativo */}
            <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />

            <div className="text-center mb-20">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                >
                    {t.workflow.title} <span className="text-neon-cyan">{t.workflow.highlight}</span>
                </motion.h2>
                <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                    {t.workflow.subtitle}
                </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Linha Central Conectora (Vertical) */}
                <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2" />

                <div className="space-y-12 md:space-y-24">
                    {t.workflow.steps.map((step, index) => {
                        const Icon = icons[index];
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center md:justify-between ${
                                    isEven ? "flex-row" : "flex-row md:flex-row-reverse"
                                }`}
                            >
                                {/* O Ícone Central (A "Joia" da Timeline) */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-neon-cyan/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] z-10">
                                    <div className="w-2.5 h-2.5 rounded-full bg-neon-cyan animate-pulse" />
                                </div>

                                {/* O Card de Conteúdo */}
                                <div className="ml-12 md:ml-0 md:w-[45%]">
                                    <div className="group relative p-6 bg-zinc-900/40 border border-white/5 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:border-neon-cyan/30">
                                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <Icon size={40} />
                                        </div>
                                        
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-neon-cyan font-mono text-xs font-bold tracking-widest uppercase bg-cyan-500/10 px-2 py-1 rounded">
                                                Step 0{index + 1}
                                            </span>
                                            <Icon size={18} className="text-zinc-400 md:hidden" />
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Espaço vazio para manter o layout centralizado no desktop */}
                                <div className="hidden md:block md:w-[45%]" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}