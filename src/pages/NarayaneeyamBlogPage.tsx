import DotBackdrop from '../components/decor/DotBackdrop';

export default function NarayaneeyamBlogPage() {
  return (
    <div className="narayaneeyam-blog-page relative flex flex-col w-full overflow-hidden bg-[#fffdf9]">
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
        .blog-content ul {
          margin-bottom: 2rem;
          padding-left: 1rem;
          list-style-type: none;
        }
        .blog-content li {
          margin-bottom: 1rem;
          line-height: 1.8;
          color: #4b5563;
          font-size: 1.125rem;
          position: relative;
          padding-left: 1.5rem;
        }
        .blog-content li::before {
          content: "•";
          color: #E63E1A;
          font-weight: bold;
          font-size: 1.5em;
          position: absolute;
          left: 0;
          top: -0.25rem;
        }
        .blog-content strong {
          color: #120e2b;
          font-weight: 700;
        }
        .narayaneeyam-blog-callout {
          background: linear-gradient(135deg, #fff5f3 0%, #fff9f5 100%);
          border: 1px solid #fcd5c8;
          border-left: 4px solid #E63E1A;
          border-radius: 12px;
          padding: 1.5rem 1.75rem;
          margin: 2rem 0;
        }
        .narayaneeyam-blog-callout .callout-label {
          display: block;
          color: #E63E1A;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }
        .narayaneeyam-blog-callout p {
          margin-bottom: 0;
          color: #374151;
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
            Devotion
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            Narayaneeyam (ನಾರಾಯಣೀಯಂ): A Divine Journey of Bhakti, Wisdom & Lord Krishna's Stories
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-semibold text-gray-500 mb-8">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#E63E1A]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              July 3, 2026
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
            src="/images/blog_imgs/narayaneeyam_blog.jpg" 
            alt="Narayaneeyam (ನಾರಾಯಣೀಯಂ)" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          <strong>Narayaneeyam (ನಾರಾಯಣೀಯಂ)</strong> is one of the most revered spiritual works that beautifully narrates the divine stories of <strong>Lord Krishna</strong> and the glory of <strong>Lord Vishnu</strong>. More than just a book, it is a guide to <strong>Bhakti (Devotion), Jnana (Wisdom), and Moksha (Liberation)</strong>, inspiring devotees to lead a spiritually enriched life.
        </p>

        <p>
          To bring the essence of this sacred scripture closer to viewers, <strong>NKR TV</strong> presents the <strong>"ನಾರಾಯಣೀಯಂ (Narayaneeyam)"</strong> program every morning at <strong>6:00 AM</strong>. In this program, Guruji explains the meaning, stories, and spiritual lessons from the Narayaneeyam in a simple and easy-to-understand manner.
        </p>

        <div className="narayaneeyam-blog-callout">
          <span className="callout-label">Broadcast Schedule</span>
          <p>
            Watch <strong>"ನಾರಾಯಣೀಯಂ"</strong> program every morning at <strong>6:00 AM</strong> only on <strong>NKR TV</strong>.
          </p>
        </div>

        <h2>What is Narayaneeyam (ನಾರಾಯಣೀಯಂ)?</h2>
        <p>
          <strong>Narayaneeyam</strong> is a sacred devotional text that contains the divine stories and leelas of <strong>Lord Krishna</strong>, along with the greatness of Lord Mahavishnu. Every chapter offers valuable lessons on faith, righteousness, devotion, and the true purpose of life.
        </p>
        <p>
          From <strong>Lord Krishna's birth, childhood miracles, Vrindavan leelas, Govardhana episode, Kamsa Vadha, and many other divine incidents</strong>, Narayaneeyam beautifully presents the spiritual significance behind every event.
        </p>
        <p>
          It is not just a collection of stories—it is a spiritual path that encourages devotees to strengthen their relationship with God.
        </p>

        <h2>Why Should You Learn Narayaneeyam?</h2>
        <p>
          Listening to or understanding <strong>ನಾರಾಯಣೀಯಂ</strong> offers much more than religious knowledge.
        </p>
        <p>
          Some of its spiritual benefits include:
        </p>
        <ul>
          <li><strong>Deepens Devotion</strong>: Strengthens the personal and emotional bond towards Lord Krishna.</li>
          <li><strong>Spiritual Insight</strong>: Helps understand the hidden spiritual meanings and wisdom behind Krishna's divine leelas.</li>
          <li><strong>Mental Peace</strong>: Brings deep inner peace, clarity, and mental positivity to start your day.</li>
          <li><strong>Righteous Living</strong>: Encourages Dharma and ethical decision making in daily life.</li>
          <li><strong>Inspirational Strength</strong>: Inspires faith, hope, and resilience during difficult phases of life.</li>
          <li><strong>Path to Moksha</strong>: Guides devotees along the spiritual path of Bhakti and ultimately toward Moksha (Liberation).</li>
        </ul>

        <h2>Watch "ನಾರಾಯಣೀಯಂ" Every Morning on NKR TV</h2>
        <p>
          The <strong>"ನಾರಾಯಣೀಯಂ"</strong> program on <strong>NKR TV</strong> is specially designed for devotees who wish to begin their day with spiritual wisdom.
        </p>
        <p>
          Every episode features Guruji explaining:
        </p>
        <ul>
          <li>The stories and chapters from Narayaneeyam.</li>
          <li>The hidden spiritual meaning behind Lord Krishna's divine actions.</li>
          <li>Practical, actionable life lessons from each chapter.</li>
          <li>The critical importance of Bhakti, Dharma, and positive living.</li>
          <li>How these timeless teachings can be applied in our contemporary lives.</li>
        </ul>
        <p>
          Guruji's simple explanations make this ancient scripture easy to understand for viewers of all ages.
        </p>

        <h2>Who Should Watch This Program?</h2>
        <p>
          The <strong>ನಾರಾಯಣೀಯಂ</strong> program is ideal for:
        </p>
        <ul>
          <li>Lord Krishna devotees who want to connect with His divine presence.</li>
          <li>Spiritual seekers looking for deeper insights and scriptural wisdom.</li>
          <li>Families interested in positive and educational devotional programs.</li>
          <li>Viewers who wish to understand Narayaneeyam in a simple, accessible way.</li>
          <li>Anyone looking to cultivate peace, positivity, and spiritual growth in their life.</li>
        </ul>
        <p>
          Whether you are already familiar with Narayaneeyam or hearing about it for the first time, this program offers valuable insights for everyone.
        </p>

        <h2>Start Your Day with Divine Blessings</h2>
        <p>
          Begin your mornings with the blessings of Lord Krishna by watching <strong>"ನಾರಾಯಣೀಯಂ"</strong> every day at <strong>6:00 AM only on NKR TV</strong>.
        </p>
        <p>
          Each episode takes viewers through the timeless wisdom of this sacred scripture, helping them discover the values of devotion, compassion, humility, and faith.
        </p>

        <h2>Conclusion</h2>
        <p>
          <strong>Narayaneeyam (ನಾರಾಯಣೀಯಂ)</strong> is not just a spiritual book—it is a treasure of Lord Krishna's divine stories and timeless teachings that continue to inspire millions of devotees.
        </p>
        <p>
          Through <strong>NKR TV's "ನಾರಾಯಣೀಯಂ"</strong> program, viewers can experience the beauty of this sacred text with Guruji's insightful explanations. If you wish to strengthen your devotion, understand Krishna's divine leelas, and begin each day with spiritual positivity, don't miss <strong>"ನಾರಾಯಣೀಯಂ" every morning at 6:00 AM on NKR TV.</strong>
        </p>

        {/* Call to Action Box */}
        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3 className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10">Start Your Devotional Journey</h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Join Guruji every morning at 6:00 AM on NKR TV Kannada to bring the divine blessings and sacred teachings of Narayaneeyam into your home. Let the leelas of Lord Krishna fill your day with peace and joy!
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
