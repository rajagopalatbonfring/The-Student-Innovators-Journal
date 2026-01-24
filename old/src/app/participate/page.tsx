import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { participationContent } from "@/lib/content";
import { Award, BookOpen, FlaskConical, Check, FileText } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const sections = [
    {
        icon: FlaskConical,
        title: "Student Research Explorers",
        description: "Take a real-world scientific concept and turn it into something you can explain, explore, or replicate.",
        details: participationContent.researchExplorers.formats,
    },
    {
        icon: FileText,
        title: "Experiment to Article",
        description: "Turn your science experience into a mini-article. Share what you observed, learned, or discovered.",
        details: participationContent.experimentToArticle.details,
    },
    {
        icon: Award,
        title: "Recognition and Awards",
        description: "Every valid submission gets recognized for their effort and creativity.",
        details: participationContent.recognition.benefits,
    },
    {
        icon: BookOpen,
        title: "Monthly STEM Spark Newsletter",
        description: "The best submissions get a special mention in our newsletter and receive a top recognition award!",
        details: participationContent.newsletter.awards,
    }
]

export default function ParticipatePage() {
    return (
      <div className="bg-muted/50 py-16 sm:py-24">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">Participate & Get Recognized</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how you can contribute to the journal, share your work, and get recognized for your amazing ideas.
              </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map(section => (
                  <Card key={section.title} className="flex flex-col bg-card border-2 border-foreground shadow-[5px_5px_0px_black] hover:shadow-[8px_8px_0px_black] transition-all hover:-translate-y-px">
                      <CardHeader className="flex-row items-start gap-4">
                          <div className="bg-primary/10 p-4 rounded-full mt-1">
                            <section.icon className="w-8 h-8 text-primary" />
                          </div>
                          <div>
                              <CardTitle className="text-2xl font-heading text-foreground mb-2">{section.title}</CardTitle>
                              <p className="text-muted-foreground text-base">{section.description}</p>
                          </div>
                      </CardHeader>
                      {section.details.length > 0 && (
                          <CardContent className="flex-grow flex flex-col">
                            <ul className="space-y-3 flex-grow">
                                  {section.details.map(item => (
                                      <li key={item} className="flex items-start gap-3">
                                          <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                                          <span className="text-muted-foreground">{item}</span>
                                      </li>
                                  ))}
                            </ul>
                            {section.title === "Monthly STEM Spark Newsletter" && (
                                <Button variant="secondary" asChild className="mt-6 self-start border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none">
                                    <Link href="/newsletter">Subscribe Now</Link>
                                </Button>
                            )}
                          </CardContent>
                      )}
                  </Card>
              ))}
          </div>
           <div className="text-center mt-16">
                <Button asChild size="lg" className="border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none">
                    <Link href="/submissions">Go to Submission Guidelines</Link>
                </Button>
            </div>
        </div>
      </div>
    );
}
