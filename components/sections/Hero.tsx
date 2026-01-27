"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Terminal, Database, Cpu } from "lucide-react";
import { Button } from "../ui/Button";
import { Section } from "../layout/Section";
import { SocialLinks } from "../ui/SocialLinks";
import { useLanguage } from "@/context/LanguageContext";
import { SiReact, SiLaravel, SiDocker } from "react-icons/si";

export function Hero() {
    const [text, setText] = useState("");
    const { t } = useLanguage();
    const [isDeleting, setIsDeleting] = useState(false);

    // Efeito Typewriter Infinito e Suave
    useEffect(() => {
        const fullText = t.hero.subheadline;
        let timeout: NodeJS.Timeout;

        const handleType = () => {
            setText(current => {
                if (isDeleting) {
                    if (current === "") {
                        setIsDeleting(false);
                        return "";
                    }
                    return current.slice(0, -1);
                } else {
                    if (current === fullText) {
                        timeout = setTimeout(() => setIsDeleting(true), 3000); // Espera 3s antes de apagar
                        return current;
                    }
                    return fullText.slice(0, current.length + 1);
                }
            });
            
            timeout = setTimeout(handleType, isDeleting ? 30 : 50);
        };

        timeout = setTimeout(handleType, 100);
        return () => clearTimeout(timeout);
    }, [t.hero.subheadline, isDeleting]);

    return (
        <Section id="hero" className="min-h-screen flex items-center justify-center pt-20 lg:pt-32 overflow-visible">
            {/* Background Glow Local (Reforço) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

            <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
                
                {/* Lado Esquerdo: Conteúdo de Texto */}
                <div className="space-y-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase">
                                {t.hero.role}
                            </span>
                            <span className="w-16 h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent" />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            {t.hero.headline} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                                {t.hero.highlight}
                            </span>{" "}
                            {t.hero.enthusiast}
                        </h1>

                        <div className="h-24 md:h-28">
                            <p className="text-xl md:text-2xl text-zinc-400 font-light border-l-2 border-purple-500 pl-4">
                                {text}
                                <span className="animate-pulse text-purple-500">|</span>
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button icon={<ArrowRight className="w-4 h-4" />}>{t.hero.cta_primary}</Button>
                        <Button variant="outline" icon={<FileText className="w-4 h-4" />}>
                            {t.hero.cta_secondary}
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="pt-8 border-t border-white/5"
                    >
                        <p className="text-xs text-zinc-500 mb-4 font-mono uppercase tracking-widest">Connect with me</p>
                        <SocialLinks />
                    </motion.div>
                </div>

                {/* Lado Direito: Visual "Full Stack Ecosystem" */}
                <div className="relative hidden lg:block h-[600px] w-full perspective-1000">
                    
                    {/* Elementos Flutuantes (Ícones Orbitais) */}
                    <motion.div 
                        animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-20 z-20 p-4 bg-zinc-900 rounded-2xl border border-blue-500/30 shadow-lg shadow-blue-500/20"
                    >
                        <SiReact className="w-12 h-12 text-blue-400" />
                    </motion.div>

                    <motion.div 
                        animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-32 left-10 z-20 p-4 bg-zinc-900 rounded-2xl border border-red-500/30 shadow-lg shadow-red-500/20"
                    >
                        <SiLaravel className="w-12 h-12 text-red-500" />
                    </motion.div>

                    <motion.div 
                        animate={{ x: [-10, 10, -10], y: [-10, 10, -10] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute top-40 -left-4 z-0 p-3 bg-zinc-900 rounded-xl border border-blue-600/30 opacity-60"
                    >
                        <SiDocker className="w-8 h-8 text-blue-600" />
                    </motion.div>


                    {/* O Cartão Principal (Code Editor) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg z-10"
                    >
                        <div className="relative bg-[#0F1117] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
                            {/* Header do Editor */}
                            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="text-xs text-zinc-500 font-mono">Portfolio.tsx</div>
                            </div>

                            {/* Corpo do Código */}
                            <div className="p-6 font-mono text-sm leading-relaxed">
                                <div className="flex text-zinc-500 mb-4">
                                    <span className="mr-4 select-none opacity-30">1</span>
                                    <span className="text-purple-400">import</span> <span className="text-white">{"{ Future }"}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@isaac/engineer'</span>;
                                </div>
                                <div className="flex text-zinc-500 mb-4">
                                    <span className="mr-4 select-none opacity-30">2</span>
                                </div>
                                <div className="flex text-zinc-500">
                                    <span className="mr-4 select-none opacity-30">3</span>
                                    <span className="text-purple-400">export default</span> <span className="text-blue-400">function</span> <span className="text-yellow-400">App</span>() {"{"}
                                </div>
                                <div className="flex text-zinc-500">
                                    <span className="mr-4 select-none opacity-30">4</span>
                                    <span className="pl-4 text-purple-400">return</span> (
                                </div>
                                <div className="flex text-zinc-500">
                                    <span className="mr-4 select-none opacity-30">5</span>
                                    <span className="pl-8 text-white">{"<"}</span><span className="text-yellow-400">FullStackSolution</span>
                                </div>
                                <div className="flex text-zinc-500">
                                    <span className="mr-4 select-none opacity-30">6</span>
                                    <span className="pl-12 text-blue-300">frontend</span>=<span className="text-white">{"{"}</span><span className="text-green-400">"React"</span><span className="text-white">{"}"}</span>
                                </div>
                                <div className="flex text-zinc-500">
                                    <span className="mr-4 select-none opacity-30">7</span>
                                    <span className="pl-12 text-blue-300">backend</span>=<span className="text-white">{"{"}</span><span className="text-green-400">"Laravel"</span><span className="text-white">{"}"}</span>
                                </div>
                                <div className="flex text-zinc-500">
                                    <span className="mr-4 select-none opacity-30">8</span>
                                    <span className="pl-12 text-blue-300">scalable</span>=<span className="text-white">{"{"}</span><span className="text-orange-400">true</span><span className="text-white">{"}"}</span>
                                </div>
                                <div className="flex text-zinc-500">
                                    <span className="mr-4 select-none opacity-30">9</span>
                                    <span className="pl-8 text-white">/{">"}</span>
                                </div>
                                <div className="flex text-zinc-500">
                                    <span className="mr-4 select-none opacity-30">10</span>
                                    <span className="text-white">{"}"}</span>;
                                </div>
                            </div>
                        </div>

                        {/* Card Traseiro (Efeito de Profundidade) */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-xl blur-lg -z-10 animate-pulse" />
                    </motion.div>

                    {/* Badge Flutuante "Status" */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-20 right-0 bg-zinc-900/80 backdrop-blur-md p-4 rounded-xl border border-green-500/30 flex items-center gap-3 shadow-xl"
                    >
                        <div className="relative">
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                        </div>
                        <div>
                            <div className="text-xs text-zinc-400">Current Status</div>
                            <div className="text-sm font-bold text-white">Open to Work</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}