import React from 'react';
import { Database, RefreshCw, Search } from 'lucide-react';

export default function InventoryMatrix() {
  const items = [
    { id: 'SKU-001', name: 'Nvidia H100 Controller', stock: 450, status: 'In-Transit', location: 'Singapore' },
    { id: 'SKU-099', name: 'Lithium Battery Pack', stock: 12, status: 'Critical', location: 'Rotterdam' },
    { id: 'SKU-204', name: 'Fiber Optic Coil', stock: 2400, status: 'Optimal', location: 'Newark' },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2 font-semibold text-xl text-slate-800">
          <Database className="text-indigo-600" />
          MongoDB Atlas Inventory
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
            <input className="pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Search inventory via Elastic..." />
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
            <RefreshCw size={14} /> Sync Fivetran
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 text-slate-600 text-xs uppercase">
            <tr>
              <th className="p-4">SKU ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Stock Level</th>
              <th className="p-4">Location</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {items.map(item => (
              <tr key={item.id} className="border-t hover:bg-slate-50 transition-colors">
                <td className="p-4 font-mono">{item.id}</td>
                <td className="p-4 font-medium">{item.name}</td>
                <td className="p-4">{item.stock} units</td>
                <td className="p-4 text-slate-600">{item.location}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${item.status === 'Critical' ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-600'}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}