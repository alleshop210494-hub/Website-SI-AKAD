'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/frontend/store/auth.store';

export default function LoginPage() {
  const router = useRouter();
  const { setAuth } = useAuthStore();

  const [username, setUsername] = useState('admin.tu');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePreset = (role: 'admin' | 'guru' | 'siswa' | 'ortu') => {
    switch (role) {
      case 'admin':
        setUsername('admin.tu');
        setPassword('admin123');
        break;
      case 'guru':
        setUsername('guru.matematika');
        setPassword('guru123');
        break;
      case 'siswa':
        setUsername('0012345678');
        setPassword('siswa123');
        break;
      case 'ortu':
        setUsername('ortu.rizky');
        setPassword('ortu123');
        break;
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (username === 'admin.tu' && password === 'admin123') {
        setAuth(
          { id: '1', name: 'Budi Santoso, S.Kom.', email: 'admin@sekolah.sch.id', role: 'ADMIN_TU' },
          'mock-token-admin'
        );
        router.push('/admin');
      } else if (username === 'guru.matematika' && password === 'guru123') {
        setAuth(
          { id: '2', name: 'Siti Aminah, M.Pd.', email: 'guru@sekolah.sch.id', role: 'GURU' },
          'mock-token-guru'
        );
        router.push('/guru');
      } else if (username === '0012345678' && password === 'siswa123') {
        setAuth(
          { id: '3', name: 'Ahmad Rizky', email: 'siswa@sekolah.sch.id', role: 'SISWA' },
          'mock-token-siswa'
        );
        router.push('/siswa');
      } else if (username === 'ortu.rizky' && password === 'ortu123') {
        setAuth(
          { id: '4', name: 'Bapak Herman', email: 'ortu@sekolah.sch.id', role: 'ORTU' },
          'mock-token-ortu'
        );
        router.push('/ortu');
      } else {
        setError('Username atau password tidak sesuai.');
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 p-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 font-bold text-white shadow-lg shadow-indigo-500/30">
            SK
          </div>
          <h1 className="text-2xl font-bold text-white">Portal SIAKAD</h1>
          <p className="mt-1 text-xs text-slate-400">
            Masuk sesuai hak akses akun Anda (Admin, Guru, Siswa, Ortu)
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-xl bg-rose-950/60 border border-rose-800/80 p-3 text-center text-xs font-semibold text-rose-300">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-slate-300">
              Username / NISN
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="Masukkan username"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-semibold text-slate-300">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              placeholder="Masukkan password"
            />
          </div>

          <div>
            <p className="mb-2 text-[11px] font-semibold text-slate-400">Preset Kredensial Demo:</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handlePreset('admin')}
                className="rounded-lg border border-slate-800 bg-slate-800/40 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                Admin TU
              </button>
              <button
                type="button"
                onClick={() => handlePreset('guru')}
                className="rounded-lg border border-slate-800 bg-slate-800/40 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                Guru
              </button>
              <button
                type="button"
                onClick={() => handlePreset('siswa')}
                className="rounded-lg border border-slate-800 bg-slate-800/40 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                Siswa
              </button>
              <button
                type="button"
                onClick={() => handlePreset('ortu')}
                className="rounded-lg border border-slate-800 bg-slate-800/40 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                Orang Tua
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 focus:outline-none disabled:opacity-50"
          >
            {loading ? 'Memproses...' : 'Masuk ke Sistem'}
          </button>
        </form>
      </div>
    </div>
  );
}