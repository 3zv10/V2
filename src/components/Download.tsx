import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download as DownloadIcon, CheckCircle2 } from "lucide-react";

const steps = [
  "Download the Project Replay launcher",
  "Install the launcher on your PC",
  "Launch the application and log in",
  "Click 'Play' and reconnect with nostalgia",
];

const Download = () => {
  return (
    <section className="py-20 px-4 relative scroll-animate">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get Started
          </h2>
          <p className="text-muted-foreground text-lg">
            Four simple steps to relive the memories
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-primary/10 shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-intense)] transition-all duration-500">
          <div className="space-y-6 mb-10">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {index + 1}
                </div>
                <div className="flex items-center gap-3 flex-1">
                  <p className="text-lg text-foreground">{step}</p>
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" className="text-xl px-12 py-8 h-auto relative overflow-hidden group" disabled>
              <DownloadIcon className="mr-2 h-6 w-6" />
              <span className="relative z-10">Coming Soon</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-glow/30 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Download will be available soon
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Download;
