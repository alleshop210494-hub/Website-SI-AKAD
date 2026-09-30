import { academicService } from '../services/academic.service';

export class AcademicController {
  async getSchedulesAndAttendance(params: { classId?: string | null; teacherId?: string | null }) {
    return academicService.getSchedulesAndAttendance({
      classId: params.classId || undefined,
      teacherId: params.teacherId || undefined,
    });
  }

  async recordAttendance(body: any) {
    return academicService.recordAttendance(body);
  }
}

export const academicController = new AcademicController();