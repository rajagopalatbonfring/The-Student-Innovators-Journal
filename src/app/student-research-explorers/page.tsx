// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ArrowRight, FileText, Camera, Video, Lightbulb, CheckCircle, Search } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import placeholderData from '@/lib/placeholder-images.json';
// import { cn } from "@/lib/utils";

// const submissionFormats = [
//     {
//         icon: FileText,
//         title: "Illustrated or Written Research Conversion",
//         description: "Turn photosynthesis into a fun comic, or write a story about how bridges work!",
//     },
//     {
//         icon: Camera,
//         title: "Mini-Model Photos or Poster Explanations",
//         description: "Show off your cardboard solar system model or hand-drawn poster with photos.",
//     },
//     {
//         icon: Video,
//         title: "Video Presentation or Oral Storytelling",
//         description: "Record a presentation, or tell an exciting story about your discovery.",
//     }
// ];

// const featuredExplorers = [
//     {
//         title: "How Do Bees Make Honey?",
//         author: "Jasmine, Age 10",
//         imageHint: "doodle science",
//     },
//     {
//         title: "Building a Mini-Volcano",
//         author: "Leo, Age 9",
//         imageHint: "experiment doodle",
//     },
//     {
//         title: "The Physics of a Paper Airplane",
//         author: "Sam, Age 12",
//         imageHint: "math doodle",
//     }
// ];

// const gettingStartedSteps = [
//     {
//         step: 1,
//         title: "Pick a Real-World Concept",
//         description: "Choose a science or engineering idea that excites you. It could be anything from how magnets work to why stars twinkle!",
//     },
//     {
//         step: 2,
//         title: "Choose Your Format",
//         description: "Decide how you want to share your discovery. Will you write about it, build a model, or create a video?",
//     },
//     {
//         step: 3,
//         title: "Create & Submit",
//         description: "Have fun bringing your explanation to life, then share it with the world through our easy submission form.",
//     }
// ]

// export default function ResearchExplorersPage() {
//     return (
//         <div className="bg-background">
//             {/* Hero Section */}
//             <div className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-gradient-to-br from-primary to-accent">
//                 <div className="container mx-auto px-8 text-center">
//                     <div className="max-w-4xl mx-auto">
//                         <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
//                             Student Research Explorers
//                         </h1>
//                         <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
//                             Become a young researcher! Take a real-world scientific or engineering concept and turn it into your own explanation, exploration, or replication.
//                         </p>
//                          <div className="mt-10">
//                             <Button size="lg" asChild className="text-xl py-8 px-10 bg-accent text-accent-foreground hover:bg-accent/90">
//                                 <Link href="/submissions/new">Start Your Research Submission!</Link>
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <section className="relative">
//                 <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 2px, transparent 2px)', backgroundSize: '40px 40px'}}></div>
//                 <div className="relative z-10 container mx-auto px-8 py-20 space-y-24">
//                     {/* What This Section Is About */}
//                     <section>
//                         <Card className="max-w-4xl mx-auto p-6 md:p-8">
//                             <div className="flex flex-col md:flex-row items-center justify-center text-center gap-8">
//                                 <div className="bg-secondary/10 p-6 rounded-full">
//                                     <Search className="w-16 h-16 text-secondary" />
//                                 </div>
//                                 <div>
//                                     <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">Turn Real Science into Your Own Adventure</h2>
//                                     <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                                         In this special section, students pick a real-world scientific or engineering idea and make it their own. Explain it, explore it deeper, or even try to replicate it!
//                                     </p>
//                                 </div>
//                             </div>
//                         </Card>
//                     </section>

//                     {/* Submission Formats Showcase */}
//                     <section>
//                         <div className="text-center mb-16">
//                             <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">How to Share Your Research</h2>
//                             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                                 Choose the format that best tells the story of your discovery!
//                             </p>
//                         </div>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                             {submissionFormats.map(format => (
//                                 <Card key={format.title} className="flex flex-col text-center p-6 border-4 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transition-transform hover:-translate-y-2">
//                                     <div className="mx-auto p-4 rounded-full bg-primary/10 mb-4">
//                                         <format.icon className="w-12 h-12 text-primary" />
//                                     </div>
//                                     <CardTitle className="font-heading text-2xl mb-2 text-foreground">{format.title}</CardTitle>
//                                     <p className="text-muted-foreground flex-grow my-4">{format.description}</p>
//                                     <Button asChild variant="secondary" className="mt-auto">
//                                         <Link href="/submissions/new">Submit in This Format <ArrowRight className="ml-2" /></Link>
//                                     </Button>
//                                 </Card>
//                             ))}
//                         </div>
//                     </section>

//                     {/* How to Get Started */}
//                     <section>
//                         <div className="text-center mb-12">
//                             <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading">Ready to Explore? Here's How!</h2>
//                         </div>
//                         <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
//                             {gettingStartedSteps.map((step) => (
//                                 <div key={step.step} className="flex flex-col items-center text-center gap-4">
//                                     <div className="flex-shrink-0 bg-accent text-accent-foreground h-20 w-20 rounded-full flex items-center justify-center font-bold text-5xl font-heading border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))]">
//                                         {step.step}
//                                     </div>
//                                     <h3 className="font-heading text-2xl font-bold text-primary">{step.title}</h3>
//                                     <p className="text-muted-foreground">{step.description}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </section>

//                     {/* Featured Explorers Gallery */}
//                     <section>
//                         <div className="text-center mb-12">
//                             <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">See What Other Explorers Created!</h2>
//                             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get inspired by these amazing student research projects.</p>
//                         </div>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {featuredExplorers.map((explorer, index) => {
//                                 const image = placeholderData.placeholderImages.find(p => p.hint.includes(explorer.imageHint));
//                                 const rotationClass = ['-rotate-2', 'rotate-1', '-rotate-1'][index % 3];
//                                 return (
//                                     <Link href="#" key={explorer.title}>
//                                         <Card className={cn("group flex flex-col text-center gap-2 p-4 h-full transition-all duration-300 hover:!rotate-0 hover:-translate-y-2 hover:!shadow-[8px_8px_0px_0px_hsl(var(--primary))]", rotationClass)}>
//                                             {image && <div className="rounded-md overflow-hidden border-2 border-foreground">
//                                                 <Image src={image.src} alt={explorer.title} width={image.width} height={image.height} className="w-full h-auto object-cover aspect-video" />
//                                             </div>}
//                                             <h3 className="font-bold text-lg text-foreground font-heading mt-2 group-hover:text-primary">{explorer.title}</h3>
//                                             <p className="text-sm text-muted-foreground">{explorer.author}</p>
//                                         </Card>
//                                     </Link>
//                                 )
//                             })}
//                         </div>
//                         <div className="text-center mt-16">
//                             <Button size="lg" asChild className="text-xl py-7 px-9">
//                                 <Link href="/archives">Explore All Submissions</Link>
//                             </Button>
//                         </div>
//                     </section>

//                     {/* Bottom CTA */}
//                     <section>
//                         <div className="text-center">
//                             <div className="bg-gradient-to-r from-secondary to-primary p-10 rounded-xl border-2 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] text-primary-foreground">
//                                 <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">The Next Big Discovery Could Be Yours!</h2>
//                                 <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Ready to put on your explorer hat and share what you've learned?</p>
//                                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                                     <Button size="lg" asChild className="text-xl py-8 px-10 bg-accent text-accent-foreground hover:bg-accent/90">
//                                         <Link href="/submissions/new">Start Your Research Submission!</Link>
//                                     </Button>
//                                     <Button size="lg" asChild className="text-xl py-8 px-10" variant="outline">
//                                         <Link href="/prompts">Browse Prompts for Ideas</Link>
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
import { ArrowRight, FileText, Camera, Video, Lightbulb, CheckCircle, Search, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import placeholderData from '@/lib/placeholder-images.json';
import { cn } from "@/lib/utils";

const submissionFormats = [
    {
        icon: FileText,
        title: "Illustrated or Written Research Conversion",
        description: "Turn photosynthesis into a fun comic, or write a story about how bridges work!",
    },
    {
        icon: Camera,
        title: "Mini-Model Photos or Poster Explanations",
        description: "Show off your cardboard solar system model or hand-drawn poster with photos.",
    },
    {
        icon: Video,
        title: "Video Presentation or Oral Storytelling",
        description: "Record a presentation, or tell an exciting story about your discovery.",
    }
];

const featuredExplorers = [
    {
        title: "How Do Bees Make Honey?",
        author: "Jasmine, Age 10",
        imageHint: "doodle science",
    },
    {
        title: "Building a Mini-Volcano",
        author: "Leo, Age 9",
        imageHint: "experiment doodle",
    },
    {
        title: "The Physics of a Paper Airplane",
        author: "Sam, Age 12",
        imageHint: "math doodle",
    }
];

const gettingStartedSteps = [
    {
        step: 1,
        title: "Pick a Real-World Concept",
        description: "Choose a science or engineering idea that excites you. It could be anything from how magnets work to why stars twinkle!",
    },
    {
        step: 2,
        title: "Choose Your Format",
        description: "Decide how you want to share your discovery. Will you write about it, build a model, or create a video?",
    },
    {
        step: 3,
        title: "Create & Submit",
        description: "Have fun bringing your explanation to life, then share it with the world through our easy submission form.",
    }
]

export default function ResearchExplorersPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <div className="relative w-full pt-20 pb-24 sm:pt-28 sm:pb-32 bg-gradient-to-br from-primary to-accent overflow-hidden">
                <div className="container mx-auto px-8 text-center relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-center mb-5">
                            <Search className="w-10 h-10 text-primary-foreground/80 stroke-[2.5]" />
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
                            Student Research<br />Explorers
                        </h1>
                        <p className="mt-8 text-xl md:text-2xl text-primary-foreground/95 max-w-3xl mx-auto font-medium">
                            Become a young researcher! Explore real-world science and engineering concepts.
                        </p>
                        
                        <div className="mt-10">
                            <Button size="lg" asChild className="text-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10">
                                <Link href="/submissions/new">Start Your Research Submission!</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <section className="relative">
                <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 2px, transparent 2px)', backgroundSize: '40px 40px'}}></div>
                <div className="relative z-10 container mx-auto px-8 py-20 space-y-24">
                    {/* What This Section Is About */}
                    <section>
                        <Card className="max-w-4xl mx-auto p-8 md:p-10 border-[3px] border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--foreground))] transition-shadow duration-200">
                            <div className="flex flex-col md:flex-row items-center justify-center text-center gap-8">
                                <div className="bg-secondary/10 p-6 rounded-full border-[3px] border-foreground">
                                    <Search className="w-16 h-16 text-secondary stroke-[2.5]" />
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">Turn Real Science into Your Own Adventure</h2>
                                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                        In this special section, students pick a real-world scientific or engineering idea and make it their own. Explain it, explore it deeper, or even try to replicate it!
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </section>

                    {/* Submission Formats Showcase */}
                    <section>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">How to Share Your Research</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Choose the format that best tells the story of your discovery!
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {submissionFormats.map((format, index) => {
                                const rotations = ['-rotate-1', '0', 'rotate-1'];
                                const rotationClass = rotations[index];
                                return (
                                <Card key={format.title} className={`flex flex-col text-center p-6 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))] hover:border-primary transition-all duration-300 hover:-translate-y-2 ${rotationClass} hover:rotate-0`}>
                                    <div className="mx-auto p-5 rounded-full bg-primary/10 mb-4 border-[3px] border-foreground">
                                        <format.icon className="w-12 h-12 text-primary stroke-[2.5]" />
                                    </div>
                                    <CardTitle className="font-heading text-2xl mb-2 text-foreground">{format.title}</CardTitle>
                                    <p className="text-muted-foreground flex-grow my-4 leading-relaxed">{format.description}</p>
                                    <Button asChild variant="secondary" className="mt-auto font-bold border-[3px] border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:-translate-y-0.5 transition-all duration-200">
                                        <Link href="/submissions/new">Submit in This Format <ArrowRight className="ml-2" /></Link>
                                    </Button>
                                </Card>
                            )})}
                        </div>
                    </section>

                    {/* How to Get Started */}
                    <section>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">Ready to Explore? Here's How!</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Follow these three simple steps to start your research adventure.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
                            {gettingStartedSteps.map((step, index) => {
                                const rotations = ['-rotate-1', '0', 'rotate-1'];
                                const rotationClass = rotations[index];
                                return (
                                <div key={step.step} className={`flex flex-col items-center text-center gap-5 ${rotationClass} hover:rotate-0 transition-transform duration-300`}>
                                    <div className="flex-shrink-0 bg-accent text-accent-foreground h-20 w-20 rounded-full flex items-center justify-center font-bold text-4xl font-heading border-[3px] border-foreground shadow-[5px_5px_0px_0px_hsl(var(--foreground))]">
                                        {step.step}
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold text-foreground">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                </div>
                            )})}
                        </div>
                    </section>

                    {/* Featured Explorers Gallery */}
                    <section>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">See What Other Explorers Created!</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Get inspired by these amazing student research projects.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuredExplorers.map((explorer, index) => {
                                const image = placeholderData.placeholderImages.find(p => p.hint.includes(explorer.imageHint));
                                const rotations = ['-rotate-1', 'rotate-1', '-rotate-1'];
                                const rotationClass = rotations[index % 3];
                                return (
                                    <Link href="#" key={explorer.title}>
                                        <Card className={cn("group flex flex-col text-center gap-2 p-4 h-full border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))] hover:border-primary transition-all duration-300 hover:-translate-y-2", rotationClass, "hover:rotate-0")}>
                                            {image && <div className="rounded-md overflow-hidden border-[2px] border-foreground">
                                                <Image src={image.src} alt={explorer.title} width={image.width} height={image.height} className="w-full h-auto object-cover aspect-video" />
                                            </div>}
                                            <h3 className="font-bold text-lg text-foreground font-heading mt-2 group-hover:text-primary transition-colors">{explorer.title}</h3>
                                            <p className="text-sm text-muted-foreground">{explorer.author}</p>
                                        </Card>
                                    </Link>
                                )
                            })}
                        </div>
                        <div className="text-center mt-16">
                            <Button size="lg" asChild className="text-lg font-bold bg-primary hover:bg-primary/90 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-6 px-9">
                                <Link href="/archives">Explore All Submissions</Link>
                            </Button>
                        </div>
                    </section>

                    {/* Bottom CTA */}
                    <section>
                        <div className="text-center">
                            <div className="bg-gradient-to-r from-secondary to-primary p-10 rounded-xl border-[3px] border-foreground shadow-[10px_10px_0px_0px_hsl(var(--foreground))] text-primary-foreground rotate-1 hover:rotate-0 hover:shadow-[12px_12px_0px_0px_hsl(var(--foreground))] transition-all duration-300">
                                <div className="flex justify-center mb-4">
                                    <Sparkles className="w-10 h-10 stroke-[2.5]" />
                                </div>
                                
                                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">The Next Big Discovery Could Be Yours!</h2>
                                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Ready to put on your explorer hat and share what you've learned?</p>
                                
                                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                                    <Button size="lg" asChild className="text-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10">
                                        <Link href="/submissions/new">Start Your Research Submission!</Link>
                                    </Button>
                                    <Button size="lg" asChild variant="outline" className="text-xl text-black font-bold bg-background hover:bg-background/80 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10">
                                        <Link href="/prompts">Browse Prompts for Ideas</Link>
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