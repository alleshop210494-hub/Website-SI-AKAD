"use client";

import React from "react";
import Link from "next/link";

export default function TeacherDashboardPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Dashboard Guru
          </h1>
          <p className="text-slate-500 text-xs mt-1">
            Ringkasan kegiatan pembelajaran, data kelas, dan jadwal hari ini.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-xs font-medium text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Tahun Ajaran 2026/2027
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Kelas Diampu</span>
            <span className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5M4.5 21V10.5" />
              </svg>
            </span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">4 Kelas</span>
            <span className="text-[11px] text-slate-500 font-medium">X IPA 1-4</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Total Siswa</span>
            <span className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6 0 3.375 3.375 0 016 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">128 Siswa</span>
            <span className="text-[11px] text-slate-500 font-medium">Aktif</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Jadwal Mengajar Hari Ini</span>
            <span className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">2 Sesi</span>
            <span className="text-[11px] text-slate-500 font-medium">07:30 - 10:45</span>
          </div>
        </div>
      </div>

      {/* Quick Navigation Section */}
      <div className="space-y-4">
        <h2 className="text-sm font-semibold text-slate-900 tracking-tight">
          Akses Fitur Utama
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/guru/schedules"
            className="group p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-900 transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-700 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25" />
              </svg>
            </div>
            <h3 className="font-semibold text-sm text-slate-900 mt-4 group-hover:text-slate-900">
              Jadwal Mengajar
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Lihat alokasi waktu dan ruangan kelas mingguan.
            </p>
          </Link>

          <Link
            href="/guru/absensi"
            className="group p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-900 transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-700 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75M15 12H18m-3 3H18m-3 3H18M3.75 4.5h16.5" />
              </svg>
            </div>
            <h3 className="font-semibold text-sm text-slate-900 mt-4 group-hover:text-slate-900">
              Absensi Kelas
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Input kehadiran siswa secara cepat pada jam mengajar.
            </p>
          </Link>

          <Link
            href="/guru/grading"
            className="group p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-900 transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-700 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147L12 14.6l7.74-4.453a1.125 1.125 0 000-1.946L12 3.75 4.26 8.201a1.125 1.125 0 000 1.946z" />
              </svg>
            </div>
            <h3 className="font-semibold text-sm text-slate-900 mt-4 group-hover:text-slate-900">
              Input Penilaian
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Kelola nilai harian, tugas, UTS, dan UAS siswa.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}