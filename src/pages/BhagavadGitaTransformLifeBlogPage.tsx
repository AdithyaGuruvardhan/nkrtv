import DotBackdrop from '../components/decor/DotBackdrop';

export default function BhagavadGitaTransformLifeBlogPage() {
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
            Spirituality
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            How the Bhagavad Gita Can Transform Your Life
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
            src="/images/blog_imgs/bhagavad_gita.webp" 
            alt="Bhagavad Gita" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          Life throws confusion, anxiety, and stress at us more often than we'd like. Is there a text that has answered these struggles for thousands of years? The answer, unchanged across centuries, is the <strong>Bhagavad Gita</strong> — Lord Krishna's teachings to Arjuna on the battlefield of Kurukshetra. In this special edition of <strong>Dharma Jyothi</strong>, let's break down exactly how the Gita's wisdom can reshape the way you think, work, and live.
        </p>

        <div className="bg-blog-callout">
          <span className="callout-label">Broadcast Schedule</span>
          <p>
            Watch <strong>"Dharma Jyothi"</strong> Every Morning at <strong>07:30 AM</strong> on <strong>NKR TV ಕನ್ನಡ</strong>.
          </p>
        </div>

        <h2>1. Karma Yoga — Doing Your Duty Without Obsessing Over Results</h2>
        <p>
          "ಕರ್ಮಣ್ಯೇವಾಧಿಕಾರಸ್ತೇ ಮಾ ಫಲೇಷು ಕದಾಚನ" is perhaps the most quoted verse of the Gita — you have a right to your actions, never to the fruits of those actions. In practice, this means putting in honest, focused effort at work or in your goals, without letting the outcome control your mental peace. In today's hyper-competitive world, this single shift — from obsessing over results to trusting the process — is often the difference between burnout and balance.
        </p>

        <h2>2. Mental Stability — Handling Highs and Lows With Equanimity</h2>
        <p>
          The Gita introduces the idea of <strong>Sthitapragnya</strong> (ಸ್ಥಿತಪ್ರಜ್ಞ) — a person who remains steady through both success and failure, joy and sorrow. Instead of over-reacting to every up and down, learning to stay centered means you can face life's real challenges with far more courage and clarity.
        </p>

        <h2>3. Self-Knowledge — Understanding Who You Really Are</h2>
        <p>
          One of the Gita's core teachings is that the body is temporary, but the soul (ಆತ್ಮ) is eternal. This awareness reduces the fear of death and failure alike. When you know your true nature isn't defined by external outcomes, the pressures of the outside world stop having as much power over you.
        </p>

        <h2>4. Duty and Dharma — Living True to Your Own Path</h2>
        <p>
          The Gita speaks of <strong>Swadharma</strong> — your own unique duty and purpose. Rather than copying someone else's life path or comparing your journey to others, real success comes from living according to your own capabilities and responsibilities. This is a message that resonates deeply with anyone navigating career choices or personal growth today.
        </p>

        <h2>5. Why the Gita Still Matters in Modern Life</h2>
        <p>
          Between work pressure, family responsibilities, and personal ambitions, staying mentally balanced is harder than ever. The Gita isn't just a religious text — it's a complete guide to managing life itself, and its 5,000-year-old wisdom continues to offer practical, everyday relevance.
        </p>

        <h2>Final Thoughts</h2>
        <p>
          Bring even a few of these Gita principles into your daily routine, and your entire outlook on life can shift. For more such meaningful spiritual conversations, tune in to <strong>Dharma Jyothi</strong>, every morning at 07:30 on NKR TV ಕನ್ನಡ, and start your day with a truly divine beginning — ಒಂದು ದೈವಿಕ ಪ್ರಾರಂಭ.
        </p>
        <p className="mt-4 font-bold text-[#E63E1A]">
          #DharmaJyothi #SpiritualMorning #Panchanga #NKRTVKannada #AnuAnuvinaluKannadathana
        </p>

        {/* Call to Action Box */}
        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3 className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10">Start Your Spiritual Journey</h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Join us every morning at 07:30 AM on NKR TV Kannada to bring the divine blessings and sacred teachings into your home. Let the wisdom of the Bhagavad Gita fill your day with peace and purpose!
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
