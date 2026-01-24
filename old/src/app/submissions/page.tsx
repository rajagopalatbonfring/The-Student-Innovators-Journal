import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
      <div className="bg-muted/50">
        <div className="container mx-auto px-8 py-16 sm:py-24">
          <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">Submission Guidelines</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to share your work? Follow these guidelines to prepare your submission for The Student Innovators Journal.
              </p>
          </div>

          <Card className="p-8 md:p-12 mb-16 bg-card border-2 border-foreground shadow-[8px_8px_0px_black]">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-foreground font-heading mb-6">How to Submit</h2>
                    <div className="space-y-6">
                        {submissionSteps.map((step, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="flex-shrink-0 bg-primary text-primary-foreground h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">
                                    {index + 1}
                                </div>
                                <p className="text-muted-foreground mt-1.5 text-base">{step}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10">
                        <Button asChild size="lg" className="bg-secondary text-secondary-foreground border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none">
                          <Link href="/submissions/new">Start Your Submission <ArrowRight className="ml-2" /></Link>
                        </Button>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold text-foreground font-heading mb-6">Accepted Formats</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
                        {submissionFormats.map(format => (
                            <div key={format.title} className="flex flex-col items-center gap-3 p-4 rounded-lg bg-muted hover:bg-accent transition-colors border-2 border-foreground">
                                <format.icon className="w-10 h-10 text-primary" />
                                <p className="font-semibold text-foreground text-sm">{format.title}</p>
                            </div>
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
                           <AccordionTrigger className="p-6 text-lg font-heading font-semibold text-foreground hover:no-underline">
                             <div className="flex items-center gap-4">
                               <category.icon className="w-8 h-8 text-secondary" />
                               {category.title}
                             </div>
                           </AccordionTrigger>
                           <AccordionContent className="px-6 pb-6 text-muted-foreground">
                             <p className="mb-4">{category.description}</p>
                             <ul className="space-y-2">
                                {category.details.map(detail => (
                                   <li key={detail} className="flex items-start gap-2">
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
