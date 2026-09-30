import DotBackdrop from '../components/decor/DotBackdrop';

export default function JyotishaShastraRashiBlogPage() {
  return (
    <div className="jyotisha-shastra-rashi-blog-page relative flex flex-col w-full overflow-hidden bg-[#fffdf9]">
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
            Spirituality
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            ಜ್ಯೋತಿಷ್ಯ ಶಾಸ್ತ್ರದಲ್ಲಿ ರಾಶಿಗಳ ಮಹತ್ವ: 12 ರಾಶಿಗಳ ಗುಣಲಕ್ಷಣಗಳ ಪರಿಚಯ
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-semibold text-gray-500 mb-8">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#E63E1A]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              September 30, 2026
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
            src="/images/blog_imgs/30-09-26.png" 
            alt="ಜ್ಯೋತಿಷ್ಯ ಶಾಸ್ತ್ರದಲ್ಲಿ ರಾಶಿಗಳ ಮಹತ್ವ: 12 ರಾಶಿಗಳ ಗುಣಲಕ್ಷಣಗಳ ಪರಿಚಯ" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          Long before birth charts became something people casually check on an app, jyotisha shastra treated the sky as a living map — one capable of describing not just when a person was born, but the very texture of who they are. At the center of this map sit the twelve rashis, the zodiac signs that divide the celestial belt into equal segments, each carrying its own element, ruling planet, and temperament. Understanding rashi isn't about reducing a person to a single label. It's about recognizing a starting tendency, a lens through which a person tends to meet the world, before life's own experiences add their layers on top.
        </p>
        
        <h2>What a Rashi Actually Represents</h2>
        <p>
          In Vedic astrology, the rashi is determined by the position of the moon at the time of birth — this is the janma rashi, distinct from the sun sign more familiar to Western astrology. Each rashi belongs to one of four elements — agni (fire), prithvi (earth), vayu (air), and jala (water) — and one of three qualities — chara (movable), sthira (fixed), or dwiswabhava (dual). This combination of element and quality is what gives each rashi its particular energy, shaping tendencies in temperament, decision-making, and even physical constitution, according to classical texts like the Brihat Parashara Hora Shastra.
        </p>

        <h2>Mesha (Aries) — The Initiator</h2>
        <p>
          Ruled by Mangal, Mesha opens the zodiac as a chara agni rashi, and it shows. Those with strong Mesha influence tend to move first and think through the details later, carrying a natural courage that makes them comfortable starting things others hesitate to begin. The challenge that often comes bundled with this fire is impatience — a tendency to lose interest once the initial thrill of starting has passed.
        </p>

        <h2>Vrishabha (Taurus) — The Steady Builder</h2>
        <p>
          Governed by Shukra, Vrishabha is a sthira prithvi rashi, and stability is its defining trait. People with strong Vrishabha influence build slowly but durably, valuing comfort, beauty, and material security. This groundedness can tip into stubbornness when change is forced upon them faster than they're willing to accept it.
        </p>

        <h2>Mithuna (Gemini) — The Communicator</h2>
        <p>
          Ruled by Budha, Mithuna is a chara vayu rashi known for its restless curiosity and gift for communication. Those under its influence tend to think in conversations, gathering and exchanging ideas with an ease that can make them the most socially adaptable of the twelve rashis. The flip side is a tendency toward scattered focus, jumping between interests before any one is fully explored.
        </p>

        <h2>Karkataka (Cancer) — The Nurturer</h2>
        <p>
          Chandra rules Karkataka, a sthira jala rashi built around emotional depth and protective instinct. People with strong Karkataka influence are natural caretakers, deeply attuned to the emotional undercurrents of the people around them, often before those people have named the feeling themselves. This sensitivity, left unchecked, can turn into moodiness or a tendency to retreat when overwhelmed.
        </p>

        <h2>Simha (Leo) — The Natural Leader</h2>
        <p>
          Ruled by Surya himself, Simha is a sthira agni rashi radiating warmth, confidence, and a natural pull toward leadership. Those under its influence tend to carry themselves with dignity and a genuine desire to be seen doing good, generous work. Unchecked, this can shade into a need for constant recognition or difficulty sharing the spotlight.
        </p>

        <h2>Kanya (Virgo) — The Perfectionist</h2>
        <p>
          Budha rules Kanya as well, but here as a chara prithvi rashi, giving it a meticulous, detail-oriented character quite different from Mithuna's scattered curiosity. People with strong Kanya influence tend to be analytical, service-minded, and deeply committed to doing things correctly. Taken too far, this precision curdles into over-criticism, of both themselves and others.
        </p>

        <h2>Tula (Libra) — The Harmonizer</h2>
        <p>
          Ruled by Shukra, Tula is a chara vayu rashi oriented entirely around balance and fairness. Those with strong Tula influence have a natural instinct for diplomacy, often serving as the peacemaker in any group they're part of. This desire for harmony can tip into indecisiveness, particularly when a choice risks upsetting someone.
        </p>

        <h2>Vrishchika (Scorpio) — The Transformer</h2>
        <p>
          Traditionally ruled by Mangal, Vrishchika is a sthira jala rashi known for its intensity and depth. People under its influence tend to feel things powerfully and pursue whatever they commit to with total focus, often drawn toward uncovering what lies hidden beneath the surface. This same intensity, when wounded, can turn into suspicion or a reluctance to forgive easily.
        </p>

        <h2>Dhanu (Sagittarius) — The Seeker</h2>
        <p>
          Guru rules Dhanu, a chara agni rashi driven by an appetite for meaning, philosophy, and exploration. Those with strong Dhanu influence tend to be optimistic and freedom-loving, often more interested in the big picture than the fine print. This same expansiveness can slip into restlessness, a difficulty settling into routine or commitment.
        </p>

        <h2>Makara (Capricorn) — The Disciplined Achiever</h2>
        <p>
          Ruled by Shani, Makara is a sthira prithvi rashi built around discipline, patience, and long-term ambition. People with strong Makara influence tend to play the long game, willing to work steadily toward goals that take years to materialize. Taken too far, this discipline can turn rigid, leaving little room for spontaneity or rest.
        </p>

        <h2>Kumbha (Aquarius) — The Visionary</h2>
        <p>
          Also ruled by Shani, Kumbha is a chara vayu rashi oriented toward innovation, independence, and community-minded thinking. Those under its influence tend to think ahead of their time, drawn to ideas and causes larger than themselves. This same independence can shade into emotional detachment or difficulty connecting on a purely personal level.
        </p>

        <h2>Meena (Pisces) — The Dreamer</h2>
        <p>
          Guru rules Meena as well, closing the zodiac as a sthira jala rashi steeped in intuition, compassion, and imagination. People with strong Meena influence tend to be deeply empathetic, often gifted in creative or spiritual pursuits, sensing what others feel without needing it explained. This porousness to the world's emotions can leave them prone to escapism or difficulty holding firm boundaries.
        </p>

        <h2>Why This Knowledge Matters</h2>
        <p>
          Jyotisha shastra never intended rashi characteristics to be used as a rigid box a person is sealed into. Classical texts are clear that the janma rashi is a starting point, one factor among the many planetary placements, houses, and dashas that together form a complete kundli. What rashi offers is a vocabulary — a way of naming tendencies so they can be understood, worked with, and where necessary, tempered. Knowing that a person's Simha rashi inclines them toward pride isn't a life sentence; it's a starting instruction on where to bring a little more humility. Understood this way, the study of rashi becomes less about prediction and more about self-awareness, a tool the rishis of old offered not to limit us, but to help us recognize ourselves a little more clearly.
        </p>

        <p>
          ರಾಶಿಗಳ ಈ ಜ್ಞಾನ ನಮ್ಮ ಸ್ವಭಾವವನ್ನು ಅರಿಯಲು ಒಂದು ದಾರಿಯಾಗಿರಲಿ, ಅದನ್ನು ಮೀರಿ ಬೆಳೆಯಲು ಸ್ಫೂರ್ತಿಯಾಗಿರಲಿ.
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
