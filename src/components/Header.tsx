import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 bg-black text-white transition-all duration-500 backdrop-blur-sm",
        isScrolled && "shadow-xl",
        isVisible ? "top-0" : "-top-24"
      )}
    >
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col items-center justify-center text-center animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            GPhone
          </h1>
          <p className="text-xs md:text-sm text-gray-300 mt-1 tracking-wide">
            Especialista em produtos Apple
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
