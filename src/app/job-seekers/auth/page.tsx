'use client';

import { AuthForm } from '@/components/auth/AuthForm';
import { Input } from '@/components/ui/input';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from 'zod';
import type { useForm } from 'react-hook-form';
import React from 'react'; // Needed for Suspense

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

const signupSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});


function JobSeekerAuthContent() {
  const renderSignupFields = (form: ReturnType<typeof useForm>) => (
    <>
      <FormField
        control={form.control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder="John Doe" {...field} className="text-base"/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="you@example.com" {...field} className="text-base"/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="••••••••" {...field} className="text-base"/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="••••••••" {...field} className="text-base"/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );

  return (
    <AuthForm
      formType="jobSeeker"
      loginSchema={loginSchema}
      signupSchema={signupSchema}
      defaultValuesLogin={{ email: '', password: '' }}
      defaultValuesSignup={{ fullName: '', email: '', password: '', confirmPassword: '' }}
      renderSignupFields={renderSignupFields}
    />
  );
}


export default function JobSeekerAuthPage() {
  return (
    // Wrap with Suspense because AuthForm uses useSearchParams
    <React.Suspense fallback={<div>Loading...</div>}> 
      <JobSeekerAuthContent />
    </React.Suspense>
  );
}
