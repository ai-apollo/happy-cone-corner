import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const LarkNavbar = () => {
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
          <div className="bg-chocolate-800 text-cream-50 p-2 rounded-lg font-bold text-lg">
            AI²
          </div>
          <span className="font-serif font-bold text-xl">AIと仕組み</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-chocolate-800 hover:text-chocolate-600 font-medium">コンセプト</a>
          <a href="#" className="text-chocolate-800 hover:text-chocolate-600 font-medium">構造</a>
          <a href="#" className="text-chocolate-800 hover:text-chocolate-600 font-medium">コミュニティ</a>
          <Button className="bg-chocolate-800 text-cream-50 hover:bg-chocolate-900">
            Discordに参加
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
          <a href="#" className="text-chocolate-800 hover:text-chocolate-600 px-2 py-1" onClick={() => setIsMenuOpen(false)}>コンセプト</a>
          <a href="#" className="text-chocolate-800 hover:text-chocolate-600 px-2 py-1" onClick={() => setIsMenuOpen(false)}>構造</a>
          <a href="#" className="text-chocolate-800 hover:text-chocolate-600 px-2 py-1" onClick={() => setIsMenuOpen(false)}>コミュニティ</a>
          <Button className="bg-chocolate-800 text-cream-50 hover:bg-chocolate-900">
            Discordに参加
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default LarkNavbar;
