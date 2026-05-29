const navItems = ['Home', 'About', 'Fiction', 'Blogs', 'Contact Us'];

export default function Header() {
  return (
    <header className="border-b border-[#ece7ef] bg-[#fffdfd] px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1600px] items-center gap-6">
        <a href="/" className="shrink-0">
          <img
            src="https://nkrtv.in/wp-content/uploads/2024/12/cropped-NKR_Logo-3.png"
            alt="NKR TV logo"
            className="h-[104px] w-[104px] object-contain sm:h-[112px] sm:w-[112px]"
          />
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-16 text-[1rem] font-semibold uppercase tracking-[0.02em] text-[#1a2354] xl:flex">
          {navItems.map((item, index) => (
            <a key={item} href="/" className="relative pb-7">
              {item}
              {index === 0 ? (
                <span className="absolute bottom-5 left-1/2 h-[3px] w-[80px] -translate-x-1/2 rounded-full bg-palette" />
              ) : null}
            </a>
          ))}
        </nav>

        <div className="hidden h-12 w-px bg-[#b09ad1] xl:block" />

        <a
          href="/"
          className="ml-auto inline-flex items-center gap-4 rounded-full bg-palette px-8 py-4 text-[1rem] font-semibold uppercase tracking-[0.02em] text-white shadow-[0_8px_24px_rgba(92,51,183,0.16)] transition-transform duration-200 hover:-translate-y-0.5"
        >
          Enquiry for Ads
          <span className="text-[1.8rem] leading-none">→</span>
        </a>
      </div>
    </header>
  );
}
