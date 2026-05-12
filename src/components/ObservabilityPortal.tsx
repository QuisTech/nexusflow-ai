import React from 'react';
import { BarChart2, Search, Zap } from 'lucide-react';

export default function ObservabilityPortal() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4 border-b pb-4">
        <Zap className="text-amber-500" />
        <h2 className="text-2xl font-semibold">Arize Phoenix Observability</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
            <BarChart2 size={18} /> Hallucination Score Trends
          </h3>
          <div className="h-48 bg-slate-50 flex items-end justify-between p-4 gap-2">
             {/* Simulated Chart Bars */}
             {[40, 20, 10, 5, 2, 8, 3].map((h, i) => (
               <div key={i} className="bg-emerald-500 w-full rounded-t" style={{ height: `${h}%` }}></div>
             ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h3 className="text-lg font-medium mb-4">Trace Explorer</h3>
          <div className="space-y-3">
            <div className="p-3 bg-slate-50 rounded border text-sm flex justify-between cursor-pointer hover:bg-slate-100">
              <span>trace_exec_9921_reroute</span>
              <span className="text-green-600">Matched (0.98)</span>
            </div>
            <div className="p-3 bg-slate-50 rounded border text-sm flex justify-between cursor-pointer hover:bg-slate-100">
              <span>trace_exec_9918_inventory</span>
              <span className="text-green-600">Matched (0.95)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}