import { Clock, Calendar } from "lucide-react";

const schedule = [
  {
    period: "Comidas",
    time: "12:00 - 16:00h",
    icon: Clock,
    description: "De martes a domingo",
  },
  {
    period: "Cenas",
    time: "19:30 - 23:00h",
    icon: Clock,
    description: "De jueves a sábado",
  },
];

export function ScheduleSection() {
  return (
    <section id="horarios" className="section-padding bg-volcanic text-volcanic-foreground relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-ochre rounded-full blur-3xl" />
      </div>

      <div className="container-narrow mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-terracotta-light font-medium uppercase tracking-wider text-sm mb-4">
            Visítanos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Horarios de <span className="text-terracotta-light">Apertura</span>
          </h2>
          <p className="text-volcanic-foreground/70 max-w-xl mx-auto">
            Te esperamos para disfrutar de la mejor gastronomía canaria 
            en un ambiente acogedor y familiar.
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {schedule.map((item) => (
            <div
              key={item.period}
              className="bg-volcanic-foreground/5 backdrop-blur-sm border border-volcanic-foreground/10 rounded-2xl p-8 text-center hover:bg-volcanic-foreground/10 transition-colors"
            >
              <item.icon className="w-10 h-10 text-terracotta-light mx-auto mb-4" />
              <h3 className="font-display text-2xl font-semibold mb-2">
                {item.period}
              </h3>
              <p className="text-3xl md:text-4xl font-display font-bold text-terracotta-light mb-2">
                {item.time}
              </p>
              <p className="text-volcanic-foreground/60 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closed Days Notice */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-wine/20 text-wine-foreground px-6 py-3 rounded-full">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">Cerrado los lunes</span>
          </div>
        </div>

        {/* Additional Info */}
        <p className="text-center text-volcanic-foreground/50 text-sm mt-8">
          Para grupos grandes o eventos especiales, contáctanos con antelación.
        </p>
      </div>
    </section>
  );
}
