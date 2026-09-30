import { IUserRepository } from '../interfaces/user.repository.interface';
import { User } from '@/shared/types/user.type';
import { mockUsers } from '@/backend/mock-data/users.seed';

let userStore: User[] = [...mockUsers];

export class UserMockRepository implements IUserRepository {
  async findByUsername(username: string): Promise<User | null> {
    return userStore.find((u) => u.username === username) || null;
  }

  async findById(id: string): Promise<User | null> {
    return userStore.find((u) => u.id === id) || null;
  }

  async findAll(): Promise<User[]> {
    return userStore;
  }
}