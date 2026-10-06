'use client';

import { useState } from 'react';

export default function TeacherScheduleContent({
  initialSchedules,
  teacherName,
}: {
  initialSchedules: any[];
  teacherName: string;
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSchedules = initialSchedules?.filter(s =>
    s?.mata_pelajaran?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s?.kelas?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s?.ruangan?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s?.hari?.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="w-full sm:w-96">
          <input
            type="text"
            placeholder="Cari hari, mapel, kelas, atau ruangan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-900 bg-white"
          />
        </div>
        <div className="text-sm font-medium text-slate-600">
          Pengajar Aktif: <span className="text-indigo-600 font-semibold">{teacherName}</span>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Hari</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Waktu</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Kelas</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Mata Pelajaran</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Ruangan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {filteredSchedules.length > 0 ? (
              filteredSchedules.map((item, index) => (
                <tr key={item.id || index} className="hover:bg-slate-50 transition-colors">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">{item.hari}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">{item.waktu}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <span className="inline-flex rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">
                      {item.kelas}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-indigo-600">{item.mata_pelajaran}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">{item.ruangan}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-sm text-slate-500">
                  Belum ada jadwal mengajar yang ditemukan di database untuk akun ini.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}