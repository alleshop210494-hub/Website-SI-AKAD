"use client";

import React, { useState, useEffect } from "react";

interface Student {
  id: string;
  name: string;
  nisn: string;
  status: "hadir" | "izin" | "sakit" | "alpa";
}

export default function TeacherAttendancePage() {
  const [selectedClass, setSelectedClass] = useState<string>("X-IPA-1");
  const [currentDate, setCurrentDate] = useState<string>("");
  const [students, setStudents] = useState<Student[]>([
    { id: "1", name: "Ahmad Dahlan", nisn: "12345678", status: "hadir" },
    { id: "2", name: "Siti Nurhaliza", nisn: "12345679", status: "hadir" },
    { id: "3", name: "Budi Santoso", nisn: "12345680", status: "izin" },
    { id: "4", name: "Dewi Lestari", nisn: "12345681", status: "sakit" },
  ]);

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString("id-ID"));
  }, []);

  const handleStatusChange = (
    studentId: string,
    newStatus: "hadir" | "izin" | "sakit" | "alpa"
  ) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === studentId ? { ...student, status: newStatus } : student
      )
    );
  };

  const handleSave = () => {
    alert(`Presensi untuk kelas ${selectedClass} berhasil disimpan!`);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Absensi Kelas</h1>
          <p className="text-gray-500 text-sm">
            Kelola kehadiran siswa harian berdasarkan kelas
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="class-select" className="text-sm font-medium text-gray-700">
            Pilih Kelas:
          </label>
          <select
            id="class-select"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="X-IPA-1">X IPA 1</option>
            <option value="X-IPA-2">X IPA 2</option>
            <option value="XI-IPS-1">XI IPS 1</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
          <span className="font-semibold text-gray-700">
            Daftar Siswa ({selectedClass})
          </span>
          <span className="text-xs text-gray-500">
            Tanggal: {currentDate || "-"}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase bg-gray-50/50">
                <th className="py-3 px-4">No</th>
                <th className="py-3 px-4">NISN</th>
                <th className="py-3 px-4">Nama Siswa</th>
                <th className="py-3 px-4 text-center">Status Kehadiran</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {students.map((student, index) => (
                <tr key={student.id} className="hover:bg-gray-50/50">
                  <td className="py-3 px-4 font-medium text-gray-500">
                    {index + 1}
                  </td>
                  <td className="py-3 px-4">{student.nisn}</td>
                  <td className="py-3 px-4 font-medium">{student.name}</td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center items-center gap-2">
                      {(["hadir", "izin", "sakit", "alpa"] as const).map((statusOption) => (
                        <button
                          key={statusOption}
                          type="button"
                          onClick={() => handleStatusChange(student.id, statusOption)}
                          className={`px-3 py-1 rounded-md text-xs font-medium capitalize transition-colors ${
                            student.status === statusOption
                              ? statusOption === "hadir"
                                ? "bg-emerald-600 text-white"
                                : statusOption === "izin"
                                ? "bg-amber-500 text-white"
                                : statusOption === "sakit"
                                ? "bg-blue-600 text-white"
                                : "bg-rose-600 text-white"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {statusOption}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Simpan Presensi
          </button>
        </div>
      </div>
    </div>
  );
}