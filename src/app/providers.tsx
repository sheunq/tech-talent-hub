
'use client';

import type { ReactNode } from 'react';
import { AuthProvider } from '@/contexts/AuthContext'; // Import AuthProvider

// In the future, you can add other providers here, e.g., ThemeProvider from next-themes, React Query Provider, etc.
export function AppProviders({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
