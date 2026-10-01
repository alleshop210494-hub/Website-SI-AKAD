"use client";

import React from "react";
import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Dashboard Administrator & Tata Usaha
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Ringkasan data akademik, jumlah entitas, dan status pembayaran SPP sekolah.
          </p>
        </div>
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Tahun Ajaran 2026/2027
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">Total Siswa</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-slate-900">512</span>
              <span className="text-xs text-slate-500 font-normal">Siswa Aktif</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">Total Pengajar</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-slate-900">42</span>
              <span className="text-xs text-slate-500 font-normal">Guru Tetap</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147L12 14.6l7.74-4.453a1.125 1.125 0 000-1.946L12 3.75 4.26 8.201a1.125 1.125 0 000 1.946z" />
            </svg>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">Pembayaran SPP</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-slate-900">88%</span>
              <span className="text-xs text-emerald-600 font-medium">Bulan Ini</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h16.5a1.5 1.5 0 011.5 1.5v9.75a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5z" />
            </svg>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500">Presensi Hari Ini</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-slate-900">96.4%</span>
              <span className="text-xs text-emerald-600 font-medium">Hadir</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75M15 12H18m-3 3H18m-3 3H18M3.75 4.5h16.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3 pt-2">
        <h2 className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
          Kelola Data Master
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/admin/students"
            className="p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 hover:shadow-md transition-all duration-150 group"
          >
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Data Siswa & Kelas
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Tambah, edit, dan atur pemetaan kelas siswa.
            </p>
          </Link>

          <Link
            href="/admin/teachers"
            className="p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 hover:shadow-md transition-all duration-150 group"
          >
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Data Pengajar & Mapel
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Kelola NIP, mata pelajaran, dan jadwal pengampuan.
            </p>
          </Link>

          <Link
            href="/admin/finance"
            className="p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-300 hover:shadow-md transition-all duration-150 group"
          >
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Verifikasi SPP
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Cek tagihan dan verifikasi pembayaran masuk.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}