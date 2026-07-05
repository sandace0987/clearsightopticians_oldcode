import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    url: 'https://static.wixstatic.com/media/d37dc4_ed3d4301559f48438e3ffabd3aa86b18~mv2.jpg',
    alt: 'Clear Sight Storefront'
  },
  {
    url: 'https://static.wixstatic.com/media/d37dc4_7619a5c800e548658cea72d75b0593b6~mv2.jpg',
    alt: 'Premium Eyewear Lifestyle Man'
  },
  {
    url: 'https://static.wixstatic.com/media/d37dc4_df11027b356047b493f58810e5bea3a5~mv2.jpg',
    alt: 'Premium Eyewear Lifestyle Woman'
  },
  {
    url: 'https://static.wixstatic.com/media/d37dc4_0478b574b4a54fa196ad76c8be6e51a6~mv2.jpg',
    alt: 'Eyewear Shelf Display'
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="hero-carousel" className="relative w-full h-[582px] overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.url}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 hover:bg-white text-[#0F1E36] transition-all focus:outline-none"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 hover:bg-white text-[#0F1E36] transition-all focus:outline-none"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all focus:outline-none ${
              index === current ? 'bg-[#D4AF37] scale-110' : 'bg-white/55 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
