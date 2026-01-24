import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Rocket, Lightbulb } from "lucide-react";
import Image from "next/image";
import placeholderData from '@/lib/placeholder-images.json';

const aboutImage = placeholderData.placeholderImages.find(p => p.hint.includes('doodle team'));


export default function AboutPage() {
  return (
    <div className="bg-background">
      <div className="bg-muted/50">
        <div className="container mx-auto px-4 sm:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
            About <span className="text-primary">The Student Innovators Journal</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Fostering the next generation of scientists, engineers, and big thinkers.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-8 py-20">
        <Card className="p-8 border-2 border-foreground shadow-[8px_8px_0px_black] bg-card">
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-muted-foreground">
                  <h2 className="font-heading text-3xl font-bold text-primary">Our Story</h2>
                  <p>
                  The Student Innovators Journal (TSIJ) was born from a simple idea: to create a vibrant, supportive space where young minds in STEM can shine. We believe that every student has the potential to be an innovator, and our mission is to provide a premier platform to showcase their creativity and intellectual curiosity.
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
                    className="rounded-lg border-2 border-foreground"
                    data-ai-hint={aboutImage.hint}
                    />}
              </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="bg-card border-2 border-foreground shadow-[5px_5px_0px_black]">
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
            <Card className="bg-card border-2 border-foreground shadow-[5px_5px_0px_black]">
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
      </div>
    </div>
  );
}
