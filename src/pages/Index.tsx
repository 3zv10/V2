import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Download from "@/components/Download";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <About />
      <Download />
      <Community />
      <Footer />
    </div>
  );
};

export default Index;
