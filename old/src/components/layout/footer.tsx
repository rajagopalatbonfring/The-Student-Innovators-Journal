import Link from "next/link";
import { Rocket } from "lucide-react";

const footerLinks = [
    { text: 'About', href: '/about' },
    { text: 'Submissions', href: '/submissions' },
    { text: 'Archives', href: '/archives' },
    { text: 'Dashboard', href: '/dashboard' },
    { text: 'Contact', href: '/contact' },
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms of Service', href: '#' },
];

export function Footer() {
  return (
    <footer className="mt-16">
        <div className="bg-primary border-t-4 border-foreground text-primary-foreground shadow-[0_-8px_0px_black]">
            <div className="container mx-auto px-8 py-12">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
                <Link href="/" className="flex items-center gap-3 font-bold font-heading">
                    <Rocket className="w-8 h-8 shrink-0" />
                    <div className="grid">
                    <span className="text-xl leading-tight">The Student</span>
                    <span className="text-xl leading-tight">Innovators Journal</span>
                    </div>
                </Link>
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    {footerLinks.map(link => (
                    <Link key={link.text} href={link.href} className="text-sm text-primary-foreground/80 hover:text-primary-foreground font-semibold transition-colors">
                        {link.text}
                    </Link>
                    ))}
                </nav>
                </div>
            </div>
        </div>
        <div className="bg-foreground text-background">
            <div className="container mx-auto px-8 py-4 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} The Student Innovators Journal. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
  );
}
