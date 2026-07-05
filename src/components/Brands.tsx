

const brandsList = [
  { name: 'Ray-Ban', desc: 'Timeless style & smart eyewear innovation' },
  { name: 'Oakley', desc: 'High-performance sport eyewear & design' },
  { name: 'Carrera', desc: 'Signature Italian style & precision frames' },
  { name: 'Polaroid', desc: 'Pioneers in polarized lens technology' },
  { name: 'Zeiss', desc: 'World-leading precision optical lenses' },
  { name: 'Essilor', desc: 'Advanced progressive & single vision lenses' },
];

export default function Brands() {
  return (
    <section id="brands" className="py-24 bg-[#F9F6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sm font-semibold font-outfit uppercase tracking-widest text-[#D4AF37]">
            Curated Collections
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-[#0F1E36] tracking-tight">
            Our Brands
          </h2>
          <p className="text-base sm:text-lg text-[#2C3E50]/80 font-poppins">
            We feature a handpicked selection of the world's most renowned frame designers and lens engineers to guarantee absolute clarity and comfort.
          </p>
        </div>

        {/* Brand Images from original site (Wix gallery highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="group relative overflow-hidden rounded-3xl shadow-lg border border-[#0F1E36]/5 bg-white">
            <div className="h-[300px] overflow-hidden">
              <img 
                src="https://static.wixstatic.com/media/d37dc4_93f46b9e46624760bded810d17aadd11~mv2.jpg" 
                alt="Premium Brand Highlight 1"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 bg-white border-t border-[#0F1E36]/5">
              <h3 className="font-outfit font-bold text-xl text-[#0F1E36] group-hover:text-[#D4AF37] transition-colors">
                Premium Frames & Sunglasses
              </h3>
              <p className="text-sm text-[#2C3E50]/80 font-poppins mt-2">
                Uncompromising luxury styles and everyday performance designs tailored to your face structure.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl shadow-lg border border-[#0F1E36]/5 bg-white">
            <div className="h-[300px] overflow-hidden">
              <img 
                src="https://static.wixstatic.com/media/d37dc4_5b6e34ed94d24e28a09b5969207c17a5~mv2.jpg" 
                alt="Premium Brand Highlight 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 bg-white border-t border-[#0F1E36]/5">
              <h3 className="font-outfit font-bold text-xl text-[#0F1E36] group-hover:text-[#D4AF37] transition-colors">
                Smart Wear & Specialized Lenses
              </h3>
              <p className="text-sm text-[#2C3E50]/80 font-poppins mt-2">
                Discover next-gen smart eyewear like Ray-Ban Meta along with custom progressive lenses.
              </p>
            </div>
          </div>
        </div>

        {/* Brands Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brandsList.map((brand) => (
            <div 
              key={brand.name} 
              className="p-6 rounded-2xl bg-white border border-[#0F1E36]/5 shadow-sm text-center flex flex-col justify-center items-center group hover:border-[#D4AF37] transition-all duration-300 hover:shadow-md"
            >
              <span className="font-outfit font-bold text-lg text-[#0F1E36] group-hover:text-[#D4AF37] transition-colors tracking-wide">
                {brand.name}
              </span>
              <span className="text-[10px] text-[#2C3E50]/60 font-poppins mt-1">
                {brand.desc}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
