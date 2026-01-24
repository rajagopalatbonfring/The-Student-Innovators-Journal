"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
        localStorage.setItem('isLoggedIn', 'true');
    }
    router.push('/dashboard');
  };

  return (
    <div className="bg-background">
       <div className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-primary">
            <div className="container mx-auto px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
                        Join the Innovators Club!
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                      Create your free account to submit projects, claim certificates, and get featured!
                    </p>
                </div>
            </div>
        </div>
        <section className="relative">
            <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 2px, transparent 2px)', backgroundSize: '40px 40px'}}></div>
            <div className="relative z-10 container mx-auto px-8 py-20">
                <div className="max-w-md mx-auto">
                    <Card className="p-8 md:p-12">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold font-heading text-foreground">Create Your Account</h2>
                        </div>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" type="text" placeholder="Alex Doe" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" placeholder="alex@example.com" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                                <Input id="confirm-password" type="password" />
                            </div>

                            <div className="flex items-center space-x-2 pt-2">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms" className="text-sm text-muted-foreground">
                                    I agree to the <Link href="#" className="underline text-primary">Terms of Service</Link>
                                </Label>
                            </div>
                        
                            <div className="text-center pt-4">
                            <Button onClick={handleSignup} size="lg" className="w-full">
                                    Sign Up & Start Creating
                                </Button>
                            </div>
                            <p className="text-center text-sm text-muted-foreground pt-4">
                                Already have an account? <Link href="/login" className="font-semibold text-primary hover:underline">Log in</Link>
                            </p>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    </div>
  );
}
