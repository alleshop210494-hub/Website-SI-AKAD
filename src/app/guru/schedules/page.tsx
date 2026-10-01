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
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Jadwal Mengajar</h1>
        <p className="text-gray-500 text-sm">
          Daftar sesi jam mengajar pelajaran Matematika minggu ini
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase bg-gray-50">
                <th className="py-3.5 px-4">Hari</th>
                <th className="py-3.5 px-4">Waktu</th>
                <th className="py-3.5 px-4">Kelas</th>
                <th className="py-3.5 px-4">Mata Pelajaran</th>
                <th className="py-3.5 px-4">Ruangan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {schedules.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50">
                  <td className="py-3.5 px-4 font-semibold text-gray-800">{item.day}</td>
                  <td className="py-3.5 px-4 text-gray-600">{item.time}</td>
                  <td className="py-3.5 px-4 font-medium text-blue-600">{item.classRoom}</td>
                  <td className="py-3.5 px-4">{item.subject}</td>
                  <td className="py-3.5 px-4 text-gray-500">{item.room}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}