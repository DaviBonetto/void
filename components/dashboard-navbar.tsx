

import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/app/login/actions";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";

export async function DashboardNavbar() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="w-full flex items-center justify-between p-4 border-b border-[#27272a] bg-[#050505]">
      <div className="flex items-center gap-2">
        <Link href="/dashboard" className="text-lg font-bold tracking-tighter font-mono text-[#ededed] hover:opacity-80 transition-opacity">
          VOID <span className="text-[#52525b] text-xs align-top">/ TERMINAL</span>
        </Link>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-[#a1a1aa] bg-[#27272a]/20 px-3 py-1 rounded-none border border-[#27272a]">
            <User className="size-3" />
            <span className="max-w-[150px] truncate">{user?.email}</span>
        </div>
        <form action={signOut}>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-none text-[#a1a1aa] hover:text-[#ededed] hover:bg-[#27272a]"
            title="Disconnect"
          >
            <LogOut className="size-4" />
          </Button>
        </form>
      </div>
    </nav>
  );
}
