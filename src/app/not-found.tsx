import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-center">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
        <span className="text-6xl font-extrabold text-indigo-500 sm:text-7xl">404</span>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Halaman Tidak Ditemukan
        </h1>
        <p className="mt-2 text-sm text-slate-400 sm:text-base">
          Maaf, halaman atau rute yang Anda tuju tidak ditemukan pada sistem SIAKAD.
        </p>
        <div className="mt-8">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Kembali ke Halaman Utama
          </Link>
        </div>
      </div>
    </div>
  );
}