'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

interface AddInvoiceModalProps {
  onClose: () => void;
}

export default function AddInvoiceModal({ onClose }: AddInvoiceModalProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      kode_tagihan: formData.get('kode_tagihan') as string,
      nama_siswa: formData.get('nama_siswa') as string,
      kelas: formData.get('kelas') as string,
      jenis_tagihan: formData.get('jenis_tagihan') as string,
      nominal: formData.get('nominal') as string,
      status: formData.get('status') as string,
    };

    try {
      const response = await fetch('/api/finance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Gagal menyimpan data tagihan ke database.');
      }

      startTransition(() => {
        router.refresh();
        onClose();
      });
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan saat menyimpan data.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <h2 className="text-lg font-bold text-slate-900">Buat Tagihan Baru</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 font-bold text-xl"
          >
            &times;
          </button>
        </div>

        {error && (
          <div className="mt-4 rounded-md bg-rose-50 p-3 text-sm text-rose-700 border border-rose-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Kode Tagihan</label>
              <input
                type="text"
                name="kode_tagihan"
                required
                placeholder="Contoh: INV-2026-003"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Nama Siswa</label>
              <input
                type="text"
                name="nama_siswa"
                required
                placeholder="Nama lengkap siswa"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Kelas</label>
              <input
                type="text"
                name="kelas"
                required
                placeholder="Contoh: X IPA 1"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Jenis Tagihan</label>
              <input
                type="text"
                name="jenis_tagihan"
                required
                placeholder="Contoh: SPP Bulan Oktober"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Nominal (Rp)</label>
              <input
                type="number"
                name="nominal"
                required
                placeholder="500000"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Status Pembayaran</label>
              <select
                name="status"
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-900 bg-white"
              >
                <option value="Belum Bayar">Belum Bayar</option>
                <option value="Lunas">Lunas</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors disabled:opacity-50"
            >
              {isPending ? 'Menyimpan...' : 'Simpan Tagihan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}