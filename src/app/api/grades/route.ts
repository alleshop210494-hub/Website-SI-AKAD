import { NextResponse } from 'next/server';
import { Pool } from '@neondatabase/serverless';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// GET: Mengambil data nilai berdasarkan kelas
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const kelas = searchParams.get('kelas') || 'X-IPA-1';

    const result = await pool.query(
      'SELECT * FROM grades WHERE kelas = $1 ORDER BY nisn ASC',
      [kelas]
    );

    return NextResponse.json({ success: true, data: result.rows });
  } catch (error: any) {
    console.error('API GET Grades Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST: Menyimpan atau memperbarui data nilai siswa ke database Neon
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { grades, kelas } = body; 

    if (!grades || !Array.isArray(grades)) {
      return NextResponse.json({ success: false, error: 'Data nilai tidak valid' }, { status: 400 });
    }

    for (const item of grades) {
      await pool.query(
        `INSERT INTO grades (nisn, nama_siswa, kelas, tugas, uts, uas, updated_at)
         VALUES ($1, $2, $3, $4, $5, $6, NOW())
         ON CONFLICT (nisn, kelas) DO UPDATE 
         SET tugas = EXCLUDED.tugas, 
             uts = EXCLUDED.uts, 
             uas = EXCLUDED.uas, 
             updated_at = NOW()`,
        [
          item.nisn, 
          item.nama_siswa, 
          kelas, 
          Number(item.tugas) || 0, 
          Number(item.uts) || 0, 
          Number(item.uas) || 0
        ]
      );
    }

    return NextResponse.json({ success: true, message: 'Nilai berhasil disimpan ke database' });
  } catch (error: any) {
    console.error('API POST Grades Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}