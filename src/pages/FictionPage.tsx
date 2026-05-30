import { useState, useRef } from 'react';

type VideoItem = {
  id: string;
  videoId: string;
  pill: string;
  headline: string;
  desc: string;
  duration: string;
};

type SerialItem = {
  videoId: string;
  episodeNo: string;
  title: string;
  desc: string;
  tags: string[];
};

type Section = {
  title: string;
  eyebrow: string;
  playlistUrl: string;
  type: 'grid' | 'carousel';
  gridItems?: VideoItem[];
  carouselItems?: SerialItem[];
};

const sections: Section[] = [
  {
    title: 'Dear Moments',
    eyebrow: 'Short Film',
    playlistUrl: 'https://youtube.com/playlist?list=PLCm_kBZi_HdUTnWncfuMeDuPDX4NnCtaG',
    type: 'grid',
    gridItems: [
      { id: '1', videoId: 't7V8PxAA1PY', pill: 'EPISODE 01', headline: 'Dear Moments Ep01', desc: 'Heartfelt stories that connect, inspire and stay with you.', duration: '24 min' },
      { id: '2', videoId: '4VxHPm1z8ME', pill: 'EPISODE 02', headline: 'Dear Moments Ep02', desc: 'Real moments. Raw emotions. True connections.', duration: '22 min' },
      { id: '3', videoId: 'a2D-2zJyZBk', pill: 'EPISODE 03', headline: 'Dear Moments Ep03', desc: 'Stories that reflect life, love and everything in between.', duration: '26 min' },
    ],
  },
  {
    title: 'Mooruvare Neetigalu',
    eyebrow: 'Serial',
    playlistUrl: 'https://youtube.com/playlist?list=PLps63nPL1fp9mtrz3MYMx61lfydIjRdvs',
    type: 'grid',
    gridItems: [
      { id: '1', videoId: 'rltBtJw6ULM', pill: 'EPISODE 01', headline: 'Mooruvare Neetigalu Ep01', desc: 'A journey of love, values and life lessons.', duration: '28 min' },
      { id: '2', videoId: '2xxcxQvNCGc', pill: 'EPISODE 02', headline: 'Mooruvare Neetigalu Ep02', desc: 'Conversations that change perspectives forever.', duration: '30 min' },
      { id: '3', videoId: 'BGL0pptUdNU', pill: 'EPISODE 03', headline: 'Mooruvare Neetigalu Ep03', desc: 'Family, values and the bonds that make us.', duration: '25 min' },
    ],
  },
  {
    title: 'Panchamaveda',
    eyebrow: 'Serial',
    playlistUrl: 'https://youtube.com/playlist?list=PLIAyJHDGMBfDKq1JnQztQFHYdDM4bWcoj',
    type: 'carousel',
    carouselItems: [
      { videoId: 'ohwMhi7F2UU', episodeNo: '15', title: 'Panchamaveda Episode 15', desc: 'Promo from NKR TV Kannada for Panchamaveda episode 15.', tags: ['U/A', 'Promo', 'YouTube'] },
      { videoId: 'mMLehox1aOI', episodeNo: '14', title: 'Panchamaveda Episode 14', desc: 'Promo from NKR TV Kannada for Panchamaveda episode 14.', tags: ['U/A', 'Promo', 'YouTube'] },
      { videoId: 'qwL_-SaAur0', episodeNo: '13', title: 'Panchamaveda Episode 13', desc: 'Promo from NKR TV Kannada for Panchamaveda episode 13.', tags: ['U/A', 'Promo', 'YouTube'] },
      { videoId: 'imiO6BjfpiA', episodeNo: '12', title: 'Panchamaveda Episode 12', desc: 'Promo from NKR TV Kannada for Panchamaveda episode 12.', tags: ['U/A', 'Promo', 'YouTube'] },
      { videoId: 'FrQMSLH8Jy4', episodeNo: '11', title: 'Panchamaveda Episode 11', desc: 'Promo from NKR TV Kannada for Panchamaveda episode 11.', tags: ['U/A', 'Promo', 'YouTube'] },
    ],
  },
  {
    title: 'Aparoopada Athithigalu',
    eyebrow: 'Serial',
    playlistUrl: '#',
    type: 'carousel',
    carouselItems: [
      { videoId: 'bVo9goe_qAo', episodeNo: '01', title: 'Aparoopada Sunday Promo', desc: 'Aparoopada Athithigalu Sunday promo from NKR TV Kannada.', tags: ['U/A', 'Promo', 'YouTube'] },
      { videoId: 'GyjceLPpHm8', episodeNo: '02', title: 'Aparoopada Saturday Promo', desc: 'Aparoopada Athithigalu Saturday promo from NKR TV Kannada.', tags: ['U/A', 'Promo', 'YouTube'] },
      { videoId: 'doVsx0Ra01o', episodeNo: '03', title: 'Aparoopada Sunday Promo', desc: 'Aparoopada Athithigalu Sunday promo from NKR TV Kannada.', tags: ['U/A', 'Promo', 'YouTube'] },
      { videoId: 'e5ALXcgfLjU', episodeNo: '04', title: 'Aparoopada Saturday Promo', desc: 'Aparoopada Athithigalu Saturday promo from NKR TV Kannada.', tags: ['U/A', 'Promo', 'YouTube'] },
      { videoId: 'oQYvgbo74Wg', episodeNo: '05', title: 'Aparoopada Episode 01', desc: 'Aparoopada Athithigalu episode 01 from NKR TV Kannada.', tags: ['U/A', 'Promo', 'YouTube'] },
    ],
  },
];

export default function FictionPage() {
  const [modalVid, setModalVid] = useState<{ id: string; title: string } | null>(null);

  const openModal = (id: string, title: string) => {
    setModalVid({ id, title });
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setModalVid(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="min-h-screen pt-[90px] pb-20 "
      style={{ background: 'linear-gradient(180deg,#fff9f6 0%,#fff4ee 50%,#fff9f6 100%)' }}>

      {/* Page Header — matches original HTML nkr-mz-header */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 pt-10 pb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-start gap-6">
          {/* Clapperboard icon box */}
          <div className="w-[68px] h-[68px] rounded-[18px] flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(230,62,26,0.1)', border: '1px solid rgba(230,62,26,0.15)' }}>
            <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#E63E1A">
              <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" />
              <path d="M2 8H22M6 4L4 8M10 4L8 8M14 4L12 8M18 4L16 8" stroke="#fff4f0" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[13px] font-extrabold tracking-[0.15em] uppercase" style={{ color: '#E63E1A' }}>Short Films &amp; Serials</p>
            <h1 className=" text-[42px] md:text-[46px] font-extrabold leading-[1.1] text-[#1a0a00]">
              Experience Our Stories
            </h1>
            <p className="text-[15px] mt-1" style={{ color: '#6e5a55' }}>Engaging series that entertain, inform and inspire.</p>
          </div>
        </div>
        <a href="#"
          className="inline-flex items-center gap-3 rounded-full px-7 py-3 text-sm font-bold transition-all duration-200 flex-shrink-0"
          style={{ border: '1.5px solid #E63E1A', color: '#E63E1A', background: 'transparent' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#E63E1A'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#E63E1A'; }}>
          View All Serials
          <svg viewBox="0 0 24 24" className="w-4 h-4" stroke="currentColor" strokeWidth={2.5} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>
      </div>

      {/* Dot pattern decoration */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] pointer-events-none -z-0"
          style={{
            backgroundImage: 'radial-gradient(circle,rgba(230,62,26,0.15) 2px,transparent 2.5px)',
            backgroundSize: '26px 26px',
            WebkitMaskImage: 'radial-gradient(circle at top right,black 20%,transparent 70%)',
            maskImage: 'radial-gradient(circle at top right,black 20%,transparent 70%)',
          }} />

        {sections.map((section) => (
          <SectionBlock key={section.title} section={section} onPlay={openModal} />
        ))}
      </div>

      {/* Modal */}
      {modalVid && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
          style={{ background: 'rgba(10,3,0,0.92)' }}
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="relative w-full max-w-[1100px] rounded-2xl overflow-hidden bg-black shadow-[0_30px_90px_rgba(0,0,0,0.8)]"
            style={{ height: 'min(76vh,720px)' }}>
            <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between gap-3 px-4 py-3"
              style={{ background: 'linear-gradient(to bottom,rgba(0,0,0,0.85),transparent)' }}>
              <p className="text-white text-sm font-bold truncate max-w-[80%]">Now playing: {modalVid.title}</p>
              <button onClick={closeModal}
                className="rounded-full px-3 py-1.5 text-white font-black text-sm bg-white/15 hover:bg-white/25 transition-colors">✕</button>
            </div>
            <iframe
              className="w-full h-full border-none"
              src={`https://www.youtube.com/embed/${modalVid.id}?autoplay=1&rel=0`}
              title="Video player"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}

function SectionBlock({ section, onPlay }: { section: Section; onPlay: (id: string, title: string) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector<HTMLElement>('[data-card]');
    const gap = 18;
    const step = card ? card.getBoundingClientRect().width + gap : 280;
    trackRef.current.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <div className="mb-16 relative z-10">
      {/* Row Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: 'rgba(230,62,26,0.12)' }}>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#E63E1A">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] font-extrabold tracking-[0.15em] uppercase" style={{ color: '#E63E1A' }}>{section.eyebrow}</p>
            <h2 className=" text-2xl md:text-3xl font-extrabold text-[#1a0a00]">{section.title}</h2>
          </div>
        </div>
        <a href={section.playlistUrl} target="_blank" rel="noopener noreferrer"
          className="text-sm font-bold px-4 py-2 rounded-full transition-colors"
          style={{ background: 'rgba(230,62,26,0.1)', color: '#E63E1A' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(230,62,26,0.2)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(230,62,26,0.1)')}>
          View Full Playlist →
        </a>
      </div>

      {/* Grid (3-col) */}
      {section.type === 'grid' && section.gridItems && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.gridItems.map((item) => (
            <GridCard key={item.id} item={item} onPlay={onPlay} />
          ))}
        </div>
      )}

      {/* Carousel (5-col) */}
      {section.type === 'carousel' && section.carouselItems && (
        <div className="relative px-10 md:px-11">
          <button onClick={() => scroll('left')}
            className="absolute left-0 top-1/3 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
            style={{ background: 'linear-gradient(180deg,#fff4f0,#ffe8e0)', color: '#E63E1A' }}>
            <svg viewBox="0 0 24 24" className="w-4 h-4" stroke="currentColor" strokeWidth={2.5} fill="none" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div ref={trackRef}
            className="grid gap-[18px] overflow-x-auto pb-4"
            style={{
              gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}>
            {section.carouselItems.map((item) => (
              <CarouselCard key={item.videoId} item={item} onPlay={onPlay} />
            ))}
          </div>

          <button onClick={() => scroll('right')}
            className="absolute right-0 top-1/3 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
            style={{ background: 'linear-gradient(180deg,#fff4f0,#ffe8e0)', color: '#E63E1A' }}>
            <svg viewBox="0 0 24 24" className="w-4 h-4" stroke="currentColor" strokeWidth={2.5} fill="none" strokeLinecap="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

function GridCard({ item, onPlay }: { item: VideoItem; onPlay: (id: string, title: string) => void }) {
  return (
    <div
      data-card
      onClick={() => onPlay(item.videoId, item.headline)}
      className="group bg-white rounded-xl overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{
        border: '1px solid rgba(230,62,26,0.1)',
        boxShadow: '0 4px 16px rgba(230,62,26,0.06)',
        minHeight: 360,
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 16px 40px rgba(230,62,26,0.14)')}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(230,62,26,0.06)')}>
      {/* Thumbnail */}
      <div className="relative w-full overflow-hidden bg-black" style={{ height: 210 }}>
        <img
          src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
          alt={item.headline}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(0,0,0,0.3)' }}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: '#E63E1A', boxShadow: '0 4px 16px rgba(230,62,26,0.5)' }}>
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <span className="self-start text-[10px] font-extrabold tracking-wider rounded-full px-3 py-1.5 mb-3 uppercase"
          style={{ color: '#E63E1A', background: 'rgba(230,62,26,0.1)' }}>
          {item.pill}
        </span>
        <h3 className="text-[17px] font-extrabold text-[#1a0a00] leading-snug mb-2 line-clamp-2">{item.headline}</h3>
        <p className="text-[13px] text-[#6e5a55] leading-relaxed line-clamp-3">{item.desc}</p>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="inline-flex items-center gap-1.5 px-4 h-8 rounded-full text-white text-sm font-bold"
            style={{ background: '#E63E1A', boxShadow: '0 4px 12px rgba(230,62,26,0.35)' }}>
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            Play
          </div>
          <span className="text-sm font-bold" style={{ color: '#D52912' }}>{item.duration}</span>
        </div>
      </div>
    </div>
  );
}

function CarouselCard({ item, onPlay }: { item: SerialItem; onPlay: (id: string, title: string) => void }) {
  return (
    <article
      data-card
      onClick={() => onPlay(item.videoId, item.title)}
      className="group relative flex flex-col rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 pb-1.5"
      style={{
        minWidth: 180,
        background: 'linear-gradient(180deg,#fff9f6 0%,#fff 100%)',
        border: '1px solid rgba(230,62,26,0.12)',
        boxShadow: '0 4px 16px rgba(230,62,26,0.06)',
        paddingBottom: 0,
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 16px 40px rgba(230,62,26,0.14)')}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 16px rgba(230,62,26,0.06)')}>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 z-10"
        style={{ background: 'linear-gradient(90deg,#E63E1A,#D52912)' }} />

      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-t-[10px]" style={{ height: 150, background: '#fde8e2' }}>
        <img
          src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        {/* Badges */}
        <span className="absolute top-2.5 left-2.5 z-20 text-[10px] font-extrabold text-white rounded-full px-2.5 py-1"
          style={{ background: 'linear-gradient(180deg,#E63E1A,#c42d0f)' }}>Promo</span>
        <span className="absolute top-2.5 right-2.5 z-20 w-10 h-10 rounded-full flex flex-col items-center justify-center bg-white/95 text-[9px] font-extrabold leading-tight shadow-md"
          style={{ color: '#E63E1A' }}>
          <span>TOP</span><span className="text-[13px]">5</span>
        </span>
        {/* Accent bar under thumb */}
        <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ background: '#E63E1A' }} />
        {/* Play button floating */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 z-20 w-9 h-9 rounded-full flex items-center justify-center shadow-lg"
          style={{ background: 'linear-gradient(180deg,#E63E1A,#c42d0f)', boxShadow: '0 8px 18px rgba(230,62,26,0.3)' }}>
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white ml-0.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-3 pt-6 pb-4">
        <div className="flex items-start gap-2">
          <span className="text-5xl font-extrabold leading-none tracking-tight flex-shrink-0"
            style={{ color: 'rgba(230,62,26,0.12)', lineHeight: '0.9' }}>{item.episodeNo}</span>
          <h3 className="text-[15px] font-extrabold text-[#1a0a00] leading-snug mt-1">{item.title}</h3>
        </div>
        <p className="text-[12px] text-[#6e5a55] leading-relaxed mt-2 line-clamp-3" style={{ minHeight: 52 }}>{item.desc}</p>

        {/* Watch row */}
        <div className="mt-3 flex items-center gap-2 text-sm font-bold" style={{ color: '#E63E1A' }}>
          <span className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(180deg,#E63E1A,#c42d0f)', boxShadow: '0 6px 14px rgba(230,62,26,0.25)' }}>
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-white ml-0.5"><polygon points="5 3 19 12 5 21 5 3" /></svg>
          </span>
          Watch Now
        </div>

        {/* Footer tags */}
        <div className="mt-3 pt-3 border-t flex items-center justify-between gap-2"
          style={{ borderColor: 'rgba(230,62,26,0.12)' }}>
          <div className="flex flex-wrap gap-1">
            {item.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded-md"
                style={{ background: 'rgba(230,62,26,0.08)', color: '#E63E1A' }}>{tag}</span>
            ))}
          </div>
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0 fill-[#E63E1A]">
            <path d="M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          </svg>
        </div>
      </div>
    </article>
  );
}
