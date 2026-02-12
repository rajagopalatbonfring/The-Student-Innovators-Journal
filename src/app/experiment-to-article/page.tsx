// import { Button } from "@/components/ui/button";
// import { Card, CardTitle } from "@/components/ui/card";
// import { ArrowRight, FileText, Camera, Lightbulb, CheckCircle, Pencil, Beaker, Microscope } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import placeholderData from '@/lib/placeholder-images.json';
// import { cn } from "@/lib/utils";

// const whatToInclude = [
//     {
//         icon: Pencil,
//         title: "A Short Write-Up",
//         description: "Tell us about your experiment or activity. What was your goal?",
//     },
//     {
//         icon: Beaker,
//         title: "What You Did",
//         description: "Describe the steps you took. What materials did you use?",
//     },
//     {
//         icon: Microscope,
//         title: "What You Observed",
//         description: "What happened during the experiment? Did anything surprise you?",
//     },
//     {
//         icon: Lightbulb,
//         title: "What You Learned",
//         description: "What was the big 'Aha!' moment? What did you discover from this?",
//     },
//     {
//         icon: Camera,
//         title: "Photos or Drawings",
//         description: "Show us your setup! A picture is worth a thousand words.",
//     }
// ];

// const exampleArticles = [
//     {
//         title: "My Dancing Raisins Experiment",
//         author: "Jasmine, Age 10",
//         imageHint: "experiment doodle",
//     },
//     {
//         title: "Building a Mini-Volcano",
//         author: "Leo, Age 9",
//         imageHint: "doodle science",
//     },
//     {
//         title: "The Physics of a Paper Airplane",
//         author: "Sam, Age 12",
//         imageHint: "math doodle",
//     }
// ];

// const writingTips = [
//     "Keep it short and fun — 200–500 words is perfect!",
//     "Use simple words like you're telling a friend.",
//     "Add clear photos or colorful drawings.",
//     "Include what surprised you most!",
//     "Have fun and be proud of what you discovered!",
// ];


// export default function ExperimentToArticlePage() {
//     return (
//         <div className="bg-background">
//             {/* Hero Section */}
//             <div className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-primary">
//                 <div className="container mx-auto px-8 text-center">
//                     <div className="max-w-4xl mx-auto">
//                         <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
//                             Experiment to Article
//                         </h1>
//                         <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
//                             Turn Your Science Experience into a Mini-Article! Do a cool experiment, write what happened, add photos or drawings, and share your discoveries with the world!
//                         </p>
//                          <div className="mt-10">
//                             <Button size="lg" asChild className="text-xl py-8 px-10 bg-accent text-accent-foreground hover:bg-accent/90">
//                                 <Link href="/submissions/new">Start Writing Your Article!</Link>
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
//                                     <FileText className="w-16 h-16 text-secondary" />
//                                 </div>
//                                 <div>
//                                     <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">From Lab to Story – Your Mini Science Article</h2>
//                                     <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                                         This is where you turn your hands-on science fun into a short write-up. Tell everyone what you did, what you saw, what surprised you, and what you learned!
//                                     </p>
//                                 </div>
//                             </div>
//                         </Card>
//                     </section>

//                     {/* What to Include Section */}
//                     <section>
//                             <div className="text-center mb-16">
//                             <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">What Makes a Great Experiment Article?</h2>
//                             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                                 Follow these steps to create an awesome story about your discovery.
//                             </p>
//                         </div>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
//                             {whatToInclude.map((item, index) => {
//                                     const rotationClass = ['-rotate-2', 'rotate-1', 'rotate-2', '-rotate-1', 'rotate-1'][index % 5];
//                                 return (
//                                 <Card key={item.title} className={cn("flex flex-col text-center p-6 border-4 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transition-transform hover:!rotate-0 hover:-translate-y-2", rotationClass)}>
//                                     <div className="mx-auto p-4 rounded-full bg-primary/10 mb-4">
//                                         <item.icon className="w-12 h-12 text-primary" />
//                                     </div>
//                                     <CardTitle className="font-heading text-2xl mb-2 text-foreground">{item.title}</CardTitle>
//                                     <p className="text-muted-foreground flex-grow my-4">{item.description}</p>
//                                 </Card>
//                             )})}
//                         </div>
//                     </section>

//                     {/* Example Articles Gallery */}
//                     <section>
//                         <div className="text-center mb-12">
//                             <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">Get Inspired by Other Young Writers!</h2>
//                                 <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See how other kids turned their experiments into amazing articles.</p>
//                         </div>
//                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {exampleArticles.map((article, index) => {
//                                     const image = placeholderData.placeholderImages.find(p => p.hint.includes(article.imageHint));
//                                     const rotationClass = ['-rotate-2', 'rotate-1', '-rotate-1'][index % 3];
//                                     return (
//                                     <Link href="#" key={article.title}>
//                                         <Card className={cn("group flex flex-col text-center gap-2 p-4 h-full transition-all duration-300 hover:!rotate-0 hover:-translate-y-2 hover:!shadow-[8px_8px_0px_0px_hsl(var(--primary))]", rotationClass)}>
//                                             {image && <div className="rounded-md overflow-hidden border-2 border-foreground">
//                                                     <Image src={image.src} alt={article.title} width={image.width} height={image.height} className="w-full h-auto object-cover aspect-video" />
//                                             </div>}
//                                             <h3 className="font-bold text-lg text-foreground font-heading mt-2 group-hover:text-primary">{article.title}</h3>
//                                             <p className="text-sm text-muted-foreground">{article.author}</p>
//                                         </Card>
//                                     </Link>
//                                     )
//                             })}
//                             </div>
//                             <div className="text-center mt-16">
//                             <Button size="lg" asChild className="text-xl py-7 px-9">
//                                 <Link href="/archives">Explore All Articles</Link>
//                             </Button>
//                         </div>
//                     </section>

//                     {/* Tips for Writing */}
//                     <section>
//                             <div className="max-w-3xl mx-auto">
//                             <Card className="p-8 border-secondary shadow-[8px_8px_0px_0px_hsl(var(--secondary))]">
//                                     <div className="text-center mb-8">
//                                     <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">Tips to Make Your Article Awesome!</h2>
//                                 </div>
//                                 <ul className="space-y-4">
//                                     {writingTips.map((tip, index) => (
//                                         <li key={index} className="flex items-start gap-4 text-lg">
//                                             <CheckCircle className="w-8 h-8 text-primary mt-1 shrink-0" />
//                                             <span className="text-muted-foreground">{tip}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </Card>
//                             </div>
//                     </section>

//                     {/* Bottom CTA */}
//                     <section>
//                         <div className="text-center">
//                             <div className="bg-gradient-to-r from-secondary to-primary p-10 rounded-xl border-2 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] text-primary-foreground">
//                                 <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Turn Your Experiment into a Published Story?</h2>
//                                 <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Share your science adventure with the world!</p>
//                                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                                     <Button size="lg" asChild className="text-xl py-8 px-10 bg-accent text-accent-foreground hover:bg-accent/90">
//                                         <Link href="/submissions/new">Start Your Submission!</Link>
//                                     </Button>
//                                         <Button size="lg" asChild className="text-xl py-8 px-10" variant="outline">
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



















// import { Button } from "@/components/ui/button";
// import { Card, CardTitle } from "@/components/ui/card";
// import { ArrowRight, FileText, Camera, Lightbulb, CheckCircle, Pencil, Beaker, Microscope, Sparkles } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import placeholderData from '@/lib/placeholder-images.json';
// import { cn } from "@/lib/utils";

// const whatToInclude = [
//     {
//         icon: Pencil,
//         title: "A Short Write-Up",
//         description: "Tell us about your experiment or activity. What was your goal?",
//     },
//     {
//         icon: Beaker,
//         title: "What You Did",
//         description: "Describe the steps you took. What materials did you use?",
//     },
//     {
//         icon: Microscope,
//         title: "What You Observed",
//         description: "What happened during the experiment? Did anything surprise you?",
//     },
//     {
//         icon: Lightbulb,
//         title: "What You Learned",
//         description: "What was the big 'Aha!' moment? What did you discover from this?",
//     },
//     {
//         icon: Camera,
//         title: "Photos or Drawings",
//         description: "Show us your setup! A picture is worth a thousand words.",
//     }
// ];

// const exampleArticles = [
//     {
//         title: "My Dancing Raisins Experiment",
//         author: "Jasmine, Age 10",
//         imageHint: "experiment doodle",
//     },
//     {
//         title: "Building a Mini-Volcano",
//         author: "Leo, Age 9",
//         imageHint: "doodle science",
//     },
//     {
//         title: "The Physics of a Paper Airplane",
//         author: "Sam, Age 12",
//         imageHint: "math doodle",
//     }
// ];

// const writingTips = [
//     "Keep it short and fun — 200–500 words is perfect!",
//     "Use simple words like you're telling a friend.",
//     "Add clear photos or colorful drawings.",
//     "Include what surprised you most!",
//     "Have fun and be proud of what you discovered!",
// ];

// export default function ExperimentToArticlePage() {
//     return (
//         <div className="bg-background">
//             {/* Hero Section */}
//             <div className="relative w-full pt-20 pb-24 sm:pt-28 sm:pb-32 bg-primary overflow-hidden">

//                 <div className="container mx-auto px-8 text-center relative z-10">
//                     <div className="max-w-4xl mx-auto">
//                         <div className="flex justify-center mb-5">
//                             <FileText className="w-10 h-10 text-primary-foreground/80 stroke-[2.5]" />
//                         </div>
                        
//                         <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
//                             Experiment to Article
//                         </h1>
//                         <p className="mt-8 text-xl md:text-2xl text-primary-foreground/95 max-w-3xl mx-auto font-medium">
//                             Turn Your Science Experience into a Mini-Article!
//                         </p>
                        
//                         <div className="mt-10">
//                             <Button size="lg" asChild className="text-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10">
//                                 <Link href="/submissions/new">Start Writing Your Article!</Link>
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
//                         <Card className="max-w-4xl mx-auto p-8 md:p-10 border-[3px] border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--foreground))] transition-shadow duration-200">
//                             <div className="flex flex-col md:flex-row items-center justify-center text-center gap-8">
//                                 <div className="bg-secondary/10 p-6 rounded-full border-[3px] border-foreground">
//                                     <FileText className="w-16 h-16 text-secondary stroke-[2.5]" />
//                                 </div>
//                                 <div>
//                                     <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">From Lab to Story – Your Mini Science Article</h2>
//                                     <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//                                         This is where you turn your hands-on science fun into a short write-up. Tell everyone what you did, what you saw, what surprised you, and what you learned!
//                                     </p>
//                                 </div>
//                             </div>
//                         </Card>
//                     </section>

//                     {/* What to Include Section */}
//                     <section>
//                         <div className="text-center mb-16">
//                             <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">What Makes a Great Experiment Article?</h2>
//                             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                                 Follow these steps to create an awesome story about your discovery.
//                             </p>
//                         </div>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
//                             {whatToInclude.map((item, index) => {
//                                 const rotations = ['-rotate-1', 'rotate-1', '-rotate-1', 'rotate-1', '-rotate-1'];
//                                 const rotationClass = rotations[index % 5];
//                                 return (
//                                 <Card key={item.title} className={cn("flex flex-col text-center p-6 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))] hover:border-primary transition-all duration-300 hover:-translate-y-2", rotationClass, "hover:rotate-0")}>
//                                     <div className="mx-auto p-5 rounded-full bg-primary/10 mb-4 border-[3px] border-foreground">
//                                         <item.icon className="w-12 h-12 text-primary stroke-[2.5]" />
//                                     </div>
//                                     <CardTitle className="font-heading text-2xl mb-2 text-foreground">{item.title}</CardTitle>
//                                     <p className="text-muted-foreground flex-grow my-4 leading-relaxed">{item.description}</p>
//                                 </Card>
//                             )})}
//                         </div>
//                     </section>

//                     {/* Example Articles Gallery */}
//                     <section>
//                         <div className="text-center mb-12">
//                             <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">Get Inspired by Other Young Writers!</h2>
//                             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See how other kids turned their experiments into amazing articles.</p>
//                         </div>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {exampleArticles.map((article, index) => {
//                                 const image = placeholderData.placeholderImages.find(p => p.hint.includes(article.imageHint));
//                                 const rotations = ['-rotate-1', 'rotate-1', '-rotate-1'];
//                                 const rotationClass = rotations[index % 3];
//                                 return (
//                                 <Link href="#" key={article.title}>
//                                     <Card className={cn("group flex flex-col text-center gap-2 p-4 h-full border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))] hover:border-primary transition-all duration-300 hover:-translate-y-2", rotationClass, "hover:rotate-0")}>
//                                         {image && <div className="rounded-md overflow-hidden border-[2px] border-foreground">
//                                             <Image src={image.src} alt={article.title} width={image.width} height={image.height} className="w-full h-auto object-cover aspect-video" />
//                                         </div>}
//                                         <h3 className="font-bold text-lg text-foreground font-heading mt-2 group-hover:text-primary transition-colors">{article.title}</h3>
//                                         <p className="text-sm text-muted-foreground">{article.author}</p>
//                                     </Card>
//                                 </Link>
//                                 )
//                             })}
//                         </div>
//                         <div className="text-center mt-16">
//                             <Button size="lg" asChild className="text-lg font-bold bg-primary hover:bg-primary/90 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-6 px-9">
//                                 <Link href="/archives">Explore All Articles</Link>
//                             </Button>
//                         </div>
//                     </section>

//                     {/* Tips for Writing */}
//                     <section>
//                         <div className="max-w-3xl mx-auto">
//                             <Card className="p-8 md:p-10 border-[3px] border-foreground shadow-[10px_10px_0px_0px_hsl(var(--foreground))] hover:shadow-[12px_12px_0px_0px_hsl(var(--foreground))] transition-shadow duration-200 bg-secondary/5">
//                                 <div className="text-center mb-8">
//                                     <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">Tips to Make Your Article Awesome!</h2>
//                                 </div>
//                                 <ul className="space-y-4">
//                                     {writingTips.map((tip, index) => (
//                                         <li key={index} className="flex items-start gap-4 text-lg">
//                                             <CheckCircle className="w-7 h-7 text-primary mt-1 shrink-0 stroke-[2.5]" />
//                                             <span className="text-muted-foreground">{tip}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </Card>
//                         </div>
//                     </section>

//                     {/* Bottom CTA */}
//                     <section>
//                         <div className="text-center">
//                             <div className="bg-gradient-to-r from-secondary to-primary p-10 rounded-xl border-[3px] border-foreground shadow-[10px_10px_0px_0px_hsl(var(--foreground))] text-primary-foreground rotate-1 hover:rotate-0 hover:shadow-[12px_12px_0px_0px_hsl(var(--foreground))] transition-all duration-300">
//                                 <div className="flex justify-center mb-4">
//                                     <Sparkles className="w-10 h-10 stroke-[2.5]" />
//                                 </div>
                                
//                                 <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Turn Your Experiment into a Published Story?</h2>
//                                 <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Share your science adventure with the world!</p>
                                
//                                 <div className="flex flex-col sm:flex-row gap-5 justify-center">
//                                     <Button size="lg" asChild className="text-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10">
//                                         <Link href="/submissions/new">Start Your Submission!</Link>
//                                     </Button>
//                                     <Button size="lg" asChild variant="outline" className="text-black text-xl font-bold bg-background hover:bg-background/80 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10">
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
import { Card, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileText, Camera, Lightbulb, CheckCircle, Pencil, Beaker, Microscope, Sparkles, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import placeholderData from '@/lib/placeholder-images.json';
import { cn } from "@/lib/utils";
import { specialActivities } from "@/lib/content"; // ← NEW IMPORT

const whatToInclude = [
  {
    icon: Pencil,
    title: "A Short Write-Up",
    description: "Tell us about your experiment or activity. What was your goal?",
  },
  {
    icon: Beaker,
    title: "What You Did",
    description: "Describe the steps you took. What materials did you use?",
  },
  {
    icon: Microscope,
    title: "What You Observed",
    description: "What happened during the experiment? Did anything surprise you?",
  },
  {
    icon: Lightbulb,
    title: "What You Learned",
    description: "What was the big 'Aha!' moment? What did you discover from this?",
  },
  {
    icon: Camera,
    title: "Photos or Drawings",
    description: "Show us your setup! A picture is worth a thousand words.",
  }
];

const exampleArticles = [
  {
    title: "My Dancing Raisins Experiment",
    author: "Jasmine, Age 10",
    imageHint: "experiment doodle",
  },
  {
    title: "Building a Mini-Volcano",
    author: "Leo, Age 9",
    imageHint: "doodle science",
  },
  {
    title: "The Physics of a Paper Airplane",
    author: "Sam, Age 12",
    imageHint: "math doodle",
  }
];

const writingTips = [
  "Keep it short and fun — 200–500 words is perfect!",
  "Use simple words like you're telling a friend.",
  "Add clear photos or colorful drawings.",
  "Include what surprised you most!",
  "Have fun and be proud of what you discovered!",
];

export default function ExperimentToArticlePage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative w-full pt-20 pb-24 sm:pt-28 sm:pb-32 bg-primary overflow-hidden">
        <div className="container mx-auto px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-5">
              <FileText className="w-10 h-10 text-primary-foreground/80 stroke-[2.5]" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
              Experiment to Article
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-primary-foreground/95 max-w-3xl mx-auto font-medium">
              Turn Your Science Experience into a Mini-Article!
            </p>
            
            <div className="mt-10">
              <Button size="lg" asChild className="text-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10">
                <Link href="/submissions/new">Start Writing Your Article!</Link>
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
                  <FileText className="w-16 h-16 text-secondary stroke-[2.5]" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">From Lab to Story – Your Mini Science Article</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    This is where you turn your hands-on science fun into a short write-up. Tell everyone what you did, what you saw, what surprised you, and what you learned!
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* NEW: Special Activities This Period */}
          <section>
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <Sparkles className="w-12 h-12 text-accent stroke-[2.5]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
                Special Activities This Month!
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Try one of these fun rotating challenges and submit your write-up here. 
                These change every few months — grab the current ones while they last!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {specialActivities.map((activity, index) => {
                const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2', '-rotate-1'];
                const rotationClass = rotations[index % rotations.length];

                return (
                  <Card 
                    key={activity.title} 
                    className={cn(
                      "flex flex-col text-center p-6 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))] hover:border-primary transition-all duration-300 hover:-translate-y-2",
                      rotationClass,
                      "hover:rotate-0"
                    )}
                  >
                    <div className="mx-auto p-5 rounded-full bg-primary/10 mb-4 border-[3px] border-foreground">
                      <activity.icon className="w-12 h-12 text-primary stroke-[2.5]" />
                    </div>
                    <CardTitle className="font-heading text-2xl mb-2 text-foreground">
                      {activity.title}
                    </CardTitle>
                    <p className="text-muted-foreground flex-grow mb-6 leading-relaxed">
                      {activity.description}
                    </p>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="mt-auto bg-accent hover:bg-accent/90 text-accent-foreground"
                      asChild
                    >
                      <Link href="/submissions/new">
                        Try This Activity!
                        <Rocket className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Want to submit using one of these special activities? 
                <br />
                Just choose <strong>Experiment to Article</strong> and mention the activity name in your title or description!
              </p>
            </div>
          </section>

          {/* What to Include Section */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">What Makes a Great Experiment Article?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Follow these steps to create an awesome story about your discovery.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {whatToInclude.map((item, index) => {
                const rotations = ['-rotate-1', 'rotate-1', '-rotate-1', 'rotate-1', '-rotate-1'];
                const rotationClass = rotations[index % 5];
                return (
                  <Card key={item.title} className={cn("flex flex-col text-center p-6 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))] hover:border-primary transition-all duration-300 hover:-translate-y-2", rotationClass, "hover:rotate-0")}>
                    <div className="mx-auto p-5 rounded-full bg-primary/10 mb-4 border-[3px] border-foreground">
                      <item.icon className="w-12 h-12 text-primary stroke-[2.5]" />
                    </div>
                    <CardTitle className="font-heading text-2xl mb-2 text-foreground">{item.title}</CardTitle>
                    <p className="text-muted-foreground flex-grow my-4 leading-relaxed">{item.description}</p>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Example Articles Gallery */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">Get Inspired by Other Young Writers!</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See how other kids turned their experiments into amazing articles.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {exampleArticles.map((article, index) => {
                const image = placeholderData.placeholderImages.find(p => p.hint.includes(article.imageHint));
                const rotations = ['-rotate-1', 'rotate-1', '-rotate-1'];
                const rotationClass = rotations[index % 3];
                return (
                  <Link href="#" key={article.title}>
                    <Card className={cn("group flex flex-col text-center gap-2 p-4 h-full border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))] hover:border-primary transition-all duration-300 hover:-translate-y-2", rotationClass, "hover:rotate-0")}>
                      {image && <div className="rounded-md overflow-hidden border-[2px] border-foreground">
                        <Image src={image.src} alt={article.title} width={image.width} height={image.height} className="w-full h-auto object-cover aspect-video" />
                      </div>}
                      <h3 className="font-bold text-lg text-foreground font-heading mt-2 group-hover:text-primary transition-colors">{article.title}</h3>
                      <p className="text-sm text-muted-foreground">{article.author}</p>
                    </Card>
                  </Link>
                );
              })}
            </div>
            <div className="text-center mt-16">
              <Button size="lg" asChild className="text-lg font-bold bg-primary hover:bg-primary/90 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-6 px-9">
                <Link href="/archives">Explore All Articles</Link>
              </Button>
            </div>
          </section>

          {/* Tips for Writing */}
          <section>
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 md:p-10 border-[3px] border-foreground shadow-[10px_10px_0px_0px_hsl(var(--foreground))] hover:shadow-[12px_12px_0px_0px_hsl(var(--foreground))] transition-shadow duration-200 bg-secondary/5">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">Tips to Make Your Article Awesome!</h2>
                </div>
                <ul className="space-y-4">
                  {writingTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-4 text-lg">
                      <CheckCircle className="w-7 h-7 text-primary mt-1 shrink-0 stroke-[2.5]" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
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
                
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Turn Your Experiment into a Published Story?</h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Share your science adventure with the world!</p>
                
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Button size="lg" asChild className="text-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10">
                    <Link href="/submissions/new">Start Your Submission!</Link>
                  </Button>
                  <Button size="lg" asChild variant="outline" className="text-black text-xl font-bold bg-background hover:bg-background/80 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10">
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