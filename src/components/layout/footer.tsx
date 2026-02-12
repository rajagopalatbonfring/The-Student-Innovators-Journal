// import Link from "next/link";
// import { Rocket } from "lucide-react";

// const linkGroups = [
//     {
//         title: "Explore",
//         links: [
//             { text: 'Home', href: '/' },
//             { text: 'Prompts', href: '/prompts' },
//             { text: 'Archives', href: '/archives' },
//         ]
//     },
//     {
//         title: "Get Involved",
//         links: [
//             { text: 'Participate', href: '/participate' },
//             { text: 'Submissions', href: '/submissions' },
//         ]
//     },
//     {
//         title: "About & Help",
//         links: [
//             { text: 'About', href: '/about' },
//             { text: 'Contact', href: '/contact' },
//             { text: 'Dashboard', href: '/dashboard' },
//         ]
//     }
// ];

// const legalLinks = [
//     { text: 'Privacy Policy', href: '#' },
//     { text: 'Terms of Service', href: '#' },
// ];

// export function Footer() {
//   return (
//     <footer className="mt-16 bg-muted border-t-4 border-foreground">
//         <div className="container mx-auto px-8 py-16">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//                 {/* Logo Section */}
//                 <div className="md:col-span-1">
//                     <Link href="/" className="inline-flex items-center gap-3 font-bold font-heading">
//                         <Rocket className="w-10 h-10 shrink-0 text-primary" />
//                         <div className="grid">
//                             <span className="text-xl leading-tight text-foreground">The Student</span>
//                             <span className="text-xl leading-tight text-foreground">Innovators Journal</span>
//                         </div>
//                     </Link>
//                     <p className="mt-4 text-muted-foreground text-sm">Made with curiosity for young minds everywhere!</p>
//                 </div>

//                 {/* Links Section */}
//                 <div className="md:col-span-3">
//                     <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
//                         {linkGroups.map(group => (
//                             <div key={group.title}>
//                                 <h3 className="font-heading font-bold text-lg text-foreground mb-4">{group.title}</h3>
//                                 <ul className="space-y-2">
//                                     {group.links.map(link => (
//                                         <li key={link.text}>
//                                             <Link href={link.href} className="text-sm text-foreground/80 hover:text-primary font-semibold transition-colors hover:underline">
//                                                 {link.text}
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="bg-card/50 border-t-2 border-foreground">
//             <div className="container mx-auto px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
//                 <p className="text-center sm:text-left text-sm text-muted-foreground">&copy; {new Date().getFullYear()} The Student Innovators Journal. All Rights Reserved.</p>
//                 <div className="flex gap-x-6 gap-y-2">
//                     {legalLinks.map(link => (
//                          <Link key={link.text} href={link.href} className="text-sm text-muted-foreground hover:text-primary font-semibold transition-colors hover:underline">
//                             {link.text}
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     </footer>
//   );
// }

















import Link from "next/link";
import { Rocket } from "lucide-react";

const linkGroups = [
    {
        title: "Explore",
        links: [
            { text: 'Home', href: '/' },
            { text: 'Prompts', href: '/prompts' },
            { text: 'Archives', href: '/archives' },
            { text: 'Newsletter', href: '/newsletter' },
        ]
    },
    {
        title: "Get Involved",
        links: [
            { text: 'Participate', href: '/participate' },
            { text: 'Explorers', href: '/student-research-explorers' },
            { text: 'Experiment to Article', href: '/experiment-to-article' },
            { text: 'Categories', href: '/submissions' },
        ]
    },
    {
        title: "About & Help",
        links: [
            { text: 'About', href: '/about' },
            { text: 'Contact', href: '/contact' },
            { text: 'Dashboard', href: '/dashboard' },
        ]
    }
];

const legalLinks = [
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms of Service', href: '#' },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-muted border-t-4 border-foreground">
        <div className="container mx-auto px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Logo Section */}
                <div className="md:col-span-1">
                    <Link href="/" className="inline-flex items-center gap-3 font-bold font-heading">
                        <Rocket className="w-10 h-10 shrink-0 text-primary" />
                        <div className="grid">
                            <span className="text-xl leading-tight text-foreground">The Student</span>
                            <span className="text-xl leading-tight text-foreground">Innovators Journal</span>
                        </div>
                    </Link>
                    <p className="mt-4 text-muted-foreground text-sm">Made with curiosity for young minds everywhere!</p>
                </div>

                {/* Links Section */}
                <div className="md:col-span-3">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                        {linkGroups.map(group => (
                            <div key={group.title}>
                                <h3 className="font-heading font-bold text-lg text-foreground mb-4">{group.title}</h3>
                                <ul className="space-y-2">
                                    {group.links.map(link => (
                                        <li key={link.text}>
                                            <Link href={link.href} className="text-sm text-foreground/80 hover:text-primary font-semibold transition-colors hover:underline">
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-card/20 border-t-2 border-foreground">
            <div className="container mx-auto px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-center sm:text-left text-sm text-muted-foreground">&copy; {new Date().getFullYear()} The Student Innovators Journal. All Rights Reserved.</p>
                
                
                <div className="flex gap-x-6 gap-y-2">
                    {legalLinks.map(link => (
                         <Link key={link.text} href={link.href} className="text-sm text-muted-foreground hover:text-primary font-semibold transition-colors hover:underline">
                            {link.text}
                        </Link>
                    ))}
                </div>
                
                <div className='flex justify-center items-center gap-4'>
                    <h1 className="text-xl text-gray-700 font-heading">Published by</h1>
                    <a href="https://iihhschool.org">
                    <img src="https://iihhschool.org/iihh-frontend/assets/images/IIHH_dash-logo-ClXvDo4q.jpg" width={140} className='rounded-full' alt="IIHH-School" />
                    </a>
                </div>

            </div>
        </div>
    </footer>
  );
}
