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
    <div className="about-page relative flex flex-col w-full overflow-hidden">
      <style>{`
        @media (max-width: 639px) {
          .about-page .about-banner {
            padding: 108px 16px 52px;
          }

          .about-page .about-banner .about-banner-kicker {
            font-size: 10px;
            letter-spacing: 0.22em;
          }

          .about-page .about-banner .about-banner-title {
            font-size: clamp(30px, 10vw, 44px);
          }

          .about-page .about-banner .about-banner-subtitle {
            font-size: 14px;
            line-height: 1.6;
          }

          .about-page .about-intro,
          .about-page .about-profiles,
          .about-page .about-leadership,
          .about-page .about-target {
            padding-left: 16px;
            padding-right: 16px;
          }

          .about-page .about-intro {
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .about-page .about-intro-title {
            font-size: 26px;
            margin-bottom: 18px;
          }

          .about-page .about-intro-copy {
            font-size: 14px;
            line-height: 1.75;
          }

          .about-page .about-intro-tagline {
            font-size: 18px;
            margin-top: 22px;
          }

          .about-page .about-intro-image {
            max-width: 100%;
          }

          .about-page .about-profiles {
            padding-top: 56px;
            padding-bottom: 56px;
            gap: 56px;
          }

          .about-page .about-profile-card {
            gap: 16px;
          }

          .about-page .about-profile-image {
            min-height: 360px;
            padding: 0;
          }

          .about-page .about-profile-image img {
            width: 100%;
            height: 100%;
            object-fit: cover !important;
            object-position: center 18%;
          }

          .about-page .about-profile-details {
            text-align: center;
          }

          .about-page .about-profile-details .about-profile-name {
            font-size: 30px;
            margin-bottom: 6px;
          }

          .about-page .about-profile-details .about-profile-quals {
            font-size: 15px;
            margin-bottom: 18px;
          }

          .about-page .about-profile-pill {
            font-size: 12px;
            padding: 8px 14px;
            margin-bottom: 18px;
          }

          .about-page .about-profile-bio-item {
            gap: 12px;
            padding: 14px 0;
          }

          .about-page .about-profile-bio-icon {
            width: 36px;
            height: 36px;
          }

          .about-page .about-profile-bio-text {
            font-size: 13px;
            line-height: 1.65;
          }

          .about-page .about-profile-meta {
            grid-template-columns: 1fr;
          }

          .about-page .about-roles {
            padding: 16px;
            gap: 12px;
          }

          .about-page .about-role {
            min-width: 44%;
            padding: 4px 8px;
          }

          .about-page .about-quote {
            padding: 16px;
            gap: 12px;
            align-items: flex-start;
          }

          .about-page .about-quote-mark {
            font-size: 42px;
          }

          .about-page .about-quote-text {
            font-size: 14px;
            line-height: 1.7;
          }

          .about-page .about-quote-name {
            font-size: 15px;
          }

          .about-page .about-leadership {
            padding-top: 56px;
            padding-bottom: 56px;
          }

          .about-page .about-leadership-header {
            margin-bottom: 40px;
          }

          .about-page .about-leadership-title {
            font-size: clamp(28px, 8vw, 42px);
          }

          .about-page .about-leadership-subtitle {
            font-size: 14px;
          }

          .about-page .about-leadership-grid {
            gap: 24px;
          }

          .about-page .about-leadership-card {
            padding: 16px;
          }

          .about-page .about-leadership-card-image {
            height: 320px;
            padding: 0;
          }

          .about-page .about-leadership-card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center 18%;
          }

          .about-page .about-target {
            padding-top: 56px;
            padding-bottom: 56px;
          }

          .about-page .about-target-grid {
            gap: 28px;
          }

          .about-page .about-target-card {
            max-width: 280px;
          }

          .about-page .about-target-circle {
            min-height: 260px;
            padding: 24px 22px;
          }

          .about-page .about-target-title {
            font-size: 17px;
          }

          .about-page .about-target-text {
            font-size: 12px;
          }

          .about-page .about-skyline {
            margin-top: 44px;
          }

          .about-page .about-skyline img {
            height: 96px;
          }
        }
      `}</style>
      {/* Banner */}
      <section
        className="about-banner relative z-10 w-full text-center px-6 pt-[140px] pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#ba2015 0%,#e84310 55%,#f49911 100%)' }}>
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
          className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] opacity-40"
          style={{
            backgroundImage: 'radial-gradient(#F4D3CA 2px, transparent 2px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)',
          }}
        />
        <p className="about-banner-kicker text-[12px] font-extrabold tracking-[0.25em] uppercase text-orange-200 mb-3">NKR TV KANNADA</p>
        <h1 className="about-banner-title font-extrabold text-white leading-tight mb-4"
          style={{ fontSize: 'clamp(36px,6vw,60px)'  }}>
          About Us
        </h1>
        <div className="mx-auto mb-5 h-[3px] w-16 rounded-full bg-white/40" />
        <p className="about-banner-subtitle text-[16px] font-medium text-white/90 max-w-xl mx-auto">
          The visionaries behind NKR TV Kannada — building a platform rooted in culture, purpose and pride.
        </p>
      </section>

      {/* ── About Us Content Section ── */}
      <section className="about-intro relative w-full py-20 px-5 overflow-hidden bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: Text */}
            <div className="flex flex-col">
              <h2
                className="about-intro-title text-[32px] md:text-[40px] font-black tracking-[0.08em] uppercase mb-8"
                style={{ color: ACCENT }}
              >
                About Us
              </h2>

              <div className="about-intro-copy flex flex-col gap-5 text-[15px] leading-[1.8]" style={{ color: '#4a4a4a' }}>
                <p>
                  <strong>Namma Karnataka Rajya (NKR) TV Kannada</strong> is more than just a channel — it is a vibrant celebration of Karnataka's rich culture, language, and heritage. Rooted in the heart of Kannada storytelling, NKR TV{' '}
                  <strong>bridges tradition with innovation</strong>, creating content that resonates profoundly with viewers across generations.
                </p>

                <p>
                  We take pride in being a <strong>homegrown channel</strong> dedicated to{' '}
                  <strong>entertaining, informing, and inspiring</strong> the people of Karnataka. Whether it's heartwarming family dramas, hilarious comedy shows, or thought-provoking non-fiction programmes, our content is crafted to reflect the diverse voices of our land.
                </p>

                <p>
                  Join us as we celebrate the magic of Kannada television, one show at a time.
                </p>

                <p className="font-bold text-[16px] mt-2" style={{ color: '#5a3e8c' }}>
                  Karnataka's Channel, Forever Yours - NKR TV KANNADA
                </p>
              </div>

              {/* Kannada tagline */}
              <p
                className="about-intro-tagline mt-8 text-[22px] md:text-[26px] font-bold tracking-wide"
                style={{ color: ACCENT }}
              >
                ಕನ್ನಡಿಗರಿಂದ ಕನ್ನಡಿಗರಾಗಿ ಕನ್ನಡಿಗರಿಗೋಸ್ಕರ
              </p>
            </div>

            {/* Right: Image */}
            <div className="about-intro-image relative w-full flex items-center justify-center">
              <img
                src="/images/about_img.png"
                alt="NKR TV Shows Collage"
                className="w-full h-auto object-cover"
                style={{ objectPosition: 'center 45%' }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Profile Cards */}
      <div className="about-profiles relative z-10 max-w-[1200px] mx-auto w-full px-5 py-20 flex flex-col gap-20">
        <div
          className="pointer-events-none absolute right-0 top-8 h-[400px] w-[500px] opacity-45"
          style={{
            backgroundImage: 'radial-gradient(#F4D3CA 2px, transparent 2px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(circle at top right, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at top right, black 30%, transparent 80%)',
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] opacity-45"
          style={{
            backgroundImage: 'radial-gradient(#F4D3CA 2px, transparent 2px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)',
          }}
        />
        {profiles.map((p, pi) => (
          <div key={pi} className="about-profile-card flex flex-col gap-5">

            {/* Top: Image + Details */}
            <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-10 items-stretch">

              {/* Image column */}
              <div className="about-profile-image relative rounded-[20px] overflow-hidden min-h-[460px] md:min-h-[500px]"
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
              <div className="about-profile-details flex flex-col justify-center">
                <p className="text-[11px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: ACCENT }}>ABOUT</p>
                <h2 className="about-profile-name text-[42px] md:text-[50px] font-black leading-[1.1] mb-3"
                  style={{ color: INK  }}>
                  {p.name}
                </h2>
                <p className="about-profile-quals text-lg font-medium mb-6" style={{ color: ACCENT }}>{p.quals}</p>

                {/* Pill */}
                <div className="about-profile-pill self-start inline-flex items-center gap-3 rounded-full px-5 py-2 mb-8 text-sm font-medium text-white"
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
                      className="about-profile-bio-item flex items-start gap-5 py-5"
                      style={{
                        borderBottom: i < p.bio.length - 1 ? `1px solid ${BORDER}` : 'none',
                        paddingTop: i === 0 ? 0 : undefined,
                        paddingBottom: i === p.bio.length - 1 ? 0 : undefined,
                      }}>
                      <div className="about-profile-bio-icon w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: ACCENT_LIGHT }}>
                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill={ACCENT}>
                          {item.icon}
                        </svg>
                      </div>
                      <p className="about-profile-bio-text text-[14px] leading-relaxed" style={{ color: COPY }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom: Roles + Quote */}
            <div className="about-profile-meta grid grid-cols-1 md:grid-cols-[auto_1fr] rounded-[20px] overflow-hidden"
              style={{ background: ACCENT_LIGHT, boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>

              {/* Roles */}
              <div className="about-roles flex flex-wrap items-center justify-center gap-y-5 px-8 py-7"
                style={{ background: `linear-gradient(135deg,${ACCENT},${ACCENT_DARK})` }}>
                {p.roles.map((role, ri) => (
                  <div key={ri}
                    className="about-role flex flex-col items-center text-center px-6 relative"
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
              <div className="about-quote flex items-center gap-5 px-10 py-8">
                <span className="about-quote-mark text-6xl leading-none self-start opacity-70 flex-shrink-0"
                  style={{ color: ACCENT  }}>"</span>
                <div className="flex-1">
                  <p className="about-quote-text text-[15px] leading-relaxed mb-4" style={{ color: INK }}>{p.quote}</p>
                  <span className="about-quote-name block text-right text-[22px]"
                    style={{ color: ACCENT  }}>
                    — {p.name}
                  </span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* ── Our Leadership Team ── */}
      <section className="about-leadership w-full py-24 px-5 relative overflow-hidden"
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
        <div
          className="pointer-events-none absolute right-0 top-0 h-[400px] w-[500px] opacity-40"
          style={{
            backgroundImage: 'radial-gradient(#F4D3CA 2px, transparent 2px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(circle at top right, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at top right, black 30%, transparent 80%)',
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] opacity-35"
          style={{
            backgroundImage: 'radial-gradient(#F4D3CA 2px, transparent 2px)',
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at bottom left, black 30%, transparent 80%)',
          }}
        />
        <div className="max-w-[1200px] mx-auto relative z-10">
          
          {/* Section header */}
          <div className="about-leadership-header text-center mb-16">
            <div className="inline-flex items-center justify-center gap-3 text-[13px] font-bold tracking-[0.2em] uppercase mb-4"
              style={{ color: ACCENT }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              <span className="w-10 h-[2px]" style={{ background: 'rgba(230,62,26,0.35)' }} />
              OUR LEADERSHIP TEAM
              <span className="w-10 h-[2px]" style={{ background: 'rgba(230,62,26,0.35)' }} />
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
            </div>
            
            <h2 className="about-leadership-title font-black capitalize leading-[1.1] mb-4"
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
            
            <p className="about-leadership-subtitle text-[18px] font-medium" style={{ color: COPY }}>
              Exceptional leaders driving innovation and excellence
            </p>
          </div>

          {/* Cards */}
          <div className="about-leadership-grid grid grid-cols-1 lg:grid-cols-2 gap-10">
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
              <div key={i} className="about-leadership-card bg-white rounded-[24px] p-4 flex flex-col md:flex-row gap-6 items-center"
                style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.05)' }}>
                
                <div className="about-leadership-card-image w-full md:w-[240px] h-[300px] md:h-[320px] rounded-[24px] pl-4 pb-4 flex-shrink-0"
                  style={{ background: `linear-gradient(135deg,${ACCENT},${ACCENT_DARK})` }}>
                  <img src={lead.img} alt={lead.name} className="w-full h-full object-cover rounded-[24px] block" />
                </div>
                
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

      {/* ── Why Choose NKR TV / Target Audience ── */}
      <section className="about-target relative w-full py-20 px-5 overflow-hidden bg-white">
        <div className="relative z-10 max-w-[1200px] mx-auto">

          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-black leading-[1.1] mb-2"
              style={{
                fontSize: 'clamp(32px,5vw,52px)',
              }}>
              <span style={{ color: '#E63E1A' }}>ನಿಮ್ಮ</span>{' '}
              <span className="italic" style={{ color: '#5B3E8C' }}>Target </span>{' '}
              <span style={{ color: '#E63E1A' }}> ನಮ್ಮ</span>{' '}
              <span className="italic" style={{ color: '#5B3E8C' }}>Audience</span>
            </h2>
          </div>

          {/* 3 Circular Cards */}
          <div className="about-target-grid grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
            {[
              {
                title: 'CULTURALLY\nINCLINED\nADULTS',
                text: "Those interested in India's heritage—arts, dance, culinary traditions, and tribal communities, Hindu Traditions and national interest.",
                gradient: 'linear-gradient(135deg, rgba(251,191,36,0.05) 0%, rgba(245,158,11,0.3) 50%, rgba(217,119,6,1) 100%)',
              },
              {
                title: 'FAMILY-\nORIENTED\nVIEWERS',
                text: 'Households looking for shows suitable for all ages, focusing on learning and upliftment.',
                gradient: 'linear-gradient(135deg, rgba(244,114,182,0.05) 0%, rgba(219,39,119,0.3) 50%, rgba(190,24,93,1) 100%)',
              },
              {
                title: 'SOCIALLY\nCONSCIOUS\nAUDIENCE',
                text: 'Individuals who prefer content with educational, spiritual, or socially responsible themes.',
                gradient: 'linear-gradient(135deg, rgba(251,191,36,0.05) 0%, rgba(245,158,11,0.3) 50%, rgba(217,119,6,1) 100%)',
              },
            ].map((card, i) => (
              <div key={i} className="about-target-card relative w-full max-w-[320px]">
                {/* Gradient border circle */}
                <div
                  className="rounded-full p-[3px]"
                  style={{ background: card.gradient }}
                >
                  {/* Inner white circle */}
                  <div className="about-target-circle rounded-full bg-white px-8 py-14 text-center min-h-[320px] flex flex-col items-center justify-center">
                    <h3 className="about-target-title text-[20px] font-black leading-[1.25] tracking-wide text-[#4a4a4a] mb-4 whitespace-pre-line">
                      {card.title}
                    </h3>
                    <p className="about-target-text text-[13px] leading-[1.7] text-[#6b6b6b]">
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Karnataka skyline decoration */}
        <div className="about-skyline relative z-10 mt-16 w-full overflow-hidden">
          <img
            src="https://nkrtv.in/wp-content/uploads/2026/05/karnataka-skyline.png"
            alt="Karnataka Landmarks"
            className="w-full max-w-[1200px] mx-auto h-[120px] sm:h-[160px] object-cover object-top opacity-90"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        </div>
      </section>

    </div>
  );
}
