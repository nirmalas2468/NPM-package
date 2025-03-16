
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import IframeSection from '@/components/IframeSection';
import Footer from '@/components/Footer';
import { Layers, Paintbrush, Gauge, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Clean Design',
    description: 'Minimalist UI with a focus on readability and functionality, inspired by Apple\'s design principles.',
    icon: Paintbrush
  },
  {
    title: 'Responsive Layout',
    description: 'Perfectly optimized for all devices from mobile phones to desktop screens.',
    icon: Maximize
  },
  {
    title: 'Fast Performance',
    description: 'Optimized code and assets ensure lightning-fast loading times and smooth animations.',
    icon: Gauge
  },
  {
    title: 'Modular Components',
    description: 'Built with reusable, well-structured components for maximum flexibility and maintainability.',
    icon: Layers
  }
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Minimalist - Home';
  }, []);

  return (
    <div className="min-h-screen">
      <Hero 
        title="Simple. Beautiful. Functional."
        subtitle="A minimalist design template with precise attention to detail, focusing on form and function in perfect harmony."
      />

      {/* Features Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Thoughtful Features</h2>
            <p className="text-primary/70">Every element has been carefully considered for maximum impact with minimal distraction.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24 px-6 bg-secondary/50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Dedicated to Quality & Detail</h2>
                <p className="text-primary/70 mb-6">
                  Every pixel matters. We've crafted this interface with meticulous attention to spacing, typography, and visual hierarchy, following the principles of great design.
                </p>
                <div className="space-x-4">
                  <Button asChild className="rounded-full px-6">
                    <Link to="/components">Explore Components</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full px-6">
                    <Link to="/gallery">View Gallery</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <div className="aspect-video relative overflow-hidden rounded-lg shadow-elevation bg-white p-6 border animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 opacity-90"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-1 bg-primary/20 rounded-full mb-4"></div>
                    <div className="w-full h-8 bg-primary/10 rounded-md mb-3"></div>
                    <div className="w-3/4 h-4 bg-primary/10 rounded-md mb-6"></div>
                    <div className="flex space-x-3 mb-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-full h-24 bg-primary/5 rounded-md"></div>
                      ))}
                    </div>
                    <div className="w-1/3 h-10 bg-primary/20 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IframeSection
        title="Interactive Content"
        description="An embedded iframe showcasing external content while maintaining the design aesthetic of our site."
        iframeSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />

      <Footer />
    </div>
  );
};

export default Index;
