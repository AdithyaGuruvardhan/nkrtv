import DotBackdrop from '../components/decor/DotBackdrop';

export default function AnantaDarshanBlogPage() {
  return (
    <div className="ananta-darshan-blog-page relative flex flex-col w-full overflow-hidden bg-[#fffdf9]">
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
            Spiritual
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            ಅನಂತ ದರ್ಶನ: ದೇವರ ದರ್ಶನ ಮಾತ್ರವಲ್ಲ, ಕ್ಷೇತ್ರದರ್ಶನ ಏಕೆ ಮುಖ್ಯ? – ಕ್ಷೇತ್ರ ಮಹಿಮೆಯ ಆಧ್ಯಾತ್ಮಿಕ ರಹಸ್ಯ
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-semibold text-gray-500 mb-8">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#E63E1A]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              August 17, 2026
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
            src="/images/blog_imgs/17-08-26.png" 
            alt="ಅನಂತ ದರ್ಶನ" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          Most people walk into a temple with one goal in mind: to stand before the deity, fold their hands, and receive darshan. That moment matters, of course — it is the emotional peak of any pilgrimage. But ask any seasoned pilgrim, any sadhu who has spent years moving between sacred sites, and they'll tell you something that surprises first-time visitors: darshan of the murti is only the doorway. The real experience, the one that lingers long after the visit ends, is kshetra darshan — the act of experiencing the entire sacred site, not just its sanctum.
        </p>

        <p>
          This distinction sits at the heart of what Hindu tradition calls kshetra mahatmya, the glory and sanctity of a place itself, independent of the specific hour you happen to be standing in front of the idol.
        </p>

        <h2>Why the Deity Alone Isn't the Whole Story</h2>
        <p>
          Every major temple in the Indian subcontinent is embedded in a larger geography of sanctity. The garbhagriha, the innermost sanctum where the deity resides, is the concentrated center — but the sacredness radiates outward, into the prakara, the temple tank, the surrounding hillocks, rivers, groves, and even the town that grew up around the shrine. Traditional sthala purana, the local legends tied to a specific kshetra, almost always describe events that unfolded not just at the deity's feet but across the wider landscape — a rishi's tapas performed under a particular tree, a river that sprang up in response to a devotee's prayer, a hill that itself is considered a form of the divine. Skipping this larger context and rushing straight to the sanctum is a bit like reading only the last page of a story. You get the resolution, but you miss everything that gives it meaning.
        </p>

        <h2>Sacred Geography as Living Memory</h2>
        <p>
          Kshetra darshan asks the pilgrim to slow down and treat the entire site as a text to be read, not just a destination to be reached. Walking the outer prakara, sitting by the temple tank, observing the direction the shrine faces, noticing the flora considered sacred to that specific site — these aren't decorative details. They are, in the tradition's own understanding, layers of the same darshan. Many kshetras carry centuries, sometimes millennia, of accumulated devotion: saints who walked those exact paths, kings who built those very steps, ordinary devotees whose prayers are said to have soaked into the stone itself. To walk the kshetra is to walk through that living memory, and tradition holds that this immersion opens a subtler, more expansive connection to the divine than a hurried glance at the deity ever could.
        </p>

        <h2>The Idea Behind "Ananta Darshan"</h2>
        <p>
          The phrase ananta darshan — infinite or boundless darshan — captures this expanded understanding well. A single darshan of the murti is, by definition, momentary. You stand, you see, you move on for the next pilgrim in line. But kshetra darshan doesn't end when you leave the sanctum. It continues in the walk around the temple, in the story a local elder tells you about why the tank never runs dry, in the quiet hour spent under a centuries-old tree said to have witnessed a saint's final meditation. This is darshan that isn't bound to a single moment or a single form — it spreads across time, geography, and memory, which is exactly what gives it the name "infinite."
        </p>

        <h2>Why This Matters for Today's Pilgrim</h2>
        <p>
          In an age of quick temple visits — often squeezed between other errands, sometimes reduced to a few minutes in a queue — this older, fuller understanding of pilgrimage has quietly faded for many. Kshetra mahatmya asks for the opposite of a rushed visit. It asks the devotee to arrive early, stay longer, walk the grounds, sit by the water, listen to the stories the place has to tell. Devotees who make this shift consistently describe a different quality of experience — not just a fleeting glimpse of the divine form, but a sense of having been held, even briefly, inside something ancient and larger than themselves.
        </p>
        
        <h2>A Practice, Not Just a Belief</h2>
        <p>
          Kshetra darshan isn't asking anyone to abandon deity darshan — the two are not in competition. Rather, tradition presents them as complementary halves of the same pilgrimage. The sanctum gives the pilgrim a focused, personal moment with the divine form. The kshetra, in turn, gives that moment its context, its depth, its history. Together, they form what the old texts call a complete tirtha yatra — not a quick errand to be checked off, but a full immersion into a place that has been sacred, in the tradition's understanding, long before the current temple structure was ever built, and will remain so long after.
        </p>

        <p>
          ಕ್ಷೇತ್ರ ದರ್ಶನವೆಂದರೆ ಕೇವಲ ದೇವರ ಮುಂದೆ ನಿಂತು ಕೈ ಮುಗಿಯುವುದಷ್ಟೇ ಅಲ್ಲ, ಆ ಕ್ಷೇತ್ರದ ಪ್ರತಿಯೊಂದು ಕಣದಲ್ಲೂ ಅಡಗಿರುವ ಪುಣ್ಯ, ಇತಿಹಾಸ ಮತ್ತು ಭಕ್ತಿಯ ಶಕ್ತಿಯನ್ನು ಅನುಭವಿಸುವುದು. ಅದೇ ನಿಜವಾದ ಅನಂತ ದರ್ಶನ.
        </p>

        {/* Call to Action Box */}
        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3 className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10">Discover More on NKR TV</h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Watch divine programs, learn about Karnataka's rich cultural heritage, and get enlightened through our regular broadcasts.
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
