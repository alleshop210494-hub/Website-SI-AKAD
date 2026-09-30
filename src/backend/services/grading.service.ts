import { GradeMockRepository } from '../repositories/mock/grade.mock-repo';
import { StudentMockRepository } from '../repositories/mock/student.mock-repo';
import { inputGradeSchema, InputGradeInput } from '@/shared/schemas/grading.schema';
import { ReportCard, GradeComponent } from '@/shared/types/grading.type';
import { AppError } from '../errors/app-error';

export class GradingService {
  private gradeRepo = new GradeMockRepository();
  private studentRepo = new StudentMockRepository();

  async calculateAndSaveGrade(payload: InputGradeInput): Promise<GradeComponent> {
    const parseResult = inputGradeSchema.safeParse(payload);
    if (!parseResult.success) {
      throw new AppError('Input nilai tidak valid', 400, parseResult.error.format());
    }

    // Kalkulasi bobot nilai standar K-13 / Kurikulum Merdeka:
    // 30% Tugas + 30% Formatif + 40% Sumatif
    const finalScore = Math.round(
      payload.assignmentScore * 0.3 +
      payload.formativeScore * 0.3 +
      payload.summativeScore * 0.4
    );

    let letterGrade: 'A' | 'B' | 'C' | 'D' | 'F' = 'F';
    let predicate = 'Sangat Kurang';

    if (finalScore >= 88) {
      letterGrade = 'A';
      predicate = 'Sangat Baik';
    } else if (finalScore >= 78) {
      letterGrade = 'B';
      predicate = 'Baik';
    } else if (finalScore >= 70) {
      letterGrade = 'C';
      predicate = 'Cukup';
    } else if (finalScore >= 60) {
      letterGrade = 'D';
      predicate = 'Kurang';
    }

    const gradeData: GradeComponent = {
      id: '',
      studentId: payload.studentId,
      subjectId: payload.subjectId,
      academicYearId: payload.academicYearId,
      assignmentScore: payload.assignmentScore,
      formativeScore: payload.formativeScore,
      summativeScore: payload.summativeScore,
      finalScore,
      letterGrade,
      predicate,
      feedback: payload.feedback,
    };

    return this.gradeRepo.saveOrUpdateGrade(gradeData);
  }

  async generateReportCard(studentId: string, academicYearId: string): Promise<ReportCard> {
    const student = await this.studentRepo.findById(studentId);
    if (!student) {
      throw new AppError('Data siswa tidak ditemukan', 404);
    }

    const grades = await this.gradeRepo.findByStudentAndAcademicYear(studentId, academicYearId);

    const mappedGrades = grades.map((g) => ({
      subjectCode: g.subjectId.toUpperCase(),
      subjectName: g.subjectId === 'sbj-mtk' ? 'Matematika Wajib' : 'Fisika',
      kkm: 75,
      score: g.finalScore,
      letterGrade: g.letterGrade,
      predicate: g.predicate,
    }));

    const totalScore = mappedGrades.reduce((acc, curr) => acc + curr.score, 0);
    const overallGPA = mappedGrades.length > 0 ? Number((totalScore / mappedGrades.length).toFixed(2)) : 0;

    return {
      studentId: student.id,
      studentName: student.fullName,
      nisn: student.nisn,
      className: student.className || 'X IPA 1',
      academicYear: '2025/2026',
      semester: 'Ganjil',
      grades: mappedGrades,
      overallGPA,
      attendanceSummary: {
        hadir: 18,
        izin: 1,
        sakit: 0,
        alpa: 0,
      },
      teacherNotes: 'Pertahankan prestasi dan keaktifan di kelas.',
    };
  }
}

export const gradingService = new GradingService();