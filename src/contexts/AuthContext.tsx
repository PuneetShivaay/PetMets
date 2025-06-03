"use client";
import type { User as FirebaseUser } from 'firebase/auth'; // Keep type import for structure
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

// Define a simpler User type for the mock or use a subset of FirebaseUser
type User = Pick<FirebaseUser, 'uid' | 'email' | 'displayName' | 'photoURL'> & {
  // Add any other properties you expect to use from the User object
};


interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email?: string, password?: string) => Promise<void>;
  signup: (email?: string, password?: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data, simplified
const MOCK_USER_DATA: User = {
  uid: 'mock-user-id',
  email: 'user@example.com',
  displayName: 'Mock User',
  photoURL: null,
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Get router instance

  useEffect(() => {
    // Simulate checking auth state
    try {
      const storedUser = localStorage.getItem('petmets-user');
      if (storedUser) {
        setUser(JSON.parse(storedUser) as User);
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('petmets-user'); // Clear corrupted data
    }
    setLoading(false);
  }, []);

  const login = async (email?: string, password?: string) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    const loggedInUser: User = { ...MOCK_USER_DATA, email: email || MOCK_USER_DATA.email };
    setUser(loggedInUser);
    localStorage.setItem('petmets-user', JSON.stringify(loggedInUser));
    setLoading(false);
    router.push('/dashboard'); // Redirect to dashboard on login
  };

  const signup = async (email?: string, password?: string) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    const signedUpUser: User = { ...MOCK_USER_DATA, email: email || MOCK_USER_DATA.email };
    setUser(signedUpUser);
    localStorage.setItem('petmets-user', JSON.stringify(signedUpUser));
    setLoading(false);
    router.push('/dashboard'); // Redirect to dashboard on signup
  };

  const logout = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
    setUser(null);
    localStorage.removeItem('petmets-user');
    setLoading(false);
    router.push('/login'); // Redirect to login page on logout
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
