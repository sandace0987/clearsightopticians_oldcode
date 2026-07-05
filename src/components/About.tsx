

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-semibold font-outfit uppercase tracking-widest text-[#D4AF37]">
                Our Commitment
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-[#0F1E36] tracking-tight">
                About Clear Sight Opticians
              </h2>
            </div>
            
            <p className="text-lg text-[#2C3E50] font-poppins leading-relaxed">
              At Clear Sight Opticians, we are passionate about providing exceptional vision care services to our customers. With a focus on precision and personalized care, our experienced team ensures you receive the best possible treatment for your eyes. Visit us today to experience top-notch optician services.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="p-4 rounded-2xl bg-[#F9F6F0] border border-[#0F1E36]/5">
                <div className="text-3xl font-bold font-outfit text-[#0F1E36]">100%</div>
                <div className="text-xs text-[#2C3E50]/70 font-poppins mt-1">Accuracy Guarantee</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F9F6F0] border border-[#0F1E36]/5">
                <div className="text-3xl font-bold font-outfit text-[#0F1E36]">30+</div>
                <div className="text-xs text-[#2C3E50]/70 font-poppins mt-1">Premium Brands</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F9F6F0] border border-[#0F1E36]/5">
                <div className="text-3xl font-bold font-outfit text-[#0F1E36]">10k+</div>
                <div className="text-xs text-[#2C3E50]/70 font-poppins mt-1">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative">
            {/* Design accents */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D4AF37]/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#0F1E36]/5 rounded-full -z-10" />
            
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 hover:rotate-1">
              <img
                src="/images/about_commitment.jpg"
                alt="Clear Sight Opticians Commitment"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
