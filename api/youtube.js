export default async function handler(req, res) {
  try {
    const channelId = 'UCxh5EoeYvv5YqCSgAAyI7TA';
    const url = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Failed to fetch YouTube feed' });
    }
    
    const xml = await response.text();
    
    // Simple regex parser for the Atom feed
    const entries = [];
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    let match;
    
    while ((match = entryRegex.exec(xml)) !== null) {
      if (entries.length >= 3) break; // Limit to 3 videos
      
      const entryXml = match[1];
      
      const idMatch = entryXml.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
      const titleMatch = entryXml.match(/<title>(.*?)<\/title>/);
      const linkMatch = entryXml.match(/<link rel="alternate" href="(.*?)"/);
      const thumbMatch = entryXml.match(/<media:thumbnail url="(.*?)"/);
      
      if (idMatch && titleMatch && linkMatch && thumbMatch) {
        entries.push({
          id: idMatch[1],
          title: titleMatch[1]
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'"),
          link: linkMatch[1],
          thumbnail: thumbMatch[1]
        });
      }
    }
    
    return res.status(200).json(entries);
  } catch (error) {
    console.error('Error in YouTube API route:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
