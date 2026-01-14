import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl font-bold tracking-tighter font-mono text-foreground hover:opacity-80 transition-opacity">
          VOID
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="https://github.com/DaviBonetto/void" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm" className="hidden sm:flex rounded-none border-border text-xs font-mono tracking-wider gap-2">
            <Github className="size-3.5" />
            <span>STAR ON GITHUB</span>
          </Button>
        </Link>
        <Button 
          size="sm" 
          className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-mono font-bold tracking-wider px-6"
          onClick={() => {
            // Stub for Supabase Auth
            console.log("Sign In Clicked");
            // window.location.href = '/login'; // Future implementation
          }}
        >
          SIGN IN
        </Button>
      </div>
    </nav>
  );
}
