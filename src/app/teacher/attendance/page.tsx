import { Suspense } from 'react';
import { AttendanceService } from '@/backend/services/attendance.service';
import AttendanceContent from '@/frontend/components/AttendanceContent';

export const dynamic = 'force-dynamic';

export default async function AttendancePage({
  searchParams,
}: {
  searchParams: { kelas?: string; tanggal?: string };
}) {
  const selectedClass = searchParams?.kelas || 'X IPA 1';
  const today = new Date().toISOString().split('T')[0];
  const selectedDate = searchParams?.tanggal || today;
  const currentTeacherUsername = 'budi_santoso';

  const students = await AttendanceService.getStudentsByClass(selectedClass);
  const attendanceRecords = await AttendanceService.getAttendanceByClassAndDate(selectedClass, selectedDate);

  const initialData = students.map(student => {
    const record = attendanceRecords.find(a => a.nisn === student.nisn);
    return {
      ...student,
      status: record ? record.status : 'Hadir'
    };
  });

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Absensi Kelas</h1>
        <p className="text-sm text-slate-500">Kelola kehadiran siswa harian berdasarkan kelas</p>
      </div>

      <Suspense fallback={
        <div className="flex h-40 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500">
          Memuat data absensi dari Neon Database...
        </div>
      }>
        <AttendanceContent 
          initialData={initialData} 
          selectedClass={selectedClass} 
          selectedDate={selectedDate}
          guruUsername={currentTeacherUsername}
        />
      </Suspense>
    </div>
  );
}