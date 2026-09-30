'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ApiClient } from '@/frontend/lib/api-client';
import { useAuthStore } from '@/frontend/store/auth.store';
import { AuthSession } from '@/shared/types/user.type';
import { UserRole } from '@/shared/constants/roles';

export function AuthLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState('admin.tu');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const { setAuth } = useAuthStore();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const session = await ApiClient.post<AuthSession>('/auth', {
        username,
        password,
      });

      setAuth(session.user, session.accessToken);

      const role = session.user.role;
      if (role === UserRole.ADMIN) router.push('/admin');
      else if (role === UserRole.TEACHER) router.push('/guru');
      else if (role === UserRole.STUDENT) router.push('/siswa');
      else if (role === UserRole.PARENT) router.push('/ortu');
      else router.push('/login');
    } catch (err: any) {
      setErrorMsg(err?.message || 'Login gagal. Periksa kembali username dan password Anda.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      {errorMsg && (
        <div className="rounded-xl border border-rose-900/50 bg-rose-950/40 p-3 text-xs text-rose-300">
          ⚠️ {errorMsg}
        </div>
      )}

      <div>
        <label className="block text-xs font-medium text-slate-300">Username / NISN</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Masukkan username atau NISN"
          className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-300">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="••••••••"
          className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        />
      </div>

      <div className="pt-2">
        <span className="block text-[11px] text-slate-400 mb-1.5">Preset Kredensial Demo:</span>
        <div className="grid grid-cols-2 gap-1.5">
          <button
            type="button"
            onClick={() => { setUsername('admin.tu'); setPassword('admin123'); }}
            className="rounded-lg bg-slate-800/80 px-2 py-1 text-[11px] text-slate-300 hover:bg-slate-700"
          >
            Admin TU
          </button>
          <button
            type="button"
            onClick={() => { setUsername('guru.matematika'); setPassword('guru123'); }}
            className="rounded-lg bg-slate-800/80 px-2 py-1 text-[11px] text-slate-300 hover:bg-slate-700"
          >
            Guru
          </button>
          <button
            type="button"
            onClick={() => { setUsername('0012345678'); setPassword('siswa123'); }}
            className="rounded-lg bg-slate-800/80 px-2 py-1 text-[11px] text-slate-300 hover:bg-slate-700"
          >
            Siswa
          </button>
          <button
            type="button"
            onClick={() => { setUsername('ortu.rizky'); setPassword('ortu123'); }}
            className="rounded-lg bg-slate-800/80 px-2 py-1 text-[11px] text-slate-300 hover:bg-slate-700"
          >
            Orang Tua
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-4 flex w-full items-center justify-center rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50"
      >
        {loading ? 'Memproses...' : 'Masuk ke Sistem'}
      </button>
    </form>
  );
}