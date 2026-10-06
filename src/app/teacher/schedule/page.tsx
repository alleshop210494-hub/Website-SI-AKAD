import { Suspense } from 'react';
import { TeacherScheduleService } from '@/backend/services/teacher-schedule.service';
import TeacherScheduleContent from '@/frontend/components/TeacherScheduleContent';

export const dynamic = 'force-dynamic';

export default async function TeacherSchedulePage() {
  // Simulasi mengambil username dari session akun guru yang sedang login
  // Contoh: Jika yang login Drs. Budi Santoso, usernamenya adalah 'budi_santoso'
  const currentUsername = 'budi_santoso';
  const currentTeacherName = 'Drs. Budi Santoso';

  // Mengambil data jadwal dari Neon Database berdasarkan username
  const initialSchedules = await TeacherScheduleService.getSchedulesByUsername(currentUsername);

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Jadwal Mengajar</h1>
        <p className="text-sm text-slate-500">Daftar alokasi waktu dan ruangan kelas pengampuan mata pelajaran.</p>
      </div>

      <Suspense fallback={
        <div className="flex h-40 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500">
          Memuat jadwal mengajar dari database Neon...
        </div>
      }>
        <TeacherScheduleContent 
          initialSchedules={initialSchedules} 
          teacherName={currentTeacherName} 
        />
      </Suspense>
    </div>
  );
}