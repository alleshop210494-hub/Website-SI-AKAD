"use client";

import React from "react";

interface GradeItem {
  subject: string;
  teacher: string;
  tugas: number;
  uts: number;
  uas: number;
  finalGrade: number;
  predicate: string;
}

export default function SiswaGradesPage() {
  const grades: GradeItem[] = [
    { subject: "Matematika Wajib", teacher: "Drs. Budi Santoso", tugas: 88, uts: 85, uas: 90, finalGrade: 88, predicate: "A" },
    { subject: "Fisika", teacher: "Siti Rahma, M.Pd", tugas: 82, uts: 80, uas: 85, finalGrade: 83, predicate: "B+" },
    { subject: "Kimia", teacher: "Ahmad Fauzi, S.Si", tugas: 90, uts: 88, uas: 92, finalGrade: 90, predicate: "A" },
    { subject: "Bahasa Indonesia", teacher: "Dewi Lestari, S.Pd", tugas: 95, uts: 90, uas: 92, finalGrade: 92, predicate: "A" },
    { subject: "Bahasa Inggris", teacher: "John Doe, M.A", tugas: 85, uts: 87, uas: 88, finalGrade: 87, predicate: "A" },
  ];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Nilai Akademik
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Rekapitulasi hasil penilaian tugas, UTS, dan UAS Semester Ganjil 2026.
        </p>
      </div>

      {/* Tabel Nilai */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 font-medium uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-5 py-3">MATA PELAJARAN</th>
                <th className="px-5 py-3">PENGAJAR</th>
                <th className="px-5 py-3 text-center">TUGAS</th>
                <th className="px-5 py-3 text-center">UTS</th>
                <th className="px-5 py-3 text-center">UAS</th>
                <th className="px-5 py-3 text-center">NILAI AKHIR</th>
                <th className="px-5 py-3 text-center">PREDIKAT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {grades.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-5 py-3.5 font-semibold text-slate-900">{item.subject}</td>
                  <td className="px-5 py-3.5 text-slate-500">{item.teacher}</td>
                  <td className="px-5 py-3.5 text-center font-mono">{item.tugas}</td>
                  <td className="px-5 py-3.5 text-center font-mono">{item.uts}</td>
                  <td className="px-5 py-3.5 text-center font-mono">{item.uas}</td>
                  <td className="px-5 py-3.5 text-center font-mono font-bold text-slate-900">{item.finalGrade}</td>
                  <td className="px-5 py-3.5 text-center">
                    <span className="px-2.5 py-0.5 bg-slate-100 text-slate-800 font-bold rounded text-[11px]">
                      {item.predicate}
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