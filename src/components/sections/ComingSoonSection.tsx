import { useRef } from 'react';

type Program = {
  title: string;
  image: string;
};

const programs: Program[] = [
  {
    title: 'ಸ್ವಾದ ಸಂಭ್ರಮ',
    image: 'https://nkrtv.in/wp-content/uploads/2026/05/NKR-ADS-POSTERS.png',
  },
  {
    title: 'ಸೂಪರ್ ಕನ್ನಡಿಗ',
    image: 'https://nkrtv.in/wp-content/uploads/2026/05/NKR-ADS-POSTERS-1.png',
  },
];

export default function ComingSoonSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <section className="-mt-px bg-white py-8 pb-14">
      <div className="mx-auto w-full max-w-[1510px] px-4 sm:px-6 lg:px-10">
        <div className="rounded-[26px] border border-[#ead5b3] bg-[#fbf7ea] px-4 py-6 shadow-[0_10px_30px_rgba(88,44,6,0.06)] sm:px-6 sm:py-7">
          {/* Section Header */}
          <div className="mb-6">
            <h2 className="mb-2 text-[28px] md:text-[36px] font-black text-[#1a0a00]">
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
        </div>
      </div>
    </section>
  );
}
