import Link from 'next/link';
import { Card, CardTitle, CardDescription, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, PenTool, Lightbulb, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { submissionCategories, creativePrompts } from '@/lib/content';

const { placeholderImages } = placeholderData;
const heroImage = placeholderImages.find(p => p.hint.includes('doodle science'));


const features = [
  {
    title: 'Submit Your Work',
    description: 'Share your discoveries, inventions, and projects with the world.',
    href: '/submissions/new',
    icon: PenTool
  },
  {
    title: 'Explore Creative Prompts',
    description: 'Spark your next big idea with our monthly STEM themes.',
    href: '/prompts',
    icon: Lightbulb
  },
  {
    title: 'See the Showcase',
    description: 'Get inspired by the incredible work of your peers.',
    href: '/archives',
    icon: Rocket
  }
];


export default function Home() {
  return (
    <>
      <section className="w-full bg-background pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight font-heading">
                Welcome to The <span className="text-primary">Student Innovators</span> Journal!
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Where Young Minds Spark STEM Magic! Explore, create, and share your passion for science, technology, engineering, and math.
              </p>
          </div>
         
          <Card className="max-w-2xl mx-auto mt-12 p-6 bg-primary text-primary-foreground border-2 border-foreground shadow-[8px_8px_0px_black] -rotate-1 transition-transform hover:rotate-0">
             <h2 className="font-bold font-heading text-2xl">Current Monthly Theme:</h2>
             <p className="mt-2 text-xl text-primary-foreground/90">{creativePrompts[0].title}</p>
          </Card>

           <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10">
            <Button asChild size="lg" className="border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none">
                <Link href="/prompts">Explore This Month's Prompt <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none">
                <Link href="/submissions">Submission Guidelines</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-8">A Platform for Every Innovator</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {features.map((feature) => (
                      <Card key={feature.title} className="text-center border-2 border-foreground shadow-[5px_5px_0px_black] hover:shadow-[8px_8px_0px_black] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 rotate-[-1deg] hover:rotate-0">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
                                <feature.icon className="w-8 h-8 text-primary" />
                            </div>
                        </CardHeader>
                        <CardContent>
                          <CardTitle className="text-xl font-semibold text-foreground mb-2 font-heading">{feature.title}</CardTitle>
                          <Button variant="link" asChild className="mt-2 text-primary"><Link href={feature.href}>Learn More</Link></Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
              <div className="hidden lg:block self-center">
                 {heroImage && <Image 
                   src={heroImage.src}
                   alt={heroImage.alt}
                   width={heroImage.width}
                   height={heroImage.height}
                   className="rounded-lg border-2 border-foreground shadow-[8px_8px_0px_black] rotate-3"
                   data-ai-hint={heroImage.hint}
                  />}
              </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-background">
        <div className="container mx-auto px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">Find Your Category</h2>
                <p className="mt-4 text-lg text-muted-foreground">We welcome a wide range of projects and ideas. What will you create?</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {submissionCategories.map((category, index) => {
                  const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2'];
                  return (
                    <Link href="/submissions" key={category.title}>
                        <div className={`group flex flex-col items-center text-center gap-4 p-6 rounded-lg bg-card border-2 border-foreground shadow-[5px_5px_0px_black] hover:shadow-[8px_8px_0px_black] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 h-full ${rotations[index % 4]} hover:!rotate-0`}>
                            <div className="bg-secondary/20 p-5 rounded-full transition-colors">
                                <category.icon className="w-10 h-10 text-secondary-foreground" />
                            </div>
                            <h3 className="font-semibold text-foreground font-heading">{category.title}</h3>
                        </div>
                    </Link>
                )})}
            </div>
             <div className="text-center mt-16">
                <Button asChild size="lg" className="border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none">
                    <Link href="/submissions/new">Start Your Submission</Link>
                </Button>
            </div>
        </div>
      </section>
    </>
  );
}
