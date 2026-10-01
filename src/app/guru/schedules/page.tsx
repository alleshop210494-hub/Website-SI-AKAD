"use client";

import React from "react";

interface ScheduleItem {
  id: string;
  day: string;
  time: string;
  classRoom: string;
  subject: string;
  room: string;
}

export default function TeacherSchedulesPage() {
  const schedules: ScheduleItem[] = [
    { id: "1", day: "Senin", time: "07:30 - 09:00", classRoom: "X IPA 1", subject: "Matematika Wajib", room: "Ruang 101" },
    { id: "2", day: "Senin", time: "09:15 - 10:45", classRoom: "XI IPS 1", subject: "Matematika Wajib", room: "Ruang 203" },
    { id: "3", day: "Selasa", time: "10:45 - 12:15", classRoom: "X IPA 2", subject: "Matematika Minat", room: "Lab Math" },
    { id: "4", day: "Rabu", time: "07:30 - 09:00", classRoom: "XI IPA 1", subject: "Matematika Wajib", room: "Ruang 201" },
    { id: "5", day: "Kamis", time: "09:15 - 10:45", classRoom: "X IPA 1", subject: "Matematika Wajib", room: "Ruang 101" },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Jadwal Mengajar
          </h1>
          <p className="text-slate-500 text-xs mt-1">
            Daftar alokasi waktu dan ruangan kelas pengampuan mata pelajaran.
          </p>
        </div>
      </div>

      {/* Clean Table */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200/80 text-[11px] font-semibold text-slate-500 uppercase tracking-wider bg-slate-50/50">
                <th className="py-3 px-5">Hari</th>
                <th className="py-3 px-5">Waktu</th>
                <th className="py-3 px-5">Kelas</th>
                <th className="py-3 px-5">Mata Pelajaran</th>
                <th className="py-3 px-5">Ruangan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              {schedules.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-5 font-semibold text-slate-900">{item.day}</td>
                  <td className="py-3.5 px-5 text-slate-600">{item.time}</td>
                  <td className="py-3.5 px-5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-800 ring-1 ring-inset ring-slate-200">
                      {item.classRoom}
                    </span>
                  </td>
                  <td className="py-3.5 px-5 font-medium text-slate-800">{item.subject}</td>
                  <td className="py-3.5 px-5 text-slate-500">{item.room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}