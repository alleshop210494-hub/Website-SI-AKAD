'use client';

import React, { useState, useEffect } from 'react';

interface StudentGrade {
  nisn: string;
  nama_siswa: string;
  tugas: number | string;
  uts: number | string;
  uas: number | string;
}

export default function TeacherGradingPage() {
  const [selectedClass, setSelectedClass] = useState('X-IPA-1');
  const [students, setStudents] = useState<StudentGrade[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  // Daftar pilihan kelas yang seragam dengan format database
  const classList = ['X-IPA-1', 'X-IPA-2', 'XI-IPS-1', 'XII-IPA-1'];

  useEffect(() => {
    fetchGrades(selectedClass);
  }, [selectedClass]);

  const fetchGrades = async (kelas: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/grades?kelas=${encodeURIComponent(kelas)}`);
      const result = await res.json();
      if (result.success) {
        if (result.data.length > 0) {
          setStudents(result.data);
        } else {
          // Data bawaan awal jika database masih kosong untuk kelas tersebut
          setStudents([
            { nisn: '12345678', nama_siswa: 'Ahmad Dahlan', tugas: 85, uts: 80, uas: 88 },
            { nisn: '12345679', nama_siswa: 'Siti Nurhaliza', tugas: 90, uts: 85, uas: 92 },
            { nisn: '12345680', nama_siswa: 'Budi Santoso', tugas: 75, uts: 70, uas: 78 },
            { nisn: '12345681', nama_siswa: 'Dewi Lestari', tugas: 88, uts: 82, uas: 85 },
          ]);
        }
      }
    } catch (error) {
      console.error('Gagal memuat data nilai:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (index: number, field: 'tugas' | 'uts' | 'uas', value: string) => {
    const updated = [...students];
    updated[index][field] = value;
    setStudents(updated);
  };

  // Perhitungan Nilai Akhir otomatis (Tugas 30%, UTS 30%, UAS 40%)
  const calculateFinalScore = (tugas: any, uts: any, uas: any) => {
    const t = Number(tugas) || 0;
    const u = Number(uts) || 0;
    const a = Number(uas) || 0;
    const final = (t * 0.3) + (u * 0.3) + (a * 0.4);
    return Math.round(final);
  };

  const handleSaveGrades = async () => {
    setSaving(true);
    setMessage('');
    try {
      const res = await fetch('/api/grades', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kelas: selectedClass,
          grades: students,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setMessage(`Data nilai kelas ${selectedClass} berhasil disimpan ke database!`);
        fetchGrades(selectedClass); // Muat ulang data dari database
        setTimeout(() => setMessage(''), 4000);
      } else {
        setMessage('Gagal menyimpan nilai: ' + result.error);
      }
    } catch (error) {
      console.error('Kesalahan koneksi:', error);
      setMessage('Terjadi kesalahan saat menyimpan data ke database.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Sidebar Portal Pengajar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col justify-between p-6">
        <div>
          <div className="mb-8">
            <h1 className="font-bold text-lg">SIKAD Sekolah</h1>
            <p className="text-xs text-slate-400">Portal Pengajar</p>
          </div>
          <nav className="space-y-2 text-sm">
            <a href="/teacher/dashboard" className="block py-2.5 px-4 rounded hover:bg-slate-800 text-slate-300">Dashboard</a>
            <a href="/teacher/schedule" className="block py-2.5 px-4 rounded hover:bg-slate-800 text-slate-300">Jadwal Mengajar</a>
            <a href="/teacher/attendance" className="block py-2.5 px-4 rounded hover:bg-slate-800 text-slate-300">Absensi Kelas</a>
            <a href="/teacher/grading" className="block py-2.5 px-4 rounded bg-slate-800 text-white font-medium">Penilaian</a>
          </nav>
        </div>
        <div className="text-sm border-t border-slate-800 pt-4">
          <p className="font-semibold">Drs. Budi Santoso</p>
          <p className="text-xs text-slate-400">Pengampu: Matematika</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Penilaian Siswa</h2>
            <p className="text-sm text-slate-500">Input dan kelola nilai tugas, UTS, serta UAS mata pelajaran Matematika</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-slate-600">Pilih Kelas:</span>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="border border-slate-300 rounded-lg px-3 py-1.5 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {classList.map((cls) => (
                <option key={cls} value={cls}>{cls}</option>
              ))}
            </select>
          </div>
        </div>

        {message && (
          <div className={`mb-4 p-3 rounded-lg text-sm font-medium ${message.includes('berhasil') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

        {/* Table Penilaian */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-slate-500">Memuat data nilai dari database...</div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  <th className="py-4 px-6">No</th>
                  <th className="py-4 px-6">NISN</th>
                  <th className="py-4 px-6">Nama Siswa</th>
                  <th className="py-4 px-6">Tugas</th>
                  <th className="py-4 px-6">UTS</th>
                  <th className="py-4 px-6">UAS</th>
                  <th className="py-4 px-6 text-center">Nilai Akhir</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {students.map((student, index) => {
                  const finalScore = calculateFinalScore(student.tugas, student.uts, student.uas);
                  return (
                    <tr key={student.nisn} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 text-slate-500">{index + 1}</td>
                      <td className="py-4 px-6 font-medium text-slate-700">{student.nisn}</td>
                      <td className="py-4 px-6 font-medium text-slate-900">{student.nama_siswa}</td>
                      <td className="py-4 px-6">
                        <input
                          type="number"
                          value={student.tugas}
                          onChange={(e) => handleInputChange(index, 'tugas', e.target.value)}
                          className="w-20 border border-slate-300 rounded px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </td>
                      <td className="py-4 px-6">
                        <input
                          type="number"
                          value={student.uts}
                          onChange={(e) => handleInputChange(index, 'uts', e.target.value)}
                          className="w-20 border border-slate-300 rounded px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </td>
                      <td className="py-4 px-6">
                        <input
                          type="number"
                          value={student.uas}
                          onChange={(e) => handleInputChange(index, 'uas', e.target.value)}
                          className="w-20 border border-slate-300 rounded px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </td>
                      <td className="py-4 px-6 text-center font-bold text-blue-600">
                        {finalScore}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}

          <div className="p-6 bg-slate-50 border-t border-slate-200 flex justify-end">
            <button
              onClick={handleSaveGrades}
              disabled={saving}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-lg shadow transition-all disabled:opacity-50"
            >
              {saving ? 'Menyimpan...' : 'Simpan Nilai'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}