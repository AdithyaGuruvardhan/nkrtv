import DotBackdrop from '../components/decor/DotBackdrop';

export default function AjjiKitchenBlogPage() {
  return (
    <div className="ajji-kitchen-blog-page relative flex flex-col w-full overflow-hidden bg-[#fffdf9]">
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
            Culture & Heritage
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            ಅಜ್ಜಿಯ ಅಡುಗೆಯಿಂದ ಆಧುನಿಕ ಅಡುಗೆಮನೆವರೆಗೆ – ರುಚಿ, ಆರೋಗ್ಯ ಮತ್ತು ಸಂಪ್ರದಾಯದ ಪಯಣ
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-semibold text-gray-500 mb-8">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#E63E1A]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              September 09, 2026
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
            src="/images/blog_imgs/09-09-26.webp" 
            alt="ಅಜ್ಜಿಯ ಅಡುಗೆಯಿಂದ ಆಧುನಿಕ ಅಡುಗೆಮನೆವರೆಗೆ – ರುಚಿ, ಆರೋಗ್ಯ ಮತ್ತು ಸಂಪ್ರದಾಯದ ಪಯಣ" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          There's a particular smell that instantly transports people back to childhood — mustard seeds crackling in hot oil, curry leaves hitting a heated kadai, the faint smokiness of something cooked slowly over a wood fire. For most of us, that smell belongs to one place: ajji's kitchen. It wasn't just where food was made. It was where recipes lived entirely in memory, where a fistful of this and a pinch of that added up to flavors no cookbook has ever quite managed to reproduce. Decades later, standing in our own modern kitchens with induction stoves and non-stick pans, it's worth asking what exactly changed along the way — and what, in the rush toward convenience, quietly got left behind.
        </p>
        
        <h2>The Kitchen as a Slow, Deliberate Space</h2>
        <p>
          Ajji's kitchen ran on a different sense of time. Rice was soaked overnight before grinding. Dosa and idli batter fermented naturally, with no shortcuts taken to speed up the process. Spices were roasted and ground fresh, batch by batch, rather than pulled off a shelf in a sealed packet. This slowness wasn't inefficiency — it was, in many ways, the entire method. Fermentation broke down anti-nutrients and made grains easier to digest. Freshly ground spices carried volatile oils that dulled within days of grinding, which is exactly why the same recipe made with pre-ground masala never quite tastes the same. What looked like an old-fashioned, time-consuming process was, in effect, a quiet science of flavor and digestion refined over generations.
        </p>

        <h2>Stone, Clay, and Wood — The Original Cookware</h2>
        <p>
          Long before the non-stick pan, there was the ammikallu, the stone grinder that gave chutneys and batters their distinct coarse texture and cooling touch. There was the manne, the earthen pot, whose porous walls let food breathe as it cooked, imparting a mineral-rich flavor that stainless steel simply cannot replicate. Cooking over a wood-fired choola added its own layer — a gentle smokiness, uneven but forgiving heat, and a rhythm of cooking that forced the cook to stay present, stirring and watching rather than setting a timer and walking away. These weren't just tools; they were techniques that shaped the final dish as much as the ingredients did.
        </p>

        <h2>What the Modern Kitchen Got Right</h2>
        <p>
          None of this is a case against progress. The modern kitchen solved real problems. Pressure cookers cut hours of cooking time down to minutes, giving working parents and busy households a fighting chance at a home-cooked meal on a weekday. Refrigeration ended the daily scramble to use up perishables before they spoiled. Standardized measurements and written recipes meant that techniques once passed down only through watching an elder cook could now travel — shared between friends, printed in books, saved on a phone. For many young cooks today, the modern kitchen isn't a departure from tradition so much as a way of making that tradition accessible again, especially for those who never had an ajji nearby to learn from directly.
        </p>

        <h2>Where Something Got Lost in the Translation</h2>
        <p>
          But convenience came with trade-offs that are easy to overlook. Store-bought spice blends, however well made, rarely match the depth of spices roasted fresh that same morning. The natural fermentation that once took eight to twelve hours patiently on a kitchen counter is now sometimes rushed with shortcuts that skip the very process responsible for both flavor and digestibility. And perhaps more than any single technique, what's often missing is the unmeasured intuition ajji brought to her cooking — the instinct for exactly how long to let something simmer, exactly when a dish "smelled right." That kind of knowledge rarely survives translation into a recipe card with precise measurements, because it was never meant to be measured in the first place.
        </p>

        <h2>Bringing the Two Kitchens Together</h2>
        <p>
          The most interesting cooking happening today isn't a rejection of the modern kitchen in favor of nostalgia, nor a total abandonment of tradition for speed. It's a quiet blending of both. Households are returning to stone-ground chutneys made in a mixer that still has that ammikallu grinding disc attachment. Home fermentation is making a comeback, helped along by an understanding, backed now by food science, of why it matters for gut health. Clay pot cooking is being rediscovered, not out of obligation to the past, but because people are tasting the difference and wanting it back. This is, in many ways, the healthiest version of the journey — not choosing between ajji's kitchen and the modern one, but letting each one correct the blind spots of the other.
        </p>

        <h2>A Taste That Carries Memory</h2>
        <p>
          Food, more than almost anything else, carries memory in its flavor. A dish made exactly the way ajji made it can undo years in a single bite — not because the recipe was perfect on paper, but because it was made with patience, presence, and love that no shortcut can fully replicate. The modern kitchen has given us speed, convenience, and access. What ajji's kitchen still has to teach us is slowness, intuition, and the quiet discipline of doing things properly, even when it takes longer. The real pyanana, the real journey, isn't about choosing one kitchen over the other — it's about carrying the wisdom of one into the practice of the other.
        </p>

        <p>
          ಅಜ್ಜಿಯ ಅಡುಗೆಮನೆಯ ಪ್ರೀತಿ ಮತ್ತು ಆಧುನಿಕ ಅಡುಗೆಮನೆಯ ಅನುಕೂಲತೆ ಎರಡನ್ನೂ ಜೊತೆಗೂಡಿಸಿದಾಗ ಮಾತ್ರ ರುಚಿ, ಆರೋಗ್ಯ ಮತ್ತು ಸಂಪ್ರದಾಯ ಮೂರೂ ನಮ್ಮ ಮನೆಯಲ್ಲಿ ಜೀವಂತವಾಗಿ ಉಳಿಯುತ್ತವೆ.
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
