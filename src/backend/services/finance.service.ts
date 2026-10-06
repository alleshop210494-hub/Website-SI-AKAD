import { pool } from '@/backend/config/db';

export const FinanceService = {
  // Mengambil seluruh data tagihan keuangan dari database Neon
  async getAllInvoices() {
    try {
      const result = await pool.query('SELECT * FROM finance_invoices ORDER BY id DESC');
      return result.rows;
    } catch (error) {
      console.error('Gagal mengambil data keuangan dari database:', error);
      return [];
    }
  },

  // Menambahkan data tagihan baru ke database Neon
  async createInvoice(data: {
    kode_tagihan: string;
    nama_siswa: string;
    kelas: string;
    jenis_tagihan: string;
    nominal: number;
    status: string;
  }) {
    try {
      const query = `
        INSERT INTO finance_invoices (kode_tagihan, nama_siswa, kelas, jenis_tagihan, nominal, status)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
      `;
      const values = [
        data.kode_tagihan,
        data.nama_siswa,
        data.kelas,
        data.jenis_tagihan,
        data.nominal,
        data.status || 'Belum Bayar',
      ];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Gagal menyimpan data tagihan:', error);
      throw error;
    }
  }
};