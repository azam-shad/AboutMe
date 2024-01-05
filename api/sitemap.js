const { createSitemap } = require('sitemap');

module.exports = (req, res) => {
    const sitemap = createSitemap({
        hostname: 'https://shad-azam.vercel.app',
        cacheTime: 600000,

    });
    sitemap.add({ url: '/', changefreq: 'daily', priority: 0.7 });
    sitemap.add({ url: '/about', changefreq: 'daily', priority: 0.7 });
    sitemap.add({ url: '/resume', changefreq: 'daily', priority: 0.7 });
    sitemap.add({ url: '/projects', changefreq: 'daily', priority: 0.7 });
    sitemap.add({ url: '/contact', changefreq: 'daily', priority: 0.7 });

    const sitemapXML = sitemap.toString();
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(sitemapXML);

}