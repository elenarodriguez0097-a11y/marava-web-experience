import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-volcanic text-volcanic-foreground">
      <div className="container-narrow mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl font-bold mb-2">
              Marava
            </h3>
            <p className="text-terracotta-light text-lg mb-4">Vinos y Tapas</p>
            <p className="text-volcanic-foreground/70 max-w-sm">
              Más de 50 años de tradición familiar. Cocina canaria auténtica 
              en el corazón de Playa Honda, Lanzarote.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-2 bg-volcanic-foreground/10 rounded-full hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-volcanic-foreground/10 rounded-full hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Enlaces</h4>
            <nav className="space-y-2">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#nosotros", label: "Nosotros" },
                { href: "#carta", label: "Carta" },
                { href: "#horarios", label: "Horarios" },
                { href: "#galeria", label: "Galería" },
                { href: "#contacto", label: "Reservas" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-volcanic-foreground/70 hover:text-terracotta-light transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-volcanic-foreground/70">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-terracotta-light" />
                <span>Calle San Borondón, 55<br />35509 Playa Honda, Lanzarote</span>
              </div>
              <a
                href="tel:+34928000000"
                className="flex items-center gap-3 text-volcanic-foreground/70 hover:text-terracotta-light transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 text-terracotta-light" />
                <span>+34 928 00 00 00</span>
              </a>
              <a
                href="mailto:info@marava.es"
                className="flex items-center gap-3 text-volcanic-foreground/70 hover:text-terracotta-light transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0 text-terracotta-light" />
                <span>info@marava.es</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-volcanic-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-volcanic-foreground/50">
          <p>
            © {currentYear} Marava Vinos y Tapas. Todos los derechos reservados.
          </p>
          <p className="text-center">
            Hecho con ♥ en Lanzarote
          </p>
        </div>
      </div>
    </footer>
  );
}
