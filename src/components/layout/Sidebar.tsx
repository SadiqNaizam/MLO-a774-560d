import React from 'react';
import { cn } from '@/lib/utils'; // For conditional class names
import { ScrollArea } from '@/components/ui/scroll-area'; // For scrollable content if needed

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // Add any specific props your sidebar might need
  // e.g., navigationItems, userRole, etc.
  children?: React.ReactNode; // To allow passing content into the sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ className, children, ...props }) => {
  console.log("Rendering Sidebar");

  return (
    <aside
      className={cn(
        "hidden md:flex md:flex-col md:w-64 lg:w-72 border-r bg-background space-y-4 py-4",
        className // Allows custom classes to be passed
      )}
      {...props}
    >
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Dashboard Menu
        </h2>
        {/* Example: Replace with actual navigation links or components */}
        <nav className="space-y-1">
          {/* Placeholder links - you'll replace these with <Link> or nav components */}
          <div className="p-2 hover:bg-muted rounded-md cursor-pointer">Overview</div>
          <div className="p-2 hover:bg-muted rounded-md cursor-pointer">Analytics</div>
          <div className="p-2 hover:bg-muted rounded-md cursor-pointer">Reports</div>
          <div className="p-2 hover:bg-muted rounded-md cursor-pointer">Settings</div>
        </nav>
      </div>
      <ScrollArea className="flex-1 px-3 py-2">
        {children ? (
          children
        ) : (
          <div className="px-4 text-sm text-muted-foreground">
            {/* Placeholder for additional sidebar content */}
            <p>Dynamic content can go here.</p>
          </div>
        )}
      </ScrollArea>
       <div className="px-3 py-2 mt-auto">
         {/* Footer section of sidebar, e.g. user info or app version */}
         <p className="px-4 text-xs text-muted-foreground">App Version 1.0.0</p>
       </div>
    </aside>
  );
};

export default Sidebar;