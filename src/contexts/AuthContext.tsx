
"use client";
import type { User as FirebaseUser } from 'firebase/auth'; // Keep type import for structure
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// useRouter is not strictly needed here anymore for login/signup/logout if all go external.
// However, if dashboard navigation post-login (mocked) is still desired from here, keep it.

// Define a simpler User type for the mock or use a subset of FirebaseUser
type User = Pick<FirebaseUser, 'uid' | 'email' | 'displayName' | 'photoURL'> & {
  // Add any other properties you expect to use from the User object
};

const externalAppLoginUrl = "https://app.petmets.in";
const externalAppDashboardUrl = "https://app.petmets.in/dashboard"; // Or whatever the target is

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email?: string, password?: string) => Promise<void>; // This will become a redirect
  signup: (email?: string, password?: string) => Promise<void>; // This will become a redirect
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
  // const router = useRouter(); // Potentially remove if all auth actions redirect externally

  useEffect(() => {
    // Simulate checking auth state (e.g., if user was logged into external app and came back)
    // This part might need integration with how app.petmets.in handles its auth state
    // For now, we'll keep the localStorage mock for within-app state if needed for other features.
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
    // setLoading(true);
    // This now redirects to the external login page
    window.location.href = externalAppLoginUrl;
    // The promise might not resolve if redirecting, or can be a no-op.
    // await new Promise(resolve => setTimeout(resolve, 100)); 
    // setLoading(false);
  };

  const signup = async (email?: string, password?: string) => {
    // setLoading(true);
    // This now redirects to the external signup/login page
    window.location.href = externalAppLoginUrl;
    // await new Promise(resolve => setTimeout(resolve, 100));
    // setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API call
    setUser(null);
    localStorage.removeItem('petmets-user');
    setLoading(false);
    window.location.href = externalAppLoginUrl; // Redirect to external login page on logout
  };

  // If you still want to simulate a login for dashboard access within this app (e.g. for local dev/testing)
  // you might need a separate function or adjust the mock user handling.
  // For now, the login/signup directly redirect.

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
