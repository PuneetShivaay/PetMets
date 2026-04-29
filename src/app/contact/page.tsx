'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Send } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Contact Form Submission from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:info.petmets@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6 text-center animate-fade-in-down">
          <Send className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl">
            We'd love to hear from you! Whether you have a question, feedback,
            or just want to say hello, feel free to reach out.
          </p>
        </div>
      </section>

      {/* Contact Form & Details Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl text-primary">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground/80">
                          Your Name
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Puneet kumar"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="bg-input"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground/80">
                          Your Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="puneetshivaay@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="bg-input"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground/80">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Your message here for Petmets Team"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={6}
                        className="bg-input"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      size="lg"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Submit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details */}
            <div className="space-y-8 animate-fade-in-left">
              <div>
                <h2 className="font-headline text-3xl font-bold text-primary mb-4">
                  Contact Information
                </h2>
                <p className="text-lg text-foreground/80">
                  You can also reach us through the following channels. We look
                  forward to connecting with you!
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">
                      Email Us
                    </h3>
                    <a
                      href="mailto:info.petmets@gmail.com"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      info.petmets@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">
                      Call Us
                    </h3>
                    <p className="text-foreground/80">(+91) 9826208645</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
