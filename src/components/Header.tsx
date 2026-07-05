import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: 'home' | 'ray-ban-products';
  onNavigate: (page: 'home' | 'ray-ban-products') => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page: 'home' | 'ray-ban-products', anchor?: string) => {
    e.preventDefault();
    if (page === 'home') {
      onNavigate('home');
      if (anchor) {
        // Wait for page transition to complete before scrolling
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || currentPage === 'ray-ban-products'
          ? 'bg-[#F9F6F0]/95 backdrop-blur-md shadow-md py-2 border-b border-[#0F1E36]/10'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, 'home')}
              className="flex items-center gap-2"
            >
              <img
                src="/images/logo.png"
                alt="Clear Sight Opticians"
                className="h-12 w-auto object-contain brightness-95"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const textFallback = document.getElementById('text-logo-fallback');
                  if (textFallback) textFallback.classList.remove('hidden');
                }}
              />
              <span
                id="text-logo-fallback"
                className="hidden text-xl font-bold font-outfit text-[#0F1E36] tracking-wider"
              >
                CLEAR SIGHT <span className="text-[#D4AF37]">OPTICIANS</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, 'home', 'about')}
              className="text-[#0F1E36]/80 hover:text-[#D4AF37] font-medium font-outfit transition-colors duration-200"
            >
              About
            </a>
            <a
              href="/ray-ban-products"
              onClick={(e) => handleLinkClick(e, 'ray-ban-products')}
              className={`font-medium font-outfit transition-colors duration-200 ${
                currentPage === 'ray-ban-products' ? 'text-[#D4AF37]' : 'text-[#0F1E36]/80 hover:text-[#D4AF37]'
              }`}
            >
              Rayban meta
            </a>
            <a
              href="#services"
              onClick={(e) => handleLinkClick(e, 'home', 'focus')}
              className="text-[#0F1E36]/80 hover:text-[#D4AF37] font-medium font-outfit transition-colors duration-200"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'home', 'contact')}
              className="text-[#0F1E36]/80 hover:text-[#D4AF37] font-medium font-outfit transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'home', 'contact')}
              className="bg-[#0F1E36] hover:bg-[#D4AF37] text-white hover:text-[#0F1E36] font-outfit px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-sm"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-[#0F1E36] hover:text-[#D4AF37] focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-[#F9F6F0] shadow-xl border-l border-[#0F1E36]/10 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between py-6 px-6">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#0F1E36]/10">
              <span className="text-lg font-bold font-outfit text-[#0F1E36]">
                CLEAR SIGHT
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#0F1E36] hover:text-[#D4AF37]"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="mt-8 flex flex-col space-y-6">
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, 'home', 'about')}
                className="text-lg font-outfit text-[#0F1E36]/80 hover:text-[#D4AF37] font-medium transition-colors"
              >
                About
              </a>
              <a
                href="/ray-ban-products"
                onClick={(e) => handleLinkClick(e, 'ray-ban-products')}
                className={`text-lg font-outfit font-medium transition-colors ${
                  currentPage === 'ray-ban-products' ? 'text-[#D4AF37]' : 'text-[#0F1E36]/80 hover:text-[#D4AF37]'
                }`}
              >
                Rayban meta
              </a>
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, 'home', 'focus')}
                className="text-lg font-outfit text-[#0F1E36]/80 hover:text-[#D4AF37] font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'home', 'contact')}
                className="text-lg font-outfit text-[#0F1E36]/80 hover:text-[#D4AF37] font-medium transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          <div className="border-t border-[#0F1E36]/10 pt-6">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, 'home', 'contact')}
              className="block w-full text-center bg-[#0F1E36] hover:bg-[#D4AF37] text-white hover:text-[#0F1E36] font-outfit py-3 rounded-full font-medium transition-all"
            >
              Get in Touch
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
