'use client';

export function StudentDashboardView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Portal Akademik Siswa</h1>
        <p className="text-sm text-slate-400">Ahmad Rizky Pratama (NISN: 0012345678) - Kelas X IPA 1</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl">
          <span className="text-xs font-semibold text-slate-400">IPK / Rata-rata Nilai</span>
          <p className="mt-2 text-3xl font-bold text-emerald-400">88.2</p>
          <span className="text-[11px] text-slate-400">Predikat: Sangat Baik (A)</span>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl">
          <span className="text-xs font-semibold text-slate-400">Kehadiran Semester Ini</span>
          <p className="mt-2 text-3xl font-bold text-indigo-400">98.5%</p>
          <span className="text-[11px] text-slate-400">Hadir: 18 hari, Izin: 1 hari</span>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl">
          <span className="text-xs font-semibold text-slate-400">Status SPP Bulan Ini</span>
          <p className="mt-2 text-2xl font-bold text-emerald-400">LUNAS</p>
          <span className="text-[11px] text-slate-400">Invoice: INV/SPP/2026/01</span>
        </div>
      </div>
    </div>
  );
}