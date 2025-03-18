
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Components', path: '/components' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo px-6 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-soft' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-semibold tracking-tight transition-opacity hover:opacity-90"
          >
            <span className={cn(
              'transition-colors duration-300',
              isScrolled ? 'text-primary' : 'text-primary'
            )}>
              Tranquil Pages
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    'relative py-2 text-sm font-medium transition-colors duration-300',
                    'hover:text-primary',
                    'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full',
                    location.pathname === item.path 
                      ? 'text-primary after:w-full' 
                      : isScrolled ? 'text-primary/80' : 'text-primary/90'
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md animate-fade-in">
          <ul className="container mx-auto py-4 px-6 space-y-3">
            {navItems.map((item, index) => (
              <li 
                key={item.name}
                className={`fade-in delay-${index * 100}`}
              >
                <Link
                  to={item.path}
                  className={cn(
                    'block py-2 text-lg font-medium transition-colors duration-200',
                    location.pathname === item.path 
                      ? 'text-primary' 
                      : 'text-primary/70 hover:text-primary'
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
