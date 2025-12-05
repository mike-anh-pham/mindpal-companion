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
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">MindPal</span>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" onClick={() => navigate("/app")}>Log In</Button>
          <Button onClick={() => navigate("/app")}>Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[100px] rounded-full -z-10 pointer-events-none" />
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-medium text-gray-300">AI Companion Online 24/7</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 animate-slide-up">
          Your Companion for <br />
          <span className="text-primary">Mental Wellness</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Experience a supportive space where you can be yourself. 
          From gentle empathy to witty banter, adjust MindPal's personality to match your mood.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <Button size="lg" className="h-14 px-8 text-lg" onClick={() => navigate("/app")}>
            Start Chatting Now
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-transparent border-white/20 hover:bg-white/10">
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
      <section className="px-6 py-20 max-w-7xl mx-auto border-y border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Support that understands you</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              MindPal isn't just a chatbot; it's a responsive entity designed to help you navigate life's ups and downs. 
              Whether you need a listening ear, a distraction, or a reality check, we're here.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-green-500/20"><Heart className="w-4 h-4 text-green-500" /></div>
                <span>Empathetic responses tailored to your emotion</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-blue-500/20"><MessageSquare className="w-4 h-4 text-blue-500" /></div>
                <span>Unlimited conversations, available anytime</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-purple-500/20"><Sparkles className="w-4 h-4 text-purple-500" /></div>
                <span>Crisis resources always accessible</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden glass-panel border border-white/10 p-8 flex items-center justify-center">
            {/* Abstract UI Representation */}
            <div className="space-y-4 w-full max-w-md">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/50" />
                <div className="flex-1 p-3 rounded-2xl rounded-tl-none bg-white/10">
                  <div className="h-2 w-3/4 bg-white/20 rounded mb-2" />
                  <div className="h-2 w-1/2 bg-white/20 rounded" />
                </div>
              </div>
              <div className="flex gap-3 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-purple-500/50" />
                <div className="flex-1 p-3 rounded-2xl rounded-tr-none bg-primary/20">
                  <div className="h-2 w-full bg-white/20 rounded mb-2" />
                  <div className="h-2 w-2/3 bg-white/20 rounded" />
                </div>
              </div>
               <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/50" />
                <div className="flex-1 p-3 rounded-2xl rounded-tl-none bg-white/10">
                  <div className="h-2 w-5/6 bg-white/20 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} MindPal Companion. All rights reserved.</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
    <div className="mb-4 p-3 rounded-xl bg-primary/10 w-fit">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 leading-relaxed">
      {description}
    </p>
  </div>
);

export default Landing;
