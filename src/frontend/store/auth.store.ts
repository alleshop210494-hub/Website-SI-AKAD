import { create } from 'zustand';
import { User } from '@/shared/types/user.type';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
  initializeAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  setAuth: (user, token) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('siakad_token', token);
      localStorage.setItem('siakad_user', JSON.stringify(user));
    }
    set({ user, token, isAuthenticated: true });
  },

  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('siakad_token');
      localStorage.removeItem('siakad_user');
    }
    set({ user: null, token: null, isAuthenticated: false });
  },

  initializeAuth: () => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('siakad_token');
      const userStr = localStorage.getItem('siakad_user');
      if (token && userStr) {
        try {
          const user = JSON.parse(userStr);
          set({ user, token, isAuthenticated: true });
        } catch {
          localStorage.removeItem('siakad_token');
          localStorage.removeItem('siakad_user');
        }
      }
    }
  },
}));