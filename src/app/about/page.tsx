// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Users, Target, Rocket, Lightbulb, CheckCircle } from "lucide-react";
// import Image from "next/image";
// import placeholderData from '@/lib/placeholder-images.json';
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const aboutImage = placeholderData.placeholderImages.find(p => p.hint.includes('doodle team'));

// const howItWorksSteps = [
//     {
//         step: 1,
//         title: "Choose Your Theme",
//         description: "Explore our fun monthly prompts and find a category that sparks your interest.",
//         color: "bg-accent text-accent-foreground",
//     },
//     {
//         step: 2,
//         title: "Create & Submit",
//         description: "Build, write, or design your project. Then, upload it through our easy submission form.",
//         color: "bg-secondary text-secondary-foreground",
//     },
//     {
//         step: 3,
//         title: "Get Recognized!",
//         description: "Receive a certificate, get featured on our showcase wall, and inspire other students!",
//         color: "bg-primary text-primary-foreground",
//     }
// ];

// export default function AboutPage() {
//   return (
//     <div className="bg-background">
//       <div className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-gradient-to-br from-primary to-accent">
//         <div className="container mx-auto px-8 text-center">
//             <div className="max-w-4xl mx-auto">
//                 <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
//                     About The Student Innovators Journal
//                 </h1>
//                 <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
//                     Empowering Young Minds to Explore, Create, and Share STEM Magic!
//                 </p>
//             </div>
//         </div>
//       </div>
      
//       <div className="container mx-auto px-4 sm:px-8 py-20">
//         <Card className="p-8">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//               <div className="space-y-6 text-lg text-foreground/90">
//                   <h2 className="font-heading text-3xl font-bold text-secondary">Our Story</h2>
//                   <p>
//                   TSIJ is a safe, fun space for students to turn their curiosity into creative STEM projects. We believe every child is a natural innovator — we just give them the prompts, encouragement, and spotlight to shine!
//                   </p>
//                   <p>
//                   From first experiments to complex engineering projects, TSIJ celebrates the spirit of inquiry and the joy of discovery at every level. Join us in building a community of future leaders and problem-solvers who will shape tomorrow, today.
//                   </p>
//               </div>
//               <div>
//                 {aboutImage && <Image 
//                     src={aboutImage.src}
//                     alt={aboutImage.alt}
//                     width={aboutImage.width}
//                     height={aboutImage.height}
//                     className="rounded-lg border-2 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))]"
//                     data-ai-hint={aboutImage.hint}
//                     />}
//               </div>
//           </div>
//         </Card>

//         <div className="grid md:grid-cols-2 gap-8 mt-16">
//             <Card>
//                 <CardHeader className="flex-row items-center gap-4">
//                     <div className="bg-primary/10 p-3 rounded-full">
//                        <Lightbulb className="w-8 h-8 text-primary" />
//                     </div>
//                     <CardTitle className="text-2xl text-foreground font-heading">Our Mission</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <p className="text-muted-foreground text-base">To encourage STEM creativity and critical thinking in students aged 8-15 through fun, accessible prompts and a platform to share their work with the world.</p>
//                 </CardContent>
//             </Card>
//             <Card className="border-secondary shadow-[8px_8px_0px_0px_hsl(var(--secondary))]">
//                 <CardHeader className="flex-row items-center gap-4">
//                     <div className="bg-secondary/10 p-3 rounded-full">
//                        <Rocket className="w-8 h-8 text-secondary" />
//                     </div>
//                     <CardTitle className="text-2xl text-foreground font-heading">Our Vision</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <p className="text-muted-foreground text-base">To empower every student with the confidence and skills to become an innovator, problem-solver, and a future leader in the STEM fields.</p>
//                 </CardContent>
//             </Card>
//         </div>

//         <div className="text-center mt-24">
//             <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-12">
//                 How to Join the Adventure!
//             </h2>
//             <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
//                 {howItWorksSteps.map((step) => (
//                     <div key={step.step} className="flex flex-col items-center gap-4">
//                         <div className={`flex-shrink-0 h-20 w-20 rounded-full flex items-center justify-center font-bold text-5xl font-heading border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] ${step.color}`}>
//                             {step.step}
//                         </div>
//                         <h3 className="font-heading text-2xl font-bold text-primary">{step.title}</h3>
//                         <p className="text-muted-foreground text-center">{step.description}</p>
//                     </div>
//                 ))}
//             </div>
//             <div className="mt-16">
//                 <Button size="lg" asChild className="text-xl py-8 px-10">
//                     <Link href="/submissions/new">Ready to Spark Your Genius?</Link>
//                 </Button>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// }
















import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Rocket, Lightbulb, CheckCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import placeholderData from '@/lib/placeholder-images.json';
import { Button } from "@/components/ui/button";
import Link from "next/link";

const aboutImage = placeholderData.placeholderImages.find(p => p.hint.includes('doodle team'));

const howItWorksSteps = [
    {
        step: 1,
        title: "Choose Your Theme",
        description: "Explore our fun monthly prompts and find a category that sparks your interest.",
        color: "bg-accent text-accent-foreground",
    },
    {
        step: 2,
        title: "Create & Submit",
        description: "Build, write, or design your project. Then, upload it through our easy submission form.",
        color: "bg-secondary text-secondary-foreground",
    },
    {
        step: 3,
        title: "Get Recognized!",
        description: "Receive a certificate, get featured on our showcase wall, and inspire other students!",
        color: "bg-primary text-primary-foreground",
    }
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative w-full pt-20 pb-24 sm:pt-28 sm:pb-32 bg-gradient-to-br from-primary to-accent overflow-hidden">

        <div className="container mx-auto px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-5">
              <Sparkles className="w-10 h-10 text-primary-foreground/80 stroke-[2.5]" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
              About The Student<br />Innovators Journal
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-primary-foreground/95 max-w-3xl mx-auto font-medium">
              Empowering Young Minds to Explore, Create, and Share STEM Magic!
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="relative">
        {/* Doodle dots pattern */}
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 2px, transparent 2px)', backgroundSize: '40px 40px'}}></div>
          
        <div className="container mx-auto py-20 px-4 sm:px-8 relative z-10">
            <Card className="p-8 md:p-10 border-[3px] border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--foreground))] transition-shadow duration-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-lg text-foreground/90">
                <h2 className="font-heading text-4xl font-bold text-secondary">Our Story</h2>
                <p>
                    TSIJ is a safe, fun space for students to turn their curiosity into creative STEM projects. We believe every child is a natural innovator — we just give them the prompts, encouragement, and spotlight to shine!
                </p>
                <p>
                    From first experiments to complex engineering projects, TSIJ celebrates the spirit of inquiry and the joy of discovery at every level. Join us in building a community of future leaders and problem-solvers who will shape tomorrow, today.
                </p>
                </div>
                <div>
                {aboutImage && <Image 
                    src={aboutImage.src}
                    alt={aboutImage.alt}
                    width={aboutImage.width}
                    height={aboutImage.height}
                    className="rounded-lg border-[3px] border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))]"
                    data-ai-hint={aboutImage.hint}
                />}
                </div>
            </div>
            </Card>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))] hover:border-primary hover:-translate-y-1 transition-all duration-300 -rotate-1 hover:rotate-0">
                <CardHeader className="flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full border-[3px] border-foreground">
                    <Lightbulb className="w-8 h-8 text-primary stroke-[2.5]" />
                </div>
                <CardTitle className="text-2xl text-foreground font-heading">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">To encourage STEM creativity and critical thinking in students aged 8-15 through fun, accessible prompts and a platform to share their work with the world.</p>
                </CardContent>
            </Card>
            
            <Card className="border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--secondary))] hover:border-secondary hover:-translate-y-1 transition-all duration-300 rotate-1 hover:rotate-0">
                <CardHeader className="flex-row items-center gap-4">
                <div className="bg-secondary/10 p-3 rounded-full border-[3px] border-foreground">
                    <Rocket className="w-8 h-8 text-secondary stroke-[2.5]" />
                </div>
                <CardTitle className="text-2xl text-foreground font-heading">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-muted-foreground text-base leading-relaxed">To empower every student with the confidence and skills to become an innovator, problem-solver, and a future leader in the STEM fields.</p>
                </CardContent>
            </Card>
            </div>

            {/* How It Works Section */}
            <div className="text-center mt-24">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
                How to Join the Adventure!
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                Getting started is easy! Follow these three simple steps to share your amazing ideas.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
                {howItWorksSteps.map((step, index) => {
                const rotations = ['-rotate-1', '0', 'rotate-1'];
                const rotationClass = rotations[index];
                
                return (
                    <div key={step.step} className={`flex flex-col items-center gap-5 ${rotationClass} hover:rotate-0 transition-transform duration-300`}>
                    <div className={`flex-shrink-0 h-20 w-20 rounded-full flex items-center justify-center font-bold text-4xl font-heading border-[3px] border-foreground shadow-[5px_5px_0px_0px_hsl(var(--foreground))] ${step.color}`}>
                        {step.step}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground text-center leading-relaxed">{step.description}</p>
                    </div>
                );
                })}
            </div>
            
            <div className="mt-16">
                <Button size="lg" asChild className="text-xl font-bold bg-accent hover:bg-accent/90 text-accent-foreground border-[3px] border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10">
                <Link href="/submissions/new">Ready to Spark Your Genius?</Link>
                </Button>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}