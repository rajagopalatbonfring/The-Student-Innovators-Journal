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
    <div className="bg-muted/50 py-16 sm:py-24">
      <div className="container mx-auto px-8">
        <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">Create Your Account</h1>
                <p className="text-lg text-muted-foreground">
                  Join our community of young innovators!
                </p>
            </div>
            
            <Card className="bg-card p-8 border-2 border-foreground shadow-[8px_8px_0px_black]">
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
                       <Button onClick={handleSignup} size="lg" className="w-full border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none">
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
    </div>
  );
}
