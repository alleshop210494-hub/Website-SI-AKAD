"use client";

import React from "react";
import Link from "next/link";

export default function ParentDashboardPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Ringkasan Orang Tua
          </h1>
          <p className="text-slate-500 text-xs mt-1">
            Pantau perkembangan akademik, absensi, dan status administrasi siswa.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200/60 rounded-full text-xs font-medium text-emerald-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Status Siswa: Aktif
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Presensi Kehadiran</span>
            <span className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">95%</span>
            <span className="text-[11px] text-emerald-600 font-medium">Sangat Baik</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Rata-Rata Nilai</span>
            <span className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147L12 14.6l7.74-4.453a1.125 1.125 0 000-1.946L12 3.75 4.26 8.201a1.125 1.125 0 000 1.946z" />
              </svg>
            </span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">86.5</span>
            <span className="text-[11px] text-slate-500 font-medium">Semester Genap</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Status Administrasi</span>
            <span className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-slate-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3" />
              </svg>
            </span>
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">Lunas</span>
            <span className="text-[11px] text-emerald-600 font-medium">SPP Bulan Ini</span>
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
            href="/ortu/attendances"
            className="group p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-900 transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-700 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25" />
              </svg>
            </div>
            <h3 className="font-semibold text-sm text-slate-900 mt-4 group-hover:text-slate-900">
              Kehadiran Anak
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Pantau rincian presensi harian per mata pelajaran.
            </p>
          </Link>

          <Link
            href="/ortu/grades"
            className="group p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-900 transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-700 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147L12 14.6l7.74-4.453a1.125 1.125 0 000-1.946L12 3.75 4.26 8.201a1.125 1.125 0 000 1.946z" />
              </svg>
            </div>
            <h3 className="font-semibold text-sm text-slate-900 mt-4 group-hover:text-slate-900">
              Nilai & Rapor
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Cek capaian akademis, tugas, UTS, dan UAS.
            </p>
          </Link>

          <Link
            href="/ortu/finance"
            className="group p-5 bg-white border border-slate-200/80 rounded-xl hover:border-slate-900 transition-all duration-150 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-700 flex items-center justify-center transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6" />
              </svg>
            </div>
            <h3 className="font-semibold text-sm text-slate-900 mt-4 group-hover:text-slate-900">
              Tagihan & SPP
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Lihat histori transaksi dan bukti pembayaran online.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}