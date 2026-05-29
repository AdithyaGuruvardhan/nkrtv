const navItems = ['Home', 'About Us', 'Fiction', 'Blogs', 'Contact Us'];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#ece7ef] bg-[#fffdfd]/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex w-full items-center gap-4 px-4 sm:px-6 lg:w-[90vw] lg:max-w-[90vw] lg:px-0">
        <a href="/" className="shrink-0">
          <img
            src="https://nkrtv.in/wp-content/uploads/2024/12/cropped-NKR_Logo-3.png"
            alt="NKR TV logo"
            className="h-[80px] w-[80px] object-contain sm:h-[100px] sm:w-[100px] lg:h-[104px] lg:w-[104px]"
          />
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-8 text-[0.9rem] font-semibold uppercase tracking-[0.02em] text-[#1a2354] xl:flex xl:gap-12">
          {navItems.map((item, index) => (
            <a key={item} href="/" className="relative pb-7">
              {item}
              {index === 0 ? (
                <span className="absolute bottom-5 left-1/2 h-[3px] w-[60px] -translate-x-1/2 rounded-full bg-[#E63E1A]" />
              ) : null}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger placeholder */}
        <div className="ml-auto flex items-center gap-3 xl:hidden">
          <a
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-[#E63E1A] bg-white px-5 py-2 text-[0.8rem] font-bold uppercase tracking-[0.02em] text-[#E63E1A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E63E1A] hover:text-white"
          >
            Enquiry
            <span className="text-[1.2rem] leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="hidden h-12 w-px bg-[#b09ad1] xl:block" />

        <a
          href="/"
          className="group ml-4 hidden items-center gap-3 rounded-full border-2 border-[#E63E1A] bg-white px-7 py-3 text-[0.9rem] font-bold uppercase tracking-[0.02em] text-[#E63E1A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E63E1A] hover:text-white xl:inline-flex"
        >
          Enquiry for Ads
          <span className="text-[1.6rem] leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </header>
  );
}
