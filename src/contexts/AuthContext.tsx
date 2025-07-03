
'use client';

import type { ReactNode, Dispatch, SetStateAction } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  onAuthStateChanged,
  signOut as firebaseSignOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  type UserCredential,
} from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

export type UserRole = 'jobSeeker' | 'employer' | null;

interface AuthContextType {
  currentUser: User | null;
  userRole: UserRole;
  loading: boolean;
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
  signUp: (email: string, pass: string, displayName?: string) => Promise<UserCredential>;
  signIn: (email: string, pass: string) => Promise<any>;
  signOut: () => Promise<void>;
  sendVerificationEmail: (user: User) => Promise<void>;
  signInWithGoogle: () => Promise<UserCredential | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        if (user) {
          setCurrentUser(user);
          const idTokenResult = await user.getIdTokenResult();
          const role = (idTokenResult.claims.role as UserRole) || null;
          setUserRole(role);
        } else {
          setCurrentUser(null);
          setUserRole(null);
        }
        setLoading(false);
      },
      (error) => {
        console.error('Auth state change error:', error);
        setError(error.message);
        setCurrentUser(null);
        setUserRole(null);
        setLoading(false);
      }
    );
    return unsubscribe;
  }, []);

  const signOut = async () => {
    setError(null);
    try {
      await firebaseSignOut(auth);
      toast({ title: 'Logged Out', description: 'You have been successfully logged out.' });
      router.push('/');
    } catch (e: any) {
      console.error('Sign out error:', e);
      setError(e.message);
      toast({ title: 'Logout Error', description: e.message, variant: 'destructive' });
    }
  };

  const sendVerificationEmail = async (user: User) => {
    setError(null);
    try {
      await sendEmailVerification(user);
      toast({
        title: 'Verification Email Sent',
        description: 'Please check your inbox to verify your email address.',
      });
    } catch (e: any) {
      console.error('Send verification email error:', e);
      setError(e.message);
      toast({
        title: 'Verification Email Error',
        description: `Could not send verification email: ${e.message}`,
        variant: 'destructive',
      });
    }
  };
  
  const wrappedSignUp = async (email: string, password: string, displayName?: string) => {
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (userCredential.user && displayName) {
         await updateProfile(userCredential.user, { displayName: displayName });
      }
      return userCredential;
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const wrappedSignIn = async (email: string, password: string) => {
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential;
    } catch (err: any) {
      setError(err.message);
      throw err;
    }
  };

  const signInWithGoogle = async (): Promise<UserCredential | null> => {
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      return result;
    } catch (e: any) {
      console.error('Google Sign-In error:', e);
      setError(e.message);
      toast({ title: 'Google Sign-In Error', description: e.message, variant: 'destructive' });
      return null;
    }
  };

  const value = {
    currentUser,
    userRole,
    loading,
    error,
    setError,
    signUp: wrappedSignUp,
    signIn: wrappedSignIn,
    signOut,
    sendVerificationEmail,
    signInWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
