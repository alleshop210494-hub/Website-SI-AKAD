import { CurriculumType, AttendanceStatus } from '../constants/roles';

export interface AcademicYear {
  id: string;
  name: string;
  semester: 'ODD' | 'EVEN';
  isActive: boolean;
  curriculum: CurriculumType;
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  kkm: number;
}

export interface ClassRoom {
  id: string;
  code: string;
  name: string;
  gradeLevel: number;
  homeroomTeacherId: string;
  homeroomTeacherName: string;
  academicYearId: string;
}

export interface Schedule {
  id: string;
  classId: string;
  subjectId: string;
  subjectName: string;
  teacherId: string;
  teacherName: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  room: string;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  studentName: string;
  scheduleId: string;
  date: string;
  status: AttendanceStatus;
  notes?: string;
}