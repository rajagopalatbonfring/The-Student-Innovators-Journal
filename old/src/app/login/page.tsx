"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { dummyUser } from "@/lib/content";

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
      <div className="bg-muted/50 py-16 sm:py-24">
        <div className="container mx-auto px-8">
            <div className="max-w-md mx-auto">
                 <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">Login to Your Account</h1>
                    <p className="text-lg text-muted-foreground">
                      Welcome back, innovator!
                    </p>
                </div>
                <Card className="bg-card p-8 border-2 border-foreground shadow-[8px_8px_0px_black]">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="alex@example.com" defaultValue={dummyUser.email} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" defaultValue="password123" />
                        </div>
                        <div className="text-center pt-4">
                            <Button onClick={handleLogin} size="lg" className="w-full border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none">
                                Login
                            </Button>
                        </div>
                        <p className="text-center text-sm text-muted-foreground pt-4">
                            Don't have an account? <Link href="/signup" className="font-semibold text-primary hover:underline">Sign up now</Link>
                        </p>
                    </form>
                </Card>
            </div>
        </div>
      </div>
    );
}
