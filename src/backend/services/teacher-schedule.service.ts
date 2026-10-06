import { pool } from '@/backend/config/db';

export const TeacherScheduleService = {
  // Mengambil jadwal mengajar berdasarkan username akun yang login
  async getSchedulesByUsername(username: string) {
    try {
      const result = await pool.query(
        'SELECT * FROM teacher_schedules WHERE username = $1 ORDER BY id DESC',
        [username]
      );
      return result.rows;
    } catch (error) {
      console.error('Gagal mengambil jadwal mengajar dari database:', error);
      return [];
    }
  },

  // Menambahkan jadwal mengajar baru (biasanya dilakukan oleh Admin)
  async createTeacherSchedule(data: {
    username: string;
    guru_nama: string;
    hari: string;
    waktu: string;
    kelas: string;
    mata_pelajaran: string;
    ruangan: string;
  }) {
    try {
      const query = `
        INSERT INTO teacher_schedules (username, guru_nama, hari, waktu, kelas, mata_pelajaran, ruangan)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
      `;
      const values = [
        data.username,
        data.guru_nama,
        data.hari,
        data.waktu,
        data.kelas,
        data.mata_pelajaran,
        data.ruangan,
      ];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Gagal menyimpan jadwal mengajar:', error);
      throw error;
    }
  }
};