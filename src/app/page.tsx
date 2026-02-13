// import Link from 'next/link';
// import { Card, CardTitle, CardDescription, CardContent, CardHeader } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Rocket, PenTool, Lightbulb, ArrowRight } from 'lucide-react';
// import Image from 'next/image';
// import placeholderData from '@/lib/placeholder-images.json';
// import { submissionCategories, creativePrompts } from '@/lib/content';

// const { placeholderImages } = placeholderData;
// const heroImage = placeholderImages.find(p => p.hint.includes('doodle science'));

// export default function Home() {
//   return (
//     <>
//       <section className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-primary">
//         <div className="container mx-auto px-8 text-center">
//           <div className="max-w-4xl mx-auto">
//               <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
//                 Welcome to The Student Innovators Journal!
//               </h1>
//               <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
//                 Where Young Minds Spark Big STEM Ideas!
//               </p>
//           </div>
         
//           <div className="flex flex-col sm:flex-row gap-4 justify-center pt-10">
//             <Button asChild size="lg" className="text-lg bg-accent hover:bg-accent/90">
//                 <Link href="/submissions/new">Start Your Submission Now! <Rocket className="ml-2" /></Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 sm:py-24 bg-background">
//          <div className="container mx-auto px-8">
//             <Card className="max-w-4xl mx-auto p-6 md:p-8 border-4 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))] bg-[#B5E61D]">
//                 <h2 className="font-bold font-heading text-3xl md:text-4xl text-foreground text-center">Current Monthly Theme:</h2>
//                 <p className="mt-2 text-2xl md:text-3xl text-center font-semibold text-foreground">{creativePrompts[0].title}</p>
//                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
//                     <Button asChild size="lg" variant="default" className="text-lg bg-accent hover:bg-accent/90">
//                         <Link href="/submissions/new">Submit Your Idea Now! <Rocket className="ml-2" /></Link>
//                     </Button>
//                     <Button asChild size="lg" variant="outline" className="bg-background hover:bg-background/80">
//                         <Link href="/prompts">Explore Prompts</Link>
//                     </Button>
//                 </div>
//             </Card>
//         </div>
//       </section>

//       <section className="py-20 sm:py-24 bg-background">
//         <div className="container mx-auto px-8">
//             <div className="text-center max-w-3xl mx-auto mb-16">
//                 <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading">A Platform for Every Innovator</h2>
//                 <p className="mt-4 text-lg text-muted-foreground">We welcome a wide range of projects and ideas. What will you create?</p>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
//                 {submissionCategories.map((category, index) => {
//                   const rotationClass = index % 2 === 0 ? '-rotate-2' : 'rotate-2';
//                   return (
//                     <Link href="/submissions" key={category.title}>
//                         <div className={`group flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-card border-2 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:border-primary transition-all duration-300 h-full hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_hsl(var(--primary))] ${rotationClass} hover:rotate-0`}>
//                             <div className="bg-secondary/10 p-5 rounded-full transition-colors">
//                                 <category.icon className="w-12 h-12 text-secondary" />
//                             </div>
//                             <h3 className="font-bold text-2xl text-foreground font-heading">{category.title}</h3>
//                             <p className="text-base text-muted-foreground">{category.description}</p>
//                              <Button variant="link" className="mt-2 font-bold text-primary">Submit in This Category <ArrowRight className="ml-2" /></Button>
//                         </div>
//                     </Link>
//                 )})}
//             </div>
//              <div className="text-center mt-24">
//                 <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-xl py-8 px-10">
//                     <Link href="/submissions/new">Ready to Share Your Genius?</Link>
//                 </Button>
//             </div>
//         </div>
//       </section>
//     </>
//   );
// }









'use client';


import { useState, useEffect } from 'react';
import Link from 'next/link';
import WelcomeModal from '@/components/welcome-modal';
import { Card, CardTitle, CardDescription, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, PenTool, Lightbulb, ArrowRight, Sparkles, Zap, Star, Heart } from 'lucide-react';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { submissionCategories, creativePrompts } from '@/lib/content';

const { placeholderImages } = placeholderData;
const heroImage = placeholderImages.find(p => p.hint.includes('doodle science'));

export default function Home() {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show only if not seen before
    const hasSeen = localStorage.getItem('tsijWelcomeSeen');
    if (!hasSeen) {
      setShowModal(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('tsijWelcomeSeen', 'true');
    setShowModal(false);
  };

  return (
    <>
      {showModal && <WelcomeModal onClose={handleClose} />}

      {/* Hero Section with Enhanced Doodle Style */}
      <section className="relative w-full pt-20 pb-24 sm:pt-28 sm:pb-32 bg-primary overflow-hidden">
        <div className="container mx-auto px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Decorative stars */}
            <div className="flex justify-center gap-4 mb-6">
              <Star className="w-8 h-8 fill-primary-foreground text-foreground stroke-[3]" />
              <Sparkles className="w-10 h-10 fill-primary-foreground text-foreground stroke-[3]" />
              <Star className="w-8 h-8 fill-primary-foreground text-foreground stroke-[3]" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading relative inline-block drop-shadow-[0_6px_3px_rgba(0,0,0,0.3)]">
              <span className="relative">
                Welcome to The Student 
              </span>
              <br />
              <span className="relative inline-block mt-2">
                Innovators Journal!
                <Zap className="inline-block w-12 h-12 ml-2 fill-accent text-foreground stroke-[3]" />
              </span>
            </h1>
            
            <div className="mt-8 relative inline-block">
              <p className="text-2xl md:text-3xl font-bold text-foreground px-6 py-3 bg-card border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] rotate-1">
                Where Young Minds Spark Big STEM Ideas! ✨
              </p>
            </div>
          </div>
         
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-12">
            <Button asChild size="lg" className="text-xl font-bold bg-accent hover:bg-accent/90 text-accent-foreground border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7">
              <Link href="/submissions/new">
                Start Your Submission Now! <Rocket className="ml-2 w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className='relative'>
          {/* <div className="absolute -top-10 right-0 left-0">
              <svg width="100%" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0,10 Q25,0 50,10 T100,10 T150,10 T200,10 T250,10 T300,10 T350,10 T400,10 T450,10 T500,10 T550,10 T600,10 T650,10 T700,10 T750,10 T800,10 T850,10 T900,10 T950,10 T1000,10" 
                      stroke="hsl(var(--foreground))" strokeWidth="4" fill="none"/>
              </svg>
          </div> */}
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 2px, transparent 2px)', backgroundSize: '40px 40px'}}></div>
        {/* Current Theme Section */}
        <section className="py-24 sm:py-28 bg-background relative">
          {/* Doodle dots pattern */}
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 2px, transparent 2px)', backgroundSize: '40px 40px'}}></div>
          
          <div className="container mx-auto px-8 relative z-10">
            <Card className="max-w-4xl mx-auto p-8 md:p-12 border-4 border-foreground shadow-[16px_16px_0px_0px_hsl(var(--foreground))] bg-[#B5E61D] rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Lightbulb className="w-10 h-10 fill-accent text-foreground stroke-[3]" />
                <h2 className="font-bold font-heading text-3xl md:text-5xl text-foreground">Current Monthly Theme</h2>
                <Lightbulb className="w-10 h-10 fill-accent text-foreground stroke-[3]" />
              </div>
              
              <div className="bg-card border-4 border-foreground p-6 mt-6 -rotate-1 shadow-[8px_8px_0px_0px_hsl(var(--foreground))]">
                <p className="text-3xl md:text-4xl text-center font-bold text-foreground font-heading">
                  {creativePrompts[0].title}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
                <Button asChild size="lg" className="text-xl font-bold bg-accent hover:bg-accent/90 text-accent-foreground border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7">
                  <Link href="/submissions/new">
                    Submit Your Idea Now! <Rocket className="ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="text-xl font-bold bg-background hover:bg-background/80 text-foreground border-4 border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7">
                  <Link href="/prompts">Explore Prompts <ArrowRight className="ml-2" /></Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 sm:py-28 bg-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 2px, transparent 2px)', backgroundSize: '40px 40px'}}></div>

          <div className="container mx-auto px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-block relative">
                <h2 className="text-4xl md:text-6xl font-bold text-foreground font-heading relative z-10">
                  A Platform for Every Innovator
                </h2>
              </div>
              <p className="mt-8 text-xl text-muted-foreground font-medium">
                We welcome a wide range of projects and ideas. What will you create? 🚀
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {submissionCategories.map((category, index) => {
                const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2'];
                const rotationClass = rotations[index % 4];
                
                return (
                  <Link href="/submissions" key={category.title}>
                    <div className={`group flex flex-col items-center text-center gap-5 p-8 rounded-2xl bg-card border-4 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:shadow-[12px_12px_0px_0px_hsl(var(--primary))] transition-all duration-300 h-full hover:-translate-y-2 ${rotationClass} hover:rotate-0 cursor-pointer hover:border-primary`}>
                      <div className="bg-secondary/10 p-6 rounded-full border-4 border-foreground transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300">
                        <category.icon className="w-14 h-14 text-secondary stroke-[2.5]" />
                      </div>
                      <h3 className="font-bold text-2xl text-foreground font-heading">
                        {category.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                      <div className="mt-auto pt-4">
                        <span className="inline-flex items-center font-bold text-primary border-b-4 border-foreground group-hover:border-primary transition-colors">
                          Submit Here <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            
            <div className="text-center mt-28">
              <div className="inline-block relative">
                <Button asChild size="lg" className="text-2xl font-bold bg-accent hover:bg-accent/90 text-accent-foreground border-4 border-foreground shadow-[10px_10px_0px_0px_hsl(var(--foreground))] hover:shadow-[14px_14px_0px_0px_hsl(var(--foreground))] hover:-translate-y-2 transition-all duration-200 py-8 px-12 rotate-1 hover:rotate-0">
                  <Link href="/submissions/new">
                    Ready to Share Your Genius? 🌟
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}