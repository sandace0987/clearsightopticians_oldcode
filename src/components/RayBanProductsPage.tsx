const products = [
  {
    title: 'Ray-Ban | Meta Skyler',
    subTitle: 'Shiny Black',
    description: 'Retro-inspired Skyler frame, featuring intelligent audio, voice assistant, and ultra-wide camera.',
    imageUrl: '/images/product_1.png'
  },
  {
    title: 'Ray-Ban | Meta Skyler',
    subTitle: 'Shiny Black (Sun)',
    description: 'Statement style. Take photos, videos, stream live, and play music hands-free.',
    imageUrl: '/images/product_2.png'
  },
  {
    title: 'Ray-Ban | Meta Skyler',
    subTitle: 'Shiny Black (Clear)',
    description: 'Iconic style meets next-generation smart technology. High-quality prescription-compatible lenses.',
    imageUrl: '/images/product_3.jpg'
  },
  {
    title: 'Ray-Ban | Meta Skyler',
    subTitle: 'Shiny Black (Classic)',
    description: 'Keep connected with smart notification capabilities and voice commands on the move.',
    imageUrl: '/images/product_4.png'
  }
];

export default function RayBanProductsPage() {
  const handleInquire = () => {
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white">
      
      {/* Video Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/file.mp4"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
        </div>
      </section>

      {/* Heading Section */}
      <section className="max-w-4xl mx-auto text-center px-4 mb-20">
        <h1 className="text-5xl font-bold font-outfit text-[#0F1E36] uppercase mb-6">
          Our Products
        </h1>
        <p className="text-lg font-poppins text-[#0F1E36]/80 leading-relaxed max-w-2xl mx-auto">
          RayBan AI Glass blends smart tech with classic style. Your stylish, intelligent companion—anywhere you go.
        </p>
      </section>

      {/* Grid of 4 Repeaters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((prod, idx) => (
            <div 
              key={idx}
              className="group flex flex-col bg-[#F9F6F0] rounded-2xl overflow-hidden border border-[#0F1E36]/5 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              
              {/* Product Image */}
              <div className="w-full h-[285px] overflow-hidden bg-white">
                <img
                  src={prod.imageUrl}
                  alt={`${prod.title} - ${prod.subTitle}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-xl font-bold font-outfit text-[#0F1E36] mb-1">
                  {prod.title}
                </h3>
                <p className="text-sm font-semibold font-poppins text-[#D4AF37] uppercase tracking-wider mb-4">
                  {prod.subTitle}
                </p>
                <p className="text-sm font-poppins text-[#0F1E36]/70 leading-relaxed flex-grow mb-6">
                  {prod.description}
                </p>

                {/* Inquiry CTA */}
                <button
                  onClick={handleInquire}
                  className="w-full py-3 bg-[#0F1E36] hover:bg-[#D4AF37] text-white font-poppins font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors duration-300"
                >
                  Inquire Now
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
