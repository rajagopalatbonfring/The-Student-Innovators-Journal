import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { dummyUser, dummySubmissions } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Rocket } from "lucide-react";

// Map submission statuses to badge variants for consistent styling
const statusVariants: { [key: string]: "default" | "secondary" | "destructive" | "outline" } = {
  Published: "default",
  "Under Review": "secondary",
  "Needs Revision": "destructive",
};

export default function DashboardPage() {
    return (
        <div className="bg-background">
             {/* Hero Section */}
            <div className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-gradient-to-br from-primary to-accent">
                <div className="container mx-auto px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
                            Welcome Back, {dummyUser.name.split(' ')[0]}!
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                           Your Innovator Dashboard — Check your projects, grab certificates, and see your STEM stars shine!
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-8 py-20">
                <div className="max-w-5xl mx-auto">
                    {/* My Submissions Section */}
                    <Card>
                        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">
                            <CardTitle className="text-3xl font-heading text-foreground">My Projects & Submissions</CardTitle>
                             <Button asChild>
                                <Link href="/submissions/new">
                                    <Rocket className="mr-2" />
                                    Launch New Submission
                                </Link>
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow className="border-border">
                                        <TableHead className="font-bold">Title</TableHead>
                                        <TableHead className="font-bold">Category</TableHead>
                                        <TableHead className="font-bold">Date</TableHead>
                                        <TableHead className="text-right font-bold">Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {dummySubmissions.length > 0 ? (
                                        dummySubmissions.map((submission) => (
                                            <TableRow key={submission.title} className="border-border">
                                                <TableCell className="font-medium text-foreground">{submission.title}</TableCell>
                                                <TableCell className="text-muted-foreground">{submission.category}</TableCell>
                                                <TableCell className="text-muted-foreground">{submission.date}</TableCell>
                                                <TableCell className="text-right">
                                                    <Badge variant={statusVariants[submission.status] || 'outline'} className="font-bold">
                                                      {submission.status}
                                                    </Badge>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    ) : (
                                        <TableRow>
                                            <TableCell colSpan={4} className="text-center py-12">
                                                <div className="flex flex-col items-center gap-4">
                                                    <h3 className="text-xl font-bold font-heading text-foreground">No submissions yet!</h3>
                                                    <p className="text-muted-foreground">Time to create something awesome!</p>
                                                    <Button asChild variant="secondary" className="mt-4">
                                                        <Link href="/submissions/new">Start Your First Submission</Link>
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="container mx-auto px-8 pb-20">
                 <div className="text-center">
                  <div className="bg-gradient-to-r from-secondary to-primary p-10 rounded-xl border-2 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] text-primary-foreground">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Keep Innovating — The Next Big Idea Is Yours!</h2>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Ready to share your next project with the world?</p>
                    <Button size="lg" asChild className="text-xl py-8 px-10 bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/submissions/new">Submit Something New!</Link>
                    </Button>
                  </div>
                </div>
            </div>
        </div>
    );
}
