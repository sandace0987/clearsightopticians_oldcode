import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import HeroIntro from './components/HeroIntro';
import About from './components/About';
import Mission from './components/Mission';
import Focus from './components/Focus';
import BrandsCarousel from './components/BrandsCarousel';
import RayBanMetaGallery from './components/RayBanMetaGallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RayBanProductsPage from './components/RayBanProductsPage';

export default function App() {
  const [route, setRoute] = useState<'home' | 'ray-ban-products'>('home');

  useEffect(() => {
    const handlePath = () => {
      if (window.location.pathname === '/ray-ban-products') {
        setRoute('ray-ban-products');
      } else {
        setRoute('home');
      }
    };
    handlePath();
    window.addEventListener('popstate', handlePath);
    return () => window.removeEventListener('popstate', handlePath);
  }, []);

  const navigate = (page: 'home' | 'ray-ban-products') => {
    const path = page === 'ray-ban-products' ? '/ray-ban-products' : '/';
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
      setRoute(page);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F6F0] selection:bg-[#D4AF37] selection:text-[#0F1E36]">
      {/* Navigation Header */}
      <Header currentPage={route} onNavigate={navigate} />

      {/* Main Content */}
      <main className="pt-20">
        {route === 'home' ? (
          <>
            {/* Hero Carousel */}
            <HeroCarousel />

            {/* Hero Intro */}
            <HeroIntro />

            {/* About Section */}
            <About />

            {/* Brands Section */}
            <BrandsCarousel />

            {/* Ray-Ban Meta Gallery Section */}
            <RayBanMetaGallery />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Mission Section */}
            <Mission />

            {/* Our Focus Section */}
            <Focus />

            {/* Contact Section */}
            <Contact />
          </>
        ) : (
          <>
            {/* Ray-Ban Products Page */}
            <RayBanProductsPage />

            {/* Contact Section (shared at bottom on Wix sub-pages) */}
            <Contact />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
