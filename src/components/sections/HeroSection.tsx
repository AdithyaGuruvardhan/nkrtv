const heroVideoSrc = '/hero-video.mp4';

export default function HeroSection() {
  return (
    <section className="flex flex-1 px-4 pb-8 pt-6 sm:px-6 lg:px-8">
      <div className="w-full rounded-[2rem] bg-palette p-1.5 shadow-glow">
        <div className="overflow-hidden rounded-[1.7rem] bg-white">
          <video
            className="aspect-video w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80"
          >
            <source src={heroVideoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
