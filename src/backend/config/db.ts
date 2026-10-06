import { Pool } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error('DATABASE_URL tidak ditemukan di environment variables!');
}

export const pool = new Pool({ connectionString });