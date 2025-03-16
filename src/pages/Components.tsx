
import React, { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';

const Components = () => {
  const { toast } = useToast();
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Minimalist - Components';
    
    // Simulate progress increasing over time
    const timer = setTimeout(() => setProgress(66), 1000);
    const timer2 = setTimeout(() => setProgress(100), 2000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Hero 
        title="UI Components"
        subtitle="Explore the beautifully crafted interface elements that make up this minimal design system."
        hasScrollIndicator={true}
      />

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <Tabs defaultValue="buttons" className="w-full">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-6 text-primary">Component Library</h2>
              <p className="text-primary/70 max-w-2xl mb-8">
                A collection of meticulously designed UI elements that form our design system. Each component balances 
                form and function, with careful attention to spacing, typography, and interaction states.
              </p>
              <TabsList className="space-x-2">
                <TabsTrigger value="buttons">Buttons</TabsTrigger>
                <TabsTrigger value="cards">Cards</TabsTrigger>
                <TabsTrigger value="inputs">Inputs</TabsTrigger>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
                <TabsTrigger value="dialogs">Dialogs</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="buttons" className="space-y-10">
              <Card>
                <CardHeader>
                  <CardTitle>Button Variations</CardTitle>
                  <CardDescription>
                    Primary, secondary, and outline button styles with various states.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Button Styles</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button>Primary Button</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link Style</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Button Sizes</h3>
                    <div className="flex flex-wrap items-center gap-4">
                      <Button size="sm">Small</Button>
                      <Button>Default</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Button States</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button disabled>Disabled</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button onClick={() => toast({ title: "Button Clicked", description: "The button was clicked successfully." })}>
                        Show Toast
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cards" className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Simple Card</CardTitle>
                    <CardDescription>Basic card with header and content</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Cards provide a flexible container for content with a consistent style.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Interactive Card</CardTitle>
                    <CardDescription>Card with interactive elements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>This card contains interactive elements and actions.</p>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Accept terms
                      </label>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost">Cancel</Button>
                    <Button>Save</Button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-0">
                    <div className="flex items-center gap-2">
                      <Badge>New</Badge>
                      <Badge variant="outline">Featured</Badge>
                    </div>
                    <CardTitle className="mt-3">Card with Badges</CardTitle>
                    <CardDescription>Using badges and other elements</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p>Combine different components to create rich card interfaces.</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="inputs" className="space-y-10">
              <Card>
                <CardHeader>
                  <CardTitle>Form Elements</CardTitle>
                  <CardDescription>Input fields, selects, and other form controls</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Enter your message" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="development">Development</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-4">
                      <Label htmlFor="slider">Range Slider</Label>
                      <Slider defaultValue={[50]} max={100} step={1} />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="toggle">Toggle Switch</Label>
                        <Switch id="toggle" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms2" />
                        <label
                          htmlFor="terms2"
                          className="text-sm font-medium leading-none"
                        >
                          Accept terms and conditions
                        </label>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">Submit Form</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="feedback" className="space-y-10">
              <Card>
                <CardHeader>
                  <CardTitle>Feedback Components</CardTitle>
                  <CardDescription>Elements for user feedback and status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Progress Indicators</h3>
                    <Progress value={progress} className="w-full h-2" />
                    <p className="text-sm text-muted-foreground">Loading: {progress}%</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Status Badges</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge>New</Badge>
                      <Badge variant="secondary">Updated</Badge>
                      <Badge variant="outline">Neutral</Badge>
                      <Badge variant="destructive">Error</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Avatar & Identity</h3>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Cameron Williamson</p>
                        <p className="text-xs text-muted-foreground">cameron@example.com</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Separators</h3>
                    <div className="space-y-4">
                      <Separator />
                      <div className="flex items-center">
                        <div className="flex-1 h-px bg-border"></div>
                        <span className="px-3 text-xs text-muted-foreground">OR</span>
                        <div className="flex-1 h-px bg-border"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dialogs" className="space-y-10">
              <Card>
                <CardHeader>
                  <CardTitle>Dialog Components</CardTitle>
                  <CardDescription>Modal dialogs, popovers, and other overlay elements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Standard Dialog</h3>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Open Dialog</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Standard Dialog</DialogTitle>
                          <DialogDescription>
                            This is a standard dialog for common interactions.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <p>Dialogs appear over the page content and require user interaction.</p>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Alert Dialog</h3>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">Delete Item</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete
                            the selected item and remove it from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Popover</h3>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline">Show Popover</Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80">
                        <div className="space-y-4">
                          <h4 className="font-medium leading-none">Dimensions</h4>
                          <p className="text-sm text-muted-foreground">
                            Popovers are lightweight overlays for temporary content.
                          </p>
                          <div className="flex items-center gap-2">
                            <Button size="sm">Action</Button>
                            <Button size="sm" variant="outline">Cancel</Button>
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Components;
