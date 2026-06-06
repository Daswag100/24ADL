import { useState } from 'react';
import { Mail, MapPin, Globe, Phone } from 'lucide-react';
import { useFormspark } from "@formspark/use-formspark";

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const [submit, submitting] = useFormspark({ formId: "X4ooZ4Qkm" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submit({
      firstName,
      lastName,
      company,
      email,
      service,
      message,
    });
    alert("Message sent! We will be in touch within 24 hours.");
    setFirstName('');
    setLastName('');
    setCompany('');
    setEmail('');
    setService('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-14 md:py-24 bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div>
          <span className="text-xs font-semibold tracking-widest text-[#22C55E] uppercase block mb-3">
            GET IN TOUCH
          </span>
          <h2 className="font-syne font-bold text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Start Your Audit Engagement
          </h2>
        </div>

        {/* Supporting Image Strip */}
        <div className="relative w-full h-36 md:h-52 rounded-2xl mb-8 md:mb-12 overflow-hidden shadow-md">
          <img
            src="/images/PHOTO-2026-04-06-23-48-31_9_jpg.jpeg"
            className="w-full h-full object-cover object-center"
            alt="Auditors verifying retail shelf stock"
          />
          <div className="absolute inset-0 bg-gray-900/50 rounded-2xl pointer-events-none" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-0 items-start">
          
          {/* Left Column - Contact Details & Operating Hours */}
          <div className="flex flex-col">
            <div className="flex flex-col gap-7">
              {/* Email Item */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 border border-white/15 rounded-xl flex items-center justify-center shrink-0 bg-white/5">
                  <Mail className="h-5 w-5 text-white/60" />
                </div>
                <div className="flex flex-col">
                  <span className="font-dmsans text-[11px] text-white/35 uppercase tracking-wide mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:info@24adlinspection.com"
                    className="font-dmsans text-base text-green-400 font-medium hover:underline break-all"
                  >
                    info@24adlinspection.com
                  </a>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 border border-white/15 rounded-xl flex items-center justify-center shrink-0 bg-white/5">
                  <Phone className="h-5 w-5 text-white/60" />
                </div>
                <div className="flex flex-col">
                  <span className="font-dmsans text-[11px] text-white/35 uppercase tracking-wide mb-1">
                    Phone
                  </span>
                  <a
                    href="tel:+2347030637458"
                    className="font-dmsans text-base text-green-400 font-medium hover:underline"
                  >
                    +234 7030637458
                  </a>
                </div>
              </div>

              {/* Office Address Item */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 border border-white/15 rounded-xl flex items-center justify-center shrink-0 bg-white/5">
                  <MapPin className="h-5 w-5 text-white/60" />
                </div>
                <div className="flex flex-col">
                  <span className="font-dmsans text-[11px] text-white/35 uppercase tracking-wide mb-1">
                    Office Address
                  </span>
                  <span className="font-dmsans text-base text-white font-medium leading-relaxed">
                    22b Happy-home Avenue, Kirikiri Industrial Estate, Lagos
                  </span>
                </div>
              </div>

              {/* Also Operating In Item */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 border border-white/15 rounded-xl flex items-center justify-center shrink-0 bg-white/5">
                  <Globe className="h-5 w-5 text-white/60" />
                </div>
                <div className="flex flex-col">
                  <span className="font-dmsans text-[11px] text-white/35 uppercase tracking-wide mb-1">
                    Also Operating In
                  </span>
                  <span className="font-dmsans text-base text-white font-medium leading-relaxed">
                    Conakry (Guinea) &bull; Ghana &bull; Available Nationwide
                  </span>
                </div>
              </div>
            </div>

            {/* Business Hours Block */}
            <div className="bg-white/5 border border-white/8 rounded-xl p-6 mt-10">
              <span className="font-dmsans text-xs text-white/35 uppercase tracking-widest mb-4 block">
                Business Hours
              </span>
              <div className="flex flex-col">
                <div className="flex justify-between py-2.5 border-b border-white/6">
                  <span className="font-dmsans text-sm text-white/55">Monday to Friday</span>
                  <span className="font-dmsans text-sm text-white font-medium">9:00 AM to 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2.5 border-b border-white/6">
                  <span className="font-dmsans text-sm text-white/55">Saturday</span>
                  <span className="font-dmsans text-sm text-white font-medium">9:00 AM to 12:00 PM</span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span className="font-dmsans text-sm text-white/55">Sunday</span>
                  <span className="font-dmsans text-sm text-white font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/5 border border-white/8 rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* First & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block font-dmsans text-xs text-white/50 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="John"
                      required
                      className="bg-white/6 border border-white/12 rounded-md px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-purple-500/60 transition-colors w-full font-dmsans"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block font-dmsans text-xs text-white/50 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Doe"
                      required
                      className="bg-white/6 border border-white/12 rounded-md px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-purple-500/60 transition-colors w-full font-dmsans"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="company" className="block font-dmsans text-xs text-white/50 mb-1.5">
                    Company / Organisation
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Your company name"
                    required
                    className="bg-white/6 border border-white/12 rounded-md px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-purple-500/60 transition-colors w-full font-dmsans"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block font-dmsans text-xs text-white/50 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="bg-white/6 border border-white/12 rounded-md px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-purple-500/60 transition-colors w-full font-dmsans"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block font-dmsans text-xs text-white/50 mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    className="bg-[#1b212f] border border-white/12 rounded-md px-4 py-3 text-white text-sm outline-none focus:border-purple-500/60 transition-colors w-full font-dmsans cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="Agro Audit Services">Agro Audit Services</option>
                    <option value="Non-Agro Inventory Verification">Non-Agro Inventory Verification</option>
                    <option value="Retail Stock Audit">Retail Stock Audit</option>
                    <option value="Manufacturing Audit">Manufacturing Audit</option>
                    <option value="Compliance Verification">Compliance Verification</option>
                    <option value="Stock Reconciliation">Stock Reconciliation</option>
                    <option value="Other / Not Sure Yet">Other / Not Sure Yet</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block font-dmsans text-xs text-white/50 mb-1.5">
                    Tell us about your needs
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your inventory challenge, scale of operation, or what you'd like us to verify..."
                    required
                    className="bg-white/6 border border-white/12 rounded-md px-4 py-3 text-white text-sm placeholder-white/25 outline-none focus:border-purple-500/60 transition-colors w-full font-dmsans resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#22C55E] text-black font-syne font-bold py-3.5 rounded-md text-base mt-2 hover:bg-[#1cb054] transition-all duration-200 active:scale-[0.99] cursor-pointer shadow-lg shadow-[#22C55E]/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
          </div>

        </div>
      </div>
    </section>
  );
}
