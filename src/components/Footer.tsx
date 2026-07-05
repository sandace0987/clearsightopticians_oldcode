

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1E36] text-white/60 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand/Logo */}
          <div className="text-center md:text-left">
            <span className="text-lg font-bold font-outfit text-white tracking-wider">
              CLEAR SIGHT <span className="text-[#D4AF37]">OPTICIANS</span>
            </span>
            <p className="text-xs font-poppins mt-1 text-white/40">
              Professional Eye Care & Curated Brands
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm font-outfit">
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
            <a href="#mission" className="hover:text-[#D4AF37] transition-colors">Mission</a>
            <a href="#brands" className="hover:text-[#D4AF37] transition-colors">Brands</a>
            <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-xs font-poppins text-center md:text-right text-white/40">
            &copy; {currentYear} Clear Sight Opticians. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}
