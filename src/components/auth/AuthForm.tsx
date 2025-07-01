
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAdditionalUserInfo, type UserCredential } from 'firebase/auth';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '../ui/separator';
import { Loader2 } from 'lucide-react';
import { useAuth, type UserRole } from '@/contexts/AuthContext';

const GoogleIcon = () => (
  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    <path d="M1 1h22v22H1z" fill="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

interface AuthFormProps {
  formType: 'jobSeeker' | 'employer';
  loginSchema: z.ZodObject<any, any, any>;
  signupSchema: z.ZodObject<any, any, any>;
  defaultValuesLogin: Record<string, any>;
  defaultValuesSignup: Record<string, any>;
  renderSignupFields: (form: ReturnType<typeof useForm>) => React.ReactNode;
}

export function AuthForm({
  formType,
  loginSchema,
  signupSchema,
  defaultValuesLogin,
  defaultValuesSignup,
  renderSignupFields,
}: AuthFormProps) {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('action') === 'signup' ? 'signup' : 'login';
  const router = useRouter();
  const { signIn, signUp, sendVerificationEmail, setError: setAuthError, signInWithGoogle } = useAuth();
  const [isSubmittingLogin, setIsSubmittingLogin] = useState(false);
  const [isSubmittingSignup, setIsSubmittingSignup] = useState(false);
  const [isSubmittingGoogle, setIsSubmittingGoogle] = useState(false);

  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: defaultValuesLogin,
  });

  const signupForm = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: defaultValuesSignup,
  });

  const handleSuccessRedirect = () => {
    const redirectPath = formType === 'jobSeeker' ? '/job-seekers/dashboard' : '/employers/dashboard';
    router.push(redirectPath);
  };

  async function onLoginSubmit(data: z.infer<typeof loginSchema>) {
    setIsSubmittingLogin(true);
    setAuthError(null);
    try {
      await signIn(data.email, data.password);
      toast({
        title: 'Login Successful',
        description: `Welcome back! Redirecting...`,
      });
      handleSuccessRedirect();
    } catch (error: any) {
      console.error('Firebase Login Error:', error);
      const errorMessage = error.code ? error.code.replace('auth/', '').replace(/-/g, ' ') : 'An unknown error occurred.';
      setAuthError(errorMessage); 
      toast({
        title: 'Login Failed',
        description: errorMessage,
        variant: 'destructive',
      });
    }
    setIsSubmittingLogin(false);
  }

  async function onSignupSubmit(data: z.infer<typeof signupSchema>) {
    setIsSubmittingSignup(true);
    setAuthError(null);
    try {
      const userCredential = await signUp(data.email, data.password);
      const user = userCredential.user;

      const token = await user.getIdToken();
      await fetch('/api/set-role', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role: formType }),
      });
      
      await user.getIdToken(true);

      await sendVerificationEmail(userCredential.user);
      toast({
        title: 'Signup Successful!',
        description: `Welcome to TekTunnel! A verification email has been sent to ${data.email}. Please verify your email to login.`,
      });
       const newPath = formType === 'jobSeeker' ? '/job-seekers/auth' : '/employers/auth';
       router.push(newPath); 
    } catch (error: any) {
      console.error('Firebase Signup Error:', error);
      const errorMessage = error.code ? error.code.replace('auth/', '').replace(/-/g, ' ') : 'An unknown error occurred.';
      setAuthError(errorMessage); 
      toast({
        title: 'Signup Failed',
        description: errorMessage,
        variant: 'destructive',
      });
    }
    setIsSubmittingSignup(false);
  }
  
  async function handleGoogleSignIn() {
    setIsSubmittingGoogle(true);
    setAuthError(null);
    try {
      const userCredential = await signInWithGoogle();
      if (userCredential) {
        const additionalInfo = getAdditionalUserInfo(userCredential);

        if (additionalInfo?.isNewUser) {
          const user = userCredential.user;
          const token = await user.getIdToken();
          await fetch('/api/set-role', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ role: formType }),
          });
          await user.getIdToken(true);
        }

        const user = userCredential.user;
        toast({
          title: 'Google Sign-In Successful',
          description: `Welcome, ${user.displayName || user.email}! Redirecting...`,
        });
        handleSuccessRedirect();
      }
    } catch (error: any) { 
        console.error('Google Sign-In UI Error:', error);
        const errorMessage = error.code ? error.code.replace('auth/', '').replace(/-/g, ' ') : 'An unknown error occurred during Google Sign-In.';
        setAuthError(errorMessage);
        toast({
            title: 'Google Sign-In Failed',
            description: errorMessage,
            variant: 'destructive',
        });
    }
    setIsSubmittingGoogle(false);
  }


  const titlePrefix = formType === 'jobSeeker' ? 'Job Seeker' : 'Employer';

  return (
    <div className="flex justify-center items-center py-8 md:py-12">
      <Tabs defaultValue={initialTab} className="w-full max-w-md">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card className="shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{titlePrefix} Login</CardTitle>
              <CardDescription>Access your {formType} account to continue.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...loginForm}>
                <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-6">
                  <FormField
                    control={loginForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} className="text-base" disabled={isSubmittingLogin || isSubmittingGoogle}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} className="text-base" disabled={isSubmittingLogin || isSubmittingGoogle}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full text-base py-3" disabled={isSubmittingLogin || isSubmittingGoogle}>
                    {isSubmittingLogin && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                    {isSubmittingLogin ? 'Logging in...' : 'Login'}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 pt-6">
                <div className="relative w-full">
                    <Separator />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">OR LOGIN WITH</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <Button variant="outline" className="w-full text-base" onClick={handleGoogleSignIn} disabled={isSubmittingLogin || isSubmittingGoogle}>
                        {isSubmittingGoogle && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                        <GoogleIcon /> Google
                    </Button>
                    <Button variant="outline" className="w-full text-base" disabled={true}>
                         <LinkedInIcon /> LinkedIn
                    </Button>
                </div>
                 <p className="text-xs text-muted-foreground pt-2">
                Forgot your password?{' '}
                <Link href="#" className="underline hover:text-primary">
                    Reset it here
                </Link>
                </p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card className="shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{titlePrefix} Sign Up</CardTitle>
              <CardDescription>Create your {formType} account to get started.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...signupForm}>
                <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-6">
                  {renderSignupFields(signupForm)}
                  <Button type="submit" className="w-full text-base py-3" disabled={isSubmittingSignup || isSubmittingGoogle}>
                    {isSubmittingSignup && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                    {isSubmittingSignup ? 'Signing up...' : 'Sign Up'}
                  </Button>
                </form>
              </Form>
            </CardContent>
             <CardFooter className="flex flex-col space-y-4 pt-6">
                <div className="relative w-full">
                    <Separator />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">OR SIGN UP WITH</span>
                </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                    <Button variant="outline" className="w-full text-base" onClick={handleGoogleSignIn} disabled={isSubmittingSignup || isSubmittingGoogle}>
                         {isSubmittingGoogle && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                        <GoogleIcon /> Google
                    </Button>
                    <Button variant="outline" className="w-full text-base" disabled={true}>
                         <LinkedInIcon /> LinkedIn
                    </Button>
                </div>
                <p className="text-center text-xs text-muted-foreground pt-2">
                    By signing up, you agree to our{' '}
                    <Link href="/terms-of-service" className="underline hover:text-primary">
                    Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy-policy" className="underline hover:text-primary">
                    Privacy Policy
                    </Link>
                    .
                </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
