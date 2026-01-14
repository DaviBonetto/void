import { DashboardNavbar } from "@/components/dashboard-navbar";
import { DashboardClient } from "@/components/dashboard-client";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] font-sans selection:bg-white selection:text-black flex flex-col">
      {/* Server Component: Navbar fetching user session via RSC */}
      <DashboardNavbar />

      {/* Client Component: Interactive Form and Analysis */}
      <DashboardClient />
    </div>
  );
}
