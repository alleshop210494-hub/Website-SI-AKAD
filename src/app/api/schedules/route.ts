import { NextResponse } from 'next/server';
import { AcademicService } from '@/backend/services/academic.service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { hari, jam, mata_pelajaran, kelas, nama_guru } = body;

    if (!hari || !jam || !mata_pelajaran || !kelas || !nama_guru) {
      return NextResponse.json({ error: 'Field wajib tidak boleh kosong' }, { status: 400 });
    }

    const newSchedule = await AcademicService.createSchedule({
      hari,
      jam,
      mata_pelajaran,
      kelas,
      nama_guru,
    });

    return NextResponse.json({ success: true, data: newSchedule }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating schedule:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}