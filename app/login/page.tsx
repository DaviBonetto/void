import { loginWithGithub } from "./actions";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-[#050505] flex items-center justify-center p-4">
      <Card className="w-full max-w-sm bg-[#000000] border border-[#27272a] rounded-none shadow-none">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold tracking-tighter text-[#ededed]">
            ACCESS CONTROL
          </CardTitle>
          <p className="text-xs text-[#a1a1aa] font-mono uppercase tracking-widest">
            Authenticate to continue
          </p>
        </CardHeader>
        <CardContent>
          <form action={loginWithGithub}>
            <Button
              className="w-full h-12 bg-[#ededed] text-[#050505] hover:bg-[#a1a1aa] rounded-none font-mono font-bold tracking-wider uppercase gap-2 border border-transparent hover:border-[#ededed] transition-all"
              type="submit"
            >
              <Github className="size-4" />
              Login with GitHub
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
