import { Quote } from 'lucide-react';

const quotes = [
  "Exceptional service and great selection of frames! Highly recommend Clear Sight Opticians.",
  "I highly recommend Clear Sight Opticians for anyone looking for quality eyewear and vision care services. The team truly cares about their customers.",
  "Exceptional service and great selection of eyewear. Clear Sight Opticians is my go-to place for all my vision needs."
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-outfit text-[#0F1E36] tracking-tight uppercase">
            Customer Stories
          </h2>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-4"></div>
        </div>

        {/* Vertical Stack */}
        <div className="space-y-12">
          {quotes.map((quote, idx) => (
            <div key={idx} className="space-y-12">
              <div className="flex flex-col items-center sm:flex-row gap-6 text-center sm:text-left">
                {/* Quote Icon Bubble */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#F9F6F0] flex items-center justify-center text-[#D4AF37] border border-[#0F1E36]/5">
                  <Quote className="w-6 h-6 fill-current" />
                </div>

                {/* Quote Text */}
                <blockquote className="text-lg sm:text-xl font-poppins italic text-[#0F1E36]/90 leading-relaxed">
                  "{quote}"
                </blockquote>
              </div>

              {/* Horizontal Line (except last) */}
              {idx < quotes.length - 1 && (
                <hr className="border-[#0F1E36]/10" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
