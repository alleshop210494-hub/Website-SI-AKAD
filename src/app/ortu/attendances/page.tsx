"use client";

import React from "react";

interface AttendanceRecord {
  id: string;
  date: string;
  subject: string;
  status: "Hadir" | "Izin" | "Sakit" | "Alpha";
  note: string;
}

export default function ParentAttendancesPage() {
  const attendanceData: AttendanceRecord[] = [
    { id: "1", date: "28 Sep 2026", subject: "Matematika Wajib", status: "Hadir", note: "-" },
    { id: "2", date: "28 Sep 2026", subject: "Bahasa Indonesia", status: "Hadir", note: "-" },
    { id: "3", date: "29 Sep 2026", subject: "Fisika", status: "Hadir", note: "-" },
    { id: "4", date: "29 Sep 2026", subject: "Kimia", status: "Izin", note: "Acara Keluarga" },
    { id: "5", date: "30 Sep 2026", subject: "Biologi", status: "Hadir", note: "-" },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Data Kehadiran Anak
          </h1>
          <p className="text-slate-500 text-xs mt-1">
            Rekapitulas kehadiran harian siswa pada jam pelajaran aktif.
          </p>
        </div>
      </div>

      {/* Modern Status Counter */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <p className="text-xs text-slate-500 font-medium">Total Hadir</p>
          <p className="text-lg font-bold text-slate-900 mt-1">24 Hari</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <p className="text-xs text-slate-500 font-medium">Izin</p>
          <p className="text-lg font-bold text-slate-900 mt-1">1 Hari</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <p className="text-xs text-slate-500 font-medium">Sakit</p>
          <p className="text-lg font-bold text-slate-900 mt-1">0 Hari</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          <p className="text-xs text-slate-500 font-medium">Alpha</p>
          <p className="text-lg font-bold text-slate-900 mt-1">0 Hari</p>
        </div>
      </div>

      {/* Clean Modern Table */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/50">
                <th className="py-3 px-5">Tanggal</th>
                <th className="py-3 px-5">Mata Pelajaran</th>
                <th className="py-3 px-5">Status</th>
                <th className="py-3 px-5">Keterangan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              {attendanceData.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-medium text-slate-900">{item.date}</td>
                  <td className="py-3.5 px-5 text-slate-800">{item.subject}</td>
                  <td className="py-3.5 px-5">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium ring-1 ring-inset ${
                        item.status === "Hadir"
                          ? "bg-emerald-50 text-emerald-700 ring-emerald-600/20"
                          : item.status === "Izin"
                          ? "bg-blue-50 text-blue-700 ring-blue-600/20"
                          : item.status === "Sakit"
                          ? "bg-amber-50 text-amber-700 ring-amber-600/20"
                          : "bg-rose-50 text-rose-700 ring-rose-600/20"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 text-slate-500">{item.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}