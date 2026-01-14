import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/app/login/actions";

export async function Navbar() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter font-mono text-foreground hover:opacity-80 transition-opacity"
        >
          VOID
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/DaviBonetto/void"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex rounded-none border-border text-xs font-mono tracking-wider gap-2"
          >
            <Github className="size-3.5" />
            <span>STAR ON GITHUB</span>
          </Button>
        </Link>
        {user ? (
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-block text-xs font-mono text-muted-foreground">
              {user.email}
            </span>
            <form action={signOut}>
              <Button
                size="sm"
                variant="outline"
                className="rounded-none border-destructive/50 text-destructive hover:bg-destructive hover:text-white text-xs font-mono font-bold tracking-wider px-6"
                type="submit"
              >
                SIGN OUT
              </Button>
            </form>
          </div>
        ) : (
          <Link href="/login">
            <Button
              size="sm"
              className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-mono font-bold tracking-wider px-6"
            >
              SIGN IN
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
