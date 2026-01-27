"use client";

import React from "react";
import { SocialLinks } from "../ui/SocialLinks";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="py-8 border-t border-white/10 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-zinc-500 text-sm">
                    {t.footer.built_by} <span className="text-zinc-300">Isaac Fonseca</span> {t.footer.with}
                </p>
                <SocialLinks />
            </div>
        </footer>
    );
}

