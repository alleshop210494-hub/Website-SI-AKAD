'use client';

import { useState } from 'react';

interface Teacher {
  id: string;
  nip: string;
  name: string;
  subject: string;
  email: string;
  phone: string;
  status: 'Aktif' | 'Cuti';
}

export default function MasterTeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([
    {
      id: '1',
      nip: '198501152010011001',
      name: 'Siti Aminah, M.Pd.',
      subject: 'Matematika',
      email: 'siti.aminah@sekolah.sch.id',
      phone: '081122334455',
      status: 'Aktif',
    },
    {
      id: '2',
      nip: '198703202012022002',
      name: 'Drs. Agus Wijaya',
      subject: 'Fisika',
      email: 'agus.wijaya@sekolah.sch.id',
      phone: '081122334456',
      status: 'Aktif',
    },
    {
      id: '3',
      nip: '199008122015031003',
      name: 'Rina Kartika, S.Pd.',
      subject: 'Bahasa Inggris',
      email: 'rina.kartika@sekolah.sch.id',
      phone: '081122334457',
      status: 'Aktif',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // State Form Tambah Guru
  const [formData, setFormData] = useState({
    nip: '',
    name: '',
    subject: 'Matematika',
    email: '',
    phone: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddTeacher = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nip || !formData.name) return;

    const newTeacher: Teacher = {
      id: Date.now().toString(),
      nip: formData.nip,
      name: formData.name,
      subject: formData.subject,
      email: formData.email || `${formData.name.toLowerCase().replace(/\s+/g, '.')}@sekolah.sch.id`,
      phone: formData.phone || '-',
      status: 'Aktif',
    };

    setTeachers([newTeacher, ...teachers]);
    setFormData({
      nip: '',
      name: '',
      subject: 'Matematika',
      email: '',
      phone: '',
    });
    setIsModalOpen(false);
  };

  const handleDeleteTeacher = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus data guru ini?')) {
      setTeachers(teachers.filter((teacher) => teacher.id !== id));
    }
  };

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.nip.includes(searchTerm) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-white">Data Guru & Staff Pengajar</h1>
          <p className="text-xs text-slate-400">
            Kelola data tenaga pendidik, NIP, serta mata pelajaran yang diampu.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-500"
        >
          <span>👩‍🏫</span>
          <span>Tambah Guru Baru</span>
        </button>
      </div>

      {/* Action & Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
        <div className="w-full sm:w-72">
          <input
            type="text"
            placeholder="Cari berdasarkan Nama, NIP, atau Mapel..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div className="text-xs text-slate-400">
          Total: <span className="font-bold text-white">{filteredTeachers.length}</span> Pengajar
        </div>
      </div>

      {/* Tabel Guru */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="border-b border-slate-800 bg-slate-900/80 text-slate-400">
            <tr>
              <th className="px-5 py-3.5 font-semibold">NIP</th>
              <th className="px-5 py-3.5 font-semibold">Nama Guru</th>
              <th className="px-5 py-3.5 font-semibold">Mata Pelajaran</th>
              <th className="px-5 py-3.5 font-semibold">Email & Kontak</th>
              <th className="px-5 py-3.5 font-semibold">Status</th>
              <th className="px-5 py-3.5 font-semibold text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filteredTeachers.length > 0 ? (
              filteredTeachers.map((teacher) => (
                <tr key={teacher.id} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-5 py-4 font-mono text-slate-200">{teacher.nip}</td>
                  <td className="px-5 py-4 font-semibold text-white">{teacher.name}</td>
                  <td className="px-5 py-4">
                    <span className="rounded-lg bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                      {teacher.subject}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-slate-200">{teacher.email}</p>
                    <p className="text-[10px] text-slate-500">{teacher.phone}</p>
                  </td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                      {teacher.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-center">
                    <button
                      type="button"
                      onClick={() => handleDeleteTeacher(teacher.id)}
                      className="rounded-lg border border-rose-800/40 bg-rose-950/30 px-2.5 py-1 text-[11px] font-semibold text-rose-300 hover:bg-rose-900/60 transition-colors"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-5 py-8 text-center text-slate-500">
                  Tidak ada data guru ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Dialog Tambah Guru */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-base font-bold text-white">Tambah Guru / Staff Baru</h2>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddTeacher} className="space-y-4 text-xs">
              <div>
                <label className="mb-1 block font-semibold text-slate-300">
                  NIP <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  name="nip"
                  required
                  value={formData.nip}
                  onChange={handleInputChange}
                  placeholder="Contoh: 199201152018011004"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2.5 text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block font-semibold text-slate-300">
                  Nama Lengkap beserta Gelar <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Contoh: Dr. Herman Wijaya, M.Si."
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3.5 py-2.5 text-white focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block font-semibold text-slate-300">Mata Pelajaran Utama</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-white focus:border-indigo-500 focus:outline-none"
                >
                  <option value="Matematika">Matematika</option>
                  <option value="Fisika">Fisika</option>
                  <option value="Kimia">Kimia</option>
                  <option value="Biologi">Biologi</option>
                  <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                  <option value="Bahasa Inggris">Bahasa Inggris</option>
                  <option value="Sejarah">Sejarah</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block font-semibold text-slate-300">Email Utama</label>
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
                  placeholder="Contoh: 081122334458"
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