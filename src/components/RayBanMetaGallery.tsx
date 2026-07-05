import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const metaImages = [
  '/images/meta_gallery_1.png',
  '/images/meta_gallery_2.png',
  '/images/meta_gallery_3.png',
  '/images/meta_gallery_4.png',
  '/images/meta_gallery_5.png',
  '/images/meta_gallery_6.png',
  '/images/meta_gallery_7.png',
  '/images/meta_gallery_2.png',
  '/images/meta_gallery_3.png',
  '/images/meta_gallery_4.png',
  '/images/meta_gallery_5.png',
  '/images/meta_gallery_6.png',
  '/images/meta_gallery_7.png',
  '/images/meta_gallery_8.png',
  '/images/meta_gallery_9.png',
  '/images/meta_gallery_10.png'
];

export default function RayBanMetaGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - 370 
        : scrollLeft + 370;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="ray-ban-meta-gallery" className="py-24 bg-[#F9F6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-outfit text-[#0F1E36] tracking-tight uppercase">
            Ray-Ban Meta Collection
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        {/* Slider Container */}
        <div className="relative group">
          
          {/* Scroll Area */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {metaImages.map((src, idx) => (
              <div 
                key={idx}
                className="flex-shrink-0 w-[353px] h-[471px] snap-start rounded-2xl overflow-hidden border border-[#0F1E36]/5 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
              >
                <img 
                  src={src} 
                  alt={`Ray-Ban Meta Product ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll Left"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-[#0F1E36]/10 text-[#0F1E36] shadow-md hover:bg-[#F9F6F0] transition-colors focus:outline-none z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => scroll('right')}
            aria-label="Scroll Right"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-[#0F1E36]/10 text-[#0F1E36] shadow-md hover:bg-[#F9F6F0] transition-colors focus:outline-none z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
}
