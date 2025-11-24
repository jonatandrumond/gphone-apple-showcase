import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "5531981068052";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre assitencia tecnica Apple da GPhone";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <footer className="bg-muted py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contato</h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-whatsapp transition-colors"
              >
                <Phone className="h-4 w-4 text-whatsapp" />
                (31) 98106-8052
              </a>
              <a
                href="mailto:gphonebh@gmail.com"
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4 text-blue-500" />
                gphonebh@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Endereço</h3>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rua+Ilacir+Pereira+Lima+195+S604+Belo+Horizonte+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0 text-red-500" />
              <span className="leading-relaxed">Rua Ilacir Pereira Lima, 195 S604<br />Belo Horizonte/MG</span>
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">CNPJ</h3>
            <p className="text-xs sm:text-sm text-muted-foreground break-all">
              42.328.946/0001-21
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Redes Sociais</h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <a
                href="https://instagram.com/gphonebh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-500 transition-colors"
              >
                <Instagram className="h-4 w-4 text-pink-500" />
                @gphonebh
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© 2025 GPhone BH. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
