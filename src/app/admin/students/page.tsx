"use client";

import React, { useState } from "react";

interface Student {
  nisn: string;
  name: string;
  className: string;
  gender: "L" | "P";
  email: string;
  phone: string;
  status: "Aktif" | "Non-Aktif";
}

export default function AdminStudentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [students] = useState<Student[]>([
    {
      nisn: "0012345678",
      name: "Ahmad Rizky",
      className: "X IPA 1",
      gender: "L",
      email: "ahmad.rizky@sekolah.sch.id",
      phone: "081234567890",
      status: "Aktif",
    },
    {
      nisn: "0012345679",
      name: "Siti Nurhaliza",
      className: "X IPA 1",
      gender: "P",
      email: "siti.nurhaliza@sekolah.sch.id",
      phone: "081234567891",
      status: "Aktif",
    },
    {
      nisn: "0012345680",
      name: "Budi Pratama",
      className: "XI IPS 2",
      gender: "L",
      email: "budi.pratama@sekolah.sch.id",
      phone: "081234567892",
      status: "Aktif",
    },
  ]);

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.nisn.includes(searchQuery) ||
      s.className.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Data Master Siswa
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Kelola data seluruh siswa terdaftar dan status keaktifan mereka.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium transition-colors shadow-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span>Tambah Siswa Baru</span>
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
        {/* Search & Filter Bar */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder="Cari berdasarkan Nama, NISN, atau Kelas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all"
            />
          </div>
          <span className="text-xs text-slate-500 self-end sm:self-center font-medium">
            Total: <strong className="text-slate-900">{filteredStudents.length}</strong> Siswa
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 font-medium">
              <tr>
                <th className="px-5 py-3">NISN</th>
                <th className="px-5 py-3">Nama Siswa</th>
                <th className="px-5 py-3">Kelas</th>
                <th className="px-5 py-3">L/P</th>
                <th className="px-5 py-3">Email & Kontak</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((item) => (
                  <tr key={item.nisn} className="hover:bg-slate-50/60 transition-colors">
                    <td className="px-5 py-3.5 font-mono text-slate-600">{item.nisn}</td>
                    <td className="px-5 py-3.5 font-semibold text-slate-900">{item.name}</td>
                    <td className="px-5 py-3.5">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-medium rounded-md text-[11px]">
                        {item.className}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 font-medium">{item.gender}</td>
                    <td className="px-5 py-3.5">
                      <p className="text-slate-800 font-medium">{item.email}</p>
                      <p className="text-[11px] text-slate-400">{item.phone}</p>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <button className="text-rose-600 hover:text-rose-700 font-medium hover:underline text-xs">
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-5 py-8 text-center text-slate-400">
                    Data siswa tidak ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}