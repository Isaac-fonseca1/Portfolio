"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "../layout/Section";
import { useLanguage } from "@/context/LanguageContext";
import {
    SiReact, SiTailwindcss, SiFramer, SiNextdotjs, SiTypescript, SiChakraui,
    SiPhp, SiLaravel, SiNodedotjs, SiPostgresql,
    SiDocker, SiN8N, SiPython, SiLinux, SiGit, SiGithub, SiSpring, SiAmazonwebservices, SiShadcnui
} from "react-icons/si";
import { LucideTerminal, LucideServer, LucideLayout } from "lucide-react";

export default function Skills() {
    const { t } = useLanguage();

    // Mapeamento que une o Visual (Ícones/Cores) ao Texto (Dicionário)
    const categories = [
        {
            id: "frontend",
            icon: LucideLayout,
            title: t.skills.frontend.title,       // Vindo do Dicionário
            description: t.skills.frontend.desc,  // Vindo do Dicionário
            techs: [
                { icon: SiReact, name: "React" },
                { icon: SiNextdotjs, name: "Next.js" },
                { icon: SiTypescript, name: "TypeScript" },
                { icon: SiTailwindcss, name: "Tailwind" },
                { icon: SiChakraui, name: "Chakra UI" },
                { icon: SiFramer, name: "Motion" },
                { icon: SiShadcnui, name: "Shadcn UI" },
            ],
            // As capabilities agora vêm do dicionário (array de strings)
            capabilities: t.skills.frontend.capabilities, 
            gradient: "from-blue-500/20 via-cyan-500/20 to-transparent",
            border: "group-hover:border-cyan-500/50"
        },
        {
            id: "backend",
            icon: LucideServer,
            title: t.skills.backend.title,
            description: t.skills.backend.desc,
            techs: [
                { icon: SiPhp, name: "PHP" },
                { icon: SiLaravel, name: "Laravel" },
                { icon: SiNodedotjs, name: "Node.js" },
                { icon: SiPostgresql, name: "SQL" },
                { icon: SiPython, name: "Python" },
                { icon: SiSpring, name: "Java+Spring" },
            ],
            capabilities: t.skills.backend.capabilities,
            gradient: "from-violet-500/20 via-purple-500/20 to-transparent",
            border: "group-hover:border-purple-500/50"
        },
        {
            id: "devops",
            icon: LucideTerminal,
            title: t.skills.devops.title,
            description: t.skills.devops.desc,
            techs: [
                { icon: SiDocker, name: "Docker" },
                { icon: SiLinux, name: "Linux" },
                { icon: SiGit, name: "Git" },
                { icon: SiGithub, name: "GitHub" },
                { icon: SiN8N, name: "N8n" },
                { icon: SiPython, name: "Python" },
                { icon: SiAmazonwebservices, name: "AWS" },
            ],
            capabilities: t.skills.devops.capabilities,
            gradient: "from-emerald-500/20 via-green-500/20 to-transparent",
            border: "group-hover:border-emerald-500/50"
        },
    ];

    return (
        <Section id="skills" className="py-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl -z-10" />

            <div className="mb-20">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                        {t.skills.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">{t.skills.highlight}</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl text-lg leading-relaxed">
                        {t.skills.subtitle}
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        viewport={{ once: true }}
                        className={`group relative flex flex-col h-full bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-zinc-900/60 ${category.border}`}
                    >
                        {/* Gradient Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-b ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                        <div className="relative z-10 p-8 flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform duration-300">
                                    <category.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {category.title}
                                </h3>
                            </div>

                            <p className="text-zinc-400 mb-8 leading-relaxed">
                                {category.description}
                            </p>

                            {/* Tech Grid */}
                            <div className="grid grid-cols-2 gap-3 mb-8">
                                {category.techs.map((tech, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                                        <tech.icon className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
                                        <span>{tech.name}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Capabilities Tags (Rodapé do Card) */}
                            <div className="mt-auto pt-6 border-t border-white/5">
                                <div className="flex flex-wrap gap-2">
                                    {/* Verifica se capabilities existe antes de mapear para evitar erros */}
                                    {category.capabilities?.map((cap: string, i: number) => (
                                        <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/5 group-hover:border-white/20 group-hover:text-white transition-colors">
                                            {cap}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}