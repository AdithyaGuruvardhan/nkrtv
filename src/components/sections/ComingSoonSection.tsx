import { useRef, useState } from 'react';

type Program = {
  title: string;
  image: string;
  schedule: string;
};

const programs: Program[] = [
  {
    title: 'ಸ್ವಾದ ಸಂಭ್ರಮ',
    image: 'https://nkrtv.in/wp-content/uploads/2026/05/NKR-ADS-POSTERS.png',
    schedule: 'ಪ್ರತಿದಿನ ಮಧ್ಯಾಹ್ನ 01:00 ಗಂಟೆಗೆ',
  },
  {
    title: 'ಸೂಪರ್ ಕನ್ನಡಿಗ',
    image: 'https://nkrtv.in/wp-content/uploads/2026/05/NKR-ADS-POSTERS-1.png',
    schedule: 'ಪ್ರತಿದಿನ ಸಂಜೆ 06:30ಕ್ಕೆ',
  },
];

export default function ComingSoonSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeDot, setActiveDot] = useState(0);

  const getScrollStep = () => {
    const track = trackRef.current;
    if (!track) return 600;
    const card = track.children[0] as HTMLElement;
    if (!card) return 600;
    const gap = Number.parseFloat(getComputedStyle(track).gap || '24') || 24;
    return Math.round(card.getBoundingClientRect().width + gap);
  };

  const scrollTrack = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction === 'left' ? -getScrollStep() : getScrollStep(), behavior: 'smooth' });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / getScrollStep());
    setActiveDot(Math.min(index, programs.length - 1));
  };

  return (
    <section className="bg-white py-10 pb-14">
      <div className="mx-auto w-full max-w-[1510px] px-4 sm:px-6 lg:px-10">

        {/* Section Header */}
        <div className="mb-6">
          <h2 className="mb-2 text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#FF5A3C]">
            Coming Soon
          </h2>
          <div className="h-[3px] w-10 rounded-full bg-[#FF5A3C]" />
        </div>

        {/* Cards Carousel */}
        <div className="relative">
          {/* Left Arrow - mobile only */}
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollTrack('left')}
            className="absolute -left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#FF5A3C] shadow-md transition-transform hover:scale-105 lg:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex gap-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory lg:snap-none"
          >
            {programs.map((program, idx) => (
              <div
                key={idx}
                className="relative flex-[0_0_90vw] snap-center overflow-hidden rounded-[14px] sm:flex-[0_0_70vw] lg:flex-1"
              >
                {/* Poster image */}
                <img
                  src={program.image}
                  alt={program.title}
                  className="block h-full min-h-[220px] w-full object-cover sm:min-h-[280px] md:min-h-[340px]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.background = 'linear-gradient(135deg,#c0392b,#8e1a10)';
                  }}
                />
                {/* Schedule pill badge */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 rounded-full bg-white/90 px-5 py-2 text-[13px] font-semibold text-[#1a1a1a] shadow-md backdrop-blur-sm whitespace-nowrap">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-4 w-4 shrink-0 text-[#FF5A3C]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                    {program.schedule}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow - mobile only */}
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollTrack('right')}
            className="absolute -right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#FF5A3C] shadow-md transition-transform hover:scale-105 lg:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex justify-center gap-3">
          {programs.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => {
                const track = trackRef.current;
                if (!track) return;
                track.scrollTo({ left: idx * getScrollStep(), behavior: 'smooth' });
                setActiveDot(idx);
              }}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                activeDot === idx ? 'bg-[#FF5A3C]' : 'bg-[#e5e5e5]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
