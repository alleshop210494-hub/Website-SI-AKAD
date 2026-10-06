import { pool } from '@/backend/config/db';

export const AttendanceService = {
  // Mengambil daftar siswa berdasarkan kelas
  async getStudentsByClass(kelas: string) {
    try {
      const result = await pool.query(
        'SELECT * FROM students WHERE kelas = $1 ORDER BY nisn ASC',
        [kelas]
      );
      return result.rows;
    } catch (error) {
      console.error('Error getStudentsByClass:', error);
      return [];
    }
  },

  // Mengambil data presensi yang sudah tersimpan pada tanggal & kelas tertentu
  async getAttendanceByClassAndDate(kelas: string, tanggal: string) {
    try {
      const result = await pool.query(
        'SELECT * FROM attendance_records WHERE kelas = $1 AND tanggal = $2',
        [kelas, tanggal]
      );
      return result.rows;
    } catch (error) {
      console.error('Error getAttendanceByClassAndDate:', error);
      return [];
    }
  },

  // Menyimpan atau memperbarui data presensi siswa ke Neon Database
  async saveAttendance(records: Array<{ nisn: string; kelas: string; tanggal: string; status: string; guru_username: string }>) {
    try {
      for (const rec of records) {
        console.verting(`Menyimpan presensi NISN: ${rec.nisn}, Kelas: ${rec.kelas}, Status: ${rec.status}`);
        await pool.query(
          `INSERT INTO attendance_records (nisn, kelas, tanggal, status, guru_username)
           VALUES ($1, $2, $3, $4, $5)
           ON CONFLICT (nisn, tanggal) 
           DO UPDATE SET status = EXCLUDED.status, guru_username = EXCLUDED.guru_username, updated_at = CURRENT_TIMESTAMP`,
          [rec.nisn, rec.kelas, rec.tanggal, rec.status, rec.guru_username || 'budi_santoso']
        );
      }
      return { success: true };
    } catch (error) {
      console.error('Error SQL saveAttendance:', error);
      throw error;
    }
  }
};