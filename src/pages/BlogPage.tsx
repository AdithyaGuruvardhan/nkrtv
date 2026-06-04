import DotBackdrop from '../components/decor/DotBackdrop';
import BlogsSection from '../components/sections/BlogsSection';

export default function BlogPage() {
  return (
    <div className="blog-page relative flex flex-col w-full overflow-hidden">
      <style>{`
        @media (max-width: 639px) {
          .blog-page .blog-hero {
            padding: 104px 16px 46px;
          }

          .blog-page .blog-hero-title {
            font-size: clamp(30px, 11vw, 40px);
          }

          .blog-page .blog-hero-copy {
            font-size: 14px;
            line-height: 1.6;
            max-width: 22rem;
          }
        }
      `}</style>
      <DotBackdrop className="-top-20 -right-24 h-[360px] w-[360px] opacity-25" />
      <DotBackdrop className="top-[52%] -left-24 h-[300px] w-[300px] opacity-15" />

      {/* Hero Banner — red/orange gradient matching site palette */}
      <section
        className="blog-hero w-full text-center px-6 pt-[140px] pb-20"
        style={{ background: 'linear-gradient(135deg, #ba2015 0%, #e84310 55%, #f49911 100%)' }}
      >
        {/* Eyebrow */}
        <p className="text-[12px] font-extrabold tracking-[0.25em] uppercase text-orange-200 mb-3">
          NKR TV KANNADA
        </p>

        {/* Title */}
        <h1
          className="blog-hero-title font-extrabold text-white leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 6vw, 60px)' }}
        >
          Our Blogs
        </h1>

        {/* Divider */}
        <div className="mx-auto mb-5 h-[3px] w-16 rounded-full bg-white/40" />

        {/* Sub */}
        <p className="blog-hero-copy text-[16px] font-medium text-white/90 max-w-xl mx-auto">
          Discover stories that inspire, entertain and connect.
        </p>
      </section>

      {/* Blog cards — reuses the exact same section from the home page */}
      <BlogsSection />

    </div>
  );
}
