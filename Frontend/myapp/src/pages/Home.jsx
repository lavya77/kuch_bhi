import React from 'react';

// Added onLaunch prop to connect to App.jsx
const Home = ({ onLaunch }) => {
  
  const handleLaunch = () => {
    // Now calls the parent function instead of reloading the page
    if (onLaunch) {
      onLaunch();
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111] font-sans overflow-x-hidden">
      {/* Dynamic Nav - Floating & Minimal */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl px-6 py-3 bg-white/80 backdrop-blur-xl border border-black/5 rounded-full flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-6 h-6 bg-blue-600 rounded-full transition-transform group-hover:scale-110 shadow-[0_0_15px_rgba(37,99,235,0.4)]" />
          <span className="font-bold tracking-tighter text-lg uppercase italic">zerospace</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-black transition-colors">Docs</a>
          <button 
            onClick={handleLaunch}
            className="text-[10px] font-bold uppercase tracking-widest px-5 py-2 bg-blue-600 text-white rounded-full active:scale-90 transition-all shadow-lg shadow-blue-100"
          >
            Launch
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 flex flex-col items-center">
        <div className="w-full max-w-6xl">
          <div className="space-y-4 mb-16">
            <h1 className="text-[12vw] md:text-[140px] font-black leading-[0.85] tracking-tighter text-center">
              DREAM <br />
              <span className="text-black/5">IT.</span> LIVE <br />
              <span className="inline-block hover:italic hover:text-blue-600 transition-all cursor-default">NOW.</span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-10 border-t border-black/5 pt-12">
            <p className="text-xl md:text-2xl font-medium tracking-tight max-w-md leading-tight text-black/40">
              Stop building. Start deploying. Zerospace gives you the keys to your own corner of the internet.
            </p>
            
            <button 
              onClick={handleLaunch}
              className="group relative inline-flex items-center justify-center px-12 py-8 bg-blue-600 text-white rounded-[2rem] overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-blue-100"
            >
              <span className="text-2xl font-bold tracking-tight z-10">Launch My Space</span>
              <div className="ml-4 opacity-70 group-hover:translate-x-2 transition-transform font-bold text-2xl">
                →
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="px-6 pb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Card 1: Domain */}
          <div className="md:col-span-7 h-[400px] bg-[#f8f9fb] border border-slate-100 rounded-[3rem] p-10 flex flex-col justify-between overflow-hidden group">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-blue-600 text-white px-3 py-1 rounded-full">Identity</span>
              <h2 className="text-4xl font-bold tracking-tight text-slate-900">Your name. <br/>Your domain.</h2>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl translate-y-10 group-hover:translate-y-4 transition-transform duration-500 border border-slate-100">
              <div className="flex items-center gap-3 text-lg font-mono text-slate-300">
                <span>https://</span>
                <span className="text-blue-600 animate-pulse font-bold">your-brand.com</span>
              </div>
            </div>
          </div>

          {/* Card 2: Speed */}
          <div className="md:col-span-5 h-[400px] bg-blue-600 rounded-[3rem] p-10 flex flex-col justify-between text-white shadow-2xl shadow-blue-100">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">Performance</span>
              <h2 className="text-4xl font-bold tracking-tight">Zero <br/>Latency.</h2>
            </div>
            <div className="text-8xl font-black opacity-20 text-right">0ms</div>
          </div>

          {/* Card 3: Editor */}
          <div className="md:col-span-12 h-[500px] bg-slate-900 rounded-[3rem] p-12 flex flex-col items-center justify-center text-center overflow-hidden relative border border-white/5">
            <div className="z-10 space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">The visual editor <br/> for the <span className="text-blue-500 italic">radical.</span></h2>
              <p className="text-white/40 text-xl max-w-xl mx-auto font-medium leading-relaxed">No code, no barriers. Just click, drag, and drop your way to a live site.</p>
            </div>
            <div className="absolute -bottom-20 w-3/4 h-64 bg-gradient-to-t from-blue-600/20 to-transparent blur-3xl opacity-50" />
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center border-t border-slate-100">
        <p className="text-[10px] font-bold tracking-[0.4em] text-slate-300 uppercase italic">ZerospaceUI // All Rights Reserved 2026</p>
      </footer>
    </div>
  );
};

export default Home;