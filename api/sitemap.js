const { SitemapGenerator } = require('sitemap-generator');

module.exports = async (req, res) => {
    try {
        const url = 'https://shad-azam.vercel.app';
        const generator = SitemapGenerator(url);
        generator.on('done', () => {
            console.log('Sitemap generation done!');
        });
        generator.on('error', (error) => {
            console.error('Sitemap generation error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
        // Start the generation process
        generator.start();
        generator.pipe(res);
    } catch (error) {
        console.error('Unexpected error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    // const sitemap = createSitemap({
    //     hostname: 'https://shad-azam.vercel.app',
    //     cacheTime: 600000,

    // });
    // sitemap.add({ url: '/', changefreq: 'daily', priority: 0.7 });
    // sitemap.add({ url: '/about', changefreq: 'daily', priority: 0.7 });
    // sitemap.add({ url: '/resume', changefreq: 'daily', priority: 0.7 });
    // sitemap.add({ url: '/projects', changefreq: 'daily', priority: 0.7 });
    // sitemap.add({ url: '/contact', changefreq: 'daily', priority: 0.7 });

    // const sitemapXML = sitemap.toString();
    // res.setHeader('Content-Type', 'application/xml');
    // res.status(200).send(sitemapXML);

}