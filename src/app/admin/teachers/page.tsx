'use client';

export default function AdminTeachersPage() {
  const teachers = [
    { id: '1', nip: '198203152009021003', name: 'Drs. Hadi Wijaya, M.Pd.', subject: 'Matematika Wajib', status: 'PNS' },
    { id: '2', nip: '198705202014032001', name: 'Siti Aminah, S.Si.', subject: 'Fisika', status: 'P3K' },
    { id: '3', nip: '199101102019011002', name: 'Budi Raharjo, S.Pd.', subject: 'Bahasa Indonesia', status: 'GTT' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Data Guru & Staff</h1>
          <p className="text-sm text-slate-400">Direktori pengajar dan staf administrasi sekolah.</p>
        </div>
        <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
          + Tambah Guru
        </button>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-950 text-xs font-semibold uppercase text-slate-400">
            <tr>
              <th className="px-4 py-3">NIP / NUPTK</th>
              <th className="px-4 py-3">Nama Guru</th>
              <th className="px-4 py-3">Mata Pelajaran Utama</th>
              <th className="px-4 py-3">Status Kepegawaian</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {teachers.map((t) => (
              <tr key={t.id} className="hover:bg-slate-800/40">
                <td className="px-4 py-3 font-mono text-xs text-indigo-400">{t.nip}</td>
                <td className="px-4 py-3 font-medium text-white">{t.name}</td>
                <td className="px-4 py-3">{t.subject}</td>
                <td className="px-4 py-3"><span className="rounded bg-slate-800 px-2 py-1 text-xs">{t.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}