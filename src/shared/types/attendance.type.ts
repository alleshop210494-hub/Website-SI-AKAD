export type AttendanceStatus = 'HADIR' | 'SAKIT' | 'IZIN' | 'ALPA';

export interface StudentAttendance {
  studentId: string;
  studentName: string;
  nisn: string;
  status: AttendanceStatus;
  notes?: string;
}

export interface TeacherClassOption {
  id: string;
  className: string;
  subject: string;
  totalStudents: number;
}

export interface ClassAttendanceSession {
  id: string;
  classId: string;
  className: string;
  subject: string;
  date: string;
  records: StudentAttendance[];
  isSubmitted: boolean;
  submittedAt?: string;
}

export interface SubmitAttendancePayload {
  classId: string;
  subject: string;
  date: string;
  records: StudentAttendance[];
}