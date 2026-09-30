import { StudentMockRepository } from '../repositories/mock/student.mock-repo';
import { createStudentSchema, CreateStudentInput } from '@/shared/schemas/student.schema';
import { AppError } from '../errors/app-error';

export class MasterDataService {
  private studentRepo = new StudentMockRepository();

  async getStudents(query?: { search?: string; classId?: string }) {
    return this.studentRepo.findAll(query);
  }

  async createStudent(payload: CreateStudentInput) {
    const parseResult = createStudentSchema.safeParse(payload);
    if (!parseResult.success) {
      throw new AppError('Data siswa tidak valid', 400, parseResult.error.format());
    }

    const existingStudents = await this.studentRepo.findAll({ search: payload.nisn });
    if (existingStudents.some((s) => s.nisn === payload.nisn)) {
      throw new AppError('Siswa dengan NISN ini sudah terdaftar', 400);
    }

    return this.studentRepo.create({
      ...payload,
      userId: `usr-siswa-${Date.now()}`,
      className: 'X IPA 1', // Automatic dynamic mapping in real app
    });
  }
}

export const masterDataService = new MasterDataService();