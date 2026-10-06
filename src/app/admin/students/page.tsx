import { Suspense } from 'react';
import { StudentService } from '@/backend/services/student.service';
import StudentsTable from '@/frontend/components/StudentsTable';

// Memastikan halaman selalu mengambil data terbaru dari database
export const dynamic = 'force-dynamic';

export default async function AdminStudentsPage() {
  // Mengambil data dari Neon Database
  const students = await StudentService.getAllStudents();

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Data Master Siswa</h1>
        <p className="text-sm text-slate-500">Kelola data seluruh siswa terdaftar dan status keaktifan mereka (Terhubung ke Neon Database).</p>
      </div>

      <Suspense fallback={
        <div className="flex h-40 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500">
          Memuat data siswa dari database...
        </div>
      }>
        <StudentsTable initialData={students} />
      </Suspense>
    </div>
  );
}