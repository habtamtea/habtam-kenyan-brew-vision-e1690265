import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-tea-plantation.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Lush tea plantations in Kenya"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight font-bigilla">
          HABTAM LIMITED
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light font-serif">
          Premium Kenyan Tea Exports
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90 font-sans">
          Sourcing the finest quality tea from Kenya's highlands, delivering excellence to importers worldwide
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="default"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Our Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground rounded-full"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
