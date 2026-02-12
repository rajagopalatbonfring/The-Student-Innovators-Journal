import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Users, Mail, Sparkles, Star, Award, BookOpen, Heart, UserCheck } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Editor-in-Chief
const editorInChief = {
  name: "Dr. Sarah Chen",
  title: "Editor-in-Chief",
  affiliation: "Department of Science Education, University of California",
  email: "editor@youngscientistjournal.org",
  bio: "Dr. Chen is passionate about making science accessible to young learners and has 15+ years of experience in science education and publishing."
};

// Advisory Board
const advisoryBoard = [
  {
    name: "Prof. Michael Johnson",
    affiliation: "Stanford University, USA",
    expertise: "Science Communication & Youth Education"
  },
  {
    name: "Dr. Aisha Patel",
    affiliation: "Oxford University, UK",
    expertise: "STEM Outreach & Pedagogy"
  },
  {
    name: "Prof. Carlos Rodriguez",
    affiliation: "National University of Singapore",
    expertise: "Educational Psychology"
  },
  {
    name: "Dr. Emma Williams",
    affiliation: "MIT, USA",
    expertise: "Experimental Science & Youth Mentorship"
  }
];

// Associate Editors
const associateEditors = [
  {
    name: "Dr. James Lee",
    affiliation: "University of Toronto, Canada",
    expertise: "Physical Sciences"
  },
  {
    name: "Dr. Patricia Martinez",
    affiliation: "University of Barcelona, Spain",
    expertise: "Life Sciences & Biology"
  },
  {
    name: "Dr. Robert Kim",
    affiliation: "Seoul National University, South Korea",
    expertise: "Chemistry & Materials Science"
  },
  {
    name: "Dr. Lisa Anderson",
    affiliation: "University of Melbourne, Australia",
    expertise: "Environmental Science"
  },
  {
    name: "Dr. Ahmed Hassan",
    affiliation: "American University of Cairo, Egypt",
    expertise: "Physics & Engineering"
  }
];

// Editorial Board Members
const editorialBoard = [
  {
    name: "Dr. Jennifer Brown",
    affiliation: "Harvard University, USA"
  },
  {
    name: "Dr. David Thompson",
    affiliation: "University of Cambridge, UK"
  },
  {
    name: "Dr. Maria Garcia",
    affiliation: "Complutense University of Madrid, Spain"
  },
  {
    name: "Dr. Yuki Tanaka",
    affiliation: "University of Tokyo, Japan"
  },
  {
    name: "Dr. Sophie Dubois",
    affiliation: "Sorbonne University, France"
  },
  {
    name: "Dr. Raj Sharma",
    affiliation: "Indian Institute of Technology, India"
  },
  {
    name: "Dr. Isabella Rossi",
    affiliation: "University of Milan, Italy"
  },
  {
    name: "Dr. Thomas Weber",
    affiliation: "Ludwig Maximilian University, Germany"
  },
  {
    name: "Dr. Grace Okonkwo",
    affiliation: "University of Lagos, Nigeria"
  },
  {
    name: "Dr. Lucas Silva",
    affiliation: "University of São Paulo, Brazil"
  },
  {
    name: "Dr. Anna Kowalski",
    affiliation: "University of Warsaw, Poland"
  },
  {
    name: "Dr. Mohammed Al-Said",
    affiliation: "King Saud University, Saudi Arabia"
  }
];

const boardRoles = [
  {
    icon: Star,
    title: "Editor-in-Chief",
    description: "Oversees all editorial decisions and ensures the highest quality standards for young scientists.",
  },
  {
    icon: Award,
    title: "Advisory Board",
    description: "Provides strategic guidance and expertise from leading universities worldwide.",
  },
  {
    icon: BookOpen,
    title: "Associate Editors",
    description: "Manages peer review process and coordinates with reviewers in specific subject areas.",
  },
  {
    icon: UserCheck,
    title: "Editorial Board",
    description: "Reviews submissions, provides constructive feedback, and helps maintain scientific integrity.",
  }
];

export default function EditorialBoardPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className="relative w-full pt-20 pb-24 sm:pt-28 sm:pb-32 bg-primary overflow-hidden">
        <div className="container mx-auto px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-5">
              <Users className="w-10 h-10 text-primary-foreground/80 stroke-[2.5]" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
              Editorial Board
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-primary-foreground/95 max-w-3xl mx-auto font-medium">
              Meet the team of scientists and educators who guide our young scientists!
            </p>
          </div>
        </div>
      </div>

      <section className="relative">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 2px, transparent 2px)', backgroundSize: '40px 40px'}}></div>
        <div className="relative z-10 container mx-auto px-8 py-20 space-y-24">
          
          {/* Board Structure Overview */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
                Our Editorial Structure
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our board brings together experts from leading universities worldwide to support young scientists.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {boardRoles.map((role, index) => {
                const rotations = ['-rotate-1', 'rotate-1', '-rotate-1', 'rotate-1'];
                const rotationClass = rotations[index % 4];
                return (
                  <Card 
                    key={role.title} 
                    className={cn(
                      "flex flex-col text-center p-6 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--primary))] hover:border-primary transition-all duration-300 hover:-translate-y-2", 
                      rotationClass, 
                      "hover:rotate-0"
                    )}
                  >
                    <div className="mx-auto p-5 rounded-full bg-primary/10 mb-4 border-[3px] border-foreground">
                      <role.icon className="w-12 h-12 text-primary stroke-[2.5]" />
                    </div>
                    <CardTitle className="font-heading text-xl mb-2 text-foreground">{role.title}</CardTitle>
                    <p className="text-muted-foreground flex-grow leading-relaxed text-sm">{role.description}</p>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Editor-in-Chief */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-2">
                Editor-in-Chief
              </h2>
            </div>
            
            <Card className="max-w-4xl mx-auto p-8 md:p-10 border-[3px] border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--foreground))] transition-shadow duration-200">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="p-6 rounded-full bg-primary/10 border-[3px] border-foreground shrink-0">
                  <Star className="w-16 h-16 text-primary stroke-[2.5]" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-bold text-foreground font-heading mb-2">{editorInChief.name}</h3>
                  <p className="text-lg text-primary font-semibold mb-3">{editorInChief.title}</p>
                  <p className="text-muted-foreground mb-3">{editorInChief.affiliation}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">{editorInChief.bio}</p>
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">Email:</span>{" "}
                    <a href={`mailto:${editorInChief.email}`} className="text-primary hover:underline">
                      {editorInChief.email}
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Advisory Board */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
                Advisory Board
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Distinguished experts providing strategic guidance and oversight.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {advisoryBoard.map((member, index) => {
                const rotations = ['-rotate-1', 'rotate-1', '-rotate-1', 'rotate-1'];
                const rotationClass = rotations[index % 4];
                return (
                  <Card 
                    key={member.name}
                    className={cn(
                      "p-6 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--secondary))] hover:border-secondary transition-all duration-300 hover:-translate-y-1",
                      rotationClass,
                      "hover:rotate-0"
                    )}
                  >
                    <h3 className="text-xl font-bold text-foreground font-heading mb-2">{member.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{member.affiliation}</p>
                    <p className="text-sm text-secondary font-medium">{member.expertise}</p>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Associate Editors */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
                Associate Editors
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Subject matter experts overseeing peer review in their specialized areas.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {associateEditors.map((editor, index) => {
                const rotations = ['-rotate-1', 'rotate-1', '-rotate-1', 'rotate-1', '-rotate-1'];
                const rotationClass = rotations[index % 5];
                return (
                  <Card 
                    key={editor.name}
                    className={cn(
                      "p-5 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--accent))] hover:border-accent transition-all duration-300 hover:-translate-y-1",
                      rotationClass,
                      "hover:rotate-0"
                    )}
                  >
                    <h3 className="text-lg font-bold text-foreground font-heading mb-2">{editor.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{editor.affiliation}</p>
                    <p className="text-xs text-accent font-medium">{editor.expertise}</p>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Editorial Board */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
                Editorial Board Members
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Reviewers from around the world helping young scientists publish their best work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
              {editorialBoard.map((member, index) => {
                const rotations = ['-rotate-1', 'rotate-1', '-rotate-1', 'rotate-1'];
                const rotationClass = rotations[index % 4];
                return (
                  <Card 
                    key={member.name}
                    className={cn(
                      "p-4 border-[3px] border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:shadow-[6px_6px_0px_0px_hsl(var(--primary))] hover:border-primary transition-all duration-300 hover:-translate-y-1",
                      rotationClass,
                      "hover:rotate-0"
                    )}
                  >
                    <h3 className="text-base font-bold text-foreground font-heading mb-1">{member.name}</h3>
                    <p className="text-muted-foreground text-xs">{member.affiliation}</p>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Our Commitment */}
          <section>
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 md:p-10 border-[3px] border-foreground shadow-[10px_10px_0px_0px_hsl(var(--foreground))] hover:shadow-[12px_12px_0px_0px_hsl(var(--foreground))] transition-shadow duration-200 bg-secondary/5">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <Heart className="w-12 h-12 text-primary stroke-[2.5]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">Our Commitment to Young Scientists</h2>
                </div>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Our editorial board is dedicated to nurturing the next generation of scientists. Every member brings expertise, 
                    enthusiasm, and a deep commitment to supporting young researchers.
                  </p>
                  <p>
                    <strong className="text-foreground">Quality with Kindness:</strong> We maintain high standards while providing 
                    constructive, encouraging feedback that helps young scientists grow.
                  </p>
                  <p>
                    <strong className="text-foreground">Global Perspective:</strong> Our international board ensures diverse 
                    viewpoints and approaches to science education and research.
                  </p>
                  <p>
                    <strong className="text-foreground">Accessibility:</strong> We're committed to making science publishing 
                    accessible and understandable for students of all backgrounds and experience levels.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-10 border-[3px] border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:shadow-[10px_10px_0px_0px_hsl(var(--foreground))] transition-shadow duration-200 -rotate-1 hover:rotate-0">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <Mail className="w-12 h-12 text-secondary stroke-[2.5]" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">
                    Questions for the Editorial Board?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Have questions about the review process, need guidance on your submission, 
                    or want to learn more about our editorial standards? We're here to help!
                  </p>
                  <Button 
                    size="lg" 
                    asChild 
                    className="text-lg font-bold bg-secondary hover:bg-secondary/90 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-6 px-9"
                  >
                    <Link href="/contact">
                      <Mail className="mr-2 h-5 w-5" />
                      Contact Us
                    </Link>
                  </Button>
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
                
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Ready to Submit Your Work?
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                  Our editorial board is excited to review your scientific discoveries!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Button 
                    size="lg" 
                    asChild 
                    className="text-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10"
                  >
                    <Link href="/submissions/new">Submit Your Work!</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    asChild 
                    variant="outline" 
                    className="text-black text-xl font-bold bg-background hover:bg-background/80 border-[3px] border-foreground shadow-[6px_6px_0px_0px_hsl(var(--foreground))] hover:shadow-[8px_8px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-200 py-7 px-10"
                  >
                    <Link href="/about">Learn More</Link>
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