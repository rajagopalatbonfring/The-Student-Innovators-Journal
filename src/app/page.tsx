import Link from 'next/link';
import { Card, CardTitle, CardDescription, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, PenTool, Lightbulb, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { submissionCategories, creativePrompts } from '@/lib/content';

const { placeholderImages } = placeholderData;
const heroImage = placeholderImages.find(p => p.hint.includes('doodle science'));

export default function Home() {
  return (
    <>
      <section className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
                Welcome to The Student Innovators Journal!
              </h1>
              <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Where Young Minds Spark Big STEM Ideas!
              </p>
          </div>
         
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10">
            <Button asChild size="lg" className="text-lg bg-accent hover:bg-accent/90">
                <Link href="/submissions/new">Start Your Submission Now! <Rocket className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-background">
         <div className="container mx-auto px-8">
            <Card className="max-w-4xl mx-auto p-6 md:p-8 border-4 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))] bg-[#B5E61D]">
                <h2 className="font-bold font-heading text-3xl md:text-4xl text-foreground text-center">Current Monthly Theme:</h2>
                <p className="mt-2 text-2xl md:text-3xl text-center font-semibold text-foreground">{creativePrompts[0].title}</p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <Button asChild size="lg" variant="default" className="text-lg bg-accent hover:bg-accent/90">
                        <Link href="/submissions/new">Submit Your Idea Now! <Rocket className="ml-2" /></Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-background hover:bg-background/80">
                        <Link href="/prompts">Explore Prompts</Link>
                    </Button>
                </div>
            </Card>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-background">
        <div className="container mx-auto px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading">A Platform for Every Innovator</h2>
                <p className="mt-4 text-lg text-muted-foreground">We welcome a wide range of projects and ideas. What will you create?</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                {submissionCategories.map((category, index) => {
                  const rotationClass = index % 2 === 0 ? '-rotate-2' : 'rotate-2';
                  return (
                    <Link href="/submissions" key={category.title}>
                        <div className={`group flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-card border-2 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:border-primary transition-all duration-300 h-full hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_hsl(var(--primary))] ${rotationClass} hover:rotate-0`}>
                            <div className="bg-secondary/10 p-5 rounded-full transition-colors">
                                <category.icon className="w-12 h-12 text-secondary" />
                            </div>
                            <h3 className="font-bold text-2xl text-foreground font-heading">{category.title}</h3>
                            <p className="text-base text-muted-foreground">{category.description}</p>
                             <Button variant="link" className="mt-2 font-bold text-primary">Submit in This Category <ArrowRight className="ml-2" /></Button>
                        </div>
                    </Link>
                )})}
            </div>
             <div className="text-center mt-24">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-xl py-8 px-10">
                    <Link href="/submissions/new">Ready to Share Your Genius?</Link>
                </Button>
            </div>
        </div>
      </section>
    </>
  );
}
