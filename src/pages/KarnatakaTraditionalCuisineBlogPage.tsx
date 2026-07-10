import DotBackdrop from '../components/decor/DotBackdrop';

export default function KarnatakaTraditionalCuisineBlogPage() {
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
            Culinary Heritage
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            The Speciality of Karnataka's Traditional Cuisine
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
              6 min read
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 mb-16 relative z-10">
        <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-gray-900/5 group">
          <img 
            src="/images/blog_imgs/swaada_sambrama_blog.webp" 
            alt="Karnataka Traditional Cuisine" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          Karnataka's food story isn't just one cuisine — it's many. Travel from the coast to the plateau to the north, and the flavors, ingredients, and cooking styles change completely, shaped by geography, climate, and centuries of local tradition. In this special edition of <strong>Swaada Sambrama</strong>, let's explore what truly makes Karnataka's traditional cooking (ಸಾಂಪ್ರದಾಯಿಕ ಅಡುಗೆ) so distinctive.
        </p>

        <div className="bg-blog-callout">
          <span className="callout-label">Broadcast Schedule</span>
          <p>
            Watch <strong>"Swaada Sambrama"</strong> Everyday at <strong>1:00 PM</strong> on <strong>NKR TV ಕನ್ನಡ</strong>.
          </p>
        </div>

        <h2>A Cuisine Shaped by Geography</h2>
        <p>
          Karnataka's food naturally splits into a few distinct regional identities. The coastal belt around Mangalore and Udupi leans heavily on coconut, curry leaves, and seafood. The Mysore-Bengaluru region in the south is known for its subtly sweet, coconut-and-jaggery-forward cooking. And North Karnataka — around Belagavi, Dharwad, and Bagalkot — has an entirely different palette built around millets, groundnuts, and fiery spice blends. This regional variety (ಪ್ರಾದೇಶಿಕ ವೈವಿಧ್ಯತೆ) is exactly why "Karnataka food" isn't really one single thing.
        </p>

        <h2>The Everyday Classics</h2>
        <p>
          Some dishes cut across the entire state and have become synonymous with Karnataka itself:
        </p>
        <ul>
          <li><strong>Bisi Bele Bath</strong> — A one-pot rice and lentil dish from the Mysore region, packed with vegetables and a distinctive spice powder, often finished with a tempering of ghee and cashews.</li>
          <li><strong>Ragi Mudde</strong> — A staple of rural Karnataka, this steamed finger-millet ball is typically paired with saaru (a spiced lentil soup) and is prized for both its taste and its nutritional value.</li>
          <li><strong>Neer Dosa</strong> — A soft, delicate coastal dosa made from a thin rice batter, usually served with coconut chutney or a light vegetable curry.</li>
          <li><strong>Mysore Masala Dosa</strong> — The famous red chutney-lined dosa that has become one of Karnataka's most recognizable culinary exports.</li>
        </ul>

        <h2>North Karnataka's Bold Flavors</h2>
        <p>
          North Karnataka cuisine deserves its own spotlight for how different it is from the rest of the state. <strong>Jolada Rotti</strong> (jowar flatbread) is a daily staple, typically eaten with <strong>Yennegayi</strong> — a rich, peanut-and-sesame-based brinjal curry — and a fiery <strong>Shenga Chutney</strong> (groundnut chutney). This region's cooking tends to favor bolder, spicier profiles compared to the milder coastal or southern styles, reflecting the semi-arid climate and agricultural produce of the Deccan plateau.
        </p>

        <h2>Coastal Karnataka's Coconut Culture</h2>
        <p>
          Along the Udupi-Mangalore coast, coconut is central to nearly everything — ground into curries, pressed for oil, or used as a base for chutneys. Dishes like <strong>Mangalore-style fish curry</strong>, <strong>Kori Rotti</strong> (a Tulunadu specialty combining crisp rice wafers with chicken curry), and the ever-popular <strong>Udupi sambar</strong> all showcase how coastal Karnataka blends spice, tang, and coconut into something distinctly its own.
        </p>

        <h2>Sweets and the Role of Jaggery</h2>
        <p>
          Karnataka's sweets rely heavily on jaggery (ಬೆಲ್ಲ) rather than refined sugar, giving many traditional desserts a deeper, earthier sweetness. <strong>Mysore Pak</strong>, the ghee-rich chickpea flour sweet born in the Mysore palace kitchens, remains one of the state's most famous exports, alongside <strong>Holige/Obbattu</strong> (a sweet stuffed flatbread) made for festivals across the state.
        </p>

        <h2>Why This Cuisine Still Matters Today</h2>
        <p>
          What ties all of this together isn't just taste — it's technique and tradition passed down through generations. Fermentation for dosas and idlis, slow-cooked curries, and spice blends made fresh in each household are practices that modern convenience cooking often skips. Karnataka's traditional cuisine (ಸಾಂಪ್ರದಾಯಿಕ ಅಡುಗೆ) represents a deep respect for local ingredients and time-tested methods — something worth preserving even as food culture modernizes.
        </p>

        <h2>Final Thoughts</h2>
        <p>
          From the millet fields of the north to the coconut groves of the coast, Karnataka's culinary map is as diverse as its landscape. For more authentic recipes, regional specialties, and a fresh take on traditional flavors, don't miss <strong>Swaada Sambrama</strong>, airing every day at 1:00 PM, only on NKR TV ಕನ್ನಡ.
        </p>

        {/* Call to Action Box */}
        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3 className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10">Start Your Culinary Journey</h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Join us every day at 1:00 PM on NKR TV Kannada to discover more authentic recipes and regional specialties. Explore the flavors of Karnataka!
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
