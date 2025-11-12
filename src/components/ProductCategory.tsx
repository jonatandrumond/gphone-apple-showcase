import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, ChevronDown } from "lucide-react";

interface ProductCategoryProps {
  title: string;
  description: string;
  image: string;
  details: string[];
}

const ProductCategory = ({ title, description, image, details }: ProductCategoryProps) => {
  const whatsappNumber = "5531981068052";
  const whatsappMessage = `Olá! Gostaria de saber mais sobre ${title}.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="w-full bg-background">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8 lg:py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border-2 sm:border-4 border-gray-200 dark:border-gray-800 rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
            {/* Imagem Centralizada */}
            <div className="flex justify-center p-3 sm:p-4 md:p-6">
              <div className="relative w-full max-w-[280px] sm:max-w-sm aspect-square rounded-lg sm:rounded-xl overflow-hidden border-2 border-gray-300 dark:border-gray-700">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            
            {/* Conteúdo Abaixo da Imagem */}
            <div className="px-3 sm:px-4 md:px-6 pb-4 sm:pb-6 md:pb-8 text-center">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 animate-fade-in leading-tight">{title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 animate-fade-in leading-relaxed px-1" style={{ animationDelay: "0.1s" }}>{description}</p>
              
              <div className="flex justify-center mb-4 sm:mb-5 md:mb-6 animate-scale-in px-2" style={{ animationDelay: "0.2s" }}>
                <Button
                  size="lg"
                  className="bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 lg:py-6 rounded-full shadow-xl hover:shadow-[0_0_30px_rgba(142,198,103,0.5)] transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-xs sm:max-w-none"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Entrar em contato
                  </a>
                </Button>
              </div>

              <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
                <AccordionItem value="details" className="border rounded-lg px-2 sm:px-3 md:px-4">
                  <AccordionTrigger className="hover:no-underline justify-center py-3 sm:py-4">
                    <span className="flex items-center gap-2 font-semibold text-xs sm:text-sm md:text-base">
                      Ver detalhes do aparelho
                      <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-1.5 sm:space-y-2 pt-2 text-left">
                      {details.map((detail, index) => (
                        <li key={index} className="text-muted-foreground flex items-start text-xs sm:text-sm md:text-base leading-relaxed">
                          <span className="text-whatsapp mr-2 font-bold flex-shrink-0">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
