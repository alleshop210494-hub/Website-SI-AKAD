'use client';

import { useState } from 'react';

interface Guru {
  id: number;
  nip: string;
  nama: string;
  mapel: string;
  email: string;
  noHp: string;
  status: 'Aktif' | 'Nonaktif';
}

export default function TeacherPage() {
  const [guruList, setGuruList] = useState<Guru[]>([
    { id: 1, nip: '198501012010011001', nama: 'Drs. Bambang Wijaya', mapel: 'Matematika', email: 'bambang@sekolah.sch.id', noHp: '081234567111', status: 'Aktif' },
    { id: 2, nip: '198803152012012002', nama: 'Siti Aminah, S.Pd.', mapel: 'Bahasa Indonesia', email: 'siti.aminah@sekolah.sch.id', noHp: '081234567222', status: 'Aktif' },
  ]);

  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    nip: '',
    nama: '',
    mapel: '',
    email: '',
    noHp: '',
  });

  const handleTambahGuru = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nip || !formData.nama) return;

    const newGuru: Guru = {
      id: Date.now(),
      ...formData,
      status: 'Aktif',
    };

    setGuruList([...guruList, newGuru]);
    setIsModalOpen(false);
    setFormData({ nip: '', nama: '', mapel: '', email: '', noHp: '' });
  };

  const handleHapusGuru = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus data guru ini?')) {
      setGuruList(guruList.filter((g) => g.id !== id));
    }
  };

  const filteredGuru = guruList.filter(
    (g) =>
      g.nama.toLowerCase().includes(search.toLowerCase()) ||
      g.nip.includes(search) ||
      g.mapel.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Data Master Guru</h1>
          <p className="text-slate-500 text-sm mt-1">
            Kelola data seluruh tenaga pengajar dan mata pelajaran yang diampu.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-slate-950 hover:bg-slate-800 text-white font-medium px-4 py-2.5 rounded-lg flex items-center gap-2 text-sm transition-colors"
        >
          <span className="text-lg leading-none">+</span> Tambah Guru Baru
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Cari berdasarkan Nama, NIP, atau Mapel..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>
          </div>
          <span className="text-sm font-medium text-slate-600">
            Total: <strong className="text-slate-900">{filteredGuru.length} Guru</strong>
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3.5 font-semibold">NIP</th>
                <th className="px-6 py-3.5 font-semibold">Nama Guru</th>
                <th className="px-6 py-3.5 font-semibold">Mata Pelajaran</th>
                <th className="px-6 py-3.5 font-semibold">Email & Kontak</th>
                <th className="px-6 py-3.5 font-semibold">Status</th>
                <th className="px-6 py-3.5 font-semibold text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredGuru.map((guru) => (
                <tr key={guru.id} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 text-slate-600 font-mono text-xs">{guru.nip}</td>
                  <td className="px-6 py-4 font-semibold text-slate-900">{guru.nama}</td>
                  <td className="px-6 py-4">
                    <span className="bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded text-xs font-medium">
                      {guru.mapel}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-slate-900 font-medium">{guru.email}</div>
                    <div className="text-xs text-slate-400">{guru.noHp}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-2.5 py-0.5 rounded-full text-xs font-medium">
                      {guru.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleHapusGuru(guru.id)}
                      className="text-rose-600 hover:text-rose-700 font-medium text-xs hover:underline"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-900 text-lg">Tambah Guru Baru</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-xl font-bold"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleTambahGuru} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">NIP</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: 198501012010011001"
                  value={formData.nip}
                  onChange={(e) => setFormData({ ...formData, nip: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Lengkap & Gelar</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Drs. Ahmad, M.Pd."
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Mata Pelajaran</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Fisika / Bahasa Inggris"
                  value={formData.mapel}
                  onChange={(e) => setFormData({ ...formData, mapel: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="guru@sekolah.sch.id"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">No. HP / WhatsApp</label>
                <input
                  type="text"
                  placeholder="081234567890"
                  value={formData.noHp}
                  onChange={(e) => setFormData({ ...formData, noHp: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm text-slate-600 hover:bg-slate-100 rounded-lg font-medium"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium"
                >
                  Simpan Guru
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}