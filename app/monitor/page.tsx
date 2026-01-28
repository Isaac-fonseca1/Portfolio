"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Box } from "lucide-react";
import { ServerMonitor } from "@/components/ServerMonitor";

export default function MonitorPage() {
    return (
        <div className="min-h-screen bg-[#09090b] text-white font-sans selection:bg-cyan-500/30">
            {/* Header da Página */}
            <header className="border-b border-white/5 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="p-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
                            <ArrowLeft size={20} />
                        </Link>
                        <div className="h-6 w-px bg-white/10" />
                        <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-cyan-500/10 rounded-lg">
                                <Box className="text-cyan-400" size={20} />
                            </div>
                            <div>
                                <h1 className="text-sm font-bold tracking-wide">MINEOPS <span className="text-zinc-500 font-normal">DASHBOARD</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Conteúdo Principal */}
            <main className="max-w-7xl mx-auto px-6 py-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-2">Server Overview</h2>
                    <p className="text-zinc-400">Real-time metrics and administration panel.</p>
                </div>

                {/* Aqui carregamos o componente poderoso que criamos */}
                <ServerMonitor />
            </main>
        </div>
    );
}