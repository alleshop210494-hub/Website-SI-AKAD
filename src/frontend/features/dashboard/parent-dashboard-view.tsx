'use client';

export function ParentDashboardView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Portal Orang Tua / Wali</h1>
        <p className="text-sm text-slate-400">Memantau Perkembangan Akademik: Ahmad Rizky Pratama (X IPA 1)</p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">
        <h3 className="mb-2 text-lg font-bold text-white">Ringkasan Tagihan & Keuangan SPP</h3>
        <p className="text-xs text-slate-400 mb-4">
          Pantau dan lakukan konfirmasi pembayaran tagihan bulanan sekolah dengan mudah.
        </p>

        <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4">
          <div>
            <span className="text-xs text-slate-400">Tagihan SPP Februari 2026</span>
            <p className="text-lg font-bold text-white">Rp 500.000</p>
            <p className="text-[11px] text-amber-400">Jatuh Tempo: 10 Februari 2026</p>
          </div>
          <button className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-500">
            Konfirmasi Pembayaran
          </button>
        </div>
      </div>
    </div>
  );
}