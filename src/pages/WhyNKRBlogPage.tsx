import DotBackdrop from '../components/decor/DotBackdrop';

export default function WhyNKRBlogPage() {
  return (
    <div className="why-nkr-blog-page relative flex flex-col w-full overflow-hidden bg-[#fffdf9]">
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
            Culture & Heritage
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            Why NKR Kannada Channel: A Celebration of Karnataka's Rich Culture
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-semibold text-gray-500 mb-8">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#E63E1A]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              May 28, 2025
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
            src="/images/blog_imgs/why_nkr_blog.webp" 
            alt="Why NKR Kannada Channel" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          In a rapidly globalizing world, where cultures often intermingle and traditional boundaries blur, retaining one's cultural identity becomes increasingly valuable.
        </p>

        <p>
          Enter Namma Karnataka Rajya (NKR) TV Kannada—a channel that stands as a testament to the rich, vibrant cultural tapestry of Karnataka. More than just a television channel, NKR TV Kannada serves as a bridge connecting generations, rooted in the heart of Kannada storytelling while embracing innovation to reflect the evolving landscape. Let's dive deep into why NKR Kannada Channel is considered a beacon of empowerment, entertainment, and cultural preservation.
        </p>

        <h2>A Vibrant Celebration of Kannada Culture and Heritage</h2>
        <p>
          Karnataka is a region abundantly rich in history, language, and traditions. NKR TV Kannada encapsulates this essence by creating content that echoes the cultural nuances of Kannada heritage. By offering a platform that celebrates the diversity within the state, the channel encourages viewers to take pride in their roots. This reverence for heritage is exemplified through:
        </p>
        <ul>
          <li><strong>Family Dramas Steeped in Tradition</strong>: NKR Kannada Channel doesn't just entertain; it educates by injecting traditional values into family dramas. These narratives often explore themes of family unity, moral values, and community living, serving as a mirror to everyday life in Karnataka.</li>
          <li><strong>Cultural Documentaries and Non-Fiction Shows</strong>: Celebrating heritage goes beyond fiction. NKR TV invests in rich, thought-provoking documentaries that delve into Karnataka's festivals, historical landmarks, and significant cultural shifts, offering an introspective look into what defines Kannada identity.</li>
          <li><strong>Innovative Programming</strong>: The channel stays relevant with innovative content that resonates with younger audiences while honoring long-standing traditions. This includes infusing modern elements into classic storytelling techniques, ensuring that the culture is not only preserved but also adapted for future generations.</li>
        </ul>

        <h2>Entertaining the People of Karnataka</h2>
        <p>
          Entertainment at NKR Kannada Channel is synonymous with diversity and innovation. From genres that tickle the funny bone to those that tug at heartstrings, NKR TV offers a plethora of options, making sure there's something for everyone:
        </p>
        <ul>
          <li><strong>Comedy Shows</strong>: Laughter knows no bounds, and NKR TV Kannada uses humor as a tool to unite people. Comedy shows on the channel bring out the quirks and peculiarities of everyday Kannada life, with relatable content that resonates with audiences across age groups.</li>
          <li><strong>Reality and Game Shows</strong>: These formats offer a glimpse into the styles and aspirations of contemporary Kannadigas. Whether it's highlighting local talents through singing competitions or showcasing regional skills in various domains, NKR TV promotes both entertainment and empowerment.</li>
          <li><strong>Seasonal Specials and Festivals</strong>: NKR Kanal brings the festive spirit to viewers' homes, with special programming during significant Kannada festivals. Through these specials, the channel captures the joy and vibrancy of Karnataka's diverse festivities, creating shared experiences that bind communities together.</li>
        </ul>

        <h2>Bridging Tradition with Innovation</h2>
        <p>
          One of the most remarkable attributes of NKR TV Kannada is its ability to blend the conventional with the contemporary. By leveraging modern technology and storytelling methods, the channel ensures that tradition isn't lost but rather celebrated with a modern twist:
        </p>
        <ul>
          <li><strong>Tech-savvy Productions</strong>: Taking advantage of high-definition production quality and cutting-edge technology, NKR TV ensures that every story is visually compelling and engaging, drawing in audiences who expect the best from their viewing experience.</li>
          <li><strong>Digital Expansion</strong>: Understanding the digital shift, NKR TV has ventured into online streaming to reach a global audience. This move not only caters to the diaspora but also amplifies Kannada culture on a larger scale, inviting non-Kannadigas to appreciate regional stories.</li>
          <li><strong>Interactive Choices</strong>: Viewers today prefer interactivity, and NKR TV caters to this demand through social media engagements, where audiences can participate in discussions or contests that are connected to their favorite shows, creating an inclusive community.</li>
        </ul>

        <h2>Inspiring Through Representation</h2>
        <p>
          NKR Kannada Channel prides itself on being a channel for the people, by the people, and of the people. Authentic representation drives the content strategy at NKR, ensuring everyone finds a reflection of themselves in the narratives.
        </p>
        <ul>
          <li><strong>Local Storytellers and Artists</strong>: By employing homegrown talent, NKR gives voice to local stories, ensuring organic and genuine representation. This practice celebrates the spirit of Karnataka, one story at a time, empowering local artists and creators.</li>
          <li><strong>Empathy and Understanding</strong>: The channel often addresses social issues through its programming, offering perspectives that foster empathy and understanding among viewers. This includes series or segments that highlight gender equality, environmental concerns, and much more.</li>
          <li><strong>Inspiration For Aspiring Creatives</strong>: By showcasing local talent across its various shows, NKR TV inspires budding creatives in Karnataka to pursue their passions, contributing culturally enriching stories to the larger societal narrative.</li>
        </ul>

        <h2>Conclusion: Join the Celebration of Kannada Magic</h2>
        <p>
          In essence, NKR TV Kannada isn't just a channel—it's a movement. A movement that celebrates Kannada culture, entertains with a diverse range of programming, and connects people with both their roots and future. It's a welcoming stage for every Kannadiga, serving as a constant reminder of the richness and beauty that Karnataka holds.
        </p>
        <p>
          As a channel that belongs to every Kannadiga, we extend an invitation to all—embrace the magic of Kannada television with NKR TV. Let us continue to narrate stories that inspire, entertain, and enlighten, bridging gaps and connecting hearts across generations.
        </p>
        <p>
          Don't just watch; be a part of this cultural revolution. Tune into NKR TV Kannada today and experience a piece of home no matter where you are.
        </p>

        {/* Call to Action Box */}
        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3 className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10">Join the Community</h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Catch your favorite shows on NKR TV Kannada and stay connected with your Kannada heritage. Share your favorite NKR moments with us on social media using <strong className="text-[#E63E1A]">#NKRKannadaMagic</strong> and join our vibrant community today!
          </p>
          <div className="flex gap-4 relative z-10">
            <a href="/" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF5A3C] to-[#D42200] px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(230,62,26,0.25)] transition-transform hover:-translate-y-1">
              Watch Now
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
