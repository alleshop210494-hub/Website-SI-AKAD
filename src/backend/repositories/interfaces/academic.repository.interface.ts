import { Schedule, AttendanceRecord } from '@/shared/types/academic.type';

export interface IAcademicRepository {
  getSchedules(params?: { classId?: string; teacherId?: string }): Promise<Schedule[]>;
  getAttendance(scheduleId?: string, date?: string): Promise<AttendanceRecord[]>;
  saveAttendance(records: AttendanceRecord[]): Promise<boolean>;
}