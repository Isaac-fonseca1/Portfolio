"use client";

import React from "react";
import { Section } from "../layout/Section";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ArrowRight, Terminal, Cpu, Globe, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SiGithub, SiLinkedin } from "react-icons/si";

export function About() {
    const { t } = useLanguage();

    // Dados rápidos para os cards de status (Hardcoded pois são números/fatos universais)
    const stats = [
        { icon: GraduationCap, label: "CS Student", value: "1th Sem" },
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

                    {/* Stats Grid (Novidade) */}
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
                        
                        {/* Social Mini Links */}
                        <a href="https://github.com/Isaac-fonseca1" target="_blank" className="p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 hover:text-white transition-colors text-zinc-400">
                            <SiGithub size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/isaac-fonseca-17a785223/   " target="_blank" className="p-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 hover:text-blue-400 transition-colors text-zinc-400">
                            <SiLinkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Lado Direito: O Terminal Visual */}
                <div className="relative flex justify-center lg:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.01 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="w-full max-w-md bg-[#0f0f15] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-sm"
                    >
                        {/* Terminal Header (Mac Style) */}
                        <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            <div className="ml-auto text-xs text-zinc-500 flex items-center gap-1">
                                <Terminal size={12} />
                                bash — isaac@portfolio
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-6 space-y-4 text-zinc-300">
                            <div>
                                <span className="text-green-400">➜</span> <span className="text-cyan-400">~</span> <span className="text-zinc-500">$</span> whoami
                                <div className="text-white mt-1">isaac_fonseca</div>
                            </div>

                            <div>
                                <span className="text-green-400">➜</span> <span className="text-cyan-400">~</span> <span className="text-zinc-500">$</span> current_role
                                <div className="text-yellow-300 mt-1">"Full Stack Developer"</div>
                            </div>

                            <div>
                                <span className="text-green-400">➜</span> <span className="text-cyan-400">~</span> <span className="text-zinc-500">$</span> skills --list
                                <div className="mt-1 grid grid-cols-2 gap-x-4 text-zinc-400">
                                    <span>• PHP / Laravel</span>
                                    <span>• React / Next.js</span>
                                    <span>• Python / Auto</span>
                                    <span>• Docker / Linux</span>
                                </div>
                            </div>

                            <div>
                                <span className="text-green-400">➜</span> <span className="text-cyan-400">~</span> <span className="text-zinc-500">$</span> echo <span className="text-purple-400">"{t.about.branding}"</span>
                                <div className="mt-1 animate-pulse border-r-2 border-white w-max pr-1 text-cyan-400">
                                    &lt;CodeIsArt /&gt;
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}