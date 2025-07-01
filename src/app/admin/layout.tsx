
'use client';

import type { ReactNode } from 'react';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
} from '@/components/ui/sidebar';
import { TekTunnelLogo } from '@/components/icons/TekTunnelLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LayoutDashboard, Users, Building2, ClipboardCheck, FileText, BarChart3, Settings, LogOut, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';


const adminNavItems = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" /> },
  { href: '/admin/users', label: 'Users', icon: <Users className="h-5 w-5" /> },
  { href: '/admin/companies', label: 'Companies', icon: <Building2 className="h-5 w-5" /> },
  { href: '/admin/jobs/approvals', label: 'Job Posts', icon: <ClipboardCheck className="h-5 w-5" /> },
  { href: '/admin/content', label: 'Content Mgt', icon: <FileText className="h-5 w-5" /> },
  { href: '/admin/reports', label: 'Reports', icon: <BarChart3 className="h-5 w-5" /> },
  { href: '/admin/settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen bg-background text-foreground">
        <Sidebar collapsible="icon" className="border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
          <SidebarHeader className="p-3 h-16 flex items-center">
            <Link href="/admin/dashboard" className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center w-full">
              <TekTunnelLogo className="h-7 w-auto text-sidebar-primary" />
              <span className="font-bold text-lg text-sidebar-primary group-data-[collapsible=icon]:hidden">Admin</span>
            </Link>
          </SidebarHeader>
          <SidebarContent className="flex-1 overflow-y-auto p-2">
            <SidebarMenu>
              {adminNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href || (item.href !== '/admin/dashboard' && pathname.startsWith(item.href))}
                    tooltip={{ children: item.label, side: 'right', align: 'center' }}
                    className="justify-start"
                  >
                    <Link href={item.href} className="flex items-center w-full">
                      {React.cloneElement(item.icon, { className: cn("h-5 w-5", pathname.startsWith(item.href) ? "text-sidebar-primary-foreground" : "text-sidebar-foreground/70 group-hover/menu-item:text-sidebar-accent-foreground") })}
                      <span className="ml-3 group-data-[collapsible=icon]:hidden">{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-2 border-t border-sidebar-border">
             <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip={{ children: 'Logout', side: 'right', align: 'center' }} className="justify-start">
                        <Link href="/admin/auth" className="flex items-center w-full">
                            <LogOut className="h-5 w-5 text-sidebar-foreground/70 group-hover/menu-item:text-sidebar-accent-foreground" />
                            <span className="ml-3 group-data-[collapsible=icon]:hidden">Logout</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip={{ children: 'View Site', side: 'right', align: 'center' }} className="justify-start">
                        <Link href="/" target="_blank" className="flex items-center w-full">
                            <ExternalLink className="h-5 w-5 text-sidebar-foreground/70 group-hover/menu-item:text-sidebar-accent-foreground" />
                            <span className="ml-3 group-data-[collapsible=icon]:hidden">View Site</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
             </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset className="flex-1 flex flex-col bg-muted/30">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6 shadow-sm">
            <SidebarTrigger className="md:hidden shrink-0" /> {}
            <div className="flex-1">
                <h1 className="text-xl font-semibold font-headline">
                    {adminNavItems.find(item => pathname.startsWith(item.href))?.label || 'Admin'}
                </h1>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <ThemeToggle />
              {/* Admin user avatar/dropdown can go here */}
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6 overflow-auto">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
