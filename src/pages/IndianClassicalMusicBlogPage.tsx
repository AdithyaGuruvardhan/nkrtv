import DotBackdrop from '../components/decor/DotBackdrop';

export default function IndianClassicalMusicBlogPage() {
  return (
    <div className="indian-classical-music-blog-page relative flex flex-col w-full overflow-hidden bg-[#fffdf9]">
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
            Music & Heritage
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            ಭಾರತೀಯ ಶಾಸ್ತ್ರೀಯ ಸಂಗೀತದ ಮಹತ್ವ: ರಾಗಗಳು ಮತ್ತು ಸಂಗೀತದ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆ
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-semibold text-gray-500 mb-8">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#E63E1A]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              October 28, 2026
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#E63E1A]">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              6 min read
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 mb-16 relative z-10">
        <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-gray-900/5 group">
          <img
            src="/images/blog_imgs/28-10-26.webp"
            alt="ಭಾರತೀಯ ಶಾಸ್ತ್ರೀಯ ಸಂಗೀತದ ಮಹತ್ವ: ರಾಗಗಳು ಮತ್ತು ಸಂಗೀತದ ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆ"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          Sit through a single alapana in a concert hall and something curious happens. There is no lyric to follow, no storyline to track, no rhythm to tap along to. A single voice or instrument simply begins to unfold a few notes, slowly, patiently, like someone opening a flower one petal at a time. And yet, within minutes, the room goes still. This is the quiet power of Indian classical music, a tradition that has been refined for well over two thousand years and still holds an audience without any spectacle at all. To understand why it has lasted, we have to look at its roots, its central idea of raga, and the culture of teaching that has carried it from one generation to the next.
        </p>

        <h2>Music Rooted in the Sacred</h2>
        <p>
          The story of Indian classical music begins with sound treated as something sacred. The Sama Veda, set to melody for chanting, is regarded as an early source of the musical tradition, and the way its verses were sung with specific pitches shaped later ideas about melody. Over the centuries, texts like Bharata's Natya Shastra and Sharngadeva's Sangita Ratnakara organized thinking about notes, scales, rhythm, and emotion. Music was never meant to be mere entertainment. It was understood as a discipline, a means of both artistic expression and spiritual practice, where the act of singing a note with full awareness could itself become a form of devotion.
        </p>

        <h2>What a Raga Really Is</h2>
        <p>
          The heart of this tradition is the raga. A raga is often described as a scale, but that explanation is too thin. It is a melodic framework with its own ascending and descending patterns, its own characteristic phrases, its own emphasis on certain notes, and most importantly, its own emotional color. Two ragas can use almost the same notes and yet feel completely different, because the way the notes are approached, held, and bent makes all the difference. The word itself comes from a root meaning to color or to please, which captures the idea well: a raga colors the mind of the listener with a specific mood, whether peaceful, longing, joyful, or devotional.
        </p>
        <p>
          This is why a raga is never simply performed once and finished. The same raga can be explored for hours, with the musician finding new corners of it each time, guided by tradition but shaped by the moment. Within the discipline of fixed rules lies an enormous freedom to improvise.
        </p>

        <h2>Two Streams, One River</h2>
        <p>
          Over time, Indian classical music grew into two major traditions. Hindustani music, centered in the north, developed in the courts and gharanas, with its emphasis on long, slowly unfolding exploration of a raga, and many of its ragas are associated with particular times of day or seasons. Carnatic music, centered in the south, places greater emphasis on composition, with structured kritis alongside improvisation, and is organized through a systematic framework of melakarta ragas. Though they differ in style and technique, the two traditions share the same foundations: the idea of raga, the cycle of tala, the reverence for the guru, and the belief that music can elevate the mind.
        </p>

        <h2>Karnataka's Own Contribution</h2>
        <p>
          Karnataka holds a special place in this story. Purandara Dasa, revered as the Pitamaha of Carnatic music, devised the graded exercises that students still begin with today, the sarali varase, janta varase, and alankaras, laying a structured path that countless learners have followed. He also composed devotional songs in simple Kannada, taking spiritual and moral teaching to ordinary people through melody. Later, the court of Mysuru became an important center of patronage, supporting musicians, vainikas, and composers for generations. Many households across the state still hold the memory of a grandmother humming a Dasara pada or a child learning the first lessons on a harmonium or veena, which says a great deal about how deeply this music has been woven into everyday life.
        </p>

        <h2>The Guru-Shishya Parampara</h2>
        <p>
          Behind every great musician stands a teacher, and this relationship has been the backbone of Indian classical music for centuries. In the traditional model, a student learns directly from a guru, often over many years, absorbing not just technique but the subtle ways of phrasing, listening, and humility. Much of this knowledge was passed orally, from voice to voice, because the nuances of a raga cannot be fully captured on paper. This is why the tradition has always valued patience. A student may spend months on a few notes, learning to sing them with perfect steadiness before moving forward.
        </p>

        <h2>Why It Still Matters</h2>
        <p>
          In a time when music arrives in three-minute pieces and is swiped away just as quickly, Indian classical music offers something increasingly rare: sustained attention. Listening to a raga asks the audience to slow down, to follow a line of melody wherever it leads, and to let the mind settle. Many listeners find it calming, and many musicians describe their practice as a form of meditation. It also carries a living sense of heritage, since every performance connects a present voice to a long chain of teachers and composers behind it.
        </p>
        <p>
          Preserving this tradition does not require everyone to become a performer. It begins with listening. Attending a concert, learning a few basic notes, or simply playing a recording of a morning raga while the day begins are small acts that keep the tradition alive in ordinary life.
        </p>

        <p>
          ರಾಗದ ಪ್ರತಿ ಸ್ವರದಲ್ಲೂ ನಮ್ಮ ಸಂಸ್ಕೃತಿಯ ಶತಮಾನಗಳ ಸಾಧನೆ ಅಡಗಿದೆ. ಆ ಪರಂಪರೆಯನ್ನು ಕೇಳಿ, ಕಲಿತು, ಮುಂದಿನ ಪೀಳಿಗೆಗೆ ಕೊಂಡೊಯ್ಯುವುದು ನಮ್ಮ ಜವಾಬ್ದಾರಿ.
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
