import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { submissionCategories, creativePrompts } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";


export default function NewSubmissionPage() {
  return (
    <div className="bg-muted/50 py-16 sm:py-24">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">Create Your Submission</h1>
                <p className="text-lg text-muted-foreground">
                Fill out the form below to share your project with the world.
                </p>
            </div>
            
            <Card className="bg-card p-8 border-2 border-foreground shadow-[8px_8px_0px_black]">
                <form className="space-y-8">
                    <div className="space-y-2">
                        <Label htmlFor="title" className="text-lg font-heading">Project Title</Label>
                        <Input id="title" type="text" placeholder="e.g., My Awesome Solar Car" className="h-12 text-base"/>
                    </div>

                     <div className="space-y-2">
                        <Label htmlFor="category" className="text-lg font-heading">Submission Category</Label>
                        <Select>
                            <SelectTrigger id="category" className="h-12 text-base">
                                <SelectValue placeholder="Select a category..." />
                            </SelectTrigger>
                            <SelectContent>
                                {submissionCategories.map(category => (
                                    <SelectItem key={category.title} value={category.title}>{category.title}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                     <div className="space-y-2">
                        <Label htmlFor="prompt" className="text-lg font-heading">Related Prompt (Optional)</Label>
                        <Select>
                            <SelectTrigger id="prompt" className="h-12 text-base">
                                <SelectValue placeholder="Select a monthly theme..." />
                            </SelectTrigger>
                            <SelectContent>
                                {creativePrompts.map(prompt => (
                                    <SelectItem key={prompt.title} value={prompt.title}>{prompt.title}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description" className="text-lg font-heading">Project Description</Label>
                        <Textarea id="description" placeholder="Tell us all about your project! What did you make? What did you learn?" rows={6} className="text-base"/>
                    </div>

                     <div className="space-y-2">
                        <Label htmlFor="files" className="text-lg font-heading">Upload Your Files</Label>
                        <div className="border-2 border-dashed border-foreground/50 rounded-lg p-8 text-center bg-muted/50">
                            <Upload className="mx-auto w-12 h-12 text-muted-foreground mb-4"/>
                            <p className="text-muted-foreground mb-2">Drag & drop your photos, videos, or documents here.</p>
                            <Button type="button" variant="secondary" className="border-2 border-foreground shadow-[3px_3px_0px_black]">Or Browse Files</Button>
                        </div>
                        <p className="text-xs text-muted-foreground">Accepted formats: JPG, PNG, MP4, PDF, DOCX</p>
                    </div>
                   
                    <div className="text-center pt-4">
                        <Button type="submit" size="lg" className="w-full md:w-auto border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none text-xl font-bold py-8">
                            Submit My Creation!
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
      </div>
    </div>
  );
}
