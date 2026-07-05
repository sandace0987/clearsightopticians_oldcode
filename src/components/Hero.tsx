

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10000ms] hover:scale-105"
        style={{
          backgroundImage: `url('https://static.wixstatic.com/media/d37dc4_ed3d4301559f48438e3ffabd3aa86b18~mv2.jpg')`,
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0F1E36]/90 via-[#0F1E36]/75 to-transparent" />

      {/* Grid Pattern overlay for depth */}
      <div className="absolute inset-0 z-10 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium font-outfit tracking-wide animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            Premium Optician & Eyewear Clinic
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-outfit text-white tracking-tight leading-tight">
            Your Vision <br />
            <span className="text-[#D4AF37]">Deserves the Best</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/80 font-poppins leading-relaxed max-w-2xl">
            Clear Sight Opticians is dedicated to preserving the health of your eyes and ensuring optimal vision every step of the way. Experience specialized diagnostics and curated international designer brands.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="bg-[#D4AF37] hover:bg-white text-[#0F1E36] font-outfit px-8 py-4 rounded-full font-bold text-center transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-[#D4AF37]/20"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="border-2 border-white/30 hover:border-white text-white font-outfit px-8 py-4 rounded-full font-bold text-center transition-all duration-300 hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden sm:block">
        <a href="#about" aria-label="Scroll Down">
          <svg
            className="w-6 h-6 text-white/50 hover:text-[#D4AF37] transition-colors"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7-7-7m14-6l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
