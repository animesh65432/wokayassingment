const axios = require("axios");
const cheerio = require("cheerio");
const { agent } = require("../../httpAgent")

async function scrapeWebsite(url) {
    try {
        const response = await axios.get(url, {
            httpsAgent: agent,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
            }
        });

        const $ = cheerio.load(response.data);

        const announcements = [];
        const baseUrl = new URL(url).origin;

        // Each announcement is in a div with class "documents"
        $('.documents').each((i, el) => {
            const $el = $(el);

            // Get title and link from the h3 > a element
            const titleElement = $el.find('.documents_title a');
            const title = titleElement.text().trim();
            const pdfLink = titleElement.attr('href');

            // Get date from the time element
            const timeElement = $el.find('.documents_date time');
            const date = timeElement.text().trim();


            if (title && pdfLink) {
                const fullPdfUrl = pdfLink.startsWith('http')
                    ? pdfLink
                    : `${baseUrl}${pdfLink}`;

                announcements.push({
                    title: title, // Remove "New" from end
                    date: date,
                    source: fullPdfUrl,
                });
            }
        });

        return announcements;

    } catch (error) {
        console.log("Scraping Error:", error.message);
        return [];
    }
}

module.exports = { scrapeWebsite };