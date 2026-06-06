import DotBackdrop from '../components/decor/DotBackdrop';

export default function NKRSpecialitiesBlogPage() {
  return (
    <div className="nkr-spec-blog-page relative flex flex-col w-full overflow-hidden bg-[#fffdf9]">
      <style>{`
        .nkr-spec-blog-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: #4b5563;
          font-size: 1.125rem;
        }
        .nkr-spec-blog-content h2 {
          font-size: 2rem;
          font-weight: 800;
          color: #120e2b;
          margin-top: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }
        .nkr-spec-blog-content h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #E63E1A;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          padding-left: 1rem;
          border-left: 3px solid #E63E1A;
          line-height: 1.4;
        }
        .nkr-spec-blog-content ul {
          margin-bottom: 2rem;
          padding-left: 1rem;
          list-style-type: none;
        }
        .nkr-spec-blog-content li {
          margin-bottom: 1rem;
          line-height: 1.8;
          color: #4b5563;
          font-size: 1.125rem;
          position: relative;
          padding-left: 1.5rem;
        }
        .nkr-spec-blog-content li::before {
          content: "•";
          color: #E63E1A;
          font-weight: bold;
          font-size: 1.5em;
          position: absolute;
          left: 0;
          top: -0.25rem;
        }
        .nkr-spec-blog-content strong {
          color: #120e2b;
          font-weight: 700;
        }
        .nkr-spec-blog-content em {
          color: #E63E1A;
          font-style: italic;
        }
        .nkr-spec-blog-callout {
          background: linear-gradient(135deg, #fff5f3 0%, #fff9f5 100%);
          border: 1px solid #fcd5c8;
          border-left: 4px solid #E63E1A;
          border-radius: 12px;
          padding: 1.5rem 1.75rem;
          margin: 2rem 0;
        }
        .nkr-spec-blog-callout .callout-label {
          display: block;
          color: #E63E1A;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
        }
        .nkr-spec-blog-callout p {
          margin-bottom: 0;
          color: #374151;
        }
        @media (max-width: 639px) {
          .nkr-spec-blog-content h2 {
            font-size: 1.5rem;
            margin-top: 2.5rem;
          }
          .nkr-spec-blog-content h3 {
            font-size: 1.2rem;
          }
          .nkr-spec-blog-content p, .nkr-spec-blog-content li {
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
            Insights
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[52px] lg:text-[56px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            Explore the Rich Tapestry of Karnataka with Namma Karnataka Rajya (NKR) TV
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-semibold text-gray-500 mb-8">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#E63E1A]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              May 18, 2025
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
            src="/images/blog_imgs/nkr_specialities_blog.webp"
            alt="NKR Specialities"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 nkr-spec-blog-content">

        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          In the vast landscape of television channels, Namma Karnataka Rajya (NKR) TV Kannada stands out as more than just a viewing option. It is a vibrant celebration of Karnataka's rich culture, language, and heritage.
        </p>

        <p>
          Rooted in the art of Kannada storytelling, NKR TV creates a bridge between tradition and innovation, producing content that resonates with audiences across generations.
        </p>

        <h2>Introduction to NKR TV Kannada</h2>
        <p>
          Namma Karnataka Rajya (NKR) TV Kannada prides itself on being a homegrown conduit of entertainment, information, and inspiration for the people of Karnataka. It embodies the spirit of its motto:
        </p>

        <div className="nkr-spec-blog-callout">
          <span className="callout-label">Channel Motto</span>
          <p>
            <strong>"Karnataka's Channel, Forever Yours — NKR TV KANNADA"</strong><br />
            <span className="text-[#E63E1A] font-semibold">ಕನ್ನಡಿಗರಿಂದ ಕನ್ನಡಿಗರಾಗಿ ಕನ್ನಡಿಗರಿಗೋಸ್ಕರ</span>
          </p>
        </div>

        <p>
          Whether you are interested in heartwarming family dramas, side-splitting comedy shows, or thought-provoking non-fiction programs, NKR TV Kannada offers content curated to reflect and celebrate the diverse voices of the land.
        </p>

        <h2>A Divine Journey: NKR Special Content</h2>

        <h3>The Power of Three Hours</h3>
        <p>
          One of the standout features of NKR TV Kannada is its daily commitment to broadcasting three hours of profound spiritual content. This offering, which includes shows like <strong>DHARMA JYOTHI</strong>, <strong>ANANTHA DARSHAANA</strong>, and <strong>AGNI HOTHRA</strong>, provides viewers with a unique opportunity to explore faith, spirituality, and life's greater meanings.
        </p>
        <p>
          Each of these programs offers a window into the philosophical and religious heritage of Karnataka, enabling viewers to connect with age-old practices and ideas.
        </p>

        <h3><em>SWADA SAMBHRAMA</em>: A Culinary Celebration</h3>
        <p>
          Following the spiritual journey, NKR TV's <strong>SWADA SAMBHRAMA</strong> ensures the celebration of Karnataka's culinary diversity. This program takes viewers on a delectable journey, highlighting recipes, stories, and techniques integral to Kannada cuisine. As food is one of the key ways culture is expressed, this show is not just an exploration of recipes but a deep dive into the stories that have been passed down through generations in kitchens across Karnataka.
        </p>

        <h2>Broadening Horizons with Diverse Offerings</h2>

        <h3>Engaging Non-Fiction Content</h3>
        <p>
          NKR TV Kannada takes pride in delivering high-quality non-fiction content that caters to a range of interests and age groups. Viewers can catch up with the latest news and updates, ensuring they stay informed about current events within Karnataka and beyond. Additionally, through shows like <strong>DEAR MOMENTS</strong>, audiences have a chance to engage with relatable, touching stories that explore the intricacies of life in Karnataka.
        </p>

        <h3>Live TV and Global Reach</h3>
        <p>
          With an around-the-clock offering of live general entertainment content in Kannada, NKR TV maintains a close connection with its audience. The channel's global reach ensures that the Kannada diaspora can stay connected to their roots, engaging with content that speaks their language and reflects shared values. Whether you are at home in Karnataka or abroad, NKR TV Kannada is a bridge that connects audiences global-wide, fostering a sense of community and shared identity.
        </p>

        <h2>Community Focus and Representation in Content</h2>

        <h3>Reflecting Societal Stories</h3>
        <p>
          NKR TV prides itself on not just entertaining but also representing the stories and voices of its community. Through its diverse programming, the channel showcases the aspirations, challenges, and triumphs of everyday people in Karnataka. This focus on community allows NKR TV to remain an authentic voice in the world of regional television, offering stories that resonate deeply with viewers.
        </p>

        <h3>Practical Tips for Audience Engagement</h3>
        <ul>
          <li><strong>Active Participation</strong>: NKR TV encourages its audience to participate actively by giving feedback and sharing stories that can be aired, ensuring the channel remains a true representation of the community.</li>
          <li><strong>Interactive Platforms</strong>: Through its digital platforms, NKR TV invites viewers to interact with their favorite shows and stars, fostering a more engaging viewer experience.</li>
        </ul>

        <h2>Conclusion: Join the Celebration of Kannada Culture</h2>
        <p>
          Namma Karnataka Rajya (NKR) TV Kannada is more than a television channel; it is a rich tapestry of culture, language, and innovation. By tuning in, viewers are invited to partake in a vibrant celebration of Kannada heritage, enjoying diverse programming that spans drama, comedy, spirituality, and culinary arts.
        </p>
        <p>
          NKR TV is committed to delivering quality content that informs, entertains, and inspires, making it not just a channel but a beloved part of the Kannada community.
        </p>

        {/* Call to Action Box */}
        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3
            className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10"
            style={{ borderLeft: 'none', paddingLeft: 0, color: '#120e2b' }}
          >
            Join the Celebration
          </h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Join us in celebrating the magic of Kannada television — one show at a time. Tune into Namma Karnataka Rajya (NKR) TV Kannada and become a part of our journey. Let's explore Karnataka together!
          </p>
          <div className="flex gap-4 relative z-10">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF5A3C] to-[#D42200] px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(230,62,26,0.25)] transition-transform hover:-translate-y-1"
            >
              Watch Now
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
