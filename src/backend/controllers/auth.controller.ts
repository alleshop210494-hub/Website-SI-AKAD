import { authService } from '../services/auth.service';
import { LoginInput } from '@/shared/schemas/auth.schema';

export class AuthController {
  async login(payload: LoginInput) {
    return authService.login(payload);
  }

  async verifySession(token: string) {
    return authService.verifySession(token);
  }
}

export const authController = new AuthController();