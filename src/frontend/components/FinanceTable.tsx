'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const AddInvoiceModal = dynamic(() => import('@/frontend/components/AddInvoiceModal'), {
  loading: () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div className="rounded-lg bg-white p-6 shadow-xl">Memuat form...</div>
    </div>
  ),
  ssr: false,
});

export default function FinanceTable({ initialData }: { initialData: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInvoices = initialData?.filter((item) =>
    item?.nama_siswa?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item?.kode_tagihan?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item?.jenis_tagihan?.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  // Fungsi helper untuk format mata uang Rupiah
  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="w-full sm:w-96">
          <input
            type="text"
            placeholder="Cari Siswa, Kode Invoice, atau Jenis Tagihan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-900"
          />
        </div>
        
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-sm font-medium text-slate-700">
            Total: <span className="font-bold text-slate-900">{filteredInvoices.length} Invoice</span>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors shadow-sm"
          >
            + Buat Tagihan Baru
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Kode Tagihan</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Nama Siswa</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Kelas</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Jenis Tagihan</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Nominal</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {filteredInvoices.length > 0 ? (
              filteredInvoices.map((item, index) => {
                const isPaid = item.status === 'Lunas';
                return (
                  <tr key={item.id || index} className="hover:bg-slate-50 transition-colors">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">{item.kode_tagihan || '-'}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-700">{item.nama_siswa || '-'}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <span className="inline-flex rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">{item.kelas || '-'}</span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-600">{item.jenis_tagihan || '-'}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-slate-900">
                      {formatRupiah(Number(item.nominal) || 0)}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        isPaid ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {item.status || 'Belum Bayar'}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-right">
                      <button className="text-rose-600 hover:text-rose-900 font-medium text-xs">Hapus</button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} className="px-6 py-8 text-center text-sm text-slate-500">
                  Belum ada data tagihan di database Neon. Silakan buat tagihan baru.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <AddInvoiceModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}