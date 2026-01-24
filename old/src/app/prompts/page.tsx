import { creativePrompts } from '@/lib/content';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';

const { placeholderImages } = placeholderData;

export default function CreativePromptsPage() {
  const currentTheme = creativePrompts[0];
  const otherThemes = creativePrompts.slice(1);
  const currentThemeImage = placeholderImages.find(p => p.hint.includes(currentTheme.hint.toLowerCase()));


  return (
    <div className="bg-muted/50 py-16 sm:py-24">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">Creative Prompts</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Spark your next big idea with our monthly themes! Explore, experiment, and create something amazing.
          </p>
        </div>

        {/* Current Theme */}
        <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground font-heading mb-8">This Month's Theme</h2>
            <Card className="grid md:grid-cols-2 items-center gap-8 p-8 bg-primary shadow-xl border-2 border-foreground">
                <div>
                   {currentThemeImage && <Image
                        src={currentThemeImage.src}
                        alt={currentThemeImage.alt}
                        width={currentThemeImage.width}
                        height={currentThemeImage.height}
                        className="rounded-lg shadow-lg object-cover w-full h-full border-2 border-foreground"
                        data-ai-hint={currentThemeImage.hint}
                    />}
                </div>
                <div className="text-primary-foreground">
                    <CardHeader>
                        <span className="text-sm font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full w-fit mb-2">{currentTheme.tag}</span>
                        <CardTitle className="text-4xl font-bold font-heading">{currentTheme.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg mb-6 text-primary-foreground/90">{currentTheme.description}</p>
                        <Button asChild size="lg" className="bg-secondary text-secondary-foreground border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none">
                            <Link href="/submissions/new">Submit to this Prompt <ArrowRight className="ml-2"/></Link>
                        </Button>
                    </CardContent>
                </div>
            </Card>
        </div>
        
        {/* Other Themes */}
        <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground font-heading mb-8">Explore Past Themes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {otherThemes.map((prompt) => {
                    const image = placeholderImages.find(p => p.hint.includes(prompt.hint.toLowerCase()));
                    return (
                    <Card key={prompt.title} className="flex flex-col group overflow-hidden transition-all bg-card border-2 border-foreground shadow-[5px_5px_0px_black] hover:shadow-[8px_8px_0px_black] hover:-translate-y-1">
                        <CardHeader className="p-0">
                            <div className="relative h-48 w-full">
                                <Image
                                    src={image?.src || 'https://picsum.photos/seed/placeholder/400/200'}
                                    alt={prompt.title}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={prompt.hint.toLowerCase()}
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                               <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider bg-white/80 text-foreground px-3 py-1 rounded-full">{prompt.tag}</span>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 flex-grow flex flex-col">
                            <CardTitle className="text-xl leading-tight font-heading text-foreground mb-2">{prompt.title}</CardTitle>
                            <p className="text-muted-foreground text-sm mb-4 flex-grow">{prompt.description}</p>
                            <Button variant="outline" className="self-start mt-auto border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none">Explore</Button>
                        </CardContent>
                    </Card>
                )})}
            </div>
        </div>
      </div>
    </div>
  );
}
