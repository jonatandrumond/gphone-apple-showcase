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
        "fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300",
        isScrolled && "shadow-md"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            GPhone
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">
            Especialista em produtos Apple
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
