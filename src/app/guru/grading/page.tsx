"use client";

import React, { useState } from "react";

interface GradeItem {
  id: string;
  name: string;
  nisn: string;
  assignment: number;
  uts: number;
  uas: number;
}

export default function TeacherGradingPage() {
  const [selectedClass, setSelectedClass] = useState<string>("X-IPA-1");
  const [grades, setGrades] = useState<GradeItem[]>([
    { id: "1", name: "Ahmad Dahlan", nisn: "12345678", assignment: 85, uts: 80, uas: 88 },
    { id: "2", name: "Siti Nurhaliza", nisn: "12345679", assignment: 90, uts: 85, uas: 92 },
    { id: "3", name: "Budi Santoso", nisn: "12345680", assignment: 75, uts: 70, uas: 78 },
    { id: "4", name: "Dewi Lestari", nisn: "12345681", assignment: 88, uts: 82, uas: 85 },
  ]);

  const handleGradeChange = (id: string, field: "assignment" | "uts" | "uas", value: number) => {
    setGrades((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleSave = () => {
    alert(`Data nilai kelas ${selectedClass} berhasil disimpan!`);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Penilaian Siswa</h1>
          <p className="text-gray-500 text-sm">
            Input dan kelola nilai tugas, UTS, serta UAS mata pelajaran Matematika
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
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="X-IPA-1">X IPA 1</option>
            <option value="X-IPA-2">X IPA 2</option>
            <option value="XI-IPS-1">XI IPS 1</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase bg-gray-50">
                <th className="py-3 px-4">No</th>
                <th className="py-3 px-4">NISN</th>
                <th className="py-3 px-4">Nama Siswa</th>
                <th className="py-3 px-4 w-28">Tugas</th>
                <th className="py-3 px-4 w-28">UTS</th>
                <th className="py-3 px-4 w-28">UAS</th>
                <th className="py-3 px-4 text-center">Nilai Akhir</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {grades.map((student, index) => {
                const finalGrade = Math.round(
                  student.assignment * 0.3 + student.uts * 0.3 + student.uas * 0.4
                );
                return (
                  <tr key={student.id} className="hover:bg-gray-50/50">
                    <td className="py-3 px-4 font-medium text-gray-500">{index + 1}</td>
                    <td className="py-3 px-4">{student.nisn}</td>
                    <td className="py-3 px-4 font-medium text-gray-800">{student.name}</td>
                    <td className="py-3 px-4">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={student.assignment}
                        onChange={(e) =>
                          handleGradeChange(student.id, "assignment", Number(e.target.value))
                        }
                        className="w-full border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={student.uts}
                        onChange={(e) =>
                          handleGradeChange(student.id, "uts", Number(e.target.value))
                        }
                        className="w-full border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        value={student.uas}
                        onChange={(e) =>
                          handleGradeChange(student.id, "uas", Number(e.target.value))
                        }
                        className="w-full border border-gray-200 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-blue-600">
                      {finalGrade}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-100 flex justify-end">
          <button
            onClick={handleSave}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Simpan Nilai
          </button>
        </div>
      </div>
    </div>
  );
}