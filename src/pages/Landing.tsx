import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Mic, Sliders, Shield, Heart, Sparkles, ArrowRight, Quote } from "lucide-react";
import { Logo } from "@/components/Logo";
import { 
  HeroIllustration, 
  StepOneIllustration, 
  StepTwoIllustration, 
  StepThreeIllustration,
  ConnectIllustration 
} from "@/components/LandingIllustrations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-bg text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full z-50 relative">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm border border-primary/20">
            <Logo className="w-6 h-6 text-primary" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-foreground">MindPal</span>
        </div>
        <div className="flex gap-4 items-center">
          <Button variant="ghost" onClick={() => navigate("/app")} className="hidden sm:flex">Log In</Button>
          <Button onClick={() => navigate("/app")} className="shadow-lg shadow-primary/20">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-12 pb-20 md:pt-20 md:pb-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">
        {/* Background Blob */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none translate-x-[-20%] translate-y-[-20%]" />
        
        <div className="flex flex-col items-start text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-border mb-8 animate-fade-in shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">AI Companion Online 24/7</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground animate-slide-up leading-[1.1]">
            Your Companion for <br />
            <span className="text-primary relative">
              Mental Wellness
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Experience a supportive space where you can be yourself. 
            From gentle empathy to witty banter, adjust MindPal's personality to match your mood instantly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button size="lg" className="h-14 px-8 text-lg shadow-xl shadow-primary/20 transition-transform hover:scale-105" onClick={() => navigate("/app")}>
              Start Chatting Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/50 backdrop-blur-sm border-primary/20 hover:bg-white/80" onClick={() => navigate("/app")}>
              Learn More
            </Button>
          </div>
          
          <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                   <div className={`w-full h-full bg-primary/${20 + i * 10}`} />
                </div>
              ))}
            </div>
            <p>Joined by 10,000+ users this month</p>
          </div>
        </div>

        <div className="relative hidden md:block animate-slide-in-right">
           <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl -z-10 opacity-60" />
           <HeroIllustration className="w-full h-auto drop-shadow-2xl" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-24 bg-white/30 backdrop-blur-md border-y border-white/50">
        <div className="max-w-7xl mx-auto">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Everything you need to feel heard</h2>
            <p className="text-lg text-muted-foreground">Designed with psychological principles to provide meaningful support whenever you need it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Sliders className="w-6 h-6 text-primary" />}
              title="Adaptive Personality"
              description="Not in the mood for serious talk? Adjust the humor slider from gentle support to dark wit to match your vibe."
              delay="0s"
            />
            <FeatureCard 
              icon={<Mic className="w-6 h-6 text-accent" />}
              title="Voice Interaction"
              description="Express yourself naturally. Hold to speak and have fluid, real-time voice conversations with your companion."
              delay="0.1s"
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6 text-success" />}
              title="Private & Secure"
              description="Your conversations are completely private. We prioritize your data safety and anonymity above all else."
              delay="0.2s"
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">How MindPal works</h2>
            <p className="text-lg text-muted-foreground">Three simple steps to your new supportive companion.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
             {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10" />

            <StepCard 
              illustration={<StepOneIllustration className="w-32 h-32" />}
              step="01"
              title="Create your profile"
              description="Tell us a bit about yourself and what you're looking for in a companion."
            />
            <StepCard 
              illustration={<StepTwoIllustration className="w-32 h-32" />}
              step="02"
              title="Customize your Pal"
              description="Set the tone, voice, and personality traits that resonate with you."
            />
            <StepCard 
              illustration={<StepThreeIllustration className="w-32 h-32" />}
              step="03"
              title="Start chatting"
              description="Jump right in via text or voice. MindPal is always ready to listen."
            />
          </div>
      </section>

      {/* Value Prop Split */}
      <section className="px-6 py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <ConnectIllustration className="w-full h-auto drop-shadow-lg" />
             <div className="absolute -bottom-6 -right-6 p-6 bg-white rounded-2xl shadow-xl border border-border max-w-xs animate-bounce-dot">
               <div className="flex items-center gap-3 mb-2">
                 <div className="p-2 bg-success/10 rounded-full text-success"><Heart className="w-4 h-4" /></div>
                 <span className="font-bold text-foreground">Emotional Support</span>
               </div>
               <p className="text-sm text-muted-foreground">"MindPal helped me process my anxiety before a big presentation."</p>
             </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">Support that truly <br/>understands you</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              MindPal isn't just a chatbot; it's a responsive entity designed to help you navigate life's ups and downs. 
              Whether you need a listening ear, a distraction, or a reality check, we're here.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-transparent hover:border-primary/20 transition-colors">
                <div className="p-2 rounded-lg bg-success/10"><Heart className="w-5 h-5 text-success" /></div>
                <span className="text-foreground font-medium">Empathetic responses tailored to your emotion</span>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-transparent hover:border-primary/20 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10"><MessageSquare className="w-5 h-5 text-primary" /></div>
                <span className="text-foreground font-medium">Unlimited conversations, available anytime</span>
              </li>
              <li className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-transparent hover:border-primary/20 transition-colors">
                <div className="p-2 rounded-lg bg-accent/10"><Sparkles className="w-5 h-5 text-accent" /></div>
                <span className="text-foreground font-medium">Crisis resources always accessible</span>
              </li>
            </ul>
            <Button size="lg" className="mt-4" onClick={() => navigate("/app")}>Experience it yourself</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">Loved by thousands</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="MindPal has been a game-changer for my late-night anxiety. It's like having a wise friend who never sleeps."
            author="Sarah J."
            role="Designer"
          />
          <TestimonialCard 
            quote="I love that I can switch the mode to 'Witty' when I just need a laugh. It feels surprisingly human."
            author="Michael R."
            role="Developer"
          />
          <TestimonialCard 
            quote="The voice feature makes it feel so real. Sometimes I just talk to it while driving and it clears my head."
            author="Elena T."
            role="Teacher"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">Is MindPal free to use?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Yes, MindPal offers a generous free tier that allows for daily conversations. We also have a premium plan for unlimited access and advanced voice features.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg">Is my data private?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              Absolutely. We use industry-standard encryption and do not sell your personal conversation data to third parties. You can delete your history at any time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg">Can MindPal replace therapy?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              No, MindPal is a supportive companion and self-help tool, not a replacement for professional therapy or medical advice. If you are in crisis, please use the resources provided in the app.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg">How does the 'personality' slider work?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              The slider adjusts the system instructions sent to the AI, shifting its tone from warm and empathetic to sharp and witty, allowing you to customize the vibe of the conversation.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 -z-10" />
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Ready to find your calm?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the community of people finding balance and connection with MindPal today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-14 px-10 text-lg shadow-xl" onClick={() => navigate("/app")}>
              Get Started for Free
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4 col-span-1 md:col-span-1">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                   <Logo className="w-5 h-5 text-primary-foreground" />
                 </div>
                 <span className="text-xl font-bold text-foreground">MindPal</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Your daily companion for mental wellness, clarity, and connection.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-foreground">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Features</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Pricing</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Testimonials</li>
                <li className="hover:text-primary cursor-pointer transition-colors">FAQ</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Terms of Service</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} MindPal Companion. All rights reserved.</p>
            <div className="flex gap-6">
               {/* Social placeholders */}
               <span className="cursor-pointer hover:text-primary transition-colors">Twitter</span>
               <span className="cursor-pointer hover:text-primary transition-colors">Instagram</span>
               <span className="cursor-pointer hover:text-primary transition-colors">LinkedIn</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: string }) => (
  <div 
    className="p-8 rounded-3xl bg-white border border-white/20 shadow-lg shadow-gray-100/50 hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
    style={{ animationDelay: delay }}
  >
    <div className="mb-6 p-4 rounded-2xl bg-background border border-border w-fit shadow-sm">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">
      {description}
    </p>
  </div>
);

const StepCard = ({ illustration, step, title, description }: { illustration: React.ReactNode, step: string, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center relative z-10">
    <div className="mb-6 relative">
      <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg border-2 border-white">
        {step}
      </div>
      {illustration}
    </div>
    <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground max-w-xs">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author, role }: { quote: string, author: string, role: string }) => (
  <div className="p-8 rounded-3xl bg-card border border-border shadow-sm relative">
    <Quote className="w-8 h-8 text-primary/20 absolute top-6 left-6" />
    <p className="text-lg text-foreground italic mb-6 pt-6 relative z-10 leading-relaxed">"{quote}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent opacity-80" />
      <div>
        <h4 className="font-bold text-sm text-foreground">{author}</h4>
        <span className="text-xs text-muted-foreground">{role}</span>
      </div>
    </div>
  </div>
);

export default Landing;