import { useState } from 'react';

const ACCENT = '#E63E1A';
const ACCENT_DARK = '#b02010';

const services = [
  { label: 'Hoardings', img: '/images/ads/HOARDINGS.webp' },
  { label: 'Buses', img: '/images/ads/buses.webp' },
  { label: 'Bus Stop Branding', img: '/images/ads/bus stop.webp' },
  { label: 'Auto Branding', img: '/images/ads/auto.webp' },
];

const adFormatTabs: {
  key: string;
  label: string;
  formats: {
    name: string;
    description: string;
    usage: string;
    specs: { label: string; value: string }[];
    optionsLabel?: string;
  }[];
}[] = [
  {
    key: 'reach',
    label: 'Impact',
    formats: [
      {
        name: 'Disruptor Aston Band',
        description: 'A bold, oversized Aston format engineered to command attention. With striking visuals and an expanded footprint, it ensures your message stands out during premium viewing experiences.',
        usage: 'Perfect for limited-period offers, major launches, brand announcements, and high-priority marketing campaigns.',
        specs: [
          { label: 'Duration', value: '5 / 10 Seconds' },
          { label: 'Time Band', value: 'Twice Every Hour' },
          { label: 'Genre', value: 'Movies & OTT' },
        ],
      },
      {
        name: 'Branded Carousel',
        description: 'A visually engaging format that allows brands to display multiple images or videos within a 10-second slot, making it ideal for showcasing product collections, features, and campaign narratives.',
        usage: 'Perfect for storytelling, product showcases, category promotions, and multi-offer campaigns.',
        specs: [
          { label: 'Duration', value: '10 Seconds' },
          { label: 'Time Band', value: 'Once Every Hour' },
          { label: 'Genre', value: 'Movies' },
        ],
      },
      {
        name: 'L-Band',
        description: 'A strategically positioned branding format that occupies the left and bottom sections of the screen, ensuring continuous visibility for brand messages and product creatives while complementing the content experience.',
        usage: 'Perfect for brand-building initiatives, sponsorship associations, product showcases, and high-impact visibility campaigns.',
        specs: [
          { label: 'Duration', value: '10 Seconds' },
          { label: 'Time Band', value: 'Once Every Hour' },
          { label: 'Genre', value: 'Movies' },
        ],
      },
    ],
  },
  {
    key: 'inspire',
    label: 'Screen Presence',
    formats: [
      {
        name: 'Branded Window',
        description: 'A high-impact, content-adjacent branding solution that places your brand within a dedicated on-screen visual space, ensuring prominent visibility and seamless integration throughout the viewing experience.',
        usage: 'Perfect for enhancing brand stature, maximizing reach across mass audiences, and creating meaningful associations with premium entertainment content.',
        specs: [
          { label: 'Duration', value: '10 Seconds' },
          { label: 'Time Band', value: 'Once Every Hour' },
          { label: 'Genre', value: 'GEC & Movies' },
        ],
      },
      {
        name: 'Coming Up Window',
        description: 'A high-visibility branding solution that integrates your brand within dedicated preview windows during show recaps and "coming up next" moments, creating seamless exposure alongside highly anticipated content.',
        usage: 'Perfect for enhancing brand recall, capturing viewer attention during transition moments, and associating your brand with engaging entertainment experiences.',
        specs: [
          { label: 'Duration', value: '10 Seconds' },
          { label: 'Time Band', value: 'Once Every PT Show' },
          { label: 'Genre', value: 'GEC' },
        ],
      },
      {
        name: 'In-Content Advertising',
        description: 'A seamlessly embedded advertising format that integrates brands directly into content through strategically placed visual elements during scene transitions. Designed to blend naturally with the narrative, it delivers impactful brand exposure without interrupting audience engagement.',
        usage: 'Perfect for immersive brand integration, enhancing recall, and creating meaningful connections with viewers through non-intrusive visibility.',
        specs: [
          { label: 'Duration', value: '7–8 Seconds' },
          { label: 'Time Band', value: 'In-Content' },
          { label: 'Genre', value: 'GEC – Originals & Repeats' },
        ],
      },
    ],
  },
  {
    key: 'engage',
    label: 'Attention Driver',
    formats: [
      {
        name: 'QR Code Astons',
        description: 'An interactive Aston band solution that combines prominent on-screen visibility with a scannable QR code, enabling audiences to instantly access brand experiences, offers, websites, or applications. Designed to convert viewer attention into measurable actions, it effectively bridges the gap between television and mobile engagement.',
        usage: 'Perfect for driving digital engagement, increasing website visits, generating leads, boosting app installations, and creating seamless cross-device interactions.',
        specs: [
          { label: 'CPC (Cost Per Click)', value: 'Cost incurred when a viewer clicks on the ad.' },
          { label: 'CPL (Cost Per Lead)', value: 'Pay for qualified leads generated.' },
          { label: 'CPI (Cost Per Install)', value: 'Pay for app installs driven by the ad.' },
          { label: 'CPM (Cost Per Mille)', value: 'Cost per 1,000 ad impressions.' },
        ],
      },
      {
        name: 'Anchor Mentions',
        description: 'A premium content-led advertising solution where anchors seamlessly incorporate brand mentions or product showcases into live or recorded broadcasts. By leveraging the familiarity and credibility of trusted presenters, it creates authentic brand associations and enhances audience receptiveness.',
        usage: 'Perfect for driving brand trust, reinforcing credibility, and creating meaningful audience connections through organic endorsements.',
        specs: [
          { label: 'CPM (Cost Per Mille)', value: 'Cost per 1,000 ad impressions.' },
          { label: 'CPC (Cost Per Click)', value: 'Cost incurred when a viewer clicks on the ad.' },
          { label: 'CPD (Cost Per Day)', value: 'Fixed cost for dedicated visibility per day.' },
        ],
      },
      {
        name: 'In Show Integration',
        description: 'A highly immersive advertising solution that embeds brands directly within a show\'s storyline, enabling natural exposure and authentic audience engagement. By aligning seamlessly with the narrative, it fosters stronger brand affinity and creates lasting impressions.',
        usage: 'Ideal for building authentic brand associations, driving high recall, and establishing deeper audience connections through content-led storytelling.',
        specs: [
          { label: 'CPM (Cost Per Mille)', value: 'Cost per 1,000 ad impressions.' },
          { label: 'CPC (Cost Per Click)', value: 'Cost incurred when a viewer clicks on the ad.' },
          { label: 'CPD (Cost Per Day)', value: 'Fixed cost for exclusive visibility per day.' },
        ],
      },
    ],
  },
];

export default function AdvertisementsPage() {
  return (
    <div className="advertisements-page w-full bg-white relative pt-[92px] pb-0 overflow-hidden">
      <style>{`
        @media (max-width: 639px) {
          .advertisements-page {
            padding-top: 72px;
          }

          .advertisements-page .advertisements-hero {
            height: 150px;
          }

          .advertisements-page .advertisements-hero img {
            object-position: center center;
          }

          .advertisements-page .advertisements-section {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 40px;
            padding-bottom: 40px;
          }

          .advertisements-page .advertisements-section-title {
            font-size: 24px;
            line-height: 1.15;
          }

          .advertisements-page .advertisements-section-subtitle {
            font-size: 13px;
          }

          .advertisements-page .advertisements-services-grid {
            gap: 14px;
          }

          .advertisements-page .advertisements-service-image {
            height: 108px;
          }

          .advertisements-page .advertisements-service-label {
            font-size: 12px;
          }

          .advertisements-page .advertisements-formats-section {
            padding-left: 0;
            padding-right: 0;
          }

          .advertisements-page .advertisements-formats-header {
            margin-bottom: 28px;
            padding-left: 16px;
            padding-right: 16px;
          }

          .advertisements-page .advertisements-format-tabs {
            overflow-x: auto;
            justify-content: flex-start;
            padding: 6px;
            margin-left: 16px;
            margin-right: 16px;
            max-width: calc(100% - 32px);
            scrollbar-width: none;
          }

          .advertisements-page .advertisements-format-tabs::-webkit-scrollbar {
            display: none;
          }

          .advertisements-page .advertisements-format-tab {
            white-space: nowrap;
            padding-left: 16px;
            padding-right: 16px;
            font-size: 11px;
            flex: 0 0 auto;
          }

          .advertisements-page .advertisements-format-panel {
            border-left: none;
            border-right: none;
            border-radius: 0;
            padding: 0;
          }

          .advertisements-page .advertisements-format-panel-grid {
            gap: 0;
          }

          .advertisements-page .advertisements-format-list {
            padding: 18px 16px 14px;
            border-right: none;
          }

          .advertisements-page .advertisements-format-list-item {
            padding: 12px 14px;
            font-size: 13px;
          }

          .advertisements-page .advertisements-format-details {
            padding: 20px 16px 32px;
          }

          .advertisements-page .advertisements-format-details h3 {
            font-size: 22px;
          }

          .advertisements-page .advertisements-format-card {
            padding: 16px;
            border-radius: 14px;
          }

          .advertisements-page .advertisements-format-specs {
            grid-template-columns: 1fr;
          }

          .advertisements-page .advertisements-cta {
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 40px;
            padding-bottom: 44px;
          }

          .advertisements-page .advertisements-cta-grid {
            gap: 28px;
          }

          .advertisements-page .advertisements-cta-title {
            font-size: 26px;
          }

          .advertisements-page .advertisements-contact-row {
            align-items: flex-start;
          }

          .advertisements-page .advertisements-contact-row span {
            font-size: 13px;
          }

          .advertisements-page .advertisements-form {
            padding: 18px 16px;
            border-radius: 16px;
          }

          .advertisements-page .advertisements-form .grid {
            gap: 12px;
          }

          .advertisements-page .advertisements-form input,
          .advertisements-page .advertisements-form textarea {
            font-size: 16px;
          }

          .advertisements-page .advertisements-form button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      {/* ── 01 Hero Banner (no text) ── */}
      <section className="advertisements-hero relative w-full h-[220px] sm:h-[420px] md:h-[620px] overflow-hidden">
        <img
          src="/images/ad_banner.webp"
          alt="Advertisement Banner"
          className="w-full h-full object-cover"
        />
      </section>

      {/* ── 02 Our Services ── */}
      <section className="advertisements-section w-full px-5 py-16 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="advertisements-section-title text-[28px] md:text-[36px] font-black text-[#1a0a00] mb-2">
              Our Outdoor Advertising Solutions
            </h2>
            <p className="advertisements-section-subtitle text-[14px] md:text-[16px] font-medium" style={{ color: '#6e5a55' }}>
              Powerful. Visible. Effective.
            </p>
          </div>

          <div className="advertisements-services-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group">
                <div className="w-full overflow-hidden rounded-[14px] bg-[#f5f5f5]">
                  <img
                    src={s.img}
                    alt={s.label}
                    className="advertisements-service-image w-full h-[140px] sm:h-[180px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="advertisements-service-label text-[13px] sm:text-[14px] font-bold text-[#1a0a00]">{s.label}</span>
                <span className="h-[2px] w-8 rounded-full" style={{ background: ACCENT }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 Ad Formats (Interactive Tabs) ── */}
      <AdFormatsSection />

      {/* ── 04 Contact CTA ── */}
      <section className="advertisements-cta w-full px-5 py-16 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="advertisements-cta-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <h2 className="advertisements-cta-title text-[28px] md:text-[40px] font-black text-[#1a0a00] leading-tight mb-4">
                Let&apos;s Build Your<br />
                <span style={{ color: ACCENT }}>Brand Presence</span><br />
                Together
              </h2>
              <p className="text-[14px] leading-[1.7] mb-8" style={{ color: '#6e5a55' }}>
                Have a project in mind? Let&apos;s talk!
              </p>

              <div className="flex flex-col gap-4">
                <div className="advertisements-contact-row flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full text-white" style={{ background: ACCENT }}>
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-medium text-[#1a0a00]">+91 80 4757 3986</span>
                </div>
                <div className="advertisements-contact-row flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full text-white" style={{ background: ACCENT }}>
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-medium text-[#1a0a00]">admin@nkrtvkannada.com</span>
                </div>
                <div className="advertisements-contact-row flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full text-white" style={{ background: ACCENT }}>
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-medium text-[#1a0a00]">Bengaluru, Karnataka</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="advertisements-form rounded-[20px] bg-[#fafafa] p-6 sm:p-8 shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-[10px] border border-gray-200 bg-white px-4 py-3 text-[14px] outline-none focus:border-[#E63E1A]"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-[10px] border border-gray-200 bg-white px-4 py-3 text-[14px] outline-none focus:border-[#E63E1A]"
                />
              </div>
              <input
                type="tel"
                placeholder="Your Phone"
                className="mb-4 w-full rounded-[10px] border border-gray-200 bg-white px-4 py-3 text-[14px] outline-none focus:border-[#E63E1A]"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="mb-5 w-full resize-none rounded-[10px] border border-gray-200 bg-white px-4 py-3 text-[14px] outline-none focus:border-[#E63E1A]"
              />
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-[14px] font-bold text-white transition-transform hover:-translate-y-0.5"
                style={{ background: `linear-gradient(135deg,${ACCENT},${ACCENT_DARK})` }}
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

function AdFormatsSection() {
  const [activeCategory, setActiveCategory] = useState('reach');
  const [activeFormatIdx, setActiveFormatIdx] = useState(0);

  const category = adFormatTabs.find((t) => t.key === activeCategory) || adFormatTabs[0];
  const format = category.formats[activeFormatIdx] || category.formats[0];
  const showSpecs = category.key !== 'engage';

  const handleCategoryChange = (key: string) => {
    setActiveCategory(key);
    setActiveFormatIdx(0);
  };

  return (
      <section className="advertisements-formats-section w-full px-5 py-20 bg-white">
        <div className="max-w-[1100px] mx-auto">
          {/* Section header */}
        <div className="advertisements-formats-header text-center mb-12">
          <div className="inline-flex items-center justify-center gap-3 text-[11px] font-extrabold tracking-[0.2em] uppercase mb-3"
            style={{ color: '#E63E1A' }}>
            <span className="w-10 h-[2px]" style={{ background: 'rgba(230,62,26,0.35)' }} />
            Linear Advertising
            <span className="w-10 h-[2px]" style={{ background: 'rgba(230,62,26,0.35)' }} />
          </div>
          <h2 className="text-[32px] md:text-[42px] font-black text-[#1a0a00] leading-tight mb-3">
            Premium Ad Formats
          </h2>
          <p className="text-[15px] md:text-[17px] font-medium max-w-xl mx-auto" style={{ color: '#6e5a55' }}>
            Strategic placements designed to create impact, screen presence, brand spotlight, and attention-driven engagement.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="advertisements-format-tabs flex items-center justify-center gap-0 mb-10 bg-[#fafafa] rounded-full p-1.5 max-w-max mx-auto border border-[#f0e8e3]">
          {adFormatTabs.map((t) => (
            <button
              key={t.key}
              onClick={() => handleCategoryChange(t.key)}
              className={`advertisements-format-tab relative px-7 py-2.5 rounded-full text-[13px] font-extrabold uppercase tracking-wide transition-all duration-300 ${
                activeCategory === t.key
                  ? 'text-white shadow-md'
                  : 'text-[#6e5a55] hover:text-[#1a0a00]'
              }`}
              style={activeCategory === t.key ? { background: 'linear-gradient(135deg,#E63E1A,#b02010)' } : {}}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="advertisements-format-panel relative bg-[#fafafa] rounded-[24px] p-1 border border-[#f0e8e3]">
          {/* Accent top bar */}
          <div className="absolute top-0 left-6 right-6 sm:left-8 sm:right-8 h-1 rounded-b-full z-10"
            style={{ background: 'linear-gradient(90deg,#E63E1A,#f49911)' }} />

          <div className="advertisements-format-panel-grid grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0">
            {/* Left: Format list */}
            <div className="advertisements-format-list p-6 sm:p-8 lg:border-r border-[#f0e8e3]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-5"
                style={{ background: 'rgba(230,62,26,0.08)', color: '#E63E1A' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63E1A]" />
                {category.label}
              </div>

              <div className="space-y-3">
                {category.formats.map((f, i) => (
                  <button
                    key={f.name}
                    onClick={() => setActiveFormatIdx(i)}
                    className={`advertisements-format-list-item group w-full flex items-center gap-3 text-left px-4 py-3.5 rounded-xl text-[14px] font-bold transition-all duration-200 border shadow-sm ${
                      activeFormatIdx === i
                        ? 'bg-white border-[#E63E1A] text-[#E63E1A]'
                        : 'bg-white border-[#e8e0db] text-[#1a0a00] hover:border-[#E63E1A] hover:text-[#E63E1A]'
                    }`}
                  >
                    <span className={`flex h-7 w-7 items-center justify-center rounded-lg text-[11px] font-black flex-shrink-0 transition-colors ${
                      activeFormatIdx === i
                        ? 'bg-[#E63E1A] text-white'
                        : 'bg-[#fafafa] text-[#9b8881] group-hover:bg-[#E63E1A] group-hover:text-white'
                    }`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1">{f.name}</span>
                    <svg viewBox="0 0 24 24" className={`h-4 w-4 flex-shrink-0 transition-all ${
                      activeFormatIdx === i
                        ? 'text-[#E63E1A] translate-x-0 opacity-100'
                        : 'text-[#c4b5b0] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'
                    }`} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Format details */}
            <div className="advertisements-format-details p-6 sm:p-8 lg:p-10">
              <h3 className="text-[22px] sm:text-[28px] font-black text-[#1a0a00] leading-tight mb-6">
                {format.name}
              </h3>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="bg-white rounded-[16px] p-5 border border-[#f0e8e3]">
                    <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#E63E1A] mb-2">Description</h4>
                    <p className="text-[14px] leading-[1.7] font-medium" style={{ color: '#6e5a55' }}>{format.description}</p>
                  </div>
                  <div className="bg-white rounded-[16px] p-5 border border-[#f0e8e3]">
                    <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#E63E1A] mb-2">Usage</h4>
                    <p className="text-[14px] leading-[1.7] font-medium" style={{ color: '#6e5a55' }}>{format.usage}</p>
                  </div>
                </div>

                {showSpecs ? (
                  <div>
                    <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#E63E1A] mb-3">
                      {format.optionsLabel || 'Specifications'}
                    </h4>
                    <div className={`advertisements-format-specs grid gap-4 ${format.specs.length > 3 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-3'}`}>
                      {format.specs.map((s) => (
                        <div key={s.label} className="advertisements-format-card bg-white rounded-[16px] p-4 text-left border border-[#f0e8e3]">
                          <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#9b8881] mb-1">{s.label}</p>
                          <p className="text-[13px] font-semibold text-[#1a0a00] leading-snug">{s.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
