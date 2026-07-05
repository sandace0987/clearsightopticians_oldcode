import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const { firstName, lastName, phone, email, address } = formData;
    const formattedMessage = `Hello Clear Sight Opticians, I would like to make an inquiry:

*First Name:* ${firstName}
*Last Name:* ${lastName}
*Phone:* ${phone}
*Email:* ${email}
*Address:* ${address}`;

    // Target number: +91 94405 25789 (international format: 919440525789)
    const targetPhone = '919440525789';
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(formattedMessage)}`;

    // Redirect to WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', phone: '', email: '', address: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#F9F6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-outfit text-[#0F1E36] tracking-tight uppercase">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg text-[#0F1E36]/85 font-poppins mt-4">
            Feel free to reach out to us for any inquiries or to schedule a personalized eyewear consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-[#0F1E36]/5 shadow-sm space-y-8">
              
              <h3 className="font-outfit font-bold text-2xl text-[#0F1E36]">
                Contact Information
              </h3>

              <div className="space-y-6">
                
                {/* Mobile */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#0F1E36]/5 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-semibold text-[#0F1E36]">Phone</h4>
                    <p className="text-sm text-[#0F1E36]/80 font-poppins mt-1">
                      <a href="tel:+919440525789" className="hover:text-[#D4AF37] transition-colors underline">
                        Mobile: +91 94405 25789
                      </a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#0F1E36]/5 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-semibold text-[#0F1E36]">Address</h4>
                    <p className="text-sm text-[#0F1E36]/80 font-poppins mt-1 leading-relaxed">
                      Shop # 4 PADMAJA COMPLEX, JNTU ROAD 6TH Phase, KPHB, HYD-85
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#0F1E36]/5 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-outfit font-semibold text-[#0F1E36]">Business Hours</h4>
                    <p className="text-sm text-[#0F1E36]/80 font-poppins mt-1">
                      Mon-sun: 9:00 AM - 9:30 PM
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl bg-white border border-[#0F1E36]/5 shadow-sm space-y-6"
            >
              <h3 className="font-outfit font-bold text-2xl text-[#0F1E36] mb-4">
                Send an Inquiry
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-xs font-semibold text-[#0F1E36] font-outfit uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-xl bg-[#F9F6F0] border border-[#0F1E36]/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none font-poppins text-sm transition-all"
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-xs font-semibold text-[#0F1E36] font-outfit uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-xl bg-[#F9F6F0] border border-[#0F1E36]/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none font-poppins text-sm transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-semibold text-[#0F1E36] font-outfit uppercase tracking-wider">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-xl bg-[#F9F6F0] border border-[#0F1E36]/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none font-poppins text-sm transition-all"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-semibold text-[#0F1E36] font-outfit uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl bg-[#F9F6F0] border border-[#0F1E36]/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none font-poppins text-sm transition-all"
                />
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label htmlFor="address" className="text-xs font-semibold text-[#0F1E36] font-outfit uppercase tracking-wider">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="w-full px-4 py-3 rounded-xl bg-[#F9F6F0] border border-[#0F1E36]/10 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none font-poppins text-sm transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#0F1E36] hover:bg-[#D4AF37] text-white hover:text-[#0F1E36] font-outfit font-bold transition-all shadow-md"
              >
                {submitted ? (
                  <>Redirecting to WhatsApp...</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
