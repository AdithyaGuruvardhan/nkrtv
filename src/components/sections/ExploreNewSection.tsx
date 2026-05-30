import { useRef, useState } from 'react';

type BadgeInfo = {
  text: string;
  variant: 'solid' | 'outline';
  bgColor?: string;
  textColor?: string;
};

type ExploreCard = {
  title: string;
  video: string;
  badges: BadgeInfo[];
};

const cards: ExploreCard[] = [
  {
    title: 'Cini Yaana PROMO',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/Ciniyaana_PROMO_A_New_Kannada_Short_Film_Every_Day_Mon_Fri_1_PM_Only_on_NKRTV_Kannada_720P.mp4',
    badges: [
      { text: 'Promo', variant: 'solid', bgColor: '#FF5A3C', textColor: '#fff' },
      { text: 'Featured', variant: 'outline', bgColor: '#fff', textColor: '#FF5A3C' },
      { text: 'New', variant: 'solid', bgColor: '#E63E1A', textColor: '#fff' },
    ],
  },
  {
    title: 'BISFF 2025 Highlights',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/bisff.mp4',
    badges: [
      { text: 'Highlights', variant: 'solid', bgColor: '#FF5A3C', textColor: '#fff' },
      { text: 'New', variant: 'solid', bgColor: '#E63E1A', textColor: '#fff' },
    ],
  },
  {
    title: 'ಕಾಂತಾರ 1 ಪ್ರೀಮಿಯರ್ ಶೋ ಗೆ ವಿಶೇಷ ಅತಿಥಿಯಾಗಿ...',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/1_superstar_NTR_cininews_480P.mp4',
    badges: [
      { text: 'Cine News', variant: 'solid', bgColor: '#FF5A3C', textColor: '#fff' },
      { text: 'Hot', variant: 'solid', bgColor: '#E63E1A', textColor: '#fff' },
    ],
  },
  {
    title: 'ನನ್ನ ಕಥೆ, ನನ್ನ ಸಿನಿಮಾ ತೋರಿಸ್ತೀನಿ ಅಂದ ಎನೊ...',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/Dr_Cinema_EP-70_NKR_TV_144P.mp4',
    badges: [
      { text: 'Dr Cinema', variant: 'solid', bgColor: '#FF5A3C', textColor: '#fff' },
      { text: 'EP 70', variant: 'solid', bgColor: '#E63E1A', textColor: '#fff' },
    ],
  },
  {
    title: 'ಉಪವಾಸ ಫಲ ಒಂದು ವರ್ಷ? ಮಂಗಳೂರ್ಚೀ...',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/Dharma_Jyothi_EP-149_NKR_TV_Kannada_144P.mp4',
    badges: [
      { text: 'Dharma', variant: 'solid', bgColor: '#FF5A3C', textColor: '#fff' },
      { text: 'EP 149', variant: 'solid', bgColor: '#E63E1A', textColor: '#fff' },
    ],
  },
];

type ModalState = { src: string; title: string } | null;

function Card({
  card,
  onOpen,
}: {
  card: ExploreCard;
  onOpen: (src: string, title: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    hoverTimer.current = setTimeout(() => {
      const vid = videoRef.current;
      if (!vid) return;
      vid.play().catch(() => {});
    }, 200);
  };

  const handleMouseLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    const vid = videoRef.current;
    if (!vid) return;
    vid.pause();
    vid.currentTime = 0;
  };

  const leftBadges = card.badges.length === 3 ? card.badges.slice(0, 2) : [card.badges[0]];
  const rightBadge = card.badges[card.badges.length - 1];

  return (
    <div
      className="group relative flex-[0_0_80vw] snap-center overflow-hidden rounded-[16px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(76,34,177,0.15)] sm:flex-[0_0_45vw] md:flex-[0_0_30vw] lg:flex-[0_0_22vw] xl:min-w-[260px] xl:flex-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image / Video area */}
      <div
        className="relative h-[200px] w-full cursor-pointer overflow-hidden bg-[#111]"
        onClick={() => onOpen(card.video, card.title)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(card.video, card.title); }}
      >
        {/* Top-left badges */}
        <div className="absolute left-3 top-3 z-[5] flex gap-2">
          {leftBadges.map((badge) => (
            <span
              key={badge.text}
              className={`rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.3px] ${
                badge.variant === 'outline' ? 'border border-[#FF5A3C] bg-white text-[#FF5A3C]' : ''
              }`}
              style={badge.variant === 'solid' ? { backgroundColor: badge.bgColor, color: badge.textColor } : {}}
            >
              {badge.text}
            </span>
          ))}
        </div>

        {/* Top-right badge */}
        {rightBadge && leftBadges[leftBadges.length - 1]?.text !== rightBadge.text && (
          <div className="absolute right-3 top-3 z-[5]">
            <span
              className="rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.3px] text-white"
              style={{ backgroundColor: rightBadge.bgColor }}
            >
              {rightBadge.text}
            </span>
          </div>
        )}

        {/* Video thumbnail */}
        <video
          ref={videoRef}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loop
          muted
          playsInline
          preload="metadata"
          src={card.video}
        />
      </div>

      {/* Card info */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <h3 className="mb-5 line-clamp-2 min-h-[44px] text-[16px] font-extrabold leading-snug text-[#120e2b]">
          {card.title}
        </h3>
        <button
          type="button"
          aria-label={`Play ${card.title}`}
          onClick={() => onOpen(card.video, card.title)}
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#e0e8f4] bg-white text-[#FF5A3C] transition-all duration-200 hover:border-[#FF5A3C] hover:bg-[#FF5A3C] hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-4 w-4">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function VideoModal({ modal, onClose }: { modal: ModalState; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  if (!modal) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(0,0,0,0.88)] p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative h-[56vh] w-[96vw] overflow-hidden rounded-[12px] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.8)] md:h-[min(78vh,720px)] md:w-[min(1200px,96vw)]"
        role="dialog"
        aria-modal="true"
      >
        <div className="absolute left-0 right-0 top-0 z-[2] flex items-center justify-between gap-3 bg-gradient-to-b from-[rgba(0,0,0,0.85)] to-transparent px-4 py-3">
          <p className="max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold text-white">
            Now playing: {modal.title}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-[rgba(255,255,255,0.12)] px-3 py-2 font-bold text-white hover:bg-[rgba(255,255,255,0.18)]"
          >
            ✕
          </button>
        </div>
        <video
          ref={videoRef}
          className="block h-full w-full bg-black object-contain"
          controls
          autoPlay
          playsInline
          preload="none"
          src={modal.src}
        />
      </div>
    </div>
  );
}

export default function ExploreNewSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [modal, setModal] = useState<ModalState>(null);

  const getScrollStep = () => {
    const track = trackRef.current;
    if (!track) return 300;
    const card = track.children[0] as HTMLElement;
    if (!card) return 300;
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
    setActiveDot(Math.min(index, cards.length - 1));
  };

  const openModal = (src: string, title: string) => {
    setModal({ src, title });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModal(null);
    document.body.style.overflow = '';
  };

  return (
    <>
      <section className="bg-white py-14">
        <div className="mx-auto w-full px-4 md:px-8 lg:w-[90vw] lg:max-w-[90vw] lg:px-0">

          {/* Header */}
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[5px] text-[#FF5A3C]">
                E X P L O R E
              </p>
              <div className="relative inline-block pb-2">
                <h2 className=" text-[36px] font-bold leading-tight text-[#120e2b] md:text-[42px] lg:text-[52px]">
                  New On{' '}
                  <span className="bg-gradient-to-r from-[#FF5A3C] to-[#BD2E8B] bg-clip-text text-transparent">NKRTV</span>
                </h2>
              </div>
              <p className="mt-4 max-w-[500px] text-[15px] font-medium leading-relaxed text-[#4b485f]">
                Stay updated with our latest shows, episodes, and exclusive content<br className="hidden sm:block" />
                freshly added for you.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {}}
              className="group flex w-max items-center gap-3 rounded-full border border-[#FF5A3C] px-7 py-3 text-[14px] font-semibold text-[#FF5A3C] transition-all duration-300 hover:bg-[#FF5A3C] hover:text-white"
            >
              View All Content
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          {/* Carousel */}
          <div className="relative">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollTrack('left')}
              className="absolute -left-5 top-[45%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#FF5A3C] text-white shadow-[0_4px_12px_rgba(255,90,60,0.3)] transition-transform hover:scale-105 lg:-left-14"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <div
              ref={trackRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto scroll-smooth py-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory xl:snap-none"
            >
              {cards.map((card, index) => (
                <Card key={`${card.title}-${index}`} card={card} onOpen={openModal} />
              ))}
            </div>

            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollTrack('right')}
              className="absolute -right-5 top-[45%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#FF5A3C] text-white shadow-[0_4px_12px_rgba(255,90,60,0.3)] transition-transform hover:scale-105 lg:-right-14"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {cards.map((_, idx) => (
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
                  activeDot === idx ? 'bg-[#FF5A3C]' : 'bg-[#ffe8e3]'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {modal && <VideoModal modal={modal} onClose={closeModal} />}
    </>
  );
}
