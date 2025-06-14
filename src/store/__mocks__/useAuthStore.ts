export const useAuthStore = () => ({
  login: jest.fn(() => Promise.resolve()),
  isAuthenticated: false,
});
