import DotBackdrop from '../components/decor/DotBackdrop';

export default function RockSaltJaggeryBlogPage() {
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
        .blog-content ul {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .blog-content li {
          margin-bottom: 0.75rem;
          line-height: 1.8;
          color: #4b5563;
          font-size: 1.125rem;
          list-style-type: disc;
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
            Swaada Sambrama
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            The Health Benefits of Rock Salt, Jaggery, and Traditional Ingredients
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
            src="/images/blog_imgs/spices.webp" 
            alt="Traditional Spices" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          Long before packaged, refined ingredients took over modern kitchens, Indian households relied on a handful of simple, unprocessed staples — rock salt, jaggery, and a few time-tested spices. In this edition of <strong>Swaada Sambrama</strong>, let's look at why these traditional ingredients (ಸಾಂಪ್ರದಾಯಿಕ ಪದಾರ್ಥಗಳು) have stayed a part of our kitchens for generations, and what Ayurveda and everyday practice say about their benefits.
        </p>

        <div className="bg-blog-callout">
          <span className="callout-label">Broadcast Schedule</span>
          <p>
            Watch <strong>"Swaada Sambrama"</strong> Everyday at <strong>1:00 PM</strong> on <strong>NKR TV ಕನ್ನಡ</strong>.
          </p>
        </div>

        <h2>Kallu Uppu (Rock Salt) — A Purer Form of Salt</h2>
        <p>
          Rock salt, known as Kallu Uppu in Kannada and Sendha Namak in Hindi, is mined rather than processed, which means it retains its natural mineral composition instead of going through the refining that regular table salt undergoes.
        </p>
        <ul>
          <li><strong>Rich in trace minerals</strong> — Along with sodium chloride, rock salt naturally contains minerals like calcium, magnesium, and potassium, though in relatively small quantities.</li>
          <li><strong>A traditional fasting salt</strong> — It's the preferred salt during religious fasting periods, believed in Ayurveda to be cooling in nature compared to regular salt.</li>
          <li><strong>Supports digestion</strong> — Traditional practice holds that a pinch of rock salt before meals can stimulate saliva and digestive juices, aiding the breakdown of food.</li>
          <li><strong>Gentler on sodium intake</strong> — Because of its coarser crystal structure, rock salt is sometimes used by those trying to moderate their sodium consumption, though it should still be used mindfully.</li>
        </ul>
        <p>
          It's worth noting that rock salt doesn't contain iodine, so it isn't meant to fully replace iodized table salt — most households use a mix of both.
        </p>

        <h2>Bella (Jaggery) — Nature's Unrefined Sweetener</h2>
        <p>
          Made by slowly boiling down sugarcane juice, jaggery (ಬೆಲ್ಲ) retains the molasses and minerals that refined sugar loses in processing.
        </p>
        <ul>
          <li><strong>A natural source of iron</strong> — Jaggery is traditionally valued for supporting healthy hemoglobin levels, which is why it's often recommended for women and growing children.</li>
          <li><strong>Traditionally used for digestion</strong> — A small piece of jaggery after meals is a long-standing household practice believed to aid digestion.</li>
          <li><strong>Contains antioxidants</strong> — Its dark color comes partly from phenolic compounds that offer some antioxidant activity, unlike bleached white sugar.</li>
          <li><strong>Comfort during cold weather</strong> — In many Karnataka households, jaggery-based drinks and sweets are prepared during the monsoon and winter months as a warming, nourishing option.</li>
        </ul>
        <p>
          One important note: jaggery is still a concentrated form of sugar, with a calorie count and glycemic impact similar to refined sugar. It's a better-rounded choice nutritionally, but it isn't a "free pass" — people managing diabetes or watching their sugar intake should still consume it in moderation and check with a doctor.
        </p>

        <h2>Other Everyday Traditional Ingredients</h2>
        <ul>
          <li><strong>Curry Leaves (Karibevu)</strong> — Used in nearly every South Indian tempering, valued for their aroma and traditional digestive properties.</li>
          <li><strong>Tamarind (Hunase Hannu)</strong> — Adds tang to sambar and rasam while also being a traditional aid for digestion in small quantities.</li>
          <li><strong>Turmeric (Arishina)</strong> — A staple in almost every Karnataka dish, long valued in Ayurveda for its anti-inflammatory properties.</li>
          <li><strong>Coconut (Tenginakayi)</strong> — Central to coastal Karnataka cooking, providing healthy fats and a distinct richness to curries and chutneys.</li>
        </ul>

        <h2>Why These Ingredients Still Matter</h2>
        <p>
          What makes rock salt, jaggery, and these traditional staples special isn't just nostalgia — it's that they represent minimally processed, whole-food alternatives to their refined modern counterparts. That doesn't mean they're miracle cures, but choosing them mindfully, in place of heavily processed alternatives, is a small, sensible step toward more traditional, balanced eating.
        </p>

        <h2>Final Thoughts</h2>
        <p>
          Our grandmothers' kitchens were built around a few honest, simple ingredients — and there's real wisdom in that simplicity. For more traditional recipes and practical kitchen wisdom, don't miss <strong>Swaada Sambrama</strong>, airing every day at 1:00 PM, only on NKR TV ಕನ್ನಡ.
        </p>
        
        <p className="text-sm italic text-gray-500 mt-8">
          *Note: This content is for general informational purposes and reflects traditional and Ayurvedic beliefs. For specific dietary concerns, especially around sodium or sugar intake, please consult a doctor or nutritionist.*
        </p>

        {/* Call to Action Box */}
        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3 className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10">Start Your Culinary Journey</h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Join us every day at 1:00 PM on NKR TV Kannada to discover more authentic recipes and traditional culinary wisdom.
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
