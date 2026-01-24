import { journalYears } from '@/lib/content';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Calendar, BookOpen, Layers, FileText } from 'lucide-react';
import Link from 'next/link';

export default function ArchivesPage() {
  return (
    <div className="bg-muted/50 py-16 sm:py-24">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
            Journal Archives
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore past issues of The Student Innovators Journal and get inspired by our amazing community of creators.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="multiple" className="w-full space-y-6">
            {journalYears.map((yearData) => (
              <AccordionItem value={`year-${yearData.year}`} key={yearData.year} className="bg-card border-2 border-foreground shadow-[8px_8px_0px_black]">
                <AccordionTrigger className="p-6 text-2xl font-heading font-semibold text-foreground hover:no-underline">
                  <div className="flex items-center gap-4">
                    <Calendar className="w-8 h-8 text-primary" />
                    <span>Year {yearData.year}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <Accordion type="multiple" className="space-y-4 border-l-2 border-border pl-6">
                    {yearData.issues.map((issue) => (
                      <AccordionItem value={`issue-${issue.issue}`} key={issue.issue} className="border-b-0">
                        <AccordionTrigger className="text-xl font-heading text-primary hover:no-underline py-2">
                           <div className="flex items-center gap-3">
                                <BookOpen className="w-6 h-6" />
                                <span>{`Issue ${issue.issue} (${issue.date}): ${issue.title}`}</span>
                           </div>
                        </AccordionTrigger>
                        <AccordionContent className="pb-2 pt-2">
                          <Accordion type="single" collapsible className="space-y-2">
                            {issue.volumes.map((volume) => (
                              <AccordionItem value={volume.title} key={volume.title} className="border-2 border-foreground/50 rounded-lg bg-muted/50">
                                <AccordionTrigger className="px-4 py-3 text-base font-semibold text-foreground hover:no-underline">
                                  <div className="flex items-center gap-3">
                                     <volume.icon className="w-5 h-5 text-secondary" />
                                     <span>{volume.title}</span>
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-4">
                                  <ul className="space-y-2 pt-2 border-t border-border">
                                    {volume.articles.map((article) => (
                                      <li key={article.slug} className="flex items-center gap-2">
                                         <FileText className="w-4 h-4 text-muted-foreground"/>
                                         <Link href={`/articles/${article.slug}`} className="text-muted-foreground hover:text-primary hover:underline">
                                            {article.title} - <span className="text-xs">{article.author}</span>
                                         </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
