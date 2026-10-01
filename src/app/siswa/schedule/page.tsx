"use client";

import React, { useState } from "react";

interface ScheduleItem {
  time: string;
  subject: string;
  teacher: string;
  room: string;
}

const scheduleData: Record<string, ScheduleItem[]> = {
  Senin: [
    { time: "07:00 - 08:30", subject: "Matematika Wajib", teacher: "Drs. Budi Santoso", room: "Ruang X IPA 1" },
    { time: "08:30 - 10:00", subject: "Bahasa Indonesia", teacher: "Dewi Lestari, S.Pd", room: "Ruang X IPA 1" },
    { time: "10:15 - 11:45", subject: "Fisika", teacher: "Siti Rahma, M.Pd", room: "Lab Fisika" },
  ],
  Selasa: [
    { time: "07:00 - 08:30", subject: "Kimia", teacher: "Ahmad Fauzi, S.Si", room: "Lab Kimia" },
    { time: "08:30 - 10:00", subject: "Bahasa Inggris", teacher: "John Doe, M.A", room: "Ruang X IPA 1" },
    { time: "10:15 - 11:45", subject: "Biologi", teacher: "Sri Wahyuni, S.Pd", room: "Lab Biologi" },
  ],
  Rabu: [
    { time: "07:00 - 08:30", subject: "Sejarah Indonesia", teacher: "Hendra, S.Pd", room: "Ruang X IPA 1" },
    { time: "08:30 - 10:00", subject: "Pendidikan Agama", teacher: "Ust. M. Ridwan", room: "Ruang X IPA 1" },
  ],
  Kamis: [
    { time: "07:00 - 08:30", subject: "Penjasorkes", teacher: "Bambang, S.Pd", room: "Lapangan Olahraga" },
    { time: "08:30 - 10:00", subject: "Matematika Minat", teacher: "Drs. Budi Santoso", room: "Ruang X IPA 1" },
  ],
  Jumat: [
    { time: "07:00 - 08:30", subject: "Seni Budaya", teacher: "Maya S.Sn", room: "Ruang Seni" },
    { time: "08:30 - 10:00", subject: "PPKn", teacher: "Drs. Agus Supriyadi", room: "Ruang X IPA 1" },
  ],
};

export default function SiswaSchedulePage() {
  const [selectedDay, setSelectedDay] = useState("Senin");

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Jadwal Pelajaran Saya
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Daftar mata pelajaran harian untuk Kelas <strong className="text-slate-800">X IPA 1</strong>.
        </p>
      </div>

      {/* Selector Hari */}
      <div className="flex gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        {Object.keys(scheduleData).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              selectedDay === day
                ? "bg-slate-900 text-white shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule Table Container */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
          <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Jadwal Hari {selectedDay}
          </h2>
          <span className="text-xs text-slate-500">
            {scheduleData[selectedDay].length} Sesi Pelajaran
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 font-medium">
              <tr>
                <th className="px-5 py-3">Waktu</th>
                <th className="px-5 py-3">Mata Pelajaran</th>
                <th className="px-5 py-3">Pengajar</th>
                <th className="px-5 py-3">Ruangan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {scheduleData[selectedDay].map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-5 py-3.5 font-mono text-slate-600 font-medium">{item.time}</td>
                  <td className="px-5 py-3.5 font-semibold text-slate-900">{item.subject}</td>
                  <td className="px-5 py-3.5 text-slate-700">{item.teacher}</td>
                  <td className="px-5 py-3.5">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 font-medium rounded-md text-[11px]">
                      {item.room}
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