import DotBackdrop from '../components/decor/DotBackdrop';

export default function PurandaraDasaBlogPage() {
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
            Music & Culture
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            The Significance of Purandara Dasa's Keertanas
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
              7 min read
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 mb-16 relative z-10">
        <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-gray-900/5 group">
          <img 
            src="/images/blog_imgs/purandara.webp" 
            alt="Purandara Dasa" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          Long before Carnatic music had a formal teaching system, one man from Karnataka quietly built the framework that every student of South Indian classical music still learns from today. He is Purandara Dasa (ಪುರಂದರ ದಾಸರು) — revered as the <strong>Pitamaha (grandsire) of Carnatic music</strong> — and his keertanas remain some of the most influential devotional compositions ever created. In this edition of <strong>Naada Lahari</strong>, let's explore why his work still matters, centuries later.
        </p>

        <div className="bg-blog-callout">
          <span className="callout-label">Broadcast Schedule</span>
          <p>
            Watch <strong>"Naada Lahari"</strong> Every Morning at <strong>07:00 AM (Mon - Fri)</strong> on <strong>NKR TV ಕನ್ನಡ</strong>.
          </p>
        </div>

        <h2>From Wealthy Merchant to Wandering Saint</h2>
        <p>
          Born Srinivasa Nayaka around 1484 in the Shimoga region of Karnataka, he was a prosperous merchant of gold and jewels before a life-changing moment of spiritual awakening led him to give away his wealth entirely. He became a disciple of the saint Vyasatirtha, who gave him the name <strong>Purandara Dasa</strong>, and the ankitanama (pen name) "Purandara Vittala" that appears at the end of nearly every one of his compositions. This transformation — from Navakoti Narayana, a man of vast riches, to a wandering devotee singing with just a tambura in hand — is itself part of why his keertanas carry such raw devotional honesty (ಭಕ್ತಿಭಾವ).
        </p>

        <h2>The Architect of Carnatic Music Pedagogy</h2>
        <p>
          Purandara Dasa's greatest technical legacy isn't just his songs — it's the very system by which Carnatic music is taught. He structured the graded lessons still used by beginners today: <strong>Sarali Varisai, Jantai Varisai, Alankaras</strong>, and simple <strong>Gitas</strong>, all built around <strong>Raga Mayamalavagowla</strong>, which he established as the first scale every student learns. This systematic approach earned him his title of Pitamaha, because in many ways, he didn't just compose music — he designed how music itself would be taught for generations to come.
        </p>

        <h2>Keertanas as Social Commentary</h2>
        <p>
          What makes Purandara Dasa's keertanas so significant isn't only their musical structure — it's their content. Composing primarily in Kannada rather than Sanskrit, he made deep philosophical and devotional ideas accessible to ordinary people. Many of his songs go beyond simple praise of Krishna and directly critique social ills of his time — hypocrisy, caste discrimination, and superstition, while emphasizing sincere devotion (ಶುದ್ಧ ಭಕ್ತಿ) over outward ritual. This blend of Bhakti and social reform is a big part of why his compositions have stayed relevant across five centuries.
        </p>

        <h2>A Legacy in Every Corner of Carnatic Music</h2>
        <p>
          Purandara Dasa is believed to have composed a staggering number of keertanas over his lifetime — though only around a thousand survive today — spanning kritis, devarnamas, ugabhogas, and suladis. His influence didn't stop with his own generation either; he directly shaped later giants like Tyagaraja, who is known to have modeled some of his own compositions after Purandara Dasa's structure and style. Songs like <em>Jagadodharana</em>, <em>Bhagyada Lakshmi Baaramma</em>, and <em>Rama Mantrava Japiso</em> remain staples of Carnatic concerts even today, performed by classical vocalists across generations.
        </p>

        <h2>Why His Keertanas Still Resonate</h2>
        <p>
          At their heart, Purandara Dasa's keertanas do something rare — they combine serious musical scholarship with genuine emotional accessibility. A farmer and a trained musician could listen to the same song and find something meaningful in it. That balance of depth and simplicity (ಸರಳತೆ ಮತ್ತು ಗಹನತೆ) is exactly why, five hundred years on, his compositions are still sung in concert halls, temples, and homes across Karnataka and beyond.
        </p>

        <h2>Final Thoughts</h2>
        <p>
          Purandara Dasa didn't just leave behind songs — he left behind the very foundation of how devotional and classical music is learned, taught, and felt. To experience more such soulful compositions and understand the stories behind them, tune in to <strong>Naada Lahari</strong>, every morning at 7:00 AM, Monday to Friday, only on NKR TV ಕನ್ನಡ.
        </p>

        {/* Call to Action Box */}
        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3 className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10">Start Your Musical Journey</h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Join us every morning at 07:00 AM (Mon - Fri) on NKR TV Kannada to bring the divine blessings and sacred teachings into your home. Experience the soul of Carnatic music!
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
