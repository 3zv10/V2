import { Button } from "@/components/ui/button";
import { Download, Users, Smartphone, Apple } from "lucide-react";
import heroBackground from "@/assets/Agancybackground.png";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[2px]"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          <img 
            src={logo} 
            alt="Project Replay Logo" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:drop-shadow-[0_0_50px_rgba(168,85,247,0.6)] transition-all duration-300"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
            Project Replay
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-3xl mx-auto">
            Relive the Glory Days of Fortnite
          </p>
          <p className="text-lg md:text-xl mb-8 text-foreground/90 max-w-2xl mx-auto">
            Experience Season 2 Chapter 2 exactly as you remember it. 
            Reconnect with the nostalgia, the locations, and the memories that made you fall in love with the game.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto relative overflow-hidden group" disabled>
              <Download className="mr-2 h-5 w-5" />
              <span className="relative z-10">Coming Soon</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-glow/30 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
            <Button variant="heroSecondary" size="lg" className="text-lg px-8 py-6 h-auto">
              <Users className="mr-2 h-5 w-5" />
              Join Discord
            </Button>
          </div>

          {/* Mobile Apps Badge */}
          <div className="mt-16 inline-flex items-center gap-6 px-8 py-4 bg-card/30 backdrop-blur-md border border-primary/20 rounded-full">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Apple className="h-6 w-6" />
              <span className="text-sm font-medium">iOS</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <Smartphone className="h-6 w-6" />
              <span className="text-sm font-medium">Android</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <span className="text-sm font-semibold text-primary animate-pulse">Coming Soon</span>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 bg-gradient-to-t from-primary/20 to-transparent blur-3xl" />
    </section>
  );
};

export default Hero;
