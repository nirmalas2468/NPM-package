
import React, { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: 'design' | 'architecture' | 'product';
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4',
    title: 'Tranquil Pages Interior',
    category: 'architecture'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    title: 'Product Showcase',
    category: 'product'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91',
    title: 'Simple Typography',
    category: 'design'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1554995207-c18c203602cb',
    title: 'Modern Architecture',
    category: 'architecture'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
    title: 'Clean Interface',
    category: 'design'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
    title: 'Premium Product',
    category: 'product'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1555421689-491a97ff2040',
    title: 'Minimalism',
    category: 'architecture'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1634973357973-f2ed2657db3c',
    title: 'Elegant Design',
    category: 'design'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b',
    title: 'Apple Product',
    category: 'product'
  }
];

const Gallery = () => {
  const [loadedImages, setLoadedImages] = useState<number[]>([]);
  const [selectedTab, setSelectedTab] = useState('all');
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Tranquil Pages - Gallery';
  }, []);

  const handleImageLoaded = (imageId: number) => {
    setLoadedImages(prev => [...prev, imageId]);
  };

  const handleImageClick = (image: GalleryImage) => {
    toast({
      title: image.title,
      description: `Category: ${image.category}`,
    });
  };

  const filteredImages = selectedTab === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedTab);

  return (
    <div className="min-h-screen">
      <Hero 
        title="Image Gallery"
        subtitle="A collection of beautiful minimalist imagery showcasing our design aesthetic."
        hasScrollIndicator={true}
      />

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Curated Collection</h2>
            <p className="text-primary/70">
              Browse our carefully selected gallery of minimalist imagery that embodies our design philosophy.
            </p>
            
            <Tabs 
              value={selectedTab} 
              onValueChange={setSelectedTab}
              className="mt-8"
            >
              <TabsList className="mx-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="architecture">Architecture</TabsTrigger>
                <TabsTrigger value="product">Product</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-elevation"
                onClick={() => handleImageClick(image)}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <AspectRatio ratio={16/9}>
                      <div className="absolute inset-0 bg-gray-100 animate-subtle-pulse"></div>
                      <img
                        src={image.url}
                        alt={image.title}
                        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                          loadedImages.includes(image.id) ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={() => handleImageLoaded(image.id)}
                        loading="lazy"
                      />
                    </AspectRatio>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="font-medium text-lg">{image.title}</p>
                        <p className="text-sm opacity-80 capitalize">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
