const brandImages = [
  '/images/brand_1.jpg',
  '/images/brand_2.jpg',
  '/images/brand_3.jpg',
  '/images/brand_4.jpg',
  '/images/brand_5.jpg',
  '/images/brand_6.jpg',
  '/images/brand_7.jpg',
  '/images/brand_8.jpg',
  '/images/brand_9.jpg',
  '/images/brand_10.jpg',
  '/images/brand_11.jpg',
  '/images/brand_12.jpg'
];

// Duplicate the list of brand images once to ensure continuous seamless marquee scrolling
const duplicatedBrandImages = [...brandImages, ...brandImages];

export default function BrandsCarousel() {
  return (
    <section id="brands" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-outfit text-[#0F1E36] tracking-tight uppercase">
            Our Brands
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden">
          {/* Fades on the edges for premium look */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Row */}
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] py-4">
            {duplicatedBrandImages.map((src, idx) => (
              <div 
                key={idx}
                className="flex-shrink-0 w-[240px] h-[240px] rounded-2xl overflow-hidden border border-[#0F1E36]/5 shadow-sm hover:shadow-md transition-all duration-300 bg-[#F9F6F0]"
              >
                <img 
                  src={src} 
                  alt={`Brand Logo ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
