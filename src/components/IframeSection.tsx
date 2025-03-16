
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface IframeSectionProps {
  title: string;
  description: string;
  iframeSrc: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
}

const IframeSection: React.FC<IframeSectionProps> = ({
  title,
  description,
  iframeSrc,
  aspectRatio = "16/9"
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.getElementById('iframe-section');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <section 
      id="iframe-section"
      className="py-20 px-6 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4 text-primary",
            isInView ? "animate-slide-in" : "opacity-0"
          )}>
            {title}
          </h2>
          <p className={cn(
            "text-primary/70",
            isInView ? "animate-slide-in" : "opacity-0"
          )}
            style={{ animationDelay: '100ms' }}
          >
            {description}
          </p>
        </div>

        <div 
          className={cn(
            "relative overflow-hidden rounded-lg shadow-elevation border",
            "transition-all duration-700",
            isInView ? "animate-fade-in" : "opacity-0",
            "bg-white"
          )}
          style={{ 
            aspectRatio: aspectRatio,
            animationDelay: '200ms'
          }}
        >
          {isLoading && (
            <div className="absolute inset-0 bg-gray-100 animate-subtle-pulse flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            </div>
          )}
          
          {isInView && (
            <iframe
              src={iframeSrc}
              className="w-full h-full border-0"
              title="Content iframe"
              onLoad={handleIframeLoad}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default IframeSection;
