'use client';

import { useState } from 'react';

interface Siswa {
  id: number;
  nisn: string;
  nama: string;
  kelas: string;
  gender: 'L' | 'P';
  email: string;
  noHp: string;
  status: 'Aktif' | 'Nonaktif';
}

export default function StudentPage() {
  const [siswaList, setSiswaList] = useState<Siswa[]>([
    { id: 1, nisn: '0012345678', nama: 'Ahmad Rizky', kelas: 'X IPA 1', gender: 'L', email: 'ahmad.rizky@sekolah.sch.id', noHp: '081234567890', status: 'Aktif' },
    { id: 2, nisn: '0012345679', nama: 'Siti Nurhaliza', kelas: 'X IPA 1', gender: 'P', email: 'siti.nurhaliza@sekolah.sch.id', noHp: '081234567891', status: 'Aktif' },
    { id: 3, nisn: '0012345680', nama: 'Budi Pratama', kelas: 'XI IPS 2', gender: 'L', email: 'budi.pratama@sekolah.sch.id', noHp: '081234567892', status: 'Aktif' },
  ]);

  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    nisn: '',
    nama: '',
    kelas: 'X IPA 1',
    gender: 'L' as 'L' | 'P',
    email: '',
    noHp: '',
  });

  const handleTambahSiswa = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nisn || !formData.nama) return;

    const newSiswa: Siswa = {
      id: Date.now(),
      ...formData,
      status: 'Aktif',
    };

    setSiswaList([...siswaList, newSiswa]);
    setIsModalOpen(false);
    setFormData({ nisn: '', nama: '', kelas: 'X IPA 1', gender: 'L', email: '', noHp: '' });
  };

  const handleHapusSiswa = (id: number) => {
    if (confirm('Apakah Anda yakin ingin menghapus siswa ini?')) {
      setSiswaList(siswaList.filter((s) => s.id !== id));
    }
  };

  const filteredSiswa = siswaList.filter(
    (s) =>
      s.nama.toLowerCase().includes(search.toLowerCase()) ||
      s.nisn.includes(search) ||
      s.kelas.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Data Master Siswa</h1>
          <p className="text-slate-500 text-sm mt-1">
            Kelola data seluruh siswa terdaftar dan status keaktifan mereka.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-slate-950 hover:bg-slate-800 text-white font-medium px-4 py-2.5 rounded-lg flex items-center gap-2 text-sm transition-colors"
        >
          <span className="text-lg leading-none">+</span> Tambah Siswa Baru
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Cari berdasarkan Nama, NISN, atau Kelas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>
          </div>
          <span className="text-sm font-medium text-slate-600">
            Total: <strong className="text-slate-900">{filteredSiswa.length} Siswa</strong>
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3.5 font-semibold">NISN</th>
                <th className="px-6 py-3.5 font-semibold">Nama Siswa</th>
                <th className="px-6 py-3.5 font-semibold">Kelas</th>
                <th className="px-6 py-3.5 font-semibold">L/P</th>
                <th className="px-6 py-3.5 font-semibold">Email & Kontak</th>
                <th className="px-6 py-3.5 font-semibold">Status</th>
                <th className="px-6 py-3.5 font-semibold text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredSiswa.map((siswa) => (
                <tr key={siswa.id} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 text-slate-600 font-mono text-xs">{siswa.nisn}</td>
                  <td className="px-6 py-4 font-semibold text-slate-900">{siswa.nama}</td>
                  <td className="px-6 py-4">
                    <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded text-xs font-medium">
                      {siswa.kelas}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{siswa.gender}</td>
                  <td className="px-6 py-4">
                    <div className="text-slate-900 font-medium">{siswa.email}</div>
                    <div className="text-xs text-slate-400">{siswa.noHp}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-2.5 py-0.5 rounded-full text-xs font-medium">
                      {siswa.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleHapusSiswa(siswa.id)}
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
              <h3 className="font-bold text-slate-900 text-lg">Tambah Siswa Baru</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-xl font-bold"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleTambahSiswa} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">NISN</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: 0012345681"
                  value={formData.nisn}
                  onChange={(e) => setFormData({ ...formData, nisn: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama siswa"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Kelas</label>
                  <select
                    value={formData.kelas}
                    onChange={(e) => setFormData({ ...formData, kelas: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="X IPA 1">X IPA 1</option>
                    <option value="X IPA 2">X IPA 2</option>
                    <option value="XI IPS 1">XI IPS 1</option>
                    <option value="XI IPS 2">XI IPS 2</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Jenis Kelamin</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value as 'L' | 'P' })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="L">Laki-laki (L)</option>
                    <option value="P">Perempuan (P)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  placeholder="siswa@sekolah.sch.id"
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
                  Simpan Siswa
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}