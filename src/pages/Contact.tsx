
import React, { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail } from 'lucide-react';
import IframeSection from '@/components/IframeSection';

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Minimalist - Contact';
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We've received your message and will respond shortly.",
      });
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Hero 
        title="Get in Touch"
        subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        hasScrollIndicator={true}
      />

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Contact Us</h2>
                <p className="text-primary/70 mb-8">
                  Have a question or want to work together? Fill out the form and we'll be in touch soon.
                </p>
                
                <Card className="p-6 shadow-soft bg-white mb-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Your name" 
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Your email address" 
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        placeholder="Subject of your message" 
                        value={formState.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Your message" 
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Card>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-4 text-primary">Our Information</h2>
                <p className="text-primary/70 mb-8">
                  We're based in San Francisco, but work with clients worldwide. Here's how you can reach us.
                </p>
                
                <Card className="p-6 shadow-soft bg-white mb-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full p-2 bg-secondary">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-primary">Address</h3>
                        <address className="not-italic text-primary/70 mt-1">
                          123 Design Street<br/>
                          San Francisco, CA 94107
                        </address>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-start gap-4">
                      <div className="rounded-full p-2 bg-secondary">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-primary">Phone</h3>
                        <p className="text-primary/70 mt-1">
                          <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                            +1 (555) 123-4567
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-start gap-4">
                      <div className="rounded-full p-2 bg-secondary">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-primary">Email</h3>
                        <p className="text-primary/70 mt-1">
                          <a href="mailto:hello@minimalist.com" className="hover:text-primary transition-colors">
                            hello@minimalist.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 shadow-soft bg-white">
                  <h3 className="font-medium text-primary mb-4">Office Hours</h3>
                  <ul className="space-y-2 text-primary/70">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IframeSection
        title="Find Us"
        description="Visit our office in San Francisco or contact us online."
        iframeSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.00155290868!2d-122.43913320216336!3d37.77059037518018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1690994129934!5m2!1sen!2sus"
        aspectRatio="4/3"
      />

      <Footer />
    </div>
  );
};

export default Contact;
