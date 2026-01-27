"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredPath, setHoveredPath] = useState<string | null>(null);
    const { t } = useLanguage();

    const navLinks = [
        { name: t.navbar.home, href: "#hero" },
        { name: t.navbar.skills, href: "#skills" },
        { name: t.navbar.workflow, href: "#workflow" },
        { name: t.navbar.projects, href: "#projects" },
        { name: t.navbar.about, href: "#about" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled 
                    ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 py-3" 
                    : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    
                    {/* Logo com efeito de "Terminal" */}
                    <Link 
                        href="/" 
                        className="flex items-center gap-2 group relative z-50"
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="relative p-2 rounded-xl bg-gradient-to-tr from-zinc-800 to-zinc-900 border border-white/10 group-hover:border-neon-cyan/50 transition-colors shadow-lg shadow-black/20">
                            <Code2 className="w-5 h-5 text-neon-cyan group-hover:rotate-12 transition-transform duration-300" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-mono font-bold text-lg leading-none tracking-tight text-white">
                                Isaac<span className="text-neon-cyan">.dev</span>
                            </span>
                            <span className="text-[10px] text-zinc-500 font-mono leading-none mt-1 group-hover:text-neon-cyan/70 transition-colors">
                                ~/portfolio
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation (The "Spotlight" Effect) */}
                    <div className="hidden md:flex items-center gap-6">
                        <nav className="flex items-center p-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                                    onMouseEnter={() => setHoveredPath(link.href)}
                                    onMouseLeave={() => setHoveredPath(null)}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    {hoveredPath === link.href && (
                                        <motion.div
                                            layoutId="navbar-hover"
                                            className="absolute inset-0 bg-white/10 rounded-full"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </nav>
                        
                        <div className="pl-6 border-l border-white/10 h-6 flex items-center">
                            <LanguageSwitcher />
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <LanguageSwitcher />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative p-2 text-zinc-400 hover:text-white transition-colors group"
                        >
                            <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Full Screen Overlay) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 shadow-2xl md:hidden overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 gap-2">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-neon-cyan transition-all group"
                                    >
                                        <Terminal className="w-4 h-4 text-zinc-600 group-hover:text-neon-cyan" />
                                        <span className="text-lg font-medium">{link.name}</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}