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
        <Section id="workflow" className="py-24 relative overflow-hidden">
            
            {/* Fundos Decorativos (Glows Espaciais) */}
            <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
            <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="text-center mb-20">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-4 text-white"
                >
                    {t.workflow.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">{t.workflow.highlight}</span>
                </motion.h2>
                <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    {t.workflow.subtitle}
                </p>
            </div>

            <div className="relative max-w-5xl mx-auto px-4">
                {/* Linha Central Conectora (Vertical) - Gradiente Roxo/Azul */}
                <div className="absolute left-[31px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent -translate-x-1/2" />

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
                                {/* O Ícone Central (Nó da Rede) */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-[#030014] border border-white/10 shadow-[0_0_20px_rgba(168,85,247,0.2)] z-10 group hover:scale-110 transition-transform duration-300">
                                    {/* Círculo interno pulsante */}
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-purple-500/50 transition-colors">
                                        <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse shadow-[0_0_10px_#a855f7]" />
                                    </div>
                                </div>

                                {/* O Card de Conteúdo (Glassmorphism) */}
                                <div className="ml-24 md:ml-0 md:w-[45%]">
                                    <div className="group relative p-8 bg-[#030014]/40 backdrop-blur-md border border-white/10 rounded-3xl hover:bg-[#030014]/60 transition-all duration-300 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-900/10 hover:-translate-y-1">
                                        
                                        {/* Ícone de Fundo Gigante (Marca d'água) */}
                                        <div className="absolute top-4 right-4 text-white/5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12">
                                            <Icon size={80} />
                                        </div>
                                        
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="text-purple-400 font-mono text-xs font-bold tracking-widest uppercase bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
                                                    Step 0{index + 1}
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                                {step.title}
                                            </h3>
                                            <p className="text-zinc-400 text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
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