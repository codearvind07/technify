module.exports = {
  siteUrl: 'https://www.technify.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.technify.com/sitemap.xml',
    ],
  },
};