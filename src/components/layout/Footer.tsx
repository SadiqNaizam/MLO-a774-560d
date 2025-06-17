import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Package2 } from 'lucide-react'; // Example icons

const Footer: React.FC = () => {
  console.log("Rendering Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link to="/" className="flex items-center space-x-2">
            <Package2 className="h-6 w-6" />
            <span className="font-bold">MyApp</span>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} MyApp Inc. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
          <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link>
          <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
          <a
            href="https://github.com" // Replace with your actual link
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://twitter.com" // Replace with your actual link
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4 text-muted-foreground hover:text-foreground"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;