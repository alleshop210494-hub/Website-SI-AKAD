'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

export default function AddClassModal({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      nama_kelas: formData.get('nama_kelas') as string,
      tingkat: formData.get('tingkat') as string,
      tahun_ajaran: formData.get('tahun_ajaran') as string,
      wali_kelas: formData.get('wali_kelas') as string,
      jumlah_siswa: formData.get('jumlah_siswa') ? Number(formData.get('jumlah_siswa')) : 0,
      kapasitas: formData.get('kapasitas') ? Number(formData.get('kapasitas')) : 36,
    };

    try {
      const res = await fetch('/api/classes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Gagal menyimpan kelas');
      startTransition(() => {
        router.refresh();
        onClose();
      });
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900">Tambah Kelas Baru</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 font-bold text-xl">&times;</button>
        </div>
        {error && <div className="mt-4 rounded-md bg-rose-50 p-3 text-sm text-rose-700 border border-rose-200">{error}</div>}
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Nama Kelas</label>
              <input type="text" name="nama_kelas" required placeholder="Contoh: X IPA 1" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:ring-1 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Tingkat</label>
              <input type="text" name="tingkat" required placeholder="Contoh: X" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:ring-1 focus:ring-indigo-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Tahun Ajaran</label>
              <input type="text" name="tahun_ajaran" required placeholder="Contoh: 2025/2026" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:ring-1 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Wali Kelas</label>
              <input type="text" name="wali_kelas" required placeholder="Nama Wali Kelas" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:ring-1 focus:ring-indigo-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Jumlah Siswa Awal</label>
              <input type="number" name="jumlah_siswa" defaultValue={0} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:ring-1 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Kapasitas Maksimal</label>
              <input type="number" name="kapasitas" defaultValue={36} className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:ring-1 focus:ring-indigo-500" />
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 mt-2">
            <button type="button" onClick={onClose} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Batal</button>
            <button type="submit" disabled={isPending} className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50">
              {isPending ? 'Menyimpan...' : 'Simpan Kelas'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}