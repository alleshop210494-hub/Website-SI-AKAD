import { NextResponse } from 'next/server';
import { AttendanceService } from '@/backend/services/attendance.service';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const kelas = url.searchParams.get('kelas') || 'X IPA 1';
    const tanggal = url.searchParams.get('tanggal') || new Date().toISOString().split('T')[0];

    const students = await AttendanceService.getStudentsByClass(kelas);
    const attendance = await AttendanceService.getAttendanceByClassAndDate(kelas, tanggal);

    const combined = students.map(student => {
      const record = attendance.find(a => a.nisn === student.nisn);
      return {
        ...student,
        status: record ? record.status : 'Hadir'
      };
    });

    return NextResponse.json({ success: true, data: combined });
  } catch (error: any) {
    console.error('API GET /api/attendance Error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('--- API POST /api/attendance DIPANGGIL ---');
    console.log('Body diterima:', body);

    const { records, tanggal, guru_username } = body;

    if (!records || !Array.isArray(records)) {
      return NextResponse.json({ success: false, error: 'Format data records tidak valid' }, { status: 400 });
    }

    const currentDate = tanggal || new Date().toISOString().split('T')[0];
    const formattedRecords = records.map((r: any) => ({
      nisn: r.nisn,
      kelas: r.kelas || 'X IPA 1',
      tanggal: currentDate,
      status: r.status,
      guru_username: guru_username || 'budi_santoso'
    }));

    await AttendanceService.saveAttendance(formattedRecords);

    console.log('Data berhasil disimpan ke Neon Database!');
    return NextResponse.json({ success: true, message: 'Presensi berhasil disimpan ke Neon Database' });
  } catch (error: any) {
    console.error('API POST /api/attendance Error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}