"use client";

import React, { useState } from "react";

interface Teacher {
  nip: string;
  name: string;
  subject: string;
  email: string;
  phone: string;
  status: "Aktif" | "Non-Aktif";
}

export default function AdminTeachersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [teachers] = useState<Teacher[]>([
    {
      nip: "198501152010011001",
      name: "Siti Aminah, M.Pd.",
      subject: "Matematika",
      email: "siti.aminah@sekolah.sch.id",
      phone: "081122334455",
      status: "Aktif",
    },
    {
      nip: "198703202012022002",
      name: "Drs. Agus Wijaya",
      subject: "Fisika",
      email: "agus.wijaya@sekolah.sch.id",
      phone: "081122334456",
      status: "Aktif",
    },
    {
      nip: "199008122015031003",
      name: "Rina Kartika, S.Pd.",
      subject: "Bahasa Inggris",
      email: "rina.kartika@sekolah.sch.id",
      phone: "081122334457",
      status: "Aktif",
    },
  ]);

  const filteredTeachers = teachers.filter(
    (t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.nip.includes(searchQuery) ||
      t.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Data Guru & Staff Pengajar
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Kelola data tenaga pendidik, NIP, serta mata pelajaran yang diampu.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium transition-colors shadow-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span>Tambah Guru Baru</span>
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
        {/* Search Bar */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder="Cari berdasarkan Nama, NIP, atau Mapel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all"
            />
          </div>
          <span className="text-xs text-slate-500 self-end sm:self-center font-medium">
            Total: <strong className="text-slate-900">{filteredTeachers.length}</strong> Pengajar
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 font-medium">
              <tr>
                <th className="px-5 py-3">NIP</th>
                <th className="px-5 py-3">Nama Guru</th>
                <th className="px-5 py-3">Mata Pelajaran</th>
                <th className="px-5 py-3">Email & Kontak</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredTeachers.length > 0 ? (
                filteredTeachers.map((item) => (
                  <tr key={item.nip} className="hover:bg-slate-50/60 transition-colors">
                    <td className="px-5 py-3.5 font-mono text-slate-600">{item.nip}</td>
                    <td className="px-5 py-3.5 font-semibold text-slate-900">{item.name}</td>
                    <td className="px-5 py-3.5">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-medium rounded-md text-[11px]">
                        {item.subject}
                      </span>
                    </td>
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
                  <td colSpan={6} className="px-5 py-8 text-center text-slate-400">
                    Data guru tidak ditemukan.
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