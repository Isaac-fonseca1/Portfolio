"use client";

import React from "react";
import { Section } from "../layout/Section";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, Cpu, Globe, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SiGithub, SiLinkedin, SiReact, SiLaravel, SiDocker } from "react-icons/si";

export function About() {
    const { t } = useLanguage();

    const stats = [
        { icon: GraduationCap, label: "CS Student", value: "1th Sem" }, // Ajuste para Computer Engineering se quiser
        { icon: Cpu, label: "Experience", value: "1+ Years" },
        { icon: Globe, label: "Location", value: "Brazil" },
    ];

    return (
        <Section id="about" className="py-24 bg-zinc-900/30 relative overflow-hidden">
             {/* Elemento Decorativo de Fundo */}
            <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -z-10" />

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                {/* Lado Esquerdo: Texto e História */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            {t.about.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">{t.about.highlight}</span>
                        </h2>
                        
                        <div className="prose prose-invert prose-lg text-zinc-400 space-y-4 leading-relaxed">
                            <p>
                                {t.about.p1_start} <span className="text-white font-semibold">{t.about.p1_highlight}</span> {t.about.p1_end}
                            </p>
                            <p>
                                {t.about.p2}
                            </p>
                            <p>
                                {t.about.p3}
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center text-center hover:bg-white/10 transition-colors">
                                <stat.icon className="w-6 h-6 text-cyan-400 mb-2" />
                                <div className="text-sm text-zinc-400">{stat.label}</div>
                                <div className="font-bold text-white">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button icon={<ArrowRight className="w-4 h-4" />}>
                            {t.about.contact}
                        </Button>
                        
                        <a href="https://github.com/Isaac-fonseca1" target="_blank" className="p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 hover:text-white transition-colors text-zinc-400">
                            <SiGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/isaac-fonseca-17a785223/" target="_blank" className="p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 hover:text-blue-400 transition-colors text-zinc-400">
                            <SiLinkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Lado Direito: O Ecossistema Flutuante (Satélites) */}
                <div className="relative h-[500px] w-full flex items-center justify-center perspective-1000">
                    
                    {/* Satélite 1: React (Orbita Cima Direita) */}
                    <motion.div 
                        animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-10 z-20 p-4 bg-zinc-900 rounded-2xl border border-blue-500/30 shadow-lg shadow-blue-500/20"
                    >
                        <SiReact className="w-10 h-10 text-blue-400" />
                    </motion.div>

                    {/* Satélite 2: Laravel (Orbita Baixo Esquerda) */}
                    <motion.div 
                        animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 left-4 z-20 p-4 bg-zinc-900 rounded-2xl border border-red-500/30 shadow-lg shadow-red-500/20"
                    >
                        <SiLaravel className="w-10 h-10 text-red-500" />
                    </motion.div>

                    {/* Satélite 3: Docker (Fundo Esquerda) */}
                    <motion.div 
                        animate={{ x: [-10, 10, -10], y: [-10, 10, -10] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute top-20 left-0 z-0 p-3 bg-zinc-900 rounded-xl border border-blue-600/30 opacity-60"
                    >
                        <SiDocker className="w-8 h-8 text-blue-600" />
                    </motion.div>

                    {/* O Cartão Central 3D (Code Editor) */}
                    <motion.div
                        initial={{ rotateY: 20, opacity: 0 }}
                        whileInView={{ rotateY: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="relative z-10 w-full max-w-sm"
                    >
                        <div className="relative bg-[#0F1117] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                            {/* Header do Editor */}
                            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="text-xs text-zinc-500 font-mono">Profile.tsx</div>
                            </div>

                            {/* Corpo do Código */}
                            <div className="p-6 font-mono text-sm leading-relaxed text-zinc-300">
                                <div className="flex mb-2">
                                    <span className="text-purple-400 mr-2">const</span> 
                                    <span className="text-yellow-400">Isaac</span> 
                                    <span className="text-white mx-2">=</span> 
                                    <span className="text-white">{"{"}</span>
                                </div>
                                <div className="pl-4 mb-1">
                                    <span className="text-blue-300">role</span>: <span className="text-green-400">"Engineer"</span>,
                                </div>
                                <div className="pl-4 mb-1">
                                    <span className="text-blue-300">passion</span>: <span className="text-green-400">"Building"</span>,
                                </div>
                                <div className="pl-4 mb-1">
                                    <span className="text-blue-300">status</span>: <span className="text-green-400">"Loading..."</span>,
                                </div>
                                <div className="pl-4 mb-2">
                                    <span className="text-blue-300">skills</span>: <span className="text-white">[</span>
                                    <span className="text-orange-400">"React"</span>, <span className="text-orange-400">"Laravel"</span>
                                    <span className="text-white">]</span>
                                </div>
                                <div className="flex mb-2">
                                    <span className="text-white">{"}"}</span>;
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/5 text-xs text-zinc-500 italic">
                                    // Always learning, always evolving.
                                </div>
                            </div>
                        </div>

                        {/* Glow de fundo do cartão */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-xl blur-lg -z-10 animate-pulse" />
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}