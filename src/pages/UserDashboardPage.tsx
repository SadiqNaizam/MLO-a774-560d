import React from 'react';
import PrimaryNavigation from '@/components/layout/PrimaryNavigation';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar'; // Custom Sidebar
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Edit3, Save, Settings, Bell, UserCircle } from 'lucide-react';

// Placeholder data
const recentActivities = [
  { id: '1', item: 'Profile Update', date: '2023-10-26', status: 'Completed' },
  { id: '2', item: 'New Order Placed', date: '2023-10-25', status: 'Processing' },
  { id: '3', item: 'Subscription Renewed', date: '2023-10-20', status: 'Active' },
];

const UserDashboardPage: React.FC = () => {
  console.log('UserDashboardPage loaded');
  // Dummy user data
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    bio: 'Frontend Developer passionate about creating intuitive user experiences.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PrimaryNavigation />
      <div className="flex flex-1">
        <Sidebar>
          {/* Custom content for sidebar specific to dashboard */}
          <nav className="flex flex-col space-y-1 px-2 py-4">
            <Button variant="ghost" className="w-full justify-start">
              <UserCircle className="mr-2 h-4 w-4" /> Overview
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="mr-2 h-4 w-4" /> Notifications
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-2 h-4 w-4" /> Account Settings
            </Button>
          </nav>
        </Sidebar>
        <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">User Dashboard</h1>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Profile</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="profile">Profile Settings</TabsTrigger>
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Welcome, {user.name}!</CardTitle>
                  <CardDescription>Here's a quick overview of your account.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="bg-blue-50 dark:bg-blue-900/30">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Projects</CardTitle>
                        <UserCircle className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground">Active projects</p>
                      </CardContent>
                    </Card>
                     <Card className="bg-green-50 dark:bg-green-900/30">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Tasks Due</CardTitle>
                        <Bell className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">5</div>
                        <p className="text-xs text-muted-foreground">Tasks due this week</p>
                      </CardContent>
                    </Card>
                     <Card className="bg-yellow-50 dark:bg-yellow-900/30">
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Notifications</CardTitle>
                        <Settings className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">3</div>
                        <p className="text-xs text-muted-foreground">Unread notifications</p>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    You can manage your profile, view recent activities, and update your settings from the tabs above.
                  </p>
                  <Button>Explore Features</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Settings</CardTitle>
                  <CardDescription>Update your personal information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src={user.avatarUrl} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" size="sm">Change Photo</Button>
                      <p className="text-xs text-muted-foreground mt-1">JPG, GIF or PNG. 1MB max.</p>
                    </div>
                  </div>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue={user.name} />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue={user.email} />
                    </div>
                     <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Input id="bio" type="text" defaultValue={user.bio} placeholder="Tell us a little about yourself" />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <Button variant="outline">Cancel</Button>
                        <Button type="submit">
                            <Save className="mr-2 h-4 w-4" /> Save Changes
                        </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>A log of your recent actions within the application.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Item</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentActivities.map((activity) => (
                        <TableRow key={activity.id}>
                          <TableCell className="font-medium">{activity.item}</TableCell>
                          <TableCell>{activity.date}</TableCell>
                          <TableCell>{activity.status}</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="icon">
                              <Edit3 className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboardPage;