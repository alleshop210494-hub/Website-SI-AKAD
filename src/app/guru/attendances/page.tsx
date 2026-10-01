import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Absensi Kelas | Portal Guru',
  description: 'Manajemen absensi kelas untuk guru',
};

export default function AttendancesPage() {
  return (
    <main className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Absensi Kelas</h1>
        <p className="text-muted-foreground">
          Kelola dan catat kehadiran siswa di kelas Anda hari ini.
        </p>
      </div>

      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <p className="text-sm text-muted-foreground">
          Halaman Absensi Kelas berhasil dimuat dari rute <code>/guru/attendances</code>.
        </p>
      </div>
    </main>
  );
}