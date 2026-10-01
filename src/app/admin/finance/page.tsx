"use client";

import React, { useState } from "react";

interface Invoice {
  noInvoice: string;
  studentName: string;
  period: string;
  amount: string;
  status: "Lunas" | "Belum Bayar" | "Menunggu Verifikasi";
}

export default function AdminFinancePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [invoices] = useState<Invoice[]>([
    {
      noInvoice: "INV/2026/001",
      studentName: "Ahmad Rizky",
      period: "Oktober 2026",
      amount: "Rp 350.000",
      status: "Lunas",
    },
    {
      noInvoice: "INV/2026/002",
      studentName: "Siti Nurhaliza",
      period: "Oktober 2026",
      amount: "Rp 350.000",
      status: "Menunggu Verifikasi",
    },
    {
      noInvoice: "INV/2026/003",
      studentName: "Budi Pratama",
      period: "Oktober 2026",
      amount: "Rp 350.000",
      status: "Belum Bayar",
    },
  ]);

  const filteredInvoices = invoices.filter(
    (inv) =>
      inv.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.noInvoice.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inv.period.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Keuangan & Tagihan SPP
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Monitoring status pembayaran SPP seluruh siswa.
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-medium transition-colors shadow-sm">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span>Buat Tagihan Baru</span>
        </button>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
        {/* Search Bar */}
        <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              placeholder="Cari berdasarkan Nama, No Invoice..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all"
            />
          </div>
          <span className="text-xs text-slate-500 self-end sm:self-center font-medium">
            Total: <strong className="text-slate-900">{filteredInvoices.length}</strong> Tagihan
          </span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 font-medium uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-5 py-3">NO INVOICE</th>
                <th className="px-5 py-3">NAMA SISWA</th>
                <th className="px-5 py-3">PERIODE</th>
                <th className="px-5 py-3">NOMINAL</th>
                <th className="px-5 py-3">STATUS</th>
                <th className="px-5 py-3 text-right">AKSI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {filteredInvoices.length > 0 ? (
                filteredInvoices.map((item) => (
                  <tr key={item.noInvoice} className="hover:bg-slate-50/60 transition-colors">
                    <td className="px-5 py-3.5 font-mono text-slate-600 font-medium">{item.noInvoice}</td>
                    <td className="px-5 py-3.5 font-semibold text-slate-900">{item.studentName}</td>
                    <td className="px-5 py-3.5 text-slate-600">{item.period}</td>
                    <td className="px-5 py-3.5 font-semibold text-slate-900">{item.amount}</td>
                    <td className="px-5 py-3.5">
                      {item.status === "Lunas" && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Lunas
                        </span>
                      )}
                      {item.status === "Menunggu Verifikasi" && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
                          Menunggu Verifikasi
                        </span>
                      )}
                      {item.status === "Belum Bayar" && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-rose-50 text-rose-700 border border-rose-200">
                          Belum Bayar
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <button className="text-slate-700 hover:text-slate-900 font-medium hover:underline text-xs">
                        Detail
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-5 py-8 text-center text-slate-400">
                    Data tagihan tidak ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}