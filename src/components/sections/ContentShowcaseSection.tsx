import { useEffect, useMemo, useRef, useState } from 'react';
import DotBackdrop from '../decor/DotBackdrop';

type ContentCard = {
  title: string;
  video: string;
  image: string;
  badge: string;
  badgeColor: string;
  numberColor: string;
};

const featureItems = [
  {
    title: 'LIVE TV',
    text: '24/7 live GEC in Kannada',
    color: '#6C2BD9',
    icon: <path d="M4 6h16v11H4V6zm2 2v7h12V8H6zm4.5 1.3v4.4l3.8-2.2-3.8-2.2zM9 20h6v-2H9v2z" />,
  },
  {
    title: 'NEWS & UPDATES',
    text: 'Stay updated with latest contents',
    color: '#F06A00',
    icon: <path d="M4 4h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4zm3 4h8V6H7v2zm0 4h10v-2H7v2zm0 4h7v-2H7v2z" />,
  },
  {
    title: 'QUALITY CONTENT',
    text: 'Engaging shows for every age group',
    color: '#D81B60',
    icon: <path d="m12 2.5 2.85 5.78 6.38.93-4.62 4.5 1.09 6.36L12 17.07l-5.7 3 1.09-6.36-4.62-4.5 6.38-.93L12 2.5z" />,
  },
  {
    title: 'COMMUNITY FOCUS',
    text: 'Stories that reflect our society',
    color: '#1D5CC8',
    icon: <path d="M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 2c-3.3 0-6 1.67-6 3.73V19h12v-2.27C14 14.67 11.3 13 8 13zm8 0c-.42 0-.83.03-1.23.1 1.34.97 2.23 2.25 2.23 3.63V19h5v-2.27C22 14.67 19.3 13 16 13z" />,
  },
  {
    title: 'GLOBAL REACH',
    text: 'Connecting Kannada audiences worldwide',
    color: '#2E9F42',
    icon: <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.93 9h-3.05a15.5 15.5 0 0 0-1.2-5.1A8.03 8.03 0 0 1 18.93 11zM12 4.04c.83 1.2 1.55 3.12 1.82 5H10.18c.27-1.88.99-3.8 1.82-5zM4.26 13h3.86c.11 1.78.5 3.42 1.1 4.75A8.03 8.03 0 0 1 4.26 13zm3.86-2H4.26A8.03 8.03 0 0 1 9.22 6.25 15.6 15.6 0 0 0 8.12 11zM12 19.96c-.83-1.2-1.55-3.12-1.82-5h3.64c-.27 1.88-.99 3.8-1.82 5zm2.78-2.21c.6-1.33.99-2.97 1.1-4.75h3.86a8.03 8.03 0 0 1-4.96 4.75z" />,
  },
];

const cards: ContentCard[] = [
  {
    title: 'DHARMA JYOTHI',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/videoplayback.mp4',
    image: '/images/popular_programs/dharma-jyothi.webp',
    badge: 'New Episode',
    badgeColor: '#FFC107',
    numberColor: '#FFC107',
  },
  {
    title: 'ANANTHA DARSHAANA',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/videoplayback-1.mp4',
    image: '/images/popular_programs/anantha-dharshana.webp',
    badge: 'New Season',
    badgeColor: '#FF5A3C',
    numberColor: '#FF5A3C',
  },
  {
    title: 'AGNI HOTHRA',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/2025_NKRTV_720P.mp4',
    image: '/images/popular_programs/agni-hothra.webp',
    badge: 'Recently Added',
    badgeColor: '#BD2E8B',
    numberColor: '#BD2E8B',
  },
  {
    title: 'SWADA SAMBHRAMA',
    video:
      'https://nkrtv.in/wp-content/uploads/2026/01/Dr._Cinema_PROMO_Behind-the-Scenes_Truths_of_Kannada_Film_Industry_Ganesh_Kasaragod_NKR_TV_1080P.mp4',
    image: '/images/popular_programs/swada-sambhrama.webp',
    badge: 'Trending',
    badgeColor: '#5B2D91',
    numberColor: '#5B2D91',
  },
  {
    title: 'DEAR MOMENTS',
    video: 'https://nkrtv.in/wp-content/uploads/2026/01/videoplayback-2.mp4',
    image: '/images/popular_programs/dear-moments.webp',
    badge: 'Top Pick',
    badgeColor: '#1D3FA3',
    numberColor: '#1D3FA3',
  },
];

function ShowcaseCard({
  card,
  index,
  onOpen,
}: {
  card: ContentCard;
  index: number;
  onOpen: (card: ContentCard) => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => { });
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  const cardNumber = useMemo(() => String(index + 1).padStart(2, '0'), [index]);

  return (
    <div
      className="carousel-card group/card relative w-full overflow-hidden rounded-[7px] bg-[#2a0303] shadow-[0_8px_22px_rgba(90,12,6,0.16)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(90,12,6,0.24)]"
      data-title={card.title}
      data-video={card.video}
    >
      <div
        className="relative aspect-[4/3] cursor-pointer overflow-hidden bg-[#1a0101]"
        onClick={() => onOpen(card)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onOpen(card);
          }
        }}
      >
        <div
          className="absolute left-0 top-0 z-[2] flex h-[34px] w-[38px] items-center justify-center rounded-br-[12px] text-center text-[15px] font-[900] tracking-[-0.5px] text-white"
          style={{ backgroundColor: card.numberColor }}
        >
          {cardNumber}
        </div>
        <div
          className="absolute left-[48px] top-[9px] z-[2] rounded-[20px] px-[9px] py-[4px] text-[9px] font-[800] uppercase tracking-[0.3px] text-white"
          style={{ backgroundColor: card.badgeColor }}
        >
          {card.badge}
        </div>
        <img
          src={card.image}
          alt={card.title}
          className="block h-full w-full object-cover object-center transition-opacity duration-300 group-hover/card:opacity-0"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
          loop
          muted
          playsInline
          preload="none"
          ref={videoRef}
        >
          <source src={card.video} type="video/mp4" />
        </video>
      </div>

      <div className="px-4 py-4 text-white">
        <div className="mb-1 text-[16px] font-[900] uppercase leading-tight text-[#FFD56A] drop-shadow sm:text-[18px]">
          {card.title}
        </div>
        <div className="text-[11px] font-[800] uppercase tracking-[0.5px] text-white/90">
          NKR TV KANNADA
        </div>
      </div>
    </div>
  );
}

export default function ContentShowcaseSection() {
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const [activeCard, setActiveCard] = useState<ContentCard | null>(null);

  useEffect(() => {
    const video = modalVideoRef.current;
    if (!video) return;

    if (activeCard) {
      video.src = activeCard.video;
      video.load();
      video.play().catch(() => { });
      document.body.style.overflow = 'hidden';
      return;
    }

    video.pause();
    video.removeAttribute('src');
    video.load();
    document.body.style.overflow = '';
  }, [activeCard]);

  useEffect(
    () => () => {
      document.body.style.overflow = '';
    },
    [],
  );

  return (
    <section className="relative bg-[#fffdf9] text-[#1a1a1a]">
      <DotBackdrop className="-top-24 -right-24 z-0 h-[360px] w-[360px] opacity-20" />
      <DotBackdrop className="bottom-[-40px] -left-24 z-0 h-[300px] w-[300px] opacity-12" />
      <div className="mx-auto w-full max-w-[1510px] px-4 py-6 sm:px-6 lg:px-10 lg:py-8">
        <div className="mb-5 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative flex items-center gap-3">
            <span className="h-7 w-[5px] rounded-full bg-[#B90D0D]" />
            <h2 className="text-[22px] font-[900] uppercase tracking-[-0.01em] text-[#161616] md:text-[28px]">
              Popular Programs
            </h2>
          </div>
          <a
            href="/"
            className="group flex items-center gap-3 text-[13px] font-[900] uppercase text-[#B90D0D] no-underline transition-colors hover:text-[#F05B19]"
          >
            <span>View All Programs</span>
            <span className="text-[24px] leading-none">›</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4">
          {cards.map((card, index) => (
            <ShowcaseCard key={card.title} card={card} index={index} onOpen={setActiveCard} />
          ))}
        </div>

        <div className="mt-7 grid gap-0 overflow-hidden rounded-[4px] border border-[#efe2dc] bg-white shadow-[0_8px_24px_rgba(90,12,6,0.06)] sm:grid-cols-2 lg:grid-cols-5">
          {featureItems.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-center gap-4 px-5 py-5 ${index < featureItems.length - 1 ? 'border-b border-[#efe2dc] lg:border-b-0 lg:border-r' : ''}`}
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white shadow-[0_6px_14px_rgba(0,0,0,0.12)]"
                style={{ background: item.color }}
              >
                <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current">
                  {item.icon}
                </svg>
              </div>
              <div>
                <h3 className="text-[14px] font-[900] uppercase" style={{ color: item.color }}>
                  {item.title}
                </h3>
                <p className="mt-1 text-[13px] font-medium leading-snug text-[#262626]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Monument bg image */}
        <div className="relative z-10 mt-12 -mx-4 sm:-mx-6 lg:-mx-10">
          <img
            src="/images/aryamba-4.webp"
            alt="Karnataka Monuments"
            className="block w-full h-[200px] sm:h-[240px] lg:h-[280px] object-cover object-bottom -mt-6 sm:-mt-8 lg:-mt-10"
          />
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[9999] items-center justify-center bg-[rgba(0,0,0,0.88)] p-[16px] ${activeCard ? 'flex' : 'hidden'
          }`}
        aria-hidden={!activeCard}
      >
        <div
          className="relative overflow-hidden rounded-[12px] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.8)] h-[56vh] w-[96vw] md:h-[min(78vh,720px)] md:w-[min(1200px,96vw)]"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <div className="absolute left-0 right-0 top-0 z-[2] flex items-center justify-between gap-[12px] bg-gradient-to-b from-[rgba(0,0,0,0.85)] to-[rgba(0,0,0,0.35)] px-[12px] py-[10px]">
            <div className="max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap text-[14px] font-[700] text-white">
              {activeCard ? `Now playing: ${activeCard.title}` : 'Now playing'}
            </div>
            <button
              className="cursor-pointer rounded-full border-none bg-[rgba(255,255,255,0.12)] px-[12px] py-[8px] font-[800] text-white hover:bg-[rgba(255,255,255,0.18)]"
              type="button"
              onClick={() => setActiveCard(null)}
            >
              ✕
            </button>
          </div>
          <video
            className="block h-full w-full bg-black object-contain"
            controls
            autoPlay
            playsInline
            preload="none"
            ref={modalVideoRef}
          />
        </div>
      </div>
    </section>
  );
}
