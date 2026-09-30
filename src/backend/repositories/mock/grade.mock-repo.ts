import { IGradeRepository } from '../interfaces/grade.repository.interface';
import { GradeComponent } from '@/shared/types/grading.type';
import { mockGrades } from '@/backend/mock-data/grades.seed';

let gradeStore: GradeComponent[] = [...mockGrades];

export class GradeMockRepository implements IGradeRepository {
  async findByStudentAndAcademicYear(studentId: string, academicYearId: string): Promise<GradeComponent[]> {
    return gradeStore.filter(
      (g) => g.studentId === studentId && g.academicYearId === academicYearId
    );
  }

  async saveOrUpdateGrade(grade: GradeComponent): Promise<GradeComponent> {
    const index = gradeStore.findIndex(
      (g) => g.studentId === grade.studentId && g.subjectId === grade.subjectId && g.academicYearId === grade.academicYearId
    );

    if (index !== -1) {
      gradeStore[index] = { ...gradeStore[index], ...grade };
      return gradeStore[index];
    }

    const newGrade = { ...grade, id: `grd-${Date.now()}` };
    gradeStore.push(newGrade);
    return newGrade;
  }
}