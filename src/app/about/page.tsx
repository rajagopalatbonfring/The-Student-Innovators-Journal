import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Rocket, Lightbulb, CheckCircle } from "lucide-react";
import Image from "next/image";
import placeholderData from '@/lib/placeholder-images.json';
import { Button } from "@/components/ui/button";
import Link from "next/link";

const aboutImage = placeholderData.placeholderImages.find(p => p.hint.includes('doodle team'));

const howItWorksSteps = [
    {
        step: 1,
        title: "Choose Your Theme",
        description: "Explore our fun monthly prompts and find a category that sparks your interest.",
        color: "bg-accent text-accent-foreground",
    },
    {
        step: 2,
        title: "Create & Submit",
        description: "Build, write, or design your project. Then, upload it through our easy submission form.",
        color: "bg-secondary text-secondary-foreground",
    },
    {
        step: 3,
        title: "Get Recognized!",
        description: "Receive a certificate, get featured on our showcase wall, and inspire other students!",
        color: "bg-primary text-primary-foreground",
    }
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-8 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
                    About The Student Innovators Journal
                </h1>
                <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                    Empowering Young Minds to Explore, Create, and Share STEM Magic!
                </p>
            </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 py-20">
        <Card className="p-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-foreground/90">
                  <h2 className="font-heading text-3xl font-bold text-secondary">Our Story</h2>
                  <p>
                  TSIJ is a safe, fun space for students to turn their curiosity into creative STEM projects. We believe every child is a natural innovator — we just give them the prompts, encouragement, and spotlight to shine!
                  </p>
                  <p>
                  From first experiments to complex engineering projects, TSIJ celebrates the spirit of inquiry and the joy of discovery at every level. Join us in building a community of future leaders and problem-solvers who will shape tomorrow, today.
                  </p>
              </div>
              <div>
                {aboutImage && <Image 
                    src={aboutImage.src}
                    alt={aboutImage.alt}
                    width={aboutImage.width}
                    height={aboutImage.height}
                    className="rounded-lg border-2 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))]"
                    data-ai-hint={aboutImage.hint}
                    />}
              </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card>
                <CardHeader className="flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                       <Lightbulb className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-foreground font-heading">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-base">To encourage STEM creativity and critical thinking in students aged 8-15 through fun, accessible prompts and a platform to share their work with the world.</p>
                </CardContent>
            </Card>
            <Card className="border-secondary shadow-[8px_8px_0px_0px_hsl(var(--secondary))]">
                <CardHeader className="flex-row items-center gap-4">
                    <div className="bg-secondary/10 p-3 rounded-full">
                       <Rocket className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl text-foreground font-heading">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground text-base">To empower every student with the confidence and skills to become an innovator, problem-solver, and a future leader in the STEM fields.</p>
                </CardContent>
            </Card>
        </div>

        <div className="text-center mt-24">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-12">
                How to Join the Adventure!
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
                {howItWorksSteps.map((step) => (
                    <div key={step.step} className="flex flex-col items-center gap-4">
                        <div className={`flex-shrink-0 h-20 w-20 rounded-full flex items-center justify-center font-bold text-5xl font-heading border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] ${step.color}`}>
                            {step.step}
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-primary">{step.title}</h3>
                        <p className="text-muted-foreground text-center">{step.description}</p>
                    </div>
                ))}
            </div>
            <div className="mt-16">
                <Button size="lg" asChild className="text-xl py-8 px-10">
                    <Link href="/submissions/new">Ready to Spark Your Genius?</Link>
                </Button>
            </div>
        </div>
      </div>
    </div>
  );
}
