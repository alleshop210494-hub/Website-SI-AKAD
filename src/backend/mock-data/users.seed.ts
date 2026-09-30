import { User } from '@/shared/types/user.type';
import { UserRole } from '@/shared/constants/roles';

export const mockUsers: User[] = [
  {
    id: 'usr-admin-1',
    username: 'admin.tu',
    email: 'admin@sekolah.sch.id',
    role: UserRole.ADMIN,
    name: 'Budi Santoso, S.Kom.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
    isActive: true,
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-01T00:00:00Z',
  },
  {
    id: 'usr-guru-1',
    username: 'guru.matematika',
    email: 'hadi.matematika@sekolah.sch.id',
    role: UserRole.TEACHER,
    name: 'Drs. Hadi Wijaya, M.Pd.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    isActive: true,
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-01T00:00:00Z',
  },
  {
    id: 'usr-siswa-1',
    username: '0012345678',
    email: 'ahmad.rizky@siswa.sch.id',
    role: UserRole.STUDENT,
    name: 'Ahmad Rizky Pratama',
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150',
    isActive: true,
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-01T00:00:00Z',
  },
  {
    id: 'usr-ortu-1',
    username: 'ortu.rizky',
    email: 'bambang.pratama@gmail.com',
    role: UserRole.PARENT,
    name: 'Bambang Pratama',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    isActive: true,
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-01T00:00:00Z',
  },
];