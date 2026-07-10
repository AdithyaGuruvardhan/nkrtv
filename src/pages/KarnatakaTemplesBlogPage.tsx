import DotBackdrop from '../components/decor/DotBackdrop';

export default function KarnatakaTemplesBlogPage() {
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
            Culture & Heritage
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            10 Wonderful Ancient Temples of Karnataka
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
              8 min read
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 mb-16 relative z-10">
        <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-gray-900/5 group">
          <img 
            src="/images/blog_imgs/temples.webp" 
            alt="Temples of Karnataka" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          Karnataka's history isn't just written in books — it's carved into stone, across temples that have stood for over a thousand years. From rock-cut caves to towering gopurams, every dynasty that ruled this land left behind a masterpiece. In this edition of <strong>Anantha Darshana</strong>, join us on a sacred journey (ಪವಿತ್ರ ಯಾತ್ರೆ) through 10 of Karnataka's most remarkable ancient temples.
        </p>

        <div className="bg-blog-callout">
          <span className="callout-label">Broadcast Schedule</span>
          <p>
            Watch <strong>"Anantha Darshana"</strong> Every Morning at <strong>06:30 AM (Mon - Fri)</strong> on <strong>NKR TV ಕನ್ನಡ</strong>.
          </p>
        </div>

        <h2>1. Virupaksha Temple, Hampi</h2>
        <p>
          The oldest continuously worshipped shrine in Hampi, with a history stretching back to the 7th century. Dedicated to Lord Shiva as Virupaksha, it was later expanded into a grand complex under the Vijayanagara Empire, including its striking 50-metre eastern gopuram. It remains the spiritual heart (ಆಧ್ಯಾತ್ಮಿಕ ಕೇಂದ್ರ) of the Hampi UNESCO World Heritage Site.
        </p>

        <h2>2. Chennakeshava Temple, Belur</h2>
        <p>
          Commissioned by Hoysala king Vishnuvardhana in 1117 CE, this Vishnu temple took over 100 years to complete. Its walls are covered in extraordinarily detailed soapstone carvings — dancers, musicians, and mythological scenes — showcasing Hoysala artistry (ಶಿಲ್ಪಕಲೆ) at its peak.
        </p>

        <h2>3. Hoysaleswara Temple, Halebidu</h2>
        <p>
          Once the capital of the Hoysala Empire, Halebidu is home to this 12th-century Shiva temple, famous for its incredibly intricate exterior friezes depicting elephants, warriors, and scenes from the Ramayana and Mahabharata. Some artisans even signed their work — a rare practice for the time.
        </p>

        <h2>4. Kesava Temple, Somanathapura</h2>
        <p>
          Built in 1268 CE under the Hoysala dynasty, this temple is often considered the finest and most complete example of Hoysala architecture still standing — a star-shaped structure with three shrines dedicated to forms of Vishnu.
        </p>

        <h2>5. Badami Cave Temples</h2>
        <p>
          Carved directly into sandstone cliffs by the Chalukya dynasty in the 6th century, these four cave temples represent some of the earliest dated Hindu rock-cut architecture in India. Cave 3, dedicated to Vishnu, carries an inscription dated to 578-579 CE, making it one of the oldest firmly-dated Hindu cave shrines anywhere.
        </p>

        <h2>6. Pattadakal Group of Monuments</h2>
        <p>
          A UNESCO World Heritage Site and the ceremonial coronation city of the Chalukyas, Pattadakal beautifully blends North Indian Nagara and South Indian Dravidian temple styles in one complex, built through the 7th and 8th centuries.
        </p>

        <h2>7. Aihole Temple Complex</h2>
        <p>
          Known as the "cradle of Indian temple architecture" (ದೇವಾಲಯ ವಾಸ್ತುಶಿಲ್ಪದ ತೊಟ್ಟಿಲು), Aihole contains around 125 temples built between the 5th and 8th centuries, where Chalukyan architects experimented with the styles that would go on to define temple-building across South India.
        </p>

        <h2>8. Gomateshwara Statue, Shravanabelagola</h2>
        <p>
          While technically a monolithic statue rather than a temple, this 983 CE Jain monument of Bahubali, commissioned under the Ganga dynasty, is one of the tallest free-standing statues in the world and remains one of Karnataka's most important pilgrimage sites (ಯಾತ್ರಾ ಸ್ಥಳ).
        </p>

        <h2>9. Mahabaleshwara Temple, Gokarna</h2>
        <p>
          Steeped in legend, this ancient Shiva temple is believed to house the sacred Atmalinga, connected to the story of Ravana in the Ramayana. Considered one of the holiest Shiva kshetras on the western coast, it draws devotees from across South India.
        </p>

        <h2>10. Sri Ranganathaswamy Temple, Srirangapatna</h2>
        <p>
          Consecrated as early as 984 CE and later renovated by the Hoysala king Ballala in 1210 CE, this island temple on the Kaveri river is dedicated to Lord Ranganatha, a reclining form of Vishnu, and remains an important Vaishnavite pilgrimage site.
        </p>

        <h2>Final Thoughts</h2>
        <p>
          Each of these temples tells a story — of empires that rose and fell, of artisans who poured decades into a single wall of carvings, and of an unbroken thread of devotion that still runs through these ancient stones today. To explore the history, architecture, and spiritual significance (ಇತಿಹಾಸ, ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಮಹತ್ವ) behind these and many more sacred sites, watch <strong>Anantha Darshana</strong>, every morning at 6:30 AM, Monday to Friday, only on NKR TV ಕನ್ನಡ.
        </p>

        {/* Call to Action Box */}
        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3 className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10">Start Your Spiritual Journey</h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Join us every morning at 06:30 AM (Mon - Fri) on NKR TV Kannada to bring the divine blessings and sacred teachings into your home. Explore our rich heritage!
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
