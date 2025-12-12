import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-volcanic/70 via-volcanic/50 to-volcanic/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <p className="text-primary-foreground/80 font-body text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Playa Honda, Lanzarote
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Marava
          <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2 text-terracotta-light">
            Vinos y Tapas
          </span>
        </h1>
        
        <p className="text-primary-foreground/90 font-body text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Tradición canaria y tapas en el corazón de Playa Honda. 
          Más de 50 años de historia familiar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button asChild variant="hero" size="xl">
            <a href="#carta">Ver Carta</a>
          </Button>
          <Button asChild variant="hero-outline" size="xl">
            <a href="#contacto">Reservar Mesa</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
