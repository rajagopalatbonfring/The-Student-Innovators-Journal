// import { Card } from "@/components/ui/card";
// import { Award, Trophy, Star, Newspaper } from "lucide-react";
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';

// const howToParticipateSteps = [
//     {
//         step: 1,
//         title: "Pick Your Theme",
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

// const rewards = [
//     {
//         icon: Award,
//         title: "E-Certificate of Participation",
//         description: "Every valid submission receives an official TSIJ certificate to celebrate your effort."
//     },
//     {
//         icon: Star,
//         title: "Featured in the Journal",
//         description: "The most creative and inspiring projects are featured in our journal issues."
//     },
//     {
//         icon: Trophy,
//         title: "Top Awards & Badges",
//         description: "Earn special badges like 'STEM Star' or 'Bright Builder' for outstanding work."
//     },
//     {
//         icon: Newspaper,
//         title: "Newsletter Shoutout",
//         description: "Top submissions get a special mention in our monthly 'STEM Spark' newsletter."
//     },
// ]

// export default function ParticipatePage() {
//     return (
//       <div className="bg-background">
//          <div className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-primary">
//             <div className="container mx-auto px-8 text-center">
//                 <div className="max-w-4xl mx-auto">
//                     <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
//                         Join the Young Innovators Adventure!
//                     </h1>
//                     <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
//                       Every idea counts! Submit your project, get recognized, earn certificates, and inspire others. Open to students everywhere — no experience needed, just curiosity!
//                     </p>
//                 </div>
//             </div>
//         </div>

//         <div className="container mx-auto px-8 py-20">
//             {/* How to Participate Section */}
//             <div className="text-center mb-24">
//                 <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-12">
//                     It's Super Easy to Join!
//                 </h2>
//                 <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
//                     {howToParticipateSteps.map((step) => (
//                         <div key={step.step} className="flex flex-col items-center gap-4">
//                             <div className={`flex-shrink-0 h-20 w-20 rounded-full flex items-center justify-center font-bold text-5xl font-heading border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] ${step.color}`}>
//                                 {step.step}
//                             </div>
//                             <h3 className="font-heading text-2xl font-bold text-primary">{step.title}</h3>
//                             <p className="text-muted-foreground text-center">{step.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Recognition & Benefits Section */}
//             <div className="mb-24">
//                 <div className="text-center max-w-3xl mx-auto mb-16">
//                     <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading">Awesome Rewards for Every Participant!</h2>
//                     <p className="mt-4 text-lg text-muted-foreground">Even if it's your first try — everyone gets recognition and a certificate! Top entries get extra special badges and features.</p>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {rewards.map((reward, index) => {
//                       const rotationClass = index % 2 === 0 ? '-rotate-2' : 'rotate-2';
//                       return (
//                         <Card key={reward.title} className={`group flex flex-col items-center text-center gap-4 p-6 h-full transition-all duration-300 hover:!rotate-0 hover:-translate-y-2 hover:!shadow-[12px_12px_0px_0px_hsl(var(--primary))] ${rotationClass}`}>
//                             <div className="bg-secondary/10 p-5 rounded-full transition-colors">
//                                 <reward.icon className="w-12 h-12 text-secondary" />
//                             </div>
//                             <h3 className="font-bold text-xl text-foreground font-heading">{reward.title}</h3>
//                             <p className="text-sm text-muted-foreground">{reward.description}</p>
//                         </Card>
//                     )})}
//                 </div>
//             </div>
            
//             {/* Bottom CTA */}
//             <div className="text-center">
//               <div className="bg-gradient-to-r from-secondary to-primary p-10 rounded-xl border-2 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] text-primary-foreground">
//                 <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Become a TSIJ Innovator?</h2>
//                 <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Your adventure starts now!</p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                     <Button size="lg" asChild className="text-xl py-8 px-10 bg-accent text-accent-foreground hover:bg-accent/90">
//                         <Link href="/submissions/new">Submit Your Project!</Link>
//                     </Button>
//                     <Button size="lg" asChild className="text-xl py-8 px-10" variant="outline">
//                         <Link href="/prompts">Explore Creative Prompts</Link>
//                     </Button>
//                 </div>
//               </div>
//             </div>
//         </div>
//       </div>
//     );
// }
















import { Card } from "@/components/ui/card";
import { Award, Trophy, Star, Newspaper, Sparkles } from "lucide-react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const howToParticipateSteps = [
    {
        step: 1,
        title: "Pick Your Theme",
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

const rewards = [
    {
        icon: Award,
        title: "E-Certificate of Participation",
        description: "Every valid submission receives an official TSIJ certificate to celebrate your effort."
    },
    {
        icon: Star,
        title: "Featured in the Journal",
        description: "The most creative and inspiring projects are featured in our journal issues."
    },
    {
        icon: Trophy,
        title: "Top Awards & Badges",
        description: "Earn special badges like 'STEM Star' or 'Bright Builder' for outstanding work."
    },
    {
        icon: Newspaper,
        title: "Newsletter Shoutout",
        description: "Top submissions get a special mention in our monthly 'STEM Spark' newsletter."
    },
]

export default function ParticipatePage() {
    return (
      <div className="bg-background">
        {/* Hero Section */}
        <div className="relative w-full pt-20 pb-24 sm:pt-28 sm:pb-32 bg-primary overflow-hidden">
          <div className="container mx-auto px-8 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              
              <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
                Join the Young Innovators<br />Adventure!
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-primary-foreground/95 max-w-3xl mx-auto font-medium">
                Every idea counts! Submit your project, get recognized, and inspire others.
              </p>
            </div>
          </div>
        </div>

        <section className="relative">
        {/* Doodle dots pattern */}
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 2px, transparent 2px)', backgroundSize: '40px 40px'}}></div>
          
          <div className="container mx-auto px-8 relative z-10"></div>
            <div className="container mx-auto px-8 py-20">
            {/* How to Participate Section */}
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
                It's Super Easy to Join!
                </h2>
                <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                Follow these three simple steps to share your amazing ideas with the world.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
                {howToParticipateSteps.map((step, index) => {
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
            </div>

            {/* Recognition & Benefits Section */}
            <div className="mb-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading">
                    Awesome Rewards for Every Participant!
                </h2>
                <p className="mt-5 text-lg text-muted-foreground">
                    Even if it's your first try — everyone gets recognition and a certificate! Top entries get extra special badges and features.
                </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {rewards.map((reward, index) => {
                    const rotations = ['-rotate-1', 'rotate-1', '-rotate-1', 'rotate-1'];
                    const rotationClass = rotations[index % 4];
                    
                    return (
                    <Card key={reward.title} className={`group flex flex-col items-center text-center gap-4 p-6 h-full border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))] hover:border-primary transition-all duration-300 hover:-translate-y-1.5 ${rotationClass} hover:rotate-0`}>
                        <div className="bg-secondary/10 p-5 rounded-full border-[3px] border-foreground transition-transform group-hover:scale-105 duration-300">
                        <reward.icon className="w-12 h-12 text-secondary stroke-[2.5]" />
                        </div>
                        <h3 className="font-bold text-xl text-foreground font-heading">{reward.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{reward.description}</p>
                    </Card>
                    );
                })}
                </div>
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center">
                <div className="bg-gradient-to-r from-secondary to-primary p-10 rounded-xl border-[3px] border-foreground shadow-[10px_10px_0px_0px_hsl(var(--foreground))] text-primary-foreground rotate-1 hover:rotate-0 hover:shadow-[12px_12px_0px_0px_hsl(var(--foreground))] transition-all duration-300">
                <div className="flex justify-center mb-4">
                    <Sparkles className="w-10 h-10 stroke-[2.5]" />
                </div>
                
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                    Ready to Become a TSIJ Innovator?
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Your adventure starts now!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <Button size="lg" asChild className="text-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10">
                    <Link href="/submissions/new">Submit Your Project!</Link>
                    </Button>
                    <Button size="lg" asChild variant="outline" className="text-xl text-black font-bold bg-background hover:bg-background/80 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10">
                    <Link href="/prompts">Explore Creative Prompts</Link>
                    </Button>
                </div>
                </div>
            </div>
            </div>
        </section>
      </div>
    );
}