// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { submissionCategories } from '@/lib/content';
// import { ArrowRight, CheckCircle, FlaskConical, Cpu, Puzzle, Search, Microscope } from "lucide-react";
// import Link from "next/link";
// import { cn } from "@/lib/utils";

// const quickTips = [
//     { icon: Microscope, text: "Doing experiments?", category: "Mini Scientists" },
//     { icon: Cpu, text: "Inventing tech?", category: "Young Innovators" },
//     { icon: FlaskConical, text: "Building things?", category: "Junior Engineers" },
//     { icon: Puzzle, text: "Love math fun?", category: "Math Wizards" },
//     { icon: Search, text: "Explaining concepts?", category: "Research Explorers" },
// ];

// export default function SubmissionCategoriesPage() {
//     return (
//         <div className="bg-background">
//             <div className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-primary">
//                 <div className="container mx-auto px-8 text-center">
//                     <div className="max-w-4xl mx-auto">
//                         <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
//                             Submission Categories
//                         </h1>
//                         <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
//                             Pick Your Adventure — What Kind of Innovator Are You? Whether you're experimenting, inventing, building, or puzzling — there's a perfect category for your brilliant idea!
//                         </p>
//                          <div className="mt-10">
//                             <Button size="lg" asChild className="text-xl py-8 px-10 bg-accent text-accent-foreground hover:bg-accent/90">
//                                 <Link href="/submissions/new">Choose a Category & Submit Now!</Link>
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            
//             <section className="relative">
//                 <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 2px, transparent 2px)', backgroundSize: '40px 40px'}}></div>
//                 <div className="relative z-10 container mx-auto px-8 py-20 space-y-24">
//                     {/* Categories Showcase */}
//                     <section>
//                         <div className="text-center mb-16">
//                             <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">Find Your Perfect Category</h2>
//                         </div>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//                             {submissionCategories.map((category, index) => {
//                                 const rotationClass = ['-rotate-2', 'rotate-1', 'rotate-2', '-rotate-1', 'rotate-1'][index % 5];
//                                 return (
//                                 <Card key={category.title} className={cn("flex flex-col text-center p-6 border-4 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transition-transform hover:!rotate-0 hover:-translate-y-2", rotationClass)}>
//                                     <div className="mx-auto p-4 rounded-full bg-secondary/10 mb-4">
//                                         <category.icon className="w-16 h-16 text-secondary" />
//                                     </div>
//                                     <CardTitle className="font-heading text-3xl mb-4 text-primary">{category.title}</CardTitle>
//                                     <CardDescription className="text-muted-foreground text-base flex-grow">{category.description}</CardDescription>
//                                     <CardContent className="p-0 mt-6">
//                                         <ul className="space-y-3 text-left">
//                                             {category.details.map(detail => (
//                                             <li key={detail} className="flex items-start gap-3">
//                                                 <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
//                                                 <span className="text-foreground/80">{detail}</span>
//                                             </li>
//                                             ))}
//                                         </ul>
//                                     </CardContent>
//                                     <div className="mt-8">
//                                         <Button asChild size="lg" variant="secondary">
//                                             <Link href="/submissions/new">Submit in this Category</Link>
//                                         </Button>
//                                     </div>
//                                 </Card>
//                             )})}
//                         </div>
//                     </section>

//                     {/* Quick Tips */}
//                     <section>
//                         <div className="max-w-4xl mx-auto">
//                             <Card className="p-8 border-accent shadow-[8px_8px_0px_0px_hsl(var(--accent))]">
//                                 <div className="text-center mb-8">
//                                     <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">Not Sure Where Your Idea Fits?</h2>
//                                     <p className="text-lg text-muted-foreground mt-2">Here's a clue!</p>
//                                 </div>
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                                     {quickTips.map(tip => (
//                                         <div key={tip.category} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
//                                             <div className="p-2 bg-primary/10 rounded-full">
//                                                 <tip.icon className="w-8 h-8 text-primary" />
//                                             </div>
//                                             <div>
//                                                 <p className="font-semibold text-foreground">{tip.text} <ArrowRight className="inline-block w-4 h-4" /> <span className="font-bold text-primary">{tip.category}</span></p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Card>
//                         </div>
//                     </section>
                    
//                     {/* Bottom CTA */}
//                     <section>
//                         <div className="text-center">
//                             <div className="bg-gradient-to-r from-secondary to-primary p-10 rounded-xl border-2 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] text-primary-foreground">
//                                 <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Found Your Category? Time to Share Your Genius!</h2>
//                                 <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Click the button below to start your submission. We can't wait to see what you've created!</p>
//                                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                                     <Button size="lg" asChild className="text-xl py-8 px-10 bg-accent text-accent-foreground hover:bg-accent/90">
//                                         <Link href="/submissions/new">Start Your Submission Now!</Link>
//                                     </Button>
//                                     <Button size="lg" asChild className="text-xl py-8 px-10" variant="outline">
//                                         <Link href="/prompts">See Creative Prompts</Link>
//                                     </Button>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </section>
//         </div>
//     );
// }













import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { submissionCategories } from '@/lib/content';
import { ArrowRight, CheckCircle, FlaskConical, Cpu, Puzzle, Search, Microscope, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const quickTips = [
    { icon: Microscope, text: "Doing experiments?", category: "Mini Scientists" },
    { icon: Cpu, text: "Inventing tech?", category: "Young Innovators" },
    { icon: FlaskConical, text: "Building things?", category: "Junior Engineers" },
    { icon: Puzzle, text: "Love math fun?", category: "Math Wizards" },
    { icon: Search, text: "Explaining concepts?", category: "Research Explorers" },
];

export default function SubmissionCategoriesPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <div className="relative w-full pt-20 pb-24 sm:pt-28 sm:pb-32 bg-primary overflow-hidden">

                <div className="container mx-auto px-8 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-center mb-5">
                            <Sparkles className="w-10 h-10 text-primary-foreground/80 stroke-[2.5]" />
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
                            Submission Categories
                        </h1>
                        <p className="mt-8 text-xl md:text-2xl text-primary-foreground/95 max-w-3xl mx-auto font-medium">
                            Pick Your Adventure — What Kind of Innovator Are You?
                        </p>
                        
                        <div className="mt-10">
                            <Button size="lg" asChild className="text-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10">
                                <Link href="/submissions/new">Choose a Category & Submit Now!</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            
            <section className="relative">
                <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 2px, transparent 2px)', backgroundSize: '40px 40px'}}></div>
                <div className="relative z-10 container mx-auto px-8 py-20 space-y-24">
                    {/* Categories Showcase */}
                    <section>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">Find Your Perfect Category</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Whether you're experimenting, inventing, building, or puzzling — there's a perfect category for your brilliant idea!
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                            {submissionCategories.map((category, index) => {
                                const rotations = ['-rotate-1', 'rotate-1', '-rotate-1', 'rotate-1', '-rotate-1'];
                                const rotationClass = rotations[index % 5];
                                return (
                                <Card key={category.title} className={cn("flex flex-col text-center p-6 md:p-8 border-[3px] border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:shadow-[12px_12px_0px_0px_hsl(var(--primary))] hover:border-primary transition-all duration-300 hover:-translate-y-2", rotationClass, "hover:rotate-0")}>
                                    <div className="mx-auto p-5 rounded-full bg-secondary/10 mb-5 border-[3px] border-foreground group-hover:scale-105 transition-transform duration-300">
                                        <category.icon className="w-16 h-16 text-secondary stroke-[2.5]" />
                                    </div>
                                    <CardTitle className="font-heading text-3xl mb-4 text-primary">{category.title}</CardTitle>
                                    <CardDescription className="text-muted-foreground text-base flex-grow leading-relaxed">{category.description}</CardDescription>
                                    <CardContent className="p-0 mt-6">
                                        <ul className="space-y-3 text-left">
                                            {category.details.map(detail => (
                                            <li key={detail} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0 stroke-[2.5]" />
                                                <span className="text-foreground/80 text-sm">{detail}</span>
                                            </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <div className="mt-8">
                                        <Button asChild size="lg" variant="secondary" className="font-bold border-[3px] border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:-translate-y-0.5 transition-all duration-200">
                                            <Link href="/submissions/new">Submit in this Category</Link>
                                        </Button>
                                    </div>
                                </Card>
                            )})}
                        </div>
                    </section>

                    {/* Quick Tips */}
                    <section>
                        <div className="max-w-4xl mx-auto">
                            <Card className="p-8 md:p-10 border-[3px] border-foreground shadow-[10px_10px_0px_0px_hsl(var(--foreground))] hover:shadow-[12px_12px_0px_0px_hsl(var(--foreground))] transition-shadow duration-200 bg-accent/5">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">Not Sure Where Your Idea Fits?</h2>
                                    <p className="text-lg text-muted-foreground mt-2">Here's a clue!</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {quickTips.map((tip, index) => {
                                        const rotations = ['-rotate-1', 'rotate-1', '-rotate-1', 'rotate-1', '0'];
                                        const rotationClass = rotations[index % 5];
                                        return (
                                        <div key={tip.category} className={`flex items-center gap-4 p-4 rounded-lg bg-card border-[2px] border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_0px_hsl(var(--primary))] hover:border-primary transition-all duration-200 ${rotationClass} hover:rotate-0`}>
                                            <div className="p-3 bg-primary/10 rounded-full border-[2px] border-foreground shrink-0">
                                                <tip.icon className="w-6 h-6 text-primary stroke-[2.5]" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-foreground text-sm">{tip.text} <ArrowRight className="inline-block w-4 h-4" /> <span className="font-bold text-primary">{tip.category}</span></p>
                                            </div>
                                        </div>
                                    )})}
                                </div>
                            </Card>
                        </div>
                    </section>
                    
                    {/* Bottom CTA */}
                    <section>
                        <div className="text-center">
                            <div className="bg-gradient-to-r from-secondary to-primary p-10 rounded-xl border-[3px] border-foreground shadow-[10px_10px_0px_0px_hsl(var(--foreground))] text-primary-foreground rotate-1 hover:rotate-0 hover:shadow-[12px_12px_0px_0px_hsl(var(--foreground))] transition-all duration-300">
                                <div className="flex justify-center mb-4">
                                    <Sparkles className="w-10 h-10 stroke-[2.5]" />
                                </div>
                                
                                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Found Your Category? Time to Share Your Genius!</h2>
                                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Click the button below to start your submission. We can't wait to see what you've created!</p>
                                
                                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                    <Button size="lg" asChild className="text-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10">
                                        <Link href="/submissions/new">Start Your Submission Now!</Link>
                                    </Button>
                                    <Button size="lg" asChild variant="outline" className="text-black text-xl font-bold bg-background hover:bg-background/80 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10">
                                        <Link href="/prompts">See Creative Prompts</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}