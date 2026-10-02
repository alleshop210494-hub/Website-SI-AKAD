'use client';

import { useState } from 'react';

interface Tagihan {
  id: number;
  kodeTagihan: string;
  namaSiswa: string;
  kelas: string;
  jenisTagihan: string;
  nominal: number;
  status: 'Lunas' | 'Belum Bayar';
}

export default function FinancePage() {
  const [tagihanList, setTagihanList] = useState<Tagihan[]>([
    { id: 1, kodeTagihan: 'INV-2026-001', namaSiswa: 'Ahmad Rizky', kelas: 'X IPA 1', jenisTagihan: 'SPP Bulan Oktober', nominal: 500000, status: 'Lunas' },
    { id: 2, kodeTagihan: 'INV-2026-002', namaSiswa: 'Siti Nurhaliza', kelas: 'X IPA 1', jenisTagihan: 'SPP Bulan Oktober', nominal: 500000, status: 'Belum Bayar' },
  ]);

  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    namaSiswa: '',
    kelas: 'X IPA 1',
    jenisTagihan: 'SPP Bulan Oktober',
    nominal: 500000,
  });

  const handleBuatTagihan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.namaSiswa) return;

    const newTagihan: Tagihan = {
      id: Date.now(),
      kodeTagihan: `INV-2026-00${tagihanList.length + 1}`,
      ...formData,
      status: 'Belum Bayar',
    };

    setTagihanList([...tagihanList, newTagihan]);
    setIsModalOpen(false);
    setFormData({ namaSiswa: '', kelas: 'X IPA 1', jenisTagihan: 'SPP Bulan Oktober', nominal: 500000 });
  };

  const filteredTagihan = tagihanList.filter(
    (t) =>
      t.namaSiswa.toLowerCase().includes(search.toLowerCase()) ||
      t.kodeTagihan.toLowerCase().includes(search.toLowerCase()) ||
      t.jenisTagihan.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Manajemen Keuangan & SPP</h1>
          <p className="text-slate-500 text-sm mt-1">
            Kelola tagihan pembayaran, SPP bulanan, dan status transaksi siswa.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-slate-950 hover:bg-slate-800 text-white font-medium px-4 py-2.5 rounded-lg flex items-center gap-2 text-sm transition-colors"
        >
          <span className="text-lg leading-none">+</span> Buat Tagihan Baru
        </button>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Cari Siswa, Kode Invoice, atau Jenis Tagihan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>
          </div>
          <span className="text-sm font-medium text-slate-600">
            Total: <strong className="text-slate-900">{filteredTagihan.length} Invoice</strong>
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3.5 font-semibold">Kode Tagihan</th>
                <th className="px-6 py-3.5 font-semibold">Nama Siswa</th>
                <th className="px-6 py-3.5 font-semibold">Kelas</th>
                <th className="px-6 py-3.5 font-semibold">Jenis Tagihan</th>
                <th className="px-6 py-3.5 font-semibold">Nominal</th>
                <th className="px-6 py-3.5 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredTagihan.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-mono text-xs text-slate-600">{item.kodeTagihan}</td>
                  <td className="px-6 py-4 font-semibold text-slate-900">{item.namaSiswa}</td>
                  <td className="px-6 py-4 text-slate-600">{item.kelas}</td>
                  <td className="px-6 py-4 text-slate-800">{item.jenisTagihan}</td>
                  <td className="px-6 py-4 font-semibold text-slate-900">
                    Rp {item.nominal.toLocaleString('id-ID')}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                        item.status === 'Lunas'
                          ? 'bg-emerald-50 text-emerald-600 border-emerald-200'
                          : 'bg-amber-50 text-amber-600 border-amber-200'
                      }`}
                    >
                      {item.status}
                    </span>
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
              <h3 className="font-bold text-slate-900 text-lg">Buat Tagihan Baru</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-xl font-bold"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleBuatTagihan} className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Siswa</label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama siswa"
                  value={formData.namaSiswa}
                  onChange={(e) => setFormData({ ...formData, namaSiswa: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

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
                <label className="block text-xs font-semibold text-slate-700 mb-1">Jenis Tagihan</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: SPP Bulan November"
                  value={formData.jenisTagihan}
                  onChange={(e) => setFormData({ ...formData, jenisTagihan: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nominal (Rp)</label>
                <input
                  type="number"
                  required
                  value={formData.nominal}
                  onChange={(e) => setFormData({ ...formData, nominal: Number(e.target.value) })}
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
                  Buat Tagihan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}