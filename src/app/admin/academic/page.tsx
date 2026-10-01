'use client';

import React, { useState } from 'react';
import { ClassRoom, Schedule, CreateClassInput, CreateScheduleInput } from '@/shared/types/academic.type';

// Initial Mock Data
const initialClasses: ClassRoom[] = [
  {
    id: 'c1',
    name: 'X IPA 1',
    gradeLevel: 'X',
    academicYear: '2025/2026',
    homeroomTeacherName: 'Budi Santoso, S.Pd',
    capacity: 36,
    totalStudents: 32,
  },
  {
    id: 'c2',
    name: 'XI IPA 2',
    gradeLevel: 'XI',
    academicYear: '2025/2026',
    homeroomTeacherName: 'Siti Aminah, M.Pd',
    capacity: 36,
    totalStudents: 35,
  },
];

const initialSchedules: Schedule[] = [
  {
    id: 's1',
    classId: 'c1',
    className: 'X IPA 1',
    subject: 'Matematika',
    teacherName: 'Budi Santoso, S.Pd',
    day: 'Senin',
    startTime: '07:30',
    endTime: '09:00',
    room: 'R.101',
  },
  {
    id: 's2',
    classId: 'c1',
    className: 'X IPA 1',
    subject: 'Fisika',
    teacherName: 'Dra. Endang',
    day: 'Senin',
    startTime: '09:15',
    endTime: '10:45',
    room: 'R.101',
  },
  {
    id: 's3',
    classId: 'c2',
    className: 'XI IPA 2',
    subject: 'Bahasa Indonesia',
    teacherName: 'Ahmad Dahlan, S.S',
    day: 'Selasa',
    startTime: '07:30',
    endTime: '09:00',
    room: 'R.202',
  },
];

export default function AcademicAdminPage() {
  const [activeTab, setActiveTab] = useState<'classes' | 'schedules'>('classes');
  const [classes, setClasses] = useState<ClassRoom[]>(initialClasses);
  const [schedules, setSchedules] = useState<Schedule[]>(initialSchedules);

  // Modal States
  const [isClassModalOpen, setIsClassModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  // Form States - Tambah Kelas
  const [classForm, setClassForm] = useState<CreateClassInput>({
    name: '',
    gradeLevel: 'X',
    academicYear: '2025/2026',
    homeroomTeacherName: '',
    capacity: 36,
  });

  // Form States - Tambah Jadwal
  const [scheduleForm, setScheduleForm] = useState<CreateScheduleInput>({
    classId: '',
    subject: '',
    teacherName: '',
    day: 'Senin',
    startTime: '07:30',
    endTime: '09:00',
    room: '',
  });

  // Handlers
  const handleAddClass = (e: React.FormEvent) => {
    e.preventDefault();
    if (!classForm.name || !classForm.gradeLevel || !classForm.academicYear) {
      alert('Mohon isi semua field wajib!');
      return;
    }

    const newClassItem: ClassRoom = {
      id: `c_${Date.now()}`,
      name: classForm.name,
      gradeLevel: classForm.gradeLevel,
      academicYear: classForm.academicYear,
      homeroomTeacherName: classForm.homeroomTeacherName || 'Belum Ditentukan',
      capacity: Number(classForm.capacity) || 36,
      totalStudents: 0,
    };

    setClasses((prev) => [...prev, newClassItem]);
    setClassForm({
      name: '',
      gradeLevel: 'X',
      academicYear: '2025/2026',
      homeroomTeacherName: '',
      capacity: 36,
    });
    setIsClassModalOpen(false);
  };

  const handleAddSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !scheduleForm.classId ||
      !scheduleForm.subject ||
      !scheduleForm.teacherName ||
      !scheduleForm.startTime ||
      !scheduleForm.endTime ||
      !scheduleForm.room
    ) {
      alert('Mohon lengkapi seluruh formulir jadwal!');
      return;
    }

    const selectedClass = classes.find((c) => c.id === scheduleForm.classId);

    const newScheduleItem: Schedule = {
      id: `s_${Date.now()}`,
      classId: scheduleForm.classId,
      className: selectedClass ? selectedClass.name : 'Unknown',
      subject: scheduleForm.subject,
      teacherName: scheduleForm.teacherName,
      day: scheduleForm.day,
      startTime: scheduleForm.startTime,
      endTime: scheduleForm.endTime,
      room: scheduleForm.room,
    };

    setSchedules((prev) => [...prev, newScheduleItem]);
    setScheduleForm({
      classId: '',
      subject: '',
      teacherName: '',
      day: 'Senin',
      startTime: '07:30',
      endTime: '09:00',
      room: '',
    });
    setIsScheduleModalOpen(false);
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Akademik</h1>
          <p className="text-sm text-gray-500">
            Kelola data kelas, wali kelas, dan jadwal pelajaran sekolah
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsClassModalOpen(true)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <span>+</span> Tambah Kelas
          </button>
          <button
            onClick={() => {
              if (classes.length === 0) {
                alert('Buat kelas terlebih dahulu sebelum membuat jadwal.');
                return;
              }
              setScheduleForm((prev) => ({ ...prev, classId: classes[0].id }));
              setIsScheduleModalOpen(true);
            }}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-colors"
          >
            <span>+</span> Tambah Jadwal
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('classes')}
          className={`py-3 px-6 text-sm font-semibold border-b-2 transition-colors ${
            activeTab === 'classes'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Daftar Kelas ({classes.length})
        </button>
        <button
          onClick={() => setActiveTab('schedules')}
          className={`py-3 px-6 text-sm font-semibold border-b-2 transition-colors ${
            activeTab === 'schedules'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Jadwal Pelajaran ({schedules.length})
        </button>
      </div>

      {/* Tab Content: Classes */}
      {activeTab === 'classes' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-600 border-b border-gray-200">
                  <th className="py-3 px-4 font-semibold">Nama Kelas</th>
                  <th className="py-3 px-4 font-semibold">Tingkat</th>
                  <th className="py-3 px-4 font-semibold">Tahun Ajaran</th>
                  <th className="py-3 px-4 font-semibold">Wali Kelas</th>
                  <th className="py-3 px-4 font-semibold">Siswa / Kapasitas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {classes.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-8 text-gray-400">
                      Belum ada data kelas. Silakan klik "Tambah Kelas".
                    </td>
                  </tr>
                ) : (
                  classes.map((cls) => (
                    <tr key={cls.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 font-medium text-gray-900">{cls.name}</td>
                      <td className="py-3 px-4 text-gray-600">{cls.gradeLevel}</td>
                      <td className="py-3 px-4 text-gray-600">{cls.academicYear}</td>
                      <td className="py-3 px-4 text-gray-600">{cls.homeroomTeacherName}</td>
                      <td className="py-3 px-4 text-gray-600">
                        <span className="font-medium text-blue-600">{cls.totalStudents}</span> /{' '}
                        {cls.capacity} Siswa
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab Content: Schedules */}
      {activeTab === 'schedules' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-600 border-b border-gray-200">
                  <th className="py-3 px-4 font-semibold">Hari</th>
                  <th className="py-3 px-4 font-semibold">Jam</th>
                  <th className="py-3 px-4 font-semibold">Kelas</th>
                  <th className="py-3 px-4 font-semibold">Mata Pelajaran</th>
                  <th className="py-3 px-4 font-semibold">Guru Pengampu</th>
                  <th className="py-3 px-4 font-semibold">Ruangan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {schedules.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-gray-400">
                      Belum ada jadwal pelajaran. Silakan klik "Tambah Jadwal".
                    </td>
                  </tr>
                ) : (
                  schedules.map((sch) => (
                    <tr key={sch.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 font-medium text-gray-800">{sch.day}</td>
                      <td className="py-3 px-4 text-gray-600">
                        {sch.startTime} - {sch.endTime}
                      </td>
                      <td className="py-3 px-4 font-medium text-blue-600">{sch.className}</td>
                      <td className="py-3 px-4 font-medium text-gray-900">{sch.subject}</td>
                      <td className="py-3 px-4 text-gray-600">{sch.teacherName}</td>
                      <td className="py-3 px-4 text-gray-600">
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {sch.room}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODAL: Tambah Kelas */}
      {isClassModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h3 className="text-lg font-bold text-gray-800">Tambah Kelas Baru</h3>
              <button
                onClick={() => setIsClassModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 font-bold"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleAddClass} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Nama Kelas *
                </label>
                <input
                  type="text"
                  placeholder="Contoh: X IPA 1"
                  value={classForm.name}
                  onChange={(e) => setClassForm({ ...classForm, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Tingkat Kelas *
                  </label>
                  <select
                    value={classForm.gradeLevel}
                    onChange={(e) => setClassForm({ ...classForm, gradeLevel: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="X">Kelas X</option>
                    <option value="XI">Kelas XI</option>
                    <option value="XII">Kelas XII</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Tahun Ajaran *
                  </label>
                  <input
                    type="text"
                    value={classForm.academicYear}
                    onChange={(e) => setClassForm({ ...classForm, academicYear: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Nama Wali Kelas
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Budi Santoso, S.Pd"
                  value={classForm.homeroomTeacherName}
                  onChange={(e) =>
                    setClassForm({ ...classForm, homeroomTeacherName: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Kapasitas Siswa
                </label>
                <input
                  type="number"
                  value={classForm.capacity}
                  onChange={(e) =>
                    setClassForm({ ...classForm, capacity: Number(e.target.value) })
                  }
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  min={1}
                />
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setIsClassModalOpen(false)}
                  className="px-4 py-2 border text-gray-600 rounded-lg text-sm hover:bg-gray-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium"
                >
                  Simpan Kelas
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: Tambah Jadwal */}
      {isScheduleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <h3 className="text-lg font-bold text-gray-800">Tambah Jadwal Pelajaran</h3>
              <button
                onClick={() => setIsScheduleModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 font-bold"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleAddSchedule} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Pilih Kelas *</label>
                <select
                  value={scheduleForm.classId}
                  onChange={(e) => setScheduleForm({ ...scheduleForm, classId: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                >
                  {classes.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.academicYear})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Mata Pelajaran *
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Matematika"
                  value={scheduleForm.subject}
                  onChange={(e) => setScheduleForm({ ...scheduleForm, subject: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Guru Pengampu *
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Dr. Herman, M.Sc"
                  value={scheduleForm.teacherName}
                  onChange={(e) =>
                    setScheduleForm({ ...scheduleForm, teacherName: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Hari *</label>
                  <select
                    value={scheduleForm.day}
                    onChange={(e) =>
                      setScheduleForm({
                        ...scheduleForm,
                        day: e.target.value as CreateScheduleInput['day'],
                      })
                    }
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  >
                    <option value="Senin">Senin</option>
                    <option value="Selasa">Selasa</option>
                    <option value="Rabu">Rabu</option>
                    <option value="Kamis">Kamis</option>
                    <option value="Jumat">Jumat</option>
                    <option value="Sabtu">Sabtu</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Ruangan *</label>
                  <input
                    type="text"
                    placeholder="R.101"
                    value={scheduleForm.room}
                    onChange={(e) => setScheduleForm({ ...scheduleForm, room: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Jam Mulai *
                  </label>
                  <input
                    type="time"
                    value={scheduleForm.startTime}
                    onChange={(e) =>
                      setScheduleForm({ ...scheduleForm, startTime: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Jam Selesai *
                  </label>
                  <input
                    type="time"
                    value={scheduleForm.endTime}
                    onChange={(e) => setScheduleForm({ ...scheduleForm, endTime: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setIsScheduleModalOpen(false)}
                  className="px-4 py-2 border text-gray-600 rounded-lg text-sm hover:bg-gray-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium"
                >
                  Simpan Jadwal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}