// "use client";

// import Link from 'next/link';
// import { Rocket, Menu, X, User, LayoutDashboard, LogOut, Lightbulb, Sparkles, Archive, Award, MessageSquare, Home, Key, Trophy, Edit } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
// import { useState, useEffect } from 'react';
// import { usePathname, useRouter } from 'next/navigation';
// import { cn } from '@/lib/utils';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// const mainNavLinks = [
//   { href: '/', label: 'Home', icon: Home },
//   { href: '/about', label: 'About', icon: Lightbulb },
//   { href: '/prompts', label: 'Prompts', icon: Sparkles },
//   { href: '/archives', label: 'Archives', icon: Archive },
//   { href: '/participate', label: 'Participate', icon: Award },
//   { href: '/contact', label: 'Contact', icon: MessageSquare },
// ];

// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//         const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
//         setIsLoggedIn(loggedInStatus);
//     }
//   }, [pathname]);

//   const handleLogout = () => {
//     if (typeof window !== 'undefined') {
//         localStorage.removeItem('isLoggedIn');
//     }
//     setIsLoggedIn(false);
//     setMobileMenuOpen(false);
//     router.push('/login');
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full bg-background border-b-4 border-foreground">
//         <div className="container mx-auto px-4 sm:px-8">
//           <div className="flex justify-between items-center py-4">
//               <Link href="/" className="flex items-center justify-center gap-3 text-foreground font-bold font-heading w-fit">
//                   <Rocket className="w-10 h-10 shrink-0 text-primary" />
//                   <div className="grid">
//                     <span className="text-2xl md:text-3xl leading-tight">TSIJ - The Student</span>
//                     <span className="text-2xl md:text-3xl leading-tight">Innovators Journal</span>
//                   </div>
//               </Link>
              
//               {/* Desktop Nav */}
//               <nav className="hidden md:flex items-center gap-1 lg:gap-2">
//                 {mainNavLinks.map(link => (
//                   <Link 
//                     key={link.label} 
//                     href={link.href} 
//                     className={cn(
//                       "text-sm font-bold text-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-lg flex items-center gap-2",
//                       pathname === link.href && "bg-primary/10 text-primary"
//                     )}
//                   >
//                     <link.icon className="w-4 h-4" />
//                     {link.label}
//                   </Link>
//                 ))}
//               </nav>

//               <div className="hidden md:flex items-center gap-2">
//                   {isLoggedIn ? (
//                     <>
//                       <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
//                           <Link href="/submissions/new"><Rocket className="w-4 h-4 mr-2"/>New Submission!</Link>
//                       </Button>
//                       <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                             <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
//                                 <Avatar>
//                                     <AvatarFallback>A</AvatarFallback>
//                                 </Avatar>
//                                 <span className="sr-only">User Menu</span>
//                             </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent align="end" className="border-2 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] mt-2">
//                             <DropdownMenuItem asChild className="cursor-pointer">
//                                 <Link href="/dashboard" className="flex items-center">
//                                     <LayoutDashboard className="mr-2 h-4 w-4" />
//                                     <span>Dashboard</span>
//                                 </Link>
//                             </DropdownMenuItem>
//                             <DropdownMenuItem asChild className="cursor-pointer">
//                                 <Link href="/dashboard" className="flex items-center">
//                                     <Edit className="mr-2 h-4 w-4" />
//                                     <span>Profile</span>
//                                 </Link>
//                             </DropdownMenuItem>
//                              <DropdownMenuItem asChild className="cursor-pointer">
//                                 <Link href="/dashboard" className="flex items-center">
//                                     <Award className="mr-2 h-4 w-4" />
//                                     <span>Certificates</span>
//                                 </Link>
//                             </DropdownMenuItem>
//                             <DropdownMenuSeparator className="bg-border" />
//                             <DropdownMenuItem onClick={handleLogout} className="cursor-pointer flex items-center w-full">
//                                 <LogOut className="mr-2 h-4 w-4" />
//                                 <span>Logout</span>
//                             </DropdownMenuItem>
//                         </DropdownMenuContent>
//                      </DropdownMenu>
//                     </>
//                   ) : (
//                     <>
//                         <Button asChild variant="outline" size="sm">
//                             <Link href="/login"><Key className="w-4 h-4 mr-2"/>Login</Link>
//                         </Button>
//                         <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
//                             <Link href="/signup"><Rocket className="w-4 h-4 mr-2"/>Join Now!</Link>
//                         </Button>
//                     </>
//                   )}
//               </div>

//               {/* Mobile Nav Trigger */}
//               <div className="md:hidden">
//                 <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
//                   <SheetTrigger asChild>
//                       <Button variant="outline" size="icon">
//                         <Menu className="h-6 w-6" />
//                         <span className="sr-only">Open Menu</span>
//                       </Button>
//                   </SheetTrigger>
//                   <SheetContent side="right" className="w-full max-w-sm bg-background p-0 border-l-4 border-foreground">
//                       <div className="flex justify-between items-center p-6 border-b-4 border-foreground">
//                           <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl font-heading">
//                               <Rocket className="w-7 h-7" />
//                               <span>TSIJ</span>
//                           </Link>
//                           <Button variant="outline" size="icon" onClick={() => setMobileMenuOpen(false)}>
//                               <X className="h-6 w-6" />
//                               <span className="sr-only">Close Menu</span>
//                           </Button>
//                       </div>
//                        {isLoggedIn && (
//                         <div className="p-4 border-b-4 border-foreground">
//                           <div className="flex items-center gap-3">
//                             <Avatar>
//                               <AvatarFallback>A</AvatarFallback>
//                             </Avatar>
//                             <div>
//                               <p className="font-bold text-foreground">Welcome, Innovator!</p>
//                               <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="text-sm text-primary hover:underline">View Dashboard</Link>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                       <div className="p-6">
//                           <nav className="flex flex-col gap-2">
//                               {mainNavLinks.map((link) => (
//                                 <Link 
//                                   key={link.href} 
//                                   href={link.href} 
//                                   onClick={() => setMobileMenuOpen(false)} 
//                                   className={cn(
//                                       "text-lg font-semibold text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg flex items-center gap-3",
//                                       pathname === link.href && "bg-primary/10 text-primary"
//                                   )}
//                                 >
//                                     <link.icon className="w-5 h-5" />
//                                     {link.label}
//                                 </Link>
//                               ))}
//                           </nav>
//                           <div className="flex flex-col gap-4 mt-8">
//                                {isLoggedIn ? (
//                                 <>
//                                   <Button asChild className="w-full" size="lg" onClick={() => setMobileMenuOpen(false)}>
//                                       <Link href="/submissions/new">New Submission!</Link>
//                                   </Button>
//                                   <Button variant="outline" className="w-full" size="lg" onClick={handleLogout}>
//                                     Logout
//                                   </Button>
//                                 </>
//                                ) : (
//                                 <>
//                                     <Button asChild className="w-full" size="lg">
//                                         <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
//                                     </Button>
//                                      <Button asChild variant="secondary" className="w-full" size="lg">
//                                         <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>Join Now!</Link>
//                                     </Button>
//                                 </>
//                                )}
//                           </div>
//                       </div>
//                   </SheetContent>
//                 </Sheet>
//               </div>
//           </div>
//         </div>
//     </header>
//   );
// }













"use client";

import Link from 'next/link';
import { Rocket, Menu, X, User, LayoutDashboard, LogOut, Lightbulb, Sparkles, Archive, Award, MessageSquare, Home, Key, Trophy, Edit, Newspaper, Search, FileText, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const mainNavLinks = [
  { href: '/about', label: 'About', icon: Lightbulb },
  // { href: '/prompts', label: 'Prompts', icon: Sparkles },
  { href: '/archives', label: 'Showcase wall', icon: Archive },
  // { href: '/participate', label: 'Participate', icon: Award },
  { href: '/submissions', label: 'Categories', icon: Layers },
  { href: '/editorial-board', label: 'Editorial Board', icon: Layers },
  { href: '/student-research-explorers', label: 'Explorers', icon: Search },
  { href: '/experiment-to-article', label: 'Experiment to Articles', icon: FileText },
  { href: '/contact', label: 'Contact', icon: MessageSquare },
  // { href: '/newsletter', label: 'Newsletter', icon: Newspaper },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
        const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedInStatus);
    }
  }, [pathname]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('isLoggedIn');
    }
    setIsLoggedIn(false);
    setMobileMenuOpen(false);
    router.push('/login');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b-4 border-foreground">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center justify-center gap-3 text-foreground font-bold font-heading w-fit">
                  <Rocket className="w-10 h-10 shrink-0 text-primary" />
                  <div className="grid">
                    <span className="text-2xl md:text-3xl leading-tight">The Student</span>
                    <span className="text-2xl md:text-3xl leading-tight">Innovators Journal</span>
                  </div>
              </Link>
              
              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                {mainNavLinks.map(link => (
                  <Link 
                    key={link.label} 
                    href={link.href} 
                    className={cn(
                      "text-sm font-bold text-foreground/80 hover:text-primary transition-colors px-3 py-2 rounded-lg flex items-center gap-2",
                      pathname === link.href && "bg-primary/10 text-primary"
                    )}
                  >
                    {/* <link.icon className="w-4 h-4" /> */}
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="hidden md:flex items-center gap-2">
                  {isLoggedIn ? (
                    <>
                      <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                          <Link href="/submissions/new"><Rocket className="w-4 h-4 mr-2"/>New Submission!</Link>
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon" className="rounded-full w-10 h-10">
                                <Avatar>
                                    <AvatarFallback>A</AvatarFallback>
                                </Avatar>
                                <span className="sr-only">User Menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="border-2 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] mt-2">
                            <DropdownMenuItem asChild className="cursor-pointer">
                                <Link href="/dashboard" className="flex items-center">
                                    <LayoutDashboard className="mr-2 h-4 w-4" />
                                    <span>Dashboard</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild className="cursor-pointer">
                                <Link href="/dashboard" className="flex items-center">
                                    <Edit className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </Link>
                            </DropdownMenuItem>
                             <DropdownMenuItem asChild className="cursor-pointer">
                                <Link href="/dashboard" className="flex items-center">
                                    <Award className="mr-2 h-4 w-4" />
                                    <span>Certificates</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-border" />
                            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer flex items-center w-full">
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                     </DropdownMenu>
                    </>
                  ) : (
                    <>
                        <Button asChild variant="outline" size="sm">
                            <Link href="/login"><Key className="w-4 h-4 mr-2"/>Login</Link>
                        </Button>
                        <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/signup"><Rocket className="w-4 h-4 mr-2"/>Join Now!</Link>
                        </Button>
                    </>
                  )}
              </div>

              {/* Mobile Nav Trigger */}
              <div className="md:hidden">
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open Menu</span>
                      </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full max-w-sm bg-background p-0 border-l-4 border-foreground">
                      <div className="flex justify-between items-center p-6 border-b-4 border-foreground">
                          <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl font-heading">
                              <Rocket className="w-7 h-7" />
                              <span>TSIJ</span>
                          </Link>
                          <Button variant="outline" size="icon" onClick={() => setMobileMenuOpen(false)}>
                              <X className="h-6 w-6" />
                              <span className="sr-only">Close Menu</span>
                          </Button>
                      </div>
                       {isLoggedIn && (
                        <div className="p-4 border-b-4 border-foreground">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>A</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-bold text-foreground">Welcome, Innovator!</p>
                              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="text-sm text-primary hover:underline">View Dashboard</Link>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="p-6">
                          <nav className="flex flex-col gap-2">
                              {mainNavLinks.map((link) => (
                                <Link 
                                  key={link.href} 
                                  href={link.href} 
                                  onClick={() => setMobileMenuOpen(false)} 
                                  className={cn(
                                      "text-lg font-semibold text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg flex items-center gap-3",
                                      pathname === link.href && "bg-primary/10 text-primary"
                                  )}
                                >
                                    <link.icon className="w-5 h-5" />
                                    {link.label}
                                </Link>
                              ))}
                          </nav>
                          <div className="flex flex-col gap-4 mt-8">
                               {isLoggedIn ? (
                                <>
                                  <Button asChild className="w-full" size="lg" onClick={() => setMobileMenuOpen(false)}>
                                      <Link href="/submissions/new">New Submission!</Link>
                                  </Button>
                                  <Button variant="outline" className="w-full" size="lg" onClick={handleLogout}>
                                    Logout
                                  </Button>
                                </>
                               ) : (
                                <>
                                    <Button asChild className="w-full" size="lg">
                                        <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                                    </Button>
                                     <Button asChild variant="secondary" className="w-full" size="lg">
                                        <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>Join Now!</Link>
                                    </Button>
                                </>
                               )}
                          </div>
                      </div>
                  </SheetContent>
                </Sheet>
              </div>
          </div>
        </div>
    </header>
  );
}
