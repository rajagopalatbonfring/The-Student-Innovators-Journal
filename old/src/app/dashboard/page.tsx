import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { dummyUser, dummySubmissions } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { PlusCircle } from "lucide-react";

const statusColors: { [key: string]: string } = {
  Published: "bg-green-500/20 text-green-700",
  "Under Review": "bg-yellow-500/20 text-yellow-700",
  "Needs Revision": "bg-red-500/20 text-red-700",
};

export default function DashboardPage() {
    return (
        <div className="bg-muted/50 py-16 sm:py-24">
            <div className="container mx-auto px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-left mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">
                            Welcome Back, {dummyUser.name.split(' ')[0]}!
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Ready to share your next big idea?
                        </p>
                    </div>

                    <div className="flex justify-start mb-12">
                        <Button asChild size="lg" className="border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none">
                            <Link href="/submissions/new">
                                <PlusCircle className="mr-2" />
                                Start New Submission
                            </Link>
                        </Button>
                    </div>

                    <Card className="bg-card border-2 border-foreground shadow-[8px_8px_0px_black]">
                        <CardHeader>
                            <CardTitle className="text-2xl font-heading text-foreground">My Submissions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Title</TableHead>
                                        <TableHead>Category</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead className="text-right">Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {dummySubmissions.map((submission) => (
                                        <TableRow key={submission.title}>
                                            <TableCell className="font-medium">{submission.title}</TableCell>
                                            <TableCell>{submission.category}</TableCell>
                                            <TableCell>{submission.date}</TableCell>
                                            <TableCell className="text-right">
                                                <Badge className={`border-2 border-foreground/50 font-bold ${statusColors[submission.status]}`}>
                                                  {submission.status}
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
