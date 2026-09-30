'use client';

export default function GuruSchedulesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Jadwal Mengajar</h1>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <p className="text-sm text-slate-300">Senin: 07:30 - 09:00 (Matematika Wajib - X IPA 1)</p>
        <p className="text-sm text-slate-300 mt-2">Rabu: 09:15 - 10:45 (Matematika Peminatan - XI IPA 2)</p>
      </div>
    </div>
  );
}