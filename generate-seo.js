import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.nkrtv.com';

const extractString = (str, key) => {
  const regex = new RegExp(key + `:\\s*(['"])((?:\\\\\\1|.)*?)\\1`);
  const m = str.match(regex);
  return m ? m[2].replace(/\\'/g, "'").replace(/\\"/g, '"') : null;
};

async function generateSeo() {
  // 1. Read BlogsSection.tsx to extract the blogs array
  const blogsTsxPath = path.resolve(__dirname, 'src/components/sections/BlogsSection.tsx');
  const blogsTsx = fs.readFileSync(blogsTsxPath, 'utf-8');

  const match = blogsTsx.match(/const blogs = \[([\s\S]+?)\];/);
  const blogs = [];
  
  if (match) {
    const blogMatches = match[1].match(/{[\s\S]+?}/g);
    if (blogMatches) {
      for (const b of blogMatches) {
        const link = extractString(b, 'link');
        const headline = extractString(b, 'headline');
        const excerpt = extractString(b, 'excerpt');
        const image = extractString(b, 'image');
        const date = extractString(b, 'date');
        
        if (link && headline) {
          blogs.push({
            link,
            headline,
            excerpt: excerpt || 'Namma Karnataka Rajya (NKR) TV Kannada',
            image: image || '/images/nkr_tv_logo.png',
            date: date || new Date().toISOString()
          });
        }
      }
    }
  }

  console.log(`Found ${blogs.length} blogs.`);

  const distDir = path.resolve(__dirname, 'dist');
  const indexHtmlPath = path.resolve(distDir, 'index.html');
  const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

  // 2. Generate HTML file for each blog
  for (const blog of blogs) {
    let blogHtml = indexHtml;
    blogHtml = blogHtml.replace(/<title>.*?<\/title>/, `<title>${blog.headline} | NKR TV Kannada</title>`);
    blogHtml = blogHtml.replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${blog.headline}" />`);
    blogHtml = blogHtml.replace(/<meta name="twitter:title" content=".*?" \/>/, `<meta name="twitter:title" content="${blog.headline}" />`);
    
    blogHtml = blogHtml.replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${blog.excerpt}" />`);
    blogHtml = blogHtml.replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${blog.excerpt}" />`);
    blogHtml = blogHtml.replace(/<meta name="twitter:description" content=".*?" \/>/, `<meta name="twitter:description" content="${blog.excerpt}" />`);
    
    blogHtml = blogHtml.replace(/<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${BASE_URL}${blog.image}" />`);
    blogHtml = blogHtml.replace(/<meta name="twitter:image" content=".*?" \/>/, `<meta name="twitter:image" content="${BASE_URL}${blog.image}" />`);
    
    const slug = blog.link.startsWith('/') ? blog.link.substring(1) : blog.link; 
    const outDir = path.resolve(distDir, slug);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.resolve(outDir, 'index.html'), blogHtml);
    console.log(`Generated HTML for ${blog.link}`);
  }

  // 3. Generate sitemap.xml
  const staticRoutes = [
    '/',
    '/about',
    '/our-programs',
    '/advertisements',
    '/blogs',
    '/contact',
    '/ads',
    '/advertisement'
  ];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  for (const route of staticRoutes) {
    sitemap += `\n  <url>\n    <loc>${BASE_URL}${route}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n  </url>`;
  }

  for (const blog of blogs) {
    sitemap += `\n  <url>\n    <loc>${BASE_URL}${blog.link}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
  }

  sitemap += `\n</urlset>`;

  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemap);
  console.log('Generated sitemap.xml');

  // 4. Generate robots.txt
  const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${BASE_URL}/sitemap.xml`;
  fs.writeFileSync(path.resolve(distDir, 'robots.txt'), robotsTxt);
  console.log('Generated robots.txt');
}

generateSeo().catch(console.error);
