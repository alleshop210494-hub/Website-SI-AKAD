import { NextRequest, NextResponse } from 'next/server';
import { gradingController } from '@/backend/controllers/grading.controller';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const studentId = searchParams.get('studentId');
    const academicYearId = searchParams.get('academicYearId');

    if (!studentId || !academicYearId) {
      return NextResponse.json(
        { success: false, message: 'studentId dan academicYearId wajib diisi' },
        { status: 400 }
      );
    }

    const reportCard = await gradingController.getReportCard(studentId, academicYearId);
    return NextResponse.json({ success: true, data: reportCard }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Gagal memuat nilai rapor' },
      { status: 400 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await gradingController.submitGrades(body);
    return NextResponse.json({ success: true, data: result }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Gagal menyimpan nilai' },
      { status: 400 }
    );
  }
}