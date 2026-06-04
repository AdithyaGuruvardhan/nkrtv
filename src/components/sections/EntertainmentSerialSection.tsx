import { useState, useRef } from 'react';

type SerialItem = {
  id: string;
  youtubeId: string;
  title: string;
  subtitle: string;
  tags: string[];
  meta: string[];
};

const serials: SerialItem[] = [
  {
    id: '1',
    youtubeId: 'ohwMhi7F2UU',
    title: 'Panchamaveda',
    subtitle: 'PROMO | EPISODE 15',
    tags: ['U/A', 'Promo', 'YouTube'],
    meta: ['Devotional', 'Spiritual', 'Promo'],
  },
  {
    id: '2',
    youtubeId: 'mMLehox1aOI',
    title: 'Panchamaveda',
    subtitle: 'PROMO | EPISODE 14',
    tags: ['U/A', 'Promo', 'YouTube'],
    meta: ['Spiritual', 'Devotional', 'Promo'],
  },
  {
    id: '3',
    youtubeId: 'qwL_-SaAur0',
    title: 'Panchamaveda',
    subtitle: 'PROMO',
    tags: ['U/A', 'Promo', 'YouTube'],
    meta: ['Devotional', 'Promo', 'Series'],
  },
  {
    id: '4',
    youtubeId: 'imiO6BjfpiA',
    title: 'Panchamaveda',
    subtitle: 'PROMO | EPISODE 12',
    tags: ['U/A', 'Promo', 'YouTube'],
    meta: ['Spiritual', 'Promo', 'Series'],
  },
  {
    id: '5',
    youtubeId: 'FrQMSLH8Jy4',
    title: 'Panchamaveda',
    subtitle: 'PROMO | EPISODE 11',
    tags: ['U/A', 'Promo', 'YouTube'],
    meta: ['Devotional', 'Promo', 'Series'],
  },
];

const aparoopadaSerials: SerialItem[] = [
  {
    id: '1',
    youtubeId: 'bVo9goe_qAo',
    title: 'Aparoopada Sunday Promo',
    subtitle: 'Aparoopada Athithigalu Sunday promo from NKR TV Kannada.',
    tags: ['U/A', 'Promo', 'YouTube'],
    meta: ['TOP 5', '01'],
  },
  {
    id: '2',
    youtubeId: 'GyjceLPpHm8',
    title: 'Aparoopada Saturday Promo',
    subtitle: 'Aparoopada Athithigalu Saturday promo from NKR TV Kannada.',
    tags: ['U/A', 'Promo', 'YouTube'],
    meta: ['TOP 5', '02'],
  },
  {
    id: '3',
    youtubeId: 'doVsx0Ra01o',
    title: 'Aparoopada Sunday Promo',
    subtitle: 'Aparoopada Athithigalu Sunday promo from NKR TV Kannada.',
    tags: ['U/A', 'Promo', 'YouTube'],
    meta: ['TOP 5', '03'],
  },
  {
    id: '4',
    youtubeId: 'e5ALXcgfLjU',
    title: 'Aparoopada Saturday Promo',
    subtitle: 'Aparoopada Athithigalu Saturday promo from NKR TV Kannada.',
    tags: ['U/A', 'Promo', 'YouTube'],
    meta: ['TOP 5', '04'],
  },
  {
    id: '5',
    youtubeId: 'oQYvgbo74Wg',
    title: 'Aparoopada Episode 01',
    subtitle: 'Aparoopada Athithigalu episode 01 from NKR TV Kannada.',
    tags: ['U/A', 'Promo', 'YouTube'],
    meta: ['TOP 5', '05'],
  },
];

type ModalState = SerialItem | null;

type SerialRowProps = {
  eyebrow?: string;
  title?: string;
  description?: string | JSX.Element;
  playlistLabel?: string;
  items: SerialItem[];
  onPlay: (item: SerialItem) => void;
  hideHeader?: boolean;
  hideControls?: boolean;
  mobileControlsOnly?: boolean;
};

function SerialRow({
  eyebrow,
  title,
  description,
  playlistLabel,
  items,
  onPlay,
  hideHeader,
  hideControls,
  mobileControlsOnly,
}: SerialRowProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    if (scrollWidth <= clientWidth) return;
    const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
    const dotIndex = Math.round(scrollPercentage * (items.length - 1));
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
    <div className="mb-10 relative z-10">
      {!hideHeader && (
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[500px]">
            <div className="mb-2 text-[11px] font-bold uppercase tracking-[3px] text-[#E63E1A]">
              {eyebrow}
            </div>
            <h2 className="mb-3 text-[54px] font-extrabold leading-[1.1]">
              <span className="bg-gradient-to-r from-[#E63E1A] to-[#B21F1F] bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
            <div className="mb-5 h-[2px] w-10 bg-[#E63E1A]" />
            <p className="text-[14px] leading-[1.6] text-[#6b6680]">
              {description}
            </p>
          </div>
          <button
            type="button"
            className="group flex items-center gap-2 rounded-full border border-[#E63E1A] bg-white px-6 py-2.5 text-[13px] font-semibold text-[#E63E1A] transition-all duration-300 hover:bg-[#E63E1A] hover:text-white"
          >
            {playlistLabel}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      )}

      <div className="relative mt-8">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-10 pt-16"
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className="relative w-[85vw] shrink-0 snap-start sm:w-[300px] md:w-[320px] lg:w-[calc(20%-19.2px)]"
            >
              <div className="pointer-events-none absolute -left-2 -top-14 z-0 select-none text-[110px] font-black leading-none text-[#F4E5D4]/80">
                {index + 1}
              </div>

              <div className="group relative z-10 flex h-full flex-col overflow-hidden rounded-[16px] border border-[#F0E6D6] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F4D3CA] hover:shadow-[0_12px_30px_rgba(230,62,26,0.1)]">
                <div
                  className="relative aspect-video w-full cursor-pointer overflow-hidden bg-[#111]"
                  onClick={() => onPlay(item)}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-3 top-3 z-10 rounded-[4px] bg-[#E63E1A] px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
                    Promo
                  </div>

                  <div className="absolute right-3 top-3 z-10 rounded-[4px] bg-[#E63E1A] px-2 py-1 text-center text-[9px] font-bold leading-[1.2] text-white shadow-sm">
                    TOP<br />5
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
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-[#FCECE6] px-3 py-1 text-[10px] font-bold text-[#E63E1A]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-2 text-[10px] font-medium text-[#6b6680]">
                    {item.meta.map((meta, metaIndex) => (
                      <div key={meta} className="flex items-center gap-2">
                        <span>{meta}</span>
                        {metaIndex < item.meta.length - 1 && <span className="h-[3px] w-[3px] rounded-full bg-[#6b6680]/50" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {!hideControls && (
        <div className={`${mobileControlsOnly ? 'mt-5 flex items-center justify-center gap-5 md:hidden' : 'mt-6 flex items-center justify-center gap-6'}`}>
          <button
            type="button"
            onClick={() => scrollTrack('left')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E63E1A] bg-white text-[#E63E1A] transition-colors hover:bg-[#E63E1A] hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {!mobileControlsOnly && (
            <div className="flex items-center gap-2.5">
              {Array.from({ length: items.length }).map((_, dot) => (
                <div
                  key={dot}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    activeDot === dot ? 'bg-[#E63E1A]' : 'bg-[#FCECE6]'
                  }`}
                />
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={() => scrollTrack('right')}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E63E1A] bg-white text-[#E63E1A] transition-colors hover:bg-[#E63E1A] hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default function EntertainmentSerialSection() {
  const [modal, setModal] = useState<ModalState>(null);

  const openModal = (item: SerialItem) => {
    setModal(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModal(null);
    document.body.style.overflow = '';
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#fffdf9] py-14">
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
        <SerialRow
          eyebrow="ENTERTAINMENT"
          title="Fictional Stories"
          description={
            <>
              Dive into gripping stories, unforgettable characters,
              <br className="hidden sm:block" />
              and emotions that stay with you.
            </>
          }
          playlistLabel="View All Serials"
          items={serials}
          onPlay={openModal}
          hideControls={false}
          mobileControlsOnly
        />

        <SerialRow
          eyebrow="SERIAL"
          title="Aparoopada Athithigalu"
          description="A fresh lineup of promos, episodes, and highlights from NKR TV Kannada."
          playlistLabel="View Full Playlist →"
          items={aparoopadaSerials}
          onPlay={openModal}
          hideHeader
          hideControls={false}
          mobileControlsOnly
        />

        {/* Monument bg image */}
        <div className="relative z-10 mt-6 -mx-4 sm:-mx-6 lg:-mx-10">
          <img
            src="/images/aryamba-6.webp"
            alt=""
            className="block w-full h-[200px] sm:h-[240px] lg:h-[280px] object-cover object-bottom -mt-6 sm:-mt-8 lg:-mt-10"
          />
        </div>
      </div>

      {/* Video Modal */}
      {modal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(0,0,0,0.9)] p-4"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="relative h-[min(78vh,720px)] w-[min(1200px,96vw)] overflow-hidden rounded-[12px] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
            <div className="absolute left-0 right-0 top-0 z-[2] flex items-center justify-between gap-3 bg-gradient-to-b from-[rgba(0,0,0,0.85)] to-transparent px-4 py-3">
              <p className="max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold text-white">
                Now playing: {modal.title} | {modal.subtitle}
              </p>
              <button
                type="button"
                onClick={closeModal}
                className="rounded-full bg-[rgba(255,255,255,0.15)] px-3 py-1.5 font-bold text-white hover:bg-[rgba(255,255,255,0.25)]"
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
