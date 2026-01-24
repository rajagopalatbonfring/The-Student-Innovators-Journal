"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { dummyUser } from "@/lib/content";
import { Rocket } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (typeof window !== 'undefined') {
            localStorage.setItem('isLoggedIn', 'true');
        }
        router.push('/dashboard');
    };

    return (
      <div className="bg-background">
         <div className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-gradient-to-br from-primary to-accent">
            <div className="container mx-auto px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
                        Welcome Back, Innovator!
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                        Log in to submit your project, view your submissions, and join the young geniuses!
                    </p>
                </div>
            </div>
        </div>

        <section className="relative">
            <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 2px, transparent 2px)', backgroundSize: '40px 40px'}}></div>
            <div className="relative z-10 container mx-auto px-8 py-20">
                <div className="max-w-md mx-auto">
                    <Card className="p-8 md:p-12">
                        <h2 className="text-3xl font-bold font-heading text-foreground mb-8 text-center">Log In to Your Account</h2>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" placeholder="inventor@awesome.com" defaultValue={dummyUser.email} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" defaultValue="password123" />
                            </div>
                            <div className="text-center pt-4">
                                <Button onClick={handleLogin} size="lg" className="w-full">
                                    <Rocket className="mr-2"/>
                                    Launch In!
                                </Button>
                            </div>
                            <p className="text-center text-sm text-muted-foreground pt-4">
                                New here? <Link href="/signup" className="font-semibold text-primary hover:underline">Join the fun!</Link>
                            </p>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
      </div>
    );
}
