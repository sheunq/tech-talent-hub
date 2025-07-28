
'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, Loader2, AlertTriangle, RefreshCw } from "lucide-react";
import { format } from 'date-fns';
import { getAllRegisteredUsers, type SimpleUser } from '@/services/adminDashboardService';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '@/firebase/firebase'; // Assuming you have a client-side firebase config

export default function AdminUsersPage() {
  const [users, setUsers] = useState<SimpleUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchUsers = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const fetchedUsers = await getAllRegisteredUsers();
      setUsers(fetchedUsers);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setError(errorMessage);
      toast({
        title: "Error fetching users",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch to populate the list quickly
    fetchUsers();

    // The 'users' collection in Firestore is not a standard one for auth users.
    // This is a conceptual placeholder. To make this truly real-time,
    // a Cloud Function would need to sync Firebase Auth users to a 'users'
    // Firestore collection on user creation/deletion.
    // Since we don't have that collection, this listener will likely do nothing,
    // but it demonstrates the real-time pattern.
    const usersCollectionRef = collection(db, 'users_metadata_for_admin'); // A hypothetical collection
    
    const unsubscribe = onSnapshot(usersCollectionRef, 
        (snapshot) => {
            console.log("Real-time update from users collection. Re-fetching list from backend.");
            // Re-fetch the full list from the secure backend function when a change is detected.
            fetchUsers();
        },
        (err) => {
            console.warn("Could not listen to real-time user updates. This is expected if the collection doesn't exist. User list will not auto-update.", err.message);
        }
    );

    return () => unsubscribe();
  }, []);

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
                <Users className="h-8 w-8 text-primary" />
                <CardTitle className="font-headline text-2xl">User Management</CardTitle>
            </div>
            <CardDescription>View and manage user accounts. The list will refresh automatically on changes.</CardDescription>
          </div>
          <Button onClick={fetchUsers} disabled={isLoading} variant="outline">
            <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex justify-center items-center py-10">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="ml-4 text-muted-foreground">Loading users...</p>
          </div>
        ) : error ? (
          <div className="text-center py-10 bg-destructive/10 border border-destructive rounded-lg p-4">
            <AlertTriangle className="h-8 w-8 text-destructive mx-auto mb-2" />
            <p className="text-lg text-destructive font-semibold">Failed to Load Users</p>
            <p className="text-sm text-destructive/80 max-w-md mx-auto">{error}</p>
          </div>
        ) : (
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Date Created</TableHead>
                  <TableHead>Email Verified</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.uid}>
                    <TableCell className="font-medium">{user.email}</TableCell>
                    <TableCell>
                      <Badge variant={user.role === 'employer' ? 'secondary' : 'default'}>
                        {user.role || 'N/A'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {user.creationTime ? format(new Date(user.creationTime), 'PPP') : 'N/A'}
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.emailVerified ? 'default' : 'destructive'}>
                        {user.emailVerified ? 'Yes' : 'No'}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
