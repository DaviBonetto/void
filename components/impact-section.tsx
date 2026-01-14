export function ImpactSection() {
  return (
    <section className="w-full bg-[#000000] border-y border-[#27272a] py-24">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Big Metric */}
        <div className="space-y-4">
          <h2 className="text-[100px] leading-none font-bold text-[#ededed] tracking-tighter">
            +45%
          </h2>
          <p className="text-[#a1a1aa] font-mono text-xl uppercase tracking-widest pl-2">
            Avg. Interview Probability Boost
          </p>
        </div>

        {/* Right: Bar Chart & Stats */}
        <div className="space-y-8">
           <div className="space-y-4">
              <h4 className="text-[#ededed] font-bold text-lg">HIRING PROBABILITY BOOST</h4>
              {/* Growth Curve Chart: Starts low, ends high */}
              <div className="flex items-end gap-2 h-40 w-full border-b border-[#27272a] pb-2">
                {[20, 25, 30, 40, 45, 55, 65, 75, 85, 100].map((h, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-[#27272a] hover:bg-[#ededed] transition-all duration-300"
                    style={{ height: `${h}%` }} 
                  />
                ))}
              </div>
           </div>

           <div className="grid grid-cols-2 gap-4">
             <div className="p-4 border border-[#27272a] bg-[#050505]">
               <div className="text-3xl font-bold text-[#ededed]">&lt; 2.5s</div>
               <div className="text-xs text-[#a1a1aa] uppercase tracking-widest mt-1">Analysis & Blueprint Generation</div>
             </div>
             <div className="p-4 border border-[#27272a] bg-[#050505]">
               <div className="text-3xl font-bold text-[#ededed]">1,204</div>
               <div className="text-xs text-[#a1a1aa] uppercase tracking-widest mt-1">Career Blueprints Architected</div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}
