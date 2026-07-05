import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const metaImages = [
  'https://static.wixstatic.com/media/d37dc4_7ccbb9b669e34b3eab95bfacab670fbb~mv2.png',
  'https://static.wixstatic.com/media/d37dc4_c2f5103f8d1d4d08bcce9d11f057ffdf~mv2.png',
  'https://static.wixstatic.com/media/d37dc4_9c1daa9e1a2e463ea60b8fde9be88386~mv2.png',
  'https://static.wixstatic.com/media/d37dc4_2b10b2719aa440b899b61bb3f4e9ed94~mv2.png',
  'https://static.wixstatic.com/media/d37dc4_564015640419433393e2adc3461b379a~mv2.png',
  'https://static.wixstatic.com/media/d37dc4_cb595b55b0ba4f89bbf80780ed536706~mv2.png',
  'https://static.wixstatic.com/media/d37dc4_81408a5b02e5428ebed35703da073d23~mv2.png',
  'https://static.wixstatic.com/media/d37dc4_c2f5103f8d1d4d08bcce9d11f057ffdf~mv2.png',
  'https://static.wixstatic.com/media/d37dc4_9c1daa9e1a2e463ea60b8fde9be88386~mv2.png',
  'https://static.wixstatic.com/media/d37dc4_2b10b2719aa440b899b61bb3f4e9ed94~mv2.png',
  'https://static.wixstatic.com/media/d37dc4_564015640419433393e2adc3461b379a~mv2.png',
  'https://static.wixstatic.com/media/d37dc4_cb595b55b0ba4f89bbf80780ed536706~mv2.png',
  'https://static.wixstatic.com/media/d37dc4_81408a5b02e5428ebed35703da073d23~mv2.png',
  'https://static.wixstatic.com/media/d37dc4_011ce73dc9a1415fb9d0489a280cbce5~mv2.png',
  'https://static.wixstatic.com/media/d37dc4_4ad1058a04a24d41824d934dce767661~mv2.png',
  'https://static.wixstatic.com/media/d37dc4_9fcb0ec9b0594e44bfc1e26f48e38aca~mv2.png'
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
