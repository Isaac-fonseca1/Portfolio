"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "../ui/Button";
import { Section } from "../layout/Section";
import { SocialLinks } from "../ui/SocialLinks";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export function Hero() {
    const { t } = useLanguage();
    
    // --- Lógica de Typewriter Robusta ---
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = isDeleting ? 30 : 50; // Velocidade de digitação/apagamento
    const pauseTime = 3000; // Tempo de pausa antes de apagar

    useEffect(() => {
        const fullText = t.hero.subheadline;
        let timer: NodeJS.Timeout;

        const handleTyping = () => {
            setDisplayText((current) => {
                if (isDeleting) {
                    // Apagando
                    if (current === "") {
                        setIsDeleting(false);
                        return "";
                    }
                    return fullText.substring(0, current.length - 1);
                } else {
                    // Digitando
                    if (current === fullText) {
                        // Pausa quando termina de digitar
                        timer = setTimeout(() => setIsDeleting(true), pauseTime);
                        return current;
                    }
                    return fullText.substring(0, current.length + 1);
                }
            });
        };

        // Se o texto já estiver completo e não estiver apagando, não agende o próximo "tick" imediato
        // (Isso evita o bug de piscar ou digitar errado quando troca de lingua)
        if (!isDeleting && displayText === fullText) {
             // O timer de pausa já foi definido no callback anterior, não faz nada aqui
        } else {
            timer = setTimeout(handleTyping, typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, t.hero.subheadline]); 
    // ^ Dependências cruciais: O efeito roda toda vez que o texto muda

    return (
        <Section id="hero" className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10 relative overflow-hidden">

            {/* Background Glow Centralizado (Ajustado para o tema Roxo/Azul) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen" />

            <div className="w-full max-w-4xl flex flex-col items-center text-center z-10">

                {/* 1. FOTO DE PERFIL */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="relative mb-8 group"
                >
                    {/* Anéis de Efeito Neon (Roxo/Azul) */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-purple-500 to-blue-600 opacity-50 blur-md group-hover:opacity-100 transition duration-500" />
                    <div className="absolute -inset-4 rounded-full border border-white/5 border-dashed animate-[spin_10s_linear_infinite] opacity-30" />

                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-[#030014] bg-[#030014] shadow-2xl">
                        <Image
                            src="/profile.jpeg"
                            alt="Isaac Fonseca"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Badge de Status "Online" */}
                    <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-6 h-6 bg-emerald-500 rounded-full border-4 border-[#030014] z-20">
                        <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75" />
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
                        Isaac <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Fonseca</span>
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 font-mono text-sm backdrop-blur-sm">
                            Computer Engineering Student
                        </span>
                        <span className="hidden md:inline text-zinc-600">•</span>
                        <span className="px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-sm shadow-[0_0_15px_rgba(168,85,247,0.15)] backdrop-blur-sm">
                            Full Stack Engineer
                        </span>
                    </div>
                </motion.div>

                {/* 3. HERO CONTENT (Typewriter e CTA) */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-2xl mx-auto space-y-8"
                >
                    {/* Container com altura fixa para evitar pulos de layout */}
                    <div className="h-16 md:h-20 flex items-center justify-center">
                        <p className="text-xl md:text-2xl text-zinc-400 font-light text-center leading-relaxed">
                            {displayText}
                            <span className="animate-pulse text-purple-500 font-bold ml-1">|</span>
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* 1. Botão Ver Projetos */}
                        <Link href="#projects" className="w-full sm:w-auto">
                            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white border-none shadow-lg shadow-purple-900/20" icon={<ArrowRight className="w-4 h-4" />}>
                                {t.hero.cta_primary}
                            </Button>
                        </Link>

                        {/* 2. Botão Currículo */}
                        <a
                            href="/CV_Isaac_Fonseca_FullStack_Developer.pdf"
                            target="_blank"       
                            rel="noopener noreferrer"
                            download="CV_Isaac_FullStack_Developer.pdf" 
                            className="w-full sm:w-auto"
                        >
                            <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-zinc-300 hover:text-white" icon={<Download className="w-4 h-4" />}>
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