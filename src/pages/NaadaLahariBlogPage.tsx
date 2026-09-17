import DotBackdrop from '../components/decor/DotBackdrop';

export default function NaadaLahariBlogPage() {
  return (
    <div className="naada-lahari-blog-page relative flex flex-col w-full overflow-hidden bg-[#fffdf9]">
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

      <section className="relative w-full px-6 pt-[140px] pb-16 lg:pt-[160px] lg:pb-20">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-[13px] font-extrabold tracking-[0.25em] uppercase text-[#E63E1A] mb-4">
            Naada Lahari
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            ಭಕ್ತಿಗೀತೆಗಳು ಮನಸ್ಸಿನ ಮೇಲೆ ಬೀರುವ ಅದ್ಭುತ ಪ್ರಭಾವ – ಸಂಗೀತದ ಮೂಲಕ ಆಧ್ಯಾತ್ಮಿಕ ಅನುಭವ
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-semibold text-gray-500 mb-8">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#E63E1A]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              September 17, 2026
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

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 mb-16 relative z-10">
        <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-gray-900/5 group">
          <img 
            src="/images/blog_imgs/17-09-26.webp" 
            alt="ನಾದ ಲಹರಿ ಭಕ್ತಿಗೀತೆಗಳು ಮನಸ್ಸಿನ ಮೇಲೆ ಬೀರುವ ಪ್ರಭಾವ" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          There's a reason a single bhakti geethe playing softly in the background can change the entire mood of a home within seconds. Long before words are processed, sound reaches somewhere deeper — the nervous system, the breath, the pulse. Devotional music has always understood this instinctively, using melody as a direct route to the divine, often faster and more effortlessly than words alone could manage. This is the quiet subject of <strong>nada lahari</strong> — the wave of sound — and why bhakti sangeeta continues to occupy such a central place in spiritual practice.
        </p>

        <div className="bg-blog-callout">
          <span className="callout-label">Featured Program</span>
          <p>
            Experience devotional songs and spiritual music through <strong>Naada Lahari</strong> on <strong>NKR TV Kannada</strong>.
          </p>
        </div>

        <h2>Sound Before Meaning</h2>
        <p>
          In the Indian devotional tradition, <strong>nada</strong> — sound itself — is treated as sacred, not merely as a carrier of lyrics. Long before a listener consciously registers the meaning of a bhajan's words, the raga it's built on, the rhythm underlying it, and the tonal quality of the voice singing it have already begun their work on the mind. This is why a devotee who doesn't understand a word of Sanskrit can still be moved to tears by a well-rendered Vishnu Sahasranama chant, or why a lullaby-like abhang can quiet a restless child without either of them grasping the philosophy embedded in its verses. Nada bypasses the intellect and speaks directly to feeling, which is precisely why bhakti sangeeta has remained one of the most accessible spiritual paths across centuries — no scholarship required, only the willingness to listen.
        </p>

        <h2>The Specific Power of Raga in Devotion</h2>
        <p>
          Classical and semi-classical bhakti compositions are rarely set to melody arbitrarily. Traditional ragas each carry their own emotional and even physiological character — certain ragas are associated with the stillness of early morning meditation, others with the wistful longing of <strong>viraha bhakti</strong>, the pain of separation from the divine that runs through so much of Krishna bhakti poetry. A composition set in the right raga at the right time of day does more than sound pleasant; it aligns with the listener's own internal rhythm, amplifying whatever emotional and spiritual state the moment calls for. This is part of why the same bhajan sung at dawn during a temple's suprabhatam feels entirely different from a rendition heard casually in the afternoon — the raga knows the hour, even when the listener doesn't consciously notice it.
        </p>

        <h2>Kirtan, Bhajan, and the Communal Wave</h2>
        <p>
          Where individual listening creates a personal wave of nada, group singing — kirtan and bhajan sung collectively — builds something larger. There's a well-documented shift that happens in a room full of people singing the same namasankirtana together: individual self-consciousness fades, voices blend into a single collective sound, and the emotional charge of the group amplifies far beyond what any one voice could produce alone. This is precisely why bhakti movements across history, from the Alvars and Nayanars to the Bhakti saints like Purandara Dasa, Tyagaraja, and Meera, built so much of their theology around communal singing rather than solitary recitation. Bhakti sangeeta was never meant to stay private — its power multiplies in the act of sharing it.
        </p>

        <h2>Why Devotional Music Steadies a Restless Mind</h2>
        <p>
          Anyone who has struggled to meditate through sheer silence knows how quickly the mind wanders when given nothing to hold onto. Bhakti geethe solves this by giving the wandering mind something worthy to hold — a steady melodic thread carrying the name of the divine. Repetition, so central to devotional music, from the endless variations of a single Krishna nama to the cyclical structure of an aarti, works almost like a gentler cousin of japa. The mind, instead of resisting stillness, is gradually drawn toward it through the pull of the melody itself. This is likely why so many households instinctively reach for devotional music during moments of grief, anxiety, or uncertainty — not as background noise, but as a form of emotional anchoring that words spoken plainly rarely achieve as quickly.
        </p>

        <h2>A Bridge Between the Ordinary and the Sacred</h2>
        <p>
          Perhaps the most striking thing about bhakti sangeeta is how effortlessly it moves between the everyday and the transcendent. A grandmother humming a Purandara Dasa kriti while grinding chutney on a stone, a temple's evening aarti drifting out into a street full of traffic, a child falling asleep to a devotional lullaby without understanding a single word of its Sanskrit — none of these moments require formal preparation or spiritual readiness. The nada does the work of transporting the listener, briefly but genuinely, from the mundane task at hand into something touched by the sacred. Few other spiritual practices offer that kind of instant, undemanding access to the divine.
        </p>

        <h2>Listening as Its Own Sadhana</h2>
        <p>
          Traditional teachers of Indian classical and devotional music often describe listening itself as a form of <strong>sadhana</strong>, a discipline in its own right, distinct from but equal in value to singing or chanting. A devotee who sits quietly and truly listens — not distractedly, but with full attention — to a well-rendered bhajan is engaging in something close to meditation, guided by melody rather than silence. This reframes devotional music not as a pleasant accompaniment to spiritual life, but as one of its direct paths, as legitimate as japa, dhyana, or scriptural study.
        </p>

        <p>
          ನಾದ ಲಹರಿಯ ಮೂಲಕ ಹರಿಯುವ ಭಕ್ತಿಗೀತೆಗಳು ಕೇವಲ ಕಿವಿಗೆ ಇಂಪಾಗಿರುವುದಿಲ್ಲ, ಮನಸ್ಸನ್ನೂ ಆತ್ಮವನ್ನೂ ಪರಮಾತ್ಮನೆಡೆಗೆ ಒಯ್ಯುವ ಸೇತುವೆಯಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತವೆ.
        </p>

        <p>
          ಈ ಭಕ್ತಿಗೀತೆಗಳ ಅದ್ಭುತ ಪ್ರಪಂಚವನ್ನು ಇನ್ನಷ್ಟು ಆಳವಾಗಿ ಅನುಭವಿಸಲು, ನಮ್ಮ ನಾದ ಲಹರಿ ಸರಣಿಯನ್ನು ಇಂದೇ ವೀಕ್ಷಿಸಿ.
        </p>

        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3 className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10">Discover More on NKR TV</h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Watch devotional music, cultural stories, and spiritual programs that bring Karnataka's heritage closer to every home.
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
