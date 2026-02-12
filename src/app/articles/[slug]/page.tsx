// import { journalYears } from "@/lib/content";
// import { notFound } from "next/navigation";
// import Image from "next/image";
// import placeholderData from '@/lib/placeholder-images.json';
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { User, Download, Share2, ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

// export default function ArticlePage({ params }: { params: { slug: string } }) {
//     const allArticles = journalYears.flatMap(year => 
//         year.issues.flatMap(issue => 
//             issue.volumes.flatMap(volume => 
//                 volume.articles.map(article => ({...article, issue, volume, year: year.year}))
//             )
//         )
//     );
    
//     const articleData = allArticles.find(a => a.slug === params.slug);

//     if (!articleData) {
//         notFound();
//     }
    
//     const { issue, volume, year, ...article } = articleData;
//     const image = placeholderData.placeholderImages.find(p => p.hint.includes(article.imageHint));

//     return (
//         <div className="bg-background py-16 sm:py-24">
//             <div className="container mx-auto px-8">
//                 {/* Breadcrumbs */}
//                 <div className="max-w-5xl mx-auto mb-6 text-sm font-semibold text-muted-foreground flex items-center gap-2 flex-wrap">
//                     <Link href="/archives" className="hover:text-primary">Archives</Link>
//                     <span>/</span>
//                     <Link href="/archives" className="hover:text-primary">{year}</Link>
//                     <span>/</span>
//                     <Link href="/archives" className="hover:text-primary">{issue.title}</Link>
//                     <span>/</span>
//                     <span className="text-foreground">{article.title}</span>
//                 </div>

//                 <Card className="max-w-5xl mx-auto p-4 sm:p-8 border-4 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))]">
//                     {/* Image */}
//                     {image && (
//                          <div className="mb-8 rounded-xl overflow-hidden border-4 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transform -rotate-1 hover:rotate-0 transition-transform duration-300">
//                             <Image
//                                 src={image.src}
//                                 alt={article.title}
//                                 width={image.width}
//                                 height={image.height}
//                                 className="w-full object-cover aspect-video"
//                                 data-ai-hint={article.imageHint}
//                             />
//                         </div>
//                     )}

//                     {/* Header */}
//                     <CardHeader className="p-0 text-center">
//                         <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
//                             <Badge variant="secondary">{volume.title}</Badge>
//                              <Link href="/archives">
//                                 <Badge variant="default" className="bg-primary/80">
//                                     {`Issue ${issue.issue} (${issue.date})`}
//                                 </Badge>
//                              </Link>
//                         </div>
//                         <CardTitle className="text-4xl md:text-5xl font-bold font-heading text-primary">{article.title}</CardTitle>
//                         <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-muted-foreground mt-6 text-base">
//                             <div className="flex items-center gap-2 font-semibold">
//                                 <User className="w-5 h-5 text-primary" />
//                                 <span>{article.author}</span>
//                             </div>
//                         </div>
//                     </CardHeader>
                    
//                     {/* Content */}
//                     <CardContent className="p-0">
//                        <div className="text-foreground/90 text-lg space-y-6 mt-12 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: article.content }} />
//                     </CardContent>

//                     {/* Recognition Section */}
//                     <div className="mt-16 text-center">
//                          <div className="inline-block border-4 border-dashed border-secondary/50 rounded-xl p-6">
//                             <h3 className="text-2xl font-bold font-heading text-foreground mb-6">Your Achievement Unlocked!</h3>
//                             <div className="flex flex-wrap justify-center items-center gap-4">
//                                 <Button variant="secondary" size="lg">
//                                     <Download className="mr-2"/>
//                                     Download Certificate
//                                 </Button>
//                                 <Button variant="outline" size="lg">
//                                     <Share2 className="mr-2"/>
//                                     Share Your Work
//                                 </Button>
//                             </div>
//                         </div>
//                     </div>
//                 </Card>

//                  <div className="text-center mt-12">
//                     <Button asChild variant="outline" size="lg">
//                         <Link href="/archives"><ArrowLeft className="mr-2"/> Back to All Archives</Link>
//                     </Button>
//                 </div>
//             </div>

//             {/* Bottom CTA */}
//             <div className="container mx-auto px-8 mt-24">
//                  <div className="text-center">
//                   <div className="bg-gradient-to-r from-secondary to-primary p-10 rounded-xl border-4 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))] text-primary-foreground">
//                     <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Inspired? Create Your Own Masterpiece!</h2>
//                     <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Now it's your turn to invent, discover, and create. What amazing idea will you share with the world?</p>
//                     <Button size="lg" asChild className="text-xl py-8 px-10 bg-accent text-accent-foreground hover:bg-accent/90">
//                         <Link href="/submissions/new">Start Your Submission Now!</Link>
//                     </Button>
//                   </div>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export async function generateStaticParams() {
//   const allArticles = journalYears.flatMap(year => 
//     year.issues.flatMap(issue => 
//         issue.volumes.flatMap(volume => volume.articles)
//     )
//   );
 
//   return allArticles.map((article) => ({
//     slug: article.slug,
//   }))
// }




















import { journalYears } from "@/lib/content";
import { notFound } from "next/navigation";
import Image from "next/image";
import placeholderData from '@/lib/placeholder-images.json';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User, Download, Share2, ArrowLeft, Sparkles } from "lucide-react"; // ← added Sparkles
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const allArticles = journalYears.flatMap(year => 
    year.issues.flatMap(issue => 
      issue.volumes.flatMap(volume => 
        volume.articles.map(article => ({...article, issue, volume, year: year.year}))
      )
    )
  );
  
  const articleData = allArticles.find(a => a.slug === params.slug);

  if (!articleData) {
    notFound();
  }
  
  const { issue, volume, year, ...article } = articleData;
  const image = placeholderData.placeholderImages.find(p => p.hint.includes(article.imageHint));

  const isSpecial = article.tags?.includes("special-activity");

  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-8">
        {/* Breadcrumbs */}
        <div className="max-w-5xl mx-auto mb-6 text-sm font-semibold text-muted-foreground flex items-center gap-2 flex-wrap">
          <Link href="/archives" className="hover:text-primary">Archives</Link>
          <span>/</span>
          <Link href="/archives" className="hover:text-primary">{year}</Link>
          <span>/</span>
          <Link href="/archives" className="hover:text-primary">{issue.title}</Link>
          <span>/</span>
          <span className="text-foreground">{article.title}</span>
        </div>

        <Card className="max-w-5xl mx-auto p-4 sm:p-8 border-4 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))]">
          {/* Image */}
          {image && (
            <div className="mb-8 rounded-xl overflow-hidden border-4 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <Image
                src={image.src}
                alt={article.title}
                width={image.width}
                height={image.height}
                className="w-full object-cover aspect-video"
                data-ai-hint={article.imageHint}
              />
            </div>
          )}

          {/* Header */}
          <CardHeader className="p-0 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
              <Badge variant="secondary">{volume.title}</Badge>
              <Link href="/archives">
                <Badge variant="default" className="bg-primary/80">
                  {`Issue ${issue.issue} (${issue.date})`}
                </Badge>
              </Link>
              {isSpecial && (
                <Badge className="bg-accent text-accent-foreground border-accent flex items-center gap-1 text-sm font-medium px-3 py-1">
                  <Sparkles className="w-4 h-4" />
                  Special Activity!
                </Badge>
              )}
            </div>
            <CardTitle className="text-4xl md:text-5xl font-bold font-heading text-primary flex items-center justify-center gap-3 flex-wrap">
              {article.title}
              {isSpecial && <Sparkles className="w-8 h-8 text-accent animate-pulse" />}
            </CardTitle>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-muted-foreground mt-6 text-base">
              <div className="flex items-center gap-2 font-semibold">
                <User className="w-5 h-5 text-primary" />
                <span>{article.author}</span>
              </div>
            </div>
          </CardHeader>
          
          {/* Content */}
          <CardContent className="p-0">
            <div className="text-foreground/90 text-lg space-y-6 mt-12 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: article.content }} />
          </CardContent>

          {/* Recognition Section */}
          <div className="mt-16 text-center">
            <div className="inline-block border-4 border-dashed border-secondary/50 rounded-xl p-6">
              <h3 className="text-2xl font-bold font-heading text-foreground mb-6">Your Achievement Unlocked!</h3>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <Button variant="secondary" size="lg">
                  <Download className="mr-2"/>
                  Download Certificate
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="mr-2"/>
                  Share Your Work
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/archives"><ArrowLeft className="mr-2"/> Back to All Archives</Link>
          </Button>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-8 mt-24">
        <div className="text-center">
          <div className="bg-gradient-to-r from-secondary to-primary p-10 rounded-xl border-4 border-foreground shadow-[12px_12px_0px_0px_hsl(var(--foreground))] text-primary-foreground">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Inspired? Create Your Own Masterpiece!</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Now it's your turn to invent, discover, and create. What amazing idea will you share with the world?</p>
            <Button size="lg" asChild className="text-xl py-8 px-10 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/submissions/new">Start Your Submission Now!</Link>
            </Button>
          </div>
        </div>
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
  }));
}