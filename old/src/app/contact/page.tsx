import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, HelpCircle } from 'lucide-react';


export default function ContactPage() {
  return (
    <div className="bg-muted/50 py-16 sm:py-24">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question, a suggestion, or need help with a submission? We'd love to hear from you!
            </p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-card p-8 rounded-lg border-2 border-foreground shadow-[8px_8px_0px_black]">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold font-heading text-foreground">Get in Touch</h2>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1"/>
              <div>
                <h3 className="font-semibold text-foreground">General Inquiries</h3>
                <p className="text-muted-foreground">For general questions about TSIJ.</p>
                <a href="mailto:hello@tsij.org" className="text-primary hover:underline">hello@tsij.org</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <HelpCircle className="w-6 h-6 text-primary mt-1"/>
              <div>
                <h3 className="font-semibold text-foreground">Submission Help</h3>
                <p className="text-muted-foreground">For help with the submission process.</p>
                <a href="mailto:submissions@tsij.org" className="text-primary hover:underline">submissions@tsij.org</a>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <MessageSquare className="w-6 h-6 text-primary mt-1"/>
              <div>
                <h3 className="font-semibold text-foreground">Feedback</h3>
                <p className="text-muted-foreground">We appreciate your feedback!</p>
                <a href="mailto:feedback@tsij.org" className="text-primary hover:underline">feedback@tsij.org</a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" type="text" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" type="email" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" type="text" placeholder="Question about submissions" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} />
              </div>
              <div className="text-left pt-2">
                <Button type="submit" size="lg" className="border-2 border-foreground shadow-[3px_3px_0px_black] hover:shadow-[1px_1px_0px_black] active:shadow-none">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
