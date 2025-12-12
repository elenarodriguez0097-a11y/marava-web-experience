import interiorImg from "@/assets/interior-1.jpg";

export function AboutSection() {
  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={interiorImg}
                alt="Interior del restaurante Marava"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
              Nuestra Historia
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Más que un restaurante, <span className="text-primary">una tradición</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground font-body">
              <p className="text-lg">
                <strong className="text-foreground font-display text-2xl">"Marava"</strong> — un nombre con raíces guanches 
                que evoca la esencia de nuestra tierra. Durante más de <strong className="text-foreground">50 años</strong>, 
                nuestra familia ha mantenido viva la tradición culinaria canaria.
              </p>
              <p>
                Cada plato que servimos cuenta una historia de generaciones, de recetas 
                transmitidas de padres a hijos, de ingredientes locales seleccionados 
                con mimo y de un amor incondicional por la gastronomía de Lanzarote.
              </p>
              <p>
                En Marava, encontrarás la autenticidad de la cocina canaria fusionada 
                con el encanto de las tapas tradicionales españolas, todo ello 
                acompañado de una cuidada selección de vinos.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: "50+", label: "Años de tradición" },
                { number: "100%", label: "Producto local" },
                { number: "∞", label: "Amor por cocinar" },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 bg-muted/50 rounded-xl">
                  <p className="font-display text-2xl md:text-3xl font-bold text-primary">
                    {item.number}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
