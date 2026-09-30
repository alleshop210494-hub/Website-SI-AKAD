'use client';

import { useAuthStore } from '@/frontend/store/auth.store';

export default function OrtuDashboardPage() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-8">
      <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl">
        <div>
          <h1 className="text-xl font-bold text-white">Dashboard Wali Murid</h1>
          <p className="text-xs text-slate-400">Pantau perkembangan belajar dan administrasi putra/putri Anda.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-bold text-white">{user?.name || 'Bapak Herman'}</p>
            <p className="text-xs text-slate-400">{user?.email || 'ortu@sekolah.sch.id'}</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-950 font-bold text-purple-300 border border-purple-700/50">
            {user?.name ? user.name.charAt(0).toUpperCase() : 'O'}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-xl">
          <span className="text-xs font-semibold text-slate-400">Siswa Terhubung</span>
          <p className="mt-2 text-2xl font-bold text-white">Ahmad Rizky</p>
          <span className="text-[11px] text-purple-400">Kelas X IPA 1</span>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-xl">
          <span className="text-xs font-semibold text-slate-400">Kehadiran Bulan Ini</span>
          <p className="mt-2 text-2xl font-bold text-white">100%</p>
          <span className="text-[11px] text-emerald-400">Tanpa Keterangan: 0</span>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-xl">
          <span className="text-xs font-semibold text-slate-400">Tagihan SPP</span>
          <p className="mt-2 text-2xl font-bold text-white">Rp 0</p>
          <span className="text-[11px] text-emerald-400">Tidak ada penunggakan</span>
        </div>
      </div>
    </div>
  );
}