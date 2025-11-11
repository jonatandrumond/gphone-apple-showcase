import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-black text-white transition-all duration-500 backdrop-blur-sm",
        isScrolled && "shadow-xl"
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
