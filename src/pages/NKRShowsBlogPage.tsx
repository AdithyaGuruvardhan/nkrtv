import DotBackdrop from '../components/decor/DotBackdrop';

export default function NKRShowsBlogPage() {
  return (
    <div className="bg-blog-page relative flex flex-col w-full overflow-hidden bg-[#fffdf9]">
      <style>{`
        .blog-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: #4b5563;
          font-size: 1.125rem;
        }
        .blog-content h2 {
          font-size: 2rem;
          font-weight: 800;
          color: #120e2b;
          margin-top: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }
        .blog-content strong {
          color: #120e2b;
          font-weight: 700;
        }
        .bg-blog-callout {
          background: linear-gradient(135deg, #fff5f3 0%, #fff9f5 100%);
          border: 1px solid #fcd5c8;
          border-left: 4px solid #E63E1A;
          border-radius: 12px;
          padding: 1.5rem 1.75rem;
          margin: 2rem 0;
        }
        .bg-blog-callout .callout-label {
          display: block;
          color: #E63E1A;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }
        .bg-blog-callout p {
          margin-bottom: 0;
          color: #374151;
        }
        
        @media (max-width: 639px) {
          .blog-content h2 {
            font-size: 1.5rem;
            margin-top: 2.5rem;
          }
          .blog-content p {
            font-size: 1rem;
          }
        }
      `}</style>
      
      <DotBackdrop className="-top-20 -right-24 h-[360px] w-[360px] opacity-25" />
      <DotBackdrop className="top-[30%] -left-24 h-[300px] w-[300px] opacity-15" />

      {/* Hero Header */}
      <section className="relative w-full px-6 pt-[140px] pb-16 lg:pt-[160px] lg:pb-20">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-[13px] font-extrabold tracking-[0.25em] uppercase text-[#E63E1A] mb-4">
            NKR TV ಕನ್ನಡ
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            4 Popular Programs You Must Watch on NKR TV
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-semibold text-gray-500 mb-8">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#E63E1A]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              July 10, 2026
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#E63E1A]">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              5 min read
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 mb-16 relative z-10">
        <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-gray-900/5 group">
          <img 
            src="/images/blog_imgs/nkr_shows.webp" 
            alt="NKR Shows" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          With so many shows airing through the day, it's easy to miss out on the ones that truly stand out. Here's a quick roundup of 4 popular programs (ಜನಪ್ರಿಯ ಕಾರ್ಯಕ್ರಮಗಳು) on <strong>NKR TV ಕನ್ನಡ</strong> that viewers keep coming back to — spanning spirituality, music, food, and fun.
        </p>

        <h2>1. Dharma Jyothi — Start Your Day With Devotion</h2>
        <p>
          If you like beginning your mornings with something meaningful, <strong>Dharma Jyothi</strong> is where to start. From the day's Panchanga and Rashi Bhavishya to deep dives into scriptures like the Bhagavad Gita and Pitru Paksha traditions, this show blends daily spiritual essentials with thoughtful discussions on dharma and devotion.
        </p>
        <div className="bg-blog-callout">
          <p>📺 <strong>Mon-Sat, 07:30 AM</strong></p>
        </div>

        <h2>2. Naada Lahari — Wake Up to Melody</h2>
        <p>
          For those who prefer their mornings set to music, <strong>Naada Lahari</strong> brings soothing bhajans, keertanas, and timeless devotional compositions — including deep dives into legendary composers like Purandara Dasa — creating a calm, melodic start to the day.
        </p>
        <div className="bg-blog-callout">
          <p>📺 <strong>Mon-Fri, 7:00 AM</strong></p>
        </div>

        <h2>3. Swaada Sambrama — A Kitchen Full of Flavor</h2>
        <p>
          Food lovers won't want to miss <strong>Swaada Sambrama</strong>, which celebrates the diversity of Karnataka's traditional cuisine — from coastal classics to North Karnataka's bold flavors — alongside healthy cooking tips and a mix of traditional and modern recipes.
        </p>
        <div className="bg-blog-callout">
          <p>📺 <strong>Everyday, 1:00 PM</strong></p>
        </div>

        <h2>4. Super Kannadiga — Test Your Knowledge, Win Big</h2>
        <p>
          If you enjoy a bit of competitive fun in the evening, <strong>Super Kannadiga</strong> is NKR TV's flagship quiz show, challenging viewers with general knowledge questions across history, culture, science, and sports — with real cash prizes up for grabs.
        </p>
        <div className="bg-blog-callout">
          <p>📺 <strong>Mon-Fri, 7:00 PM</strong></p>
        </div>

        <h2>Why These Shows Stand Out</h2>
        <p>
          What ties these four programs together is variety with purpose — whether it's grounding your morning in devotion, filling your afternoon with culinary inspiration, or ending your day with a bit of friendly competition, there's something on NKR TV ಕನ್ನಡ for every part of your day.
        </p>

        <h2>Final Thoughts</h2>
        <p>
          These are just four of the many programs that make NKR TV ಕನ್ನಡ a daily habit for so many households. Tune in through the day, and you might just find your own new favorite — only on NKR TV ಕನ್ನಡ.
        </p>

        {/* Call to Action Box */}
        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3 className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10">Tune In Today</h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Discover these popular shows and more daily on NKR TV Kannada.
          </p>
          <div className="flex gap-4 relative z-10">
            <a href="/" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF5A3C] to-[#D42200] px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(230,62,26,0.25)] transition-transform hover:-translate-y-1">
              Go to Home
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
