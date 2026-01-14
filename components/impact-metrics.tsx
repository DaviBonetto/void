export function ImpactMetrics() {
  return (
    <section className="w-full bg-[#000000] border-y border-[#27272a] py-16">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: Hireability Score */}
        <div className="space-y-4">
          <h4 className="text-[#a1a1aa] text-xs font-mono uppercase tracking-widest">Market Relevance</h4>
          <div className="h-32 flex items-end gap-1">
             {/* Simple CSS Bar Chart Simulation */}
             {[20, 35, 45, 30, 50, 65, 55, 70, 85, 80, 95, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-[#27272a] hover:bg-[#ededed] transition-colors duration-500" style={{ height: `${h}%` }}></div>
             ))}
          </div>
          <p className="text-[#ededed] font-mono text-sm"> hireability_score.increase()</p>
        </div>

        {/* Card 2: Blueprints Available */}
        <div className="space-y-4 flex flex-col justify-end">
           <h4 className="text-[#a1a1aa] text-xs font-mono uppercase tracking-widest">Project Blueprints</h4>
           <div className="flex items-baseline gap-2">
             <span className="text-6xl font-bold text-[#ededed] tracking-tighter">52</span>
             <span className="text-[#a1a1aa] font-mono text-sm">templates</span>
           </div>
           
           {/* Grid Pattern */}
           <div className="h-16 w-full grid grid-cols-8 gap-1 opacity-50">
             {Array.from({ length: 32 }).map((_, i) => (
               <div key={i} className={`bg-[#27272a] ${i % 3 === 0 ? 'opacity-40' : 'opacity-100'}`} />
             ))}
           </div>
        </div>

        {/* Card 3: Optimization Rate */}
        <div className="space-y-4 flex flex-col justify-between">
           <h4 className="text-[#a1a1aa] text-xs font-mono uppercase tracking-widest">System Optimization</h4>
           
           <div className="space-y-2 font-mono text-sm">
             <div className="flex justify-between border-b border-[#27272a] pb-1">
               <span className="text-[#a1a1aa]">Interview Rate</span>
               <span className="text-[#ededed]">+40%</span>
             </div>
             <div className="flex justify-between border-b border-[#27272a] pb-1">
               <span className="text-[#a1a1aa]">Skill Gap</span>
               <span className="text-[#ededed]">-85%</span>
             </div>
             <div className="flex justify-between border-b border-[#27272a] pb-1">
               <span className="text-[#a1a1aa]">Portfolio Value</span>
               <span className="text-[#ededed]">2.5x</span>
             </div>
           </div>

           <div className="w-full bg-[#0a0a0a] border border-[#27272a] h-8 relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-[#ededed] w-[85%] opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center text-[10px] text-[#ededed] font-mono uppercase tracking-widest">
                Optimization Complete
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}
