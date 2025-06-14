'use client';
import React from 'react';
import { useAuthStore } from '../store/useAuthStore';
import { useRouter } from 'next/navigation';

const menuByRole = {
  Admin: [
    { label: 'Dashboard', path: '/admin/dashboard' },
    { label: 'Users', path: '/admin/users' },
    { label: 'Reports', path: '/admin/reports' },
    { label: 'Revenue', path: '/admin/revenue' },
  ],
  Support: [
    { label: 'Dashboard', path: '/admin/dashboard' },
    { label: 'Users', path: '/admin/users' },
  ],
  Finance: [
    { label: 'Dashboard', path: '/admin/dashboard' },
    { label: 'Revenue', path: '/admin/revenue' },
  ],
};

const Sidebar: React.FC = () => {
  const role = useAuthStore(state => state.role);
  const logout = useAuthStore(state => state.logout);
  const router = useRouter();
  if (!role) return null;
  const menu = menuByRole[role] || [];

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <aside className="h-full w-64 bg-white shadow-lg flex flex-col p-6">
      <div className="mb-8">
        <span className="text-lg font-bold text-violet-700">Admin Portal</span>
        <div className="text-xs text-gray-400 mt-1">Role: {role}</div>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {menu.map(item => (
            <li key={item.path}>
              <a
                href={item.path}
                className="block px-3 py-2 rounded hover:bg-violet-100 text-gray-700 font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={handleLogout}
        className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded font-semibold transition"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar; 