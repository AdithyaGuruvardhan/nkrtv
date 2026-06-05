import { useState, useRef } from 'react';
import { SITE_LOGO_URL } from '../config/site';
import DotBackdrop from '../components/decor/DotBackdrop';

const ACCENT = '#E63E1A';
const ACCENT_DARK = '#b02010';
const COPY = '#4A4A4A';

export default function AdsPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleAdsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const data = new FormData(form);
    const errors: Record<string, string> = {};
    const fullName = (data.get('fullName') as string)?.trim();
    const company = (data.get('company') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const phone = (data.get('phone') as string)?.trim();
    const adType = data.get('adType') as string;
    const details = (data.get('details') as string)?.trim();

    if (!fullName) errors.fullName = 'Full name is required';
    if (!company) errors.company = 'Company name is required';
    if (!email) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email';
    if (!phone) errors.phone = 'Phone number is required';
    if (!adType) errors.adType = 'Please select an advertisement type';
    if (!details) errors.details = 'Campaign details are required';

    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    const subject = encodeURIComponent(`Ad Enquiry from ${fullName} — ${company}`);
    const body = encodeURIComponent(
      `Full Name: ${fullName}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nAd Type: ${adType}\nDuration: ${data.get('duration') || '-'}\nBudget: ${data.get('budget') || '-'}\n\nDetails:\n${details}`
    );
    window.location.href = `mailto:nkrtv@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <div className="w-full bg-[#fffdf9] text-ink relative pt-[140px] pb-24 px-5 overflow-hidden min-h-screen">
      <DotBackdrop className="-top-[100px] -left-[200px] h-[600px] w-[600px] opacity-30" />
      <DotBackdrop className="-bottom-[100px] -right-[200px] h-[600px] w-[600px] opacity-30" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 text-[12px] font-bold tracking-[3px] uppercase mb-4"
            style={{ color: ACCENT }}>
            <span className="w-10 h-[1px]" style={{ backgroundColor: 'rgba(230,62,26,0.4)' }} />
            ENQUIRY FOR ADS
            <span className="w-10 h-[1px]" style={{ backgroundColor: 'rgba(230,62,26,0.4)' }} />
          </div>
          <h2 className="font-bold mb-4"
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              color: '#170d36'
            }}>
            Let's Work Together!
          </h2>
          <p className="text-[14px] md:text-[16px] leading-[1.6] max-w-[600px] mx-auto" style={{ color: COPY }}>
            Interested in advertising with NKRTV Kannada?<br/>Fill out the form below and our team will get in touch with you shortly.
          </p>
        </div>

        {/* Main Area */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          
          {/* Left Info Card */}
          <div className="w-full lg:w-[380px] rounded-[24px] p-10 text-white flex-shrink-0 relative overflow-hidden"
            style={{
              background: `linear-gradient(145deg, ${ACCENT} 0%, ${ACCENT_DARK} 100%)`,
              boxShadow: '0 20px 40px rgba(230,62,26, 0.15)'
            }}>
            {/* Inner Decorative Circles */}
            <div className="absolute rounded-full bg-white/5 w-[400px] h-[400px] -top-[100px] -right-[150px]" />
            <div className="absolute rounded-full bg-white/5 w-[300px] h-[300px] -bottom-[50px] -right-[50px]" />
            
            <div className="relative z-10">
              <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <img src={SITE_LOGO_URL} alt="NKRTV" className="w-full h-full object-contain rounded-full" />
              </div>
              
              <h3 className="text-[22px] font-bold mb-3">NKRTV Kannada</h3>
              <p className="text-[14px] opacity-90 leading-[1.6] mb-8">
                Positive entertainment celebrating<br/>Karnataka's culture, heritage & stories.
              </p>
              
              <div className="w-full h-[1px] bg-white/20 mb-8" />
              
              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-[16px]">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <div className="flex flex-col gap-1 pt-0.5">
                  <span className="text-[14px] font-semibold">Our Office</span>
                  <span className="text-[13px] opacity-80 leading-[1.5]">250, Old Taluk Cutchery Rd,<br/>Upparpete, Cottonpete,<br/>Bengaluru, Karnataka 560053</span>
                </div>
              </div>
              
              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-[16px]">
                  <i className="fa-solid fa-phone" />
                </div>
                <div className="flex flex-col gap-1 pt-0.5">
                  <span className="text-[14px] font-semibold">Phone</span>
                  <span className="text-[13px] opacity-80 leading-[1.5]">+91 80 4757 3986</span>
                </div>
              </div>
              
              <div className="flex gap-4 mb-6">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 text-[16px]">
                  <i className="fa-solid fa-envelope" />
                </div>
                <div className="flex flex-col gap-1 pt-0.5">
                  <span className="text-[14px] font-semibold">Email</span>
                  <span className="text-[13px] opacity-80 leading-[1.5]">nkrtv@gmail.com</span>
                </div>
              </div>
              
              <div className="flex items-center gap-5 mt-10">
                <span className="text-[14px] font-semibold">Follow Us</span>
                <div className="flex gap-3">
                  <a href="https://youtube.com/@NKRTVKannada" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/15 hover:bg-white/30 transition-colors rounded-full flex items-center justify-center text-[14px] text-white">
                    <i className="fa-brands fa-youtube" />
                  </a>
                  <a href="https://instagram.com/nkrtvkannada/?next=/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/15 hover:bg-white/30 transition-colors rounded-full flex items-center justify-center text-[14px] text-white">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href="https://facebook.com/nkrtvkannada" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/15 hover:bg-white/30 transition-colors rounded-full flex items-center justify-center text-[14px] text-white">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Right Form Area */}
          <div className="flex-1 bg-white rounded-[24px] p-6 md:p-10 border border-gray-200 shadow-sm">
            <form ref={formRef} onSubmit={handleAdsSubmit} className="group">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

                {/* Row 1 */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center border rounded-[12px] p-3 gap-4 focus-within:border-[#E63E1A] transition-colors"
                    style={{ borderColor: formErrors.fullName ? '#f87171' : '#e5e7eb' }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 text-[16px]"
                      style={{ backgroundColor: ACCENT }}>
                      <i className="fa-solid fa-user" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label className="text-[12px] font-bold text-gray-700 mb-1">Full Name <span className="text-red-600">*</span></label>
                      <input name="fullName" type="text" className="border-none outline-none text-[14px] bg-transparent text-gray-900 w-full placeholder:text-gray-400" placeholder="Enter your name" />
                    </div>
                  </div>
                  {formErrors.fullName && <p className="text-[11px] text-red-500 font-medium ml-1">{formErrors.fullName}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center border rounded-[12px] p-3 gap-4 focus-within:border-[#E63E1A] transition-colors"
                    style={{ borderColor: formErrors.company ? '#f87171' : '#e5e7eb' }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 text-[16px]"
                      style={{ backgroundColor: ACCENT }}>
                      <i className="fa-solid fa-building" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label className="text-[12px] font-bold text-gray-700 mb-1">Company Name <span className="text-red-600">*</span></label>
                      <input name="company" type="text" className="border-none outline-none text-[14px] bg-transparent text-gray-900 w-full placeholder:text-gray-400" placeholder="Enter company name" />
                    </div>
                  </div>
                  {formErrors.company && <p className="text-[11px] text-red-500 font-medium ml-1">{formErrors.company}</p>}
                </div>

                {/* Row 2 */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center border rounded-[12px] p-3 gap-4 focus-within:border-[#E63E1A] transition-colors"
                    style={{ borderColor: formErrors.email ? '#f87171' : '#e5e7eb' }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 text-[16px]"
                      style={{ backgroundColor: ACCENT }}>
                      <i className="fa-solid fa-envelope" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label className="text-[12px] font-bold text-gray-700 mb-1">Email Address <span className="text-red-600">*</span></label>
                      <input name="email" type="email" className="border-none outline-none text-[14px] bg-transparent text-gray-900 w-full placeholder:text-gray-400" placeholder="your.email@example.com" />
                    </div>
                  </div>
                  {formErrors.email && <p className="text-[11px] text-red-500 font-medium ml-1">{formErrors.email}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center border rounded-[12px] p-3 gap-4 focus-within:border-[#E63E1A] transition-colors"
                    style={{ borderColor: formErrors.phone ? '#f87171' : '#e5e7eb' }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 text-[16px]"
                      style={{ backgroundColor: ACCENT }}>
                      <i className="fa-solid fa-phone" />
                    </div>
                    <div className="flex flex-col flex-1">
                      <label className="text-[12px] font-bold text-gray-700 mb-1">Phone Number <span className="text-red-600">*</span></label>
                      <input name="phone" type="tel" className="border-none outline-none text-[14px] bg-transparent text-gray-900 w-full placeholder:text-gray-400" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  {formErrors.phone && <p className="text-[11px] text-red-500 font-medium ml-1">{formErrors.phone}</p>}
                </div>

                {/* Row 3 */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center border rounded-[12px] p-3 gap-4 focus-within:border-[#E63E1A] transition-colors"
                    style={{ borderColor: formErrors.adType ? '#f87171' : '#e5e7eb' }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 text-[16px]"
                      style={{ backgroundColor: ACCENT }}>
                      <i className="fa-solid fa-bullseye" />
                    </div>
                    <div className="flex flex-col flex-1 relative">
                      <label className="text-[12px] font-bold text-gray-700 mb-1">Advertisement Type <span className="text-red-600">*</span></label>
                      <div className="flex relative items-center">
                        <select name="adType" className="border-none outline-none appearance-none cursor-pointer text-[14px] bg-transparent text-gray-900 w-full pr-6" defaultValue="">
                            <option value="" disabled>Select type</option>
                            <option value="TV Commercial Spot">TV Commercial Spot</option>
                            <option value="Sponsored Content">Sponsored Content</option>
                            <option value="Product Placement">Product Placement</option>
                            <option value="Ticker / Banner Ad">Ticker / Banner Ad</option>
                            <option value="Program Sponsorship">Program Sponsorship</option>
                        </select>
                        <i className="fa-solid fa-chevron-down absolute right-0 pointer-events-none" style={{ color: ACCENT }} />
                      </div>
                    </div>
                  </div>
                  {formErrors.adType && <p className="text-[11px] text-red-500 font-medium ml-1">{formErrors.adType}</p>}
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center border border-gray-200 rounded-[12px] p-3 gap-4 focus-within:border-[#E63E1A] transition-colors">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 text-[16px]"
                      style={{ backgroundColor: ACCENT }}>
                      <i className="fa-solid fa-clock" />
                    </div>
                    <div className="flex flex-col flex-1 relative">
                      <label className="text-[12px] font-bold text-gray-700 mb-1">Preferred Duration</label>
                      <div className="flex relative items-center">
                        <select name="duration" className="border-none outline-none appearance-none cursor-pointer text-[14px] bg-transparent text-gray-900 w-full pr-6" defaultValue="">
                            <option value="" disabled>Select duration</option>
                            <option value="10 Seconds">10 Seconds</option>
                            <option value="15 Seconds">15 Seconds</option>
                            <option value="30 Seconds">30 Seconds</option>
                            <option value="60 Seconds">60 Seconds</option>
                            <option value="Custom Duration">Custom Duration</option>
                        </select>
                        <i className="fa-solid fa-chevron-down absolute right-0 pointer-events-none" style={{ color: ACCENT }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 4 (Full Width) */}
                <div className="col-span-1 md:col-span-2 flex flex-col gap-1">
                  <div className="flex items-center border border-gray-200 rounded-[12px] p-3 gap-4 focus-within:border-[#E63E1A] transition-colors">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 text-[16px]"
                      style={{ backgroundColor: ACCENT }}>
                      <i className="fa-solid fa-indian-rupee-sign" />
                    </div>
                    <div className="flex flex-col flex-1 relative">
                      <label className="text-[12px] font-bold text-gray-700 mb-1">Estimated Budget</label>
                      <div className="flex relative items-center">
                        <select name="budget" className="border-none outline-none appearance-none cursor-pointer text-[14px] bg-transparent text-gray-900 w-full pr-6" defaultValue="">
                            <option value="" disabled>Select budget range</option>
                            <option value="Under ₹1 Lakh">Under ₹1 Lakh</option>
                            <option value="₹1 – 5 Lakhs">₹1 – 5 Lakhs</option>
                            <option value="₹5 – 10 Lakhs">₹5 – 10 Lakhs</option>
                            <option value="₹10 – 25 Lakhs">₹10 – 25 Lakhs</option>
                            <option value="Above ₹25 Lakhs">Above ₹25 Lakhs</option>
                        </select>
                        <i className="fa-solid fa-chevron-down absolute right-0 pointer-events-none" style={{ color: ACCENT }} />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="flex flex-col gap-1 mb-5">
                <div className="flex items-start border rounded-[12px] p-4 gap-4 focus-within:border-[#E63E1A] transition-colors"
                  style={{ borderColor: formErrors.details ? '#f87171' : '#e5e7eb' }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 text-[16px]"
                    style={{ backgroundColor: ACCENT }}>
                    <i className="fa-solid fa-pen" />
                  </div>
                  <div className="flex flex-col flex-1 w-full">
                    <label className="text-[12px] font-bold text-gray-700 mb-1">Campaign Details / Requirements <span className="text-red-600">*</span></label>
                    <textarea name="details" className="border-none outline-none resize-none h-[80px] mt-1 text-[14px] bg-transparent text-gray-900 w-full placeholder:text-gray-400" placeholder="Tell us about your advertising goals, target audience, preferred time slots, or any specific requirements..."></textarea>
                    <div className="text-[11px] text-gray-400 text-right mt-2 font-medium">0 / 500</div>
                  </div>
                </div>
                {formErrors.details && <p className="text-[11px] text-red-500 font-medium ml-1">{formErrors.details}</p>}
              </div>

              <div className="flex items-center gap-3 my-6">
                <input type="checkbox" id="enq-agree" className="w-4 h-4 cursor-pointer accent-[#E63E1A]" />
                <label htmlFor="enq-agree" className="text-[13px] text-gray-500 cursor-pointer">
                  I agree that my information may be used to contact me for advertising related communication.
                </label>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center justify-center gap-5">
                  <div className="hidden md:flex gap-1.5">
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(230,62,26,0.3)' }} />
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(230,62,26,0.3)' }} />
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(230,62,26,0.3)' }} />
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(230,62,26,0.3)' }} />
                  </div>

                  <button type="submit" className="text-white px-8 py-3.5 rounded-full text-[15px] font-semibold flex items-center gap-2.5 transition-colors hover:opacity-90 shadow-md"
                    style={{ backgroundColor: ACCENT }}>
                    <i className="fa-solid fa-paper-plane" /> Submit Enquiry
                  </button>

                  <div className="hidden md:flex gap-1.5">
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(230,62,26,0.3)' }} />
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(230,62,26,0.3)' }} />
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(230,62,26,0.3)' }} />
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(230,62,26,0.3)' }} />
                  </div>
                </div>
                {formSubmitted && (
                  <p className="text-sm font-medium text-[#E63E1A]">
                    ✓ Your email client should open with the enquiry pre-filled. If not, email us directly at <a href="mailto:nkrtv@gmail.com" className="underline">nkrtv@gmail.com</a>.
                  </p>
                )}
              </div>
            </form>
          </div>
          
        </div>
        
        {/* Bottom Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-50 rounded-[20px] p-8 shadow-[inset_0_2px_10px_rgba(0,0,0,0.01)]">
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-[20px] flex-shrink-0 shadow-lg" style={{ backgroundColor: ACCENT, boxShadow: '0 6px 12px rgba(230,62,26,0.2)' }}>
              <i className="fa-solid fa-bullseye" />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-gray-900 mb-1.5">Targeted Reach</h4>
              <p className="text-[12px] text-gray-500 leading-[1.5]">Reach a highly engaged Kannada audience across platforms.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-[20px] flex-shrink-0 shadow-lg" style={{ backgroundColor: ACCENT, boxShadow: '0 6px 12px rgba(230,62,26,0.2)' }}>
              <i className="fa-solid fa-chart-simple" />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-gray-900 mb-1.5">Affordable Plans</h4>
              <p className="text-[12px] text-gray-500 leading-[1.5]">Flexible advertising solutions that fit your budget.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-[20px] flex-shrink-0 shadow-lg" style={{ backgroundColor: ACCENT, boxShadow: '0 6px 12px rgba(230,62,26,0.2)' }}>
              <i className="fa-solid fa-shield-halved" />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-gray-900 mb-1.5">Trusted Platform</h4>
              <p className="text-[12px] text-gray-500 leading-[1.5]">Partner with a trusted Kannada entertainment channel.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-[20px] flex-shrink-0 shadow-lg" style={{ backgroundColor: ACCENT, boxShadow: '0 6px 12px rgba(230,62,26,0.2)' }}>
              <i className="fa-solid fa-headset" />
            </div>
            <div>
              <h4 className="text-[14px] font-bold text-gray-900 mb-1.5">Dedicated Support</h4>
              <p className="text-[12px] text-gray-500 leading-[1.5]">Our team is here to help you every step of the way.</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
