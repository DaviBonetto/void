import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20 relative overflow-hidden bg-background text-foreground selection:bg-white selection:text-black">
      {/* Decorative Grid Background - Subtle */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="z-10 flex flex-col items-center text-center w-full max-w-3xl space-y-12 mt-20">
        
        {/* Hero Section */}
        <section className="space-y-6">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium border border-[#27272a] bg-[#050505] text-[#ededed] uppercase tracking-widest">
            System Online v1.0
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-none text-[#ededed]">
            Fill the <span className="text-[#a1a1aa] line-through decoration-[#27272a]">void</span> between<br />
            your code and your next job.
          </h2>
          <p className="text-[#a1a1aa] text-sm sm:text-base max-w-xl mx-auto font-mono tracking-tight">
            Perform a Gap Analysis between your current GitHub portfolio and your Dream Job Description. Generate specs that bridge the divide.
          </p>
        </section>

        {/* Action Card */}
        <Card className="w-full bg-[#050505] border border-[#27272a] rounded-none shadow-none">
          <CardContent className="p-6 sm:p-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 text-left">
                <label htmlFor="jd-url" className="text-xs uppercase tracking-wider text-[#a1a1aa] pl-1">
                  Target // Job Description URL
                </label>
                <div className="relative group">
                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-[#a1a1aa] text-xs">{">"}</span>
                  </div>
                  <Input 
                    id="jd-url" 
                    placeholder="https://linkedin.com/jobs/..." 
                    className="pl-8 bg-[#0a0a0a] border-[#27272a] rounded-none h-12 text-[#ededed] placeholder:text-[#3f3f46] focus-visible:ring-0 focus-visible:border-[#ededed] transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2 text-left">
                <label htmlFor="github-url" className="text-xs uppercase tracking-wider text-[#a1a1aa] pl-1">
                  Source // GitHub Profile URL
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-[#a1a1aa] text-xs">{">"}</span>
                  </div>
                  <Input 
                    id="github-url" 
                    placeholder="https://github.com/username" 
                    className="pl-8 bg-[#0a0a0a] border-[#27272a] rounded-none h-12 text-[#ededed] placeholder:text-[#3f3f46] focus-visible:ring-0 focus-visible:border-[#ededed] transition-colors"
                  />
                </div>
              </div>
            </div>

            <Button className="w-full h-14 bg-[#ededed] text-[#050505] hover:bg-[#a1a1aa] rounded-none uppercase tracking-widest font-bold text-sm border border-transparent hover:border-[#ededed] transition-all">
              [ Initialize Gap Analysis ]
            </Button>
          </CardContent>
        </Card>

      </main>

      {/* Footer / Status Line */}
      <footer className="absolute bottom-0 left-0 right-0 p-6 z-10 flex justify-between items-end text-[10px] text-[#3f3f46] uppercase tracking-widest font-mono">
        <div>
          <p>VOID_AGENT_SYSTEM</p>
          <p>STATUS: IDLE</p>
        </div>
        <div className="text-right">
          <p>ENGINEERED BY DEEPMIND</p>
          <p>© 2025</p>
        </div>
      </footer>
    </div>
  );
}
