"use client";

import { useState } from "react";
import { DashboardNavbar } from "@/components/dashboard-navbar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { analyzeJobDescription } from "@/app/actions/headhunter";
import { Loader2, Terminal, ShieldAlert, CheckCircle2, Cpu } from "lucide-react";

interface AgentResult {
  role_title: string;
  company_name: string;
  seniority_level: string;
  tech_stack: string[];
  summary: string;
}

export default function DashboardPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AgentResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleAnalyze() {
    if (!jobDescription.trim()) return;
    
    setIsAnalyzing(true);
    setResult(null);
    setError(null);

    const response = await analyzeJobDescription(jobDescription);

    if (response.error) {
        setError(response.error);
    } else {
        setResult(response as AgentResult);
    }

    setIsAnalyzing(false);
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-white selection:text-black flex flex-col">
      <DashboardNavbar />

      <main className="flex-1 p-6 md:p-12 max-w-7xl mx-auto w-full flex flex-col gap-12">
        
        {/* INPUT SECTION */}
        <section className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="size-5 text-[#ededed]" />
            <h1 className="text-xl font-bold font-mono tracking-wider text-[#ededed] uppercase">
              Target Acquisition // Input
            </h1>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#27272a] to-[#52525b] opacity-20 group-hover:opacity-40 transition duration-500 blur-sm"></div>
            <Card className="relative bg-[#0a0a0a] border-[#27272a] rounded-none shadow-2xl">
                <CardContent className="p-0">
                    <Textarea 
                        placeholder="PASTE TARGET JOB DESCRIPTION HERE..." 
                        className="min-h-[200px] bg-[#0a0a0a] border-none text-[#ededed] font-mono text-sm p-6 resize-none focus-visible:ring-0 placeholder:text-[#3f3f46] selection:bg-[#ededed] selection:text-[#050505]"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                    />
                </CardContent>
                <div className="p-4 border-t border-[#27272a] bg-[#050505]/50 flex justify-end">
                    <Button 
                        onClick={handleAnalyze} 
                        disabled={isAnalyzing || !jobDescription.trim()}
                        className="rounded-none bg-[#ededed] text-[#050505] hover:bg-[#a1a1aa] font-mono font-bold uppercase tracking-widest gap-2 min-w-[180px]"
                    >
                        {isAnalyzing ? (
                            <>
                                <Loader2 className="size-4 animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                <Cpu className="size-4" />
                                [ ANALYZE TARGET ]
                            </>
                        )}
                    </Button>
                </div>
            </Card>
          </div>
        </section>

        {/* ERROR DISPLAY */}
        {error && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 border border-red-900/50 bg-red-950/10 p-4 flex items-center gap-3 text-red-500 font-mono text-sm">
                <ShieldAlert className="size-5" />
                <span>ERROR: {error}</span>
            </div>
        )}

        {/* OUTPUT SECTION */}
        {result && (
            <section className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-5 text-[#ededed]" />
                    <h2 className="text-xl font-bold font-mono tracking-wider text-[#ededed] uppercase">
                        Intelligence Report // Output
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* KEY INTEL CARD */}
                    <Card className="md:col-span-1 bg-[#0a0a0a] border-[#27272a] rounded-none h-full">
                        <CardHeader className="border-b border-[#27272a] py-3 bg-[#27272a]/10">
                            <CardTitle className="text-xs font-mono uppercase tracking-widest text-[#a1a1aa]">Target Profile</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-6">
                            <div>
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#52525b]">Role</label>
                                <p className="text-lg font-bold text-[#ededed] leading-tight">{result.role_title}</p>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#52525b]">Company</label>
                                <p className="text-base font-mono text-[#a1a1aa]">{result.company_name}</p>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#52525b]">Seniority</label>
                                <div className="mt-1 inline-block px-2 py-0.5 text-xs font-bold bg-[#ededed] text-[#050505] uppercase tracking-wider">
                                    {result.seniority_level}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* DETAILS CARD */}
                    <Card className="md:col-span-2 bg-[#0a0a0a] border-[#27272a] rounded-none h-full flex flex-col">
                         <CardHeader className="border-b border-[#27272a] py-3 bg-[#27272a]/10">
                            <CardTitle className="text-xs font-mono uppercase tracking-widest text-[#a1a1aa]">Analysis Data</CardTitle>
                        </CardHeader>
                        <CardContent className="p-6 space-y-8 flex-1">
                            <div>
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#52525b] mb-2 block">Tech Stack Requirement</label>
                                <div className="flex flex-wrap gap-2">
                                    {result.tech_stack.map((tech) => (
                                        <span key={tech} className="px-3 py-1 text-xs font-mono border border-[#27272a] text-[#a1a1aa] hover:border-[#ededed] hover:text-[#ededed] transition-colors cursor-default">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[#52525b] mb-2 block">Mission Brief</label>
                                <p className="text-sm md:text-base text-[#ededed]/90 leading-relaxed font-light border-l-2 border-[#27272a] pl-4 italic">
                                    "{result.summary}"
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        )}

      </main>
    </div>
  );
}
