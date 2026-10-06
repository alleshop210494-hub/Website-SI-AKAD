'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AttendanceContent({
  initialData,
  selectedClass,
  selectedDate,
  guruUsername,
}: {
  initialData: any[];
  selectedClass: string;
  selectedDate: string;
  guruUsername: string;
}) {
  const router = useRouter();
  const [classList] = useState(['X IPA 1', 'X IPA 2', 'XI IPS 1']);
  const [currentClass, setCurrentClass] = useState(selectedClass);
  const [attendanceState, setAttendanceState] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newClass = e.target.value;
    setCurrentClass(newClass);
    router.push(`/teacher/attendance?kelas=${encodeURIComponent(newClass)}&tanggal=${selectedDate}`);
  };

  const handleStatusChange = (nisn: string, status: string) => {
    setAttendanceState(prev =>
      prev.map(item => (item.nisn === nisn ? { ...item, status } : item))
    );
  };

  const handleSave = async () => {
    setLoading(true);
    setMessage('');
    setErrorMsg('');

    try {
      // Format kelas menjadi seragam (misal: ganti 'X-IPA-1' jadi 'X IPA 1')
      const formattedClass = currentClass.replace(/-/g, ' ');

      const response = await fetch('/api/attendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          records: attendanceState.map(s => ({
            nisn: s.nisn,
            kelas: formattedClass,
            status: s.status,
          })),
          tanggal: selectedDate,
          guru_username: guruUsername,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage('Presensi berhasil disimpan ke Neon Database!');
        setTimeout(() => setMessage(''), 4000);
        router.refresh();
      } else {
        setErrorMsg('Gagal menyimpan: ' + (result.error || 'Terjadi kesalahan pada server'));
      }
    } catch (err: any) {
      console.error('Network Error:', err);
      setErrorMsg('Terjadi kesalahan jaringan: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
        <div className="text-sm font-medium text-slate-700">
          Daftar Siswa (<span className="text-indigo-600 font-semibold">{currentClass}</span>)
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-500">Tanggal: {selectedDate}</span>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-slate-600">Pilih Kelas:</label>
            <select
              value={currentClass}
              onChange={handleClassChange}
              className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium bg-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              {classList.map(cls => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {message && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-md text-sm font-medium">
          {message}
        </div>
      )}

      {errorMsg && (
        <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-md text-sm font-medium">
          {errorMsg}
        </div>
      )}

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">No</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">NISN</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Nama Siswa</th>
              <th className="px-6 py-3 text-center text-xs font-semibold text-slate-600 uppercase tracking-wider">Status Kehadiran</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {attendanceState.length > 0 ? (
              attendanceState.map((student, index) => (
                <tr key={student.nisn} className="hover:bg-slate-50 transition-colors">
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">{index + 1}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">{student.nisn}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">{student.nama_siswa}</td>
                  <td className="whitespace-nowrap px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {['Hadir', 'Izin', 'Sakit', 'Alpa'].map(statusOption => {
                        const isActive = student.status === statusOption;
                        let activeClass = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
                        if (isActive) {
                          if (statusOption === 'Hadir') activeClass = 'bg-emerald-600 text-white shadow-sm';
                          else if (statusOption === 'Izin') activeClass = 'bg-amber-500 text-white shadow-sm';
                          else if (statusOption === 'Sakit') activeClass = 'bg-blue-600 text-white shadow-sm';
                          else if (statusOption === 'Alpa') activeClass = 'bg-rose-600 text-white shadow-sm';
                        }
                        return (
                          <button
                            key={statusOption}
                            type="button"
                            onClick={() => handleStatusChange(student.nisn, statusOption)}
                            className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${activeClass}`}
                          >
                            {statusOption}
                          </button>
                        );
                      })}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-10 text-center text-sm text-slate-500">
                  Tidak ada data siswa ditemukan untuk kelas ini di database.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-2">
        <button
          onClick={handleSave}
          disabled={loading}
          className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
        >
          {loading ? 'Menyimpan...' : 'Simpan Presensi'}
        </button>
      </div>
    </div>
  );
}