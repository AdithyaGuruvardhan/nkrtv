import DotBackdrop from '../components/decor/DotBackdrop';

export default function NarayaneeyamSignificanceBlogPage() {
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
        .blog-content ul {
          margin-bottom: 2rem;
          padding-left: 1rem;
          list-style-type: none;
        }
        .blog-content li {
          margin-bottom: 1rem;
          line-height: 1.8;
          color: #4b5563;
          font-size: 1.125rem;
          position: relative;
          padding-left: 1.5rem;
        }
        .blog-content li::before {
          content: "•";
          color: #E63E1A;
          font-weight: bold;
          font-size: 1.5em;
          position: absolute;
          left: 0;
          top: -0.25rem;
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
          .blog-content p, .blog-content li {
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
            Devotion
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            What Is Narayaneeyam? Its Significance and the Fruits of Parayana
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
            src="/images/blog_imgs/narayaneeyam_wts_tat.webp" 
            alt="Narayaneeyam" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          Most devotees know Narayaneeyam as a devotional text about Lord Krishna, but few know the remarkable story behind how it was actually composed — a story that's central to why this text is considered so powerful even today. Let's look at where Narayaneeyam comes from, how it's structured, and what devotees traditionally believe about the fruits (ಫಲ) of reciting it.
        </p>

        <div className="bg-blog-callout">
          <span className="callout-label">Broadcast Schedule</span>
          <p>
            Watch <strong>"Narayaneeyam"</strong> Every Morning at <strong>06:00 AM (Mon - Fri)</strong> on <strong>NKR TV ಕನ್ನಡ</strong>.
          </p>
        </div>

        <h2>The Origin Story — A Poem Born Out of Illness</h2>
        <p>
          Narayaneeyam was composed by <strong>Melpathur Narayana Bhattathiri</strong>, a Sanskrit scholar in 16th-century Kerala. According to tradition, Bhattathiri suffered from severe rheumatic illness, and on the advice of the saint Vilwamangalam Swamiyar, he began composing verses in praise of Lord Guruvayurappan (ಗುರುವಾಯೂರಪ್ಪ) — Krishna as worshipped at the Guruvayur temple.
        </p>
        <p>
          The legend holds that as he completed each <strong>Dashaka</strong> (a set of ten verses), his physical ailment reduced correspondingly. By the time he finished the final chapter, he is said to have been completely cured — a story devotees still cite as proof of the text's healing power (ಶಕ್ತಿ) even today.
        </p>

        <h2>The Structure — Bhagavatam Condensed Into 100 Chapters</h2>
        <p>
          Narayaneeyam is essentially a poetic summary of the <strong>Srimad Bhagavatam</strong>, one of Hinduism's most important devotional texts. Bhattathiri compressed its 18,000 verses into just over <strong>1,034 verses across 100 Dashakas</strong>, without losing the essence of Krishna's leelas — his birth, childhood pastimes in Vrindavan, the Govardhana episode, and his teachings.
        </p>
        <p>
          This is precisely why Narayaneeyam is loved by scholars and common devotees alike — it delivers the depth of the Bhagavatam in a much shorter, more accessible form.
        </p>

        <h2>Why Parayana (Recitation) Is Considered So Powerful</h2>
        <p>
          <strong>Parayana</strong> simply means the disciplined, devotional recitation of a sacred text. For Narayaneeyam specifically, tradition assigns several benefits (ಫಲಗಳು) to regular parayana:
        </p>
        <ul>
          <li><strong>Physical well-being</strong> — Rooted in Bhattathiri's own healing, many devotees recite Narayaneeyam specifically during illness or physical hardship, seeking relief through devotion.</li>
          <li><strong>Mental clarity and calm</strong> — The rhythmic chanting itself is said to have a calming effect on the mind, similar to other forms of meditative practice.</li>
          <li><strong>Deepening of Bhakti</strong> — Regularly engaging with Krishna's leelas through the text strengthens one's personal, emotional connection to the divine.</li>
          <li><strong>Protection and positivity</strong> — Many households recite specific Dashakas during difficult times, believing certain chapters offer protective and healing energy.</li>
          <li><strong>A structured spiritual discipline</strong> — Because it's divided into 100 short chapters, Narayaneeyam is easy to recite in daily portions, making it one of the more approachable parayana texts for beginners.</li>
        </ul>

        <h2>A Text That Still Resonates Today</h2>
        <p>
          What makes Narayaneeyam special isn't just its literary brilliance — it's the deeply human story behind it. A scholar in physical pain, turning to devotion, and finding both meaning and healing through his own words. That's part of why, even centuries later, families across Kerala and Karnataka continue this practice as part of their daily spiritual routine.
        </p>

        <h2>Final Thoughts</h2>
        <p>
          Whether you're already familiar with Narayaneeyam or hearing this story for the first time, its blend of devotion, poetry, and lived experience makes it one of the more moving texts in the Bhakti tradition. To understand these chapters and their meanings in more depth, tune in to <strong>Narayaneeyam</strong> every morning at 6:00 AM, Monday to Friday, only on NKR TV ಕನ್ನಡ.
        </p>

        {/* Call to Action Box */}
        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3 className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10">Start Your Spiritual Journey</h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Join us every morning at 06:00 AM (Mon - Fri) on NKR TV Kannada to bring the divine blessings and sacred teachings into your home. Let the wisdom of Narayaneeyam fill your day with peace and purpose!
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
