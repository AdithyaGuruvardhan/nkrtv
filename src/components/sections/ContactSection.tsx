
export default function ContactSection() {
  return (
    <section className="bg-[#fffdf9] py-16">
      <div className="mx-auto w-full max-w-[1510px] px-4 sm:px-6 lg:px-10">
        
        {/* Social Media Banner */}
        <div className="relative mb-24 flex flex-col items-center justify-center overflow-hidden rounded-[24px] border border-[#F4D3CA] bg-[#FFF9F5] py-10 shadow-sm">
          {/* Decorative Dotted Patterns */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 top-0 w-[200px] opacity-60"
            style={{
              backgroundImage: 'radial-gradient(#F4D3CA 2px, transparent 2px)',
              backgroundSize: '16px 16px',
              maskImage: 'linear-gradient(to right, black, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, black, transparent)',
            }}
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 top-0 w-[200px] opacity-60"
            style={{
              backgroundImage: 'radial-gradient(#F4D3CA 2px, transparent 2px)',
              backgroundSize: '16px 16px',
              maskImage: 'linear-gradient(to left, black, transparent)',
              WebkitMaskImage: 'linear-gradient(to left, black, transparent)',
            }}
          />

          <div className="relative z-10 mb-6 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-[#E63E1A] sm:w-24"></div>
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#E63E1A]">
              Follow on Social Media
            </span>
            <div className="h-[1px] w-12 bg-[#E63E1A] sm:w-24"></div>
          </div>
          
          <button className="relative z-10 flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#FF5A3C] to-[#D42200] px-8 py-3.5 text-[14px] font-bold text-white shadow-[0_4px_15px_rgba(230,62,26,0.3)] transition-transform hover:scale-105">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            Follow on Instagram
          </button>
        </div>

        {/* Form Section Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 text-[12px] font-bold uppercase tracking-[0.2em] text-[#E63E1A]">
            Newsletters
          </div>
          
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="hidden items-center text-[#E63E1A] opacity-50 sm:flex">
              <span className="text-lg tracking-[4px]">-----</span>
              <span className="ml-2 text-2xl font-light">|</span>
            </div>
            
            <h2 className=" text-[36px] font-extrabold text-[#120e2b] sm:text-[46px]">
              Get In Touch <span className="text-[#E63E1A]">Anytime, We're Free!</span>
            </h2>
            
            <div className="hidden items-center text-[#E63E1A] opacity-50 sm:flex">
              <span className="mr-2 text-2xl font-light">|</span>
              <span className="text-lg tracking-[4px]">-----</span>
            </div>
          </div>
          
          <p className="mx-auto max-w-[500px] text-[15px] leading-relaxed text-gray-500">
            Have questions or want to work together? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-[32px] border border-[#F4D3CA] bg-[#FFF9F5] p-6 shadow-sm sm:p-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            
            {/* Your Name */}
            <div className="flex items-center gap-4 rounded-[16px] border border-[#F0E6D6] bg-white p-3 shadow-sm transition-colors focus-within:border-[#E63E1A]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF5A3C] to-[#D42200] text-white shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="flex w-full flex-col">
                <label className="mb-0.5 text-[12px] font-bold text-[#120e2b]">
                  Your Name <span className="text-[#E63E1A]">*</span>
                </label>
                <input type="text" placeholder="Enter Your Name" className="w-full bg-transparent text-[13px] text-gray-600 outline-none placeholder:text-gray-300" />
              </div>
            </div>

            {/* Your Email */}
            <div className="flex items-center gap-4 rounded-[16px] border border-[#F0E6D6] bg-white p-3 shadow-sm transition-colors focus-within:border-[#E63E1A]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF5A3C] to-[#D42200] text-white shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="flex w-full flex-col">
                <label className="mb-0.5 text-[12px] font-bold text-[#120e2b]">
                  Your Email <span className="text-[#E63E1A]">*</span>
                </label>
                <input type="email" placeholder="Enter Your Email" className="w-full bg-transparent text-[13px] text-gray-600 outline-none placeholder:text-gray-300" />
              </div>
            </div>

            {/* Your Number */}
            <div className="flex items-center gap-4 rounded-[16px] border border-[#F0E6D6] bg-white p-3 shadow-sm transition-colors focus-within:border-[#E63E1A]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF5A3C] to-[#D42200] text-white shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.432-4.132-7.028-7.028l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="flex w-full flex-col">
                <label className="mb-0.5 text-[12px] font-bold text-[#120e2b]">
                  Your Number
                </label>
                <input type="tel" placeholder="Enter Your Number" className="w-full bg-transparent text-[13px] text-gray-600 outline-none placeholder:text-gray-300" />
              </div>
            </div>

            {/* Your Address */}
            <div className="flex items-center gap-4 rounded-[16px] border border-[#F0E6D6] bg-white p-3 shadow-sm transition-colors focus-within:border-[#E63E1A] md:col-span-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF5A3C] to-[#D42200] text-white shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div className="flex w-full flex-col">
                <label className="mb-0.5 text-[12px] font-bold text-[#120e2b]">
                  Your Address
                </label>
                <input type="text" placeholder="Enter Your Address" className="w-full bg-transparent text-[13px] text-gray-600 outline-none placeholder:text-gray-300" />
              </div>
            </div>

            {/* Choose Your Plan */}
            <div className="flex items-center gap-4 rounded-[16px] border border-[#F0E6D6] bg-white p-3 shadow-sm transition-colors focus-within:border-[#E63E1A] md:col-span-1">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF5A3C] to-[#D42200] text-white shadow-md">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div className="relative flex w-full flex-col">
                <label className="mb-0.5 text-[12px] font-bold text-[#120e2b]">
                  Choose Your Plan
                </label>
                <select className="w-full cursor-pointer appearance-none bg-transparent pr-6 text-[13px] text-gray-400 outline-none" defaultValue="">
                  <option value="" disabled>Choose Your Plan</option>
                  <option value="basic">Basic Plan</option>
                  <option value="premium">Premium Plan</option>
                </select>
                <svg viewBox="0 0 24 24" fill="none" stroke="#E63E1A" strokeWidth="2" className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>

          </div>

          <label className="mt-6 flex cursor-pointer items-start gap-3 sm:items-center">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300 text-[#E63E1A] focus:ring-[#E63E1A] sm:mt-0" />
            <span className="text-[13px] font-medium text-gray-500">
              I Agree That My Submitted Data Is Being Collected And Stored{' '}
              <a href="#" className="text-[#E63E1A] transition-colors hover:text-[#D42200] hover:underline">
                Privacy Policy
              </a>.
            </span>
          </label>

          <div className="mt-10 flex items-center justify-center gap-4 sm:gap-8">
            <div className="tracking-[4px] text-[#E63E1A] opacity-40">........</div>
            <button className="flex shrink-0 items-center gap-3 rounded-full bg-gradient-to-r from-[#FF5A3C] to-[#D42200] px-8 py-3.5 text-[14px] font-bold text-white shadow-[0_4px_15px_rgba(230,62,26,0.3)] transition-transform hover:scale-105">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              Send Message
            </button>
            <div className="tracking-[4px] text-[#E63E1A] opacity-40">........</div>
          </div>

        </div>
      </div>
    </section>
  );
}
