import React from 'react';
import { Activity, Shield, Cpu, Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            NexusFlow AI
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-blue-400 transition-colors">Innovation</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Agents</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Security</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Docs</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all shadow-lg shadow-blue-900/20">
            Get Started
          </button>
          <Menu className="w-6 h-6 text-slate-400 md:hidden" />
        </div>
      </div>
    </nav>
  );
};
