import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";
import food4 from "@/assets/food-4.jpg";
import wine from "@/assets/wine.jpg";

const menuCategories = [
  {
    title: "Cocina Tradicional Canaria",
    description: "Platos con raíces locales y el sabor auténtico de Lanzarote",
    image: food1,
    items: ["Papas arrugadas con mojo", "Gofio escaldado", "Carne de cabra", "Sancocho canario"],
  },
  {
    title: "Tapas Calientes",
    description: "Delicias recién salidas de nuestra cocina",
    image: food2,
    items: ["Pimientos del piquillo rellenos", "Croquetas caseras", "Gambas al ajillo", "Calamares a la andaluza"],
    highlight: "pimientos del piquillo",
  },
  {
    title: "Tapas Frías",
    description: "Sabores frescos para compartir",
    image: food3,
    items: ["Paté de la casa", "Jamón ibérico", "Queso majorero", "Ensaladilla rusa"],
    highlight: "espectacular paté",
  },
  {
    title: "Platos Principales",
    description: "Especialidades de la casa con productos locales",
    image: food4,
    items: ["Chuletas de cerdo", "Pescado del día", "Conejo en salmorejo", "Costillas a la brasa"],
  },
  {
    title: "Selección de Vinos",
    description: "El acompañamiento perfecto para cada plato",
    image: wine,
    items: ["Vinos de Lanzarote", "Tintos de Rioja", "Blancos de Rueda", "Cavas y espumosos"],
  },
];

export function MenuSection() {
  return (
    <section id="carta" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
            Nuestra Carta
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sabores de <span className="text-primary">Lanzarote</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de platos tradicionales canarios y tapas elaboradas 
            con productos locales de primera calidad.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map((category, index) => (
            <div
              key={category.title}
              className="group glass-card overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>

                {/* Items */}
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-foreground/80"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className={category.highlight && item.toLowerCase().includes(category.highlight) ? "font-semibold text-primary" : ""}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {category.highlight && (
                  <div className="mt-4 inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                    ★ Especialidad de la casa
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* QR Card */}
        <div className="mt-12 glass-card p-8 text-center max-w-lg mx-auto">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h2M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
            Carta Digital
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            Escanea el código QR en tu mesa para ver nuestra carta completa con precios actualizados.
          </p>
          <a 
            href="/carta" 
            className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors text-sm"
          >
            Ver carta completa →
          </a>
        </div>
      </div>
    </section>
  );
}
