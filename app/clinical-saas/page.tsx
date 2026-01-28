"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Lock, Activity, Brain, Database, CheckCircle } from "lucide-react";

export default function ClinicalCaseStudy() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 font-sans selection:bg-teal-500/30">
      
      {/* Header */}
      <header className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-stone-400 hover:text-teal-400 transition-colors mb-8">
          <ArrowLeft size={20} /> Voltar ao Portfolio
        </Link>
        
        <div className="flex items-center gap-3 mb-4">
            <span className="bg-teal-500/10 text-teal-400 border border-teal-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                HealthTech
            </span>
            <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                SaaS Enterprise
            </span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Arquitetura de Dados para Acompanhamento Terapêutico (TEA)
        </h1>
        <p className="text-xl text-stone-400 leading-relaxed">
          Desenvolvimento de um ecossistema seguro para coleta de dados comportamentais (ABA/Denver) e geração automatizada de relatórios de evolução clínica.
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 pb-20 space-y-16">
        
        {/* O Desafio */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Activity className="text-teal-500" /> O Desafio Técnico
          </h2>
          <p className="text-stone-300 leading-relaxed mb-6">
            O projeto exigia digitalizar metodologias complexas de intervenção (ABA e Denver) que tradicionalmente dependem de pranchetas e papel. 
            O maior desafio não foi apenas o CRUD, mas a **modelagem de dados longitudinais**: como armazenar milhares de pequenas interações diárias e transformá-las em gráficos de progresso compreensíveis para os pais e supervisores.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-stone-900 p-5 rounded-xl border border-stone-800">
                <h3 className="font-bold text-white mb-2 flex items-center gap-2"><Lock size={16} className="text-teal-400"/> Privacidade (LGPD)</h3>
                <p className="text-sm text-stone-400">Implementação de criptografia em repouso e controle de acesso granular (RBAC) para garantir que apenas terapeutas autorizados acessem os dados sensíveis das crianças.</p>
            </div>
            <div className="bg-stone-900 p-5 rounded-xl border border-stone-800">
                <h3 className="font-bold text-white mb-2 flex items-center gap-2"><FileText size={16} className="text-teal-400"/> Relatórios Massivos</h3>
                <p className="text-sm text-stone-400">Automatizar a criação de relatórios mensais que cruzam dados de sessões, gráficos de evolução e anotações qualitativas, reduzindo horas de trabalho manual.</p>
            </div>
          </div>
        </section>

        {/* A Solução / Engenharia */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Brain className="text-teal-500" /> Engenharia & Solução
          </h2>
          
          {/* Mock Visual do Fluxo (Abstrato) */}
          <div className="w-full bg-stone-900 rounded-xl border border-stone-800 p-8 mb-8 relative overflow-hidden">
             <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-mono text-stone-400">
                <div className="border border-stone-700 p-3 rounded bg-stone-950">Coleta Mobile (Terapeuta)</div>
                <ArrowLeft className="rotate-90 md:rotate-0 md:rotate-180 text-stone-600" />
                <div className="border border-stone-700 p-3 rounded bg-stone-950">API Laravel (Validação)</div>
                <ArrowLeft className="rotate-90 md:rotate-0 md:rotate-180 text-stone-600" />
                <div className="border border-stone-700 p-3 rounded bg-stone-950">Job Queue (Processamento)</div>
                <ArrowLeft className="rotate-90 md:rotate-0 md:rotate-180 text-stone-600" />
                <div className="border border-teal-500/30 p-3 rounded bg-teal-900/10 text-teal-400">Relatório PDF Gerado</div>
             </div>
             <p className="mt-6 text-center text-xs text-stone-500">[Fluxo simplificado de processamento assíncrono]</p>
          </div>

          <ul className="space-y-6">
            <li className="flex gap-4">
                <div className="mt-1 bg-stone-800 p-2 rounded-lg border border-stone-700 h-fit">
                    <Database size={20} className="text-stone-300" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">Modelagem de Dados Flexível</h3>
                    <p className="text-stone-400 text-sm mt-1">
                        Utilização de tabelas polimórficas no Laravel para suportar diferentes tipos de métricas (frequência, duração, tentativas discretas) dentro da mesma estrutura de sessão, permitindo escalabilidade para novos métodos terapêuticos.
                    </p>
                </div>
            </li>
            <li className="flex gap-4">
                <div className="mt-1 bg-stone-800 p-2 rounded-lg border border-stone-700 h-fit">
                    <FileText size={20} className="text-stone-300" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white">Motor de Relatórios Assíncrono</h3>
                    <p className="text-stone-400 text-sm mt-1">
                        Devido à complexidade dos cálculos estatísticos para os gráficos de evolução, implementei filas (Queues) com Redis. O terapeuta solicita o relatório e o sistema processa em background, notificando via WebSocket quando o PDF está pronto.
                    </p>
                </div>
            </li>
          </ul>
        </section>

        {/* Stack */}
        <section>
            <h2 className="text-2xl font-bold text-white mb-6">Tech Stack & Ferramentas</h2>
            <div className="flex flex-wrap gap-3">
                {["Laravel 11", "MySQL", "PDFKit", "React + tailwind & ShadCN", "Docker", "Git Flow", "Recharts"].map(tech => (
                    <span key={tech} className="px-4 py-2 bg-stone-900 text-stone-300 rounded-lg border border-stone-800 text-sm font-mono hover:border-teal-500/50 transition-colors cursor-default">
                        {tech}
                    </span>
                ))}
            </div>
        </section>

        {/* Disclaimer Final */}
        <div className="bg-stone-900 border-l-4 border-teal-500 p-6 rounded-r-xl flex gap-4 items-start">
            <Lock className="text-teal-500 shrink-0 mt-1" />
            <div>
                <h4 className="font-bold text-white mb-1">Projeto Confidencial em Produção</h4>
                <p className="text-stone-400 text-sm leading-relaxed">
                    Este sistema é uma propriedade intelectual privada em uso por uma clínica parceira. 
                    Detalhes específicos sobre a lógica de negócio, nomes de pacientes e interfaces finais foram omitidos para preservar o sigilo profissional e a conformidade com a LGPD.
                </p>
            </div>
        </div>

      </main>
    </div>
  );
}