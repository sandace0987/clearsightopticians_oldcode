const brandImages = [
  'https://static.wixstatic.com/media/d37dc4_93f46b9e46624760bded810d17aadd11~mv2.jpg',
  'https://static.wixstatic.com/media/d37dc4_5b6e34ed94d24e28a09b5969207c17a5~mv2.jpg',
  'https://static.wixstatic.com/media/d37dc4_5eb3a0b22f2443d09e40dca0fae394eb~mv2.jpg',
  'https://static.wixstatic.com/media/d37dc4_f61d0792eb1141dd985c5663c70d956c~mv2.jpg',
  'https://static.wixstatic.com/media/d37dc4_e41885a9ca9b416f899e7e91a6f96535~mv2.jpg',
  'https://static.wixstatic.com/media/d37dc4_8c83f81f3c4a499c9ca98966d6b21298~mv2.jpg',
  'https://static.wixstatic.com/media/d37dc4_5f0dc217323945afbe5b1dab2edc3e6e~mv2.jpg',
  'https://static.wixstatic.com/media/d37dc4_7f8486aa3c924f83847290510af6097b~mv2.jpg',
  'https://static.wixstatic.com/media/d37dc4_06b87147b5954d57af1f52b1b9df2751~mv2.jpg',
  'https://static.wixstatic.com/media/d37dc4_e78f313265fd4f509a28215c10a93fad~mv2.jpg',
  'https://static.wixstatic.com/media/d37dc4_786b389015184142b68e026f62a80532~mv2.jpg',
  'https://static.wixstatic.com/media/d37dc4_b8cc85310b0f40a2aa11ec9b0465ac11~mv2.jpg'
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
