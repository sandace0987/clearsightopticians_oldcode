
import { Eye } from 'lucide-react';

export default function Mission() {
  return (
    <section id="mission" className="py-24 bg-[#0F1E36] text-white relative overflow-hidden">
      {/* Decorative Blur Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]">
            <Eye className="w-8 h-8" />
          </div>
        </div>

        <span className="text-sm font-semibold font-outfit uppercase tracking-widest text-[#D4AF37]">
          Our Purpose
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-outfit leading-snug tracking-tight max-w-4xl mx-auto">
          "At Clear Sight Opticians, we are dedicated to providing exceptional eye care services that enhance the quality of life for our customers. Your vision is our priority."
        </h2>

        <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mt-8" />

      </div>
    </section>
  );
}
