'use client';

import { useAuthStore } from '@/frontend/store/auth.store';

export default function SiswaDashboardPage() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl">
        <div>
          <h1 className="text-xl font-bold text-white">Dashboard Siswa</h1>
          <p className="text-xs text-slate-400">Selamat datang di portal akademik siswa.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-bold text-white">{user?.name || 'Ahmad Rizky'}</p>
            <p className="text-xs text-slate-400">{user?.email || 'siswa@sekolah.sch.id'}</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-950 font-bold text-amber-300 border border-amber-700/50">
            {user?.name ? user.name.charAt(0).toUpperCase() : 'S'}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-xl">
          <span className="text-xs font-semibold text-slate-400">Kelas Saat Ini</span>
          <p className="mt-2 text-2xl font-bold text-white">X IPA 1</p>
          <span className="text-[11px] text-amber-400">Semester Ganjil</span>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-xl">
          <span className="text-xs font-semibold text-slate-400">IPK / Rata-rata</span>
          <p className="mt-2 text-2xl font-bold text-white">88.5</p>
          <span className="text-[11px] text-emerald-400">Sangat Baik</span>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-xl">
          <span className="text-xs font-semibold text-slate-400">Status SPP</span>
          <p className="mt-2 text-2xl font-bold text-white">Lunas</p>
          <span className="text-[11px] text-emerald-400">Bulan Ini</span>
        </div>
      </div>
    </div>
  );
}