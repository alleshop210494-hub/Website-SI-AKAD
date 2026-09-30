'use client';

import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/frontend/store/auth.store';

export function AppHeader() {
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-slate-800 bg-slate-950/60 px-6 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          SIAKAD Hub / {user?.role || 'User'}
        </span>
      </div>

      <div className="flex items-center gap-4">
        {/* User Profile Info */}
        <div className="flex items-center gap-3 text-right">
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-200">{user?.name || 'Administrator TU'}</p>
            <p className="text-[11px] text-slate-400">{user?.email || 'admin@sekolah.sch.id'}</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-sm font-bold text-indigo-400">
            {user?.name ? user.name.charAt(0) : 'U'}
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-rose-900/50 hover:bg-rose-950/30 hover:text-rose-400"
          title="Keluar dari sistem"
        >
          Logout 🚪
        </button>
      </div>
    </header>
  );
}