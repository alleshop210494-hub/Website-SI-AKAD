'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuthStore } from '@/frontend/store/auth.store';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, clearAuth } = useAuthStore();

  const handleLogout = () => {
    clearAuth();
    router.push('/login');
  };

  const navItems = [
    { label: 'Dashboard TU', href: '/admin', icon: '📊' },
    { label: 'Data Master Siswa', href: '/admin/students', icon: '🎓' },
    { label: 'Data Guru & Staff', href: '/admin/teachers', icon: '👩‍🏫' },
    { label: 'Kelas & Jadwal', href: '/admin/academic', icon: '🏫' },
    { label: 'Keuangan SPP', href: '/admin/finance', icon: '💳' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      {/* Sidebar Navigasi Admin */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white shadow-lg shadow-indigo-500/30">
              SK
            </div>
            <div>
              <h1 className="font-bold text-white leading-none">SIAKAD PRO</h1>
              <span className="text-[10px] text-slate-400">v2.4 - High School System</span>
            </div>
          </div>

          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                      : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-slate-800 pt-4">
          <div className="mb-3 px-2">
            <p className="text-xs font-semibold text-white">{user?.name || 'Admin TU'}</p>
            <p className="text-[10px] text-slate-400">{user?.email || 'admin@siakad.sch.id'}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full rounded-xl bg-rose-950/40 border border-rose-800/50 py-2 text-xs font-semibold text-rose-300 hover:bg-rose-900/60 transition-colors"
          >
            Keluar
          </button>
        </div>
      </aside>

      {/* Area Konten Utama */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}