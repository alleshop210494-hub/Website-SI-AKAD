import { NextResponse } from 'next/server';
import { StudentService } from '@/backend/services/student.service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nisn, nama_siswa, kelas, gender, email, kontak } = body;

    if (!nisn || !nama_siswa || !kelas || !gender) {
      return NextResponse.json(
        { error: 'Field wajib tidak boleh kosong' },
        { status: 400 }
      );
    }

    const newStudent = await StudentService.createStudent({
      nisn,
      nama_siswa,
      kelas,
      gender,
      email,
      kontak,
    });

    return NextResponse.json({ success: true, data: newStudent }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating student:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}