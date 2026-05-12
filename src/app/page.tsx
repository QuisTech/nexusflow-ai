"use client";
import React, { useState } from 'react';
import Dashboard from '@/components/Dashboard';
import ObservabilityPortal from '@/components/ObservabilityPortal';
import InventoryMatrix from '@/components/InventoryMatrix';
import { LayoutDashboard, Microscope, Box } from 'lucide-react';

export default function NexusFlowApp() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center font-bold text-white">N</div>
          <span className="font-bold text-lg text-white tracking-tight">NexusFlow AI</span>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800'}`}
          >
            <LayoutDashboard size={20} /> Command Center
          </button>
          <button 
            onClick={() => setActiveTab('inventory')}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${activeTab === 'inventory' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800'}`}
          >
            <Box size={20} /> Inventory Matrix
          </button>
          <button 
            onClick={() => setActiveTab('obs')}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${activeTab === 'obs' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800'}`}
          >
            <Microscope size={20} /> Observability
          </button>
        </nav>

        <div className="p-6 text-xs text-slate-500 border-t border-slate-800">
          Powered by Gemini 1.5 Pro & GCP
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'obs' && <ObservabilityPortal />}
        {activeTab === 'inventory' && <InventoryMatrix />}
      </main>
    </div>
  );
}