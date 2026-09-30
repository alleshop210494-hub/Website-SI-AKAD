'use client';

export default function AdminAcademicPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Manajemen Kelas & Jadwal</h1>
        <p className="text-sm text-slate-400">Pengaturan rombongan belajar dan pemetaan jadwal jam pelajaran.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="font-bold text-white">Kelas X IPA 1</h3>
          <p className="text-xs text-slate-400 mt-1">Wali Kelas: Drs. Hadi Wijaya, M.Pd.</p>
          <p className="text-xs text-indigo-400 mt-3 font-semibold">32 Siswa Terdaftar</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="font-bold text-white">Kelas X IPA 2</h3>
          <p className="text-xs text-slate-400 mt-1">Wali Kelas: Siti Aminah, S.Si.</p>
          <p className="text-xs text-indigo-400 mt-3 font-semibold">30 Siswa Terdaftar</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="font-bold text-white">Kelas XI IPS 1</h3>
          <p className="text-xs text-slate-400 mt-1">Wali Kelas: Budi Raharjo, S.Pd.</p>
          <p className="text-xs text-indigo-400 mt-3 font-semibold">31 Siswa Terdaftar</p>
        </div>
      </div>
    </div>
  );
}