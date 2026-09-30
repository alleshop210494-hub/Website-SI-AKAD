import { GradeComponent } from '@/shared/types/grading.type';

export const mockGrades: GradeComponent[] = [
  {
    id: 'grd-1',
    studentId: 'std-1',
    subjectId: 'sbj-mtk',
    academicYearId: 'ay-2025-odd',
    assignmentScore: 85,
    formativeScore: 88,
    summativeScore: 90,
    finalScore: 88,
    letterGrade: 'A',
    predicate: 'Sangat Baik',
    feedback: 'Memahami konsep aljabar dan kalkulus dasar dengan sangat baik.',
  },
  {
    id: 'grd-2',
    studentId: 'std-1',
    subjectId: 'sbj-fis',
    academicYearId: 'ay-2025-odd',
    assignmentScore: 80,
    formativeScore: 78,
    summativeScore: 82,
    finalScore: 80,
    letterGrade: 'B',
    predicate: 'Baik',
    feedback: 'Aktif dalam praktikum fisika di laboratorium.',
  },
];