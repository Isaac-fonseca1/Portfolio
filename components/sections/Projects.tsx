"use client";

import React, { useState } from "react";
import { Section } from "../layout/Section";
import { ProjectCard } from "../projects/ProjectCard";
import { projects as staticProjectsData } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

export function Projects() {
    const { t } = useLanguage();
    const [filter, setFilter] = useState("All");

    // --- CORREÇÃO DO ERRO AQUI ---
    // Usamos ?. (Optional Chaining) e || (OU) para evitar o crash.
    const translatedProjects = staticProjectsData.map((project, index) => {
        // Tenta pegar o item traduzido com segurança
        const translatedItem = t.projects.items?.[index];

        return {
            ...project,
            // Se existir tradução, usa. Se não, usa o original do projects.ts
            title: translatedItem?.title || project.title,
            description: translatedItem?.description || project.description,
            displayCategory: translatedItem?.category || project.category 
        };
    });

    // Categorias do filtro
    // Certifique-se que "Dashboard" (que usamos no MineOps) está aqui se quiser filtrar por ele
    const categories = ["All", "Full Stack", "Frontend", "Automation"];

    const filteredProjects = translatedProjects.filter(project => {
        if (filter === "All") return true;
        return project.category === filter; 
    });

    return (
        <Section id="projects" className="py-24 relative">
            {/* Background Glow */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] -z-10" />

            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        {t.projects.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">{t.projects.highlight}</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-400 text-lg leading-relaxed"
                    >
                        {t.projects.subtitle}
                    </motion.p>
                </div>

                {/* Filter Tabs */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2 p-1.5 bg-zinc-900/50 backdrop-blur-md border border-white/5 rounded-xl"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={clsx(
                                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                                filter === cat 
                                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]" 
                                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>
            </div>

            {/* Grid com Animação */}
            <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-zinc-500">
                    <p>No projects found in this category yet.</p>
                </div>
            )}
        </Section>
    );
}