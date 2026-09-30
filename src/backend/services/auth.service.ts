import { UserMockRepository } from '../repositories/mock/user.mock-repo';
import { LoginInput, loginSchema } from '@/shared/schemas/auth.schema';
import { AuthSession } from '@/shared/types/user.type';
import { AppError } from '../errors/app-error';

export class AuthService {
  private userRepo = new UserMockRepository();

  async login(credentials: LoginInput): Promise<AuthSession> {
    const parseResult = loginSchema.safeParse(credentials);
    if (!parseResult.success) {
      throw new AppError('Payload login tidak valid', 400, parseResult.error.format());
    }

    const user = await this.userRepo.findByUsername(credentials.username);
    if (!user) {
      throw new AppError('Username atau password salah', 401);
    }

    if (!user.isActive) {
      throw new AppError('Akun Anda dinonaktifkan oleh administrator', 403);
    }

    // Mock JWT Token Generation
    const mockToken = `mock-jwt-token-${user.id}-${Date.now()}`;

    return {
      user,
      accessToken: mockToken,
      refreshToken: `mock-refresh-token-${user.id}`,
    };
  }

  async verifySession(token: string): Promise<AuthSession> {
    // Parsing ID dari mock token format "mock-jwt-token-{userId}-{timestamp}"
    const parts = token.split('-');
    if (parts.length < 4) {
      throw new AppError('Format token tidak valid', 401);
    }

    const userId = `${parts[2]}-${parts[3]}-${parts[4]}`;
    const user = await this.userRepo.findById(userId);

    if (!user) {
      throw new AppError('Sesi pengguna tidak ditemukan', 401);
    }

    return {
      user,
      accessToken: token,
    };
  }
}

export const authService = new AuthService();