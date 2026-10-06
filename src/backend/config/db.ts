import { Pool, neonConfig } from '@neondatabase/serverless';
// Mengatur agar driver berjalan optimal di lingkungan serverless/cloud
neonConfig.fetchConnectionCache = true;

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL tidak ditemukan di environment variables.');
}

export const pool = new Pool({ connectionString });

export async function query(text: string, params?: any[]) {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res;
  } finally {
    client.release();
  }
}