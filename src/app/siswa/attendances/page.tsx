"use client";

import React, { useState } from "react";

interface AttendanceRecord {
  id: string;
  date: string;
  subject: string;
  status: "Hadir" | "Izin" | "Sakit" | "Alpha";
  time: string;
}

export default function StudentAttendancePage() {
  const [attendances] = useState<AttendanceRecord[]>([
    {
      id: "1",
      date: "2026-10-01",
      subject: "Matematika Wajib",
      status: "Hadir",
      time: "07:00 WIB",
    },
    {
      id: "2",
      date: "2026-09-30",
      subject: "Bahasa Indonesia",
      status: "Hadir",
      time: "08:30 WIB",
    },
    {
      id: "3",
      date: "2026-09-29",
      subject: "Fisika",
      status: "Izin",
      time: "-",
    },
  ]);

  const getStatusBadge = (status: AttendanceRecord["status"]) => {
    switch (status) {
      case "Hadir":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Izin":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Sakit":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "Alpha":
        return "bg-rose-50 text-rose-700 border-rose-200";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Presensi Saya
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Rekapitulasi kehadiran dan riwayat presensi harian siswa.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
          <p className="text-xs font-medium text-slate-500">Hadir</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">95%</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
          <p className="text-xs font-medium text-slate-500">Izin</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">1 Hari</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
          <p className="text-xs font-medium text-slate-500">Sakit</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">0 Hari</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
          <p className="text-xs font-medium text-slate-500">Tanpa Keterangan</p>
          <p className="text-2xl font-bold text-rose-600 mt-1">0 Hari</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h3 className="text-xs font-semibold text-slate-800">
            Riwayat Presensi Terbaru
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-500">
              <tr>
                <th className="px-5 py-3 font-medium">Tanggal</th>
                <th className="px-5 py-3 font-medium">Mata Pelajaran</th>
                <th className="px-5 py-3 font-medium">Waktu Presensi</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {attendances.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50">
                  <td className="px-5 py-3.5 font-medium">{item.date}</td>
                  <td className="px-5 py-3.5">{item.subject}</td>
                  <td className="px-5 py-3.5">{item.time}</td>
                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${getStatusBadge(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
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