import DotBackdrop from '../components/decor/DotBackdrop';

export default function FestivalBeliefsTraditionsBlogPage() {
  return (
    <div className="festival-beliefs-traditions-blog-page relative flex flex-col w-full overflow-hidden bg-[#fffdf9]">
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
            ಧರ್ಮ ಜ್ಯೋತಿ
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            ಹಬ್ಬಗಳ ಹಿಂದಿರುವ ಧಾರ್ಮಿಕ ನಂಬಿಕೆಗಳು ಮತ್ತು ಸಂಪ್ರದಾಯಗಳ ಮಹತ್ವ
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-semibold text-gray-500 mb-8">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#E63E1A]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              October 17, 2026
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
            src="/images/blog_imgs/17-10-26.webp"
            alt="ಹಬ್ಬಗಳ ಹಿಂದಿರುವ ಧಾರ್ಮಿಕ ನಂಬಿಕೆಗಳು ಮತ್ತು ಸಂಪ್ರದಾಯಗಳ ಮಹತ್ವ"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          Every festival begins with a question that most of us stop asking by the time we are adults: why do we do this? Why light lamps for nine nights, why worship our tools on a single day, why exchange the leaves of a tree? We follow the steps because our parents did, and their parents before them. That inheritance is precious, but it becomes far richer when we know what it carries. Dasara, with its nine nights of Navaratri and the victory of Vijayadashami, is one of the best festivals through which to see how belief, ritual, and tradition work together, and why they have kept communities rooted for centuries.
        </p>

        <h2>A Festival Is a Story You Live Inside</h2>
        <p>
          Scripture tells the story of Goddess Durga defeating Mahishasura in the Devi Mahatmya, and tradition tells the story of Rama's victory over Ravana. But Dasara does something a book cannot: it asks the whole household to step into the story. The lamp lit before the Goddess, the verses recited at dawn, the special naivedya prepared for each day all turn a distant legend into something present and personal. This is what the old traditions understood well. A belief held only in the mind fades quickly, but a belief practiced with the hands, the voice, and the senses becomes part of how a person lives.
        </p>

        <h2>What the Belief Actually Says</h2>
        <p>
          Behind the colorful rituals sits a simple conviction: adharma may rise, even powerfully, but it does not last, and dharma, supported by courage and divine grace, prevails. Mahishasura was not merely a demon in a distant age. In the tradition's reading, he is also the pride, anger, and laziness that settle inside each of us. When Navaratri unfolds across three phases, the first devoted to Durga, the second to Lakshmi, and the third to Saraswati, the sequence quietly maps an inner journey: first clearing what holds us back, then building what sustains us, then arriving at wisdom. The festival is not asking us to admire a victory from a distance. It is asking us to attempt one.
        </p>

        <h2>Tradition as Gratitude: Ayudha Puja</h2>
        <p>
          Few customs show the depth behind a ritual as clearly as Ayudha Puja. On Mahanavami, tools, books, vehicles, and instruments of livelihood are cleaned, decorated, and worshipped. To an outsider it may look like a ceremony for objects. To the person performing it, it is an act of thanks toward the things that quietly sustain daily life. The farmer honors the plough, the student the book, the driver the vehicle. The belief here is that work itself is sacred, and that gratitude, practiced regularly and visibly, keeps a person humble about what supports them.
        </p>

        <h2>Tradition as Continuity: Banni and Bombe Habba</h2>
        <p>
          The banni tree, according to tradition, sheltered the weapons of the Pandavas during their year of exile, and they retrieved them on Vijayadashami before returning to claim their destiny. Exchanging banni leaves as a symbol of goodwill carries the idea forward: every new beginning deserves blessing from the people around us. In the same spirit, the Bombe Habba, with its tiers of dolls depicting gods, saints, and everyday scenes, turns the home into a place where stories are handed to the next generation. Children who grow up arranging those dolls do not need to be lectured about heritage. They absorb it, one figure at a time.
        </p>

        <h2>Tradition as Community: Mysuru Dasara</h2>
        <p>
          Dasara also shows how belief grows into collective life. The festival's grand public form in Mysuru, traced to Vijayanagara's Mahanavami celebrations and carried forward by the Wodeyars, brings an entire city together for the royal durbar, the cultural programs, and the Jamboo Savari procession bearing Goddess Chamundeshwari. People of different backgrounds line the same streets and share the same moment. A shared festival gives a community a shared memory, and shared memory is one of the strongest threads holding any society together.
        </p>

        <h2>Why Understanding Matters More Than Ever</h2>
        <p>
          There is a quiet risk in any long-standing tradition: it can become habit without meaning. When the reason for a ritual is forgotten, the ritual starts to feel like a burden, something to be shortened or skipped. When the reason is remembered, the same ritual feels like an invitation. This is the real importance of understanding the beliefs behind our festivals. It does not make them less devotional. It makes them more alive, because the person observing them knows what they are reaching for.
        </p>

        <h2>A Light Worth Carrying Forward</h2>
        <p>
          Dasara reminds us that festivals are not just dates on a calendar. They are the way a culture teaches its values without lecturing, through lamps, stories, food, songs, and gatherings. Every generation receives that teaching, and every generation chooses whether to pass it on with understanding. The more we know about why we celebrate, the more fully we can celebrate, and the better we can hand this inheritance to the people who come after us.
        </p>

        <p>
          ಹಬ್ಬಗಳ ಹಿಂದಿನ ನಂಬಿಕೆಗಳನ್ನು ಅರಿತು ಆಚರಿಸಿದಾಗ ಸಂಪ್ರದಾಯ ಕೇವಲ ಆಚರಣೆಯಾಗದೆ, ಬದುಕಿಗೆ ದಾರಿ ತೋರುವ ಜ್ಯೋತಿಯಾಗುತ್ತದೆ.
        </p>

        <p>
          ಹಬ್ಬಗಳ ಹಿಂದಿರುವ ಇಂತಹ ಇನ್ನಷ್ಟು ಧಾರ್ಮಿಕ ಒಳನೋಟಗಳಿಗಾಗಿ, ನಮ್ಮ <strong>ಧರ್ಮ ಜ್ಯೋತಿ</strong> ಕಾರ್ಯಕ್ರಮವನ್ನು ಇಂದೇ ವೀಕ್ಷಿಸಿ.
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
