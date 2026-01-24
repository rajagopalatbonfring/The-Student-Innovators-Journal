"use client";

import Link from 'next/link';
import { Rocket, Menu, X, User, LayoutDashboard, LogOut, UserPlus } from 'lucide-react';
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

const mainNavLinks = [
  { href: '/about', label: 'About' },
  { href: '/prompts', label: 'Prompts' },
  { href: '/archives', label: 'Archives' },
  { href: '/submissions', label: 'Submissions' },
  { href: '/participate', label: 'Participate' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // This effect runs on the client and checks the login state from localStorage.
    // It re-runs every time the page (pathname) changes to keep the header in sync.
    if (typeof window !== 'undefined') {
        const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedInStatus);
    }
  }, [pathname]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('isLoggedIn');
    }
    setIsLoggedIn(false); // Immediately update UI
    setMobileMenuOpen(false); // Close mobile menu if open
    router.push('/login');
  };

  return (
    <header>
      <div className="bg-primary text-primary-foreground p-4 border-b-4 border-foreground shadow-[0_8px_0px_black] text-center">
        <Link href="/" className="flex items-center justify-center gap-3 text-primary-foreground font-bold font-heading w-fit mx-auto">
            <Rocket className="w-10 h-10 shrink-0" />
            <div className="grid">
              <span className="text-2xl md:text-3xl leading-tight">The Student</span>
              <span className="text-2xl md:text-3xl leading-tight">Innovators Journal</span>
            </div>
        </Link>
      </div>
      <div className="bg-card border-b-2 border-foreground">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex justify-between items-center py-3">
              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-1 lg:gap-3 flex-grow">
                {mainNavLinks.map(link => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className={cn(
                      "text-sm font-bold text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md",
                      pathname === link.href && "bg-primary/10 text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="hidden md:flex items-center gap-4">
                  {isLoggedIn ? (
                    <>
                      <Button asChild size="sm" className="border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none">
                          <Link href="/submissions/new">Submit Now!</Link>
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none w-10 h-10">
                                <User className="w-5 h-5" />
                                <span className="sr-only">User Menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="border-2 border-foreground shadow-[4px_4px_0px_black] mt-2">
                            <DropdownMenuItem asChild className="cursor-pointer">
                                <Link href="/dashboard" className="flex items-center">
                                    <LayoutDashboard className="mr-2 h-4 w-4" />
                                    <span>Dashboard</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-foreground/20" />
                            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer flex items-center w-full">
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                     </DropdownMenu>
                    </>
                  ) : (
                    <>
                        <Button asChild variant="ghost" size="sm" className="border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none">
                            <Link href="/login"><User className="w-4 h-4 mr-2"/>Login</Link>
                        </Button>
                        <Button asChild size="sm" className="border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none">
                            <Link href="/signup"><UserPlus className="w-4 h-4 mr-2"/>Sign Up</Link>
                        </Button>
                    </>
                  )}
              </div>

              {/* Mobile Nav Trigger */}
              <div className="md:hidden w-full flex justify-end">
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="border-2 border-foreground shadow-[2px_2px_0px_black]">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open Menu</span>
                      </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full max-w-sm bg-card p-0 border-l-4 border-foreground">
                      <div className="flex justify-between items-center p-6 border-b-4 border-foreground">
                          <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl font-heading">
                              <Rocket className="w-7 h-7" />
                              <span>TSIJ</span>
                          </Link>
                          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="border-2 border-foreground shadow-[2px_2px_0px_black]">
                              <X className="h-6 w-6" />
                              <span className="sr-only">Close Menu</span>
                          </Button>
                      </div>
                      <div className="p-6">
                          <nav className="flex flex-col gap-2">
                              {[{href: '/', label: 'Home'}, ...mainNavLinks].map((link) => (
                                <Link 
                                  key={link.href} 
                                  href={link.href} 
                                  onClick={() => setMobileMenuOpen(false)} 
                                  className={cn(
                                      "text-lg font-semibold text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md",
                                      pathname === link.href && "bg-primary/10 text-primary"
                                  )}
                                >
                                    {link.label}
                                </Link>
                              ))}
                          </nav>
                          <div className="flex flex-col gap-4 mt-8">
                               {isLoggedIn ? (
                                <>
                                  <Button asChild className="w-full border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none" size="lg">
                                      <Link href="/submissions/new" onClick={() => setMobileMenuOpen(false)}>Submit Your Work</Link>
                                  </Button>
                                  <Button asChild variant="secondary" className="w-full border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none" size="lg">
                                    <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>My Dashboard</Link>
                                  </Button>
                                  <Button variant="ghost" className="w-full border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none" size="lg" onClick={handleLogout}>
                                    Logout
                                  </Button>
                                </>
                               ) : (
                                <>
                                    <Button asChild className="w-full border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none" size="lg">
                                        <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                                    </Button>
                                     <Button asChild variant="secondary" className="w-full border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none" size="lg">
                                        <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
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
      </div>
    </header>
  );
}
