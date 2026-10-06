import { Suspense } from 'react';
import { AcademicService } from '@/backend/services/academic.service';
import AcademicContent from '@/frontend/components/AcademicContent';

export const dynamic = 'force-dynamic';

export default async function AdminAcademicPage() {
  const classesData = await AcademicService.getAllClasses();
  const schedulesData = await AcademicService.getAllSchedules();

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Manajemen Akademik</h1>
        <p className="text-sm text-slate-500">Kelola data kelas, wali kelas, dan jadwal pelajaran sekolah (Terhubung ke Neon Database).</p>
      </div>

      <Suspense fallback={
        <div className="flex h-40 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500">
          Memuat data akademik dari database...
        </div>
      }>
        <AcademicContent initialClasses={classesData} initialSchedules={schedulesData} />
      </Suspense>
    </div>
  );
}