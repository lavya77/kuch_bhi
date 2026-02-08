import React, { useState } from 'react';
import { 
  Layout, Type, Image, Rocket, ChevronLeft, Layers, 
  Monitor, Smartphone, Plus, Trash2, Copy, Globe, 
  Navigation, CreditCard, Mail, AlignLeft, Palette, 
  Settings, Box, Check, X, MousePointer2, MoveDown
} from 'lucide-react';

/**
 * ZEROSPACE STUDIO
 * Added 'onPublish' prop to connect to the PublishControl page
 */
const Editor = ({ onExit, onPublish }) => { // 1. Receive the prop here
  const [device, setDevice] = useState('desktop');
  const [globalTheme, setGlobalTheme] = useState({ 
    bg: '#ffffff', 
    accent: '#2563eb', 
    radius: '1.5rem' 
  });

  const [blocks, setBlocks] = useState([
    { id: 'n1', type: 'navbar', data: { brand: 'ZEROSPACE' } },
    { id: 'h1', type: 'hero', data: { title: 'The Infinite Canvas.', sub: 'Scroll down to see your sections.' } }
  ]);

  const addBlockAtEnd = (type) => {
    const newBlock = {
      id: Math.random().toString(36).substr(2, 9),
      type: type || 'hero',
      data: { title: 'New Section', sub: 'Customize this part of your page...' }
    };
    setBlocks([...blocks, newBlock]);
  };

  const addBlockInBetween = (index, type) => {
    const newBlock = {
      id: Math.random().toString(36).substr(2, 9),
      type: type || 'hero',
      data: { title: 'Inserted Section', sub: 'This was added in between.' }
    };
    const updated = [...blocks];
    updated.splice(index + 1, 0, newBlock);
    setBlocks(updated);
  };

  const deleteBlock = (id) => setBlocks(blocks.filter(b => b.id !== id));

  return (
    <div className="h-screen bg-[#080809] text-[#F5F5F7] font-sans flex flex-col overflow-hidden">
      
      {/* --- HEADER --- */}
      <header className="h-16 border-b border-white/5 bg-[#0D0D0E] flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-4">
          <button onClick={onExit} className="p-2 hover:bg-white/5 rounded-xl text-white/40"><ChevronLeft size={20}/></button>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 italic">Zerospace Studio</span>
        </div>

        <div className="flex items-center bg-black p-1 rounded-2xl border border-white/5">
          <button onClick={() => setDevice('desktop')} className={`p-2.5 rounded-xl ${device === 'desktop' ? 'bg-white/10 text-white' : 'text-white/20'}`}><Monitor size={18} /></button>
          <button onClick={() => setDevice('mobile')} className={`p-2.5 rounded-xl ${device === 'mobile' ? 'bg-white/10 text-white' : 'text-white/20'}`}><Smartphone size={18} /></button>
        </div>

        {/* 2. CONNECTED PUBLISH BUTTON */}
        <button 
          onClick={onPublish} // This calls setView('publish') in App.jsx
          className="px-6 py-2 bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-500 shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
        >
          Publish
        </button>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <aside className="w-80 border-r border-white/5 bg-[#0D0D0E] p-6 overflow-y-auto custom-scrollbar">
          <div className="space-y-10">
            <section className="space-y-4">
              <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Components Library</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { type: 'hero', icon: <Layout />, label: 'Hero' },
                  { type: 'bento', icon: <AlignLeft />, label: 'Bento' },
                  { type: 'features', icon: <Layers />, label: 'Cards' },
                  { type: 'footer', icon: <Mail />, label: 'Footer' },
                ].map((item) => (
                  <button 
                    key={item.type} 
                    onClick={() => addBlockAtEnd(item.type)}
                    className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/5 rounded-3xl hover:border-blue-500 hover:bg-blue-500/5 transition-all group"
                  >
                    <div className="text-white/20 group-hover:text-blue-500 mb-2">{item.icon}</div>
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">{item.label}</span>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </aside>

        <main className="flex-1 bg-[#050505] p-12 overflow-y-auto flex flex-col items-center custom-scrollbar scroll-smooth">
          <div 
            className={`transition-all duration-700 bg-white shadow-2xl relative
              ${device === 'desktop' ? 'w-full max-w-5xl rounded-3xl' : 'w-[375px] rounded-[3.5rem] border-[12px] border-[#111]'}
            `}
            style={{ backgroundColor: globalTheme.bg }}
          >
            {blocks.map((block, index) => (
              <React.Fragment key={block.id}>
                <div className="relative group overflow-hidden">
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 transition-all pointer-events-none z-10" />
                  
                  {block.type === 'navbar' && (
                    <div className="p-8 flex justify-between items-center border-b border-black/5" style={{ color: globalTheme.bg === '#000000' ? '#fff' : '#000' }}>
                      <span className="font-black text-2xl tracking-tighter italic uppercase" contentEditable>{block.data.brand}</span>
                      <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest opacity-40"><span>Gallery</span><span>Contact</span></div>
                    </div>
                  )}

                  {block.type === 'hero' && (
                    <div className="p-32 text-center space-y-8" style={{ color: globalTheme.bg === '#000000' ? '#fff' : '#000' }}>
                      <h1 className="text-8xl font-black tracking-tighter leading-[0.85] outline-none" contentEditable>{block.data.title}</h1>
                      <p className="text-xl text-slate-400 font-medium max-w-lg mx-auto leading-relaxed outline-none" contentEditable>{block.data.sub}</p>
                      <button className="px-12 py-5 text-white font-bold transition-all shadow-xl" style={{ backgroundColor: globalTheme.accent, borderRadius: globalTheme.radius }}>Action</button>
                    </div>
                  )}

                  {block.type === 'bento' && (
                    <div className="p-16 grid grid-cols-12 gap-6">
                      <div className="col-span-8 h-80 bg-slate-50 rounded-[3rem] p-12 flex flex-col justify-end">
                         <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Bento Node</h3>
                      </div>
                      <div className="col-span-4 h-80 bg-blue-600 rounded-[3rem] p-12 flex flex-col justify-end text-white">
                         <h3 className="text-2xl font-black italic">Speed</h3>
                      </div>
                    </div>
                  )}

                  <div className="absolute top-8 right-8 hidden group-hover:flex items-center gap-2 bg-white shadow-2xl border border-slate-100 p-2 rounded-2xl z-20">
                    <button onClick={() => deleteBlock(block.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors"><Trash2 size={18}/></button>
                  </div>
                </div>

                <div className="relative h-2 group/plus flex items-center justify-center">
                   <div className="w-full h-[1px] bg-blue-500/0 group-hover/plus:bg-blue-500/20 transition-all" />
                   <button 
                    onClick={() => addBlockInBetween(index, 'hero')}
                    className="absolute opacity-0 group-hover/plus:opacity-100 scale-75 group-hover/plus:scale-100 bg-blue-600 text-white p-2.5 rounded-full shadow-2xl transition-all z-30"
                   >
                     <Plus size={16} strokeWidth={3} />
                   </button>
                </div>
              </React.Fragment>
            ))}

            <div className="p-20 flex justify-center border-t border-black/5">
              <button 
                onClick={() => addBlockAtEnd('hero')}
                className="group flex flex-col items-center gap-4 text-slate-300 hover:text-blue-500 transition-all"
              >
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate-200 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-50 transition-all">
                  <Plus size={32} />
                </div>
                <span className="text-xs font-black uppercase tracking-widest">Append New Page Section</span>
              </button>
            </div>
          </div>
          
          <div className="h-40 w-full shrink-0" />
        </main>

        <aside className="w-80 border-l border-white/5 bg-[#0D0D0E] p-8 overflow-y-auto custom-scrollbar">
          <section className="space-y-8">
            <h3 className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] flex items-center gap-2"><Palette size={14}/> Design System</h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-white/40 uppercase">Background</label>
                <div className="flex gap-2">
                  {['#ffffff', '#000000', '#F8F9FB'].map(c => (
                    <button key={c} onClick={() => setGlobalTheme({...globalTheme, bg: c})} className="w-10 h-10 rounded-xl border border-white/10" style={{backgroundColor: c}} />
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-white/40 uppercase">Accent</label>
                <div className="flex gap-2">
                  {['#2563eb', '#9333ea', '#ef4444'].map(c => (
                    <button key={c} onClick={() => setGlobalTheme({...globalTheme, accent: c})} className="w-8 h-8 rounded-full" style={{backgroundColor: c}} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Editor;