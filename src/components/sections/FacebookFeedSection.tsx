import { useEffect, useState } from 'react';

interface FacebookPost {
  id: string;
  message?: string;
  full_picture?: string;
  created_time: string;
  permalink_url: string;
}

export default function FacebookFeedSection() {
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFacebookPosts = async () => {
      try {
        const url = `/api/facebook`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Failed to fetch Facebook posts');
        }

        const data = await response.json();
        setPosts(data.data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFacebookPosts();
  }, []);

  if (loading) {
    return (
      <div className="relative z-10 py-14 text-center">
        <p className="text-gray-500 font-medium">Loading Facebook feed...</p>
      </div>
    );
  }

  // Only show posts that have a picture for visual consistency
  const visualPosts = posts.filter(post => post.full_picture);

  if (error || visualPosts.length === 0) {
    return null; // Silently hide the section if there's an error or no visual posts
  }

  return (
    <div className="relative z-10 w-full max-w-5xl px-4 mt-8 mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visualPosts.map((post) => (
          <a
            key={post.id}
            href={post.permalink_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative aspect-[4/6] overflow-hidden rounded-[14px] bg-gray-100 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            <img
              src={post.full_picture}
              alt={post.message?.substring(0, 50) || 'Facebook post'}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            
            {/* Hover overlay with message snippet */}
            <div className="absolute inset-0 bg-[#1877F2]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-center p-4">
              <div className="text-center text-white">
                <i className="fa-brands fa-facebook text-2xl mb-2"></i>
                {post.message && (
                  <p className="text-xs line-clamp-3 mt-1">
                    {post.message}
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
