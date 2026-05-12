import React from 'react';
import { Activity, Map as MapIcon, ShieldAlert, Zap } from 'lucide-react';

export const CommandCenter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-4 h-[500px] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white font-bold flex items-center gap-2"><MapIcon className="text-blue-400" /> Global Supply Chain Heatmap</h2>
          <span className="text-xs text-green-400 animate-pulse">● LIVE</span>
        </div>
        <div className="flex-1 bg-slate-800 rounded-lg flex items-center justify-center text-slate-500">
          [Google Maps API Integration Placeholder]
        </div>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
        <h2 className="text-white font-bold flex items-center gap-2 mb-4"><Activity className="text-purple-400" /> Agent Reasoning Log</h2>
        <div className="space-y-4 overflow-y-auto max-h-[400px] text-sm">
          {[1,2,3].map(i => (
            <div key={i} className="p-3 bg-slate-800 rounded-lg border-l-4 border-purple-500">
              <p className="text-purple-300 font-mono text-xs">[SentinelScout] 10:24:0{i} AM</p>
              <p className="text-slate-300">Detected anomalous latency in Suez Canal passage. Triggering ContextualNavigator...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};