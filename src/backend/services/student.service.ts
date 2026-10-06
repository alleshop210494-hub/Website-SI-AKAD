import { pool } from '@/backend/config/db';

export const StudentService = {
  // Mengambil seluruh data siswa dari database Neon
  async getAllStudents() {
    try {
      const result = await pool.query('SELECT * FROM students ORDER BY id DESC');
      return result.rows;
    } catch (error) {
      console.error('Gagal mengambil data siswa dari database:', error);
      return [];
    }
  },

  // Menambahkan data siswa baru ke database Neon
  async createStudent(data: {
    nisn: string;
    nama_siswa: string;
    kelas: string;
    gender: string;
    email: string;
    kontak: string;
  }) {
    try {
      const query = `
        INSERT INTO students (nisn, nama_siswa, kelas, gender, email, kontak, status)
        VALUES ($1, $2, $3, $4, $5, $6, 'Aktif')
        RETURNING *;
      `;
      const values = [data.nisn, data.nama_siswa, data.kelas, data.gender, data.email, data.kontak];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Gagal menyimpan data siswa:', error);
      throw error;
    }
  }
};