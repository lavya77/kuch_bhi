import React, { useState } from 'react';
import { Globe, Rocket, Shield, Check, Loader2, ArrowLeft, ChevronRight, Server, Zap } from 'lucide-react';

/**
 * ZEROSPACE UI - DEPLOYMENT STUDIO
 * Connected version for App.jsx
 */

const Website = ({ onDeploySuccess, onBack }) => {
  const [step, setStep] = useState(1);
  const [domain, setDomain] = useState('');
  const [isDeploying, setIsDeploying] = useState(false);

  const startDeployment = () => {
    setIsDeploying(true);
    
    // Phase 1: Resource Allocation
    setTimeout(() => setStep(2), 2000);
    
    // Phase 2: DNS Config
    setTimeout(() => setStep(3), 4000);
    
    // Phase 3: Finalize and move to Editor
    setTimeout(() => {
      if (onDeploySuccess) {
        onDeploySuccess();
      }
    }, 5500);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 font-sans selection:bg-blue-100">
      
      {/* --- HEADER --- */}
      <nav className="h-20 border-b border-slate-200 bg-white sticky top-0 z-50 flex items-center justify-between px-8">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack} 
            className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <div className="h-6 w-[1px] bg-slate-200" />
          <span className="font-bold tracking-tight text-slate-900 uppercase italic">
            Zerospace <span className="text-slate-400 font-medium">/ Studio</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold transition-all duration-500 ${step >= i ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-100 text-slate-400'}`}>
                {step > i ? <Check size={12} strokeWidth={3} /> : i}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-3xl mx-auto pt-24 pb-20 px-6">
        
        {!isDeploying ? (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 leading-none">
                Reserve <br/> your space.
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">Choose a project name and connect a domain. We’ll handle the global infrastructure.</p>
            </div>

            <div className="space-y-8 bg-white p-10 rounded-[3rem] border border-slate-200 shadow-[0_30px_60px_rgba(0,0,0,0.02)]">
              {/* Project Name */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Project Name</label>
                <input 
                  type="text" 
                  placeholder="my-creative-agency"
                  className="w-full px-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-lg font-bold"
                />
              </div>

              {/* Domain Input */}
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Connect Domain</label>
                <div className="relative">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300">
                    <Globe size={20} />
                  </div>
                  <input 
                    type="text" 
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="yourdomain.com"
                    className="w-full pl-16 pr-6 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-lg font-bold text-blue-600"
                  />
                </div>
                <div className="flex items-center gap-2 px-2 text-[10px] font-black text-blue-600 uppercase tracking-widest">
                  <Shield size={12} />
                  <span>Free SSL Certificate Included</span>
                </div>
              </div>

              <button 
                onClick={startDeployment}
                disabled={!domain}
                className="w-full py-6 bg-blue-600 text-white rounded-3xl font-black text-xl hover:bg-blue-700 disabled:opacity-20 disabled:grayscale transition-all shadow-2xl shadow-blue-100 flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                Deploy to Edge
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        ) : (
          /* --- DEPLOYMENT LOADING STATE --- */
          <div className="space-y-10 py-12 animate-in fade-in duration-500">
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-[2.5rem] flex items-center justify-center mx-auto mb-4 animate-bounce shadow-inner">
                <Rocket size={44} />
              </div>
              <div className="space-y-2">
                <h2 className="text-4xl font-black tracking-tighter">Building instance...</h2>
                <p className="text-slate-400 font-medium">Provisioning servers and configuring edge nodes.</p>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-200 overflow-hidden shadow-sm">
              {[
                { id: 1, label: 'Allocating Compute Resources', icon: <Server size={20}/> },
                { id: 2, label: 'Configuring Domain & SSL', icon: <Globe size={20}/> },
                { id: 3, label: 'Pushing to Global Edge', icon: <Zap size={20}/> }
              ].map((item) => (
                <div key={item.id} className={`flex items-center justify-between p-8 border-b border-slate-50 last:border-0 transition-all duration-500 ${step < item.id ? 'opacity-20 grayscale' : 'opacity-100'}`}>
                  <div className="flex items-center gap-5">
                    <div className={`${step === item.id ? 'text-blue-600' : 'text-slate-400'}`}>
                      {item.icon}
                    </div>
                    <span className="font-bold text-slate-700 text-lg tracking-tight">{item.label}</span>
                  </div>
                  {step > item.id ? (
                    <div className="w-8 h-8 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                      <Check size={18} strokeWidth={3} />
                    </div>
                  ) : step === item.id ? (
                    <Loader2 size={24} className="animate-spin text-blue-600" />
                  ) : null}
                </div>
              ))}
            </div>
            
            <div className="flex justify-center pt-8">
              <div className="px-5 py-2.5 bg-white border border-slate-100 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">
                System: Global Cluster / Region: Auto-Optimize
              </div>
            </div>
          </div>
        )}
      </main>

      {/* --- DECORATIVE BACKGROUND --- */}
      <div className="fixed bottom-12 right-12 hidden lg:block opacity-[0.03] pointer-events-none select-none">
        <h3 className="text-[250px] font-black tracking-tighter text-slate-900 leading-none">01</h3>
      </div>
    </div>
  );
};

export default Website;