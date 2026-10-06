import { pool } from '@/backend/config/db';

export const AcademicService = {
  // Mengambil seluruh data kelas
  async getAllClasses() {
    try {
      const result = await pool.query('SELECT * FROM classes ORDER BY id DESC');
      return result.rows;
    } catch (error) {
      console.error('Gagal mengambil data kelas dari database:', error);
      return [];
    }
  },

  // Menambahkan data kelas baru
  async createClass(data: {
    nama_kelas: string;
    tingkat: string;
    tahun_ajaran: string;
    wali_kelas: string;
    jumlah_siswa?: number;
    kapasitas?: number;
  }) {
    try {
      const query = `
        INSERT INTO classes (nama_kelas, tingkat, tahun_ajaran, wali_kelas, jumlah_siswa, kapasitas)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
      `;
      const values = [
        data.nama_kelas,
        data.tingkat,
        data.tahun_ajaran,
        data.wali_kelas,
        data.jumlah_siswa || 0,
        data.kapasitas || 36,
      ];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Gagal menyimpan data kelas:', error);
      throw error;
    }
  },

  // Mengambil seluruh data jadwal pelajaran
  async getAllSchedules() {
    try {
      const result = await pool.query('SELECT * FROM schedules ORDER BY id DESC');
      return result.rows;
    } catch (error) {
      console.error('Gagal mengambil data jadwal dari database:', error);
      return [];
    }
  },

  // Menambahkan data jadwal pelajaran baru
  async createSchedule(data: {
    hari: string;
    jam: string;
    mata_pelajaran: string;
    kelas: string;
    nama_guru: string;
  }) {
    try {
      const query = `
        INSERT INTO schedules (hari, jam, mata_pelajaran, kelas, nama_guru)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;
      const values = [data.hari, data.jam, data.mata_pelajaran, data.kelas, data.nama_guru];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Gagal menyimpan data jadwal:', error);
      throw error;
    }
  }
};