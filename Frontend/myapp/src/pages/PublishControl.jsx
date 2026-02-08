import React, { useState } from 'react';
import { 
  Globe, Shield, Zap, Lock, Eye, 
  Settings, ChevronLeft, CheckCircle, 
  AlertCircle, ExternalLink, Activity, Cloud
} from 'lucide-react';

const PublishControl = ({ onBack, domainName = "yourdomain.com" }) => {
  const [isPublished, setIsPublished] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(true);

  // Connection logic for when the user wants to jump back to editing
  const handleEditRequest = () => {
    if (onBack) onBack();
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 font-sans selection:bg-blue-100 animate-in fade-in duration-700">
      
      {/* --- TOP NAV --- */}
      <nav className="h-20 border-b border-slate-200 bg-white flex items-center justify-between px-8 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleEditRequest} 
            className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400 group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <div className="h-6 w-[1px] bg-slate-200" />
          <span className="font-bold tracking-tight text-slate-900 uppercase italic">
            Zerospace <span className="text-slate-400 font-medium">/ Console</span>
          </span>
        </div>
        <div className="flex items-center gap-2 px-4 py-1.5 bg-green-50 rounded-full border border-green-100">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">Edge Cluster: Active</span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto pt-20 pb-32 px-6">
        
        {/* --- HEADER --- */}
        <div className="mb-12 space-y-4">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">Console.</h1>
          <p className="text-xl text-slate-500 font-medium max-w-xl">
            Control your deployment state, manage global visibility, and monitor system health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Main Status Toggle */}
          <div className="md:col-span-2 bg-white rounded-[3rem] p-10 border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[400px]">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold">Public Visibility</h2>
                  <p className="text-slate-400 text-sm font-medium">Make your space accessible to the web.</p>
                </div>
                <div 
                  onClick={() => setIsPublished(!isPublished)}
                  className={`w-16 h-8 rounded-full cursor-pointer transition-all relative p-1 ${isPublished ? 'bg-blue-600 shadow-lg shadow-blue-200' : 'bg-slate-200'}`}
                >
                  <div className={`w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isPublished ? 'translate-x-8' : 'translate-x-0'}`} />
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between group cursor-pointer hover:border-blue-200 transition-all">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl transition-all ${isPublished ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-slate-300 shadow-sm'}`}>
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300">Live Endpoint</p>
                    <p className="font-bold text-slate-700 underline underline-offset-4 decoration-blue-500/30 tracking-tight">{domainName}</p>
                  </div>
                </div>
                <ExternalLink size={18} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <Cloud size={14} className="text-blue-500" /> Edge Caching v2
              </div>
              <button className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 transition-colors">Purge Static Assets</button>
            </div>
          </div>

          {/* Maintenance Toggle */}
          <div className={`rounded-[3rem] p-10 border transition-all duration-500 flex flex-col justify-between ${maintenanceMode ? 'bg-amber-50 border-amber-200 shadow-xl shadow-amber-500/5' : 'bg-white border-slate-200'}`}>
            <div className="space-y-4">
              <div className={`w-14 h-14 rounded-3xl flex items-center justify-center transition-all ${maintenanceMode ? 'bg-amber-500 text-white shadow-xl shadow-amber-200 rotate-12' : 'bg-slate-100 text-slate-400'}`}>
                <Lock size={28} />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Lock System</h3>
              <p className="text-sm font-medium opacity-50 leading-relaxed italic">Activate a "Coming Soon" splash page while you iterate.</p>
            </div>
            
            <button 
              onClick={() => setMaintenanceMode(!maintenanceMode)}
              className={`w-full py-5 rounded-[2rem] text-[10px] font-black uppercase tracking-[0.2em] transition-all active:scale-95 ${maintenanceMode ? 'bg-amber-600 text-white shadow-xl shadow-amber-100' : 'bg-slate-900 text-white'}`}
            >
              {maintenanceMode ? 'Unlock Space' : 'Lock Space'}
            </button>
          </div>
        </div>

        {/* --- SYSTEM STATS --- */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-10 bg-white border border-slate-200 rounded-[3rem] space-y-5 group hover:border-blue-500/20 transition-all">
            <div className="flex items-center gap-3 text-slate-300 group-hover:text-blue-500 transition-colors">
              <Zap size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Global Latency</span>
            </div>
            <div className="text-5xl font-black tracking-tighter">14<span className="text-sm text-slate-300 ml-1 font-medium">ms</span></div>
            <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 w-[94%]" />
            </div>
          </div>

          <div className="p-10 bg-white border border-slate-200 rounded-[3rem] space-y-5">
            <div className="flex items-center gap-3 text-slate-300">
              <Shield size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">SSL Safety</span>
            </div>
            <div className="text-2xl font-black italic uppercase tracking-tight flex items-center gap-2 text-slate-800">
              <CheckCircle size={24} className="text-green-500" />
              Verified
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Edge encryption active</p>
          </div>

          <div className="p-10 bg-[#0A0A0B] rounded-[3rem] space-y-5 text-white shadow-2xl shadow-black/10">
            <div className="flex items-center gap-3 text-white/30">
              <Activity size={20} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Live Traffic</span>
            </div>
            <div className="text-5xl font-black tracking-tighter">0<span className="text-sm text-white/20 ml-1 font-medium">req</span></div>
            <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Awaiting First hit</p>
          </div>
        </div>

      </main>

      {/* Decorative ID */}
      <div className="fixed bottom-12 left-12 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <h3 className="text-[250px] font-black leading-none text-slate-900 tracking-tighter">03</h3>
      </div>
    </div>
  );
};

export default PublishControl;