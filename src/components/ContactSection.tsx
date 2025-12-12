import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo lo antes posible.",
    });
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
                Teléfono
              </h3>
              <p className="text-muted-foreground mb-3">
                Llámanos para reservar o consultar
              </p>
              <a href="tel:+34928000000" className="text-lg font-semibold text-primary hover:underline">
                +34 928 00 00 00
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                (Añadir número real)
              </p>
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
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                    ¡Gracias por contactarnos!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Hemos recibido tu mensaje. Te responderemos lo antes posible.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
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
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Solicitud
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Te contactaremos para confirmar tu reserva. 
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
