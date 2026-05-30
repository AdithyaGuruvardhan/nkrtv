import BlogsSection from '../components/sections/BlogsSection';

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full">

      {/* Hero Banner — red/orange gradient matching site palette */}
      <section
        className="w-full text-center px-6 pt-[140px] pb-20"
        style={{ background: 'linear-gradient(135deg, #ba2015 0%, #e84310 55%, #f49911 100%)' }}
      >
        {/* Eyebrow */}
        <p className="text-[12px] font-extrabold tracking-[0.25em] uppercase text-orange-200 mb-3">
          NKR TV KANNADA
        </p>

        {/* Title */}
        <h1
          className="font-extrabold text-white leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 6vw, 60px)' }}
        >
          Our Blogs
        </h1>

        {/* Divider */}
        <div className="mx-auto mb-5 h-[3px] w-16 rounded-full bg-white/40" />

        {/* Sub */}
        <p className="text-[16px] font-medium text-white/90 max-w-xl mx-auto">
          Discover stories that inspire, entertain and connect.
        </p>
      </section>

      {/* Blog cards — reuses the exact same section from the home page */}
      <BlogsSection />

    </div>
  );
}
