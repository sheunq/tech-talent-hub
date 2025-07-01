
'use client'; 

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Briefcase, Users, Building, Brain, Bell, Search, HomeIcon, LogOut, UserCircle, Newspaper, UsersRound, LayoutDashboard, GraduationCap, Lightbulb, Star, Mail } from 'lucide-react';
import { TekTunnelLogo } from '@/components/icons/TekTunnelLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useAuth } from '@/contexts/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const { currentUser, userRole, signOut, loading } = useAuth();
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getAvatarFallback = (email?: string | null) => {
    if (!email) return 'U';
    return email.substring(0, 2).toUpperCase();
  }

  let currentMainNavItems: { href: string; label: string }[] = [];
  let currentMobileNavItems: { href: string; label: string; icon: JSX.Element }[] = [];

  const baseMobileNavItems = [
    { href: '/', label: 'Home', icon: <HomeIcon className="h-5 w-5" /> },
    { href: '/opportunities', label: 'Opportunities', icon: <GraduationCap className="h-5 w-5" /> },
    { href: '/reviews', label: 'Reviews', icon: <Star className="h-5 w-5" /> },
    { href: '/blog', label: 'Blog', icon: <Newspaper className="h-5 w-5" /> },
  ];

  if (currentUser) {
    if (userRole === 'jobSeeker') {
      currentMainNavItems = [
        { href: '/job-seekers/dashboard', label: 'Dashboard' },
        { href: '/jobs/search', label: 'Find Jobs' },
        { href: '/messages', label: 'Messages' },
        { href: '/opportunities', label: 'Opportunities' },
        { href: '/ai-match', label: 'AI Match' },
      ];
      currentMobileNavItems = [
        ...baseMobileNavItems,
        { href: '/job-seekers/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
        { href: '/jobs/search', label: 'Find Jobs', icon: <Search className="h-5 w-5" /> },
        { href: '/messages', label: 'Messages', icon: <Mail className="h-5 w-5" /> },
        { href: '/ai-match', label: 'AI Job Match', icon: <Brain className="h-5 w-5" /> },
        { href: '/job-alerts', label: 'Job Alerts', icon: <Bell className="h-5 w-5" /> },
      ];
    } else if (userRole === 'employer') {
      currentMainNavItems = [
        { href: '/employers/dashboard', label: 'Dashboard' },
        { href: '/employers/find-talent', label: 'Find Talent' },
        { href: '/messages', label: 'Messages' },
        { href: '/employers/post-job', label: 'Post a Job' },
        { href: '/blog', label: 'Blog' },
      ];
      currentMobileNavItems = [
        ...baseMobileNavItems,
        { href: '/employers/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
        { href: '/employers/find-talent', label: 'Find Talent', icon: <UsersRound className="h-5 w-5" /> },
        { href: '/messages', label: 'Messages', icon: <Mail className="h-5 w-5" /> },
        { href: '/employers/post-job', label: 'Post a Job', icon: <Briefcase className="h-5 w-5" /> },
      ];
    } else { 
        currentMainNavItems = [
            { href: '/jobs/search', label: 'Find Jobs' },
            { href: '/opportunities', label: 'Opportunities' },
            { href: '/reviews', label: 'Reviews' },
            { href: '/blog', label: 'Blog' },
        ];
        currentMobileNavItems = [...baseMobileNavItems, { href: '/jobs/search', label: 'Find Jobs', icon: <Search className="h-5 w-5" /> }];
    }
  } else { // Guest
    currentMainNavItems = [
      { href: '/jobs/search', label: 'Find Jobs' },
      { href: '/opportunities', label: 'Opportunities' },
      { href: '/reviews', label: 'Reviews' },
      { href: '/employers/find-talent', label: 'Find Talent' },
      { href: '/blog', label: 'Blog' },
      { href: '/employers/post-job', label: 'Post a Job' },
    ];
    currentMobileNavItems = [ 
      { href: '/', label: 'Home', icon: <HomeIcon className="h-5 w-5" /> },
      { href: '/jobs/search', label: 'Find Jobs', icon: <Search className="h-5 w-5" /> },
      { href: '/opportunities', label: 'Opportunities', icon: <GraduationCap className="h-5 w-5" /> },
      { href: '/reviews', label: 'Reviews', icon: <Star className="h-5 w-5" /> },
      { href: '/employers/find-talent', label: 'Find Talent', icon: <UsersRound className="h-5 w-5" /> },
      { href: '/blog', label: 'Blog', icon: <Newspaper className="h-5 w-5" /> },
      { href: '/employers/post-job', label: 'Post a Job', icon: <Briefcase className="h-5 w-5" /> },
      { href: '/ai-match', label: 'AI Job Match', icon: <Brain className="h-5 w-5" /> },
      { href: '/job-alerts', label: 'Job Alerts', icon: <Bell className="h-5 w-5" /> },
    ];
  }

  const defaultLinkClass = "transition-colors text-foreground/60 hover:text-foreground/80";
  const activeLinkClass = "text-primary font-semibold";
  const defaultMobileLinkClass = "hover:bg-accent/80";
  const activeMobileLinkClass = "bg-accent text-accent-foreground";


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <TekTunnelLogo className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {currentMainNavItems.map((item) => {
            const isActive = isMounted && (pathname.startsWith(item.href) && item.href !== '/') || pathname === item.href;
            const linkClassName = isMounted 
              ? cn("transition-colors", isActive ? activeLinkClass : defaultLinkClass)
              : defaultLinkClass;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={linkClassName}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2 md:space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            {!loading && currentUser ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={currentUser.photoURL || undefined} alt={currentUser.displayName || currentUser.email || 'User'} />
                            <AvatarFallback>{getAvatarFallback(currentUser.email)}</AvatarFallback>
                        </Avatar>
                     </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                        <p className="font-medium">{currentUser.displayName || 'My Account'}</p>
                        <p className="text-xs text-muted-foreground font-normal truncate">{currentUser.email}</p>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {userRole === 'jobSeeker' && (
                        <>
                            <DropdownMenuItem asChild>
                                <Link href="/job-seekers/dashboard"><LayoutDashboard className="mr-2 h-4 w-4"/>Dashboard</Link>
                            </DropdownMenuItem>
                             <DropdownMenuItem asChild>
                                <Link href="/job-seekers/profile"><UserCircle className="mr-2 h-4 w-4"/>Profile</Link>
                            </DropdownMenuItem>
                        </>
                    )}
                     {userRole === 'employer' && (
                         <DropdownMenuItem asChild>
                            <Link href="/employers/dashboard"><LayoutDashboard className="mr-2 h-4 w-4"/>Dashboard</Link>
                        </DropdownMenuItem>
                     )}
                     <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={signOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : !loading ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">Login / Sign Up</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>Job Seekers</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                      <Link href="/job-seekers/auth">Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/job-seekers/auth?action=signup">Sign Up</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Employers</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                      <Link href="/employers/auth">Login</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/employers/auth?action=signup">Sign Up</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : null }
          </div>
          
          <div className="md:hidden">
            <ThemeToggle />
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[300px] p-4">
              <div className="mb-6">
                <Link href="/" className="flex items-center space-x-2">
                  <TekTunnelLogo className="h-7 w-auto" />
                </Link>
              </div>
              <nav className="flex flex-col space-y-2">
                {currentMobileNavItems.map((item) => {
                  const isActive = isMounted && (pathname.startsWith(item.href) && item.href !== '/') || pathname === item.href;
                  const mobileLinkClassName = isMounted
                    ? cn("flex items-center space-x-3 rounded-md p-3 text-sm font-medium", isActive ? activeMobileLinkClass : defaultMobileLinkClass)
                    : cn("flex items-center space-x-3 rounded-md p-3 text-sm font-medium", defaultMobileLinkClass);
                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={mobileLinkClassName}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    </SheetClose>
                  );
                })}
                 {!currentUser && !loading && ( 
                    <>
                      <SheetClose asChild>
                        <Link href="/job-seekers/auth" className={cn("flex items-center space-x-3 rounded-md p-3 text-sm font-medium", (isMounted && pathname.startsWith("/job-seekers/auth")) ? activeMobileLinkClass : defaultMobileLinkClass)}>
                            <Users className="h-5 w-5" /><span>Job Seeker Area</span>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="/employers/auth" className={cn("flex items-center space-x-3 rounded-md p-3 text-sm font-medium", (isMounted && pathname.startsWith("/employers/auth")) ? activeMobileLinkClass : defaultMobileLinkClass)}>
                            <Building className="h-5 w-5" /><span>Employer Area</span>
                        </Link>
                      </SheetClose>
                    </>
                 )}
                 <div className="pt-6 border-t mt-4">
                    {!loading && currentUser ? (
                      <>
                        <SheetClose asChild>
                           <div className="flex items-center space-x-3 rounded-md p-3 mb-2 bg-secondary/50">
                             <Avatar className="h-8 w-8">
                               <AvatarImage src={currentUser.photoURL || undefined} alt={currentUser.displayName || currentUser.email || 'User'} />
                               <AvatarFallback>{getAvatarFallback(currentUser.email)}</AvatarFallback>
                             </Avatar>
                             <span className="text-sm font-medium truncate">{currentUser.displayName || currentUser.email}</span>
                           </div>
                        </SheetClose>
                        <SheetClose asChild>
                          <Button onClick={signOut} className="w-full text-base py-3">
                             <LogOut className="mr-2 h-4 w-4" /> Logout
                          </Button>
                        </SheetClose>
                      </>
                    ) : !loading ? (
                      <>
                      <SheetClose asChild>
                        <Button asChild variant="outline" className="w-full mb-2 text-base py-3">
                          <Link href="/job-seekers/auth">Login</Link>
                        </Button>
                      </SheetClose>
                      <SheetClose asChild>
                        <Button asChild className="w-full text-base py-3">
                          <Link href="/job-seekers/auth?action=signup">Sign Up</Link>
                        </Button>
                      </SheetClose>
                      </>
                    ) : null}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
