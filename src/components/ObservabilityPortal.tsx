import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Search, Info } from 'lucide-react';

const data = [
  { name: '00:00', score: 0.01 }, { name: '04:00', score: 0.05 },
  { name: '08:00', score: 0.02 }, { name: '12:00', score: 0.12 },
  { name: '16:00', score: 0.03 }, { name: '20:00', score: 0.01 }
];

export const ObservabilityPortal = () => {
  return (
    <div className="p-6 space-y-6 bg-black min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
          <h3 className="text-slate-100 font-semibold mb-4 flex items-center gap-2"><Info size={16}/> Gemini Hallucination Score (Arize Trace)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{backgroundColor: '#0f172a', border: 'none'}} />
                <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 overflow-auto">
            <h3 className="text-slate-100 font-semibold mb-4">Recent Execution Traces</h3>
            <table className="w-full text-left text-sm text-slate-400">
                <thead><tr className="border-b border-slate-800"><th className="pb-2">Trace ID</th><th className="pb-2">Agent</th><th className="pb-2">Latency</th></tr></thead>
                <tbody>
                    <tr className="border-b border-slate-800/50"><td className="py-2 font-mono">tr-9821</td><td>Orchestrator</td><td>1.2s</td></tr>
                    <tr className="border-b border-slate-800/50"><td className="py-2 font-mono">tr-9819</td><td>Navigator</td><td>0.8s</td></tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};