/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://logictrade.co.in", // ✅ Replace with your actual domain
  generateRobotsTxt: true, // 👈 Automatically creates robots.txt
  sitemapSize: 5000, // Default is 5000 URLs per sitemap file
  exclude: ["/admin", "/private-page"], // Optional: pages to exclude from sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin"], // Disallow bots from admin pages
      },
    ],
  },
};
