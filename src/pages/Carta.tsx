import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Utensils, Wine, Leaf, Flame } from "lucide-react";

// ============================================
// CARTA ACTUALIZABLE - Última actualización: Enero 2026
// Para actualizar: modifica los arrays de cada categoría
// ============================================

const menuData = {
  lastUpdated: "13 de Enero, 2026",
  categories: [
    {
      id: "canaria",
      title: "Cocina Tradicional Canaria",
      icon: Utensils,
      items: [
        { name: "Papas arrugadas con mojo", price: "6,50€", description: "Papas de la tierra con mojo rojo y verde" },
        { name: "Gofio escaldado", price: "5,00€", description: "Receta tradicional de la abuela" },
        { name: "Carne de cabra", price: "14,00€", description: "Estofada al estilo canario" },
        { name: "Sancocho canario", price: "12,50€", description: "Con cherne, papas y mojo" },
        { name: "Puchero canario", price: "11,00€", description: "Verduras y carnes de la tierra" },
      ],
    },
    {
      id: "tapas-calientes",
      title: "Tapas Calientes",
      icon: Flame,
      highlight: "pimientos del piquillo",
      items: [
        { name: "Pimientos del piquillo rellenos", price: "9,50€", description: "Rellenos de bacalao", featured: true },
        { name: "Croquetas caseras", price: "8,00€", description: "De jamón ibérico (6 uds)" },
        { name: "Gambas al ajillo", price: "12,00€", description: "Con guindilla y aceite de oliva" },
        { name: "Calamares a la andaluza", price: "10,50€", description: "Crujientes y tiernos" },
        { name: "Pulpo a la gallega", price: "14,00€", description: "Con pimentón y aceite" },
        { name: "Champiñones al ajillo", price: "7,50€", description: "Con perejil fresco" },
      ],
    },
    {
      id: "tapas-frias",
      title: "Tapas Frías",
      icon: Leaf,
      highlight: "paté",
      items: [
        { name: "Paté de la casa", price: "8,50€", description: "Receta secreta familiar", featured: true },
        { name: "Jamón ibérico", price: "18,00€", description: "Cortado a mano (100g)" },
        { name: "Queso majorero", price: "9,00€", description: "DOP de Fuerteventura" },
        { name: "Ensaladilla rusa", price: "6,50€", description: "Casera con atún" },
        { name: "Tabla de quesos canarios", price: "14,00€", description: "Selección de 4 variedades" },
        { name: "Carpaccio de pulpo", price: "12,00€", description: "Con vinagreta de limón" },
      ],
    },
    {
      id: "principales",
      title: "Platos Principales",
      icon: Utensils,
      items: [
        { name: "Chuletas de cerdo", price: "13,50€", description: "A la brasa con papas" },
        { name: "Pescado del día", price: "Según mercado", description: "Consultar disponibilidad" },
        { name: "Conejo en salmorejo", price: "14,00€", description: "Marinado tradicional" },
        { name: "Costillas a la brasa", price: "15,00€", description: "Con mojo y papas arrugadas" },
        { name: "Secreto ibérico", price: "16,50€", description: "A la plancha con guarnición" },
        { name: "Atún rojo a la plancha", price: "18,00€", description: "De almadraba" },
      ],
    },
    {
      id: "vinos",
      title: "Selección de Vinos",
      icon: Wine,
      items: [
        { name: "Vino de la casa (copa)", price: "3,00€", description: "Tinto o blanco" },
        { name: "Malvasía volcánica", price: "22,00€", description: "D.O. Lanzarote" },
        { name: "El Grifo Malvasía", price: "18,00€", description: "D.O. Lanzarote" },
        { name: "Bermejo Listán Negro", price: "20,00€", description: "D.O. Lanzarote" },
        { name: "Rioja Crianza", price: "16,00€", description: "Selección de bodega" },
        { name: "Verdejo Rueda", price: "14,00€", description: "Fresco y afrutado" },
        { name: "Cava Brut Nature", price: "18,00€", description: "Para celebrar" },
      ],
    },
  ],
};

export default function Carta() {
  return (
    <>
      <Helmet>
        <title>Carta | Marava Vinos y Tapas</title>
        <meta name="description" content="Carta de Marava Vinos y Tapas. Cocina tradicional canaria, tapas y vinos selectos en Playa Honda, Lanzarote." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
          <div className="container-narrow mx-auto px-4 py-4 flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Volver</span>
            </Link>
            <div className="text-center">
              <h1 className="font-display text-xl font-bold text-primary">Marava</h1>
              <p className="text-xs text-muted-foreground">Vinos y Tapas</p>
            </div>
            <div className="w-16" /> {/* Spacer for centering */}
          </div>
        </header>

        {/* Hero */}
        <div className="bg-gradient-to-b from-primary/10 to-transparent py-8 px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Nuestra Carta
          </h2>
          <p className="text-muted-foreground text-sm">
            Actualizada: {menuData.lastUpdated}
          </p>
        </div>

        {/* Menu Categories */}
        <main className="container-narrow mx-auto px-4 py-6 space-y-8">
          {menuData.categories.map((category) => (
            <section key={category.id} className="glass-card p-5">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Items */}
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li 
                    key={idx}
                    className={`flex justify-between gap-4 ${item.featured ? 'bg-primary/5 -mx-3 px-3 py-2 rounded-lg border border-primary/20' : ''}`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`font-medium ${item.featured ? 'text-primary' : 'text-foreground'}`}>
                          {item.name}
                        </span>
                        {item.featured && (
                          <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                            ★ Recomendado
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {item.description}
                      </p>
                    </div>
                    <span className="font-semibold text-foreground whitespace-nowrap">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {/* Footer Note */}
          <div className="text-center py-6 space-y-3">
            <p className="text-muted-foreground text-sm">
              IVA incluido • Precios sujetos a cambios
            </p>
            <p className="text-muted-foreground text-xs">
              Infórmanos de cualquier alergia o intolerancia alimentaria
            </p>
            <Link
              to="/#contacto"
              className="inline-block mt-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Reservar mesa
            </Link>
          </div>
        </main>

        {/* Bottom Bar */}
        <footer className="border-t border-border/50 py-4 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Marava Vinos y Tapas • Playa Honda, Lanzarote
          </p>
        </footer>
      </div>
    </>
  );
}
