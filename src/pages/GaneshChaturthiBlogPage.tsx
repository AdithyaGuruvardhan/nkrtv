import DotBackdrop from '../components/decor/DotBackdrop';

export default function GaneshChaturthiBlogPage() {
  return (
    <div className="ganesh-chaturthi-blog-page relative flex flex-col w-full overflow-hidden bg-[#fffdf9]">
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

      <section className="relative w-full px-6 pt-[140px] pb-16 lg:pt-[160px] lg:pb-20">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-[13px] font-extrabold tracking-[0.25em] uppercase text-[#E63E1A] mb-4">
            Spirituality
          </p>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] font-extrabold text-[#120e2b] leading-[1.1] tracking-tight mb-6">
            ಗಣೇಶ ಚತುರ್ಥಿ – ವಿಘ್ನ ನಿವಾರಕನ ಆಗಮನದ ಆಧ್ಯಾತ್ಮಿಕ ಮಹತ್ವ
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-semibold text-gray-500 mb-8">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-[#E63E1A]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              September 12, 2026
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

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 mb-16 relative z-10">
        <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] ring-1 ring-gray-900/5 group">
          <img 
            src="/images/blog_imgs/12-09-26.webp" 
            alt="ಗಣೇಶ ಚತುರ್ಥಿ – ವಿಘ್ನ ನಿವಾರಕನ ಆಗಮನದ ಆಧ್ಯಾತ್ಮಿಕ ಮಹತ್ವ" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          Once a year, homes and streets across the country fill with the same quiet anticipation — clay idols being shaped by hand, modaks being steamed in kitchens, and a collective sense that something larger than a festival is about to begin. Ganesh Chaturthi isn't just a celebration of one of Hinduism's most beloved deities. It's a reminder, repeated every year with the same warmth, of why Ganapati is invoked before anything else is ever begun.
        </p>

        <h2>Why Ganapati Comes First</h2>
        <p>
          Every puja, every new venture, every important beginning in Hindu tradition opens with an invocation to Ganapati. This isn't ritual formality — it reflects his role as <strong>Vighnaharta</strong>, the remover of obstacles, and <strong>Vighnakarta</strong>, the one who can also place obstacles before those who act without humility or right intention. Ganesh Chaturthi marks the day he is believed to have been born to Parvati, and the festival essentially recreates that beginning each year — inviting the remover of obstacles into the home before undertaking the year ahead. The idea running underneath this is simple but profound: no path forward is free of hurdles, but with the right invocation and right intention, those hurdles become passable.
        </p>

        <h2>Sthapana: Inviting the Divine Home</h2>
        <p>
          The heart of the festival is the <strong>sthapana</strong>, the ritual installation of the clay Ganapati idol in the home or pandal. Traditionally, this idol is shaped from natural clay, a detail that matters more than it might seem. The clay represents the earth itself, and the ritual holds that the deity's presence is invoked into this earthen form for the duration of the festival — anywhere from a day and a half to eleven days, depending on family and regional tradition. Daily puja during this period isn't a passive act of decoration; it involves aarti, offering of durva grass and red hibiscus, and the daily naivedya of modak, believed to be Ganapati's favorite offering. Each of these has its own symbolism — durva grass for humility and resilience, modak for the sweetness of wisdom earned through effort, since tradition holds that even Ganapati had to work to open the tightly wrapped sweet.
        </p>

        <h2>The Story Behind the Elephant Head</h2>
        <p>
          Few images in Hindu iconography carry as much layered meaning as Ganapati's form. The large ears are read as a reminder to listen more than to speak. The small eyes point to focus and discernment amid distraction. The large belly is described as the capacity to digest both the good and the difficult experiences of life without losing equanimity. The single tusk, broken and used as a writing implement by tradition to help sage Vyasa compose the Mahabharata, represents sacrifice in service of a larger purpose. None of this is decorative flourish — each feature was designed by tradition to be a teaching, meant to be reflected on every time a devotee sits before the idol.
        </p>

        <h2>Visarjana and the Lesson of Letting Go</h2>
        <p>
          The festival's most emotionally powerful moment comes at its end, not its start. <strong>Visarjana</strong>, the immersion of the idol in a river, lake, or the sea, marks Ganapati's return to his elemental form, dissolving back into the water and earth from which the clay was drawn. For many devotees, this is the hardest part of the festival — bidding farewell to a presence that has, for several days, felt genuinely at home among them. But this, too, is the deeper teaching folded into the celebration: nothing formed stays in that form forever, and true devotion isn't measured by how tightly something is held, but by the willingness to let it go with love and the promise, chanted at every visarjana, of "Ganapati bappa morya, pudhchya varshi lavkar ya" — come again soon next year.
        </p>

        <h2>A Festival That Brings Communities Together</h2>
        <p>
          Beyond its personal and spiritual dimension, Ganesh Chaturthi carries a strong communal thread, particularly in its public pandal celebrations. What began, in many regions, as a way of bringing people of different backgrounds together under a shared devotional purpose has grown into one of the largest collective festivals in the country — cultural programs, community meals, and processions that turn neighborhoods into shared spaces of celebration for the duration of the festival. The private sthapana at home and the public pandal down the street are, in this sense, two expressions of the same underlying idea: that obstacles, whether personal or collective, are best faced together.
        </p>

        <h2>Carrying the Festival Forward</h2>
        <p>
          In recent years, growing awareness of environmental impact has also shaped how the festival is observed, with many families and communities choosing natural clay idols and eco-friendly immersion practices over synthetic alternatives that can harm water bodies. This shift doesn't dilute the tradition — if anything, it reflects the same spirit the festival has always asked of its devotees: mindfulness, care, and respect for the elements that make the ritual possible in the first place.
        </p>

        <p>
          ಗಣಪತಿ ಬಪ್ಪ ಮೋರಯಾ, ಮಂಗಳಮೂರ್ತಿ ಮೋರಯಾ. ಪ್ರತಿ ವರ್ಷ ಬಪ್ಪನ ಆಗಮನ ನಮ್ಮ ಮನೆ ಮತ್ತು ಮನಸ್ಸಿನಲ್ಲಿ ಹೊಸ ಬೆಳಕನ್ನು, ಹೊಸ ಆರಂಭವನ್ನು ತರಲಿ.
        </p>

        <div className="mt-14 p-8 rounded-[20px] bg-gradient-to-br from-[#FF5A3C]/10 to-[#E63E1A]/5 border border-[#E63E1A]/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E63E1A]/20 to-transparent rounded-bl-full pointer-events-none"></div>
          <h3 className="text-[24px] font-bold text-[#120e2b] mb-3 relative z-10">Discover More on NKR TV</h3>
          <p className="text-gray-600 mb-6 relative z-10 font-medium">
            Watch divine programs, learn about Karnataka's rich cultural heritage, and get enlightened through our regular broadcasts.
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
