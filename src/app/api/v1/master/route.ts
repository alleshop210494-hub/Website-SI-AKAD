import { NextRequest, NextResponse } from 'next/server';
import { masterDataController } from '@/backend/controllers/master-data.controller';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const resource = searchParams.get('resource'); // 'students' | 'teachers' | 'classes' | 'subjects'

    const data = await masterDataController.get(resource, searchParams);
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Gagal mengambil data master' },
      { status: 400 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const resource = searchParams.get('resource');
    const body = await req.json();

    const result = await masterDataController.create(resource, body);
    return NextResponse.json({ success: true, data: result }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Gagal menambahkan data master' },
      { status: 400 }
    );
  }
}