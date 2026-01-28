"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Project } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react"; // Importe os ícones corretos do lucide-react
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const { t } = useLanguage();
    
    // Configuração do efeito 3D Tilt
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            // NOVO ESTILO: Fundo escuro com borda roxa no hover
            className="group relative bg-[#030014]/50 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm"
        >
            {/* Brilho de Fundo (Glow Roxo) */}
            <div 
                style={{ transform: "translateZ(0px)" }} 
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
            />

            <div className="relative flex flex-col h-full rounded-2xl p-4 md:p-6" style={{ transform: "translateZ(20px)" }}>
                
                {/* Imagem com Parallax */}
                <div 
                    className="relative w-full h-48 md:h-60 rounded-xl overflow-hidden mb-6 shadow-2xl border border-white/5"
                    style={{ transform: "translateZ(20px)" }}
                >
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay escuro que clareia no hover */}
                    <div className="absolute inset-0 bg-[#030014]/40 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Conteúdo */}
                <div className="flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                            {project.title}
                        </h3>
                    </div>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                        {project.description}
                    </p>

                    {/* Stack Badges (Estilo Glass) */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.stack.map((tech) => (
                            <span 
                                key={tech} 
                                className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-zinc-300 border border-white/5 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Botões de Ação */}
                    <div className="flex gap-4 mt-auto pt-4 border-t border-white/5" style={{ transform: "translateZ(30px)" }}>
                        {project.githubUrl && (
                            <a 
                                href={project.githubUrl} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors hover:scale-105 transform"
                            >
                                <Github size={20} />
                                <span>Code</span>
                            </a>
                        )}
                        
                        <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors ml-auto hover:scale-105 transform"
                        >
                            {t.projects.demo || "Live Demo"}
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}