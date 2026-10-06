import { pool } from '@/backend/config/db';

export const TeacherService = {
  // Mengambil seluruh data guru dari database Neon
  async getAllTeachers() {
    try {
      const result = await pool.query('SELECT * FROM teachers ORDER BY id DESC');
      return result.rows;
    } catch (error) {
      console.error('Gagal mengambil data guru dari database:', error);
      return [];
    }
  },

  // Menambahkan data guru baru ke database Neon
  async createTeacher(data: {
    nip: string;
    nama_guru: string;
    mata_pelajaran: string;
    email: string;
    kontak: string;
  }) {
    try {
      const query = `
        INSERT INTO teachers (nip, nama_guru, mata_pelajaran, email, kontak, status)
        VALUES ($1, $2, $3, $4, $5, 'Aktif')
        RETURNING *;
      `;
      const values = [data.nip, data.nama_guru, data.mata_pelajaran, data.email, data.kontak];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Gagal menyimpan data guru:', error);
      throw error;
    }
  }
};