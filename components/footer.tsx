import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-[#27272a]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row">
        
        {/* Brand Section - Takes remaining space */}
        <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-[#27272a] space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-tighter text-[#ededed]">VOID</h3>
            <p className="text-xs text-[#a1a1aa] font-mono max-w-sm">
              The gap between where you are and where you want to be is just code.
            </p>
          </div>
        </div>

        {/* Social Section - Interactive Blocks */}
        <div className="flex">
             <Link 
                href="https://github.com/DaviBonetto/void" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 md:flex-none w-full md:w-40 flex flex-col items-center justify-center gap-3 p-8 border-b md:border-b-0 md:border-r border-[#27272a] hover:bg-[#111111] transition-colors group"
            >
                <Github className="size-5 text-[#a1a1aa] group-hover:text-[#ededed] transition-colors" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] group-hover:text-[#ededed]">GitHub</span>
            </Link>

            <Link 
                href="https://x.com/Davibonetto" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 md:flex-none w-full md:w-40 flex flex-col items-center justify-center gap-3 p-8 border-b md:border-b-0 hover:bg-[#111111] transition-colors group"
            >
                <Twitter className="size-5 text-[#a1a1aa] group-hover:text-[#ededed] transition-colors" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa] group-hover:text-[#ededed]">Twitter</span>
            </Link>
        </div>

      </div>
      
      {/* Copyright */}
      <div className="border-t border-[#27272a]">
         <div className="max-w-5xl mx-auto px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#3f3f46] font-mono uppercase tracking-widest">
            <span>© 2025 VOID AGENT Inc.</span>
            <span>Engineered by DeepMind</span>
         </div>
      </div>
    </footer>
  );
}
