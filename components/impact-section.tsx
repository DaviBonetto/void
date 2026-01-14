export function ImpactSection() {
  return (
    <section className="w-full bg-[#050505] border-y border-[#27272a] py-32">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold tracking-tighter text-[#ededed] uppercase">
            System Performance
          </h3>
          <p className="text-[#a1a1aa] font-mono text-xs uppercase tracking-widest">
            Real-time impact analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Box 1 */}
          <div className="flex flex-col items-center justify-center p-10 border border-[#27272a] bg-[#000000] hover:border-[#ededed] transition-colors duration-300">
            <h2 className="text-6xl sm:text-7xl font-bold text-[#ededed] tracking-tighter mb-4">
              +45%
            </h2>
            <p className="text-[#a1a1aa] font-mono text-xs uppercase tracking-widest text-center">
              Avg. Interview Probability Boost
            </p>
          </div>

          {/* Box 2 */}
          <div className="flex flex-col items-center justify-center p-10 border border-[#27272a] bg-[#000000] hover:border-[#ededed] transition-colors duration-300">
            <h2 className="text-6xl sm:text-7xl font-bold text-[#ededed] tracking-tighter mb-4">
              &lt; 2.5s
            </h2>
            <p className="text-[#a1a1aa] font-mono text-xs uppercase tracking-widest text-center">
              Analysis & Generation Speed
            </p>
          </div>

          {/* Box 3 */}
          <div className="flex flex-col items-center justify-center p-10 border border-[#27272a] bg-[#000000] hover:border-[#ededed] transition-colors duration-300">
             <h2 className="text-6xl sm:text-7xl font-bold text-[#ededed] tracking-tighter mb-4">
              1,204
            </h2>
            <p className="text-[#a1a1aa] font-mono text-xs uppercase tracking-widest text-center">
              Career Blueprints Architected
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
