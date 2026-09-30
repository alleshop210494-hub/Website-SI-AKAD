import type { Metadata } from 'next';
import { AuthLoginForm } from '@/frontend/features/auth/components/auth-login-form';

export const metadata: Metadata = {
  title: 'Masuk - Sistem Informasi Akademik',
};

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 p-4">
      {/* Background Lighting Accents */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
            <span className="text-xl font-black">SK</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Portal SIAKAD</h1>
          <p className="mt-1 text-xs text-slate-400">Masuk sesuai hak akses akun Anda (Admin, Guru, Siswa, Ortu)</p>
        </div>

        <AuthLoginForm />
      </div>
    </div>
  );
}