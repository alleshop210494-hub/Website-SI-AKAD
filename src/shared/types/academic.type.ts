export interface Schedule {
  id: string;
  classId: string;
  className: string;
  subject: string;
  teacherId?: string;
  teacherName: string;
  day: 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat' | 'Sabtu';
  startTime: string;
  endTime: string;
  room: string;
}

export interface ClassRoom {
  id: string;
  name: string;
  gradeLevel: string;
  academicYear: string;
  homeroomTeacherName?: string;
  capacity: number;
  totalStudents: number;
}

export interface CreateClassInput {
  name: string;
  gradeLevel: string;
  academicYear: string;
  homeroomTeacherName?: string;
  capacity: number;
}

export interface CreateScheduleInput {
  classId: string;
  subject: string;
  teacherName: string;
  day: 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat' | 'Sabtu';
  startTime: string;
  endTime: string;
  room: string;
}