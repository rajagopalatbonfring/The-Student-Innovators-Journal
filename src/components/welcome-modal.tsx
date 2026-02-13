// 'use client';
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, ChevronLeft, ChevronRight, Sparkles, Lightbulb, Rocket, FileText, Award, Star, Zap, Users, CheckCircle } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';

// // Hook to lock body scroll when modal is open
// const useBodyScrollLock = () => {
//   useEffect(() => {
//     const originalOverflow = document.body.style.overflow;
//     const originalPaddingRight = document.body.style.paddingRight;
    
//     const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
//     document.body.style.overflow = 'hidden';
//     if (scrollbarWidth > 0) {
//       document.body.style.paddingRight = `${scrollbarWidth}px`;
//     }
    
//     return () => {
//       document.body.style.overflow = originalOverflow;
//       document.body.style.paddingRight = originalPaddingRight;
//     };
//   }, []);
// };

// const slides = [
//   {
//     id: 1,
//     icon: Sparkles,
//     title: 'Welcome to TSIJ!',
//     subtitle: '🚀 The Student Innovators Journal',
//     description: 'A safe, fun space where students aged 8-15 turn their curiosity into creative STEM projects. Every child is a natural innovator!',
//     color: 'bg-accent text-accent-foreground',
//     features: [
//       'Safe & supportive community',
//       'Ages 8-15 welcome',
//       'STEM creativity unleashed'
//     ],
//     rotation: '-rotate-1'
//   },
//   {
//     id: 2,
//     icon: Lightbulb,
//     title: 'Choose Your Theme',
//     subtitle: '💡 Pick What Sparks Your Interest',
//     description: 'Browse our fun monthly STEM prompts! Find a category that excites you - from engineering to experiments, coding to crafts.',
//     color: 'bg-primary text-primary-foreground',
//     features: [
//       'Monthly STEM prompts',
//       'Multiple categories',
//       'Something for everyone'
//     ],
//     rotation: 'rotate-1'
//   },
//   {
//     id: 3,
//     icon: FileText,
//     title: 'Create Your Project',
//     subtitle: '✨ Build, Write, Design & Upload',
//     description: 'Turn your idea into reality! Work on your project at your own pace, then submit it through our easy upload form.',
//     color: 'bg-secondary text-secondary-foreground',
//     features: [
//       'Videos, images & documents',
//       'Easy submission process',
//       'Work at your own pace'
//     ],
//     rotation: '-rotate-1'
//   },
//   {
//     id: 4,
//     icon: CheckCircle,
//     title: 'Expert Review',
//     subtitle: '🌟 Our Team Reviews Your Work',
//     description: 'Our editorial board reviews each submission with care and provides encouraging feedback to help young innovators grow!',
//     color: 'bg-accent text-accent-foreground',
//     features: [
//       'Professional review team',
//       'Supportive feedback',
//       'Learn and improve'
//     ],
//     rotation: 'rotate-1'
//   },
//   {
//     id: 5,
//     icon: Award,
//     title: 'Get Published & Recognized!',
//     subtitle: '🏆 Your Work, Celebrated',
//     description: 'Get your certificate, see your work featured on our showcase wall, and inspire other students around the world!',
//     color: 'bg-primary text-primary-foreground',
//     features: [
//       'Published in archives',
//       'Digital certificate',
//       'Inspire others globally'
//     ],
//     rotation: '-rotate-1'
//   }
// ];

// interface WelcomeModalProps {
//   onClose: () => void;
// }

// export default function WelcomeModal({ onClose }: WelcomeModalProps) {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [direction, setDirection] = useState(0);

//   useBodyScrollLock();

//   const slideVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//       scale: 0.8
//     }),
//     center: {
//       zIndex: 1,
//       x: 0,
//       opacity: 1,
//       scale: 1
//     },
//     exit: (direction: number) => ({
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//       scale: 0.8
//     })
//   };

//   const swipeConfidenceThreshold = 10000;
//   const swipePower = (offset: number, velocity: number) => {
//     return Math.abs(offset) * velocity;
//   };

//   const paginate = (newDirection: number) => {
//     const newSlide = currentSlide + newDirection;
//     if (newSlide >= 0 && newSlide < slides.length) {
//       setDirection(newDirection);
//       setCurrentSlide(newSlide);
//     }
//   };

//   const goToSlide = (index: number) => {
//     setDirection(index > currentSlide ? 1 : -1);
//     setCurrentSlide(index);
//   };

//   const handleKeyDown = (e: KeyboardEvent) => {
//     if (e.key === 'ArrowLeft') paginate(-1);
//     if (e.key === 'ArrowRight') paginate(1);
//     if (e.key === 'Escape') onClose();
//   };

//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyDown);
//     return () => document.removeEventListener('keydown', handleKeyDown);
//   }, [currentSlide]);

//   const currentSlideData = slides[currentSlide];
//   const CurrentIcon = currentSlideData.icon;

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
//       {/* Doodle Background Pattern */}
//       <div 
//         className="absolute inset-0 opacity-5" 
//         style={{
//           backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', 
//           backgroundSize: '40px 40px'
//         }}
//       />

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
//         animate={{ opacity: 1, scale: 1, rotate: 0 }}
//         exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
//         transition={{ type: "spring", duration: 0.5 }}
//         className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden"
//       >
//         <Card className="border-[4px] border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))] bg-background overflow-hidden">
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 z-20 w-12 h-12 bg-background hover:bg-accent rounded-full flex items-center justify-center border-[3px] border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all"
//             aria-label="Close modal"
//           >
//             <X className="w-6 h-6 text-foreground stroke-[3]" />
//           </button>

//           {/* Progress Dots */}
//           <div className="absolute top-6 left-6 right-20 z-20 flex gap-3">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`h-3 rounded-full border-[2px] border-foreground transition-all ${
//                   index === currentSlide 
//                     ? 'bg-foreground flex-1 shadow-[2px_2px_0px_0px_hsl(var(--foreground))]' 
//                     : 'bg-background w-10 hover:bg-muted'
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>

//           <CardContent className="p-0">
//             <div className="relative overflow-hidden bg-muted/20">
//               <AnimatePresence initial={false} custom={direction} mode="wait">
//                 <motion.div
//                   key={currentSlide}
//                   custom={direction}
//                   variants={slideVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   transition={{
//                     x: { type: "spring", stiffness: 300, damping: 30 },
//                     opacity: { duration: 0.2 },
//                     scale: { duration: 0.2 }
//                   }}
//                   drag="x"
//                   dragConstraints={{ left: 0, right: 0 }}
//                   dragElastic={1}
//                   onDragEnd={(e, { offset, velocity }) => {
//                     const swipe = swipePower(offset.x, velocity.x);
//                     if (swipe < -swipeConfidenceThreshold) {
//                       paginate(1);
//                     } else if (swipe > swipeConfidenceThreshold) {
//                       paginate(-1);
//                     }
//                   }}
//                   className="min-h-[600px] p-8 md:p-16"
//                 >
//                   <div className="max-w-4xl mx-auto">
//                     {/* Step Badge */}
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: 0.2, type: "spring" }}
//                       className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-bold mb-6 border-[3px] border-foreground shadow-[4px_4px_0px_0px_hsl(var(--accent))]"
//                     >
//                       <Star className="w-4 h-4 fill-current" />
//                       <span>STEP {currentSlide + 1} OF {slides.length}</span>
//                     </motion.div>

//                     {/* Icon */}
//                     <motion.div
//                       initial={{ scale: 0, rotate: -180 }}
//                       animate={{ scale: 1, rotate: 0 }}
//                       transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
//                       className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-6 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] ${currentSlideData.color} ${currentSlideData.rotation} hover:rotate-0 transition-transform`}
//                     >
//                       <CurrentIcon className="w-12 h-12 stroke-[2.5]" />
//                     </motion.div>

//                     {/* Title */}
//                     <motion.h2
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.4 }}
//                       className="text-5xl md:text-6xl font-extrabold font-heading text-foreground leading-tight mb-4"
//                     >
//                       {currentSlideData.title}
//                     </motion.h2>

//                     {/* Subtitle */}
//                     <motion.p
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.5 }}
//                       className="text-2xl md:text-3xl font-bold text-primary mb-6"
//                     >
//                       {currentSlideData.subtitle}
//                     </motion.p>

//                     {/* Description */}
//                     <motion.p
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.6 }}
//                       className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl"
//                     >
//                       {currentSlideData.description}
//                     </motion.p>

//                     {/* Features Grid */}
//                     <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
//                       {currentSlideData.features.map((feature, index) => (
//                         <motion.div
//                           key={index}
//                           initial={{ opacity: 0, scale: 0.8 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
//                           className="flex items-start gap-3 p-4 bg-background border-[3px] border-foreground rounded-lg shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_0px_hsl(var(--primary))] hover:-translate-y-1 transition-all"
//                         >
//                           <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 border-[2px] border-foreground">
//                             <CheckCircle className="w-4 h-4 text-primary-foreground stroke-[3]" />
//                           </div>
//                           <span className="text-sm font-bold text-foreground leading-tight">{feature}</span>
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* Doodle Decoration */}
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 1 }}
//                       className="absolute bottom-8 right-8 opacity-10"
//                     >
//                       {currentSlide === 0 && <Rocket className="w-32 h-32 text-accent rotate-12" />}
//                       {currentSlide === 1 && <Lightbulb className="w-32 h-32 text-primary -rotate-12" />}
//                       {currentSlide === 2 && <Zap className="w-32 h-32 text-secondary rotate-12" />}
//                       {currentSlide === 3 && <Users className="w-32 h-32 text-accent -rotate-12" />}
//                       {currentSlide === 4 && <Award className="w-32 h-32 text-primary rotate-12" />}
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* Navigation Footer */}
//             <div className="bg-muted p-6 flex items-center justify-between border-t-[4px] border-foreground">
//               <button
//                 onClick={() => paginate(-1)}
//                 disabled={currentSlide === 0}
//                 className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold border-[3px] border-foreground transition-all ${
//                   currentSlide === 0
//                     ? 'bg-muted/50 text-muted-foreground cursor-not-allowed'
//                     : 'bg-background hover:bg-secondary text-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1'
//                 }`}
//               >
//                 <ChevronLeft className="w-5 h-5 stroke-[3]" />
//                 <span className="hidden sm:inline">Previous</span>
//               </button>

//               <div className="flex gap-2">
//                 {slides.map((slide, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToSlide(index)}
//                     className={`w-3 h-3 rounded-full border-[2px] border-foreground transition-all ${
//                       index === currentSlide
//                         ? `${slide.color} w-10 shadow-[2px_2px_0px_0px_hsl(var(--foreground))]`
//                         : 'bg-background hover:bg-muted'
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                   />
//                 ))}
//               </div>

//               {currentSlide === slides.length - 1 ? (
//                 <button
//                   onClick={onClose}
//                   className="flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-accent text-accent-foreground border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all"
//                 >
//                   <span>Start Innovating!</span>
//                   <Rocket className="w-5 h-5 stroke-[3]" />
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => paginate(1)}
//                   className="flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-primary text-primary-foreground border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all"
//                 >
//                   <span className="hidden sm:inline">Next</span>
//                   <ChevronRight className="w-5 h-5 stroke-[3]" />
//                 </button>
//               )}
//             </div>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// }





'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Lightbulb, Rocket, FileText, Award, CheckCircle, ArrowRight, Home } from 'lucide-react';
import { Card } from '@/components/ui/card';

// Hook to lock body scroll when modal is open
const useBodyScrollLock = () => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, []);
};

const steps = [
  {
    id: 'welcome',
    number: 1,
    icon: Sparkles,
    title: 'The Student Innovators Journal',
    heading: 'Where Young Minds Spark Ideas! 🚀',
    description: 'TSIJ is your creative playground for STEM projects. From first experiments to complex engineering - we celebrate every innovation!',
    highlights: [
      { label: 'Ages', value: '8-15 Years' },
      { label: 'Focus', value: 'STEM Projects' },
      { label: 'Community', value: 'Global' }
    ],
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent'
  },
  {
    id: 'choose',
    number: 2,
    icon: Lightbulb,
    title: 'Browse & Choose',
    heading: 'Pick Your Perfect Challenge 💡',
    description: 'Explore our monthly STEM prompts and find what excites you! Engineering? Science? Technology? Math? We have it all.',
    highlights: [
      { label: 'Categories', value: 'Multiple Options' },
      { label: 'Updates', value: 'Every Month' },
      { label: 'Difficulty', value: 'All Levels' }
    ],
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary'
  },
  {
    id: 'create',
    number: 3,
    icon: FileText,
    title: 'Create & Upload',
    heading: 'Build Something Amazing! ✨',
    description: 'Work on your project at your own pace. When ready, upload videos, images, documents - whatever format shows your genius best!',
    highlights: [
      { label: 'Formats', value: 'Video, Images, Docs' },
      { label: 'Timeline', value: 'Your Own Pace' },
      { label: 'Support', value: 'Easy Process' }
    ],
    bgColor: 'bg-secondary/10',
    borderColor: 'border-secondary'
  },
  {
    id: 'review',
    number: 4,
    icon: CheckCircle,
    title: 'Review & Feedback',
    heading: 'Get Expert Guidance 🌟',
    description: 'Our editorial team reviews your work with care, providing supportive feedback to help you grow as an innovator.',
    highlights: [
      { label: 'Team', value: 'Expert Reviewers' },
      { label: 'Feedback', value: 'Constructive' },
      { label: 'Time', value: 'Quick Turnaround' }
    ],
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent'
  },
  {
    id: 'publish',
    number: 5,
    icon: Award,
    title: 'Publish & Shine',
    heading: 'Celebrate Your Success! 🏆',
    description: 'Get published in our archives, receive your certificate, and join our showcase wall to inspire students worldwide!',
    highlights: [
      { label: 'Recognition', value: 'Certificate' },
      { label: 'Showcase', value: 'Featured Wall' },
      { label: 'Impact', value: 'Inspire Others' }
    ],
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary'
  }
];

interface WelcomeModalProps {
  onClose: () => void;
}

export default function WelcomeModal({ onClose }: WelcomeModalProps) {
  const [activeStep, setActiveStep] = useState('welcome');

  useBodyScrollLock();

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentStepIndex = steps.findIndex(s => s.id === activeStep);
  const currentStep = steps[currentStepIndex];
  const StepIcon = currentStep.icon;
  const isLastStep = currentStepIndex === steps.length - 1;

  const goToNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setActiveStep(steps[currentStepIndex + 1].id);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-white/70 backdrop-blur-sm">
      {/* Doodle Background */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)', 
          backgroundSize: '40px 40px'
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ type: "spring", duration: 0.6 }}
        className="relative w-full max-w-6xl max-h-[85vh] flex"
      >
        {/* Left Sidebar Navigation */}
        <div className="hidden md:flex flex-col w-64 bg-background border-[4px] rounded-xl border-foreground border-r-0 shadow-[-12px_-12px_0px_0px_hsl(var(--foreground))] overflow-y-auto">
          <div className="p-6 border-b-[3px] border-foreground bg-primary/5">
            <div className="flex items-center gap-2 mb-2">
              <Home className="w-5 h-5 text-primary stroke-[3]" />
              <h3 className="font-heading font-bold text-foreground">Your Journey</h3>
            </div>
            <p className="text-xs text-muted-foreground">Follow the steps below</p>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = step.id === activeStep;
              const isPast = index < currentStepIndex;
              
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border-[3px] transition-all text-left ${
                    isActive
                      ? 'bg-primary text-primary-foreground border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] -translate-y-1'
                      : isPast
                      ? 'bg-muted border-muted-foreground/30 hover:border-foreground'
                      : 'bg-background border-border hover:border-foreground hover:shadow-[2px_2px_0px_0px_hsl(var(--foreground))]'
                  }`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border-[2px] flex items-center justify-center font-bold text-sm ${
                    isActive ? 'border-primary-foreground bg-primary-foreground/20' : 'border-current'
                  }`}>
                    {isPast ? <CheckCircle className="w-4 h-4 stroke-[3]" /> : step.number}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm truncate">{step.title}</div>
                    {isActive && (
                      <div className="text-xs opacity-80 mt-0.5">Current step</div>
                    )}
                  </div>
                  <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'stroke-[3]' : 'stroke-[2]'}`} />
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t-[3px] border-foreground bg-muted/30">
            <div className="text-xs text-center text-muted-foreground mb-2">
              Step {currentStep.number} of {steps.length}
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden border-[2px] border-foreground">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStepIndex + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <Card className="flex-1 border-[4px] border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))] bg-background overflow-hidden flex flex-col">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-background hover:bg-destructive/10 rounded-full flex items-center justify-center border-[3px] border-foreground shadow-[3px_3px_0px_0px_hsl(var(--foreground))] hover:shadow-[5px_5px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-foreground stroke-[3]" />
          </button>

          {/* Mobile Progress Dots */}
          <div className="md:hidden flex justify-center gap-2 p-4 border-b-[3px] border-foreground bg-muted/20">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`h-2 rounded-full border-[2px] border-foreground transition-all ${
                  step.id === activeStep
                    ? 'bg-primary w-8'
                    : index < currentStepIndex
                    ? 'bg-muted-foreground w-2'
                    : 'bg-muted w-2'
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`p-8 md:p-12 ${currentStep.bgColor}`}
              >
                {/* Step Number Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 border-[3px] border-foreground shadow-[5px_5px_0px_0px_hsl(var(--foreground))] ${
                    currentStepIndex % 2 === 0 ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                  } rotate-3`}
                >
                  <StepIcon className="w-8 h-8 stroke-[2.5]" />
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl font-extrabold font-heading text-foreground leading-tight mb-3"
                >
                  {currentStep.heading}
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl"
                >
                  {currentStep.description}
                </motion.p>

                {/* Highlights Cards */}
                <div className="grid sm:grid-cols-3 gap-4 mb-10">
                  {currentStep.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                      className={`p-5 bg-background border-[3px] ${currentStep.borderColor} rounded-xl shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all ${
                        index % 3 === 0 ? '-rotate-1' : index % 3 === 1 ? 'rotate-0' : 'rotate-1'
                      } hover:rotate-0`}
                    >
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">
                        {highlight.label}
                      </div>
                      <div className="text-lg font-black font-heading text-foreground">
                        {highlight.value}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Tips Section */}
                {currentStep.id === 'welcome' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="p-6 bg-primary/10 border-[3px] border-primary rounded-xl"
                  >
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-6 h-6 text-primary stroke-[2.5] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-foreground mb-2">Why Join TSIJ?</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Safe and supportive community</li>
                          <li>• Professional feedback from experts</li>
                          <li>• Recognition and certificates</li>
                          <li>• Connect with young innovators globally</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Navigation */}
          <div className="border-t-[4px] border-foreground bg-muted p-6 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">Step {currentStep.number}</span> of {steps.length}
            </div>

            <div className="flex gap-3">
              {!isLastStep ? (
                <button
                  onClick={goToNextStep}
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-primary text-primary-foreground border-[3px] border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-5 h-5 stroke-[3]" />
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-accent text-accent-foreground border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all"
                >
                  <span>Start Creating!</span>
                  <Rocket className="w-5 h-5 stroke-[3]" />
                </button>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}