import DotBackdrop from '../components/decor/DotBackdrop';

export default function BhagavadGitaSummaryBlogPage() {
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
            Spirituality
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            A Summary of All 18 Chapters of the Bhagavad Gita
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
              10 min read
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 mb-16 relative z-10">
        <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-gray-900/5 group">
          <img 
            src="/images/blog_imgs/bhagavad_gita_2.webp" 
            alt="Bhagavad Gita Summary" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          The Bhagavad Gita isn't just one long conversation — it's structured into 18 chapters, each carrying its own theme, yet all building toward one complete philosophy of life. In this <strong>Geetha Dharshana</strong> special on <strong>Dharma Jyothi</strong>, let's walk through all 18 chapters in simple terms, so you get the full picture of what Krishna actually taught Arjuna on the battlefield of Kurukshetra.
        </p>

        <div className="bg-blog-callout">
          <span className="callout-label">Broadcast Schedule</span>
          <p>
            Watch <strong>"Geetha Dharshana | ಧರ್ಮ ಜ್ಯೋತಿ"</strong> Every Morning at <strong>07:30 AM</strong> on <strong>NKR TV ಕನ್ನಡ</strong>.
          </p>
        </div>

        <h2>Chapter 1: Arjuna Vishada Yoga — The Yoga of Arjuna's Grief</h2>
        <p>
          The Gita opens not with wisdom, but with confusion. Arjuna, standing between two armies, is overwhelmed with grief (ವಿಷಾದ) at the thought of fighting his own relatives and teachers. He drops his bow, unable to act. This chapter sets up the very human problem the rest of the Gita will solve — what do you do when duty and emotion pull you in opposite directions?
        </p>

        <h2>Chapter 2: Sankhya Yoga — The Yoga of Knowledge</h2>
        <p>
          Krishna begins his teaching here, and this chapter is often called the Gita in miniature. He explains the eternal nature of the soul (ಆತ್ಮ), the difference between the body and the self, and introduces the core idea of Karma Yoga — acting without attachment to results.
        </p>

        <h2>Chapter 3: Karma Yoga — The Yoga of Action</h2>
        <p>
          Krishna makes the case that inaction is not the answer — everyone is compelled to act by nature. The key is <em>how</em> you act: selflessly, as duty, rather than out of personal desire or ego.
        </p>

        <h2>Chapter 4: Jnana Karma Sanyasa Yoga — The Yoga of Knowledge and Action</h2>
        <p>
          Krishna reveals his own divine nature and explains why he appears on earth in different ages. This chapter connects knowledge (ಜ್ಞಾನ) with action, showing that true wisdom doesn't mean giving up work — it means working with the right understanding.
        </p>

        <h2>Chapter 5: Karma Sanyasa Yoga — The Yoga of Renunciation of Action</h2>
        <p>
          Here Krishna compares renunciation (giving up action) with Karma Yoga (acting selflessly), and concludes that selfless action is actually the better, more practical path for most people.
        </p>

        <h2>Chapter 6: Dhyana Yoga — The Yoga of Meditation</h2>
        <p>
          This chapter is a practical guide to meditation (ಧ್ಯಾನ) — posture, discipline, controlling the mind, and steadying one's thoughts. Krishna describes the qualities of a truly balanced yogi.
        </p>

        <h2>Chapter 7: Jnana Vijnana Yoga — The Yoga of Knowledge and Wisdom</h2>
        <p>
          Krishna explains his nature as the source of the material and spiritual worlds, and why so few people truly understand him despite his presence in everything.
        </p>

        <h2>Chapter 8: Akshara Brahma Yoga — The Yoga of the Imperishable</h2>
        <p>
          This chapter deals with big questions — what happens at the moment of death, and how one's final thoughts shape what comes next. It introduces the eternal, imperishable reality (ಅಕ್ಷರ) beyond the physical.
        </p>

        <h2>Chapter 9: Raja Vidya Raja Guhya Yoga — The Yoga of Sovereign Knowledge</h2>
        <p>
          Krishna calls this the "king of all knowledge" — the most confidential and direct teaching. He explains how devotion (ಭಕ್ತಿ), even simple and heartfelt, is enough to reach the divine.
        </p>

        <h2>Chapter 10: Vibhuti Yoga — The Yoga of Divine Glories</h2>
        <p>
          Krishna describes his many manifestations across nature — the best of every category, from rivers to mountains to great beings — helping Arjuna see the divine presence in the world around him.
        </p>

        <h2>Chapter 11: Vishwarupa Darshana Yoga — The Yoga of the Universal Form</h2>
        <p>
          One of the most dramatic chapters — Krishna reveals his cosmic, universal form (ವಿಶ್ವರೂಪ) to Arjuna, showing time, creation, and destruction all at once. Arjuna is left awestruck and humbled.
        </p>

        <h2>Chapter 12: Bhakti Yoga — The Yoga of Devotion</h2>
        <p>
          A shorter, focused chapter on the path of devotion, describing the qualities of an ideal devotee — humility, compassion, and unwavering faith.
        </p>

        <h2>Chapter 13: Kshetra Kshetrajna Vibhaga Yoga — The Yoga of the Field and the Knower</h2>
        <p>
          Krishna distinguishes between the body (the "field") and the soul/consciousness (the "knower of the field"), laying out a more analytical, almost philosophical framework for self-understanding.
        </p>

        <h2>Chapter 14: Gunatraya Vibhaga Yoga — The Yoga of the Three Gunas</h2>
        <p>
          This chapter explains the three fundamental qualities of nature — Sattva (purity), Rajas (activity/passion), and Tamas (inertia/ignorance) — and how they shape human behavior and choices.
        </p>

        <h2>Chapter 15: Purushottama Yoga — The Yoga of the Supreme Being</h2>
        <p>
          Using the metaphor of an inverted tree representing the material world, Krishna explains the concept of the Supreme Being (ಪುರುಷೋತ್ತಮ) who is beyond both the perishable and imperishable.
        </p>

        <h2>Chapter 16: Daivasura Sampad Vibhaga Yoga — The Yoga of Divine and Demonic Natures</h2>
        <p>
          Krishna contrasts divine qualities (ದೈವಿಕ) like truthfulness and compassion with demonic tendencies like ego, greed, and anger — essentially a guide to recognizing what drives our own behavior.
        </p>

        <h2>Chapter 17: Shraddhatraya Vibhaga Yoga — The Yoga of the Threefold Faith</h2>
        <p>
          This chapter looks at how faith (ಶ್ರದ್ಧೆ) itself takes different forms depending on a person's nature, and how even food, worship, and charity reflect these underlying qualities.
        </p>

        <h2>Chapter 18: Moksha Sanyasa Yoga — The Yoga of Liberation Through Renunciation</h2>
        <p>
          The final and longest chapter ties everything together. Krishna summarizes the entire teaching, and gives Arjuna the freedom to decide for himself — before Arjuna, now clear-headed, chooses to act. This chapter closes with the path to ultimate liberation (ಮೋಕ್ಷ).
        </p>

        <h2>Final Thoughts</h2>
        <p>
          Eighteen chapters, one continuous journey — from confusion to clarity, from grief to purpose. Each chapter of the Gita adds a layer, but together they form a complete guide to living with wisdom and balance. For more such deep dives into the Gita's teachings, don't miss <strong>Geetha Dharshana</strong> on <strong>Dharma Jyothi</strong>, every morning at 07:30 on NKR TV ಕನ್ನಡ — start your day with a truly divine beginning, ಒಂದು ದೈವಿಕ ಪ್ರಾರಂಭ.
        </p>

        {/* Call to Action Box */}
        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3 className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10">Start Your Spiritual Journey</h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Join us every morning at 07:30 AM on NKR TV Kannada to bring the divine blessings and sacred teachings into your home. Let the wisdom of the Bhagavad Gita fill your day with peace and purpose!
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
