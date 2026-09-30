import { NextRequest, NextResponse } from 'next/server';
import { academicController } from '@/backend/controllers/academic.controller';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const classId = searchParams.get('classId');
    const teacherId = searchParams.get('teacherId');

    const result = await academicController.getSchedulesAndAttendance({ classId, teacherId });
    return NextResponse.json({ success: true, data: result }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Gagal mengambil data akademik' },
      { status: 400 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await academicController.recordAttendance(body);
    return NextResponse.json({ success: true, data: result }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Gagal mencatat absensi' },
      { status: 400 }
    );
  }
}