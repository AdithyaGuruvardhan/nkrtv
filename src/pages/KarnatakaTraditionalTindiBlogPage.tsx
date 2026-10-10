import DotBackdrop from '../components/decor/DotBackdrop';

export default function KarnatakaTraditionalTindiBlogPage() {
  return (
    <div className="karnataka-traditional-tindi-blog-page relative flex flex-col w-full overflow-hidden bg-[#fffdf9]">
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
            Culinary Heritage
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            ಕರ್ನಾಟಕದ ಸಾಂಪ್ರದಾಯಿಕ ತಿಂಡಿಗಳು: ಮರೆಯಾಗುತ್ತಿರುವ ಹಳೆಯ ಕಾಲದ ರುಚಿಗಳು
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-semibold text-gray-500 mb-8">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#E63E1A]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              October 10, 2026
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
            src="/images/blog_imgs/10-10-26.webp" 
            alt="ಕರ್ನಾಟಕದ ಸಾಂಪ್ರದಾಯಿಕ ತಿಂಡಿಗಳು: ಮರೆಯಾಗುತ್ತಿರುವ ಹಳೆಯ ಕಾಲದ ರುಚಿಗಳು" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          Ask anyone in Karnataka to name a traditional breakfast and the answer arrives almost on reflex: idli, dosa, vada. These are wonderful, but they are also the survivors, the dishes restaurants standardized and menus kept alive. Behind them sits a much larger, quieter world of tindi that once filled every household kitchen, a world of leaf-wrapped steamed delicacies, hand-rolled crisp snacks, and slow-cooked sweets that took a whole morning and several pairs of hands. Many of these are now rarely made, and some are known only to people over sixty. This is a look at the old flavors of Karnataka that are slowly slipping off the table, and why they deserve to be remembered.
        </p>

        <h2>Kotte Kadubu and the Wisdom of the Jackfruit Leaf</h2>
        <p>
          In coastal Karnataka, especially around Udupi and Dakshina Kannada, idli batter was once steamed inside woven cones of fresh jackfruit leaf, known as kotte kadubu. The leaf did more than hold the shape. As it steamed, it released a mild, earthy fragrance into the batter, a flavor no steel idli plate has ever managed to reproduce. Making it demanded patience: someone had to pluck and stitch the leaves, someone had to fill each cone without spilling. Today, in a household with a pressure cooker and a packet of ready batter, that effort feels hard to justify. But anyone who has eaten a kotte kadubu still warm from the steamer, with a spoon of ghee and coconut chutney, usually remembers it for years.
        </p>

        <h2>Patrode, the Monsoon Specialty</h2>
        <p>
          When the rains arrive, the colocasia leaves, known locally as kesuvina yele, grow wide and glossy in coastal backyards. Grandmothers would spread a spiced rice and lentil paste across the leaves, roll them tightly, steam them, and slice them into rounds that were then shallow-fried until crisp at the edges. This is patrode, a dish so tied to the season that it traditionally appeared only for a few weeks of the year. It is one of those preparations where the seasonal ingredient, the technique, and the memory of eating it with a hot cup of tea on a rainy afternoon are inseparable. Without a kesuvina yele growing nearby, the dish quietly disappears.
        </p>

        <h2>The Crisp Snacks That Took a Whole Family</h2>
        <p>
          Chakkuli, kodubale, nippattu, and the finely threaded karadantu were once the pride of every festival kitchen, particularly around Deepavali and Ugadi. Each had its own method and its own small secrets: the ratio of rice flour to urad flour, the exact temperature of the oil, the knack of pressing a chakkuli spiral without breaking it. Large batches were made together, usually with aunts, cousins, and neighbors gathered around the stove, and stored in steel tins that were opened with ceremony. Today the boxes in shops look similar, but the taste is often flatter, since commercial versions rely on shortcuts the home recipes never needed. The loss is not only of flavor, but of the afternoon spent making them together.
        </p>

        <h2>Holige, Hugge, and the Slow Sweets</h2>
        <p>
          Karnataka's festive sweets are a world of their own. Holige, the thin, soft flatbread stuffed with sweet chana dal or coconut-jaggery filling, requires a dough rolled so delicately that experienced hands are said to be able to read it by touch. Hugge, the jaggery-sweetened pongal of rice and moong dal, appears at Sankranti and is eaten with ghee pooled on top. Then there are the older, rarer ones, like the sweet, spiced kajjaya fritters and the fragrant payasa made from fresh coconut milk. These sweets were never meant to be quick. They were stirred, rested, rolled, and watched, and the time they took was part of what made them feel like an offering rather than just a recipe.
        </p>

        <h2>Millet, Ragi, and Rotti, Once the Everyday Meal</h2>
        <p>
          Long before wheat and polished rice became household staples, much of Karnataka ate millet. In the north, jolada rotti, flatbreads patted by hand from sorghum flour, were served with spicy ennegayi, stuffed baby brinjal curry, and a side of raw onion and curd. In the south, ragi mudde, the soft, steamed finger millet balls, were swallowed rather than chewed, paired with soppina saaru or bassaru. Today, as millets return to fashion through health discussions, it's worth remembering that for generations of Kannadigas, they were simply what lunch looked like, filling, nutritious, and made with whatever grew nearby.
        </p>

        <h2>Why These Flavors Are Fading</h2>
        <p>
          There is no single villain. Smaller families, working parents, and the convenience of packaged foods all play a part. So do changing kitchens, where wood fires and stone grinders have been replaced by gas stoves and mixers. Perhaps the most telling reason is that these dishes lived in memory, not in books, and when the person who knew the recipe is no longer cooking, the knowledge often goes with them. Many families discover this only after it is too late, wishing they had asked their ajji how she made it.
        </p>

        <h2>Keeping the Old Tastes Alive</h2>
        <p>
          The good news is that these dishes are not out of reach. Many of them need nothing more than a morning, a willing elder, and patience. Cooking one traditional tindi on a weekend, writing down the quantities as they are spoken aloud, and teaching a younger person to roll or steam or shape it is enough to keep a recipe alive for another generation. A tradition survives not because it is preserved in a museum, but because someone chose to cook it again.
        </p>

        <p>
          ನಮ್ಮ ಅಜ್ಜಿಯ ಕೈರುಚಿ ಕೇವಲ ಆಹಾರವಲ್ಲ, ಅದು ನಮ್ಮ ಸಂಸ್ಕೃತಿಯ ನೆನಪು. ಈ ಹಳೆಯ ರುಚಿಗಳನ್ನು ಮತ್ತೆ ನಮ್ಮ ಅಡುಗೆಮನೆಗೆ ಕರೆತರೋಣ.
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
