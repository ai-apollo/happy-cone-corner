
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IceCreamCone, Menu, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-chocolate-900">
          <IceCreamCone className="h-6 w-6" />
          <span className="font-serif font-bold text-xl">アイスクリーム天国</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-chocolate-800 hover:text-primary font-medium">ホーム</a>
          <a href="#menu" className="text-chocolate-800 hover:text-primary font-medium">メニュー</a>
          <a href="#about" className="text-chocolate-800 hover:text-primary font-medium">店舗紹介</a>
          <a href="#contact" className="text-chocolate-800 hover:text-primary font-medium">お問い合わせ</a>
          <Button variant="outline" size="icon" className="border-chocolate-400 text-chocolate-800 hover:bg-cream-100 hover:text-chocolate-900">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-chocolate-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-60 opacity-100 py-4' : 'max-h-0 opacity-0 py-0 overflow-hidden'
      }`}>
        <nav className="container flex flex-col space-y-4">
          <a href="#" className="text-chocolate-800 hover:text-primary px-2 py-1" onClick={() => setIsMenuOpen(false)}>ホーム</a>
          <a href="#menu" className="text-chocolate-800 hover:text-primary px-2 py-1" onClick={() => setIsMenuOpen(false)}>メニュー</a>
          <a href="#about" className="text-chocolate-800 hover:text-primary px-2 py-1" onClick={() => setIsMenuOpen(false)}>店舗紹介</a>
          <a href="#contact" className="text-chocolate-800 hover:text-primary px-2 py-1" onClick={() => setIsMenuOpen(false)}>お問い合わせ</a>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="border-chocolate-400 text-chocolate-800 hover:bg-cream-100">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
