import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Where is Clear Sight Opticians located in Hyderabad?',
    answer: 'Clear Sight Opticians is located at Shop #4, Padmaja Complex, JNTU Road, 6th Phase, KPHB Colony, Kukatpally, Hyderabad - 500085. We have multiple branches serving Bowenpally, Nizampet, Kukatpally, and Jeedimetla in Hyderabad.',
  },
  {
    question: 'What brands of eyewear and lenses do you offer?',
    answer: 'We offer an extensive selection of premium eyewear brands, including Ray-Ban, Oakley, Carrera, Polaroid, and smart glasses like Ray-Ban Meta. For lenses, we partner with industry leaders like Zeiss and Essilor to provide progressive, computer-vision, and single-vision options.',
  },
  {
    question: 'Do you offer computer glasses for heavy screen time?',
    answer: 'Yes! We specialize in custom blue-light blocking computer glasses that filter harmful screen radiation, reduce eye strain, and prevent headaches caused by prolonged laptop or phone usage.',
  },
  {
    question: 'How can I schedule an eye consultation?',
    answer: 'You can easily request a consultation by filling out our contact form, which redirects you to WhatsApp for instant booking with our team, or by calling us directly at +91 94405 25789.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-16">
          <span className="text-sm font-semibold font-outfit uppercase tracking-widest text-[#D4AF37]">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-outfit text-[#0F1E36] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#2C3E50]/80 font-poppins">
            Quick answers to common questions about our products, services, and locations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="border border-[#0F1E36]/10 rounded-2xl overflow-hidden transition-all duration-300 bg-[#F9F6F0]"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none hover:bg-white transition-colors"
                >
                  <span className="font-outfit font-bold text-base sm:text-lg text-[#0F1E36]">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#0F1E36] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 border-t border-[#0F1E36]/10' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-sm text-[#2C3E50] font-poppins leading-relaxed bg-white">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
