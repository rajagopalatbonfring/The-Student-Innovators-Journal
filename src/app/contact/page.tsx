import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, HelpCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";


export default function ContactPage() {
  return (
    <div className="bg-background">
       <div className="w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-gradient-to-br from-primary to-accent">
            <div className="container mx-auto px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground leading-tight font-heading drop-shadow-[0_4px_2px_rgba(0,0,0,0.2)]">
                        Contact Us
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                        Have a question, a suggestion, or need help with a submission? We'd love to hear from you!
                    </p>
                </div>
            </div>
        </div>

      <div className="container mx-auto px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="text-2xl font-bold font-heading text-foreground">Get in Touch</h2>
                <div className="flex items-start gap-4">
                  <Mail className="w-8 h-8 text-primary mt-1"/>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">General Inquiries</h3>
                    <p className="text-muted-foreground">For general questions about TSIJ.</p>
                    <a href="mailto:hello@tsij.org" className="text-primary hover:underline font-bold">hello@tsij.org</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-8 h-8 text-primary mt-1"/>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Submission Help</h3>
                    <p className="text-muted-foreground">For help with the submission process.</p>
                    <a href="mailto:submissions@tsij.org" className="text-primary hover:underline font-bold">submissions@tsij.org</a>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <MessageSquare className="w-8 h-8 text-primary mt-1"/>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Feedback</h3>
                    <p className="text-muted-foreground">We appreciate your feedback!</p>
                    <a href="mailto:feedback@tsij.org" className="text-primary hover:underline font-bold">feedback@tsij.org</a>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" type="text" placeholder="Super Inventor" />
                  </div>
                  <div className="space-y-2">
                      <Label htmlFor="email">Your Email</Label>
                      <Input id="email" type="email" placeholder="inventor@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">What's This About?</Label>
                     <Select>
                        <SelectTrigger id="subject">
                            <SelectValue placeholder="Select a topic..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="general">General Question</SelectItem>
                            <SelectItem value="submission">Submission Help</SelectItem>
                            <SelectItem value="idea">Theme Idea</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                        </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" placeholder="Tell us what’s on your mind..." rows={5} />
                  </div>
                  <div className="text-left pt-2">
                    <Button type="submit" size="lg">Send Message</Button>
                  </div>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
