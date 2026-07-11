import { useEffect, useState } from 'react';

interface InstagramPost {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
}

export default function InstagramFeedSection() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const url = `/api/instagram`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }

        const data = await response.json();
        setPosts(data.data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  if (loading) {
    return (
      <div className="relative z-10 py-14 text-center">
        <p className="text-gray-500 font-medium">Loading Instagram feed...</p>
      </div>
    );
  }

  if (error || posts.length === 0) {
    return null; // Silently hide the section if there's an error or no posts
  }

  return (
    <div className="relative z-10 w-full max-w-5xl px-4 mt-8 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative aspect-[4/6] overflow-hidden rounded-[14px] bg-gray-100 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            <img
              src={post.media_type === 'VIDEO' ? post.thumbnail_url || post.media_url : post.media_url}
              alt={post.caption?.substring(0, 50) || 'Instagram post'}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            
            {/* Hover overlay with caption snippet */}
            <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center p-4">
              <div className="text-center text-white">
                <i className="fa-brands fa-instagram text-2xl mb-2"></i>
                {post.caption && (
                  <p className="text-xs line-clamp-3 mt-1">
                    {post.caption}
                  </p>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
