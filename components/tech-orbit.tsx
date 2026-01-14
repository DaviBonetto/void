import { Atom, Cloud, Container, Database, Code2, Cpu } from "lucide-react";

export function TechOrbit() {
  return (
    <section className="relative w-full max-w-5xl mx-auto h-[600px] flex items-center justify-center overflow-hidden py-20">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_70%)] pointer-events-none z-10" />

      {/* Center Core */}
      <div className="relative z-20 flex flex-col items-center justify-center w-40 h-40 bg-[#050505] border border-[#27272a] rounded-full shadow-[0_0_50px_-10px_rgba(255,255,255,0.1)]">
        <span className="text-3xl font-bold tracking-tighter text-[#ededed]">VOID</span>
        <span className="text-[10px] uppercase tracking-widest text-[#a1a1aa] mt-1">Portfolio</span>
      </div>

      {/* Inner Orbit (Rank 1 Dependencies) - Reverse Spin 25s */}
      <div className="absolute w-[350px] h-[350px] rounded-full border border-[#27272a]/40 animate-orbit-reverse">
        {/* React */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0a0a0a] border border-[#27272a] flex items-center justify-center animate-orbit">
          <Atom className="size-6 text-[#ededed]" />
        </div>
        {/* Database */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#0a0a0a] border border-[#27272a] flex items-center justify-center animate-orbit">
          <Database className="size-6 text-[#ededed]" />
        </div>
         {/* Code */}
         <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0a0a0a] border border-[#27272a] flex items-center justify-center animate-orbit">
          <Code2 className="size-6 text-[#ededed]" />
        </div>
      </div>

      {/* Outer Orbit (Rank 2 Infrastructure) - Spin 40s */}
      <div className="absolute w-[550px] h-[550px] rounded-full border border-[#27272a]/20 animate-orbit">
        {/* Cloud */}
        <div className="absolute top-[15%] left-[15%] w-14 h-14 bg-[#0a0a0a] border border-[#27272a] flex items-center justify-center animate-orbit-reverse">
          <Cloud className="size-7 text-[#ededed]" />
        </div>
         {/* Container */}
         <div className="absolute bottom-[20%] right-[10%] w-14 h-14 bg-[#0a0a0a] border border-[#27272a] flex items-center justify-center animate-orbit-reverse">
          <Container className="size-7 text-[#ededed]" />
        </div>
        {/* CPU */}
        <div className="absolute bottom-[10%] left-[30%] w-14 h-14 bg-[#0a0a0a] border border-[#27272a] flex items-center justify-center animate-orbit-reverse">
          <Cpu className="size-7 text-[#ededed]" />
        </div>
      </div>
      
    </section>
  );
}
