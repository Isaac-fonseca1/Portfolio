"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./Button";

export function LanguageSwitcher() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            onClick={toggleLanguage}
            className="font-mono text-xl md:text-2xl px-2"
            aria-label="Toggle language"
        >
            {language === "en" ? "🇺🇸" : "🇧🇷"}
        </Button>
    );
}
