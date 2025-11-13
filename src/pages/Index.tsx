import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCategory from "@/components/ProductCategory";
import WhySection from "@/components/WhySection";
import ReviewsSection from "@/components/ReviewsSection";
import MapSection from "@/components/MapSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

// Importar imagem do iPhone 17 Pro Max
import iphoneImage from "@/assets/depoimentos/initial__fo4stdzx5uy6_large.jpg";
import macbookImage from "@/assets/macbook-category.jpg";
import ipadImage from "@/assets/ipad-category.jpg";
import watchImage from "@/assets/watch-category.jpg";

const Index = () => {
  const iphoneDetails = [
    "Modelos disponíveis: iPhone 11, 12, 13, 14, 15, 16, 17 Pro Max",
    "Armazenamento: 64GB, 128GB, 256GB, 512GB, 1TB",
    "Cores: preto, branco, azul, rosa, titânio natural",
    "Estado: novo / seminovo",
    "Garantia: 3 meses",
    "Nota fiscal disponível",
  ];

  const macbookDetails = [
    "Modelos: MacBook Air, MacBook Pro",
    "Processadores: M1, M2, Intel",
    "Armazenamento: 256GB / 512GB / 1TB",
    "Estado: novo / seminovo",
    "Garantia: 6 meses",
    "Nota fiscal disponível",
  ];

  const ipadDetails = [
    "Modelos: iPad 9ª, 10ª geração, Air e Pro",
    "Armazenamento: 64GB / 256GB",
    "Conectividade: Wi-Fi / Wi-Fi + Celular",
    "Cores: prata, cinza-espacial",
    "Garantia: 3 meses",
    "Acessórios disponíveis: Apple Pencil",
  ];

  const watchDetails = [
    "Séries: SE, Series 7, 8, 9 e Ultra",
    "Tamanhos: 40mm / 44mm / 49mm",
    "Cores e pulseiras variadas",
    "Conectividade: GPS / Cellular",
    "Garantia: 3 meses",
    "Estado: novo / seminovo",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section id="inicio">
        <Hero />
      </section>
      <section id="produtos">
        <ProductCategory
          title="Celular iOS"
          description="Tecnologia de ponta, performance excepcional e inovação em cada detalhe"
          image={iphoneImage}
          details={iphoneDetails}
        />
        <ProductCategory
          title="MacBook"
          description="Performance, elegância e potência para o seu dia a dia"
          image={macbookImage}
          details={macbookDetails}
        />
        <ProductCategory
          title="iPad"
          description="Produtividade e criatividade em qualquer lugar"
          image={ipadImage}
          details={ipadDetails}
        />
        <ProductCategory
          title="Apple Watch"
          description="Estilo e tecnologia no seu pulso"
          image={watchImage}
          details={watchDetails}
        />
      </section>
      <section id="por-que">
        <WhySection />
      </section>
      <section id="avaliacoes">
        <ReviewsSection />
      </section>
      <section id="localizacao">
        <MapSection />
      </section>
      <section id="contato">
        <CTASection />
      </section>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default Index;
