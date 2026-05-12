import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <span className="text-xl font-bold text-white">NexusFlow AI</span>
          <p className="text-sm text-slate-500 max-w-xs">
            Autonomous agentic workflows for the next generation of strategic intelligence.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Product</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><a href="#" className="hover:text-blue-400">Features</a></li>
            <li><a href="#" className="hover:text-blue-400">Security</a></li>
            <li><a href="#" className="hover:text-blue-400">Innovation</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-slate-500">
            <li><a href="#" className="hover:text-blue-400">About</a></li>
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm">Social</h4>
          <div className="flex gap-4">
            <Github className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 text-slate-500 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 text-center">
        <p className="text-xs text-slate-600">
          © 2026 NexusFlow AI. Built with Gemini 2.5 and Agents Assemble.
        </p>
      </div>
    </footer>
  );
};
