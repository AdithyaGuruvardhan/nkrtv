import DotBackdrop from '../components/decor/DotBackdrop';

export default function CEOBlogPage() {
  return (
    <div className="ceo-blog-page relative flex flex-col w-full overflow-hidden bg-[#fffdf9]">
      <style>{`
        .ceo-blog-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: #4b5563;
          font-size: 1.125rem;
        }
        .ceo-blog-content h2 {
          font-size: 2rem;
          font-weight: 800;
          color: #120e2b;
          margin-top: 3.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.3;
        }
        .ceo-blog-content h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #E63E1A;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          padding-left: 1rem;
          border-left: 3px solid #E63E1A;
          line-height: 1.4;
        }
        .ceo-blog-content ul {
          margin-bottom: 2rem;
          padding-left: 1rem;
          list-style-type: none;
        }
        .ceo-blog-content li {
          margin-bottom: 1rem;
          line-height: 1.8;
          color: #4b5563;
          font-size: 1.125rem;
          position: relative;
          padding-left: 1.5rem;
        }
        .ceo-blog-content li::before {
          content: "•";
          color: #E63E1A;
          font-weight: bold;
          font-size: 1.5em;
          position: absolute;
          left: 0;
          top: -0.25rem;
        }
        .ceo-blog-content strong {
          color: #120e2b;
          font-weight: 700;
        }
        .ceo-blog-content em {
          color: #E63E1A;
          font-style: italic;
        }
        @media (max-width: 639px) {
          .ceo-blog-content h2 {
            font-size: 1.5rem;
            margin-top: 2.5rem;
          }
          .ceo-blog-content h3 {
            font-size: 1.2rem;
          }
          .ceo-blog-content p, .ceo-blog-content li {
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
            Leadership
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[52px] lg:text-[56px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            A Note from the CEO: Celebrating Karnataka's Culture and Identity with NKR TV
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-semibold text-gray-500 mb-8">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#E63E1A]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              May 10, 2025
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#E63E1A]">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              4 min read
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 mb-16 relative z-10">
        <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-gray-900/5 group">
          <img
            src="/images/blog_imgs/note_ceo_nkr_blog.webp"
            alt="A note from CEO"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 ceo-blog-content">

        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          In the diverse and dynamic media landscape of Karnataka, <strong>NKR TV Kannada</strong> stands out as more than just a television channel. It is a vibrant celebration of Karnataka's rich culture, language, and heritage.
        </p>

        <p>
          We're here to offer exclusive content that informs, inspires, and empowers our viewers, bridging the gap between tradition and innovation. Under the leadership of Smt. Rekha K. Govind, our CEO, we're poised to make an indelible mark on television broadcasting.
        </p>

        <h2>The Unique Mission of NKR TV Kannada</h2>
        <p>
          Our mission is to create a television platform that embodies the essence of Kannada storytelling, offering varied content that resonates with audiences across generations. NKR TV Kannada is dedicated to showcasing content that ranges from heartwarming family dramas to hilarious comedy shows, along with thought-provoking non-fiction programs. Our goal is to reflect the diverse voices and stories of the Karnataka people.
        </p>

        <h3>Bridging Tradition and Innovation</h3>
        <p>
          At NKR TV Kannada, we deeply value the integration of <strong>tradition and innovation</strong>. Our content reflects traditional narratives while incorporating modern entertainment styles that capture the imagination of today's audiences. This has been pivotal in crafting shows that remain true to Karnataka's rich cultural heritage, yet appeal to younger generations seeking contemporary stories.
        </p>

        <h3>Empowerment through Entertainment</h3>
        <p>
          NKR TV isn't just about entertainment — it's about <strong>empowerment</strong>. Our programs are designed to inspire viewers, sparking change and fostering growth. By showcasing strong Kannada characters and stories, we empower our audience to embrace their cultural identity boldly and confidently.
        </p>

        <h2>Visionary Leadership: A Commitment to Excellence</h2>
        <p>
          Smt. Rekha K. Govind, our CEO, is a visionary leader dedicated to making NKR TV a model of excellence in broadcasting. Her leadership is characterized by her dedication to turning her father's vision into a living reality, seamlessly integrating education, media, and business with a strong commitment to the Kannada community.
        </p>

        <h3>A Multilanguage Platform</h3>
        <p>
          Under Smt. Rekha's guidance, NKR TV is expanding its horizons as a <strong>multi-language platform</strong>, with Kannada at its heart, also embracing other regional voices like Tulu. This inclusivity ensures that NKR TV reaches a wider audience, making sure every voice is celebrated and every story finds its audience.
        </p>

        <h3>Empowering Young Women</h3>
        <p>
          As a leader within the BJP and the Mahila Morcha Bengaluru Central District President, Smt. Rekha actively champions <strong>young women</strong>, encouraging them to be bold and confident. Her leadership extends beyond media into empowering young women, fostering an environment where they can thrive.
        </p>

        <h2>Behind the Scenes: Our Leadership Team</h2>
        <p>
          The success of NKR TV Kannada is supported by an exceptional leadership team driven by innovation and excellence.
        </p>

        <h3>Creative and Business Strategy</h3>
        <p>
          P. V. Phani Srivatsa, our Creative & Business Head, plays a pivotal role in guiding the creative strategy and business growth of NKR TV. His innovative and vision-led approach has been instrumental in achieving the channel's goal of producing high-quality content.
        </p>

        <h3>Technical Excellence</h3>
        <p>
          On the technical side, <strong>Vibhin</strong>, our Technical Head, ensures that our technological infrastructure is robust and reliable. His expertise in driving technical excellence ensures that NKR TV consistently delivers a seamless broadcasting experience.
        </p>

        <h2>Cultivating the Kannada Identity</h2>
        <p>
          At NKR TV Kannada, we take immense pride in our commitment to nurturing the Kannada identity. Our programming is carefully curated to celebrate the richness of Kannada culture, ensuring that the language, traditions, and values of Karnataka are honored and preserved.
        </p>

        <h3>Connecting with Our Audience</h3>
        <p>
          Our channel strives to <strong>connect deeply</strong> with the audience by telling stories that matter to them. Whether through showcasing community events, traditional festivals, or locally inspired programs, our content resonates on a personal level, creating a strong emotional bond with viewers.
        </p>

        <h3>Engagement Through Social Channels</h3>
        <p>
          We understand that in today's digital age, engagement extends far beyond television. To this end, NKR TV maintains an active presence across various social media platforms, encouraging dialogue and interaction with our audience. This two-way communication ensures that our content remains relevant and engaging.
        </p>

        <h2>Conclusion: Join Us in Celebrating Kannada Culture</h2>
        <p>
          At NKR TV Kannada, we are dedicated to being <em>Karnataka's Channel, Forever Yours.</em> We invite you to join us in this exciting journey of celebrating the magic of Kannada television, one show at a time.
        </p>

        {/* Call to Action Box */}
        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3
            className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10"
            style={{ borderLeft: 'none', paddingLeft: 0, color: '#120e2b' }}
          >
            Stay Connected
          </h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Whether you are a long-time viewer or new to our network, we encourage you to tune into NKR TV Kannada. Explore our diverse programming, embrace the richness of Kannada culture, and be part of a community that celebrates and unites us all.
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
