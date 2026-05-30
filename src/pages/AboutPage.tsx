const ACCENT = '#E63E1A';
const ACCENT_DARK = '#b02010';
const ACCENT_LIGHT = 'rgba(230,62,26,0.08)';
const INK = '#1a0a00';
const COPY = '#6e5a55';
const BORDER = 'rgba(230,62,26,0.12)';

type Profile = {
  img: string;
  name: string;
  quals: string;
  pill: string;
  bio: { icon: JSX.Element; text: JSX.Element }[];
  roles: { title: string; subtitle: string }[];
  quote: string;
};

const profiles: Profile[] = [
  {
    img: 'https://nkrtv.in/wp-content/uploads/2026/05/NKR-TV-blog-thumbnails-1.png',
    name: 'Dr. P. K. Govind',
    quals: 'B.E., M.I.E., LL.B., PhD.',
    pill: 'Engineer. Entrepreneur. Leader. Public Servant.',
    bio: [
      {
        icon: <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2.12-1.15V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />,
        text: <><strong>Dr. P. K. Govind</strong> is an engineer, entrepreneur, and public servant with a wide footprint across education, media, business, and politics in Karnataka.</>,
      },
      {
        icon: <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />,
        text: <>He founded Karthik Foundation, DDNK Private Limited, and NKR TV Kannada, and leads Kamala Schools and Colleges. Politically, he has contested from Corporation level to Independent MLA, and held senior roles in Congress and JDS.</>,
      },
      {
        icon: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />,
        text: <>At the heart of it all is a deep commitment to Kannada identity — most visibly through NKR TV Kannada, where he's working to put Kannadigas at the forefront of the entertainment industry.</>,
      },
    ],
    roles: [
      { title: 'Engineer', subtitle: 'with Excellence' },
      { title: 'Entrepreneur', subtitle: 'with Vision' },
      { title: 'Leader', subtitle: 'with Impact' },
      { title: 'Public Servant', subtitle: 'by Commitment' },
    ],
    quote: 'Driven by values. Focused on impact. Dedicated to a stronger Karnataka and a proud Kannada identity.',
  },
  {
    img: 'https://nkrtv.in/wp-content/uploads/2026/05/NKR-TV-blog-thumbnails-2.png',
    name: 'Smt. Rekha K Govind',
    quals: 'M.A., B.A., NTT. Diploma in French & Interior Design',
    pill: 'CEO of NKR TV. Visionary Leader. Empowering Change.',
    bio: [
      {
        icon: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />,
        text: <>Smt. Rekha K. Govind, CEO of NKR TV, is the driving force behind turning her <span style={{ color: ACCENT, fontWeight: 600 }}>father's vision</span> into reality.</>,
      },
      {
        icon: <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />,
        text: <>She oversees a <span style={{ color: ACCENT, fontWeight: 600 }}>wide portfolio</span> — schools, colleges, hospitals, and multiple businesses — while leading NKR TV's growth with hands-on dedication.</>,
      },
      {
        icon: <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" />,
        text: <>A BJP leader and Mahila Morcha Bengaluru Central District President, she actively <span style={{ color: ACCENT, fontWeight: 600 }}>champions young women</span> to be bold and confident.</>,
      },
      {
        icon: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />,
        text: <>Her vision for NKR TV is <span style={{ color: ACCENT, fontWeight: 600 }}>ambitious and inclusive</span> — a multi-language platform with Kannada at its core, also embracing Tulu and other regional voices.</>,
      },
    ],
    roles: [
      { title: 'CEO', subtitle: 'NKR TV' },
      { title: 'Visionary', subtitle: 'with Purpose' },
      { title: 'Leader', subtitle: 'with Impact' },
      { title: 'Change-maker', subtitle: 'by Calling' },
    ],
    quote: 'Building a platform that celebrates every voice — where Kannada culture shines and every story finds its audience.',
  },
];

const roleIcons = [
  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1115.6 12 3.6 3.6 0 0112 15.6z" />,
  <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm1 14.93V15h-2v1.93A8.001 8.001 0 014 12c0-4.07 3.06-7.44 7-7.93V6h2V4.07A8.001 8.001 0 0120 12a8.001 8.001 0 01-7 6.93z" />,
  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />,
  <path d="M12.5 2C6.81 2 2.12 6.44 2.01 12.13A10.5 10.5 0 0012.5 23c5.25 0 9.5-4.25 9.5-9.5S17.75 2 12.5 2zm-1 3.5c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3zM12 17a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />,
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full ">

      {/* Banner */}
      <section
        className="w-full text-center px-6 pt-[140px] pb-20"
        style={{ background: 'linear-gradient(135deg,#ba2015 0%,#e84310 55%,#f49911 100%)' }}>
        <p className="text-[12px] font-extrabold tracking-[0.25em] uppercase text-orange-200 mb-3">NKR TV KANNADA</p>
        <h1 className="font-extrabold text-white leading-tight mb-4"
          style={{ fontSize: 'clamp(36px,6vw,60px)'  }}>
          About Us
        </h1>
        <div className="mx-auto mb-5 h-[3px] w-16 rounded-full bg-white/40" />
        <p className="text-[16px] font-medium text-white/90 max-w-xl mx-auto">
          The visionaries behind NKR TV Kannada — building a platform rooted in culture, purpose and pride.
        </p>
      </section>

      {/* Profile Cards */}
      <div className="max-w-[1200px] mx-auto w-full px-5 py-20 flex flex-col gap-20">
        {profiles.map((p, pi) => (
          <div key={pi} className="flex flex-col gap-5">

            {/* Top: Image + Details */}
            <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-10 items-stretch">

              {/* Image column */}
              <div className="relative rounded-[20px] overflow-hidden min-h-[460px] md:min-h-[500px]"
                style={{ background: `linear-gradient(160deg,${ACCENT} 0%,${ACCENT_DARK} 100%)` }}>
                {/* Dot pattern top-left */}
                <div className="absolute top-0 left-0 w-36 h-36 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.2) 1.5px,transparent 1.5px)',
                    backgroundSize: '12px 12px',
                  }} />
                {/* Glow circle */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full pointer-events-none"
                  style={{ background: 'rgba(255,255,255,0.05)' }} />
                <img
                  src={p.img}
                  alt={p.name}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full object-cover object-bottom z-10"
                />
              </div>

              {/* Details column */}
              <div className="flex flex-col justify-center">
                <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: ACCENT }}>ABOUT</p>
                <h2 className="text-[42px] md:text-[50px] font-black leading-[1.1] mb-3"
                  style={{ color: INK  }}>
                  {p.name}
                </h2>
                <p className="text-lg font-medium mb-6" style={{ color: ACCENT }}>{p.quals}</p>

                {/* Pill */}
                <div className="self-start inline-flex items-center gap-3 rounded-full px-5 py-2 mb-8 text-sm font-medium text-white"
                  style={{ background: `linear-gradient(135deg,${ACCENT},${ACCENT_DARK})`, boxShadow: '0 4px 16px rgba(230,62,26,0.3)' }}>
                  <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white/20 flex-shrink-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </span>
                  {p.pill}
                </div>

                {/* Bio list */}
                <div className="flex flex-col">
                  {p.bio.map((item, i) => (
                    <div key={i}
                      className="flex items-start gap-5 py-5"
                      style={{
                        borderBottom: i < p.bio.length - 1 ? `1px solid ${BORDER}` : 'none',
                        paddingTop: i === 0 ? 0 : undefined,
                        paddingBottom: i === p.bio.length - 1 ? 0 : undefined,
                      }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: ACCENT_LIGHT }}>
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill={ACCENT}>
                          {item.icon}
                        </svg>
                      </div>
                      <p className="text-[14px] leading-relaxed" style={{ color: COPY }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom: Roles + Quote */}
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] rounded-[20px] overflow-hidden"
              style={{ background: ACCENT_LIGHT, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>

              {/* Roles */}
              <div className="flex flex-wrap items-center justify-center gap-y-5 px-8 py-7"
                style={{ background: `linear-gradient(135deg,${ACCENT},${ACCENT_DARK})` }}>
                {p.roles.map((role, ri) => (
                  <div key={ri}
                    className="flex flex-col items-center text-center px-6 relative"
                    style={{ borderRight: ri < p.roles.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 bg-white/15">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                        {roleIcons[ri % roleIcons.length]}
                      </svg>
                    </div>
                    <p className="text-[13px] font-bold text-white">{role.title}</p>
                    <p className="text-[11px] text-white/75 font-light">{role.subtitle}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="flex items-center gap-5 px-10 py-8">
                <span className="text-6xl leading-none self-start opacity-70 flex-shrink-0"
                  style={{ color: ACCENT  }}>"</span>
                <div className="flex-1">
                  <p className="text-[15px] leading-relaxed mb-4" style={{ color: INK }}>{p.quote}</p>
                  <span className="block text-right text-[22px]"
                    style={{ color: ACCENT  }}>
                    — {p.name}
                  </span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* ── Why Choose NKR TV ── */}
      <section className="w-full py-24 px-5" style={{ background: '#fff9f6' }}>
        <div className="max-w-[1200px] mx-auto">

          {/* Section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-4 text-[13px] font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: ACCENT }}>
              <span className="h-[2px] w-10 inline-block" style={{ background: 'rgba(230,62,26,0.35)' }} />
              WHY CHOOSE
              <span className="h-[2px] w-10 inline-block" style={{ background: 'rgba(230,62,26,0.35)' }} />
            </div>
            <h2 className="font-black uppercase leading-[1.1] mb-6"
              style={{
                fontSize: 'clamp(48px,8vw,80px)',
                letterSpacing: 2,
                background: `linear-gradient(135deg,${ACCENT},${ACCENT_DARK})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
              NKR TV
            </h2>
            <div className="inline-block px-10 py-5 rounded-full text-[15px] max-w-[800px] mx-auto"
              style={{ background: 'rgba(230,62,26,0.07)', color: COPY, border: '1px solid rgba(230,62,26,0.1)' }}>
              Transform your vision into reality with cutting-edge solutions, innovative thinking, and unmatched excellence.
            </div>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                icon: (
                  <>
                    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM9.5 13l2.5 3.01L14.5 12l4.5 6H5l4.5-6z" />
                    <path d="M8 8l-1 1 2.5 2.5L12 9l-1-1-1.5 1.5z" opacity=".5" />
                  </>
                ),
                title: 'Diverse Content Variety',
                text: 'Our platform offers a wide range of programming, from entertainment and health to legal insights and astrology, ensuring there\'s something for everyone to enjoy and learn from.',
                btn: 'Explore More',
              },
              {
                icon: (
                  <path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1l5 3V6L5 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z" />
                ),
                title: 'Positive Messaging',
                text: 'We deliver uplifting content that promotes positivity and creates a joyful viewing experience, inspiring and empowering our audience every day.',
                btn: 'Explore More',
              },
              {
                icon: (
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z" />
                ),
                title: 'Expert Insights',
                text: 'Each episode features knowledgeable hosts and experts who provide valuable advice, helping viewers navigate life with confidence and clarity.',
                btn: 'Explore More',
              },
            ].map((card, i) => (
              <div key={i} className="relative flex flex-col rounded-[20px] bg-white pt-[60px]"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>

                {/* Floating icon */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full flex items-center justify-center z-10"
                  style={{
                    background: `linear-gradient(135deg,${ACCENT},${ACCENT_DARK})`,
                    boxShadow: `0 0 0 6px rgba(230,62,26,0.2), 0 0 0 14px rgba(230,62,26,0.08)`,
                  }}>
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                    {card.icon}
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col px-8 pb-8 text-center">
                  <h3 className="text-[22px] font-extrabold mb-3 leading-snug"
                    style={{ color: ACCENT  }}>
                    {card.title}
                  </h3>
                  {/* Separator */}
                  <div className="relative w-16 h-[2px] mx-auto mb-5" style={{ background: 'rgba(230,62,26,0.25)' }}>
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                      style={{ background: ACCENT }} />
                  </div>
                  <p className="text-[14px] leading-[1.75]" style={{ color: COPY }}>{card.text}</p>
                </div>

                {/* Footer button */}
                <button className="flex items-center justify-center gap-3 py-[18px] text-sm font-medium text-white transition-opacity hover:opacity-90 rounded-b-[20px]"
                  style={{ background: `linear-gradient(135deg,${ACCENT},${ACCENT_DARK})` }}>
                  {card.btn}
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet the Visionaries ── */}
      <section className="w-full py-24 px-5 relative overflow-hidden"
        style={{
          backgroundColor: '#fffdf9',
          backgroundImage: `
            radial-gradient(circle at 100% 0%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%),
            radial-gradient(circle at 0% 100%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%),
            radial-gradient(circle, rgba(230,62,26,0.03) 2px, transparent 2px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 24px 24px',
          backgroundPosition: '0 0, 0 0, 12px 12px'
        }}>
        <div className="max-w-[900px] mx-auto relative z-10">
          
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 text-[13px] font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: ACCENT }}>
              MEET THE
            </div>
            <h2 className="font-black uppercase leading-[1.1] mb-6"
              style={{
                fontSize: 'clamp(48px,8vw,80px)',
                letterSpacing: 2,
                background: `linear-gradient(135deg,${ACCENT},${ACCENT_DARK})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
              VISIONARIES
            </h2>
            <div className="relative w-[100px] h-[2px] mx-auto mb-5" style={{ background: 'rgba(230,62,26,0.25)' }}>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                style={{ background: ACCENT }} />
            </div>
            <p className="text-[16px]" style={{ color: COPY }}>
              Exceptional leaders driving innovation and excellence
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                name: 'Dr. P. K. Govind',
                quals: 'B.E., M.I.E., LL.B., PhD.',
                img: 'https://nkrtv.in/wp-content/uploads/2026/05/NKR-TV-blog-thumbnails-4.png'
              },
              {
                name: 'Smt. Rekha K Govind',
                quals: 'M.A., B.A., NTT. DIPLOMA IN FRENCH, INTERIOR DESIGN',
                img: 'https://nkrtv.in/wp-content/uploads/2026/05/NKR-TV-blog-thumbnails-3.png'
              }
            ].map((vis, i) => (
              <div key={i} className="flex flex-col rounded-[24px] relative bg-white w-full max-w-[320px] mx-auto"
                style={{ boxShadow: '0 15px 40px rgba(0,0,0,0.08)' }}>
                
                {/* Photo Area */}
                <div className="relative rounded-t-[24px] flex justify-center items-end overflow-hidden pt-10 px-4"
                  style={{
                    background: `linear-gradient(135deg,${ACCENT},${ACCENT_DARK})`,
                    backgroundImage: `radial-gradient(rgba(255,255,255,0.15) 1.5px, transparent 1.5px)`,
                    backgroundSize: '10px 10px'
                  }}>
                  {/* Circle Behind Image */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[250px] aspect-square rounded-full z-0"
                    style={{ background: 'rgba(255,255,255,0.1)' }} />
                  <img src={vis.img} alt={vis.name} className="relative z-10 w-full max-w-[260px] h-auto object-contain object-bottom rounded-xl"/>
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-b-[24px] pt-[45px] pb-[35px] px-[20px] text-center relative">
                  {/* Icon */}
                  <div className="absolute -top-[25px] left-1/2 -translate-x-1/2 w-[50px] h-[50px] rounded-full border-[3px] border-white flex items-center justify-center z-10"
                    style={{ background: ACCENT }}>
                    <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  
                  <h3 className="text-[20px] md:text-[22px] font-extrabold mb-1.5"
                    style={{ color: INK  }}>
                    {vis.name}
                  </h3>
                  <p className="text-[11px] md:text-[12px] font-medium uppercase tracking-[0.5px] leading-relaxed mb-4 max-w-[240px] mx-auto"
                    style={{ color: COPY }}>
                    {vis.quals}
                  </p>
                  
                  {/* Separator */}
                  <div className="relative w-[70px] h-[1px] mx-auto" style={{ background: 'rgba(230,62,26,0.15)' }}>
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                      style={{ background: ACCENT }} />
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Our Leadership Team ── */}
      <section className="w-full py-24 px-5 relative overflow-hidden"
        style={{
          backgroundColor: '#fff9f6',
          backgroundImage: `
            radial-gradient(circle at 100% 0%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%),
            radial-gradient(circle at 0% 100%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 50%),
            radial-gradient(circle, rgba(230,62,26,0.03) 2px, transparent 2px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 24px 24px',
          backgroundPosition: '0 0, 0 0, 12px 12px'
        }}>
        <div className="max-w-[1200px] mx-auto relative z-10">
          
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 text-[13px] font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: ACCENT }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              <span className="w-10 h-[2px]" style={{ background: 'rgba(230,62,26,0.35)' }} />
              OUR LEADERSHIP TEAM
              <span className="w-10 h-[2px]" style={{ background: 'rgba(230,62,26,0.35)' }} />
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            </div>
            
            <h2 className="font-black capitalize leading-[1.1] mb-4"
              style={{
                fontSize: 'clamp(36px,6vw,60px)',
                background: `linear-gradient(135deg,${ACCENT},${ACCENT_DARK})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
              Leadership Team
            </h2>
            
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="w-10 h-[2px]" style={{ background: 'rgba(230,62,26,0.25)' }} />
              <span className="w-2 h-2 rounded-full" style={{ background: ACCENT }} />
              <span className="w-10 h-[2px]" style={{ background: 'rgba(230,62,26,0.25)' }} />
            </div>
            
            <p className="text-[18px] font-medium" style={{ color: COPY }}>
              Exceptional leaders driving innovation and excellence
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              {
                name: 'P. V. Phani Srivatsa',
                role: 'Creative & Business Head',
                desc: 'Leads creative strategy and business growth with innovation, vision, and a results-driven approach.',
                img: 'https://nkrtv.in/wp-content/uploads/2026/05/NKR-TV-blog-thumbnails-8.png',
                icon: <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
              },
              {
                name: 'Vibhin',
                role: 'Technical Head',
                desc: 'Drives technical excellence and innovation, ensuring robust solutions and seamless execution.',
                img: 'https://nkrtv.in/wp-content/uploads/2026/05/NKR-TV-blog-thumbnails-7.png',
                icon: <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
              }
            ].map((lead, i) => (
              <div key={i} className="bg-white rounded-[24px] p-4 flex flex-col md:flex-row gap-6 items-center"
                style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
                
                {/* Image Wrapper */}
                <div className="w-full md:w-[240px] h-[300px] md:h-[320px] rounded-[24px] pl-4 pb-4 flex-shrink-0"
                  style={{ background: `linear-gradient(135deg,${ACCENT},${ACCENT_DARK})` }}>
                  <img src={lead.img} alt={lead.name} className="w-full h-full object-cover rounded-[24px] block" />
                </div>
                
                {/* Content */}
                <div className="flex-1 py-5 pr-5 text-center flex flex-col items-center justify-center">
                  <h3 className="text-[24px] md:text-[26px] font-extrabold mb-3"
                    style={{ color: INK  }}>
                    {lead.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="w-5 h-[2px]" style={{ background: 'rgba(230,62,26,0.25)' }} />
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                    <span className="w-5 h-[2px]" style={{ background: 'rgba(230,62,26,0.25)' }} />
                  </div>
                  
                  <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[13px] font-semibold text-white mb-6"
                    style={{ background: `linear-gradient(to right,${ACCENT_DARK},${ACCENT})`, boxShadow: '0 4px 15px rgba(230,62,26,0.3)' }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      {lead.icon}
                    </svg>
                    {lead.role}
                  </div>
                  
                  <p className="text-[14px] leading-[1.6] px-2" style={{ color: COPY }}>
                    {lead.desc}
                  </p>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
