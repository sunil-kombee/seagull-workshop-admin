'use client';
import { create } from 'zustand';
import { mockLogin, UserRole } from '../lib/mockAuth';

interface AuthState {
  token: string | null;
  role: UserRole | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const TOKEN_KEY = 'auth_token';
const ROLE_KEY = 'auth_role';

export const useAuthStore = create<AuthState>((set) => {
  // Initialize from sessionStorage
  const storedToken = typeof window !== 'undefined' ? sessionStorage.getItem(TOKEN_KEY) : null;
  const storedRole = typeof window !== 'undefined' ? (sessionStorage.getItem(ROLE_KEY) as UserRole | null) : null;

  return {
    token: storedToken,
    role: storedRole,
    isAuthenticated: !!storedToken,
    login: async (email: string, password: string) => {
      const res = await mockLogin(email, password);
      set({ token: res.token, role: res.role, isAuthenticated: true });
      sessionStorage.setItem(TOKEN_KEY, res.token);
      sessionStorage.setItem(ROLE_KEY, res.role);
    },
    logout: () => {
      set({ token: null, role: null, isAuthenticated: false });
      sessionStorage.removeItem(TOKEN_KEY);
      sessionStorage.removeItem(ROLE_KEY);
    },
  };
}); 