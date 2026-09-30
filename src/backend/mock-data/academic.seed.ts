import { AcademicYear, ClassRoom, Schedule, Subject, AttendanceRecord } from '@/shared/types/academic.type';
import { CurriculumType, AttendanceStatus } from '@/shared/constants/roles';

export const mockAcademicYears: AcademicYear[] = [
  {
    id: 'ay-2025-odd',
    name: '2025/2026',
    semester: 'ODD',
    isActive: true,
    curriculum: CurriculumType.MERDEKA,
  },
];

export const mockSubjects: Subject[] = [
  { id: 'sbj-mtk', code: 'MTK-10', name: 'Matematika Wajib', kkm: 75 },
  { id: 'sbj-fis', code: 'FIS-10', name: 'Fisika', kkm: 75 },
  { id: 'sbj-bin', code: 'BIN-10', name: 'Bahasa Indonesia', kkm: 78 },
];

export const mockClasses: ClassRoom[] = [
  {
    id: 'cls-10a',
    code: '10-IPA-1',
    name: 'X IPA 1',
    gradeLevel: 10,
    homeroomTeacherId: 'usr-guru-1',
    homeroomTeacherName: 'Drs. Hadi Wijaya, M.Pd.',
    academicYearId: 'ay-2025-odd',
  },
];

export const mockSchedules: Schedule[] = [
  {
    id: 'sch-1',
    classId: 'cls-10a',
    subjectId: 'sbj-mtk',
    subjectName: 'Matematika Wajib',
    teacherId: 'usr-guru-1',
    teacherName: 'Drs. Hadi Wijaya, M.Pd.',
    dayOfWeek: 1, // Senin
    startTime: '07:30',
    endTime: '09:00',
    room: 'Ruang 101',
  },
  {
    id: 'sch-2',
    classId: 'cls-10a',
    subjectId: 'sbj-fis',
    subjectName: 'Fisika',
    teacherId: 'usr-guru-2',
    teacherName: 'Siti Aminah, S.Si.',
    dayOfWeek: 1, // Senin
    startTime: '09:15',
    endTime: '10:45',
    room: 'Lab Fisika',
  },
];

export const mockAttendanceRecords: AttendanceRecord[] = [
  {
    id: 'att-1',
    studentId: 'std-1',
    studentName: 'Ahmad Rizky Pratama',
    scheduleId: 'sch-1',
    date: '2026-02-09',
    status: AttendanceStatus.HADIR,
  },
  {
    id: 'att-2',
    studentId: 'std-2',
    studentName: 'Siti Sarah Nurhaliza',
    scheduleId: 'sch-1',
    date: '2026-02-09',
    status: AttendanceStatus.IZIN,
    notes: 'Acara keluarga',
  },
];