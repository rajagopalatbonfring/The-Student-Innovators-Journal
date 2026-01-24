// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Crown, Mail, Newspaper, Puzzle, Rocket, Search, Sparkles, Star, Trophy, Wrench, ArrowRight, CheckCircle } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import placeholderData from '@/lib/placeholder-images.json';
// import { cn } from "@/lib/utils";

// const topRecognitions = [
//     {
//         icon: Star,
//         title: "STEM Star of the Month",
//         winner: "Jasmine, Age 12",
//         description: "For her innovative 'Smart Garden' project that uses sensors to water plants automatically.",
//         imageHint: "eco doodle",
//         colorClasses: { text: "text-accent", bg: "bg-accent/10", border: "border-accent", shadow: "shadow-[8px_8px_0px_0px_hsl(var(--accent))]" }
//     },
//     {
//         icon: Wrench,
//         title: "Bright Builder",
//         winner: "Leo, Age 10",
//         description: "For his 'Recycled Rover' made entirely from household junk, showcasing amazing creativity.",
//         imageHint: "kid with robot doodle",
//         colorClasses: { text: "text-primary", bg: "bg-primary/10", border: "border-primary", shadow: "shadow-[8px_8px_0px_0px_hsl(var(--primary))]" }
//     },
//     {
//         icon: Crown,
//         title: "Innovation Champion",
//         winner: "Sam, Age 14",
//         description: "For designing a concept app that helps students organize their homework and study schedules.",
//         imageHint: "coding doodle",
//         colorClasses: { text: "text-secondary", bg: "bg-secondary/10", border: "border-secondary", shadow: "shadow-[8px_8px_0px_0px_hsl(var(--secondary))]" }
//     },
// ];

// const featuredHighlights = [
//     { title: "Lemon Battery Experiment", author: "Zoe, Age 9", imageHint: "experiment doodle" },
//     { title: "Building a Birdhouse", author: "Alex, Age 11", imageHint: "building doodle" },
//     { title: "The Journey of a Water Droplet", author: "Mia, Age 8", imageHint: "magnifying glass doodle" },
//     { title: "My First Python Game", author: "Sam, Age 12", imageHint: "coding doodle" },
// ];


// export default function NewsletterPage() {
//     return (
//         <div className="bg-background">
//             <div className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-primary">
//                 <div className="container mx-auto px-8 text-center">
//                     <div className="max-w-4xl mx-auto">
//                         <div className="flex justify-center items-center gap-4 mb-4">
//                             <Sparkles className="w-12 h-12 text-primary-foreground" />
//                              <Newspaper className="w-16 h-16 text-primary-foreground" />
//                              <Sparkles className="w-12 h-12 text-primary-foreground" />
//                         </div>
//                         <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
//                             Monthly STEM Spark
//                         </h1>
//                         <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
//                             Celebrating the Brightest Young Innovators Every Month! See who earned top recognitions, get inspired, and stay ready for the next theme.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//             <section className="relative">
//                 <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 2px, transparent 2px)', backgroundSize: '40px 40px'}}></div>
//                 <div className="relative z-10 container mx-auto px-8 py-20 space-y-24">
//                     {/* Latest Issue */}
//                     <section className="text-center">
//                         <Card className="max-w-3xl mx-auto p-6 md:p-8 border-4 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))]">
//                             <Trophy className="w-16 h-16 text-accent mx-auto mb-4"/>
//                             <h2 className="font-bold font-heading text-3xl md:text-4xl text-foreground">
//                                 STEM Spark – October 2024 Edition
//                             </h2>
//                             <p className="mt-2 text-lg text-muted-foreground">This month is packed with amazing eco-inventions and brilliant engineering projects. Let's celebrate our young geniuses!</p>
//                             <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
//                                 <Button asChild size="lg" variant="secondary">
//                                     <Link href="#">Read This Month’s Newsletter</Link>
//                                 </Button>
//                                 <Button asChild size="lg" variant="outline">
//                                     <Link href="/archives">View Past Issues</Link>
//                                 </Button>
//                             </div>
//                         </Card>
//                     </section>

//                     {/* Top Recognitions */}
//                     <section>
//                         <div className="text-center mb-16">
//                             <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">This Month's Top Recognitions</h2>
//                             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                                 A huge congratulations to our award winners! Your creativity and hard work are truly inspiring.
//                             </p>
//                         </div>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                             {topRecognitions.map(rec => {
//                                 const image = placeholderData.placeholderImages.find(p => p.hint.includes(rec.imageHint));
//                                 return (
//                                     <Card key={rec.title} className={cn("flex flex-col text-center p-6 border-4 transition-transform hover:-translate-y-2", rec.colorClasses.border, rec.colorClasses.shadow)}>
//                                         <div className={cn("mx-auto p-4 rounded-full mb-4", rec.colorClasses.bg)}>
//                                             <rec.icon className={cn("w-10 h-10", rec.colorClasses.text)} />
//                                         </div>
//                                         <CardTitle className="font-heading text-2xl mb-2 text-foreground">{rec.title}</CardTitle>
//                                         <p className="font-bold text-primary">{rec.winner}</p>
//                                         <p className="text-muted-foreground text-sm flex-grow my-4">{rec.description}</p>
//                                         {image && <div className="rounded-lg overflow-hidden border-2 border-foreground my-4">
//                                             <Image src={image.src} alt={rec.title} width={image.width} height={image.height} className="w-full h-auto object-cover" />
//                                         </div>}
//                                         <Button asChild variant="outline" className="mt-auto">
//                                             <Link href="#">See Full Project <ArrowRight className="ml-2" /></Link>
//                                         </Button>
//                                     </Card>
//                                 )
//                             })}
//                         </div>
//                     </section>

//                     {/* Featured Highlights */}
//                     <section>
//                         <div className="text-center mb-12">
//                             <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">More Sparks From This Month!</h2>
//                             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">So many amazing ideas! Here's a sneak peek at other brilliant projects.</p>
//                         </div>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                             {featuredHighlights.map((highlight, index) => {
//                                 const image = placeholderData.placeholderImages.find(p => p.hint.includes(highlight.imageHint));
//                                 const rotationClass = index % 2 === 0 ? '-rotate-2' : 'rotate-2';
//                                 return (
//                                     <Link href="#" key={highlight.title}>
//                                         <Card className={cn("group flex flex-col text-center gap-2 p-4 h-full transition-all duration-300 hover:!rotate-0 hover:-translate-y-2 hover:!shadow-[8px_8px_0px_0px_hsl(var(--primary))]", rotationClass)}>
//                                             {image && <div className="rounded-md overflow-hidden border-2 border-foreground">
//                                                 <Image src={image.src} alt={highlight.title} width={image.width} height={image.height} className="w-full h-auto object-cover aspect-video" />
//                                             </div>}
//                                             <h3 className="font-bold text-base text-foreground font-heading mt-2 group-hover:text-primary">{highlight.title}</h3>
//                                             <p className="text-sm text-muted-foreground">{highlight.author}</p>
//                                         </Card>
//                                     </Link>
//                                 )
//                             })}
//                         </div>
//                         <div className="text-center mt-16">
//                             <Button size="lg" asChild className="text-xl py-7 px-9">
//                                 <Link href="#">Explore the Full Showcase Wall</Link>
//                             </Button>
//                         </div>
//                     </section>

//                     {/* Subscribe Section */}
//                     <section>
//                         <Card className="max-w-3xl mx-auto p-8 md:p-12 text-center border-secondary shadow-[8px_8px_0px_0px_hsl(var(--secondary))]">
//                             <div className="flex justify-center items-center gap-4 mb-4">
//                                 <Mail className="w-12 h-12 text-secondary" />
//                             </div>
//                             <h2 className="font-bold font-heading text-3xl md:text-4xl text-foreground">Don't Miss the Next Spark!</h2>
//                             <p className="mt-2 text-lg text-muted-foreground max-w-lg mx-auto">Get top recognitions, new themes, and inspiration delivered straight to your inbox.</p>
//                             <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
//                                 <Input type="email" placeholder="your.email@example.com" className="h-14 text-lg text-center sm:text-left flex-grow" />
//                                 <Button type="submit" size="lg" className="h-14 w-full sm:w-auto">Subscribe Now!</Button>
//                             </form>
//                             <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2">
//                             <CheckCircle className="w-4 h-4 text-primary" /> Safe & fun – no spam, ever!
//                             </p>
//                         </Card>
//                     </section>

//                     {/* Bottom CTA */}
//                     <section>
//                         <div className="text-center">
//                             <div className="bg-gradient-to-r from-secondary to-primary p-10 rounded-xl border-2 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] text-primary-foreground">
//                                 <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Inspired by This Month's Stars? Create Your Own!</h2>
//                                 <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Your amazing idea could be featured here next month!</p>
//                                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                                     <Button size="lg" asChild className="text-xl py-8 px-10 bg-accent text-accent-foreground hover:bg-accent/90">
//                                         <Link href="/submissions/new">Start Your Submission Now!</Link>
//                                     </Button>
//                                     <Button size="lg" asChild className="text-xl py-8 px-10" variant="outline">
//                                         <Link href="/prompts">Browse Creative Prompts</Link>
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Crown, Mail, Newspaper, Puzzle, Rocket, Search, Sparkles, Star, Trophy, Wrench, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import placeholderData from '@/lib/placeholder-images.json';
import { cn } from "@/lib/utils";

const topRecognitions = [
    {
        icon: Star,
        title: "STEM Star of the Month",
        winner: "Jasmine, Age 12",
        description: "For her innovative 'Smart Garden' project that uses sensors to water plants automatically.",
        imageHint: "eco doodle",
        colorClasses: { text: "text-accent", bg: "bg-accent/10", border: "border-accent", shadow: "shadow-[8px_8px_0px_0px_hsl(var(--accent))]" }
    },
    {
        icon: Wrench,
        title: "Bright Builder",
        winner: "Leo, Age 10",
        description: "For his 'Recycled Rover' made entirely from household junk, showcasing amazing creativity.",
        imageHint: "kid with robot doodle",
        colorClasses: { text: "text-primary", bg: "bg-primary/10", border: "border-primary", shadow: "shadow-[8px_8px_0px_0px_hsl(var(--primary))]" }
    },
    {
        icon: Crown,
        title: "Innovation Champion",
        winner: "Sam, Age 14",
        description: "For designing a concept app that helps students organize their homework and study schedules.",
        imageHint: "coding doodle",
        colorClasses: { text: "text-secondary", bg: "bg-secondary/10", border: "border-secondary", shadow: "shadow-[8px_8px_0px_0px_hsl(var(--secondary))]" }
    },
];

const featuredHighlights = [
    { title: "Lemon Battery Experiment", author: "Zoe, Age 9", imageHint: "experiment doodle" },
    { title: "Building a Birdhouse", author: "Alex, Age 11", imageHint: "building doodle" },
    { title: "The Journey of a Water Droplet", author: "Mia, Age 8", imageHint: "magnifying glass doodle" },
    { title: "My First Python Game", author: "Sam, Age 12", imageHint: "coding doodle" },
];

export default function NewsletterPage() {

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <div className="relative w-full pt-20 pb-24 sm:pt-28 sm:pb-32 bg-primary overflow-hidden">
                <div className="container mx-auto px-8 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-center items-center gap-4 mb-5">
                            <Sparkles className="w-10 h-10 text-primary-foreground/80 stroke-[2.5]" />
                            <Newspaper className="w-12 h-12 text-primary-foreground/80 stroke-[2.5]" />
                            <Sparkles className="w-10 h-10 text-primary-foreground/80 stroke-[2.5]" />
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
                            Monthly STEM Spark
                        </h1>
                        <p className="mt-8 text-xl md:text-2xl text-primary-foreground/95 max-w-3xl mx-auto font-medium">
                            Celebrating the Brightest Young Innovators Every Month!
                        </p>
                    </div>
                </div>
            </div>

            <section className="relative">
                <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 2px, transparent 2px)', backgroundSize: '40px 40px'}}></div>
                <div className="relative z-10 container mx-auto px-8 py-20 space-y-24">
                    {/* Latest Issue */}
                    <section className="text-center">
                        <Card className="max-w-3xl mx-auto p-8 md:p-10 border-[3px] border-foreground shadow-[10px_10px_0px_0px_hsl(var(--foreground))] hover:shadow-[12px_12px_0px_0px_hsl(var(--foreground))] transition-shadow duration-200">
                            <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4 border-[3px] border-foreground">
                                <Trophy className="w-16 h-16 text-accent stroke-[2.5]"/>
                            </div>
                            <h2 className="font-bold font-heading text-3xl md:text-4xl text-foreground">
                                STEM Spark – October 2024 Edition
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">This month is packed with amazing eco-inventions and brilliant engineering projects. Let's celebrate our young geniuses!</p>
                            
                            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
                                <Button asChild size="lg" variant="secondary" className="font-bold border-[3px] border-foreground shadow-[5px_5px_0px_0px_hsl(var(--foreground))] hover:shadow-[7px_7px_0px_0px_hsl(var(--foreground))] hover:-translate-y-0.5 transition-all duration-200">
                                    <Link href="#">Read This Month's Newsletter</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="font-bold border-[3px] border-foreground shadow-[5px_5px_0px_0px_hsl(var(--foreground))] hover:shadow-[7px_7px_0px_0px_hsl(var(--foreground))] hover:-translate-y-0.5 transition-all duration-200">
                                    <Link href="/archives">View Past Issues</Link>
                                </Button>
                            </div>
                        </Card>
                    </section>

                    {/* Top Recognitions */}
                    <section>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">This Month's Top Recognitions</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                A huge congratulations to our award winners! Your creativity and hard work are truly inspiring.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {topRecognitions.map((rec, index) => {
                                const image = placeholderData.placeholderImages.find(p => p.hint.includes(rec.imageHint));
                                const rotations = ['-rotate-1', '0', 'rotate-1'];
                                const rotationClass = rotations[index];
                                return (
                                    <Card key={rec.title} className={cn("flex flex-col text-center p-6 border-[3px] transition-all duration-300 hover:-translate-y-2 hover:rotate-0", rec.colorClasses.border, rec.colorClasses.shadow, rotationClass)}>
                                        <div className={cn("mx-auto p-5 rounded-full mb-4 border-[3px] border-foreground", rec.colorClasses.bg)}>
                                            <rec.icon className={cn("w-10 h-10 stroke-[2.5]", rec.colorClasses.text)} />
                                        </div>
                                        <CardTitle className="font-heading text-2xl mb-2 text-foreground">{rec.title}</CardTitle>
                                        <p className="font-bold text-primary">{rec.winner}</p>
                                        <p className="text-muted-foreground text-sm flex-grow my-4 leading-relaxed">{rec.description}</p>
                                        {image && <div className="rounded-lg overflow-hidden border-[2px] border-foreground my-4">
                                            <Image src={image.src} alt={rec.title} width={image.width} height={image.height} className="w-full h-auto object-cover" />
                                        </div>}
                                        <Button asChild variant="outline" className="mt-auto border-[3px] border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:-translate-y-0.5 transition-all duration-200">
                                            <Link href="#">See Full Project <ArrowRight className="ml-2" /></Link>
                                        </Button>
                                    </Card>
                                )
                            })}
                        </div>
                    </section>

                    {/* Featured Highlights */}
                    <section>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">More Sparks From This Month!</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">So many amazing ideas! Here's a sneak peek at other brilliant projects.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {featuredHighlights.map((highlight, index) => {
                                const image = placeholderData.placeholderImages.find(p => p.hint.includes(highlight.imageHint));
                                const rotations = ['-rotate-1', 'rotate-1', '-rotate-1', 'rotate-1'];
                                const rotationClass = rotations[index % 4];
                                return (
                                    <Link href="#" key={highlight.title}>
                                        <Card className={cn("group flex flex-col text-center gap-2 p-4 h-full border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))] hover:border-primary transition-all duration-300 hover:-translate-y-2", rotationClass, "hover:rotate-0")}>
                                            {image && <div className="rounded-md overflow-hidden border-[2px] border-foreground">
                                                <Image src={image.src} alt={highlight.title} width={image.width} height={image.height} className="w-full h-auto object-cover aspect-video" />
                                            </div>}
                                            <h3 className="font-bold text-base text-foreground font-heading mt-2 group-hover:text-primary transition-colors">{highlight.title}</h3>
                                            <p className="text-sm text-muted-foreground">{highlight.author}</p>
                                        </Card>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="text-center mt-16">
                            <Button size="lg" asChild className="text-lg font-bold bg-primary hover:bg-primary/90 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-6 px-9">
                                <Link href="#">Explore the Full Showcase Wall</Link>
                            </Button>
                        </div>
                    </section>

                    {/* Subscribe Section */}
                    <section>
                        <Card className="max-w-3xl mx-auto p-8 md:p-12 text-center border-[3px] border-foreground shadow-[10px_10px_0px_0px_hsl(var(--foreground))] hover:shadow-[12px_12px_0px_0px_hsl(var(--foreground))] transition-shadow duration-200 bg-secondary/5">
                            <div className="flex justify-center items-center gap-4 mb-4">
                                <div className="bg-secondary/10 p-3 rounded-full border-[3px] border-foreground">
                                    <Mail className="w-10 h-10 text-secondary stroke-[2.5]" />
                                </div>
                            </div>
                            <h2 className="font-bold font-heading text-3xl md:text-4xl text-foreground">Don't Miss the Next Spark!</h2>
                            <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">Get top recognitions, new themes, and inspiration delivered straight to your inbox.</p>
                            
                            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                                <Input 
                                    type="email" 
                                    placeholder="your.email@example.com" 
                                    className="h-14 text-lg text-center sm:text-left flex-grow border-[2px] border-foreground shadow-[3px_3px_0px_0px_hsl(var(--foreground))] focus:shadow-[4px_4px_0px_0px_hsl(var(--primary))] transition-all duration-200" 
                                />
                                <Button 
                                    size="lg" 
                                    className="h-14 w-full sm:w-auto font-bold border-[3px] border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:-translate-y-0.5 transition-all duration-200"
                                >
                                    Subscribe Now!
                                </Button>
                            </div>
                            
                            <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2">
                                <CheckCircle className="w-4 h-4 text-primary stroke-[2.5]" /> Safe & fun – no spam, ever!
                            </p>
                        </Card>
                    </section>

                    {/* Bottom CTA */}
                    <section>
                        <div className="text-center">
                            <div className="bg-gradient-to-r from-secondary to-primary p-10 rounded-xl border-[3px] border-foreground shadow-[10px_10px_0px_0px_hsl(var(--foreground))] text-primary-foreground rotate-1 hover:rotate-0 hover:shadow-[12px_12px_0px_0px_hsl(var(--foreground))] transition-all duration-300">
                                <div className="flex justify-center mb-4">
                                    <Sparkles className="w-10 h-10 stroke-[2.5]" />
                                </div>
                                
                                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Inspired by This Month's Stars? Create Your Own!</h2>
                                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Your amazing idea could be featured here next month!</p>
                                
                                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                    <Button size="lg" asChild className="text-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10">
                                        <Link href="/submissions/new">Start Your Submission Now!</Link>
                                    </Button>
                                    <Button size="lg" asChild variant="outline" className="text-black text-xl font-bold bg-background hover:bg-background/80 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10">
                                        <Link href="/prompts">Browse Creative Prompts</Link>
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