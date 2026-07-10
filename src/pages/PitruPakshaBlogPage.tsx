import DotBackdrop from '../components/decor/DotBackdrop';

export default function PitruPakshaBlogPage() {
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
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #120e2b;
          margin-top: 2rem;
          margin-bottom: 1rem;
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
            Dharma Jyothi
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            The Significance of Pitru Paksha and Its Scripturally Prescribed Rituals
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
            src="/images/blog_imgs/pitru_paksha.webp" 
            alt="Pitru Paksha Rituals" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          Once a year, Hindu tradition sets aside a special fortnight not for celebration, but for remembrance — a time to honor those who came before us. This is <strong>Pitru Paksha</strong> (ಪಿತೃಪಕ್ಷ), and in this edition of <strong>Dharma Jyothi</strong>, let's understand why this period holds such deep significance, and what the scriptures actually prescribe for observing it correctly.
        </p>

        <div className="bg-blog-callout">
          <span className="callout-label">Broadcast Schedule</span>
          <p>
            Watch <strong>"Dharma Jyothi"</strong> Every Morning at <strong>07:30 AM</strong> on <strong>NKR TV ಕನ್ನಡ</strong>.
          </p>
        </div>

        <h2>What Is Pitru Paksha?</h2>
        <p>
          Pitru Paksha is a 15-16 day period in the Hindu lunar calendar, falling during the dark fortnight (ಕೃಷ್ಣ ಪಕ್ಷ) of the month of Bhadrapada — usually in September or October. It begins on the day after the full moon (Purnima) and concludes on the new moon day, known as <strong>Sarva Pitru Amavasya</strong> or <strong>Mahalaya Amavasya</strong> — considered the most important day of the entire fortnight.
        </p>

        <h2>The Scriptural Basis</h2>
        <p>
          Texts like the <strong>Garuda Purana</strong> and <strong>Markandeya Purana</strong> describe in detail how Shraddha rituals should be performed and why they matter. According to these scriptures, ancestors who have passed on reside in <strong>Pitru Loka</strong>, a realm between heaven and earth, and remain dependent on their living descendants for nourishment and peace. The Markandeya Purana states that when ancestors are satisfied through Shraddha, they bless the performer with health, wealth, knowledge, and longevity.
        </p>

        <h2>Why This Period Matters — The Concept of Rina (Debt)</h2>
        <p>
          Hindu philosophy holds that every person is born with three debts (ಋಣ) — to the gods (Deva Rina), to sages and teachers (Rishi Rina), and to one's ancestors (Pitru Rina). Pitru Paksha is the time set aside specifically to honor and repay this ancestral debt. It's not viewed as a mournful obligation, but as a continuation of family bonds — a way of acknowledging that our current lives are built on the sacrifices of those who came before us.
        </p>

        <h2>The Key Rituals — Shastrokta Aacharane (ಶಾಸ್ತ್ರೋಕ್ತ ಆಚರಣೆಗಳು)</h2>
        
        <h3>1. Shraddha</h3>
        <p>
          The central ceremony of Pitru Paksha, Shraddha (ಶ್ರಾದ್ಧ) involves offering food, water, and prayers to one's departed ancestors, typically performed by the eldest son or a male family member, though in many households today, this responsibility is shared more broadly. It is traditionally performed at midday, often near a river, lake, or sacred water body.
        </p>

        <h3>2. Tarpana</h3>
        <p>
          Tarpana (ತರ್ಪಣ) is the ritual offering of water, mixed with black sesame seeds, to the ancestors — believed to quench their thirst and bring them comfort and peace.
        </p>

        <h3>3. Pinda Daana</h3>
        <p>
          This involves offering small rice balls (ಪಿಂಡ), often mixed with milk, honey, and sesame, symbolically feeding the ancestors and helping their souls attain peace and progress toward liberation.
        </p>

        <h3>4. Feeding Brahmins, Guests, and Animals</h3>
        <p>
          Scriptures emphasize that food should also be offered to Brahmins, guests, cows, and even crows — believed to be messengers who carry these offerings to the ancestors.
        </p>

        <h2>Sarva Pitru Amavasya — The Most Important Day</h2>
        <p>
          While specific ancestors are traditionally remembered on the tithi (lunar day) corresponding to their passing, <strong>Sarva Pitru Amavasya</strong> is set aside for all ancestors collectively — making it the ideal day for those who are unsure of the exact tithi, or who wish to pay homage to the entire ancestral lineage in one observance.
        </p>

        <h2>A Time of Reflection, Not Just Ritual</h2>
        <p>
          Beyond the ceremonial aspects, Pitru Paksha also carries an important cultural message — gratitude. It's a reminder to reflect on the values, sacrifices, and efforts of previous generations, and to consciously carry forward the best of what they've given us.
        </p>

        <h2>Final Thoughts</h2>
        <p>
          Pitru Paksha is one of Hindu tradition's most meaningful observances — not because of ritual alone, but because of what it represents: memory, gratitude, and the unbroken thread connecting generations. To understand more such scriptural traditions and their deeper meaning, tune in to <strong>Dharma Jyothi</strong>, every morning at 07:30 AM, Monday to Saturday, only on NKR TV ಕನ್ನಡ.
        </p>

        {/* Call to Action Box */}
        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3 className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10">Discover More Scriptural Wisdom</h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Join Dharma Jyothi every morning at 07:30 AM on NKR TV Kannada to learn more about Hindu traditions and their deeper meanings.
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
