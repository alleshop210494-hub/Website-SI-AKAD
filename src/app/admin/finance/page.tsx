'use client';

import { useEffect, useState } from 'react';
import { ApiClient } from '@/frontend/lib/api-client';
import { SppInvoice } from '@/shared/types/finance.type';

export default function AdminFinancePage() {
  const [invoices, setInvoices] = useState<SppInvoice[]>([]);

  useEffect(() => {
    ApiClient.get<SppInvoice[]>('/finance/invoices')
      .then(setInvoices)
      .catch(console.error);
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Keuangan & Tagihan SPP</h1>
        <p className="text-sm text-slate-400">Monitoring status pembayaran SPP seluruh siswa.</p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-950 text-xs font-semibold uppercase text-slate-400">
            <tr>
              <th className="px-4 py-3">No Invoice</th>
              <th className="px-4 py-3">Nama Siswa</th>
              <th className="px-4 py-3">Periode</th>
              <th className="px-4 py-3">Nominal</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {invoices.map((inv) => (
              <tr key={inv.id}>
                <td className="px-4 py-3 font-mono text-xs text-indigo-400">{inv.invoiceNumber}</td>
                <td className="px-4 py-3 font-medium text-white">{inv.studentName}</td>
                <td className="px-4 py-3">Bulan {inv.month} / {inv.year}</td>
                <td className="px-4 py-3">Rp {inv.amount.toLocaleString('id-ID')}</td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    inv.status === 'PAID' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800' : 'bg-amber-950/80 text-amber-400 border border-amber-800'
                  }`}>
                    {inv.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}