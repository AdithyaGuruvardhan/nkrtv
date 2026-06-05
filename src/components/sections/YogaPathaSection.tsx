import { useState, useRef } from 'react';

type YogaItem = {
  id: string;
  youtubeId: string;
  title: string;
  subtitle: string;
  pill: string;
  duration: string;
  category: string;
};

const yogaItems: YogaItem[] = [
  {
    id: '1',
    youtubeId: 'GPqDn-IOmZA',
    title: 'Diagnose Yoga Patha',
    subtitle: 'Promo',
    pill: 'Promo',
    duration: '22:45',
    category: 'Promo',
  },
  {
    id: '2',
    youtubeId: 'RIARmtSMN_Q',
    title: 'Scoliosis Yoga Patha',
    subtitle: 'Highlights',
    pill: 'Featured',
    duration: '23:10',
    category: 'Highlights',
  },
  {
    id: '3',
    youtubeId: 'kgzgQEy05_g',
    title: 'ಸೂರ್ಯನಮಸ್ಕಾರದವನ್ನು ಎಷ್ಟು ನಿಮಿಷ ಮಾಡಬೇಕು',
    subtitle: 'New',
    pill: 'Highlights',
    duration: '21:30',
    category: 'New',
  },
  {
    id: '4',
    youtubeId: 'vQZOlBnbXv0',
    title: 'Yoga Patha',
    subtitle: 'Promo',
    pill: 'Promo',
    duration: '22:05',
    category: 'Promo',
  },
  {
    id: '5',
    youtubeId: 'xoU1dBvpV0c',
    title: 'ಯೋಗದಿಂದ ಡಯಾಬಿಟಿಸ್ ಗಾಗುವ ಪ್ರಯೋಜನಗಳೇನು?',
    subtitle: 'New',
    pill: 'New',
    duration: '21:15',
    category: 'New',
  },
];

type ModalState = YogaItem | null;

function getYouTubeThumbnail(youtubeId: string) {
  return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
}

export default function YogaPathaSection() {
  const [modal, setModal] = useState<ModalState>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    if (scrollWidth <= clientWidth) return;
    const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
    const dotIndex = Math.round(scrollPercentage * (yogaItems.length - 1));
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

  const openModal = (item: YogaItem) => {
    setModal(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModal(null);
    document.body.style.overflow = '';
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#fffdf9] py-16">
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
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[500px]">
            <div className="mb-2 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[3px] text-[#E63E1A]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-[1.5px] border-[#E63E1A]/30 bg-[#FCECE6]">
                <svg viewBox="0 0 24 24" fill="none" stroke="#E63E1A" strokeWidth="1.8" className="h-5 w-5">
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v5M9 12c-2 1.5-3 4-2 6M15 12c2 1.5 3 4 2 6M9 18h6" />
                </svg>
              </div>
              YOGA
            </div>
            <h2 className="mb-3 text-[54px] font-extrabold leading-[1.1]">
              Yoga{' '}
              <span className="bg-gradient-to-r from-[#E63E1A] to-[#B21F1F] bg-clip-text text-transparent">
                Patha
              </span>
            </h2>
            <div className="mb-5 h-[4px] w-[60px] rounded-full bg-[#E63E1A]" />
            <p className="max-w-[440px] text-[15px] leading-[1.6] text-[#6b6680]">
              Discover simple and effective yoga practices to improve your health, flexibility and inner peace.
            </p>
          </div>
          <button
            type="button"
            className="group flex items-center gap-2 rounded-full border-2 border-[#E63E1A] bg-white px-7 py-3 text-[14px] font-bold text-[#E63E1A] transition-all duration-300 hover:bg-[#E63E1A] hover:text-white"
          >
            View All Yoga
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

        <div className="relative mt-6">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-8 pt-3"
          >
            {yogaItems.map((item) => (
              <div
                key={item.id}
                className="relative w-[85vw] shrink-0 snap-start sm:w-[280px] md:w-[300px] lg:w-[calc(20%-16px)]"
              >
                <div className="group relative z-10 flex h-full flex-col overflow-hidden rounded-[18px] border border-[#F0E6D6] bg-white shadow-[0_6px_24px_rgba(230,62,26,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F4D3CA] hover:shadow-[0_18px_48px_rgba(230,62,26,0.12)]">
                  <div
                    className="relative aspect-video w-full cursor-pointer overflow-hidden bg-[#111]"
                    onClick={() => openModal(item)}
                  >
                    <img
                      src={getYouTubeThumbnail(item.youtubeId)}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const image = e.currentTarget;
                        if (!image.src.includes('/hqdefault.jpg')) {
                          image.src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;
                        }
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    <div className="absolute left-3 top-3 z-10 rounded-full bg-[#E63E1A]/90 px-3 py-1 text-[10px] font-bold text-white shadow-sm backdrop-blur-md">
                      {item.pill}
                    </div>

                    <div className="absolute right-3 top-3 z-10 rounded-[6px] bg-[#E63E1A] px-2 py-1.5 text-center text-[10px] font-black leading-[1.2] tracking-wider text-white shadow-sm">
                      TOP
                      <br />
                      5
                    </div>

                    <div className="absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[2px] border-white bg-[#E63E1A] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-4 w-4">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-1 text-[16px] font-bold leading-[1.3] text-[#120e2b]">
                      {item.title}
                    </h3>
                    <h4 className="mb-4 text-[12px] font-bold text-[#E63E1A]">
                      {item.subtitle}
                    </h4>

                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#FCECE6] px-3 py-1 text-[10px] font-bold text-[#E63E1A]">
                        YouTube
                      </span>
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-2 text-[10px] font-medium text-[#6b6680]">
                      <div className="flex items-center gap-2">
                        <span>{item.duration}</span>
                        <span className="h-[3px] w-[3px] rounded-full bg-[#6b6680]/50" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span>{item.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-1 flex items-center justify-center gap-5">
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
            {yogaItems.map((_, dot) => (
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

      {modal && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[rgba(10,6,30,0.9)] p-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="relative h-[min(78vh,720px)] w-[min(1200px,96vw)] overflow-hidden rounded-[18px] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
            <div className="absolute left-0 right-0 top-0 z-[2] flex items-center justify-between gap-3 bg-gradient-to-b from-[rgba(0,0,0,0.85)] to-transparent px-4 py-3">
              <p className="max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap text-[14px] font-extrabold text-white">
                Now playing: {modal.title}
              </p>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full bg-[rgba(255,255,255,0.15)] px-3.5 py-2 text-[14px] font-black text-white hover:bg-[rgba(255,255,255,0.25)]"
              >
                ✕
              </button>
            </div>
            <iframe
              className="h-full w-full border-none"
              src={`https://www.youtube-nocookie.com/embed/${modal.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title="YouTube video player"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
