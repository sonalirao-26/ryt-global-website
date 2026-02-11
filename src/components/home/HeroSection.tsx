import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {/* Accent Line */}
          <div className="accent-line mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }} />
          
          {/* Headline */}
          <h1 className="text-display text-white mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Empowering Enterprises Through{" "}
            <span className="gold-accent">Transformative Learning</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.3s" }}>
            RYT Global is a trusted corporate training and capability-building partner, 
            delivering world-class learning experiences to enterprise clients in India 
            and across the globe.
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-10 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-1">500+</div>
              <div className="text-white/70 text-sm">Programs Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-1">50+</div>
              <div className="text-white/70 text-sm">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-1">15+</div>
              <div className="text-white/70 text-sm">Countries Served</div>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.5s" }}>
            <Link to="/training-request">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-base">
                Request Proposal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-white bg-white text-black hover:bg-white/90 hover:text-black font-semibold px-8 py-6 text-base">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full hidden lg:block pointer-events-none">
        <div className="absolute bottom-10 right-10 w-64 h-64 border-2 border-accent/30 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full" />
      </div>
    </section>
  );
};

export default HeroSection;
