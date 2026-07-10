import DotBackdrop from '../components/decor/DotBackdrop';

export default function KarnatakaFactsBlogPage() {
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
            Super Kannadiga
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            20 Facts Every Kannadiga Should Know About Karnataka
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
            src="/images/blog_imgs/ka_20.webp" 
            alt="Karnataka Facts" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          How well do you really know your own state? Before you test your general knowledge on <strong>Super Kannadiga</strong>, here are 20 facts about Karnataka (ಕರ್ನಾಟಕ) that every proud Kannadiga should have at their fingertips — from history and geography to culture and records.
        </p>

        <div className="bg-blog-callout">
          <span className="callout-label">Broadcast Schedule</span>
          <p>
            Watch <strong>"Super Kannadiga"</strong> Every Evening at <strong>7:00 PM</strong> on <strong>NKR TV ಕನ್ನಡ</strong>.
          </p>
        </div>

        <h2>History & Formation</h2>
        <p><strong>1.</strong> Karnataka was originally formed as <strong>Mysore State</strong> on 1 November 1956, under the States Reorganisation Act, bringing together Kannada-speaking regions from different presidencies and princely states.</p>
        <p><strong>2.</strong> The state was officially renamed <strong>Karnataka in 1973</strong>.</p>
        <p><strong>3.</strong> 1 November is celebrated every year as <strong>Kannada Rajyotsava</strong> (Karnataka Formation Day).</p>
        <p><strong>4.</strong> Karnataka gets its name from the words "Karu" and "Nadu," widely interpreted to mean "elevated land" or "lofty land," reflecting its Deccan Plateau geography.</p>

        <h2>Geography</h2>
        <p><strong>5.</strong> Karnataka is the <strong>7th largest state in India by area</strong>, covering roughly 1,91,791 sq. km.</p>
        <p><strong>6.</strong> The state has a coastline of about <strong>320 km along the Arabian Sea</strong>.</p>
        <p><strong>7.</strong> Karnataka is the only southern state that shares land borders with <strong>all four other southern states</strong> — Kerala, Tamil Nadu, Andhra Pradesh, and Telangana — along with Goa and Maharashtra.</p>
        <p><strong>8.</strong> The <strong>Kaveri and Krishna</strong> river systems, along with their tributaries, are the two major river networks that sustain the state's agriculture and hydroelectric power.</p>
        <p><strong>9.</strong> <strong>Mullayanagiri Peak</strong> in Chikkamagaluru district is the highest point in Karnataka, standing at about 1,930 metres.</p>

        <h2>State Symbols</h2>
        <p><strong>10.</strong> The state animal of Karnataka is the <strong>Indian elephant</strong>, and the state bird is the <strong>Indian Roller</strong> (ನೀಲಕಂಠ ಪಕ್ಷಿ).</p>
        <p><strong>11.</strong> The state tree is <strong>Sandalwood (ಶ್ರೀಗಂಧ)</strong>, and the state flower is the <strong>Lotus (ಕಮಲ)</strong>.</p>
        <p><strong>12.</strong> Karnataka's state emblem features the <strong>Gandaberunda</strong>, a mythical two-headed bird, which also appears on the state government seal.</p>
        <p><strong>13.</strong> The state anthem, <strong>"Jaya Bharata Jananiya Tanujate,"</strong> was written by the Jnanpith award-winning poet <strong>Kuvempu</strong>.</p>

        <h2>Culture & Heritage</h2>
        <p><strong>14.</strong> Karnataka is home to <strong>four UNESCO World Heritage Sites</strong>: the Hampi monuments, the Pattadakal group of temples, the Western Ghats, and the Sacred Ensembles of the Hoysalas (Belur, Halebidu, and Somanathapura).</p>
        <p><strong>15.</strong> Kannada is one of the officially recognised <strong>classical languages of India</strong>, with inscriptional evidence dating back to the era of Emperor Ashoka.</p>
        <p><strong>16.</strong> Karnataka is a major <strong>silk-producing state</strong>, contributing more than half of India's raw silk production.</p>

        <h2>Economy & Records</h2>
        <p><strong>17.</strong> Karnataka's capital, <strong>Bengaluru</strong>, is widely known as India's <strong>"Information Technology Capital"</strong> and was historically nicknamed the "Garden City."</p>
        <p><strong>18.</strong> Karnataka is one of <strong>India's top economies by GSDP</strong>, ranking among the country's largest state economies.</p>
        <p><strong>19.</strong> Karnataka has one of the <strong>highest tiger populations among Indian states</strong>, with its forests supporting a significant share of India's tiger and elephant populations.</p>
        <p><strong>20.</strong> Karnataka <strong>dominates India's gold production</strong>, accounting for the overwhelming majority of the country's gold ore output, largely from the historic Kolar Gold Fields region and surrounding areas.</p>

        <h2>Final Thoughts</h2>
        <p>
          From ancient dynasties to modern-day tech capitals, Karnataka's story is one of the richest in India. How many of these 20 facts did you already know? Put your knowledge to the test — and maybe win some exciting prizes along the way — on <strong>Super Kannadiga</strong>, every evening at 7:00 PM, Monday to Friday, only on NKR TV ಕನ್ನಡ.
        </p>

        {/* Call to Action Box */}
        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3 className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10">Test Your Knowledge Live!</h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Join Super Kannadiga every evening at 7:00 PM on NKR TV Kannada to win exciting cash prizes.
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
