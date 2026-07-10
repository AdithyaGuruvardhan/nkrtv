import DotBackdrop from '../components/decor/DotBackdrop';

export default function TempleRulesBlogPage() {
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
            Anantha Darshana
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            10 Rules to Follow When Visiting a Temple
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
            src="/images/blog_imgs/temple_ritual.webp" 
            alt="Temple Rules" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          A temple visit isn't just about walking in, offering a quick prayer, and leaving — traditional practice (ಸಂಪ್ರದಾಯ) treats it as a complete experience of devotion, discipline, and respect. In this edition of <strong>Anantha Darshana</strong>, let's go through 10 simple rules (ನಿಯಮಗಳು) that help make your next temple visit more meaningful.
        </p>

        <div className="bg-blog-callout">
          <span className="callout-label">Broadcast Schedule</span>
          <p>
            Watch <strong>"Anantha Darshana"</strong> Every Morning at <strong>6:30 AM</strong> on <strong>NKR TV ಕನ್ನಡ</strong>.
          </p>
        </div>

        <h2>1. Bathe and Wear Clean Clothes Before Leaving Home</h2>
        <p>
          Traditionally, devotees are expected to bathe and wear freshly washed clothes before visiting a temple, as a way of approaching the deity in a state of physical and mental cleanliness (ಶುಚಿತ್ವ).
        </p>

        <h2>2. Dress Modestly and Appropriately</h2>
        <p>
          Most temples expect modest, traditional attire — this varies by region and temple, but as a general rule, clothing that's respectful and not overly casual is the safer choice, especially at older or more conservative shrines.
        </p>

        <h2>3. Remove Your Footwear Before Entering</h2>
        <p>
          This is one of the most universally followed rules across Indian temples — footwear is always left outside, symbolizing that you're stepping onto sacred ground.
        </p>

        <h2>4. Wash Your Hands and Feet at the Entrance</h2>
        <p>
          Many temples provide a water source near the entrance specifically for this — a small act of purification (ಶುದ್ಧಿ) before stepping further inside.
        </p>

        <h2>5. Silence Your Phone and Maintain Decorum</h2>
        <p>
          Loud conversations, phone calls, and photography (where restricted) disturb the atmosphere of devotion. Keeping your phone on silent and speaking softly is basic temple etiquette almost everywhere.
        </p>

        <h2>6. Ring the Temple Bell Upon Entering</h2>
        <p>
          The bell (ಗಂಟೆ) is traditionally rung once as you enter the sanctum area — believed to signal your arrival to the deity and help focus the mind before darshana.
        </p>

        <h2>7. Perform Pradakshina (Circumambulation)</h2>
        <p>
          Walking around the sanctum in a clockwise direction, known as Pradakshina (ಪ್ರದಕ್ಷಿಣೆ), is a common practice at most temples, typically done an odd number of times (1, 3, or more depending on the deity and tradition).
        </p>

        <h2>8. Never Turn Your Back to the Deity</h2>
        <p>
          Once you've had darshana, tradition holds that you should step backward for a few steps before turning around, rather than immediately turning your back to the deity — a small gesture of respect.
        </p>

        <h2>9. Offer and Receive With the Right Hand</h2>
        <p>
          Offerings to the deity are traditionally made with the right hand, and prasada (ಪ್ರಸಾದ) is received with both hands cupped together, as a mark of humility and gratitude.
        </p>

        <h2>10. Carry a Calm, Devotional Mindset</h2>
        <p>
          Perhaps the most important rule isn't physical at all — approaching the temple with a calm mind, free from gossip, negativity, or distraction, is what tradition considers the real foundation of a meaningful visit.
        </p>

        <h2>Why These Rules Still Matter</h2>
        <p>
          These aren't just rituals for the sake of ritual — each one is designed to help the devotee slow down, be present, and approach the divine with genuine humility and focus, rather than rushing through a checklist.
        </p>

        <h2>Final Thoughts</h2>
        <p>
          The next time you visit a temple, try keeping these 10 simple guidelines in mind — you might find the entire experience feels more grounded and meaningful. For more insights into temple traditions, history, and spiritual practices, watch <strong>Anantha Darshana</strong>, every morning at 6:30 AM, Monday to Friday, only on NKR TV ಕನ್ನಡ.
        </p>

        {/* Call to Action Box */}
        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3 className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10">Discover Temple Traditions</h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Join Anantha Darshana every morning at 6:30 AM on NKR TV Kannada to learn more about our spiritual heritage.
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
