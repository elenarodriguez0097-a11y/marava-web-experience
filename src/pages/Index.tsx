import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { MenuSection } from "@/components/MenuSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { LocationSection } from "@/components/LocationSection";
import { GallerySection } from "@/components/GallerySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Marava Vinos y Tapas | Restaurante en Playa Honda, Lanzarote</title>
        <meta name="description" content="Marava Vinos y Tapas - Restaurante de cocina tradicional canaria y tapas en Playa Honda, Lanzarote. Más de 50 años de tradición familiar. Reserva tu mesa." />
        <meta name="keywords" content="restaurante Playa Honda, tapas Lanzarote, comida canaria, Marava, vinos, gastronomía canaria" />
        <meta property="og:title" content="Marava Vinos y Tapas | Restaurante en Playa Honda, Lanzarote" />
        <meta property="og:description" content="Cocina tradicional canaria y tapas. Más de 50 años de tradición familiar en el corazón de Playa Honda." />
        <meta property="og:type" content="restaurant" />
        <link rel="canonical" href="https://marava.es" />
      </Helmet>
      
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <ScheduleSection />
        <LocationSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
