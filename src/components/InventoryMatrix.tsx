import React, { useState } from 'react';
import { Database, Search, RefreshCw, Box, AlertTriangle, CheckCircle2, ChevronRight, BarChart3 } from 'lucide-react';

export const InventoryMatrix = () => {
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 2000);
  };

  const inventory = [
    { sku: 'NX-8801', warehouse: 'Berlin-North', stock: 1240, status: 'Optimal', cloud: 'MongoDB', auto: true },
    { sku: 'NX-8802', warehouse: 'Singapore-East', stock: 450, status: 'Low', cloud: 'Elastic', auto: true },
    { sku: 'NX-8803', warehouse: 'NewYork-Hub', stock: 2900, status: 'Optimal', cloud: 'MongoDB', auto: false },
    { sku: 'NX-8804', warehouse: 'Rotterdam-Port', stock: 85, status: 'Critical', cloud: 'Elastic', auto: true },
    { sku: 'NX-8805', warehouse: 'Lagos-Main', stock: 1100, status: 'Optimal', cloud: 'Supabase', auto: true },
  ];

  return (
    <div className="p-8 space-y-6 bg-slate-950 min-h-full font-['Poppins']">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Inventory Intelligence Matrix</h1>
          <p className="text-slate-500 text-sm">Real-time synchronization across Multicloud Clusters.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 pl-10 pr-4 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all" 
              placeholder="Query SKU or Cluster..." 
            />
          </div>
          <button 
            onClick={handleSync}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg ${
              isSyncing ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/10'
            }`}
          >
            <RefreshCw size={16} className={isSyncing ? 'animate-spin' : ''} /> 
            {isSyncing ? 'Synchronizing...' : 'Live Sync'}
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MiniStat label="Global Stock" value="1.2M Units" color="blue" />
        <MiniStat label="Sync Frequency" value="Every 4s" color="emerald" />
        <MiniStat label="System Integrity" value="99.98%" color="purple" />
      </div>

      {/* Main Table Container */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-800/50 text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold">
            <tr>
              <th className="p-5">Product Unit</th>
              <th className="p-5">Regional Cluster</th>
              <th className="p-5">Inventory Depth</th>
              <th className="p-5">Risk Profile</th>
              <th className="p-5">Cloud Sync</th>
              <th className="p-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {inventory.map((item, i) => (
              <tr key={i} className="group hover:bg-blue-500/[0.02] transition-colors">
                <td className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-blue-500/30 transition-all">
                      <Box className="text-blue-400 w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-bold tracking-tight">{item.sku}</p>
                      <p className="text-[10px] text-slate-500 uppercase font-mono">Series-NX</p>
                    </div>
                  </div>
                </td>
                <td className="p-5 text-slate-300 font-medium">{item.warehouse}</td>
                <td className="p-5">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-[10px] text-slate-500 mb-0.5">
                      <span>{item.stock} Units</span>
                      <span>Target: 2,500</span>
                    </div>
                    <div className="w-40 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${
                          item.status === 'Critical' ? 'bg-red-500' : 
                          item.status === 'Low' ? 'bg-amber-500' : 'bg-emerald-500'
                        }`}
                        style={{ width: `${Math.min((item.stock / 2500) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td className="p-5">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${
                    item.status === 'Optimal' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                    item.status === 'Low' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                    'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}>
                    {item.status === 'Optimal' ? <CheckCircle2 size={12} /> : <AlertTriangle size={12} />}
                    {item.status}
                  </span>
                </td>
                <td className="p-5">
                   <div className="flex items-center gap-2">
                     <div className={`w-1.5 h-1.5 rounded-full ${isSyncing ? 'animate-pulse bg-blue-500' : 'bg-slate-600'}`} />
                     <span className="text-[11px] text-slate-400 font-mono tracking-tighter">{item.cloud} DB</span>
                   </div>
                </td>
                <td className="p-5 text-right">
                  <button className="p-2 text-slate-600 hover:text-blue-400 hover:bg-blue-500/5 rounded-lg transition-all">
                    <BarChart3 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const MiniStat = ({ label, value, color }: any) => {
  const colors: any = {
    blue: 'text-blue-400 bg-blue-500/5 border-blue-500/20',
    emerald: 'text-emerald-400 bg-emerald-500/5 border-emerald-500/20',
    purple: 'text-purple-400 bg-purple-500/5 border-purple-500/20',
  };
  return (
    <div className={`p-4 rounded-2xl border ${colors[color]} flex justify-between items-center`}>
      <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">{label}</span>
      <span className="text-lg font-bold tracking-tight">{value}</span>
    </div>
  );
};