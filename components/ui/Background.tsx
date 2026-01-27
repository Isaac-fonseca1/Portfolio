"use client";

import React from "react";

export function Background() {
    return (
        <div className="fixed inset-0 -z-50 bg-[#09090b]">
            {/* Base Grid */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Radial Gradient Glow (Spotlight equivalent) */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(circle at 50% 50%, rgba(0, 243, 255, 0.05) 0%, transparent 50%)"
                }}
            />

            {/* Secondary Glow */}
            <div
                className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] bg-purple-900/10 pointer-events-none"
            />
        </div>
    );
}
