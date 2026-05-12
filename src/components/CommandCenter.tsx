import React, { useState, useEffect, useRef } from 'react';
import { Activity, Map as MapIcon, ShieldAlert, Zap, Terminal, Cpu, Share2 } from 'lucide-react';

export const CommandCenter = () => {
  const [logs, setLogs] = useState([
    { id: 1, agent: 'StratAgent', time: '14:20:01', msg: 'Analyzing global port congestion patterns...', type: 'info' },
    { id: 2, agent: 'Guardian', time: '14:20:05', msg: 'Security handshake verified for Rotterdam terminal.', type: 'success' },
    { id: 3, agent: 'Weaver', time: '14:20:12', msg: 'Optimizing inland logistics for Singapore cluster.', type: 'action' },
  ]);

  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const agents = ['StratAgent', 'Guardian', 'Weaver'];
      const msgs = [
        'Recalculating routing via Cape of Good Hope...',
        'Threat level at Suez Canal: STABLE.',
        'Injecting adaptive delay to offset weather patterns.',
        'Synchronizing inventory with regional distribution hubs.',
        'Detected potential bottleneck in North Sea transit.'
      ];
      const newLog = {
        id: Date.now(),
        agent: agents[Math.floor(Math.random() * agents.length)],
        time: new Date().toLocaleTimeString(),
        msg: msgs[Math.floor(Math.random() * msgs.length)],
        type: Math.random() > 0.8 ? 'warning' : 'info'
      };
      setLogs(prev => [...prev.slice(-15), newLog]);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="flex flex-col h-full bg-slate-950 font-['Poppins']">
      {/* Top Status Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border-b border-slate-800 bg-slate-900/50">
        <StatusCard title="Active Agents" value="3/3" icon={<Cpu className="text-blue-400" />} />
        <StatusCard title="Global Latency" value="12ms" icon={<Activity className="text-emerald-400" />} />
        <StatusCard title="Security Status" value="ENCRYPTED" icon={<ShieldAlert className="text-red-400" />} />
        <StatusCard title="Nodes Online" value="1,248" icon={<Share2 className="text-purple-400" />} />
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 overflow-hidden">
        {/* Main Map Visualization */}
        <div className="lg:col-span-2 relative bg-black/40 border border-slate-800 rounded-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute top-4 left-4 z-10 flex items-center gap-3">
             <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
               <MapIcon className="text-blue-400 w-5 h-5" />
             </div>
             <div>
               <h2 className="text-white font-bold tracking-tight">Neural Supply Matrix</h2>
               <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Live Geospatial Intelligence</p>
             </div>
          </div>

          <div className="h-full w-full flex items-center justify-center relative">
             {/* Animated SVG Map Simulation */}
             <svg className="w-4/5 h-4/5 opacity-20" viewBox="0 0 800 400">
               <path d="M150,200 Q400,50 650,200 T400,350 Z" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5,5" className="animate-[spin_20s_linear_infinite]" />
               <circle cx="400" cy="200" r="150" fill="none" stroke="#3b82f6" strokeWidth="0.5" className="animate-pulse" />
               <rect x="390" y="190" width="20" height="20" className="fill-blue-500/20 stroke-blue-500 animate-bounce" />
             </svg>
             <div className="absolute inset-0 flex items-center justify-center">
               <p className="text-blue-400/40 text-xs font-mono uppercase tracking-[0.3em] animate-pulse">Scanning Global Vectors...</p>
             </div>
          </div>
        </div>

        {/* Terminal / Reasoning Log */}
        <div className="flex flex-col bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-black/20">
            <h2 className="text-white text-sm font-bold flex items-center gap-2">
              <Terminal className="text-purple-400 w-4 h-4" /> 
              Agent Reasoner
            </h2>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-amber-500/50" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs">
            {logs.map((log) => (
              <div key={log.id} className="group border-l-2 border-slate-800 hover:border-blue-500/50 pl-3 py-1 transition-all">
                <div className="flex justify-between items-center mb-1">
                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase ${
                    log.agent === 'StratAgent' ? 'bg-blue-500/10 text-blue-400' :
                    log.agent === 'Guardian' ? 'bg-red-500/10 text-red-400' :
                    'bg-purple-500/10 text-purple-400'
                  }`}>
                    {log.agent}
                  </span>
                  <span className="text-slate-600 tabular-nums">{log.time}</span>
                </div>
                <p className={`${log.type === 'warning' ? 'text-amber-400' : 'text-slate-300'} leading-relaxed`}>
                  {log.msg}
                </p>
              </div>
            ))}
            <div ref={logEndRef} />
          </div>

          <div className="p-3 bg-black/40 border-t border-slate-800 flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
             <input 
               type="text" 
               placeholder="Issue command to NexusFlow Neural Core..." 
               className="bg-transparent border-none text-xs text-slate-400 focus:outline-none w-full italic"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusCard = ({ title, value, icon }: any) => (
  <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl flex items-center gap-4 hover:border-slate-700 transition-colors">
    <div className="p-2 bg-slate-800 rounded-lg">{icon}</div>
    <div>
      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{title}</p>
      <p className="text-lg font-bold text-white tracking-tight leading-tight">{value}</p>
    </div>
  </div>
);