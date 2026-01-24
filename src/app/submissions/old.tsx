import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, ImageIcon, Mic, Video, ToyBrick, Box, ArrowRight, CheckCircle } from "lucide-react";
import { submissionCategories } from '@/lib/content';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link";

const submissionSteps = [
    "Choose the submission category that best fits your work.",
    "Ensure your file is in one of the accepted formats.",
    "Fill out our online submission form with your details and a project description.",
    "Hit submit and wait for a confirmation email from our team!",
]

const submissionFormats = [
    { icon: FileText, title: "Text" },
    { icon: ImageIcon, title: "Drawing" },
    { icon: ToyBrick, title: "Craft" },
    { icon: Mic, title: "Audio" },
    { icon: Video, title: "Video" },
    { icon: Box, title: "Mixed Media" },
]

export default function SubmissionsPage() {
    return (
      <div className="bg-background">
        <div className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-primary">
            <div className="container mx-auto px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
                        Submission Guidelines
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                        Ready to share your work? Follow these guidelines to prepare your submission for The Student Innovators Journal.
                    </p>
                </div>
            </div>
        </div>
        
        <div className="container mx-auto px-8 py-20">
          <Card className="p-8 md:p-12 mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-foreground font-heading mb-8">How to Submit</h2>
                    <div className="space-y-6">
                        {submissionSteps.map((step, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))]">
                                    {index + 1}
                                </div>
                                <p className="text-muted-foreground mt-2.5 text-lg">{step}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Button asChild size="lg" variant="secondary">
                          <Link href="/submissions/new">Start Your Submission <ArrowRight className="ml-2" /></Link>
                        </Button>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-foreground font-heading mb-8">Accepted Formats</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                        {submissionFormats.map(format => (
                            <Card key={format.title} className="flex flex-col items-center justify-center gap-3 p-4 bg-card hover:bg-primary/10 transition-colors hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_hsl(var(--primary))]">
                                <format.icon className="w-12 h-12 text-primary" />
                                <p className="font-semibold text-foreground text-base">{format.title}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
          </Card>

           <div>
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">Submission Categories</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        We welcome a wide range of projects. Find the perfect category for your work!
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                    {submissionCategories.map(category => (
                        <AccordionItem value={category.title} key={category.title}>
                           <AccordionTrigger className="p-6 text-xl font-heading font-semibold text-foreground hover:no-underline">
                             <div className="flex items-center gap-4">
                               <div className="bg-secondary/10 p-3 rounded-full">
                                <category.icon className="w-8 h-8 text-secondary" />
                               </div>
                               {category.title}
                             </div>
                           </AccordionTrigger>
                           <AccordionContent className="px-6 pb-6 text-muted-foreground text-base">
                             <p className="mb-4">{category.description}</p>
                             <ul className="space-y-2">
                                {category.details.map(detail => (
                                   <li key={detail} className="flex items-start gap-3">
                                     <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                                     <span>{detail}</span>
                                   </li>
                                ))}
                             </ul>
                           </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
      </div>
    );
}
