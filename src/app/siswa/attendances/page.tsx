"use client";

import React from "react";

interface AttendanceRecord {
  date: string;
  subject: string;
  time: string;
  status: "Hadir" | "Izin" | "Sakit" | "Tanpa Keterangan";
}

export default function SiswaAttendancePage() {
  const records: AttendanceRecord[] = [
    { date: "2026-10-01", subject: "Matematika Wajib", time: "07:00 WIB", status: "Hadir" },
    { date: "2026-09-30", subject: "Bahasa Indonesia", time: "08:30 WIB", status: "Hadir" },
    { date: "2026-09-29", subject: "Fisika", time: "-", status: "Izin" },
    { date: "2026-09-28", subject: "Kimia", time: "07:05 WIB", status: "Hadir" },
  ];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Presensi Saya
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Rekapitulasi kehadiran dan riwayat presensi harian siswa.
        </p>
      </div>

      {/* Ringkasan Presensi */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
          <p className="text-xs text-slate-500 font-medium">Hadir</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">95%</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
          <p className="text-xs text-slate-500 font-medium">Izin</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">1 Hari</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
          <p className="text-xs text-slate-500 font-medium">Sakit</p>
          <p className="text-2xl font-bold text-amber-500 mt-1">0 Hari</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
          <p className="text-xs text-slate-500 font-medium">Tanpa Keterangan</p>
          <p className="text-2xl font-bold text-rose-600 mt-1">0 Hari</p>
        </div>
      </div>

      {/* Tabel Riwayat */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
            Riwayat Presensi Terbaru
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 font-medium">
              <tr>
                <th className="px-5 py-3">Tanggal</th>
                <th className="px-5 py-3">Mata Pelajaran</th>
                <th className="px-5 py-3">Waktu Presensi</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {records.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-5 py-3.5 font-mono text-slate-600">{row.date}</td>
                  <td className="px-5 py-3.5 font-semibold text-slate-900">{row.subject}</td>
                  <td className="px-5 py-3.5 font-mono text-slate-500">{row.time}</td>
                  <td className="px-5 py-3.5">
                    {row.status === "Hadir" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Hadir
                      </span>
                    )}
                    {row.status === "Izin" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
                        Izin
                      </span>
                    )}
                    {row.status === "Sakit" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
                        Sakit
                      </span>
                    )}
                    {row.status === "Tanpa Keterangan" && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-rose-50 text-rose-700 border border-rose-200">
                        Alpa
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}