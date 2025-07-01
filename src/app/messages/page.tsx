
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Image from 'next/image';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Mail, Send, Lock, Search, CircleUser } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data - in a real app, this would come from an API
const mockConversations = [
  { id: 'convo1', name: 'Alice Wonderland', lastMessage: 'Yes, that sounds interesting! Could you tell me more?', unread: 2, avatar: 'https://placehold.co/40x40.png' },
  { id: 'convo2', name: 'Innovate Solutions HR', lastMessage: 'We received your application. We will be in touch.', unread: 0, avatar: 'https://placehold.co/40x40.png' },
  { id: 'convo3', name: 'Bob The Builder', lastMessage: 'Perfect, thank you!', unread: 0, avatar: 'https://placehold.co/40x40.png' },
];

const mockMessages = {
  convo1: [
    { id: 'msg1', sender: 'Alice Wonderland', text: 'Hi, I saw you viewed my profile. I\'m very interested in the Senior Frontend Developer role.' },
    { id: 'msg2', sender: 'Me', text: 'Hi Alice, thanks for reaching out. We were impressed with your experience with Next.js.' },
    { id: 'msg3', sender: 'Alice Wonderland', text: 'Yes, that sounds interesting! Could you tell me more?' },
  ],
  convo2: [
    { id: 'msg4', sender: 'Innovate Solutions HR', text: 'We received your application. We will be in touch.' },
  ],
  convo3: [
     { id: 'msg5', sender: 'Me', text: 'Hi Bob, are you available for a quick chat next week regarding the Full-Stack role?' },
     { id: 'msg6', sender: 'Bob The Builder', text: 'Perfect, thank you!' },
  ]
};

export default function MessagesPage() {
  const { currentUser, loading: authLoading } = useAuth();
  const router = useRouter();
  const [accessDenied, setAccessDenied] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(mockConversations[0]);

  useEffect(() => {
    if (!authLoading) {
      if (!currentUser) {
        router.push('/job-seekers/auth'); // Redirect to login
        setAccessDenied(true);
      }
    }
  }, [currentUser, authLoading, router]);

  if (authLoading) {
    return (
      <div className="container mx-auto py-12 text-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
        <p className="mt-4 text-muted-foreground text-lg">Loading Messages...</p>
      </div>
    );
  }

  if (accessDenied || !currentUser) {
    return (
      <div className="container mx-auto py-12 text-center">
        <Lock className="h-12 w-12 text-destructive mx-auto" />
        <p className="mt-4 text-muted-foreground text-lg">Access Denied. Please log in.</p>
      </div>
    );
  }

  return (
    <Card className="h-[calc(100vh-10rem)] w-full flex flex-col shadow-2xl rounded-xl">
      <CardHeader className="p-0">
        <div className="flex items-center p-4 border-b">
          <Mail className="h-6 w-6 mr-3 text-primary" />
          <h1 className="text-xl font-bold font-headline">Messaging</h1>
        </div>
      </CardHeader>
      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] flex-1 overflow-hidden">
        {/* Conversations List */}
        <div className="border-r flex flex-col">
          <div className="p-3 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-8" />
            </div>
          </div>
          <ScrollArea className="flex-1">
            {mockConversations.map(convo => (
              <button
                key={convo.id}
                className={cn(
                  "flex items-center gap-3 p-3 w-full text-left hover:bg-muted/50 transition-colors",
                  selectedConversation.id === convo.id && "bg-muted"
                )}
                onClick={() => setSelectedConversation(convo)}
              >
                <Avatar>
                  <AvatarImage src={convo.avatar} alt={convo.name} data-ai-hint="avatar person" />
                  <AvatarFallback>{convo.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1 truncate">
                  <p className="font-semibold text-sm">{convo.name}</p>
                  <p className="text-xs text-muted-foreground truncate">{convo.lastMessage}</p>
                </div>
                {convo.unread > 0 && (
                  <div className="w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                    {convo.unread}
                  </div>
                )}
              </button>
            ))}
          </ScrollArea>
        </div>

        {/* Chat Panel */}
        <div className="flex flex-col">
          <div className="p-4 border-b flex items-center gap-3">
             <Avatar>
                <AvatarImage src={selectedConversation.avatar} alt={selectedConversation.name} data-ai-hint="avatar person" />
                <AvatarFallback>{selectedConversation.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <h2 className="font-semibold">{selectedConversation.name}</h2>
          </div>
          <ScrollArea className="flex-1 p-4 bg-muted/20">
            <div className="space-y-4">
              {mockMessages[selectedConversation.id as keyof typeof mockMessages]?.map(msg => (
                <div key={msg.id} className={cn("flex items-end gap-2", msg.sender === 'Me' ? 'justify-end' : 'justify-start')}>
                   {msg.sender !== 'Me' && (
                     <Avatar className="h-8 w-8">
                       <AvatarImage src={selectedConversation.avatar} data-ai-hint="avatar person" />
                       <AvatarFallback>{selectedConversation.name.substring(0,2)}</AvatarFallback>
                     </Avatar>
                   )}
                  <div className={cn(
                      "rounded-lg p-3 max-w-xs md:max-w-md text-sm",
                      msg.sender === 'Me' ? 'bg-primary text-primary-foreground' : 'bg-background shadow-sm'
                    )}>
                    <p>{msg.text}</p>
                  </div>
                   {msg.sender === 'Me' && (
                     <Avatar className="h-8 w-8">
                        <AvatarImage src={currentUser.photoURL || undefined} data-ai-hint="avatar me" />
                        <AvatarFallback><CircleUser /></AvatarFallback>
                     </Avatar>
                   )}
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="p-4 border-t bg-background">
            <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Type a message..." className="flex-1" />
              <Button type="submit">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Card>
  );
}
