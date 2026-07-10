import DotBackdrop from '../components/decor/DotBackdrop';

export default function GKQuestionsBlogPage() {
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
            25 Fascinating Questions to Boost Your General Knowledge
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
            src="/images/blog_imgs/gk.webp" 
            alt="General Knowledge Quiz" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="mx-auto w-full max-w-[1000px] px-6 pb-24 blog-content">
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium mb-10">
          How sharp is your general knowledge, really? Before you tune in to test yourself live on <strong>Super Kannadiga</strong>, warm up your brain with these 25 questions spanning Karnataka, India, history, science, and sports. See how many you can answer before checking the solutions below!
        </p>

        <div className="bg-blog-callout">
          <span className="callout-label">Broadcast Schedule</span>
          <p>
            Watch <strong>"Super Kannadiga"</strong> Every Evening at <strong>7:00 PM</strong> on <strong>NKR TV ಕನ್ನಡ</strong>.
          </p>
        </div>

        <h2>Karnataka & Culture</h2>
        <p><strong>1.</strong> What is the official state animal (ರಾಜ್ಯ ಪ್ರಾಣಿ) of Karnataka?<br/>
        <em>Answer: The Indian elephant (ಆನೆ).</em></p>
        
        <p><strong>2.</strong> Which river is known as the lifeline of Karnataka and flows through cities like Srirangapatna and Mysuru?<br/>
        <em>Answer: The Kaveri River.</em></p>
        
        <p><strong>3.</strong> Who composed the Karnataka state anthem "Jaya Bharata Jananiya Tanujate"?<br/>
        <em>Answer: Kuvempu (Kuppali Venkatappa Puttappa).</em></p>
        
        <p><strong>4.</strong> Which Karnataka dynasty is credited with building the UNESCO-listed monuments at Pattadakal and Aihole?<br/>
        <em>Answer: The Chalukyas of Badami.</em></p>
        
        <p><strong>5.</strong> What is the traditional Karnataka finger-millet dish typically eaten with saaru or curd?<br/>
        <em>Answer: Ragi Mudde.</em></p>

        <h2>India — History & Geography</h2>
        <p><strong>6.</strong> Who is known as the "Father of the Indian Constitution"?<br/>
        <em>Answer: Dr. B.R. Ambedkar.</em></p>
        
        <p><strong>7.</strong> Which is the longest river entirely within India?<br/>
        <em>Answer: The Godavari River.</em></p>
        
        <p><strong>8.</strong> In which year did India gain independence from British rule?<br/>
        <em>Answer: 1947.</em></p>
        
        <p><strong>9.</strong> Which Mughal emperor built the Taj Mahal, and in whose memory?<br/>
        <em>Answer: Shah Jahan, in memory of his wife Mumtaz Mahal.</em></p>
        
        <p><strong>10.</strong> What is the highest civilian award in India?<br/>
        <em>Answer: The Bharat Ratna.</em></p>

        <h2>World & Science</h2>
        <p><strong>11.</strong> Which planet in our solar system is known as the "Red Planet"?<br/>
        <em>Answer: Mars.</em></p>
        
        <p><strong>12.</strong> What is the chemical symbol for gold?<br/>
        <em>Answer: Au.</em></p>
        
        <p><strong>13.</strong> Who developed the theory of general relativity?<br/>
        <em>Answer: Albert Einstein.</em></p>
        
        <p><strong>14.</strong> What is the largest ocean on Earth?<br/>
        <em>Answer: The Pacific Ocean.</em></p>
        
        <p><strong>15.</strong> Which gas do plants absorb from the atmosphere during photosynthesis?<br/>
        <em>Answer: Carbon dioxide (CO₂).</em></p>

        <h2>Sports</h2>
        <p><strong>16.</strong> How many players are there on the field for one cricket team during a match?<br/>
        <em>Answer: 11 players.</em></p>
        
        <p><strong>17.</strong> In which country were the first modern Olympic Games held, in 1896?<br/>
        <em>Answer: Greece (Athens).</em></p>
        
        <p><strong>18.</strong> Who is widely regarded as one of the greatest cricketers of all time, holding the record for most international centuries?<br/>
        <em>Answer: Sachin Tendulkar.</em></p>
        
        <p><strong>19.</strong> How many rings are there in the Olympic symbol, and what do they represent?<br/>
        <em>Answer: 5 rings, representing the five inhabited continents.</em></p>
        
        <p><strong>20.</strong> In football (soccer), how many players from each team are on the field at one time?<br/>
        <em>Answer: 11 players.</em></p>

        <h2>Mixed Bag</h2>
        <p><strong>21.</strong> What is the national bird of India?<br/>
        <em>Answer: The Indian Peacock.</em></p>
        
        <p><strong>22.</strong> Which is the smallest planet in our solar system?<br/>
        <em>Answer: Mercury.</em></p>
        
        <p><strong>23.</strong> Who wrote India's national anthem, "Jana Gana Mana"?<br/>
        <em>Answer: Rabindranath Tagore.</em></p>
        
        <p><strong>24.</strong> What is the currency of Japan?<br/>
        <em>Answer: The Japanese Yen.</em></p>
        
        <p><strong>25.</strong> How many continents are there on Earth?<br/>
        <em>Answer: 7 continents.</em></p>

        <h2>How Did You Score?</h2>
        <ul>
          <li><strong>20-25 correct</strong> — You're already Super Kannadiga material! 🏆</li>
          <li><strong>12-19 correct</strong> — Solid GK, but there's room to sharpen up before showtime.</li>
          <li><strong>Below 12</strong> — No worries, that's exactly what our quiz nights are for!</li>
        </ul>

        <h2>Final Thoughts</h2>
        <p>
          General knowledge is a muscle — the more you exercise it, the sharper it gets. If you enjoyed testing yourself here, imagine the thrill of doing it live, on camera, with real cash prizes on the line. Join <strong>Super Kannadiga</strong>, every evening at 7:00 PM, Monday to Friday, only on NKR TV ಕನ್ನಡ, and put your knowledge to the ultimate test.
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
