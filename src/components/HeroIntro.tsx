import React from 'react';

export default function HeroIntro() {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero-intro" 
      className="py-20 flex flex-col items-center text-center px-4"
      style={{
        backgroundImage: 'conic-gradient(from 0deg at 47.95% 61.39%, #CEF0FD 0%, #F9FDFF 100%)'
      }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Title */}
        <h1 className="text-4xl sm:text-6xl font-bold font-outfit text-[#1C203A] tracking-tight uppercase leading-tight mb-8">
          Your Vision Deserves the Best
        </h1>

        {/* Big Remix Logo */}
        <div className="w-full max-w-[500px] mb-8">
          <img 
            src="/images/logo.png" 
            alt="Clear Sight Opticians Remix Logo" 
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Description Paragraph */}
        <p className="text-base sm:text-lg font-poppins text-[#1C203A] max-w-2xl leading-relaxed mb-10">
          Clear Sight Opticians is dedicated to preserving the health of your eyes and ensuring optimal vision every step of the way.
        </p>

        {/* Get in Touch CTA */}
        <a 
          href="#contact" 
          onClick={handleScrollToContact}
          className="inline-block px-10 py-4 border border-[#1C203A] rounded-full text-[#1C203A] hover:bg-[#1C203A] hover:text-[#F9FDFF] font-poppins font-bold text-sm uppercase tracking-wider transition-all duration-300"
        >
          Get in Touch
        </a>

      </div>
    </section>
  );
}
