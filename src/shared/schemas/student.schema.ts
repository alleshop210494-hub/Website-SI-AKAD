import { z } from 'zod';

export const createStudentSchema = z.object({
  nisn: z.string().length(10, 'NISN harus 10 digit'),
  nis: z.string().min(4, 'NIS minimal 4 karakter'),
  fullName: z.string().min(3, 'Nama lengkap minimal 3 karakter'),
  gender: z.enum(['L', 'P']),
  birthPlace: z.string().min(2, 'Tempat lahir wajib diisi'),
  birthDate: z.string().min(1, 'Tanggal lahir wajib diisi'),
  classId: z.string().min(1, 'Kelas wajib dipilih'),
  parentId: z.string().optional(),
  parentName: z.string().optional(),
  address: z.string().min(5, 'Alamat minimal 5 karakter'),
  isClassLeader: z.boolean().optional().default(false),
});

export type CreateStudentInput = z.infer<typeof createStudentSchema>;