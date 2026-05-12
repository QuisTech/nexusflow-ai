import { LandingPage } from '@/components/LandingPage';

export default function NexusFlowApp() {
  const [view, setView] = useState('landing');
  const [activeTab, setActiveTab] = useState('dashboard');

  if (view === 'landing') {
    return <LandingPage onLaunch={() => setView('app')} />;
  }

  return (
    <div className="flex flex-col h-screen bg-black text-slate-200">
      <header className="border-b border-slate-800 p-4 flex justify-between items-center bg-slate-950">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('landing')}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">N</div>
          <h1 className="text-xl font-bold tracking-tight text-white">NexusFlow <span className="text-blue-500 font-light italic">AI</span></h1>
        </div>
        <nav className="flex gap-2 bg-slate-900 p-1 rounded-lg">
          {[ 
            { id: 'dashboard', label: 'Command Center', icon: LayoutDashboard },
            { id: 'obs', label: 'Observability', icon: ShieldCheck },
            { id: 'inventory', label: 'Inventory', icon: Box },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition ${activeTab === tab.id ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-500 hover:text-slate-300'}`}
            >
              <tab.icon size={16} /> {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="flex-1 overflow-auto">
        {activeTab === 'dashboard' && <CommandCenter />}
        {activeTab === 'obs' && <ObservabilityPortal />}
        {activeTab === 'inventory' && <InventoryMatrix />}
      </main>
    </div>
  );
}