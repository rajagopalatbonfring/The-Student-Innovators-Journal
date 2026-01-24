import { journalYears } from '@/lib/content';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Calendar, BookOpen, Layers, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';


export default function ArchivesPage() {
  return (
    <div className="bg-background">
        <div className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-primary">
            <div className="container mx-auto px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
                        Archives: Past Sparks of Genius
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                        Explore past monthly themes, amazing submissions, and shining stars from every year! Every great idea inspires the next.
                    </p>
                </div>
            </div>
        </div>
      <section className='relative'>
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 2px, transparent 2px)', backgroundSize: '40px 40px'}}></div>
        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="max-w-5xl mx-auto">
            <Accordion type="multiple" className="w-full space-y-8">
              {journalYears.map((yearData) => {
                const yearImage = placeholderData.placeholderImages.find(p => p.hint.includes('doodle science'));

                return (
                <AccordionItem value={`year-${yearData.year}`} key={yearData.year}>
                  <AccordionTrigger className="p-6 text-3xl font-heading font-semibold text-foreground hover:no-underline">
                    <div className="flex items-center gap-4">
                      <Calendar className="w-10 h-10 text-primary" />
                      <span>Year {yearData.year}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-6 pt-0">
                    <div className="grid grid-cols-1 gap-10">
                      {yearData.issues.map((issue) => {
                        const issueImage = placeholderData.placeholderImages.find(p => p.hint.includes(issue.coverHint)) || yearImage;
                        
                        return (
                        <div key={issue.issue} className="bg-card rounded-xl border-2 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] overflow-hidden">
                          <div className="p-6 grid md:grid-cols-3 gap-6 items-center">
                            <div className="md:col-span-1 rounded-lg overflow-hidden border-2 border-foreground">
                              {issueImage && <Image 
                                src={issueImage.src}
                                alt={issue.title}
                                width={issueImage.width}
                                height={issueImage.height}
                                className="w-full h-full object-cover"
                                data-ai-hint={issue.coverHint}
                              />}
                            </div>
                            <div className="md:col-span-2">
                              <span className="font-bold text-sm text-secondary-foreground bg-secondary px-3 py-1 rounded-full mb-2 inline-block">{issue.date}</span>
                              <h3 className="font-heading text-2xl font-bold text-primary mb-2">{`Issue ${issue.issue}: ${issue.title}`}</h3>
                                <div className="space-y-2 mt-4">
                                  {issue.volumes.map(volume => (
                                    <div key={volume.title} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                                      <div className="bg-primary/10 p-2 rounded-full mt-1">
                                        <volume.icon className="w-6 h-6 text-primary"/>
                                      </div>
                                      <div>
                                        <h4 className="font-heading text-lg font-semibold text-foreground">{volume.title}</h4>
                                        <ul className="mt-2 space-y-1">
                                          {volume.articles.map(article => (
                                            <li key={article.slug}>
                                              <Link href={`/articles/${article.slug}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary hover:underline group">
                                                  <FileText className="w-4 h-4" />
                                                  <span>{article.title} - <span className="text-xs">{article.author}</span></span>
                                                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"/>
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                            </div>
                          </div>
                        </div>
                      )})}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )})}
            </Accordion>
          </div>

          <div className="text-center mt-24">
            <div className="bg-gradient-to-r from-secondary to-primary p-10 rounded-xl border-2 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] text-primary-foreground">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Inspired by the Past? Create the Future!</h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">The next great idea could be yours. What will you share with the world?</p>
              <Button size="lg" asChild className="text-xl py-8 px-10 bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/submissions/new">Start Your Submission Now!</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
