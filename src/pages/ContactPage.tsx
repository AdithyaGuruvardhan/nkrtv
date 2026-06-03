import DotBackdrop from '../components/decor/DotBackdrop';
import { useState } from 'react';

const ACCENT = '#E63E1A';
const ACCENT_LIGHT = 'rgba(230,62,26,0.08)';
const ACCENT_BORDER = 'rgba(230,62,26,0.18)';
const INK = '#1a0a00';
const COPY = '#6e5a55';
const BORDER = '#ede0da';

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: '', email: '', phone: '', subject: '', message: '', agreed: false });

  const set = (key: string, val: string | boolean) => setForm(f => ({ ...f, [key]: val }));

  const inputClass = `w-full px-4 py-3.5 rounded-lg border text-sm outline-none transition-all duration-200 bg-white `;

  return (
    <div className="relative flex flex-col w-full overflow-hidden">
      <DotBackdrop className="-top-20 -right-24 h-[360px] w-[360px] opacity-25" />
      <DotBackdrop className="bottom-16 -left-24 h-[320px] w-[320px] opacity-18" />

      {/* Banner — same as Blog page */}
      <section
        className="w-full text-center px-6 pt-[140px] pb-20"
        style={{ background: 'linear-gradient(135deg,#ba2015 0%,#e84310 55%,#f49911 100%)' }}
      >
        <p className="text-[12px] font-extrabold tracking-[0.25em] uppercase text-orange-200 mb-3">NKR TV KANNADA</p>
        <h1 className="font-extrabold text-white leading-tight mb-4"
          style={{ fontSize: 'clamp(36px,6vw,60px)' }}>
          Contact Us
        </h1>
        <div className="mx-auto mb-5 h-[3px] w-16 rounded-full bg-white/40" />
        <p className="text-[16px] font-medium text-white/90 max-w-xl mx-auto">
          We'd love to hear from you. Reach out and let's connect.
        </p>
      </section>

      <div className="max-w-[1200px] mx-auto w-full px-5 py-20">

        {/* ── Info Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill={ACCENT}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
              ),
              title: 'Office Address',
              lines: ['250, Old Taluk Cutchery Rd,', 'Upparpete, Cottonpete,', 'Bengaluru, Karnataka 560053'],
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill={ACCENT}>
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              ),
              title: 'Email Us',
              divider: true,
              lines: ['nkrtvyt@gmail.com'],
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" className="w-7 h-7" fill={ACCENT}>
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.58 1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
              ),
              title: 'Telephone',
              lines: ['+91 80 4757 3986'],
            },
          ].map((card) => (
            <div key={card.title}
              className="flex items-start gap-5 p-7 rounded-2xl bg-white transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(230,62,26,0.1)]"
              style={{ border: `1px solid ${BORDER}`, boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
              <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: ACCENT_LIGHT, border: `1px solid ${ACCENT_BORDER}` }}>
                {card.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: INK }}>{card.title}</h3>
                {card.divider && <div className="w-10 h-[2px] mb-3 rounded-full" style={{ background: ACCENT }} />}
                {card.lines.map((l, i) => (
                  <p key={i} className="text-sm leading-relaxed" style={{ color: COPY }}>{l}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Section Title ── */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-4 text-[12px] font-bold tracking-[0.22em] uppercase mb-4"
            style={{ color: ACCENT }}>
            <span className="h-px w-8 inline-block" style={{ background: ACCENT }} />
            SEND US MESSAGE
            <span className="h-px w-8 inline-block" style={{ background: ACCENT }} />
          </span>
          <h2 className="text-[42px] md:text-[46px] font-bold leading-tight mb-5"
            style={{ color: INK }}>
            Stay Connected With Us
          </h2>
          <div className="relative mx-auto w-16 h-[2px] rounded-full" style={{ background: ACCENT }}>
            <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
          </div>
        </div>

        {/* ── Form + Map ── */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Form */}
          <div className="flex-1 rounded-2xl p-10"
            style={{ background: '#fdf8f6', border: `1px solid ${BORDER}` }}>

            {/* Form header */}
            <div className="flex items-center gap-5 pb-8 mb-8" style={{ borderBottom: `1px solid ${BORDER}` }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: `linear-gradient(135deg,${ACCENT},#c42d0f)` }}>
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1" style={{ color: INK }}>Send Us a Message</h3>
                <p className="text-sm" style={{ color: COPY }}>We'd love to hear from you. Fill out the form and we'll get back to you.</p>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-[13px] font-semibold" style={{ color: INK }}>First Name <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="Enter your name" value={form.firstName}
                    onChange={e => set('firstName', e.target.value)}
                    className={inputClass}
                    style={{ border: `1px solid ${BORDER}`, color: INK }}
                    onFocus={e => (e.target.style.borderColor = ACCENT)}
                    onBlur={e => (e.target.style.borderColor = BORDER)} />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-[13px] font-semibold" style={{ color: INK }}>Your Email <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="Enter your email address" value={form.email}
                    onChange={e => set('email', e.target.value)}
                    className={inputClass}
                    style={{ border: `1px solid ${BORDER}`, color: INK }}
                    onFocus={e => (e.target.style.borderColor = ACCENT)}
                    onBlur={e => (e.target.style.borderColor = BORDER)} />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-[13px] font-semibold" style={{ color: INK }}>Your Number</label>
                  <input type="tel" placeholder="Enter your number" value={form.phone}
                    onChange={e => set('phone', e.target.value)}
                    className={inputClass}
                    style={{ border: `1px solid ${BORDER}`, color: INK }}
                    onFocus={e => (e.target.style.borderColor = ACCENT)}
                    onBlur={e => (e.target.style.borderColor = BORDER)} />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label className="text-[13px] font-semibold" style={{ color: INK }}>Subject</label>
                  <input type="text" placeholder="How can we help you?" value={form.subject}
                    onChange={e => set('subject', e.target.value)}
                    className={inputClass}
                    style={{ border: `1px solid ${BORDER}`, color: INK }}
                    onFocus={e => (e.target.style.borderColor = ACCENT)}
                    onBlur={e => (e.target.style.borderColor = BORDER)} />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-semibold" style={{ color: INK }}>Message</label>
                <textarea placeholder="Write your message here..." value={form.message}
                  onChange={e => set('message', e.target.value)}
                  rows={5}
                  className={inputClass}
                  style={{ border: `1px solid ${BORDER}`, color: INK, resize: 'none' }}
                  onFocus={e => (e.target.style.borderColor = ACCENT)}
                  onBlur={e => (e.target.style.borderColor = BORDER)} />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-3">
                <input type="checkbox" id="privacy" checked={form.agreed}
                  onChange={e => set('agreed', e.target.checked)}
                  className="w-[18px] h-[18px] rounded cursor-pointer"
                  style={{ accentColor: ACCENT }} />
                <label htmlFor="privacy" className="text-sm cursor-pointer" style={{ color: COPY }}>
                  I agree to the <a href="#" className="font-semibold underline" style={{ color: ACCENT }}>NKR TV privacy policy</a> <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Submit */}
              <button type="button"
                className="self-start inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg,${ACCENT},#c42d0f)`, boxShadow: '0 6px 20px rgba(230,62,26,0.35)' }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
                Send Message
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="flex-1 rounded-2xl overflow-hidden min-h-[500px]"
            style={{ border: `1px solid ${BORDER}` }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.592!2d77.572!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167b97e1afe7%3A0xf3e9a5eeef5f!2s250%2C%20Old%20Taluk%20Cutchery%20Rd%2C%20Upparpete%2C%20Cottonpete%2C%20Bengaluru%2C%20Karnataka%20560053!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              className="w-full h-full border-none block"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="NKR TV Office Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
