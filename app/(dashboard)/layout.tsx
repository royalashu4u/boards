import Sidebar from "./_components/sidebar";
import { OrgSidebar } from "./_components/org-sidebar";
import { Navbar } from "./_components/navbar";


interface DashboardLayoutProps {
  children: React.ReactNode;
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
   <main className="h-full">
    <Sidebar />
<div className="pl-[60px] h-full">
    <div className="flex gap-x-3 h-full">
        <OrgSidebar />
        <div className="flex-1 h-full">
            {/*add a nav bar */}
            <Navbar />
    {children}
        </div>
    </div>
</div>
   </main>
  );
}