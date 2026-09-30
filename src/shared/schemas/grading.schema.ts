import { z } from 'zod';

export const inputGradeSchema = z.object({
  studentId: z.string().min(1, 'Siswa wajib dipilih'),
  subjectId: z.string().min(1, 'Mata pelajaran wajib dipilih'),
  academicYearId: z.string().min(1, 'Tahun ajaran wajib dipilih'),
  assignmentScore: z.number().min(0).max(100),
  formativeScore: z.number().min(0).max(100),
  summativeScore: z.number().min(0).max(100),
  feedback: z.string().optional(),
});

export type InputGradeInput = z.infer<typeof inputGradeSchema>;