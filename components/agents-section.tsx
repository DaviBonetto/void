import { ScanSearch, FileCode, BrainCircuit, DraftingCompass } from "lucide-react";

export function AgentsSection() {
  const agents = [
    {
      icon: ScanSearch,
      name: "THE HEADHUNTER",
      description: "Parses JDs and extracts hidden requirements."
    },
    {
      icon: FileCode,
      name: "THE AUDITOR",
      description: "Scans your GitHub for skill gaps."
    },
    {
      icon: BrainCircuit,
      name: "THE STRATEGIST",
      description: "Calculates the optimal project path."
    },
    {
      icon: DraftingCompass,
      name: "THE ARCHITECT",
      description: "Generates full-stack blueprints."
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto space-y-12 pb-48">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold tracking-tighter text-[#ededed] uppercase">
          THE AI SQUAD
        </h3>
        <p className="text-[#a1a1aa] font-mono text-xs uppercase tracking-widest">
          Multi-agent system architecture
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {agents.map((agent, index) => (
          <div 
            key={index} 
            className="group flex flex-col items-start p-6 bg-[#050505] border border-[#27272a] hover:border-[#ededed] transition-colors duration-300 min-h-[160px]"
          >
            <div className="mb-4 text-[#a1a1aa] group-hover:text-[#ededed] transition-colors">
              <agent.icon className="size-6" />
            </div>
            <h4 className="text-[#ededed] font-mono font-bold text-sm tracking-tighter mb-2">
              {agent.name}
            </h4>
            <p className="text-[#a1a1aa] text-xs font-mono leading-relaxed">
              {agent.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
