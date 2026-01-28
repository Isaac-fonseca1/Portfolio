"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "../ui/Button";
import { Section } from "../layout/Section";
import { SocialLinks } from "../ui/SocialLinks";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
export function Hero() {
    const [text, setText] = useState("");
    const { t } = useLanguage();
    const [isDeleting, setIsDeleting] = useState(false);

    // Efeito Typewriter
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
                        timeout = setTimeout(() => setIsDeleting(true), 3000);
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
        <Section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10 relative overflow-hidden">

            {/* Background Glow Centralizado */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="w-full max-w-4xl flex flex-col items-center text-center z-10">

                {/* 1. FOTO DE PERFIL (Destaque Principal) */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="relative mb-8 group"
                >
                    {/* Anéis de Efeito Neon */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 opacity-70 blur-md group-hover:opacity-100 transition duration-500" />
                    <div className="absolute -inset-4 rounded-full border border-white/5 border-dashed animate-[spin_10s_linear_infinite] opacity-30" />

                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#09090b] bg-zinc-900 shadow-2xl">
                        <Image
                            src="/profile.jpeg"
                            alt="Isaac Fonseca"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Badge de Status "Online" */}
                    <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-6 h-6 bg-green-500 rounded-full border-4 border-[#09090b] z-20">
                        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                    </div>
                </motion.div>

                {/* 2. NOME E CARGO */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4 mb-8"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                        Isaac <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Fonseca</span>
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-mono text-sm">
                            Computer Engineering Student
                        </span>
                        <span className="hidden md:inline text-zinc-600">•</span>
                        <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-sm shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                            Full Stack Engineer
                        </span>
                    </div>
                </motion.div>

                {/* 3. HERO CONTENT (Typewriter e Headline) */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-2xl mx-auto space-y-8"
                >
                    <div className="h-16 md:h-20 flex items-center justify-center">
                        <p className="text-xl md:text-2xl text-zinc-400 font-light text-center">
                            {text}
                            <span className="animate-pulse text-cyan-500 font-bold">|</span>
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                        {/* 1. Botão Ver Projetos (Link Interno) */}
                        <Link href="#projects" className="w-full sm:w-auto">
                            <Button className="w-full" icon={<ArrowRight className="w-4 h-4" />}>
                                {t.hero.cta_primary}
                            </Button>
                        </Link>

                        {/* 2. Botão Currículo (Download do PDF) */}
                        <a
                            href="/CV_Isaac_Fonseca_FullStack_Developer.pdf"
                            target="_blank"       
                            rel="noopener noreferrer"
                            download="CV_Isaac_FullStack_Developer.pdf" 
                            className="w-full sm:w-auto"
                        >
                            <Button variant="outline" className="w-full" icon={<Download className="w-4 h-4" />}>
                                {t.hero.cta_secondary}
                            </Button>
                        </a>

                    </div>
                    {/* Redes Sociais */}
                    <div className="pt-8 flex flex-col items-center gap-3">
                        <p className="text-xs text-zinc-600 font-mono uppercase tracking-widest">Connect with me</p>
                        <SocialLinks />
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}