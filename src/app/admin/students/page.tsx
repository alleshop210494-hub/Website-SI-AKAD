'use client';

import { useEffect, useState } from 'react';
import { ApiClient } from '@/frontend/lib/api-client';
import { Student } from '@/shared/types/student.type';

export default function AdminStudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ApiClient.get<Student[]>('/master?resource=students', { search })
      .then((data) => setStudents(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [search]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Data Master Siswa</h1>
          <p className="text-sm text-slate-400">Kelola informasi biodata dan entitas seluruh siswa.</p>
        </div>
        <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
          + Tambah Siswa Baru
        </button>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Cari berdasarkan nama, NIS, atau NISN..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-sm rounded-xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
          />
        </div>

        {loading ? (
          <p className="text-sm text-slate-400">Memuat data siswa...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-950 text-xs font-semibold uppercase text-slate-400">
                <tr>
                  <th className="px-4 py-3">NISN / NIS</th>
                  <th className="px-4 py-3">Nama Lengkap</th>
                  <th className="px-4 py-3">Kelas</th>
                  <th className="px-4 py-3">Jenis Kelamin</th>
                  <th className="px-4 py-3">Wali Murid</th>
                  <th className="px-4 py-3">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {students.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-800/40">
                    <td className="px-4 py-3 font-mono text-xs text-indigo-400">
                      {s.nisn} <span className="text-slate-500">/ {s.nis}</span>
                    </td>
                    <td className="px-4 py-3 font-medium text-white">{s.fullName}</td>
                    <td className="px-4 py-3">{s.className || 'X IPA 1'}</td>
                    <td className="px-4 py-3">{s.gender === 'L' ? 'Laki-laki' : 'Perempuan'}</td>
                    <td className="px-4 py-3 text-slate-400">{s.parentName || '-'}</td>
                    <td className="px-4 py-3">
                      <button className="text-xs text-indigo-400 hover:underline">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}