import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LocationSection() {
  const address = "Calle San Borondón, 55 - Playa Honda, Lanzarote";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section id="ubicacion" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
            Encuéntranos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestra <span className="text-primary">Ubicación</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Situados en el corazón de Playa Honda, fácil acceso y ambiente perfecto 
            para disfrutar de nuestra gastronomía.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-elevated border border-border">
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Marava Vinos y Tapas"
              />
            </div>
          </div>

          {/* Info Card */}
          <div className="glass-card p-8 flex flex-col justify-center">
            <div className="mb-6">
              <MapPin className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                Dirección
              </h3>
              <p className="text-muted-foreground">
                Calle San Borondón, 55<br />
                35509 Playa Honda<br />
                Lanzarote, Islas Canarias
              </p>
            </div>

            <div className="space-y-4">
              <Button asChild className="w-full" size="lg">
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-4 h-4 mr-2" />
                  Cómo llegar
                </a>
              </Button>

              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-foreground mb-2">Indicaciones</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• A 5 min del centro comercial Deiland</li>
                  <li>• Parking disponible en la zona</li>
                  <li>• Acceso adaptado para sillas de ruedas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
