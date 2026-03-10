const fs = require("fs");

const baseUrl = "https://tekzzoitsolutions.netlify.app";

const pages = [
"",
"/careers.html"
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

pages.forEach(page => {
sitemap += `
<url>
<loc>${baseUrl}${page}</loc>
<changefreq>weekly</changefreq>
<priority>0.8</priority>
</url>
`;
});

sitemap += `</urlset>`;

fs.writeFileSync("sitemap.xml", sitemap);

console.log("Sitemap generated successfully!");
