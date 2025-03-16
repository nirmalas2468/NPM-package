
import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle: string;
  hasScrollIndicator?: boolean;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  hasScrollIndicator = true 
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
        scrollRef.current.style.opacity = `${1 - scrollY * 0.003}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at top right, rgba(240, 240, 245, 0.8), transparent 70%), radial-gradient(circle at bottom left, rgba(240, 242, 250, 0.8), transparent 70%)'
        }}
      />
      
      <div 
        ref={scrollRef}
        className="container mx-auto px-6 z-10 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight tracking-tight text-primary animate-slide-in">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-primary/80 max-w-2xl mx-auto animate-slide-in" style={{ animationDelay: '200ms' }}>
            {subtitle}
          </p>
        </div>
      </div>

      {hasScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <button
            onClick={handleScrollClick}
            className="p-2 text-primary/70 hover:text-primary transition-colors duration-300"
            aria-label="Scroll down"
          >
            <ArrowDownCircle size={36} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;
