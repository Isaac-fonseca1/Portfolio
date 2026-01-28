"use client";

import React from "react";
import { SocialLinks } from "../ui/SocialLinks";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="relative py-8 border-t border-white/5 bg-[#030014]/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-zinc-500 text-sm font-mono">
                    {t.footer.built_by} <span className="text-zinc-300">Isaac Fonseca</span> {t.footer.with}
                </p>
                <SocialLinks />
            </div>
        </footer>
    );
}