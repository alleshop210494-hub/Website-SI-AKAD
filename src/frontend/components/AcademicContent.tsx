'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const AddClassModal = dynamic(() => import('@/frontend/components/AddClassModal'), { ssr: false });
const AddScheduleModal = dynamic(() => import('@/frontend/components/AddScheduleModal'), { ssr: false });

export default function AcademicContent({ initialClasses, initialSchedules }: { initialClasses: any[]; initialSchedules: any[] }) {
  const [activeTab, setActiveTab] = useState<'classes' | 'schedules'>('classes');
  const [isClassModalOpen, setIsClassModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClasses = initialClasses?.filter(c =>
    c?.nama_kelas?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c?.wali_kelas?.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const filteredSchedules = initialSchedules?.filter(s =>
    s?.mata_pelajaran?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s?.kelas?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s?.nama_guru?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s?.hari?.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex items-center gap-6">
          <button
            onClick={() => { setActiveTab('classes'); setSearchQuery(''); }}
            className={`pb-2 text-sm font-semibold transition-colors border-b-2 ${
              activeTab === 'classes'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Daftar Kelas ({initialClasses.length})
          </button>
          <button
            onClick={() => { setActiveTab('schedules'); setSearchQuery(''); }}
            className={`pb-2 text-sm font-semibold transition-colors border-b-2 ${
              activeTab === 'schedules'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            Jadwal Pelajaran ({initialSchedules.length})
          </button>
        </div>

        <div className="flex items-center gap-3">
          {activeTab === 'classes' ? (
            <button
              onClick={() => setIsClassModalOpen(true)}
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors shadow-sm"
            >
              + Tambah Kelas
            </button>
          ) : (
            <button
              onClick={() => setIsScheduleModalOpen(true)}
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors shadow-sm"
            >
              + Tambah Jadwal
            </button>
          )}
        </div>
      </div>

      <div className="w-full sm:w-96">
        <input
          type="text"
          placeholder={activeTab === 'classes' ? "Cari nama kelas atau wali kelas..." : "Cari mapel, kelas, guru, atau hari..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-900"
        />
      </div>

      {activeTab === 'classes' ? (
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Nama Kelas</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Tingkat</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Tahun Ajaran</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Wali Kelas</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Siswa / Kapasitas</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {filteredClasses.length > 0 ? (
                filteredClasses.map((item, index) => (
                  <tr key={item.id || index} className="hover:bg-slate-50 transition-colors">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">{item.nama_kelas || '-'}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">{item.tingkat || '-'}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">{item.tahun_ajaran || '-'}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-700">{item.wali_kelas || '-'}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-indigo-600">
                      {item.jumlah_siswa || 0} / {item.kapasitas || 36} Siswa
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-right">
                      <button className="text-rose-600 hover:text-rose-900 font-medium text-xs">Hapus</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-sm text-slate-500">
                    Belum ada data kelas di database Neon.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Hari & Jam</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Mata Pelajaran</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Kelas</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Guru Pengampu</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {filteredSchedules.length > 0 ? (
                filteredSchedules.map((item, index) => (
                  <tr key={item.id || index} className="hover:bg-slate-50 transition-colors">
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-700">
                      <div className="font-medium text-slate-900">{item.hari}</div>
                      <div className="text-xs text-slate-500">{item.jam}</div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-indigo-600">{item.mata_pelajaran || '-'}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <span className="inline-flex rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">{item.kelas || '-'}</span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-700">{item.nama_guru || '-'}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-right">
                      <button className="text-rose-600 hover:text-rose-900 font-medium text-xs">Hapus</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-sm text-slate-500">
                    Belum ada data jadwal pelajaran di database Neon.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {isClassModalOpen && <AddClassModal onClose={() => setIsClassModalOpen(false)} />}
      {isScheduleModalOpen && <AddScheduleModal onClose={() => setIsScheduleModalOpen(false)} />}
    </div>
  );
}