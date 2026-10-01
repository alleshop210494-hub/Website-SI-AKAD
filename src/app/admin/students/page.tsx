'use client';

import { useState } from 'react';

interface Student {
  id: string;
  nisn: string;
  name: string;
  class: string;
  gender: 'L' | 'P';
  email: string;
  phone: string;
  status: 'Aktif' | 'Non-Aktif';
}

export default function MasterStudentsPage() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: '1',
      nisn: '0012345678',
      name: 'Ahmad Rizky',
      class: 'X IPA 1',
      gender: 'L',
      email: 'ahmad.rizky@sekolah.sch.id',
      phone: '081234567890',
      status: 'Aktif',
    },
    {
      id: '2',
      nisn: '0012345679',
      name: 'Siti Nurhaliza',
      class: 'X IPA 1',
      gender: 'P',
      email: 'siti.nurhaliza@sekolah.sch.id',
      phone: '081234567891',
      status: 'Aktif',
    },
    {
      id: '3',
      nisn: '0012345680',
      name: 'Budi Pratama',
      class: 'XI IPS 2',
      gender: 'L',
      email: 'budi.pratama@sekolah.sch.id',
      phone: '081234567892',
      status: 'Aktif',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // State Form Tambah Siswa
  const [formData, setFormData] = useState({
    nisn: '',
    name: '',
    class: 'X IPA 1',
    gender: 'L' as 'L' | 'P',
    email: '',
    phone: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nisn || !formData.name) return;

    const newStudent: Student = {
      id: Date.now().toString(),
      nisn: formData.nisn,
      name: formData.name,
      class: formData.class,
      gender: formData.gender,
      email: formData.email || `${formData.name.toLowerCase().replace(/\s+/g, '.')}@sekolah.sch.id`,
      phone: formData.phone || '-',
      status: 'Aktif',
    };

    setStudents([newStudent, ...students]);
    setFormData({
      nisn: '',
      name: '',
      class: 'X IPA 1',
      gender: 'L',
      email: '',
      phone: '',
    });
    setIsModalOpen(false);
  };

  const handleDeleteStudent = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus data siswa ini?')) {
      setStudents(students.filter((student) => student.id !== id));
    }
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.nisn.includes(searchTerm) ||
      student.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-white">Data Master Siswa</h1>
          <p className="text-xs text-slate-400">
            Kelola data seluruh siswa terdaftar dan status keaktifan mereka.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-500"
        >
          <span>➕</span>
          <span>Tambah Siswa Baru</span>
        </button>
      </div>

      {/* Action & Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
        <div className="w-full sm:w-72">
          <input
            type="text"
            placeholder="Cari berdasarkan Nama, NISN, atau Kelas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div className="text-xs text-slate-400">
          Total: <span className="font-bold text-white">{filteredStudents.length}</span> Siswa
        </div>
      </div>

      {/* Tabel Siswa */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="border-b border-slate-800 bg-slate-900/80 text-slate-400">
            <tr>
              <th className="px-5 py-3.5 font-semibold">NISN</th>
              <th className="px-5 py-3.5 font-semibold">Nama Siswa</th>
              <th className="px-5 py-3.5 font-semibold">Kelas</th>
              <th className="px-5 py-3.5 font-semibold">L/P</th>
              <th className="px-5 py-3.5 font-semibold">Email & Kontak</th>
              <th className="px-5 py-3.5 font-semibold">Status</th>
              <th className="px-5 py-3.5 font-semibold text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-5 py-4 font-mono text-slate-200">{student.nisn}</td>
                  <td className="px-5 py-4 font-semibold text-white">{student.name}</td>
                  <td className="px-5 py-4">
                    <span className="rounded-lg bg-indigo-950/60 border border-indigo-800/50 px-2.5 py-1 text-[11px] font-semibold text-indigo-300">
                      {student.class}
                    </span>
                  </td>
                  <td className="px-5 py-4 font-semibold">
                    {student.gender === 'L' ? (
                      <span className="text-blue-400">L</span>
                    ) : (
                      <span className="text-pink-400">P</span>
                    )}
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-slate-200">{student.email}</p>
                    <p className="text-[10px] text-slate-500">{student.phone}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                      {student.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-center">
                    <button
                      type="button"
                      onClick={() => handleDeleteStudent(student.id)}
                      className="rounded-lg border border-rose-800/40 bg-rose-950/30 px-2.5 py-1 text-[11px] font-semibold text-rose-300 hover:bg-rose-900/60 transition-colors"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-5 py-8 text-center text-slate-500">
                  Tidak ada data siswa ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Dialog Tambah Siswa */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-base font-bold text-white">Tambah Siswa Baru</h2>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddStudent} className="space-y-4 text-xs">
              <div>
                <label className="mb-1 block font-semibold text-slate-300">
                  NISN <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  name="nisn"
                  required
                  value={formData.nisn}
                  onChange={handleInputChange}
                  placeholder="Contoh: 0012345681"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2.5 text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block font-semibold text-slate-300">
                  Nama Lengkap <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Masukkan nama lengkap siswa"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2.5 text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block font-semibold text-slate-300">Kelas</label>
                  <select
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-white focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="X IPA 1">X IPA 1</option>
                    <option value="X IPA 2">X IPA 2</option>
                    <option value="XI IPA 1">XI IPA 1</option>
                    <option value="XI IPS 1">XI IPS 1</option>
                    <option value="XII IPA 1">XII IPA 1</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block font-semibold text-slate-300">Jenis Kelamin</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-white focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="L">Laki-laki (L)</option>
                    <option value="P">Perempuan (P)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block font-semibold text-slate-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Opsional (otomatis tergenerate jika kosong)"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2.5 text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block font-semibold text-slate-300">Nomor HP / WhatsApp</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Contoh: 081234567890"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2.5 text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-xl border border-slate-800 bg-slate-800/40 px-4 py-2 text-slate-300 hover:bg-slate-800"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-500"
                >
                  Simpan Data
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}