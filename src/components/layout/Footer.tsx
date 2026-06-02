const footerLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Fiction', path: '/fiction' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Enquiry For Ads', path: '/ads' },
  { label: 'Terms & Condition', path: '#' },
];

const socials = [
  {
    label: 'Facebook',
    bg: '#1D5CC8',
    icon: <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.25c-1.24 0-1.63.77-1.63 1.56v1.9h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06z" />,
  },
  {
    label: 'YouTube',
    bg: '#E00000',
    icon: <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3L10 15z" />,
  },
  {
    label: 'Instagram',
    bg: 'linear-gradient(135deg,#FFC107,#FF5A3C,#BD2E8B,#5B2D91)',
    icon: <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[linear-gradient(180deg,#7b0606_0%,#3c0101_100%)] text-white">
      <div className="mx-auto grid w-full max-w-[1510px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.4fr_1.1fr_1.1fr_1.5fr] lg:px-10 lg:py-12">
        <div>
          <img
            src="https://nkrtv.in/wp-content/uploads/2024/12/cropped-NKR_Logo-3.png"
            alt="NKRTV Logo"
            className="h-[96px] w-[96px] object-contain"
          />
          <p className="mt-4 text-[14px] font-bold">Your channel. Your voice.</p>
          <p className="mt-2 max-w-[260px] text-[14px] font-medium leading-relaxed text-white/82">
            NKRTV Kannada: Positive entertainment celebrating Karnataka's culture, heritage & stories.
          </p>
          <div className="mt-5 flex gap-3">
            {socials.map((item) => (
              <a
                key={item.label}
                href="#"
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
            {footerLinks.slice(0, 4).map((link) => (
              <li key={link.label}>
                <a href={link.path} className="group flex items-center gap-3 text-[14px] font-medium text-white/88 hover:text-[#FFC107]">
                  <span className="text-[#FF5A3C] transition-transform group-hover:translate-x-1">›</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[17px] font-[900] uppercase tracking-[0.02em]">Contact Us</h3>
          <div className="mt-5 space-y-4 text-[14px] font-medium leading-relaxed text-white/88">
            <p>250, Old Taluk Cutchery Rd,<br />Upparpete, Cottonpete,<br />Bengaluru, Karnataka 560053</p>
            <p>+91 80 4757 3986</p>
            <p>nkrtvyt@gmail.com</p>
          </div>
        </div>

        <div>
          <h3 className="text-[17px] font-[900] uppercase tracking-[0.02em]">Stay Connected</h3>
          <p className="mt-5 max-w-[360px] text-[14px] font-medium leading-relaxed text-white/88">
            Register now to get latest updates on promotions & coupons.
          </p>
          <form className="mt-6 flex max-w-[440px] overflow-hidden rounded-[4px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="min-w-0 flex-1 px-4 py-3 text-[14px] font-medium text-[#2a0202] outline-none placeholder:text-[#9b8881]"
            />
            <button
              type="button"
              className="bg-[linear-gradient(135deg,#D11212,#F05B19)] px-5 text-[13px] font-[900] uppercase text-white"
            >
              Subscribe
            </button>
          </form>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {footerLinks.slice(4).map((link) => (
              <li key={link.label}>
                <a href={link.path} className="group flex items-center gap-3 text-[14px] font-medium text-white/88 hover:text-[#FFC107]">
                  <span className="text-[#FF5A3C] transition-transform group-hover:translate-x-1">›</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#250101] px-5 py-4 text-center text-[13px] font-medium text-white/86">
        Copyright © 2026 All Rights Reserved by <span className="font-[900]">NKRTV</span>
      </div>
    </footer>
  );
}
