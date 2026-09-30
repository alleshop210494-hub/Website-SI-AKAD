import { Student } from '@/shared/types/student.type';

export interface IStudentRepository {
  findAll(query?: { search?: string; classId?: string }): Promise<Student[]>;
  findById(id: string): Promise<Student | null>;
  findByUserId(userId: string): Promise<Student | null>;
  create(payload: Omit<Student, 'id' | 'createdAt'>): Promise<Student>;
}