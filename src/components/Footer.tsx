
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-semibold tracking-tight mb-4 block">
              Minimalist
            </Link>
            <p className="text-primary-foreground/70 max-w-md mt-2">
              A beautiful, minimal design focused on simplicity and function. 
              Every element has been carefully placed for optimal user experience.
            </p>
          </div>
          
          {/* Links Section */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">Home</Link></li>
              <li><Link to="/components" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">Components</Link></li>
              <li><Link to="/gallery" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">Gallery</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact & Social Section */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">Get in Touch</h3>
            <address className="not-italic text-primary-foreground/70">
              <p>hello@minimalist.com</p>
              <p className="mt-2">123 Design Street</p>
              <p>San Francisco, CA 94107</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm">
            © {currentYear} Minimalist. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-primary-foreground/70">
            Crafted with precision
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
