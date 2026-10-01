"use client";

import React from "react";
import Link from "next/link";

export default function TeacherDashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Selamat Datang, Guru Matematika! 👋
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Ringkasan aktivitas mengajar dan kelas Anda hari ini.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-500">Total Kelas Diampu</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">4 Kelas</h3>
            </div>
            <span className="text-2xl p-3 bg-blue-50 rounded-lg">🏫</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-500">Total Siswa</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">128 Siswa</h3>
            </div>
            <span className="text-2xl p-3 bg-emerald-50 rounded-lg">👨‍🎓</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-gray-500">Jadwal Mengajar Hari Ini</p>
              <h3 className="text-2xl font-bold text-gray-800 mt-1">2 Sesi</h3>
            </div>
            <span className="text-2xl p-3 bg-amber-50 rounded-lg">📅</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Akses Cepat</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/guru/schedules"
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50/50 transition-colors"
          >
            <span className="text-xl">📅</span>
            <h4 className="font-semibold text-gray-800 mt-2">Jadwal Mengajar</h4>
            <p className="text-xs text-gray-500 mt-1">Lihat jam dan ruang kelas mengajar</p>
          </Link>

          <Link
            href="/guru/absensi"
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50/50 transition-colors"
          >
            <span className="text-xl">📝</span>
            <h4 className="font-semibold text-gray-800 mt-2">Absensi Kelas</h4>
            <p className="text-xs text-gray-500 mt-1">Catat kehadiran siswa harian</p>
          </Link>

          <Link
            href="/guru/grading"
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50/50 transition-colors"
          >
            <span className="text-xl">🎓</span>
            <h4 className="font-semibold text-gray-800 mt-2">Input Penilaian</h4>
            <p className="text-xs text-gray-500 mt-1">Kelola nilai tugas, UTS, dan UAS</p>
          </Link>
        </div>
      </div>
    </div>
  );
}