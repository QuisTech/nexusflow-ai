import React, { useEffect, useRef } from 'react';
import { Cpu, Activity, Shield, Zap, Terminal, ChevronRight, Play } from 'lucide-react';

export const LandingPage = ({ onLaunch }: { onLaunch: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const BLOBS = [
      { x: 0.14, y: 0.18, r: 0.28, color: [59, 130, 246], speed: 0.00018, phase: 0 },
      { x: 0.83, y: 0.14, r: 0.22, color: [147, 51, 234], speed: 0.00014, phase: 1.8 },
      { x: 0.70, y: 0.73, r: 0.26, color: [34, 197, 94], speed: 0.00016, phase: 0.9 },
    ];

    let W: number, H: number;
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      BLOBS.forEach(b => {
        const ox = Math.sin(t * b.speed + b.phase) * 0.07 * W;
        const oy = Math.cos(t * b.speed * 0.7 + b.phase) * 0.07 * H;
        const cx = b.x * W + ox, cy = b.y * H + oy;
        const r = b.r * Math.min(W, H);
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, `rgba(${b.color.join(',')}, 0.1)`);
        g.addColorStop(1, `rgba(${b.color.join(',')}, 0)`);
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = g; ctx.fill();
      });
      requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    requestAnimationFrame(draw);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 font-['Poppins'] overflow-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-400">Google Gemini Agent Hackathon</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
            NexusFlow AI
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            The first <span className="text-white font-semibold">Autonomous Intelligence Node</span> that orchestrates multi-agent workflows for enterprise-scale resilience.
          </p>

          <div className="flex gap-4">
            <button 
              id="hero-launch-btn"
              onClick={onLaunch}
              className="group flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-2xl shadow-blue-500/20"
            >
              <Play className="w-5 h-5 fill-current" />
              Launch Neural Console
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-bold transition-all">
              View Blueprint
            </button>
          </div>
        </div>
      </section>

      {/* Specialist Agents Grid */}
      <section id="agents-section" className="relative z-10 py-20 px-6 bg-slate-900/50 backdrop-blur-xl border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Autonomous Specialists</span>
            <h2 className="text-4xl font-bold mt-2">One Core. Infinite Agents.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AgentCard 
              id="agent-strat"
              icon={<Cpu className="w-6 h-6" />}
              title="Strategic Orchestrator"
              desc="The brain of the operation. Routes intents and manages long-term memory across all agents."
              tags={["Gemini 2.5", "ADK Core"]}
            />
            <AgentCard 
              id="agent-security"
              icon={<Shield className="w-6 h-6" />}
              title="Sentinel Guardian"
              desc="Real-time threat detection and mitigation agent for autonomous systems."
              tags={["Security", "E2E Encryption"]}
            />
            <AgentCard 
              id="agent-ops"
              icon={<Activity className="w-6 h-6" />}
              title="Workflow Weaver"
              desc="Automates complex, multi-step business processes with zero human intervention."
              tags={["Automation", "Low-Latency"]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-white/5 text-center">
        <p className="text-slate-500 text-sm">© 2026 NexusFlow AI. Powered by Google Gemini.</p>
      </footer>
    </div>
  );
};

const AgentCard = ({ id, icon, title, desc, tags }: any) => (
  <div id={id} className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all cursor-default">
    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-6">{desc}</p>
    <div className="flex gap-2">
      {tags.map((t: string) => (
        <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
          {t}
        </span>
      ))}
    </div>
  </div>
);
