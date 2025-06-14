// Simulate a backend login API
export type UserRole = 'Admin' | 'Support' | 'Finance';

export interface MockLoginResponse {
  token: string;
  role: UserRole;
}

const roleMap: Record<string, UserRole> = {
  'admin@company.com': 'Admin',
  'support@company.com': 'Support',
  'finance@company.com': 'Finance',
};

function generateMockToken(email: string, role: UserRole): string {
  // Mimic a JWT: header.payload.signature (base64)
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payload = btoa(
    JSON.stringify({ email, role, exp: Date.now() + 1000 * 60 * 60 })
  );
  const signature = Math.random().toString(36).substring(2, 18);
  return `${header}.${payload}.${signature}`;
}

export async function mockLogin(
  email: string,
  password: string
): Promise<MockLoginResponse> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Randomly fail 20% of the time
      if (Math.random() < 0.2) {
        reject(new Error('Network error. Please try again.'));
        return;
      }
      // Simple validation
      if (!email || !password || password.length < 8) {
        reject(new Error('Invalid credentials.'));
        return;
      }
      // Assign role based on email, default to Support
      const role = roleMap[email.toLowerCase()] || 'Support';
      const token = generateMockToken(email, role);
      resolve({ token, role });
    }, 700);
  });
} 