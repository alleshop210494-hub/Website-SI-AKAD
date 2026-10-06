import { NextResponse } from 'next/server';
import { FinanceService } from '@/backend/services/finance.service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { kode_tagihan, nama_siswa, kelas, jenis_tagihan, nominal, status } = body;

    if (!kode_tagihan || !nama_siswa || !kelas || !jenis_tagihan || !nominal) {
      return NextResponse.json(
        { error: 'Field wajib tidak boleh kosong' },
        { status: 400 }
      );
    }

    const newInvoice = await FinanceService.createInvoice({
      kode_tagihan,
      nama_siswa,
      kelas,
      jenis_tagihan,
      nominal: Number(nominal),
      status,
    });

    return NextResponse.json({ success: true, data: newInvoice }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating invoice:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}