import React from 'react';
import { ShieldAlert, Activity, Map as MapIcon, Terminal } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-900">NexusFlow Command Center</h1>
        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium border border-green-200">
          System Status: Operational
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Preview */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border p-4 h-[400px] flex flex-col">
          <div className="flex items-center gap-2 mb-4 text-slate-600">
            <MapIcon size={20} />
            <span className="font-semibold">Global Logistics Heatmap</span>
          </div>
          <div className="flex-1 bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 italic">
            Interactive Map Interface (Google Maps API Placeholder)
          </div>
        </div>

        {/* Real-time Agent Log */}
        <div className="bg-slate-900 text-emerald-400 p-4 rounded-xl shadow-lg border border-slate-700 font-mono text-sm overflow-y-auto h-[400px]">
          <div className="flex items-center gap-2 mb-3 border-b border-slate-700 pb-2">
            <Terminal size={18} />
            <span className="uppercase tracking-wider">Agent Reasoning Log</span>
          </div>
          <div className="space-y-2">
            <p><span className="text-slate-500">[10:14:22]</span> [SentinelScout] Anomaly detected: SUEZ_DELAY_48H</p>
            <p><span className="text-slate-500">[10:14:25]</span> [ContextualNav] Analyzing impact: Typhoon Risk Index 74%</p>
            <p><span className="text-slate-500">[10:14:30]</span> [Orchestrator] Synthesizing reroute via Cape of Good Hope...</p>
            <p className="text-yellow-400">[10:14:35] [Action] GitLab PR #405 generated: Supply Chain Buffer Update</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border flex items-center gap-4">
          <div className="bg-blue-100 p-2 rounded-md"><Activity className="text-blue-600" /></div>
          <div><p className="text-sm text-slate-500">Network Latency</p><p className="text-xl font-bold">42ms</p></div>
        </div>
        <div className="bg-white p-4 rounded-lg border flex items-center gap-4">
          <div className="bg-red-100 p-2 rounded-md"><ShieldAlert className="text-red-600" /></div>
          <div><p className="text-sm text-slate-500">High Risk Clusters</p><p className="text-xl font-bold">3 Active</p></div>
        </div>
      </div>
    </div>
  );
}