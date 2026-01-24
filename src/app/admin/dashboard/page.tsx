import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Rocket,
  Hourglass,
  CheckCircle,
  Users,
  Search,
  Eye,
  Edit,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Award as CertificateIcon,
} from "lucide-react";
import Link from "next/link";
import { creativePrompts, submissionCategories } from "@/lib/content";

const stats = [
    { title: "New Submissions", value: "12", icon: Rocket, color: "text-accent" },
    { title: "Pending Review", value: "8", icon: Hourglass, color: "text-secondary" },
    { title: "Approved this Month", value: "24", icon: CheckCircle, color: "text-primary" },
    { title: "Total Participants", value: "152", icon: Users, color: "text-foreground" },
];

const adminSubmissions = [
    {
        id: "1",
        title: "Recycled Plastic Rover",
        author: { name: "Leo", age: 10 },
        category: "Junior Engineers",
        submitted: "2024-03-15",
        status: "Featured",
    },
    {
        id: "2",
        title: "A Sudoku Solving Strategy",
        author: { name: "Sam", age: 11 },
        category: "Math Wizards",
        submitted: "2024-09-01",
        status: "Approved",
    },
    {
        id: "3",
        title: "The Homework Machine",
        author: { name: "Alex", age: 12 },
        category: "Young Innovators",
        submitted: "2024-10-05",
        status: "Pending Review",
    },
    {
        id: "4",
        title: "How Do Plants Breathe?",
        author: { name: "Zoe", age: 9 },
        category: "Mini Scientists",
        submitted: "2024-10-21",
        status: "Needs Revision",
    },
    {
        id: "5",
        title: "My First Telescope Observations",
        author: { name: "Ava", age: 9 },
        category: "Mini Scientists",
        submitted: "2024-06-10",
        status: "Featured",
    },
    {
        id: "6",
        title: "Building a Birdhouse",
        author: { name: "Alex", age: 11 },
        category: "Junior Engineers",
        submitted: "2024-04-20",
        status: "Approved",
    },
];

const statusVariants: { [key: string]: "default" | "secondary" | "destructive" | "accent" | "outline" } = {
  "Approved": "default",
  "Featured": "accent",
  "Pending Review": "secondary",
  "Needs Revision": "destructive",
};

export default function AdminDashboardPage() {
    return (
        <div className="bg-background">
            <div className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-gradient-to-br from-primary to-accent">
                <div className="container mx-auto px-8 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
                           Admin Dashboard
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                           Welcome, Journal Manager! Here's your command center for inspiring young innovators.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-8 py-16 space-y-12">
                {/* Stats Section */}
                <section>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <Card key={stat.title} className="hover:-translate-y-1 transition-transform">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-bold text-muted-foreground">{stat.title}</CardTitle>
                                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-4xl font-bold font-heading text-foreground">{stat.value}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Submissions Table Section */}
                <section>
                    <Card className="border-4 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))]">
                        <CardHeader>
                            <CardTitle className="text-3xl font-heading text-foreground">Submissions Queue</CardTitle>
                            <CardDescription>Review, approve, and manage all student projects.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {/* Filters */}
                            <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
                                <div className="relative w-full md:flex-grow">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"/>
                                    <Input placeholder="Search submissions..." className="pl-10" />
                                </div>
                                <div className="flex gap-4 w-full md:w-auto">
                                    <Select>
                                        <SelectTrigger className="w-full md:w-[180px]">
                                            <SelectValue placeholder="All Categories" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {submissionCategories.map(c => <SelectItem key={c.title} value={c.title}>{c.title}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                    <Select>
                                        <SelectTrigger className="w-full md:w-[180px]">
                                            <SelectValue placeholder="All Statuses" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.keys(statusVariants).map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90">Filter</Button>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-foreground/20">
                                            <TableHead className="font-bold">Author</TableHead>
                                            <TableHead className="font-bold">Submission</TableHead>
                                            <TableHead className="font-bold hidden md:table-cell">Category</TableHead>
                                            <TableHead className="font-bold hidden lg:table-cell">Date</TableHead>
                                            <TableHead className="font-bold text-center">Status</TableHead>
                                            <TableHead className="text-right font-bold">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {adminSubmissions.map((submission) => (
                                            <TableRow key={submission.id} className="border-foreground/20">
                                                <TableCell>
                                                    <div className="flex items-center gap-3">
                                                        <Avatar>
                                                            <AvatarFallback>{submission.author.name.charAt(0)}</AvatarFallback>
                                                        </Avatar>
                                                        <div>
                                                            <div className="font-bold text-foreground">{submission.author.name}</div>
                                                            <div className="text-xs text-muted-foreground">Age {submission.author.age}</div>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="font-medium text-foreground hover:text-primary">
                                                    <Link href="#">{submission.title}</Link>
                                                </TableCell>
                                                <TableCell className="text-muted-foreground hidden md:table-cell">{submission.category}</TableCell>
                                                <TableCell className="text-muted-foreground hidden lg:table-cell">{submission.submitted}</TableCell>
                                                <TableCell className="text-center">
                                                    <Badge variant={statusVariants[submission.status] || 'outline'} className="font-bold">
                                                        {submission.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <div className="flex gap-2 justify-end">
                                                        <Button variant="outline" size="icon"><Eye className="h-4 w-4" /></Button>
                                                        <Button variant="outline" size="icon"><Edit className="h-4 w-4" /></Button>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                            
                            {/* Pagination */}
                            <div className="flex items-center justify-end space-x-2 py-4">
                                <Button variant="outline" size="sm" > <ChevronLeft className="mr-2"/> Previous </Button>
                                <Button variant="outline" size="sm" > Next <ChevronRight className="ml-2"/> </Button>
                            </div>
                        </CardContent>
                    </Card>
                </section>
                
                {/* Quick Actions */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">Quick Actions</h2>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="text-center p-6 flex flex-col items-center justify-center hover:-translate-y-2 transition-transform">
                            <BookOpen className="w-12 h-12 text-primary mb-4"/>
                            <CardTitle className="font-heading text-xl mb-2">Manage Prompts</CardTitle>
                            <CardDescription className="mb-4">Create and edit monthly themes.</CardDescription>
                            <Button>Go to Prompts</Button>
                        </Card>
                         <Card className="text-center p-6 flex flex-col items-center justify-center hover:-translate-y-2 transition-transform border-secondary shadow-[8px_8px_0px_0px_hsl(var(--secondary))]">
                            <Users className="w-12 h-12 text-secondary mb-4"/>
                            <CardTitle className="font-heading text-xl mb-2">View Participants</CardTitle>
                            <CardDescription className="mb-4">See all registered young innovators.</CardDescription>
                            <Button variant="secondary">Go to Users</Button>
                        </Card>
                         <Card className="text-center p-6 flex flex-col items-center justify-center hover:-translate-y-2 transition-transform">
                            <CertificateIcon className="w-12 h-12 text-accent mb-4"/>
                            <CardTitle className="font-heading text-xl mb-2">Issue Awards</CardTitle>
                            <CardDescription className="mb-4">Manage and distribute certificates.</CardDescription>
                            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Go to Awards</Button>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
}
