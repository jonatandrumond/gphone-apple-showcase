import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/WhatsApp Image 2025-11-12 at 11.31.12-Photoroom.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { label: "Início", id: "inicio" },
    { label: "Produtos", id: "produtos" },
    { label: "Sobre", id: "sobre" },
    { label: "Por quê", id: "por-que" },
    { label: "Avaliações", id: "avaliacoes" },
    { label: "Localização", id: "localizacao" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 bg-black/95 text-white transition-all duration-500 backdrop-blur-sm",
        isScrolled && "shadow-xl bg-black/98",
        isVisible ? "top-0" : "-top-24"
      )}
    >
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-center relative">
          {/* Logo */}
          <div className="absolute left-2 sm:left-4 lg:left-8">
            <img 
              src={logo} 
              alt="GPhone Logo" 
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            />
          </div>

          {/* Navigation Menu - Centralized */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden absolute right-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col gap-4 items-center">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    handleNavClick(e, item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
