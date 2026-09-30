import { AcademicMockRepository } from '../repositories/mock/academic.mock-repo';
import { AttendanceRecord } from '@/shared/types/academic.type';

export class AcademicService {
  private academicRepo = new AcademicMockRepository();

  async getSchedulesAndAttendance(params?: { classId?: string; teacherId?: string }) {
    const schedules = await this.academicRepo.getSchedules(params);
    const attendance = await this.academicRepo.getAttendance();
    return { schedules, attendance };
  }

  async recordAttendance(records: AttendanceRecord[]) {
    return this.academicRepo.saveAttendance(records);
  }
}

export const academicService = new AcademicService();