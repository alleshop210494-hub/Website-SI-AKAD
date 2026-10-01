"use client";

import React from "react";

interface GradeItem {
  id: string;
  subject: string;
  teacher: string;
  tugas: number;
  uts: number;
  uas: number;
  finalScore: number;
  predicate: string;
}

export default function StudentGradesPage() {
  const grades: GradeItem[] = [
    { id: "1", subject: "Matematika Wajib", teacher: "Drs. Budi Santoso", tugas: 88, uts: 85, uas: 90, finalScore: 88, predicate: "A" },
    { id: "2", subject: "Fisika", teacher: "Siti Rahma, M.Pd", tugas: 82, uts: 80, uas: 85, finalScore: 83, predicate: "B+" },
    { id: "3", subject: "Kimia", teacher: "Ahmad Fauzi, S.Si", tugas: 90, uts: 88, uas: 92, finalScore: 90, predicate: "A" },
    { id: "4", subject: "Bahasa Indonesia", teacher: "Dewi Lestari, S.Pd", tugas: 95, uts: 90, uas: 92, finalScore: 92, predicate: "A" },
    { id: "5", subject: "Bahasa Inggris", teacher: "John Doe, M.A", tugas: 85, uts: 87, uas: 88, finalScore: 87, predicate: "A" },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Nilai Akademik
          </h1>
          <p className="text-slate-500 text-xs mt-1">
            Rekapitulasi hasil penilaian tugas, UTS, dan UAS Semester Ganjil 2026.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/50">
                <th className="py-3 px-5">Mata Pelajaran</th>
                <th className="py-3 px-5">Pengajar</th>
                <th className="py-3 px-5 text-center">Tugas</th>
                <th className="py-3 px-5 text-center">UTS</th>
                <th className="py-3 px-5 text-center">UAS</th>
                <th className="py-3 px-5 text-center">Nilai Akhir</th>
                <th className="py-3 px-5 text-center">Predikat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              {grades.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-slate-900">{item.subject}</td>
                  <td className="py-3.5 px-5 text-slate-500">{item.teacher}</td>
                  <td className="py-3.5 px-5 text-center text-slate-600">{item.tugas}</td>
                  <td className="py-3.5 px-5 text-center text-slate-600">{item.uts}</td>
                  <td className="py-3.5 px-5 text-center text-slate-600">{item.uas}</td>
                  <td className="py-3.5 px-5 text-center font-bold text-slate-900">{item.finalScore}</td>
                  <td className="py-3.5 px-5 text-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-800">
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