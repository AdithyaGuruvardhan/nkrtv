export default async function handler(req, res) {
  try {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN;
    
    if (!token) {
      return res.status(500).json({ error: 'Instagram access token is not configured on the server.' });
    }

    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink&access_token=${token}&limit=6`;
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.text();
      console.error('Instagram API Error:', errorData);
      return res.status(response.status).json({ error: 'Failed to fetch Instagram posts' });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error in Instagram API route:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
