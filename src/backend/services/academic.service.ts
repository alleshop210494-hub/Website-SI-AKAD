import { academicMockRepo } from '../repositories/mock/academic.mock-repo';
import { CreateClassInput, CreateScheduleInput } from '@/shared/types/academic.type';

export class AcademicService {
  async getAcademicOverview() {
    const classes = await academicMockRepo.getClasses();
    const schedules = await academicMockRepo.getSchedules();
    return { classes, schedules };
  }

  async createClass(data: CreateClassInput) {
    if (!data.name || !data.gradeLevel || !data.academicYear) {
      throw new Error('Nama Kelas, Tingkat, dan Tahun Ajaran wajib diisi');
    }
    return await academicMockRepo.addClass(data);
  }

  async createSchedule(data: CreateScheduleInput) {
    if (!data.classId || !data.subject || !data.teacherName || !data.day || !data.startTime || !data.endTime || !data.room) {
      throw new Error('Semua bidang jadwal wajib diisi');
    }
    return await academicMockRepo.addSchedule(data);
  }
}

export const academicService = new AcademicService();