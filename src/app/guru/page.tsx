'use client';

import { useAuthStore } from '@/frontend/store/auth.store';

export default function GuruDashboardPage() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl">
        <div>
          <h1 className="text-xl font-bold text-white">Dashboard Guru</h1>
          <p className="text-xs text-slate-400">Selamat datang di portal tenaga pendidik.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-bold text-white">{user?.name || 'Siti Aminah, M.Pd.'}</p>
            <p className="text-xs text-slate-400">{user?.email || 'guru@sekolah.sch.id'}</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-950 font-bold text-emerald-300 border border-emerald-700/50">
            {user?.name ? user.name.charAt(0).toUpperCase() : 'G'}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-xl">
          <span className="text-xs font-semibold text-slate-400">Jadwal Hari Ini</span>
          <p className="mt-2 text-2xl font-bold text-white">3 Kelas</p>
          <span className="text-[11px] text-emerald-400">Matematika Wajib</span>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-xl">
          <span className="text-xs font-semibold text-slate-400">Total Siswa Ajar</span>
          <p className="mt-2 text-2xl font-bold text-white">120 Siswa</p>
          <span className="text-[11px] text-emerald-400">Kelas X & XI</span>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-xl">
          <span className="text-xs font-semibold text-slate-400">Status Input Nilai</span>
          <p className="mt-2 text-2xl font-bold text-white">85%</p>
          <span className="text-[11px] text-amber-400">Penilaian UTS</span>
        </div>
      </div>
    </div>
  );
}