import { Suspense } from 'react';
import { TeacherService } from '@/backend/services/teacher.service';
import TeachersTable from '@/frontend/components/TeachersTable';

export const dynamic = 'force-dynamic';

export default async function AdminTeachersPage() {
  const teachers = await TeacherService.getAllTeachers();

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Data Master Guru</h1>
        <p className="text-sm text-slate-500">Kelola data seluruh tenaga pengajar dan mata pelajaran yang diampu (Terhubung ke Neon Database).</p>
      </div>

      <Suspense fallback={
        <div className="flex h-40 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500">
          Memuat data guru dari database...
        </div>
      }>
        <TeachersTable initialData={teachers} />
      </Suspense>
    </div>
  );
}