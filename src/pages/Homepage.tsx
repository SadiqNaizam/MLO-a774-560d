import React from 'react';
import PrimaryNavigation from '@/components/layout/PrimaryNavigation';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ExternalLink, Settings, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Homepage: React.FC = () => {
  console.log('Homepage loaded');
  const navigate = useNavigate();

  const features = [
    { title: "User Dashboard", description: "Manage your profile and settings.", link: "/dashboard", icon: <User className="h-8 w-8 text-blue-500" /> },
    { title: "Latest Updates", description: "Check out what's new in the application.", link: "#", icon: <ExternalLink className="h-8 w-8 text-green-500" /> },
    { title: "Settings", description: "Configure your application preferences.", link: "/dashboard", icon: <Settings className="h-8 w-8 text-purple-500" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <PrimaryNavigation />
      <ScrollArea className="flex-grow">
        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center py-12 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-700 dark:to-indigo-800 rounded-lg shadow-xl mb-12">
            <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-white dark:border-gray-800 shadow-lg">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop" alt="User Avatar" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome to MyApp!</h1>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">Your central hub for managing everything.</p>
            <Button size="lg" onClick={() => navigate('/dashboard')} className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
              Go to Dashboard
            </Button>
          </section>

          {/* Features Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-gray-200">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                        {feature.icon}
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button variant="outline" onClick={() => feature.link === "#" ? console.log("Feature link clicked") : navigate(feature.link)} className="w-full">
                      Explore
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </section>
          
          {/* Placeholder Content Section */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
                <CardDescription>Explore more sections of the application.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  This is your homepage. From here, you can navigate to various parts of the application using the navigation menu above or the quick links provided.
                  Feel free to customize this page with relevant information and components for your users.
                </p>
                <div className="flex space-x-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary">Quick Actions</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => navigate('/dashboard')}>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant="ghost" onClick={() => window.open('https://example.com/help', '_blank')}>Help Center</Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </ScrollArea>
      <Footer />
    </div>
  );
};

export default Homepage;