import { Suspense } from 'react';
import { FinanceService } from '@/backend/services/finance.service';
import FinanceTable from '@/frontend/components/FinanceTable';

export const dynamic = 'force-dynamic';

export default async function AdminFinancePage() {
  const invoices = await FinanceService.getAllInvoices();

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Manajemen Keuangan & SPP</h1>
        <p className="text-sm text-slate-500">Kelola tagihan pembayaran, SPP bulanan, dan status transaksi siswa (Terhubung ke Neon Database).</p>
      </div>

      <Suspense fallback={
        <div className="flex h-40 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500">
          Memuat data keuangan dari database...
        </div>
      }>
        <FinanceTable initialData={invoices} />
      </Suspense>
    </div>
  );
}