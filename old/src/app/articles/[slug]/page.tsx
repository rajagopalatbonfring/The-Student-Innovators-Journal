import { journalYears } from "@/lib/content";
import { notFound } from "next/navigation";
import Image from "next/image";
import placeholderData from '@/lib/placeholder-images.json';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User, Calendar, Layers } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function ArticlePage({ params }: { params: { slug: string } }) {
    const allArticles = journalYears.flatMap(year => 
        year.issues.flatMap(issue => 
            issue.volumes.flatMap(volume => 
                volume.articles.map(article => ({...article, issue, volume}))
            )
        )
    );
    
    const articleData = allArticles.find(a => a.slug === params.slug);

    if (!articleData) {
        notFound();
    }
    
    const { issue, volume, ...article } = articleData;
    const image = placeholderData.placeholderImages.find(p => p.hint.includes(article.imageHint));

    return (
        <div className="bg-muted/50 py-16 sm:py-24">
            <div className="container mx-auto px-8">
                <Card className="max-w-4xl mx-auto bg-card p-4 sm:p-8 border-2 border-foreground shadow-[8px_8px_0px_black]">
                    <CardHeader>
                        {image && (
                             <div className="mb-8">
                                <Image
                                    src={image.src}
                                    alt={article.title}
                                    width={image.width}
                                    height={image.height}
                                    className="rounded-lg border-2 border-foreground w-full object-cover aspect-video"
                                    data-ai-hint={article.imageHint}
                                />
                            </div>
                        )}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                             <Badge variant="secondary">{volume.title}</Badge>
                             <Link href="/archives">
                                <Badge variant="outline">
                                    {`Issue ${issue.issue} (${issue.date})`}
                                </Badge>
                             </Link>
                        </div>
                        <CardTitle className="text-3xl md:text-4xl font-bold font-heading text-primary">{article.title}</CardTitle>
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground mt-4 text-sm">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                <span>{article.author}</span>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                       <div className="text-foreground/90 text-base space-y-4 mt-6 prose" dangerouslySetInnerHTML={{ __html: article.content }} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
  const allArticles = journalYears.flatMap(year => 
    year.issues.flatMap(issue => 
        issue.volumes.flatMap(volume => volume.articles)
    )
  );
 
  return allArticles.map((article) => ({
    slug: article.slug,
  }))
}
