import { Card } from "@/components/ui/card";

export function TechOrbit() {
  return (
    <section className="w-full max-w-4xl mx-auto py-24 relative flex items-center justify-center overflow-visible h-[600px]">
      
      {/* Central "Gravity" Point */}
      <div className="z-20">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-[#050505] border-2 border-[#ededed] flex items-center justify-center text-center p-4 rounded-full shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)] relative">
          <span className="font-mono text-xs md:text-sm font-bold tracking-widest text-[#ededed]">
            YOUR<br/>PORTFOLIO
          </span>
          {/* Static Center Decoration */}
          <div className="absolute inset-2 border border-[#27272a] rounded-full opacity-50" />
        </div>
      </div>

      {/* Orbit Ring 1 - Fast / Inner */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[280px] h-[280px] border border-[#27272a]/50 rounded-full animate-orbit flex items-center justify-center">
          {/* Item 1 */}
          <div className="absolute -top-4 bg-[#0a0a0a] border border-[#27272a] px-2 py-1 text-[10px] font-mono text-[#a1a1aa] animate-orbit-reverse">
            [ TS ]
          </div>
          {/* Item 2 */}
          <div className="absolute -bottom-4 bg-[#0a0a0a] border border-[#27272a] px-2 py-1 text-[10px] font-mono text-[#a1a1aa] animate-orbit-reverse">
            [ RUST ]
          </div>
        </div>
      </div>

      {/* Orbit Ring 2 - Slow / Outer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[450px] h-[450px] border border-[#27272a]/30 rounded-full animate-orbit-reverse flex items-center justify-center">
           {/* Item 1 */}
           <div className="absolute top-1/4 -right-2 bg-[#0a0a0a] border border-[#27272a] px-3 py-1 text-xs font-mono text-[#ededed] animate-orbit">
            [ PYTHON ]
          </div>
          {/* Item 2 */}
          <div className="absolute bottom-1/4 -left-2 bg-[#0a0a0a] border border-[#27272a] px-3 py-1 text-xs font-mono text-[#ededed] animate-orbit">
            [ GOLANG ]
          </div>
          {/* Item 3 */}
          <div className="absolute -bottom-3 bg-[#0a0a0a] border border-[#27272a] px-3 py-1 text-xs font-mono text-[#ededed] animate-orbit">
            [ REACT ]
          </div>
        </div>
      </div>

       {/* Orbit Ring 3 - Large / Background Decoration */}
       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] border border-[#27272a]/20 rounded-full dashed" />
      </div>

      {/* Description */}
      <div className="absolute bottom-0 text-center space-y-2">
        <p className="text-[#ededed] text-lg font-bold tracking-tight">Tech Orbit</p>
        <p className="text-[#a1a1aa] text-xs font-mono tracking-wide max-w-sm mx-auto">
          We identify the optimal stack from your target job description and map it to your existing skills.
        </p>
      </div>

    </section>
  );
}
