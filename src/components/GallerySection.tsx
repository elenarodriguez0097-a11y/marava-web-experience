import { useState } from "react";
import { X } from "lucide-react";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";
import food4 from "@/assets/food-4.jpg";
import wine from "@/assets/wine.jpg";
import interior from "@/assets/interior-1.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const galleryImages = [
  { src: heroBg, alt: "Mesa con tapas y vinos" },
  { src: interior, alt: "Interior del restaurante" },
  { src: food1, alt: "Papas arrugadas con mojo" },
  { src: food2, alt: "Pimientos del piquillo" },
  { src: food3, alt: "Paté casero" },
  { src: food4, alt: "Carne a la brasa" },
  { src: wine, alt: "Selección de vinos" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium uppercase tracking-wider text-sm mb-4">
            Galería
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Momentos en <span className="text-primary">Marava</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Descubre el ambiente y los sabores que te esperan en nuestro restaurante.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className={`relative overflow-hidden rounded-xl shadow-soft hover-lift group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className={`${index === 0 ? "aspect-square" : "aspect-square"}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-volcanic/0 group-hover:bg-volcanic/30 transition-colors flex items-center justify-center">
                <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                  Ver
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-volcanic/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-primary-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Imagen ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
