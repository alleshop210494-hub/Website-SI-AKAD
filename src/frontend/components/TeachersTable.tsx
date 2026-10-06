'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const AddTeacherModal = dynamic(() => import('@/frontend/components/AddTeacherModal'), {
  loading: () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="rounded-lg bg-white p-6 shadow-xl">Memuat form...</div>
    </div>
  ),
  ssr: false,
});

export default function TeachersTable({ initialData }: { initialData: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTeachers = initialData?.filter((teacher) =>
    teacher?.nama_guru?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    teacher?.nip?.includes(searchQuery) ||
    teacher?.mata_pelajaran?.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="w-full sm:w-96">
          <input
            type="text"
            placeholder="Cari berdasarkan Nama, NIP, atau Mapel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-900"
          />
        </div>
        
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-sm font-medium text-slate-700">
            Total: <span className="font-bold text-slate-900">{filteredTeachers.length} Guru</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors shadow-sm"
          >
            + Tambah Guru Baru
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">NIP</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Nama Guru</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Mata Pelajaran</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Email & Kontak</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {filteredTeachers.length > 0 ? (
              filteredTeachers.map((teacher, index) => (
                <tr key={teacher.id || index} className="hover:bg-slate-50 transition-colors">
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">{teacher.nip || '-'}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">{teacher.nama_guru || '-'}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <span className="inline-flex rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700">{teacher.mata_pelajaran || '-'}</span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">
                    <div className="flex flex-col">
                      <span className="text-slate-900">{teacher.email || '-'}</span>
                      <span className="text-xs text-slate-500">{teacher.kontak || '-'}</span>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm">
                    <span className="inline-flex rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                      {teacher.status || 'Aktif'}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-right">
                    <button className="text-rose-600 hover:text-rose-900 font-medium text-xs">Hapus</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-8 text-center text-sm text-slate-500">
                  Belum ada data guru di database Neon. Silakan tambahkan data baru.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <AddTeacherModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}