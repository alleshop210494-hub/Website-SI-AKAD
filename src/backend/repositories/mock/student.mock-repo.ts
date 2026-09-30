import { IStudentRepository } from '../interfaces/student.repository.interface';
import { Student } from '@/shared/types/student.type';
import { mockStudents } from '@/backend/mock-data/students.seed';

let studentStore: Student[] = [...mockStudents];

export class StudentMockRepository implements IStudentRepository {
  async findAll(query?: { search?: string; classId?: string }): Promise<Student[]> {
    let result = [...studentStore];

    if (query?.classId) {
      result = result.filter((s) => s.classId === query.classId);
    }

    if (query?.search) {
      const q = query.search.toLowerCase();
      result = result.filter(
        (s) => s.fullName.toLowerCase().includes(q) || s.nisn.includes(q) || s.nis.includes(q)
      );
    }

    return result;
  }

  async findById(id: string): Promise<Student | null> {
    return studentStore.find((s) => s.id === id) || null;
  }

  async findByUserId(userId: string): Promise<Student | null> {
    return studentStore.find((s) => s.userId === userId) || null;
  }

  async create(payload: Omit<Student, 'id' | 'createdAt'>): Promise<Student> {
    const newStudent: Student = {
      ...payload,
      id: `std-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    studentStore.push(newStudent);
    return newStudent;
  }
}