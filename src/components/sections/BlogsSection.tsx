import { useState, useEffect } from 'react';

const blogs = [
  {
    id: '18',
    image: '/images/blog_imgs/17-08-26.png',
    category: 'Spiritual',
    date: 'August 17, 2026',
    headline: 'ಅನಂತ ದರ್ಶನ: ದೇವರ ದರ್ಶನ ಮಾತ್ರವಲ್ಲ, ಕ್ಷೇತ್ರದರ್ಶನ ಏಕೆ ಮುಖ್ಯ?',
    excerpt: 'The real experience, the one that lingers long after the visit ends, is kshetra darshan — the act of experiencing the entire sacred site, not just its sanctum.',
    readTime: '5 min read',
    link: '/blog/ananta-darshan',
  },
  {
    id: '17',
    image: '/images/blog_imgs/06-08-26.webp',
    category: 'Devotion',
    date: 'August 7, 2026',
    headline: 'ಭಕ್ತಿಯಿಂದ ನಾರಾಯಣೀಯಂ ಪಾರಾಯಣ ಮಾಡುವುದರಿಂದ ಸಿಗುವ ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರಯೋಜನಗಳು',
    excerpt: 'Discover the spiritual benefits of regular Narayaneeyam parayana and how it settles the mind.',
    readTime: '5 min read',
    link: '/blog/narayaneeyam-spiritual-benefits',
  },
  {
    id: '16',
    image: '/images/blog_imgs/nkr_shows.webp',
    category: 'Entertainment',
    date: 'July 10, 2026',
    headline: '4 Popular Programs You Must Watch on NKR TV',
    excerpt: 'Here\'s a quick roundup of 4 popular programs on NKR TV Kannada that viewers keep coming back to.',
    readTime: '5 min read',
    link: '/blog/4-popular-nkr-shows',
  },
  {
    id: '15',
    image: '/images/blog_imgs/temple_ritual.webp',
    category: 'Spiritual',
    date: 'July 10, 2026',
    headline: '10 Rules to Follow When Visiting a Temple',
    excerpt: 'Let\'s go through 10 simple rules that help make your next temple visit more meaningful.',
    readTime: '5 min read',
    link: '/blog/temple-rules-10',
  },
  {
    id: '14',
    image: '/images/blog_imgs/pitru_paksha.webp',
    category: 'Spiritual',
    date: 'July 10, 2026',
    headline: 'The Significance of Pitru Paksha and Its Scripturally Prescribed Rituals',
    excerpt: 'Understand why this period holds deep significance, and what the scriptures prescribe.',
    readTime: '5 min read',
    link: '/blog/pitru-paksha-significance',
  },
  {
    id: '13',
    image: '/images/blog_imgs/ka_20.webp',
    category: 'Facts',
    date: 'July 10, 2026',
    headline: '20 Facts Every Kannadiga Should Know About Karnataka',
    excerpt: 'How well do you really know your own state? Here are 20 facts about Karnataka every Kannadiga should know.',
    readTime: '5 min read',
    link: '/blog/karnataka-facts-20',
  },
  {
    id: '12',
    image: '/images/blog_imgs/gk.webp',
    category: 'Quiz & General Knowledge',
    date: 'July 10, 2026',
    headline: '25 Fascinating Questions to Boost Your General Knowledge',
    excerpt: 'Test your knowledge spanning Karnataka, India, history, science, and sports before tuning into Super Kannadiga.',
    readTime: '6 min read',
    link: '/blog/gk-questions-boost',
  },
  {
    id: '11',
    image: '/images/blog_imgs/spices.webp',
    category: 'Culinary Heritage',
    date: 'July 10, 2026',
    headline: 'The Health Benefits of Rock Salt, Jaggery, and Traditional Ingredients',
    excerpt: 'Look at why these traditional ingredients have stayed a part of our kitchens for generations.',
    readTime: '5 min read',
    link: '/blog/traditional-ingredients-health-benefits',
  },
  {
    id: '10',
    image: '/images/blog_imgs/swaada_sambrama_blog.webp',
    category: 'Culinary Heritage',
    date: 'July 10, 2026',
    headline: 'The Speciality of Karnataka\'s Traditional Cuisine',
    excerpt: 'Explore what truly makes Karnataka\'s traditional cooking so distinctive.',
    readTime: '6 min read',
    link: '/blog/karnataka-traditional-cuisine',
  },
  {
    id: '9',
    image: '/images/blog_imgs/purandara.webp',
    category: 'Music & Culture',
    date: 'July 10, 2026',
    headline: 'The Significance of Purandara Dasa\'s Keertanas',
    excerpt: 'Discover why the work of the Pitamaha of Carnatic music still matters centuries later.',
    readTime: '7 min read',
    link: '/blog/purandara-dasa-keertanas',
  },
  {
    id: '8',
    image: '/images/blog_imgs/temples.webp',
    category: 'Culture & Heritage',
    date: 'July 10, 2026',
    headline: '10 Wonderful Ancient Temples of Karnataka',
    excerpt: 'Join us on a sacred journey through 10 of Karnataka\'s most remarkable ancient temples.',
    readTime: '8 min read',
    link: '/blog/karnataka-ancient-temples-10',
  },
  {
    id: '7',
    image: '/images/blog_imgs/narayaneeyam_wts_tat.webp',
    category: 'Devotion',
    date: 'July 10, 2026',
    headline: 'What Is Narayaneeyam? Its Significance and the Fruits of Parayana',
    excerpt: 'Learn about the remarkable story behind Narayaneeyam and the benefits of regular recitation.',
    readTime: '5 min read',
    link: '/blog/what-is-narayaneeyam-significance',
  },
  {
    id: '6',
    image: '/images/blog_imgs/bhagavad_gita_2.webp',
    category: 'Spirituality',
    date: 'July 10, 2026',
    headline: 'A Summary of All 18 Chapters of the Bhagavad Gita',
    excerpt: 'Walk through all 18 chapters of the Gita in simple terms.',
    readTime: '10 min read',
    link: '/blog/bhagavad-gita-18-chapters-summary',
  },
  {
    id: '5',
    image: '/images/blog_imgs/bhagavad_gita.webp',
    category: 'Spirituality',
    date: 'July 10, 2026',
    headline: 'How the Bhagavad Gita Can Transform Your Life',
    excerpt: 'Discover how the timeless wisdom of the Gita can reshape your life.',
    readTime: '5 min read',
    link: '/blog/bhagavad-gita-transform-life',
  },
  {
    id: '4',
    image: '/images/blog_imgs/narayaneeyam_blog.webp',
    category: 'Devotion',
    date: 'July 3, 2026',
    headline: 'Narayaneeyam (ನಾರಾಯಣೀಯಂ)',
    excerpt: 'A Divine Journey of Bhakti, Wisdom & Lord Krishna\'s Stories on NKR TV.',
    readTime: '5 min read',
    link: '/blog/narayaneeyam-divine-journey',
  },
  {
    id: '1',
    image: '/images/blog_imgs/why_nkr_blog.webp',
    category: 'Updates',
    date: 'May 28, 2025',
    headline: 'Why NKR Kannada Channel',
    excerpt: 'NKR TV Kannada: Boundless empowerment entertaining Kannadans culture and heritage.',
    readTime: '5 min read',
    link: '/blog/why-nkr-kannada-channel',
  },
  {
    id: '2',
    image: '/images/blog_imgs/nkr_specialities_blog.webp',
    category: 'Insights',
    date: 'May 18, 2025',
    headline: 'NKR Specialities',
    excerpt: 'Explore our takes on cultural programming with authentic storytelling.',
    readTime: '6 min read',
    link: '/blog/nkr-specialities',
  },
  {
    id: '3',
    image: '/images/blog_imgs/note_ceo_nkr_blog.webp',
    category: 'Leadership',
    date: 'May 10, 2025',
    headline: 'A note from CEO',
    excerpt: 'NKR TV delivers exclusive content that informs, inspires, and empowers viewers.',
    readTime: '4 min read',
    link: '/blog/a-note-from-ceo',
  },
];


export default function BlogsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 640 ? 4 : 6);
    };
    handleResize(); // Initialize on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  // Ensure current page remains valid after resizing
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const currentBlogs = blogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const PaginationControls = () => (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-[38px] w-[38px] items-center justify-center rounded-full border-[1.5px] border-[#F4D3CA] bg-white text-[#E63E1A] transition-colors hover:border-[#E63E1A] hover:bg-[#FCECE6] disabled:opacity-50 disabled:hover:border-[#F4D3CA] disabled:hover:bg-white"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      
      {Array.from({ length: totalPages }).map((_, idx) => (
        <button
          key={idx}
          type="button"
          onClick={() => goToPage(idx + 1)}
          className={`flex h-[38px] w-[38px] items-center justify-center rounded-full text-[14px] font-bold transition-all duration-300 ${
            currentPage === idx + 1
              ? 'bg-[#E63E1A] text-white shadow-md'
              : 'border-[1.5px] border-[#F4D3CA] bg-white text-[#E63E1A] hover:bg-[#FCECE6]'
          }`}
        >
          {idx + 1}
        </button>
      ))}

      <button
        type="button"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-[38px] w-[38px] items-center justify-center rounded-full border-[1.5px] border-[#F4D3CA] bg-white text-[#E63E1A] transition-colors hover:border-[#E63E1A] hover:bg-[#FCECE6] disabled:opacity-50 disabled:hover:border-[#F4D3CA] disabled:hover:bg-white"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );

  return (
    <section className="blogs-section relative w-full overflow-hidden bg-[#fffdf9] py-16">
      <style>{`
        @media (max-width: 639px) {
          .blogs-section {
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .blogs-section .blogs-shell {
            padding-left: 16px;
            padding-right: 16px;
          }

          .blogs-section .blogs-header {
            gap: 18px;
          }

          .blogs-section .blogs-kicker {
            font-size: 11px;
            letter-spacing: 0.22em;
          }

          .blogs-section .blogs-title {
            font-size: 30px;
            line-height: 1.08;
            margin-bottom: 10px;
          }

          .blogs-section .blogs-divider {
            margin-bottom: 14px;
          }

          .blogs-section .blogs-subtitle {
            font-size: 14px;
          }

          .blogs-section .blogs-carousel {
            margin-top: 24px;
          }

          .blogs-section .blogs-card-image {
            height: 170px;
          }

          .blogs-section .blogs-card-body {
            padding: 16px;
          }

          .blogs-section .blogs-card-title {
            font-size: 17px;
            margin-bottom: 10px;
          }

          .blogs-section .blogs-card-excerpt {
            font-size: 13px;
            margin-bottom: 18px;
          }

          .blogs-section .blogs-card-footer {
            padding-top: 16px;
          }

          .blogs-section .blogs-nav {
            margin-top: 24px;
            gap: 14px;
          }
        }
      `}</style>
      {/* Decorative Dotted Patterns */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[500px] opacity-60"
        style={{
          backgroundImage: 'radial-gradient(#F4D3CA 2px, transparent 2px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(circle at top right, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at top right, black 30%, transparent 80%)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] opacity-60"
        style={{
          backgroundImage: 'radial-gradient(#F4D3CA 2px, transparent 2px)',
          backgroundSize: '24px 24px',
          maskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)',
        }}
      />

      <div className="blogs-shell relative z-10 mx-auto w-full max-w-[1510px] px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="blogs-header flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[600px]">
            <div className="blogs-kicker mb-2 text-[12px] font-bold uppercase tracking-[3px] text-[#E63E1A]">
              BLOGS
            </div>
            <h2 className="blogs-title mb-3 text-[54px] font-extrabold leading-[1.1]">
              <span className="bg-gradient-to-r from-[#E63E1A] to-[#B21F1F] bg-clip-text text-transparent">
                Insights & Updates
              </span>
            </h2>
            <div className="blogs-divider mb-5 h-[3px] w-[60px] bg-[#E63E1A]" />
            <p className="blogs-subtitle text-[15px] font-medium leading-[1.6] text-gray-500">
              Stay informed with the latest stories, announcements, and perspectives.
            </p>
          </div>
          
          <div className="hidden md:flex shrink-0 items-center gap-4">
            <PaginationControls />
          </div>
        </div>

        {/* Grid Area */}
        <div className="blogs-carousel relative mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-3 pb-8 justify-items-center">
            {currentBlogs.map((blog) => (
              <div key={blog.id} className="relative w-full max-w-[380px] sm:max-w-none">
                <a href={blog.link || '#'} className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(230,62,26,0.1)] block">
                  
                  {/* Image Container */}
                  <div className="blogs-card-image relative h-[220px] w-full shrink-0 overflow-hidden bg-gray-100">
                    <img
                      src={blog.image}
                      alt={blog.headline}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Top Right Tag - Kept right side data */}
                    <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-[6px] bg-white px-3 py-1.5 text-[11px] font-bold text-[#E63E1A] shadow-sm">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {blog.date}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="blogs-card-body flex flex-1 flex-col p-6">
                    <h3 className="blogs-card-title mb-3 text-[20px] font-bold leading-[1.3] text-[#120e2b] transition-colors group-hover:text-[#E63E1A]">
                      {blog.headline}
                    </h3>
                    <p className="blogs-card-excerpt mb-6 line-clamp-2 text-[14px] leading-relaxed text-gray-500">
                      {blog.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="blogs-card-footer mt-auto flex items-center justify-between border-t border-gray-100 pt-5">
                      <div className="flex items-center gap-2 text-[13px] font-bold text-[#E63E1A]">
                        <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#E63E1A] text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3.5 w-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </div>
                        Read More
                      </div>
                      
                      <div className="flex items-center gap-1.5 text-[12px] font-semibold text-gray-400">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        {blog.readTime}
                      </div>
                    </div>
                  </div>

                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation Controls */}
        <div className="blogs-nav mt-2 flex items-center justify-center gap-5">
          <PaginationControls />
        </div>

      </div>
    </section>
  );
}
