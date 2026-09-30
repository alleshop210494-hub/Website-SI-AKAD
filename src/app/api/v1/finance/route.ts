import { NextRequest, NextResponse } from 'next/server';
import { financeController } from '@/backend/controllers/finance.controller';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get('studentId');
    const status = searchParams.get('status');

    const invoices = await financeController.getInvoices({ studentId, status });
    return NextResponse.json({ success: true, data: invoices }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Gagal memuat tagihan SPP' },
      { status: 400 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await financeController.processPayment(body);
    return NextResponse.json({ success: true, data: result }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Gagal memproses konfirmasi pembayaran' },
      { status: 400 }
    );
  }
}