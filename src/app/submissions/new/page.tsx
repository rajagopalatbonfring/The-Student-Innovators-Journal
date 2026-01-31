// "use client"; // ← Important: we need client-side interactivity

// import { useState, useRef, ChangeEvent, DragEvent } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { submissionCategories, creativePrompts } from "@/lib/content";
// import { Card } from "@/components/ui/card";
// import { Upload, CheckSquare, X } from "lucide-react";
// import Link from "next/link";

// export default function NewSubmissionPage() {
//   const [files, setFiles] = useState<File[]>([]);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const newFiles = Array.from(e.target.files);
//       setFiles(prev => [...prev, ...newFiles]);
//     }
//   };

//   const handleDrop = (e: DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
//     if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
//       const newFiles = Array.from(e.dataTransfer.files);
//       setFiles(prev => [...prev, ...newFiles]);
//     }
//   };

//   const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
//   };

//   const removeFile = (index: number) => {
//     setFiles(prev => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="bg-background">
//       <div className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-primary">
//         <div className="container mx-auto px-8 text-center">
//           <div className="max-w-4xl mx-auto">
//             <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
//               Submit Your Brilliant Idea!
//             </h1>
//             <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
//               Share your experiment, invention, robot, puzzle, or discovery — we can't wait to see what you create! Every valid submission gets an E-Certificate & a chance to be featured.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-8 py-20">
//         <div className="max-w-4xl mx-auto">
//           <Card className="p-8 md:p-12">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">Your Submission Adventure</h2>
//               <p className="text-lg text-muted-foreground mt-2">Follow the steps to launch your idea!</p>
//             </div>

//             <form className="space-y-12">
//               {/* Step 1 */}
//               <div className="space-y-6 p-6 rounded-xl border-4 border-dashed border-border/30 bg-card">
//                 <div className="flex items-center gap-4">
//                   <div className="flex-shrink-0 bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))]">1</div>
//                   <h3 className="text-2xl font-bold font-heading text-foreground">Tell Us About Your Project</h3>
//                 </div>
//                 <div className="space-y-4 md:pl-16">
//                   <div className="space-y-2">
//                     <Label htmlFor="title" className="text-lg font-semibold">Project Title</Label>
//                     <Input id="title" type="text" placeholder="e.g., My Awesome Solar Car" className="h-12 text-base" />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="description" className="text-lg font-semibold">Project Description</Label>
//                     <Textarea id="description" placeholder="Tell us all about your project! What did you make? What did you learn?" rows={6} className="text-base" />
//                   </div>
//                 </div>
//               </div>

//               {/* Step 2 */}
//               <div className="space-y-6 p-6 rounded-xl border-4 border-dashed border-border/30 bg-card">
//                 <div className="flex items-center gap-4">
//                   <div className="flex-shrink-0 bg-secondary text-secondary-foreground h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))]">2</div>
//                   <h3 className="text-2xl font-bold font-heading text-foreground">Categorize Your Idea</h3>
//                 </div>
//                 <div className="space-y-4 md:pl-16">
//                   <div className="grid sm:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                       <Label htmlFor="category" className="text-lg font-semibold">Submission Category</Label>
//                       <Select>
//                         <SelectTrigger id="category" className="h-12 text-base">
//                           <SelectValue placeholder="Select a category..." />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {submissionCategories.map(category => (
//                             <SelectItem key={category.title} value={category.title}>{category.title}</SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <div className="space-y-2">
//                       <Label htmlFor="prompt" className="text-lg font-semibold">Related Prompt (Optional)</Label>
//                       <Select>
//                         <SelectTrigger id="prompt" className="h-12 text-base">
//                           <SelectValue placeholder="Select a monthly theme..." />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {creativePrompts.map(prompt => (
//                             <SelectItem key={prompt.title} value={prompt.title}>{prompt.title}</SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Step 3 – NOW WORKING */}
//               <div className="space-y-6 p-6 rounded-xl border-4 border-dashed border-border/30 bg-card">
//                 <div className="flex items-center gap-4">
//                   <div className="flex-shrink-0 bg-accent text-accent-foreground h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))]">3</div>
//                   <h3 className="text-2xl font-bold font-heading text-foreground">Upload Your Genius</h3>
//                 </div>

//                 <div className="space-y-4 md:pl-16">
//                   <div
//                     className="border-4 border-dashed border-border rounded-xl p-8 text-center bg-muted/50 transition-colors hover:border-primary hover:bg-primary/10 cursor-pointer"
//                     onClick={() => fileInputRef.current?.click()}
//                     onDrop={handleDrop}
//                     onDragOver={handleDragOver}
//                   >
//                     <input
//                       ref={fileInputRef}
//                       type="file"
//                       multiple
//                       accept="image/jpeg,image/png,video/mp4,application/pdf,.docx"
//                       className="hidden"
//                       onChange={handleFileChange}
//                     />

//                     <Upload className="mx-auto w-12 h-12 text-muted-foreground mb-4" />
//                     <p className="text-muted-foreground mb-2 font-medium">
//                       Drag & drop your photos, videos, or documents here
//                     </p>
//                     <p className="text-sm text-muted-foreground mb-4">or</p>
//                     <Button type="button" variant="outline" className="pointer-events-none">
//                       Browse Files
//                     </Button>
//                   </div>

//                   {files.length > 0 && (
//                     <div className="mt-4 space-y-2">
//                       <p className="text-sm font-medium text-foreground">Selected files:</p>
//                       <div className="max-h-48 overflow-y-auto space-y-1.5 pr-2">
//                         {files.map((file, idx) => (
//                           <div
//                             key={idx}
//                             className="flex items-center justify-between bg-muted/60 px-3 py-2 rounded-md text-sm"
//                           >
//                             <span className="truncate max-w-[85%]">{file.name}</span>
//                             <Button
//                               type="button"
//                               variant="ghost"
//                               size="icon"
//                               className="h-7 w-7"
//                               onClick={() => removeFile(idx)}
//                             >
//                               <X className="h-4 w-4" />
//                             </Button>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}

//                   <p className="text-xs text-muted-foreground mt-3">
//                     Accepted formats: JPG, PNG, MP4, PDF, DOCX (max 100 MB per file recommended)
//                   </p>
//                 </div>
//               </div>

//               <div className="text-center pt-8">
//                 <Button type="submit" size="lg" className="w-full md:w-auto text-2xl font-bold py-8 px-10">
//                   Launch My Submission!
//                 </Button>
//               </div>
//             </form>
//           </Card>

//           <div className="mt-24">
//             <div className="bg-gradient-to-r from-secondary to-primary p-10 rounded-xl border-2 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] text-primary-foreground text-center">
//               <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Tips for an Awesome Submission!</h2>
//               <ul className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg list-none p-0">
//                 <li className="flex items-center gap-2"><CheckSquare className="w-6 h-6 text-accent" /> Be creative!</li>
//                 <li className="flex items-center gap-2"><CheckSquare className="w-6 h-6 text-accent" /> Show your steps.</li>
//                 <li className="flex items-center gap-2"><CheckSquare className="w-6 h-6 text-accent" /> Have fun!</li>
//               </ul>
//               <Button size="lg" asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
//                 <Link href="/contact">Need Help? Contact Us</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





























"use client"; // ← Important: we need client-side interactivity

import { useState, useRef, ChangeEvent, DragEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submissionCategories, creativePrompts, getActivitiesForCategory } from "@/lib/content";
import { Card } from "@/components/ui/card";
import { Upload, CheckSquare, X } from "lucide-react";
import Link from "next/link";



export default function NewSubmissionPage() {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Form state
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedActivity, setSelectedActivity] = useState<string>("");

  // Reset activity when category changes
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSelectedActivity(""); // reset activity when category changes
  };

  // Get eligible activities for the current category
  const eligibleActivities = selectedCategory
    ? getActivitiesForCategory(selectedCategory)
    : [];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-background">
      <div className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-primary">
        <div className="container mx-auto px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
              Submit Your Brilliant Idea!
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Share your experiment, invention, robot, puzzle, or discovery — we
              can't wait to see what you create! Every valid submission gets an
              E-Certificate & a chance to be featured.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
                Your Submission Adventure
              </h2>
              <p className="text-lg text-muted-foreground mt-2">
                Follow the steps to launch your idea!
              </p>
            </div>

            <form className="space-y-12">
              {/* Step 1 */}
              <div className="space-y-6 p-6 rounded-xl border-4 border-dashed border-border/30 bg-card">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))]">
                    1
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-foreground">
                    Tell Us About Your Project
                  </h3>
                </div>
                <div className="space-y-4 md:pl-16">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="text-lg font-semibold">
                      Project Title
                    </Label>
                    <Input
                      id="title"
                      type="text"
                      placeholder="e.g., My Awesome Solar Car"
                      className="h-12 text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-lg font-semibold">
                      Project Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us all about your project! What did you make? What did you learn?"
                      rows={6}
                      className="text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2 – UPDATED with Activity dropdown */}
              <div className="space-y-6 p-6 rounded-xl border-4 border-dashed border-border/30 bg-card">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-secondary text-secondary-foreground h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))]">
                    2
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-foreground">
                    Categorize Your Idea
                  </h3>
                </div>
                <div className="space-y-6 md:pl-16">
                  {/* Category */}
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-lg font-semibold">
                      Submission Category <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={selectedCategory}
                      onValueChange={handleCategoryChange}
                    >
                      <SelectTrigger id="category" className="h-12 text-base">
                        <SelectValue placeholder="Select a category..." />
                      </SelectTrigger>
                      <SelectContent>
                        {submissionCategories.map((category) => (
                          <SelectItem
                            key={category.title}
                            value={category.title}
                          >
                            {category.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Activity – only shown if category is selected */}
                  {selectedCategory && (
                    <div className="space-y-2">
                      <Label htmlFor="activity" className="text-lg font-semibold">
                        Activity Type <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={selectedActivity}
                        onValueChange={setSelectedActivity}
                      >
                        <SelectTrigger id="activity" className="h-12 text-base">
                          <SelectValue placeholder="Select an activity..." />
                        </SelectTrigger>
                        <SelectContent>
                          {eligibleActivities.length > 0 ? (
                            eligibleActivities.map((act) => (
                              <SelectItem key={act} value={act}>
                                {act}
                              </SelectItem>
                            ))
                          ) : (
                            <SelectItem value="" disabled>
                              No activities available for this category
                            </SelectItem>
                          )}
                        </SelectContent>
                      </Select>
                      {eligibleActivities.length === 0 && (
                        <p className="text-sm text-amber-600 mt-1">
                          No specific activities mapped yet — just select the
                          best matching category!
                        </p>
                      )}
                    </div>
                  )}

                  {/* Monthly Prompt – still optional */}
                  <div className="space-y-2">
                    <Label htmlFor="prompt" className="text-lg font-semibold">
                      Related Prompt (Optional)
                    </Label>
                    <Select>
                      <SelectTrigger id="prompt" className="h-12 text-base">
                        <SelectValue placeholder="Select a monthly theme..." />
                      </SelectTrigger>
                      <SelectContent>
                        {creativePrompts.map((prompt) => (
                          <SelectItem key={prompt.title} value={prompt.title}>
                            {prompt.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Step 3 – Upload (unchanged) */}
              <div className="space-y-6 p-6 rounded-xl border-4 border-dashed border-border/30 bg-card">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 bg-accent text-accent-foreground h-12 w-12 rounded-full flex items-center justify-center font-bold text-xl border-4 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))]">
                    3
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-foreground">
                    Upload Your Genius
                  </h3>
                </div>

                <div className="space-y-4 md:pl-16">
                  <div
                    className="border-4 border-dashed border-border rounded-xl p-8 text-center bg-muted/50 transition-colors hover:border-primary hover:bg-primary/10 cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/jpeg,image/png,video/mp4,application/pdf,.docx"
                      className="hidden"
                      onChange={handleFileChange}
                    />

                    <Upload className="mx-auto w-12 h-12 text-muted-foreground mb-4" />
                    <p className="text-muted-foreground mb-2 font-medium">
                      Drag & drop your photos, videos, or documents here
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">or</p>
                    <Button type="button" variant="outline" className="pointer-events-none">
                      Browse Files
                    </Button>
                  </div>

                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-medium text-foreground">
                        Selected files:
                      </p>
                      <div className="max-h-48 overflow-y-auto space-y-1.5 pr-2">
                        {files.map((file, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between bg-muted/60 px-3 py-2 rounded-md text-sm"
                          >
                            <span className="truncate max-w-[85%]">{file.name}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7"
                              onClick={() => removeFile(idx)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground mt-3">
                    Accepted formats: JPG, PNG, MP4, PDF, DOCX (max 100 MB per
                    file recommended)
                  </p>
                </div>
              </div>

              <div className="text-center pt-8">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto text-2xl font-bold py-8 px-10"
                >
                  Launch My Submission!
                </Button>
              </div>
            </form>
          </Card>

          <div className="mt-24">
            <div className="bg-gradient-to-r from-secondary to-primary p-10 rounded-xl border-2 border-foreground shadow-[8px_8px_0px_0px_hsl(var(--foreground))] text-primary-foreground text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Tips for an Awesome Submission!
              </h2>
              <ul className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg list-none p-0">
                <li className="flex items-center gap-2">
                  <CheckSquare className="w-6 h-6 text-accent" /> Be creative!
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare className="w-6 h-6 text-accent" /> Show your
                  steps.
                </li>
                <li className="flex items-center gap-2">
                  <CheckSquare className="w-6 h-6 text-accent" /> Have fun!
                </li>
              </ul>
              <Button
                size="lg"
                asChild
                className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/contact">Need Help? Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}