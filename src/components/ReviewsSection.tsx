import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Importar todas as imagens de depoimentos
import depoimento1 from "@/assets/depoimentos/WhatsApp Image 2025-11-11 at 21.59.43.jpeg";
import depoimento2 from "@/assets/depoimentos/WhatsApp Image 2025-11-11 at 21.59.43 (1).jpeg";
import depoimento3 from "@/assets/depoimentos/WhatsApp Image 2025-11-11 at 21.59.43 (2).jpeg";
import depoimento4 from "@/assets/depoimentos/WhatsApp Image 2025-11-11 at 21.59.44.jpeg";
import depoimento5 from "@/assets/depoimentos/WhatsApp Image 2025-11-11 at 21.59.44 (1).jpeg";
import depoimento6 from "@/assets/depoimentos/WhatsApp Image 2025-11-11 at 21.59.44 (2).jpeg";
import depoimento7 from "@/assets/depoimentos/WhatsApp Image 2025-11-11 at 21.59.45.jpeg";
import depoimento8 from "@/assets/depoimentos/WhatsApp Image 2025-11-11 at 21.59.45 (1).jpeg";

const depoimentos = [
  depoimento1,
  depoimento2,
  depoimento3,
  depoimento4,
  depoimento5,
  depoimento6,
  depoimento7,
  depoimento8,
];

const ReviewsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
          <svg className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 animate-scale-in" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            O que nossos clientes dizem
          </h2>
        </div>
        
        <div className="mb-10 max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {depoimentos.map((depoimento, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105">
                      <img
                        src={depoimento}
                        alt={`Depoimento ${index + 1}`}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4 bg-white/80 hover:bg-white" />
            <CarouselNext className="right-2 md:right-4 bg-white/80 hover:bg-white" />
          </Carousel>
        </div>

        <div className="flex justify-center animate-scale-in px-4" style={{ animationDelay: "0.5s" }}>
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl w-full sm:w-auto"
            asChild
          >
            <a
              href="https://www.google.com/search?q=gphone+bh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver todas as avaliações no Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
