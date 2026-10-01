import { attendanceMockRepo } from '../repositories/mock/attendance.mock-repo';
import { SubmitAttendancePayload } from '@/shared/types/attendance.type';

export class AttendanceService {
  async getTeacherClasses() {
    return await attendanceMockRepo.getTeacherClasses();
  }

  async getStudentsForClass(classId: string) {
    if (!classId) throw new Error('ID Kelas tidak boleh kosong');
    return await attendanceMockRepo.getStudentsByClass(classId);
  }

  async submitClassAttendance(payload: SubmitAttendancePayload) {
    if (!payload.classId || !payload.date || !payload.records.length) {
      throw new Error('Data absensi tidak lengkap');
    }
    return await attendanceMockRepo.submitAttendance(payload);
  }

  async getHistory() {
    return await attendanceMockRepo.getAttendanceHistory();
  }
}

export const attendanceService = new AttendanceService();