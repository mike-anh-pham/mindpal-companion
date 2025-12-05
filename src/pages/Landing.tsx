import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Mic, Sliders, Shield, Heart, Sparkles } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-bg text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">MindPal</span>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" onClick={() => navigate("/app")}>Log In</Button>
          <Button onClick={() => navigate("/app")}>Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center relative">
        {/* Background Blob */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[100px] rounded-full -z-10 pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8 animate-fade-in shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">AI Companion Online 24/7</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground animate-slide-up">
          Your Companion for <br />
          <span className="text-primary">Mental Wellness</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Experience a supportive space where you can be yourself. 
          From gentle empathy to witty banter, adjust MindPal's personality to match your mood.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Button size="lg" className="h-14 px-8 text-lg shadow-md" onClick={() => navigate("/app")}>
            Start Chatting Now
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-background/50 backdrop-blur-sm hover:bg-background/80" onClick={() => navigate("/app")}>
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Sliders className="w-6 h-6 text-primary" />}
            title="Adaptive Humor"
            description="Not in the mood for serious talk? Adjust the humor slider from gentle support to dark wit."
          />
          <FeatureCard 
            icon={<Mic className="w-6 h-6 text-primary" />}
            title="Voice Interaction"
            description="Express yourself naturally. Hold to speak and have fluid conversations with your companion."
          />
          <FeatureCard 
            icon={<Shield className="w-6 h-6 text-primary" />}
            title="Privacy Focused"
            description="Your conversations are private and secure. We prioritize your data safety and anonymity."
          />
        </div>
      </section>

      {/* Value Prop */}
      <section className="px-6 py-20 max-w-7xl mx-auto border-y border-border/50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Support that understands you</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              MindPal isn't just a chatbot; it's a responsive entity designed to help you navigate life's ups and downs. 
              Whether you need a listening ear, a distraction, or a reality check, we're here.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-success/10"><Heart className="w-4 h-4 text-success" /></div>
                <span className="text-foreground">Empathetic responses tailored to your emotion</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-primary/10"><MessageSquare className="w-4 h-4 text-primary" /></div>
                <span className="text-foreground">Unlimited conversations, available anytime</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-accent/10"><Sparkles className="w-4 h-4 text-accent" /></div>
                <span className="text-foreground">Crisis resources always accessible</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden glass-panel border border-border/50 p-8 flex items-center justify-center shadow-xl">
            {/* Abstract UI Representation */}
            <div className="space-y-4 w-full max-w-md">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary shadow-sm" />
                <div className="flex-1 p-3 rounded-2xl rounded-tl-none bg-white/60 shadow-sm">
                  <div className="h-2 w-3/4 bg-muted rounded mb-2" />
                  <div className="h-2 w-1/2 bg-muted rounded" />
                </div>
              </div>
              <div className="flex gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-accent shadow-sm" />
                <div className="flex-1 p-3 rounded-2xl rounded-tr-none bg-primary/10 shadow-sm">
                  <div className="h-2 w-full bg-primary/20 rounded mb-2" />
                  <div className="h-2 w-2/3 bg-primary/20 rounded" />
                </div>
              </div>
               <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary shadow-sm" />
                <div className="flex-1 p-3 rounded-2xl rounded-tl-none bg-white/60 shadow-sm">
                  <div className="h-2 w-5/6 bg-muted rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} MindPal Companion. All rights reserved.</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-6 rounded-2xl bg-white/40 border border-white/50 shadow-sm hover:shadow-md transition-all hover:bg-white/60">
    <div className="mb-4 p-3 rounded-xl bg-primary/10 w-fit">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">
      {description}
    </p>
  </div>
);

export default Landing;
