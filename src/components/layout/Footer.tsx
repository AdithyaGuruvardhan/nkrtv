export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[linear-gradient(90deg,#2e0101_0%,#7a0505_50%,#2e0101_100%)] pt-16 text-white border-t border-[#4a0404]">
      
      {/* Decorative Dotted Patterns (Adjusted for dark mode) */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[400px] w-[400px] opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(white 2px, transparent 2px)',
          backgroundSize: '16px 16px',
          maskImage: 'radial-gradient(circle at top left, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at top left, black 30%, transparent 80%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(white 2px, transparent 2px)',
          backgroundSize: '16px 16px',
          maskImage: 'radial-gradient(circle at bottom right, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at bottom right, black 30%, transparent 80%)',
        }}
      />

      {/* Main Content Grid */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-12 gap-y-12 px-6 pb-16 lg:gap-0 lg:px-12">
        
        {/* Column 1: Brand Info */}
        <div className="col-span-12 flex flex-col gap-6 lg:col-span-4 lg:border-r lg:border-[#2A244A] lg:pr-10">
          <a href="/">
            <img
              src="https://nkrtv.in/wp-content/uploads/2024/12/cropped-NKR_Logo-3.png"
              alt="NKRTV Logo"
              className="h-[100px] w-[100px] object-contain transition-transform hover:scale-105"
            />
          </a>
          
          <p className="text-[14px] font-medium leading-relaxed text-gray-300">
            NKRTV Kannada: Positive entertainment celebrating Karnataka's culture, heritage & stories.
          </p>
          
          <div className="h-[1px] w-full bg-[#2A244A]" />
          
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#E63E1A]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <p className="text-[13px] font-medium leading-relaxed text-gray-300">
              250, Old Taluk Cutchery Rd,<br />
              Upparpete, Cottonpete,<br />
              Bengaluru, Karnataka 560053
            </p>
          </div>
          
          <div className="mt-2 flex items-center gap-4">
            <span className="text-[14px] font-extrabold text-[#E63E1A]">Follow Us</span>
            <div className="flex items-center gap-3">
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#E63E1A] hover:scale-110 shadow-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#E63E1A] hover:scale-110 shadow-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#E63E1A] hover:scale-110 shadow-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM15.194 12L10 15V9l5.194 3z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Other Pages */}
        <div className="col-span-12 flex flex-col gap-6 sm:col-span-6 lg:col-span-2 lg:border-r lg:border-[#2A244A] lg:px-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-[17px] font-extrabold text-[#E63E1A]">Other Pages</h3>
            <div className="h-[2px] w-8 bg-[#E63E1A]" />
          </div>
          <ul className="flex flex-col gap-5">
            {['About Us', 'Fiction', 'Non-Fiction', 'Short Film', 'Contact Us'].map((link) => (
              <li key={link}>
                <a href="#" className="group flex w-max items-center gap-3 text-[14px] font-bold text-white transition-colors hover:text-[#E63E1A]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3 text-[#E63E1A] transition-transform group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div className="col-span-12 flex flex-col gap-6 sm:col-span-6 lg:col-span-2 lg:border-r lg:border-[#2A244A] lg:px-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-[17px] font-extrabold text-[#E63E1A]">Useful Links</h3>
            <div className="h-[2px] w-8 bg-[#E63E1A]" />
          </div>
          <ul className="flex flex-col gap-5">
            {['Enquiry For Ads', 'Blogs', 'Terms & Condition'].map((link) => (
              <li key={link}>
                <a href="#" className="group flex w-max items-center gap-3 text-[14px] font-bold text-white transition-colors hover:text-[#E63E1A]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3 w-3 text-[#E63E1A] transition-transform group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="col-span-12 flex flex-col gap-6 lg:col-span-4 lg:pl-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-[17px] font-extrabold text-[#E63E1A]">Newsletter</h3>
            <div className="h-[2px] w-8 bg-[#E63E1A]" />
          </div>
          <p className="text-[14px] font-medium leading-relaxed text-gray-300">
            Register now to get latest updates on promotions & coupons.
          </p>
          
          <div className="relative w-full shadow-sm">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full rounded-full border border-[#2A244A] bg-[#1A1528] py-3.5 pl-[52px] pr-4 text-[13px] font-medium text-white outline-none transition-colors focus:border-[#E63E1A] placeholder:text-gray-500"
            />
            <div className="absolute left-1.5 top-1/2 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full bg-[#E63E1A] text-white shadow-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
          </div>

          <button
            type="button"
            className="mt-2 flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#FF5A3C] to-[#D42200] py-3.5 text-[14px] font-bold text-white shadow-[0_4px_15px_rgba(230,62,26,0.3)] transition-transform hover:scale-105"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
            Send Message
          </button>
        </div>
        
      </div>

      {/* Bottom Banner Full Width */}
      <div className="relative w-full border-t border-white/10 bg-[#1a0101] py-4">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between px-6 md:flex-row lg:px-12">
          
          <div className="flex w-full flex-col items-center gap-6 md:w-auto md:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M12 3c-1.5 0-3 .5-4.5 1A14.2 14.2 0 003 12c0 4.5 3.5 8 9 9 5.5-1 9-4.5 9-9a14.2 14.2 0 00-4.5-8C15 3.5 13.5 3 12 3z" />
                </svg>
              </div>
              <div className="text-[12px] font-medium leading-relaxed text-white">
                Your privacy is important to us.<br />
                We never share your information.
              </div>
            </div>

            <div className="hidden h-10 w-[1px] bg-white/30 md:block lg:ml-8 lg:mr-2"></div>
          </div>

          <div className="mt-4 text-center text-[12px] font-medium text-white md:mt-0 md:text-left">
            Copyright © 2026 All Rights Reserved by <span className="font-extrabold tracking-wide">NKRTV</span>
          </div>

        </div>
      </div>

    </footer>
  );
}
