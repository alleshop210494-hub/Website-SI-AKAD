import { NextResponse } from 'next/server';
import { TeacherService } from '@/backend/services/teacher.service';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nip, nama_guru, mata_pelajaran, email, kontak } = body;

    if (!nip || !nama_guru || !mata_pelajaran) {
      return NextResponse.json(
        { error: 'Field wajib tidak boleh kosong' },
        { status: 400 }
      );
    }

    const newTeacher = await TeacherService.createTeacher({
      nip,
      nama_guru,
      mata_pelajaran,
      email,
      kontak,
    });

    return NextResponse.json({ success: true, data: newTeacher }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating teacher:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}