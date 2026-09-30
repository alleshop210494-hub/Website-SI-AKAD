import { GradeComponent } from '@/shared/types/grading.type';

export interface IGradeRepository {
  findByStudentAndAcademicYear(studentId: string, academicYearId: string): Promise<GradeComponent[]>;
  saveOrUpdateGrade(grade: GradeComponent): Promise<GradeComponent>;
}