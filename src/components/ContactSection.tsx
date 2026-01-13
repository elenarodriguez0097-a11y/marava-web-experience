import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "34627903277";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    guests: "",
    message: "",
  });

  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const [showManualWhatsAppLink, setShowManualWhatsAppLink] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildWhatsAppUrl = () => {
    const lines = [
      `🍷 *Nueva solicitud de reserva*`,
      ``,
      `👤 *Nombre:* ${formData.name}`,
      `📞 *Teléfono:* ${formData.phone}`,
    ];
    
    if (formData.email) lines.push(`📧 *Email:* ${formData.email}`);
    if (formData.date) lines.push(`📅 *Fecha:* ${formData.date}`);
    if (formData.guests) lines.push(`👥 *Personas:* ${formData.guests}`);
    if (formData.message) {
      lines.push(``);
      lines.push(`💬 *Mensaje:*`);
      lines.push(formData.message);
    }
    
    const text = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    const url = buildWhatsAppUrl();
    setWhatsappUrl(url);

    // Important: wa.me refuses to load inside iframes.
    // Open in a new tab/window; if the browser blocks popups, show a manual link.
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    setShowManualWhatsAppLink(!opened);
  };

  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
            Contacto
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Reserva tu <span className="text-primary">Mesa</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            ¿Quieres disfrutar de nuestra gastronomía? Contáctanos para reservar 
            o resolver cualquier duda.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-6">
              <Phone className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Teléfono / WhatsApp
              </h3>
              <p className="text-muted-foreground mb-3">
                Llámanos o escríbenos por WhatsApp
              </p>
              <a href="tel:+34627903277" className="text-lg font-semibold text-primary hover:underline">
                +34 627 90 32 77
              </a>
            </div>

            <div className="glass-card p-6">
              <Mail className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Email
              </h3>
              <p className="text-muted-foreground mb-3">
                Escríbenos para eventos especiales
              </p>
              <a href="mailto:info@marava.es" className="text-lg font-semibold text-primary hover:underline">
                info@marava.es
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                (Añadir email real)
              </p>
            </div>

            <div className="glass-card p-6">
              <Clock className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Horario de Reservas
              </h3>
              <p className="text-muted-foreground">
                Martes a Domingo<br />
                10:00 - 22:00h
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8">
              {(
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nombre *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Tu nombre"
                        className="bg-background"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Teléfono *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+34 600 000 000"
                        className="bg-background"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-background"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                        Fecha preferida
                      </label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        className="bg-background"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">
                        Nº de personas
                      </label>
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        min="1"
                        max="20"
                        placeholder="2"
                        className="bg-background"
                        value={formData.guests}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Cuéntanos cualquier detalle o petición especial..."
                      className="bg-background resize-none"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Enviar por WhatsApp
                  </Button>

                  {showManualWhatsAppLink && whatsappUrl && (
                    <div className="text-center">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        Abrir WhatsApp manualmente
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">
                        Si tu navegador bloquea ventanas emergentes, usa este enlace.
                      </p>
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground text-center">
                    Se abrirá WhatsApp con tu mensaje listo para enviar.
                    Los campos marcados con * son obligatorios.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
