import { NextResponse } from 'next/server';
import { TeacherScheduleService } from '@/backend/services/teacher-schedule.service';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const guru = url.searchParams.get('guru') || 'Drs. Budi Santoso';
    const schedules = await TeacherScheduleService.getSchedulesByTeacher(guru);
    return NextResponse.json({ success: true, data: schedules });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { guru_nama, hari, waktu, kelas, mata_pelajaran, ruangan } = body;

    if (!guru_nama || !hari || !waktu || !kelas || !mata_pelajaran || !ruangan) {
      return NextResponse.json({ error: 'Semua field wajib diisi' }, { status: 400 });
    }

    const newSchedule = await TeacherScheduleService.createTeacherSchedule({
      guru_nama,
      hari,
      waktu,
      kelas,
      mata_pelajaran,
      ruangan,
    });

    return NextResponse.json({ success: true, data: newSchedule }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}