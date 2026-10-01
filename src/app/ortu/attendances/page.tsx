"use client";

import React from "react";

interface AttendanceRecord {
  id: string;
  date: string;
  subject: string;
  status: "Hadir" | "Izin" | "Sakit" | "Alpha";
  note: string;
}

export default function ParentAttendancePage() {
  const attendanceData: AttendanceRecord[] = [
    { id: "1", date: "2026-09-28", subject: "Matematika Wajib", status: "Hadir", note: "-" },
    { id: "2", date: "2026-09-28", subject: "Bahasa Indonesia", status: "Hadir", note: "-" },
    { id: "3", date: "2026-09-29", subject: "Fisika", status: "Hadir", note: "-" },
    { id: "4", date: "2026-09-29", subject: "Kimia", status: "Izin", note: "Acara Keluarga" },
    { id: "5", date: "2026-09-30", subject: "Biologi", status: "Hadir", note: "-" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Kehadiran Anak</h1>
        <p className="text-gray-500 text-sm">
          Rekap data presensi harian dan mata pelajaran siswa
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
          <p className="text-xs text-gray-500 font-medium">Hadir</p>
          <p className="text-2xl font-bold text-emerald-600 mt-1">95%</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
          <p className="text-xs text-gray-500 font-medium">Izin</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">1 Hari</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
          <p className="text-xs text-gray-500 font-medium">Sakit</p>
          <p className="text-2xl font-bold text-amber-600 mt-1">0 Hari</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
          <p className="text-xs text-gray-500 font-medium">Alpha</p>
          <p className="text-2xl font-bold text-rose-600 mt-1">0 Hari</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase bg-gray-50">
                <th className="py-3.5 px-4">Tanggal</th>
                <th className="py-3.5 px-4">Mata Pelajaran</th>
                <th className="py-3.5 px-4">Status Kehadiran</th>
                <th className="py-3.5 px-4">Keterangan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {attendanceData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50">
                  <td className="py-3.5 px-4 font-medium text-gray-800">{item.date}</td>
                  <td className="py-3.5 px-4">{item.subject}</td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        item.status === "Hadir"
                          ? "bg-emerald-50 text-emerald-600"
                          : item.status === "Izin"
                          ? "bg-blue-50 text-blue-600"
                          : item.status === "Sakit"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-rose-50 text-rose-600"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-gray-500">{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}