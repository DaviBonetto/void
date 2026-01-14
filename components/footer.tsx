import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-[#27272a] py-12 px-6 sm:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        
        {/* Left: Brand & Status */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-tighter text-[#ededed]">VOID</h3>
            <p className="text-xs text-[#a1a1aa] font-mono max-w-[200px]">
              The gap between where you are and where you want to be is just code.
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#a1a1aa]">
              All Systems Operational
            </span>
          </div>
        </div>

        {/* Right: Links */}
        <div className="flex gap-16 text-xs font-mono uppercase tracking-wider text-[#a1a1aa]">
          <div className="flex flex-col gap-4">
            <span className="text-[#ededed] font-bold">Product</span>
            <Link href="#" className="hover:text-[#ededed] transition-colors">Orbit</Link>
            <Link href="#" className="hover:text-[#ededed] transition-colors">Manifesto</Link>
            <Link href="#" className="hover:text-[#ededed] transition-colors">Pricing</Link>
          </div>
          <div className="flex flex-col gap-4">
             <span className="text-[#ededed] font-bold">Resources</span>
            <Link href="#" className="hover:text-[#ededed] transition-colors">Documentation</Link>
            <Link href="#" className="hover:text-[#ededed] transition-colors">API</Link>
            <Link href="#" className="hover:text-[#ededed] transition-colors">Status</Link>
          </div>
          <div className="flex flex-col gap-4">
             <span className="text-[#ededed] font-bold">Social</span>
            <Link href="https://github.com/DaviBonetto/void" className="hover:text-[#ededed] transition-colors flex items-center gap-2">
              <Github className="size-3" /> GitHub
            </Link>
            <Link href="https://x.com/Davibonetto" className="hover:text-[#ededed] transition-colors flex items-center gap-2">
               <Twitter className="size-3" /> X (Twitter)
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-[#27272a] flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#3f3f46] font-mono uppercase tracking-widest">
        <span>© 2025 VOID AGENT Inc.</span>
        <span>Engineered by DeepMind</span>
      </div>
    </footer>
  );
}
