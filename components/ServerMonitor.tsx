"use client";

import React, { useEffect, useState, useRef } from "react";
import { 
  Cpu, Server, Activity, HardDrive, Box, Wifi, 
  Terminal, Users, Play, Square, ShieldCheck, 
  Sun, Moon, CloudRain, Save, Ban, MessageSquare, Zap, Layers 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

// --- DADOS MOCKADOS ---
const LOG_MESSAGES = [
  "[Server thread/INFO]: Saving chunks for level 'ServerLevel'...",
  "[Server thread/WARN]: Can't keep up! Is the server overloaded? Running 20ms behind.",
  "[Auth/INFO]: UUID of player Steve is 9029-...",
  "[Server thread/INFO]: Steve joined the game",
  "[Server thread/INFO]: Villager entity 29392 saved",
  "[System]: Auto-saving world...",
  "[Network]: Packet loss detected on channel 2 (recovering...)",
  "[RCON]: Admin executed command /weather clear",
];

const MOCK_PLAYERS = [
  { id: 1, name: "Isaac_Dev", ping: 12, skin: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isaac", op: true },
  { id: 2, name: "Alex_Pro", ping: 45, skin: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", op: false },
  { id: 3, name: "Gamer_BR", ping: 120, skin: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gamer", op: false },
  { id: 4, name: "Noob_Master", ping: 310, skin: "https://api.dicebear.com/7.x/avataaars/svg?seed=Noob", op: false },
];

export function ServerMonitor() {
  const [activeTab, setActiveTab] = useState<"overview" | "console" | "players">("overview");
  
  // Estado Global do Servidor
  const [metrics, setMetrics] = useState({
    cpu: 45,
    ram: { total: 16, used: 8.4 },
    net: { up: 1.2, down: 4.5 },
    tps: 20.0,
    disk: { read: 12, write: 45 },
    entities: 342,
    chunks: 1024,
    logs: ["[System]: Monitoring agent started..."],
    // CORREÇÃO: Inicializamos com valores fixos para evitar erro de hidratação
    tpsHistory: Array(20).fill(50) 
  });

  const logsEndRef = useRef<HTMLDivElement>(null);

  // ENGINE DE SIMULAÇÃO
  useEffect(() => {
    // Apenas roda no cliente (Client-side), evitando conflito com o servidor
    const interval = setInterval(() => {
      setMetrics(prev => {
        const newCpu = Math.max(10, Math.min(100, prev.cpu + (Math.random() - 0.5) * 15));
        const newRam = Math.max(4, Math.min(15, prev.ram.used + (Math.random() - 0.5) * 0.5));
        
        let newLogs = prev.logs;
        if (Math.random() > 0.7) {
            const randomLog = LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)];
            const timestamp = new Date().toLocaleTimeString('pt-BR', { hour12: false });
            newLogs = [...prev.logs.slice(-12), `[${timestamp}] ${randomLog}`];
        }

        // Gera novo valor para o gráfico de TPS
        const newHistoryValue = Math.random() * 50 + 50;
        const newHistory = [...prev.tpsHistory.slice(1), newHistoryValue];

        return {
          cpu: Math.floor(newCpu),
          ram: { ...prev.ram, used: parseFloat(newRam.toFixed(1)) },
          net: { 
            up: parseFloat((Math.random() * 5).toFixed(1)), 
            down: parseFloat((Math.random() * 20).toFixed(1)) 
          },
          tps: Math.max(18.5, Math.min(20, prev.tps + (Math.random() - 0.5))),
          disk: { 
             read: Math.floor(Math.random() * 50), 
             write: Math.floor(Math.random() * 100) 
          },
          entities: Math.floor(prev.entities + (Math.random() - 0.5) * 10),
          chunks: prev.chunks,
          logs: newLogs,
          tpsHistory: newHistory // Atualiza o histórico aqui
        };
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if(activeTab === 'console') {
        logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [metrics.logs, activeTab]);

  return (
    <div className="w-full max-w-5xl mx-auto bg-[#0f0f12] border border-white/5 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col h-[700px]">
      
      {/* Badge "Demo" */}
      <div className="absolute top-0 right-0 bg-yellow-500/10 text-yellow-500 text-[10px] font-mono px-3 py-1 rounded-bl-xl border-b border-l border-yellow-500/10 z-20">
        LIVE DEMO MODE
      </div>

      {/* --- HEADER --- */}
      <div className="bg-zinc-900/50 border-b border-white/5 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 relative">
            <Server className="w-6 h-6 text-cyan-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0f0f12] animate-pulse"></span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">VPS-LINUX-01</h3>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mt-1">
              <span>IP: 192.168.0.55</span>
              <span className="text-zinc-700">|</span>
              <span className="text-green-400 flex items-center gap-1">
                ONLINE <ShieldCheck size={10} />
              </span>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="flex bg-black/20 p-1 rounded-lg border border-white/5">
            {[
                { id: "overview", label: "Monitor", icon: Activity },
                { id: "console", label: "Console", icon: Terminal },
                { id: "players", label: "Players", icon: Users },
            ].map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={clsx(
                        "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all",
                        activeTab === tab.id 
                            ? "bg-zinc-800 text-white shadow-sm border border-white/5" 
                            : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
                    )}
                >
                    <tab.icon size={14} />
                    {tab.label}
                </button>
            ))}
        </div>
      </div>

      {/* --- CONTENT AREA (SCROLLABLE) --- */}
      <div className="p-6 flex-grow overflow-y-auto custom-scrollbar relative">
        <AnimatePresence mode="wait">
            
            {/* TAB 1: OVERVIEW */}
            {activeTab === "overview" && (
                <motion.div 
                    key="overview"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                >
                    {/* Primary Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <MetricCard title="CPU Load" value={`${metrics.cpu}%`} sub="Ryzen 9 5950X" percent={metrics.cpu} color="cyan" icon={<Cpu size={18} />} />
                        <MetricCard title="Memory" value={`${metrics.ram.used} GB`} sub={`Limit: ${metrics.ram.total} GB`} percent={(metrics.ram.used / metrics.ram.total) * 100} color="purple" icon={<HardDrive size={18} />} />
                         
                         {/* TPS Card */}
                         <div className="bg-zinc-900/40 border border-white/5 p-4 rounded-xl relative overflow-hidden flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <span className="text-zinc-500 text-xs font-mono uppercase">Performance (TPS)</span>
                                <Box size={18} className="text-green-400" />
                            </div>
                            <div className="flex items-baseline gap-2 mt-2">
                                <span className="text-2xl font-bold text-white">{metrics.tps.toFixed(1)}</span>
                                <span className="text-xs text-zinc-500">ticks/s</span>
                            </div>
                            {/* CORREÇÃO DO ERRO: Usamos o array do estado, não Math.random direto */}
                            <div className="mt-3 flex gap-0.5 h-8 items-end">
                                {metrics.tpsHistory.map((h, i) => (
                                    <div 
                                        key={i} 
                                        className={`flex-1 rounded-sm transition-all duration-300 ${
                                            i < metrics.tps ? "bg-green-500/50" : "bg-zinc-800"
                                        }`}
                                        style={{ height: `${h}%` }} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Secondary Metrics & Graphs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Network I/O */}
                        <div className="bg-zinc-900/40 border border-white/5 p-5 rounded-xl flex flex-col justify-between">
                            <div className="flex justify-between items-start mb-4">
                                <p className="text-zinc-500 text-xs font-mono uppercase">Network Traffic</p>
                                <Wifi size={16} className="text-blue-400" />
                            </div>
                            <div className="flex gap-6">
                                <div>
                                    <div className="text-xs text-zinc-500 mb-1">Incoming</div>
                                    <div className="text-lg font-bold text-white flex items-center gap-2">
                                        {metrics.net.down} <span className="text-xs font-normal text-zinc-600">MB/s</span>
                                    </div>
                                    <div className="w-24 h-1 bg-zinc-800 rounded-full mt-2 overflow-hidden">
                                        <div className="h-full bg-blue-500" style={{ width: `${metrics.net.down * 5}%` }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-zinc-500 mb-1">Outgoing</div>
                                    <div className="text-lg font-bold text-white flex items-center gap-2">
                                        {metrics.net.up} <span className="text-xs font-normal text-zinc-600">MB/s</span>
                                    </div>
                                    <div className="w-24 h-1 bg-zinc-800 rounded-full mt-2 overflow-hidden">
                                        <div className="h-full bg-green-500" style={{ width: `${metrics.net.up * 10}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Disk & Entities */}
                        <div className="bg-zinc-900/40 border border-white/5 p-5 rounded-xl grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-zinc-500 text-xs font-mono uppercase mb-2">Disk I/O</p>
                                <div className="text-white font-mono text-sm">R: {metrics.disk.read} MB/s</div>
                                <div className="text-zinc-400 font-mono text-sm">W: {metrics.disk.write} MB/s</div>
                            </div>
                            <div>
                                <p className="text-zinc-500 text-xs font-mono uppercase mb-2">World Stats</p>
                                <div className="flex items-center gap-2 text-sm text-white">
                                    <Box size={14} className="text-yellow-500"/> {metrics.entities} Ent.
                                </div>
                                <div className="flex items-center gap-2 text-sm text-white mt-1">
                                    <Layers size={14} className="text-indigo-500"/> {metrics.chunks} Chunks
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions Footer */}
                    <div className="p-4 rounded-xl border border-white/5 bg-white/5 flex items-center justify-between">
                        <div className="text-xs text-zinc-400 font-mono">
                            UPTIME: <span className="text-white">12d 4h 32m</span>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 rounded-lg transition-all text-xs font-bold">
                                <Play size={14} /> RESTART
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg transition-all text-xs font-bold">
                                <Square size={14} className="fill-current"/> KILL
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* TAB 2: CONSOLE (Com Quick Commands) */}
            {activeTab === "console" && (
                <motion.div
                    key="console"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="flex flex-col h-full gap-4"
                >
                    {/* Quick Command Bar */}
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                        <QuickCmd label="Day" cmd="/time set day" icon={<Sun size={14}/>} color="yellow" />
                        <QuickCmd label="Night" cmd="/time set night" icon={<Moon size={14}/>} color="indigo" />
                        <QuickCmd label="Clear" cmd="/weather clear" icon={<CloudRain size={14}/>} color="blue" />
                        <QuickCmd label="Save" cmd="/save-all" icon={<Save size={14}/>} color="green" />
                        <QuickCmd label="Stop" cmd="/stop" icon={<Square size={14}/>} color="red" />
                    </div>

                    {/* Terminal Window */}
                    <div className="flex-grow bg-black border border-white/10 rounded-xl overflow-hidden flex flex-col shadow-inner font-mono text-sm relative">
                        <div className="bg-zinc-900 px-4 py-2 border-b border-white/5 flex items-center gap-2 text-xs text-zinc-500">
                            <Terminal size={12} /> root@vps:~# tail -f latest.log
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto space-y-1 custom-scrollbar">
                            {metrics.logs.map((log, i) => (
                                <div key={i} className="break-all border-l-2 border-transparent hover:border-zinc-700 pl-2 transition-colors">
                                    <span className="text-zinc-600 mr-2">{log.split(']:')[0]}]:</span>
                                    <span className={log.includes("WARN") ? "text-yellow-400" : log.includes("RCON") ? "text-cyan-400" : "text-zinc-300"}>
                                        {log.split(']:')[1]}
                                    </span>
                                </div>
                            ))}
                            <div ref={logsEndRef} />
                        </div>
                        {/* Input Line */}
                        <div className="p-3 bg-zinc-900/50 border-t border-white/5 flex items-center gap-2">
                            <span className="text-cyan-500 font-mono text-sm">{">"}</span>
                            <input 
                                type="text" 
                                placeholder="Send command..." 
                                className="bg-transparent border-none outline-none text-white text-sm font-mono flex-grow placeholder:text-zinc-600"
                            />
                        </div>
                    </div>
                </motion.div>
            )}

            {/* TAB 3: PLAYERS (Admin Tools) */}
            {activeTab === "players" && (
                <motion.div
                    key="players"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="h-full flex flex-col"
                >
                    <div className="bg-zinc-900/40 border border-white/5 rounded-xl overflow-hidden flex-grow flex flex-col">
                        <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-white/5">
                            <h4 className="text-sm font-bold text-white flex items-center gap-2">
                                <Users size={16} /> Online Players ({MOCK_PLAYERS.length}/20)
                            </h4>
                            <div className="flex gap-2">
                                <button className="text-[10px] bg-red-500/10 text-red-400 px-2 py-1 rounded border border-red-500/20 hover:bg-red-500/20">KICK ALL</button>
                            </div>
                        </div>
                        
                        <div className="flex-grow overflow-y-auto p-2 space-y-2 custom-scrollbar">
                            {MOCK_PLAYERS.map((player) => (
                                <div key={player.id} className="group flex items-center justify-between p-3 bg-black/20 border border-white/5 hover:border-white/10 rounded-lg transition-all">
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <img src={player.skin} alt="skin" className="w-10 h-10 rounded-md bg-zinc-800" />
                                            {player.op && <div className="absolute -bottom-1 -right-1 bg-yellow-500 text-black text-[8px] font-bold px-1 rounded shadow-sm">OP</div>}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">{player.name}</div>
                                            <div className="text-[10px] text-zinc-500 font-mono flex items-center gap-2">
                                                <span>UUID: 4829...</span>
                                                <span className={`flex items-center gap-1 ${player.ping < 50 ? 'text-green-500' : 'text-yellow-500'}`}>
                                                    <Wifi size={10} /> {player.ping}ms
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Admin Actions (Visible on Hover/Always on mobile) */}
                                    <div className="flex items-center gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                                        <ActionBtn icon={<MessageSquare size={14}/>} label="Msg" color="blue" />
                                        <ActionBtn icon={<Zap size={14}/>} label="Tp" color="yellow" />
                                        <ActionBtn icon={<Ban size={14}/>} label="Ban" color="red" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTES PARA LIMPEZA ---

function MetricCard({ title, value, sub, percent, color, icon }: any) {
    const colors: any = { cyan: "bg-cyan-500", purple: "bg-purple-500" };
    return (
        <div className="bg-zinc-900/40 border border-white/5 p-4 rounded-xl relative overflow-hidden flex flex-col justify-between">
            <div className="flex justify-between items-start mb-2">
                <span className="text-zinc-500 text-xs font-mono uppercase">{title}</span>
                <div className={`text-${color}-400`}>{icon}</div>
            </div>
            <div>
                <h3 className="text-2xl font-bold font-mono text-white mb-1">{value}</h3>
                <p className="text-xs text-zinc-500 mb-3">{sub}</p>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div animate={{ width: `${percent}%` }} className={`h-full ${colors[color]}`} />
                </div>
            </div>
        </div>
    );
}

function QuickCmd({ label, cmd, icon, color }: any) {
    const colors: any = {
        yellow: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20 hover:bg-yellow-500/20",
        indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20 hover:bg-indigo-500/20",
        blue: "text-blue-400 bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20",
        green: "text-green-400 bg-green-500/10 border-green-500/20 hover:bg-green-500/20",
        red: "text-red-400 bg-red-500/10 border-red-500/20 hover:bg-red-500/20",
    };
    return (
        <button className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-bold transition-all whitespace-nowrap ${colors[color]}`}>
            {icon} {label}
        </button>
    );
}

function ActionBtn({ icon, label, color }: any) {
    const colors: any = {
        blue: "text-blue-400 hover:bg-blue-500/20",
        yellow: "text-yellow-400 hover:bg-yellow-500/20",
        red: "text-red-400 hover:bg-red-500/20",
    };
    return (
        <button className={`p-2 rounded-lg transition-colors ${colors[color]}`} title={label}>
            {icon}
        </button>
    );
}