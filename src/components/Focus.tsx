
import { Users, Award, ShieldCheck } from 'lucide-react';

const focusItems = [
  {
    icon: Users,
    title: 'Expert Team',
    desc: 'Our team consists of skilled professionals dedicated to delivering superior optician services and personalized vision care.',
  },
  {
    icon: ShieldCheck,
    title: 'Advanced Diagnostics',
    desc: 'Using state-of-the-art computerized testing instruments to deliver highly precise, customized prescriptions.',
  },
  {
    icon: Award,
    title: 'Premium Eyewear',
    desc: 'Curated selection of international designer frames and specialized lenses matched to your lifestyle.',
  },
];

export default function Focus() {
  return (
    <section id="focus" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-sm font-semibold font-outfit uppercase tracking-widest text-[#D4AF37]">
            Core Competence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-outfit text-[#0F1E36] tracking-tight">
            Our Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {focusItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-[#F9F6F0] border border-[#0F1E36]/5 shadow-sm hover:border-[#D4AF37]/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0F1E36]/5 flex items-center justify-center text-[#0F1E36] group-hover:bg-[#D4AF37] group-hover:text-[#0F1E36] transition-all duration-300 mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-outfit font-bold text-xl text-[#0F1E36] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#2C3E50]/80 font-poppins leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
