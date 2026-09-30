import { IAcademicRepository } from '../interfaces/academic.repository.interface';
import { Schedule, AttendanceRecord } from '@/shared/types/academic.type';
import { mockSchedules, mockAttendanceRecords } from '@/backend/mock-data/academic.seed';

let scheduleStore: Schedule[] = [...mockSchedules];
let attendanceStore: AttendanceRecord[] = [...mockAttendanceRecords];

export class AcademicMockRepository implements IAcademicRepository {
  async getSchedules(params?: { classId?: string; teacherId?: string }): Promise<Schedule[]> {
    let result = [...scheduleStore];
    if (params?.classId) {
      result = result.filter((s) => s.classId === params.classId);
    }
    if (params?.teacherId) {
      result = result.filter((s) => s.teacherId === params.teacherId);
    }
    return result;
  }

  async getAttendance(scheduleId?: string, date?: string): Promise<AttendanceRecord[]> {
    let result = [...attendanceStore];
    if (scheduleId) {
      result = result.filter((a) => a.scheduleId === scheduleId);
    }
    if (date) {
      result = result.filter((a) => a.date === date);
    }
    return result;
  }

  async saveAttendance(records: AttendanceRecord[]): Promise<boolean> {
    attendanceStore = [...attendanceStore, ...records];
    return true;
  }
}