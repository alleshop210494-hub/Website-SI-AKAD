'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/frontend/store/auth.store';
import { UserRole } from '@/shared/constants/roles';

interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export function AppSidebar() {
  const pathname = usePathname();
  const { user } = useAuthStore();

  const getNavItems = (): NavItem[] => {
    const role = user?.role || UserRole.ADMIN;

    switch (role) {
      case UserRole.ADMIN:
        return [
          { label: 'Dashboard TU', href: '/admin', icon: '📊' },
          { label: 'Data Master Siswa', href: '/admin/students', icon: '👨‍🎓' },
          { label: 'Data Guru & Staff', href: '/admin/teachers', icon: '👨‍🏫' },
          { label: 'Kelas & Jadwal', href: '/admin/academic', icon: '🏫' },
          { label: 'Keuangan SPP', href: '/admin/finance', icon: '💳' },
        ];
      case UserRole.TEACHER:
        return [
          { label: 'Dashboard Guru', href: '/guru', icon: '📚' },
          { label: 'Jadwal Mengajar', href: '/guru/schedules', icon: '🗓️' },
          { label: 'Jurnal & Absensi', href: '/guru/attendance', icon: '📝' },
          { label: 'Input Nilai Rapor', href: '/guru/grading', icon: '⭐' },
        ];
      case UserRole.STUDENT:
        return [
          { label: 'Dashboard Siswa', href: '/siswa', icon: '🎓' },
          { label: 'Jadwal Pelajaran', href: '/siswa/schedule', icon: '📅' },
          { label: 'Nilai & Rapor', href: '/siswa/grades', icon: '🏆' },
          { label: 'Tagihan SPP', href: '/siswa/finance', icon: '💸' },
        ];
      case UserRole.PARENT:
        return [
          { label: 'Dashboard Ortu', href: '/ortu', icon: '👨‍👩‍👧' },
          { label: 'Kehadiran Anak', href: '/ortu/attendance', icon: '📌' },
          { label: 'Rapor Akademik', href: '/ortu/grades', icon: '📜' },
          { label: 'Pembayaran SPP', href: '/ortu/finance', icon: '💳' },
        ];
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <aside className="hidden w-64 flex-col border-r border-slate-800 bg-slate-950/80 p-4 lg:flex">
      {/* Brand Header */}
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-black text-white shadow-lg shadow-indigo-600/30">
          SK
        </div>
        <div>
          <h2 className="font-bold tracking-wide text-white">SIAKAD PRO</h2>
          <p className="text-[10px] text-slate-400">v2.4 - High School System</p>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                isActive
                  ? 'bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 shadow-sm'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* System Status Footer */}
      <div className="mt-auto rounded-xl border border-slate-800 bg-slate-900/50 p-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-300">Tahun Ajaran Aktif</span>
        </div>
        <p className="mt-1 text-[11px] text-slate-400">2025/2026 - Ganjil (Merdeka)</p>
      </div>
    </aside>
  );
}