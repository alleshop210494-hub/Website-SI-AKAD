import { NextRequest, NextResponse } from 'next/server';
import { authController } from '@/backend/controllers/auth.controller';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await authController.login(body);
    return NextResponse.json({ success: true, data: result }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Autentikasi gagal' },
      { status: error?.statusCode || 400 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    const token = authHeader?.replace('Bearer ', '');
    
    if (!token) {
      return NextResponse.json({ success: false, message: 'Token tidak ditemukan' }, { status: 401 });
    }

    const session = await authController.verifySession(token);
    return NextResponse.json({ success: true, data: session }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || 'Sesi tidak valid' },
      { status: 401 }
    );
  }
}