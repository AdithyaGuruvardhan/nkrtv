import { useEffect, useState } from 'react';

interface YouTubeVideo {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
}

export default function YouTubeFeedSection() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        const url = `/api/youtube`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Failed to fetch YouTube feed');
        }

        const data = await response.json();
        setVideos(data);
      } catch (err) {
        console.error('Error fetching YouTube feed:', err);
        setError('Unable to load YouTube videos');
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeVideos();
  }, []);

  if (loading) {
    return (
      <div className="relative z-10 w-full max-w-5xl px-4 mt-8 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="aspect-video w-full animate-pulse rounded-[14px] bg-gray-200"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error || videos.length === 0) {
    return null; // Fail silently or return an empty fragment
  }

  return (
    <div className="relative z-10 w-full max-w-5xl px-4 mt-8 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video) => (
          <a
            key={video.id}
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative aspect-video overflow-hidden rounded-[14px] bg-gray-100 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            <img
              src={video.thumbnail}
              alt={video.title?.substring(0, 50) || 'YouTube video'}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            
            {/* YouTube Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <i className="fa-brands fa-youtube text-5xl text-white drop-shadow-md"></i>
            </div>
            
            {/* Hover overlay with title snippet */}
            <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
              <div className="text-left text-white">
                <p className="text-sm font-semibold line-clamp-2">
                  {video.title}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
