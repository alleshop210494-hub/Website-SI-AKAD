"use client";

import React from "react";

export default function SiswaDashboardPage() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header Selamat Datang */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              Selamat Datang, Ahmad Dahlan
            </h1>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              Status: Aktif
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            NISN: <span className="font-mono text-slate-700 font-medium">0054819230</span> • Kelas: <span className="text-slate-700 font-medium">X IPA 1</span> • Wali Kelas: <span className="text-slate-700 font-medium">Drs. Budi Santoso</span>
          </p>
        </div>
      </div>

      {/* Ringkasan Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card Nilai */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">Rata-rata Nilai</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-slate-900">88.5</span>
              <span className="text-xs font-semibold text-emerald-600">Sangat Baik</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
        </div>

        {/* Card Kehadiran */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">Tingkat Kehadiran</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-slate-900">98%</span>
              <span className="text-xs font-normal text-slate-400">Semester Ini</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Card SPP */}
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">Status SPP</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-emerald-600">Lunas</span>
              <span className="text-xs font-normal text-slate-400">Bulan Oktober</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Menu Pintas Akademik */}
      <div>
        <h2 className="text-sm font-bold text-slate-900 mb-3">Menu Akademik</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/siswa/schedule"
            className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm hover:border-slate-400 hover:shadow-md transition-all group"
          >
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-slate-800">
              Jadwal Pelajaran
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Lihat mata pelajaran & jam belajar harian.
            </p>
          </a>

          <a
            href="/siswa/grades"
            className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm hover:border-slate-400 hover:shadow-md transition-all group"
          >
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-slate-800">
              Nilai Akademik
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Cek rekapitulasi nilai tugas, UTS, & UAS.
            </p>
          </a>

          <a
            href="/siswa/attendances"
            className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm hover:border-slate-400 hover:shadow-md transition-all group"
          >
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-slate-800">
              Presensi Saya
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Catatan kehadiran & absensi bulanan.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}