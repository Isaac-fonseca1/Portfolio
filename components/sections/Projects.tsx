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

    // Lógica de tradução segura
    const translatedProjects = staticProjectsData.map((project, index) => {
        const translatedItem = t.projects.items?.[index];
        return {
            ...project,
            title: translatedItem?.title || project.title,
            description: translatedItem?.description || project.description,
            displayCategory: translatedItem?.category || project.category 
        };
    });

    // Categorias do filtro (Ajustadas para combinar com seus projetos reais)
    // Se "Dashboard" ou "HealthTech" forem importantes, adicione aqui
    const categories = ["All", "Full Stack", "Frontend", "HealthTech", "Architecture"];

    const filteredProjects = translatedProjects.filter(project => {
        if (filter === "All") return true;
        // Verifica se a categoria do projeto bate com o filtro
        // (Assumindo que no data/projects.ts você tenha a propriedade 'category' correta)
        return project.category === filter || project.displayCategory === filter; 
    });

    return (
        <Section id="projects" className="py-24 relative">
            
            {/* Background Glow (Roxo para o tema novo) */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-2xl">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-white"
                    >
                        {t.projects.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">{t.projects.highlight}</span>
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

                {/* Filter Tabs (Estilo Cápsula Tecnológica) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2 p-1.5 bg-[#030014]/80 backdrop-blur-md border border-white/10 rounded-full"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={clsx(
                                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                filter === cat 
                                    ? "bg-purple-600 text-white shadow-lg shadow-purple-900/50" 
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
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-zinc-500 font-mono">
                        // No projects found in this category yet.
                    </p>
                </div>
            )}
        </Section>
    );
}