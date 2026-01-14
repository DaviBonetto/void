import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github } from "lucide-react";

export function CtaSection() {
  return (
    <section className="w-full py-32 flex flex-col items-center justify-center space-y-8 bg-[#050505]">
      <div className="space-y-4 text-center">
        <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter text-[#ededed]">
          Ready to fill the void?
        </h2>
        <p className="text-[#a1a1aa] font-mono text-sm max-w-md mx-auto">
          Join the elite wave of developers using AI to dominate the job market.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-6">
        <Button 
          className="h-14 px-8 rounded-none bg-[#ededed] text-[#050505] hover:bg-[#a1a1aa] font-bold tracking-widest uppercase text-sm"
          onClick={() => console.log("Init System")}
        >
          [ INITIALIZE SYSTEM ]
        </Button>
        
        <Link href="https://github.com/DaviBonetto/void" target="_blank">
          <Button 
            variant="outline"
            className="h-14 px-8 rounded-none border-[#27272a] text-[#ededed] hover:bg-[#27272a] font-mono tracking-widest uppercase text-sm gap-2"
          >
            <Github className="size-4" />
            [ VIEW SOURCE CODE ]
          </Button>
        </Link>
      </div>
    </section>
  );
}
