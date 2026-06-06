import { SITE_LOGO_URL } from '../../config/site';

const footerLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Programs', path: '/our-programs' },
  { label: 'Advertisements', path: '/advertisements' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Enquiry For Ads', path: '/ads' },
  { label: 'Terms & Condition', path: '#' },
];

const socials = [
  {
    label: 'YouTube',
    url: 'https://youtube.com/@NKRTVKannada',
    bg: '#E00000',
    icon: <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3L10 15z" />,
  },
  {
    label: 'Instagram',
    url: 'https://instagram.com/nkrtvkannada/?next=/',
    bg: 'linear-gradient(135deg,#FFC107,#FF5A3C,#BD2E8B,#5B2D91)',
    icon: <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />,
  },
  {
    label: 'Facebook',
    url: 'https://facebook.com/nkrtvkannada',
    bg: '#1D5CC8',
    icon: <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.25c-1.24 0-1.63.77-1.63 1.56v1.9h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06z" />,
  },
];

const viewershipStats = [
  { label: '134 / 110', count: '134 / 110', img: '/images/footer_viewership/10.webp' },
  { label: 'Jio 22', count: '22', img: '/images/footer_viewership/11.webp' },
  { label: 'KCL 66', count: '66', img: '/images/footer_viewership/12.webp' },
  { label: '82/77', count: '82/77', img: '/images/footer_viewership/13.webp' },
  { label: 'TCC 66', count: '66', img: '/images/footer_viewership/14.webp' },
  { label: 'DIGITAL 83', count: '83', img: '/images/footer_viewership/15.webp' },
  { label: '955', count: '955', img: '/images/footer_viewership/16.webp' },
  { label: 'NETWORK 14', count: '14', img: '/images/footer_viewership/17.webp' },
  { label: 'MSS CABLE 146', count: '146', img: '/images/footer_viewership/18.webp' },
  { label: '28', count: '28', img: '/images/footer_viewership/19.webp' },
  { label: '32', count: '32', img: '/images/footer_viewership/20.webp' },
  { label: 'GTPL 66', count: '66', img: '/images/footer_viewership/21.webp' },
  { label: '05', count: '05', img: '/images/footer_viewership/22.webp' },
  { label: '558', count: '558', img: '/images/footer_viewership/23.webp' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[linear-gradient(180deg,#7b0606_0%,#3c0101_100%)] text-white">
      <section className="relative overflow-hidden bg-[#fbf7ea] text-[#6d2a4f]">
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-[540px] opacity-50"
          style={{
            backgroundImage: 'radial-gradient(#f2d7c4 2px, transparent 2px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(circle at top right, black 35%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(circle at top right, black 35%, transparent 85%)',
          }}
        />
        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:gap-10 lg:px-10 lg:py-12">
          {/* Left — Kannada tagline */}
          <div className="shrink-0 lg:w-auto">
            <h2 className="text-[28px] font-black leading-[1.15] text-[#6d2a4f] sm:text-[34px]">
              ನಮ್ಮ ವಾಹಿನಿ<br />
              ನಿಮ್ಮ ಮನೆಯಲ್ಲಿ
            </h2>
          </div>

          {/* Divider */}
          <div className="hidden h-[140px] w-px bg-[#d8c4c0]/70 lg:block" />

          {/* Right — Stats */}
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#7c3b63]">
              Viewership &amp; Distribution
            </p>
            <p className="mt-2 max-w-[640px] text-[15px] leading-[1.45] text-[#6d4f78] sm:text-[17px]">
              Overall, in Karnataka, we have viewership of <span className="font-black text-[#6f4eb7]">30 lakhs weekdays</span>,<br />
              and on <span className="font-black text-[#6f4eb7]">weekends, 45 lakhs</span><br />
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {/* Row 1 */}
              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {viewershipStats.slice(0, 7).map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d9c8bf] bg-white shadow-[0_2px_6px_rgba(0,0,0,0.05)] overflow-hidden">
                      <img
                        src={item.img || SITE_LOGO_URL}
                        alt="NKRTV"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="text-[15px] font-black leading-none text-[#6d2a4f]">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
              {/* Row 2 */}
              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {viewershipStats.slice(7).map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d9c8bf] bg-white shadow-[0_2px_6px_rgba(0,0,0,0.05)] overflow-hidden">
                      <img
                        src={item.img || SITE_LOGO_URL}
                        alt="NKRTV"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="text-[15px] font-black leading-none text-[#6d2a4f]">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated van */}
      <div className="relative w-full h-[80px] overflow-hidden bg-[#fbf7ea]">
        <style>{`
          @keyframes driveVanRTL {
            0% {
              transform: translateX(calc(100vw + 36px));
            }
            94% {
              transform: translateX(-110px);
            }
            100% {
              transform: translateX(-132px);
            }
          }
        `}</style>
        <div
          className="absolute left-0 top-6 overflow-hidden will-change-transform"
          style={{
            animation: 'driveVanRTL 9s linear infinite',
            height: '72px',
            width: '120px',
          }}
        >
          <img
            src="/images/van1.webp"
            alt="NKR TV Van"
            className="h-full w-full object-cover"
            style={{ objectPosition: 'center 52%' }}
          />
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1510px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.4fr_1.1fr_1.1fr_1.5fr] lg:px-10 lg:py-12">
        <div>
          <img
            src={SITE_LOGO_URL}
            alt="NKRTV Logo"
            className="h-[96px] w-[96px] object-contain"
          />
          <p className="mt-4 text-[14px] font-bold">Your channel. Your voice.</p>
          <p className="mt-2 max-w-[260px] text-[14px] font-medium leading-relaxed text-white/82">
            NKR TV Kannada:<br />
            Positive entertainment celebrating<br />
            Karnataka&apos;s culture, heritage &amp; stories.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.url}
                aria-label={item.label}
                className="flex h-10 w-10 items-center justify-center rounded-full shadow-[0_5px_14px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-0.5"
                style={{ background: item.bg }}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  {item.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[17px] font-[900] uppercase tracking-[0.02em]">Quick Links</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {footerLinks.slice(0, 5).map((link) => (
              <li key={link.label}>
                {link.path ? (
                  <a href={link.path} className="group flex items-center gap-3 text-[14px] font-medium text-white/88 hover:text-[#FFC107]">
                    <span className="text-[#FF5A3C] transition-transform group-hover:translate-x-1">›</span>
                    {link.label}
                  </a>
                ) : (
                  <span className="flex items-center gap-3 text-[14px] font-medium text-white/88">
                    <span className="text-[#FF5A3C]">›</span>
                    {link.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[17px] font-[900] uppercase tracking-[0.02em]">Contact Us</h3>
          <div className="mt-5 space-y-4 text-[14px] font-medium leading-relaxed text-white/88">
            <p>250, Old Taluk Cutchery Rd,<br />Upparpete, Cottonpete,<br />Bengaluru, Karnataka 560053</p>
            <p>+91 80 4757 3986</p>
            <p>nkrtv@gmail.com</p>
          </div>
        </div>

        <div>
          <h3 className="text-[17px] font-[900] uppercase tracking-[0.02em]">Stay Connected</h3>
          <p className="mt-4 max-w-[360px] text-[13px] leading-[1.55] font-medium text-white/88 sm:mt-5 sm:text-[14px]">
            Register now to get latest updates on promotions & coupons.
          </p>
          <form className="mt-5 flex max-w-[440px] flex-col overflow-hidden rounded-[8px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] sm:flex-row">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="min-w-0 flex-1 px-4 py-3 text-[14px] font-medium text-[#2a0202] outline-none placeholder:text-[#9b8881] sm:px-4 sm:py-3"
            />
            <button
              type="button"
              className="bg-[linear-gradient(135deg,#D11212,#F05B19)] px-5 py-3 text-[13px] font-[900] uppercase text-white sm:px-5 sm:py-0"
            >
              Subscribe
            </button>
          </form>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {footerLinks.slice(5).map((link) => (
              <li key={link.label}>
                {link.path ? (
                  <a href={link.path} className="group flex items-center gap-3 text-[14px] font-medium text-white/88 hover:text-[#FFC107]">
                    <span className="text-[#FF5A3C] transition-transform group-hover:translate-x-1">›</span>
                    {link.label}
                  </a>
                ) : (
                  <span className="flex items-center gap-3 text-[14px] font-medium text-white/88">
                    <span className="text-[#FF5A3C]">›</span>
                    {link.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#250101] px-5 py-4 text-center text-[13px] font-medium text-white/86">
        Copyright © 2026 All Rights Reserved by <span className="font-[900]">NKRTV</span>
        <span className="mx-2">|</span>
        Designed and developed by{' '}
        <a href="https://www.buzziwah.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-[900] hover:text-[#FFC107] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-purple-400">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
          Buzziwah
        </a>
      </div>
    </footer>
  );
}
