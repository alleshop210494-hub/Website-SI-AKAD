import { NextResponse } from 'next/server';
import { AcademicService } from '@/backend/services/academic.service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nama_kelas, tingkat, tahun_ajaran, wali_kelas, jumlah_siswa, kapasitas } = body;

    if (!nama_kelas || !tingkat || !tahun_ajaran || !wali_kelas) {
      return NextResponse.json({ error: 'Field wajib tidak boleh kosong' }, { status: 400 });
    }

    const newClass = await AcademicService.createClass({
      nama_kelas,
      tingkat,
      tahun_ajaran,
      wali_kelas,
      jumlah_siswa: jumlah_siswa ? Number(jumlah_siswa) : 0,
      kapasitas: kapasitas ? Number(kapasitas) : 36,
    });

    return NextResponse.json({ success: true, data: newClass }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating class:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}