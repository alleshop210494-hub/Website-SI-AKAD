'use client';

export function TeacherDashboardView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Portal Guru & Pengajar</h1>
        <p className="text-sm text-slate-400">Selamat datang, Drs. Hadi Wijaya, M.Pd.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Jadwal Mengajar Hari Ini */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">
          <h3 className="mb-4 text-lg font-bold text-white">Jadwal Mengajar Hari Ini</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/80 p-4">
              <div>
                <span className="text-xs font-bold text-indigo-400">07:30 - 09:00 WIB</span>
                <h4 className="font-semibold text-white">Matematika Wajib</h4>
                <p className="text-xs text-slate-400">Kelas X IPA 1 • Ruang 101</p>
              </div>
              <button className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-500">
                Isi Absensi
              </button>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/80 p-4">
              <div>
                <span className="text-xs font-bold text-slate-400">10:00 - 11:30 WIB</span>
                <h4 className="font-semibold text-white">Matematika Peminatan</h4>
                <p className="text-xs text-slate-400">Kelas XI IPA 2 • Lab Komputer</p>
              </div>
              <button className="rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-slate-700">
                Detail
              </button>
            </div>
          </div>
        </div>

        {/* Input Nilai Quick Action */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">
          <h3 className="mb-4 text-lg font-bold text-white">Penilaian Rapor (Semester Ganjil)</h3>
          <p className="text-xs text-slate-400 mb-4">
            Batas penginputan nilai formatif & sumatif adalah 15 November 2026.
          </p>
          <div className="rounded-xl border border-indigo-900/40 bg-indigo-950/20 p-4">
            <div className="flex justify-between text-xs text-slate-300 mb-2">
              <span>Progres Input Nilai</span>
              <span className="font-bold text-indigo-400">75% Selesai</span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-800">
              <div className="h-2 rounded-full bg-indigo-500" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}