import { SITE_LOGO_URL } from '../../config/site';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Fiction', href: '/fiction' },
  { name: 'Advertisements', href: '/advertisements' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact Us', href: '/contact' }
];

const socialLinks = [
  {
    name: 'YouTube',
    bg: '#E00000',
    icon: (
      <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42a2.5 2.5 0 0 0-1.76 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3L10 15z" />
    ),
  },
  {
    name: 'Instagram',
    bg: 'linear-gradient(135deg,#FFC107,#FF5A3C,#BD2E8B,#5B2D91)',
    icon: (
      <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
    ),
  },
  {
    name: 'Facebook',
    bg: '#1D5CC8',
    icon: (
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.25c-1.24 0-1.63.77-1.63 1.56v1.9h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06z" />
    ),
  },
];

export default function Header() {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#eee8e4] bg-white shadow-[0_2px_14px_rgba(72,16,8,0.08)]">
      <div className="mx-auto flex h-[78px] w-full max-w-[1510px] items-center gap-4 px-4 sm:px-6 lg:h-[92px] lg:px-10">
        <a href="/" className="relative z-10 shrink-0">
          <img
            src={SITE_LOGO_URL}
            alt="NKR TV logo"
            className="h-[84px] w-[84px] object-contain drop-shadow-[0_8px_12px_rgba(95,19,12,0.18)] sm:h-[96px] sm:w-[96px] lg:h-[118px] lg:w-[118px]"
          />
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-7 text-[0.86rem] font-extrabold uppercase tracking-[0.01em] text-[#171717] xl:flex xl:gap-11">
          {navItems.map((item) => {
            let isActive = false;
            if (item.name === 'Home') {
              isActive = currentPath === '/';
            } else if (item.name === 'About Us') {
              isActive = currentPath === '/about';
            } else if (item.name === 'Blogs') {
              isActive = currentPath === '/blog' || currentPath === '/blogs';
            } else if (item.name === 'Fiction') {
              isActive = currentPath === '/fiction';
            } else if (item.name === 'Advertisements') {
              isActive = currentPath === '/advertisements';
            } else if (item.name === 'Contact Us') {
              isActive = currentPath === '/contact';
            } else {
              isActive = false; // Dummy links aren't separate pages right now
            }

            return (
              <a 
                key={item.name} 
                href={item.href} 
                className={`group relative flex h-[92px] items-center transition-colors duration-300 ${isActive ? 'text-[#B90D0D]' : 'hover:text-[#B90D0D]'}`}
              >
                {item.name}
                <span 
                  className={`absolute bottom-[19px] left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-[#B90D0D] transition-all duration-300 ease-in-out ${isActive ? 'w-[48px]' : 'w-0 group-hover:w-[48px]'}`} 
                />
              </a>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3 xl:hidden">
          <a
            href="/ads"
            className="inline-flex items-center gap-2 rounded-[5px] bg-[linear-gradient(135deg,#D11212,#F05B19)] px-4 py-2 text-[0.78rem] font-extrabold uppercase text-white shadow-[0_5px_14px_rgba(185,13,13,0.25)] transition-transform hover:-translate-y-0.5"
          >
            Live TV
          </a>
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href="#"
              aria-label={item.name}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-[0_5px_14px_rgba(0,0,0,0.12)] transition-transform hover:-translate-y-0.5"
              style={{ background: item.bg }}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                {item.icon}
              </svg>
            </a>
          ))}
        </div>

        <a
          href="#featured-video"
          className="ml-2 hidden items-center gap-2 rounded-[5px] bg-[linear-gradient(135deg,#B90D0D,#F05B19)] px-5 py-3 text-[0.86rem] font-extrabold uppercase tracking-[0.01em] text-white shadow-[0_5px_14px_rgba(185,13,13,0.25)] transition-transform hover:-translate-y-0.5 xl:inline-flex"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
            <path d="M3 7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v.73l3.04-1.74A1.3 1.3 0 0 1 22 7.12v9.76a1.3 1.3 0 0 1-1.96 1.13L17 16.27V17a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7z" />
          </svg>
          Live TV
        </a>
      </div>
    </header>
  );
}
