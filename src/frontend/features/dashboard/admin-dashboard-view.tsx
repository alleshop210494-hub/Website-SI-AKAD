'use client';

import { useEffect, useState } from 'react';
import { ApiClient } from '@/frontend/lib/api-client';
import { Student } from '@/shared/types/student.type';

export function AdminDashboardView() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ApiClient.get<Student[]>('/master?resource=students')
      .then((data) => setStudents(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Dashboard Admin Tata Usaha</h1>
        <p className="text-sm text-slate-400">Ringkasan statistik data induk sekolah dan aktivitas sistem.</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl">
          <span className="text-xs font-semibold text-slate-400">Total Siswa Aktif</span>
          <p className="mt-2 text-3xl font-bold text-indigo-400">{students.length || 1240}</p>
          <span className="mt-1 inline-block text-[11px] text-emerald-400">+12 siswa baru semester ini</span>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl">
          <span className="text-xs font-semibold text-slate-400">Tenaga Pengajar (Guru)</span>
          <p className="mt-2 text-3xl font-bold text-white">68</p>
          <span className="mt-1 inline-block text-[11px] text-slate-400">100% Terverifikasi</span>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl">
          <span className="text-xs font-semibold text-slate-400">Rombongan Belajar (Kelas)</span>
          <p className="mt-2 text-3xl font-bold text-white">36</p>
          <span className="mt-1 inline-block text-[11px] text-indigo-400">Kurikulum Merdeka</span>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl">
          <span className="text-xs font-semibold text-slate-400">Pembayaran SPP Bulan Ini</span>
          <p className="mt-2 text-3xl font-bold text-emerald-400">84.5%</p>
          <span className="mt-1 inline-block text-[11px] text-emerald-400">Rp 412.500.000 Terkumpul</span>
        </div>
      </div>

      {/* Student List Table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">
        <h3 className="mb-4 text-lg font-bold text-white">Data Siswa Terbaru</h3>
        {loading ? (
          <p className="text-sm text-slate-400">Memuat data...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-300">
              <thead className="bg-slate-950 text-xs font-semibold uppercase text-slate-400">
                <tr>
                  <th className="px-4 py-3">NISN</th>
                  <th className="px-4 py-3">Nama Lengkap</th>
                  <th className="px-4 py-3">Kelas</th>
                  <th className="px-4 py-3">Gender</th>
                  <th className="px-4 py-3">Wali Murid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {students.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-800/40">
                    <td className="px-4 py-3 font-mono text-xs text-indigo-400">{s.nisn}</td>
                    <td className="px-4 py-3 font-medium text-white">{s.fullName}</td>
                    <td className="px-4 py-3">{s.className || 'X IPA 1'}</td>
                    <td className="px-4 py-3">{s.gender === 'L' ? 'Laki-laki' : 'Perempuan'}</td>
                    <td className="px-4 py-3 text-slate-400">{s.parentName || '-'}</td>
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