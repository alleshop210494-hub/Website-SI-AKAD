import {
  TeacherClassOption,
  StudentAttendance,
  ClassAttendanceSession,
  SubmitAttendancePayload,
} from '@/shared/types/attendance.type';

const mockTeacherClasses: TeacherClassOption[] = [
  {
    id: 'c1',
    className: 'X IPA 1',
    subject: 'Matematika',
    totalStudents: 5,
  },
  {
    id: 'c2',
    className: 'XI IPA 2',
    subject: 'Matematika Lanjut',
    totalStudents: 4,
  },
];

const mockStudentsByClass: Record<string, Omit<StudentAttendance, 'status' | 'notes'>[]> = {
  c1: [
    { studentId: 'std_1', studentName: 'Aditya Pratama', nisn: '0051234501' },
    { studentId: 'std_2', studentName: 'Anisa Rahmawati', nisn: '0051234502' },
    { studentId: 'std_3', studentName: 'Bagas Kurniawan', nisn: '0051234503' },
    { studentId: 'std_4', studentName: 'Citra Dewi', nisn: '0051234504' },
    { studentId: 'std_5', studentName: 'Dwi Prasetyo', nisn: '0051234505' },
  ],
  c2: [
    { studentId: 'std_6', studentName: 'Eka Nurhayati', nisn: '0041234506' },
    { studentId: 'std_7', studentName: 'Fajar Nugraha', nisn: '0041234507' },
    { studentId: 'std_8', studentName: 'Gita Gutawa', nisn: '0041234508' },
    { studentId: 'std_9', studentName: 'Hendra Setiawan', nisn: '0041234509' },
  ],
};

let mockAttendanceHistory: ClassAttendanceSession[] = [];

export class AttendanceMockRepository {
  async getTeacherClasses(): Promise<TeacherClassOption[]> {
    return [...mockTeacherClasses];
  }

  async getStudentsByClass(classId: string): Promise<StudentAttendance[]> {
    const students = mockStudentsByClass[classId] || [];
    return students.map((s) => ({
      ...s,
      status: 'HADIR',
      notes: '',
    }));
  }

  async submitAttendance(payload: SubmitAttendancePayload): Promise<ClassAttendanceSession> {
    const targetClass = mockTeacherClasses.find((c) => c.id === payload.classId);
    const newSession: ClassAttendanceSession = {
      id: `att_${Date.now()}`,
      classId: payload.classId,
      className: targetClass ? targetClass.className : 'Kelas',
      subject: payload.subject,
      date: payload.date,
      records: payload.records,
      isSubmitted: true,
      submittedAt: new Date().toISOString(),
    };

    const existingIndex = mockAttendanceHistory.findIndex(
      (h) => h.classId === payload.classId && h.date === payload.date
    );

    if (existingIndex >= 0) {
      mockAttendanceHistory[existingIndex] = newSession;
    } else {
      mockAttendanceHistory.unshift(newSession);
    }

    return newSession;
  }

  async getAttendanceHistory(): Promise<ClassAttendanceSession[]> {
    return [...mockAttendanceHistory];
  }
}

export const attendanceMockRepo = new AttendanceMockRepository();