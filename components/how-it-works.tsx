import { FileText, ScanSearch, FileCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function HowItWorks() {
  return (
    <section className="w-full max-w-5xl mx-auto space-y-12 py-12">
      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold tracking-tighter text-[#ededed]">
          WORKFLOW_EXECUTION
        </h3>
        <p className="text-[#a1a1aa] font-mono text-xs uppercase tracking-widest">
          Build process initialized in 3 steps
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gradient-to-r from-transparent via-[#27272a] to-transparent z-0" />

        {/* Step 1 */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          <div className="w-24 h-24 bg-[#0a0a0a] border border-[#27272a] flex items-center justify-center rounded-none shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)]">
            <FileText className="size-8 text-[#ededed]" />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-[#ededed] font-mono">01. INPUT_TARGET</h4>
            <p className="text-xs text-[#a1a1aa] font-mono max-w-[200px] mx-auto">
              Paste the Job Description URL you want to conquer.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          <div className="w-24 h-24 bg-[#0a0a0a] border border-[#27272a] flex items-center justify-center rounded-none shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)]">
            <ScanSearch className="size-8 text-[#ededed]" />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-[#ededed] font-mono">02. GAP_ANALYSIS</h4>
            <p className="text-xs text-[#a1a1aa] font-mono max-w-[200px] mx-auto">
              Agent scans your GitHub profile against requirements.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          <div className="w-24 h-24 bg-[#0a0a0a] border border-[#27272a] flex items-center justify-center rounded-none shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)]">
            <FileCode className="size-8 text-[#ededed]" />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-[#ededed] font-mono">03. BLUEPRINT_GEN</h4>
            <p className="text-xs text-[#a1a1aa] font-mono max-w-[200px] mx-auto">
              Receive a tailored project specification to build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
