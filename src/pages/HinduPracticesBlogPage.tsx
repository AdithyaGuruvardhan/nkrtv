import DotBackdrop from '../components/decor/DotBackdrop';

export default function HinduPracticesBlogPage() {
  return (
    <div className="hindu-practices-blog-page relative flex flex-col w-full overflow-hidden bg-[#fffdf9]">
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
            Culture & Science
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            ನಮ್ಮ ಹಿಂದೂ ಆಚರಣೆಗಳ ಹಿಂದೆ ಅಡಗಿರುವ ಶಾಸ್ತ್ರೋಕ್ತ ಮತ್ತು ವೈಜ್ಞಾನಿಕ ಸತ್ಯಗಳು
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-semibold text-gray-500 mb-8">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#E63E1A]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              August 20, 2026
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
            src="/images/blog_imgs/20-08-26.webp" 
            alt="ನಮ್ಮ ಹಿಂದೂ ಆಚರಣೆಗಳ ಹಿಂದೆ ಅಡಗಿರುವ ಶಾಸ್ತ್ರೋಕ್ತ ಮತ್ತು ವೈಜ್ಞಾನಿಕ ಸತ್ಯಗಳು" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          Ask most people why we ring the temple bell before entering the sanctum, or why elders insist on sitting cross-legged on the floor for a meal, and you'll usually get the same answer: "it's tradition, we've always done it this way." That answer isn't wrong, but it's incomplete. Behind nearly every everyday Hindu practice sits a double foundation — a shastric one, rooted in scripture and the wisdom of the rishis, and a scientific one, which modern study is only now beginning to catch up with. Neither explanation cancels the other out. Together, they show that these weren't arbitrary customs handed down for the sake of ritual alone — they were carefully designed systems for physical, mental, and spiritual well-being.
        </p>
        
        <h2>The Temple Bell and the Mind's First Reset</h2>
        <p>
          The moment a devotee rings the bell at a temple entrance is often dismissed as a simple announcement of arrival. Shastra frames it differently — the sound is said to disperse negative energies and draw the mind out of worldly distraction, preparing it to receive darshan with full attention. Science offers a complementary picture: the specific resonance produced by a well-cast temple bell activates both hemispheres of the brain briefly, clearing residual thought patterns for a few seconds — functionally similar to what a short meditation reset does. The old instruction to "ring it and let your mind go blank for a moment" turns out to be sound neuroscience dressed in devotional language.
        </p>

        <h2>Namaskara: More Than a Greeting</h2>
        <p>
          Joining both palms together in namaskara is treated in shastra as an act that unites the individual self with the divine self recognized in the other person — the well-known idea that the divine resides in all beings. But there's a physiological layer too. Pressing the fingertips of both hands together stimulates pressure points linked to the eyes, ears, and mind, according to principles found in acupressure. The gesture, held for even a few seconds, is a small act of nervous-system regulation as much as it is a spiritual greeting.
        </p>

        <h2>Fasting and the Wisdom of the Digestive Rest</h2>
        <p>
          Upavasa, observed on days like Ekadashi or during specific festivals, is described in shastra as a discipline that reduces tamasic tendencies and sharpens the mind for prayer and reflection. Modern understanding of the digestive system adds another layer: giving the gut periodic rest allows the body to redirect energy toward repair and detoxification, a principle echoed today in discussions around intermittent fasting. What scripture framed as spiritual discipline, contemporary science frames as metabolic recovery — two vocabularies converging on the same practice.
        </p>

        <h2>Why We Sit on the Floor to Eat</h2>
        <p>
          The traditional insistence on eating while seated cross-legged on the floor, rather than at a raised table, is often waved away as mere custom. Shastra ties it to humility and groundedness — eating in a posture that keeps a person literally and figuratively close to the earth. Physiologically, the posture itself does something measurable: sitting cross-legged activates certain leg and core muscles that aid digestion, and the repeated motion of leaning slightly forward and back while eating this way is known to stimulate gastric activity. What looks like a simple seating preference turns out to double as a mild digestive aid built into the meal itself.
        </p>

        <h2>The Sacredness of Tulsi</h2>
        <p>
          Tulsi occupies a central place in Hindu households, worshipped daily and rarely absent from a puja space. Shastra holds it as a form of the goddess herself, inseparable from Vishnu worship. Its scientific profile is just as remarkable — tulsi is documented to purify surrounding air, and its leaves carry antibacterial and antiviral properties well studied in Ayurveda and, increasingly, in modern pharmacology. A plant venerated for centuries as sacred turns out to have been, quite literally, protecting the health of the household it grew in.
        </p>

        <h2>Oil Lamps and the Quiet Physics of a Flame</h2>
        <p>
          Lighting a diya at dawn and dusk is one of the oldest continuous practices in Hindu households, marked in shastra as an offering of light that dispels ignorance along with darkness. The oil, wick, and flame combination used traditionally, particularly with ghee or sesame oil, is also known to release compounds that have a mild purifying effect on the immediate air, alongside the psychological calm a steady flame induces at the transitional hours of the day. The ritual timing — sandhya, the meeting point of day and night — isn't incidental either; it corresponds to periods when the body's own rhythms are shifting, making it a naturally receptive window for stillness and prayer.
        </p>

        <h2>Where This Leaves Us</h2>
        <p>
          None of this is to say that every custom needs a laboratory-grade justification to be worth practicing — faith and reverence stand on their own. But it is worth remembering that the rishis who structured these daily observances were not merely poetic; they were remarkably precise observers of the human body, mind, and environment. Shastra gave these practices their meaning. What we're now discovering, verse by verse and study by study, is how much of that meaning was built on truths the body already knew.
        </p>

        <p>
          ನಮ್ಮ ಹಿರಿಯರು ರೂಪಿಸಿದ ಪ್ರತಿಯೊಂದು ಆಚರಣೆಯ ಹಿಂದೆಯೂ ಆಳವಾದ ಶಾಸ್ತ್ರ ಜ್ಞಾನ ಮತ್ತು ಸೂಕ್ಷ್ಮ ವೈಜ್ಞಾನಿಕ ಒಳನೋಟ ಅಡಗಿದೆ. ಶ್ರದ್ಧೆಯಿಂದ ಅವುಗಳನ್ನು ಪಾಲಿಸುವುದೇ ನಿಜವಾದ ಜ್ಞಾನ ಮಾರ್ಗ.
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
