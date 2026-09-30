'use client';

import { useState } from 'react';
import { useAuthStore } from '@/frontend/store/auth.store';

export default function AdminDashboardPage() {
  const { user } = useAuthStore();
  const [stats, setStats] = useState({
    totalStudents: 450,
    totalTeachers: 38,
    activeClasses: 15,
    sppCollected: 'Rp 125.000.000',
  });

  return (
    <div className="space-y-8">
      {/* Top Header Bar / User Profile (Tanpa Tombol Logout) */}
      <header className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-xl">
        <div>
          <h1 className="text-xl font-bold text-white">Dashboard Tata Usaha</h1>
          <p className="text-xs text-slate-400">Selamat datang kembali di panel administrasi sekolah.</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-bold text-white">{user?.name || 'Budi Santoso, S.Kom.'}</p>
            <p className="text-xs text-slate-400">{user?.email || 'admin@sekolah.sch.id'}</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-950 font-bold text-indigo-300 border border-indigo-700/50">
            {user?.name ? user.name.charAt(0).toUpperCase() : 'B'}
          </div>
        </div>
      </header>

      {/* Grid Cards Summary */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Total Siswa</span>
            <span className="text-xl">🎓</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-white">{stats.totalStudents}</p>
          <span className="text-[11px] text-emerald-400">Aktif Semester Ini</span>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Total Guru & Staff</span>
            <span className="text-xl">👩‍🏫</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-white">{stats.totalTeachers}</p>
          <span className="text-[11px] text-emerald-400">Pengajar Terdaftar</span>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Kelas Aktif</span>
            <span className="text-xl">🏫</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-white">{stats.activeClasses}</p>
          <span className="text-[11px] text-indigo-400">Rombongan Belajar</span>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">SPP Terkumpul</span>
            <span className="text-xl">💳</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-white">{stats.sppCollected}</p>
          <span className="text-[11px] text-amber-400">Bulan Ini</span>
        </div>
      </div>

      {/* Section Aktivitas Terbaru */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-xl">
        <h2 className="text-base font-bold text-white mb-4">Aktivitas Sistem Terbaru</h2>
        <div className="space-y-3 text-xs text-slate-300">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
            <span>Pembayaran SPP oleh <strong>Ahmad Rizky (X IPA 1)</strong> diverifikasi.</span>
            <span className="text-slate-500">10 menit yang lalu</span>
          </div>
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
            <span>Perubahan jadwal mengajar Guru Matematika telah disimpan.</span>
            <span className="text-slate-500">1 jam yang lalu</span>
          </div>
          <div className="flex items-center justify-between pb-1">
            <span>Pendaftaran siswa baru <strong>Siti Nurhaliza</strong> ditambahkan.</span>
            <span className="text-slate-500">3 jam yang lalu</span>
          </div>
        </div>
      </div>
    </div>
  );
}