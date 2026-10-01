"use client";

import React from "react";

interface StudentInvoice {
  noInvoice: string;
  period: string;
  amount: string;
  payDate: string;
  status: "Lunas" | "Belum Bayar" | "Menunggu Verifikasi";
}

export default function SiswaFinancePage() {
  const invoices: StudentInvoice[] = [
    { noInvoice: "INV/2026/001", period: "Oktober 2026", amount: "Rp 350.000", payDate: "2026-10-01", status: "Lunas" },
    { noInvoice: "INV/2026/000", period: "September 2026", amount: "Rp 350.000", payDate: "2026-09-02", status: "Lunas" },
    { noInvoice: "INV/2026/099", period: "Agustus 2026", amount: "Rp 350.000", payDate: "2026-08-04", status: "Lunas" },
  ];

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">
          Riwayat Tagihan SPP
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Rincian status pembayaran SPP bulanan.
        </p>
      </div>

      {/* Tabel Tagihan */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 font-medium uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-5 py-3">NO INVOICE</th>
                <th className="px-5 py-3">PERIODE</th>
                <th className="px-5 py-3">NOMINAL</th>
                <th className="px-5 py-3">TANGGAL BAYAR</th>
                <th className="px-5 py-3">STATUS</th>
                <th className="px-5 py-3 text-right">BUKTI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {invoices.map((item) => (
                <tr key={item.noInvoice} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-5 py-3.5 font-mono text-slate-600 font-medium">{item.noInvoice}</td>
                  <td className="px-5 py-3.5 font-semibold text-slate-900">{item.period}</td>
                  <td className="px-5 py-3.5 font-medium text-slate-800">{item.amount}</td>
                  <td className="px-5 py-3.5 font-mono text-slate-500">{item.payDate}</td>
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <button className="text-slate-700 hover:text-slate-900 font-medium hover:underline text-xs">
                      Cetak Kuitansi
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}