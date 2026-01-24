import { creativePrompts, submissionCategories } from '@/lib/content';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
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
    <div className="bg-background">
      <div className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-8 text-center">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
                    Creative Prompts
                </h1>
                <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                    Pick a Theme, Spark an Idea, Share Your Genius! Explore, experiment, and create something amazing.
                </p>
            </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-8 py-20">
        {/* Current Theme Spotlight */}
        <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground font-heading mb-10">This Month's Theme</h2>
            <Card className="grid md:grid-cols-2 items-center gap-8 p-6 md:p-8 bg-card text-card-foreground border-4 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))]">
                <div className="rounded-lg overflow-hidden border-2 border-foreground">
                   {currentThemeImage && <Image
                        src={currentThemeImage.src}
                        alt={currentThemeImage.alt}
                        width={currentThemeImage.width}
                        height={currentThemeImage.height}
                        className="object-cover w-full h-full"
                        data-ai-hint={currentTheme.hint}
                    />}
                </div>
                <div>
                    <CardHeader className="p-0 mb-4">
                        <span className="text-sm font-bold uppercase tracking-wider bg-secondary text-secondary-foreground px-3 py-1 rounded-full w-fit mb-2">{currentTheme.tag}</span>
                        <CardTitle className="text-3xl md:text-4xl font-bold font-heading text-primary">{currentTheme.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <p className="text-base md:text-lg mb-6 text-muted-foreground">{currentTheme.description}</p>
                        <Button asChild size="lg">
                            <Link href="/submissions/new">Submit for This Theme <ArrowRight className="ml-2"/></Link>
                        </Button>
                    </CardContent>
                </div>
            </Card>
        </div>
        
        {/* Past Themes Grid */}
        <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground font-heading mb-10">Explore Past Themes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {otherThemes.map((prompt) => {
                    const image = placeholderImages.find(p => p.hint.includes(prompt.hint.toLowerCase()));
                    return (
                    <Card key={prompt.title} className="flex flex-col group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_hsl(var(--primary))]">
                        <CardHeader className="p-0">
                            <div className="relative h-48 w-full">
                                {image ? <Image
                                    src={image.src}
                                    alt={prompt.title}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={prompt.hint.toLowerCase()}
                                /> : <div className="bg-muted w-full h-full"></div>}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                               <span className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wider bg-card text-card-foreground px-3 py-1 rounded-full">{prompt.tag}</span>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 flex-grow flex flex-col">
                            <CardTitle className="text-xl leading-tight font-heading text-foreground mb-2 group-hover:text-primary transition-colors">{prompt.title}</CardTitle>
                            <p className="text-muted-foreground text-sm mb-4 flex-grow">{prompt.description}</p>
                            <Button variant="outline" className="self-start mt-auto" asChild>
                                <Link href="/submissions/new">Explore & Submit</Link>
                            </Button>
                        </CardContent>
                    </Card>
                )})}
            </div>
        </div>

        {/* Submission Categories Reminder */}
        <div className="mb-24">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">What Kind of Innovator Are You?</h2>
                <p className="mt-4 text-lg text-muted-foreground">Choose a category that best fits your amazing project!</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {submissionCategories.map((category, index) => {
                  const rotationClass = index % 2 === 0 ? '-rotate-2' : 'rotate-2';
                  return (
                    <Link href="/submissions" key={category.title}>
                        <Card className={`group flex flex-col items-center text-center gap-4 p-6 h-full transition-all duration-300 hover:!rotate-0 hover:-translate-y-2 hover:!shadow-[12px_12px_0px_0px_hsl(var(--primary))] ${rotationClass}`}>
                            <div className="bg-secondary/10 p-5 rounded-full transition-colors">
                                <category.icon className="w-12 h-12 text-secondary" />
                            </div>
                            <h3 className="font-bold text-xl text-foreground font-heading">{category.title}</h3>
                            <p className="text-sm text-muted-foreground">{category.description}</p>
                        </Card>
                    </Link>
                )})}
            </div>
        </div>


        {/* Bottom Call-to-Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-secondary to-primary p-10 rounded-xl border-2 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] text-primary-foreground">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Got an Idea Brewing?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Don't wait for a prompt! If you have a brilliant project, we want to see it. Share your genius with us today!</p>
            <Button size="lg" asChild className="text-xl py-8 px-10 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/submissions/new">Start Your Submission Now!</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
