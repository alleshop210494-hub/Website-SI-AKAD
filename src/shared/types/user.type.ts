import { UserRole } from '../constants/roles';

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  name: string;
  avatarUrl?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthSession {
  user: User;
  accessToken: string;
  refreshToken?: string;
}