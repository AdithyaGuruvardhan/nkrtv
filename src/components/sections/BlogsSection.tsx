import { useState, useRef } from 'react';

const blogs = [
  {
    id: '1',
    image: 'https://nkrtv.in/wp-content/uploads/2026/02/NKR-TV-blog-thumbnails-2.jpg',
    category: 'Updates',
    date: 'May 28, 2025',
    headline: 'Why NKR Kannada Channel',
    excerpt: 'NKR TV Kannada: Boundless empowerment entertaining Kannadans culture and heritage.',
    readTime: '5 min read',
  },
  {
    id: '2',
    image: 'https://nkrtv.in/wp-content/uploads/2026/02/NKR-TV-blog-thumbnails-1.jpg',
    category: 'Insights',
    date: 'May 18, 2025',
    headline: 'NKR Specialities',
    excerpt: 'Explore our takes on cultural programming with authentic storytelling.',
    readTime: '6 min read',
  },
  {
    id: '3',
    image: 'https://nkrtv.in/wp-content/uploads/2026/02/NKR-TV-blog-thumbnails.jpg',
    category: 'Leadership',
    date: 'May 10, 2025',
    headline: 'A note from CEO',
    excerpt: 'NKR TV delivers exclusive content that informs, inspires, and empowers viewers.',
    readTime: '4 min read',
  },
];

export default function BlogsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    if (scrollWidth <= clientWidth) return;
    const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
    const dotIndex = Math.round(scrollPercentage * (blogs.length - 1));
    setActiveDot(dotIndex);
  };

  const scrollTrack = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    const scrollAmount = trackRef.current.clientWidth * 0.8;
    trackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#fffdf9] py-20">
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

      <div className="relative z-10 mx-auto w-full max-w-[1510px] px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[600px]">
            <div className="mb-2 text-[12px] font-bold uppercase tracking-[3px] text-[#E63E1A]">
              BLOGS
            </div>
            <h2 className="mb-3  text-[54px] font-extrabold leading-[1.1]">
              <span className="bg-gradient-to-r from-[#E63E1A] to-[#B21F1F] bg-clip-text text-transparent">
                Insights & Updates
              </span>
            </h2>
            <div className="mb-5 h-[3px] w-[60px] bg-[#E63E1A]" />
            <p className="text-[15px] font-medium leading-[1.6] text-gray-500">
              Stay informed with the latest stories, announcements, and perspectives.
            </p>
          </div>
          
          <button
            type="button"
            className="flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#FF5A3C] to-[#D42200] px-7 py-3 text-[14px] font-bold text-white shadow-[0_4px_15px_rgba(230,62,26,0.25)] transition-transform hover:scale-105"
          >
            View All Blogs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        {/* Carousel Area */}
        <div className="relative mt-12">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-10 pt-4"
          >
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="relative w-[85vw] shrink-0 snap-start sm:w-[320px] md:w-[350px] lg:w-[calc(33.333%-16px)]"
              >
                <div className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(230,62,26,0.1)]">
                  
                  {/* Image Container - This strictly matches the design: fills full width, top half */}
                  <div className="relative h-[220px] w-full shrink-0 overflow-hidden bg-gray-100">
                    <img
                      src={blog.image}
                      alt={blog.headline}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Dark Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Top Left Tag */}
                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-[6px] bg-[#E63E1A] px-3 py-1.5 text-[11px] font-bold text-white shadow-sm backdrop-blur-md">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="2" />
                      </svg>
                      {blog.category}
                    </div>

                    {/* Top Right Tag */}
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
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-3 text-[20px] font-bold leading-[1.3] text-[#120e2b] transition-colors group-hover:text-[#E63E1A]">
                      {blog.headline}
                    </h3>
                    <p className="mb-6 line-clamp-2 text-[14px] leading-relaxed text-gray-500">
                      {blog.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-5">
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

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-2 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={() => scrollTrack('left')}
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-[1.5px] border-[#F4D3CA] bg-white text-[#E63E1A] transition-colors hover:border-[#E63E1A] hover:bg-[#FCECE6]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          
          <div className="flex items-center gap-2">
            {blogs.map((_, dot) => (
              <div
                key={dot}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  activeDot === dot ? 'bg-[#E63E1A]' : 'bg-[#F4D3CA]'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollTrack('right')}
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-[1.5px] border-[#F4D3CA] bg-white text-[#E63E1A] transition-colors hover:border-[#E63E1A] hover:bg-[#FCECE6]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
