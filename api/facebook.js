export default async function handler(req, res) {
  try {
    const token = process.env.FACEBOOK_ACCESS_TOKEN || process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
    const pageId = process.env.FACEBOOK_PAGE_ID;
    
    if (!token || !pageId) {
      return res.status(500).json({ error: 'Facebook credentials are not configured on the server.' });
    }

    const url = `https://graph.facebook.com/v19.0/${pageId}/posts?fields=id,message,full_picture,created_time,permalink_url&access_token=${token}&limit=6`;
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.text();
      console.error('Facebook API Error:', errorData);
      return res.status(response.status).json({ error: 'Failed to fetch Facebook posts' });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error in Facebook API route:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
