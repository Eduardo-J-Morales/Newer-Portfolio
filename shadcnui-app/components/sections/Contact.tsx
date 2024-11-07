import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MessageSquare, Send } from 'lucide-react'

export default function Contact() {
    return (
      <section className="py-20 bg-secondary/50" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <Card className="max-w-xl mx-auto">
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Input placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Your Message" className="min-h-[150px]" />
                </div>
                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MessageSquare className="h-4 w-4" />
                  <span>Available for freelance opportunities</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }