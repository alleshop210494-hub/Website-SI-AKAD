import { AppSidebar } from '@/frontend/components/layouts/app-sidebar';
import { AppHeader } from '@/frontend/components/layouts/app-header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-950">
      {/* Sidebar Navigasi Berdasarkan Role */}
      <AppSidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header Bar */}
        <AppHeader />

        {/* Dynamic Dashboard Page Content */}
        <main className="flex-1 overflow-y-auto bg-slate-900/40 p-4 sm:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}