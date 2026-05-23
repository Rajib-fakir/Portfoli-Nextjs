/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.APP_URL || 'https://rajib-gilt.vercel.app/', // এখানে আপনার ডোমেইন বসান
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/admin', '/login'], // যেসব পেজ আপনি sitemap এ চাইছেন না
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/login'],
      },
    ],
  },
};