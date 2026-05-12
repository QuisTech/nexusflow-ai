import React from 'react';
import { Database, Search, RefreshCw } from 'lucide-react';

export const InventoryMatrix = () => {
  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <div className="relative w-96">
          <Search className="absolute left-3 top-2.5 text-slate-500" size={18} />
          <input className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2 pl-10 pr-4 text-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Search MongoDB Atlas & Elastic..." />
        </div>
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
          <RefreshCw size={18} /> Manual Sync
        </button>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-slate-300">
          <thead className="bg-slate-800 text-slate-400 text-xs uppercase">
            <tr>
              <th className="p-4">SKU</th>
              <th className="p-4">Warehouse</th>
              <th className="p-4">Current Stock</th>
              <th className="p-4">Status</th>
              <th className="p-4">Auto-Restock</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {[1, 2, 3, 4].map(i => (
              <tr key={i} className="hover:bg-slate-800/50">
                <td className="p-4 font-mono text-blue-400">NX-880{i}</td>
                <td className="p-4">Berlin-North</td>
                <td className="p-4">{120 * i} units</td>
                <td className="p-4"><span className="px-2 py-1 bg-green-900/30 text-green-400 rounded-full text-xs">Optimal</span></td>
                <td className="p-4"><input type="checkbox" defaultChecked className="accent-blue-500" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};