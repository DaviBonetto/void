export function ImpactSection() {
  return (
    <section className="w-full bg-[#000000] border-y border-[#27272a] py-24">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Big Metric */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
             <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-[#ededed] font-bold tracking-tight">LIVE DATA PROCESSING</span>
          </div>
          <h2 className="text-[120px] leading-none font-bold text-[#ededed] tracking-tighter">
            52
          </h2>
          <p className="text-[#a1a1aa] font-mono text-xl uppercase tracking-widest pl-2">
            Weekly Projects Generated
          </p>
        </div>

        {/* Right: Bar Chart & Stats */}
        <div className="space-y-8">
           <div className="space-y-4">
              <h4 className="text-[#ededed] font-bold text-lg">HIRING PROBABILITY BOOST</h4>
              <div className="flex items-end gap-2 h-40 w-full border-b border-[#27272a] pb-2">
                {[30, 45, 40, 60, 55, 75, 70, 90, 85, 100].map((h, i) => (
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
               <div className="text-3xl font-bold text-[#ededed]">2.4s</div>
               <div className="text-xs text-[#a1a1aa] uppercase tracking-widest mt-1">Avg. Generation Time</div>
             </div>
             <div className="p-4 border border-[#27272a] bg-[#050505]">
               <div className="text-3xl font-bold text-[#ededed]">98%</div>
               <div className="text-xs text-[#a1a1aa] uppercase tracking-widest mt-1">Code Compile Rate</div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}
