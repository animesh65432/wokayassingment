const axios = require("axios");
const cheerio = require("cheerio");
const { agent } = require("../../httpAgent")

async function scrapeWebsite(url) {
    try {
        const response = await axios.get(url, {
            httpsAgent: agent,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
            }
        });

        const $ = cheerio.load(response.data);

        const newsItems = [];


        const newsTable = $("#ContentPlaceHolder1_grid_News");

        if (newsTable.length === 0) {
            console.log("News table not found");
            return {
                success: false,
                error: "News table not found in the page",
                news: []
            };
        }


        newsTable.find("tbody tr").each((i, row) => {
            const $row = $(row);

            // Skip header rows
            if ($row.find("th").length > 0) {
                return;
            }

            // Find the date (in h5 tag)
            const date = $row.find("h5.text-primary").text().trim();

            const content = $row.find("p.text-muted").text().trim();

            if (date && content && /^\d{2}-\d{2}-\d{4}$/.test(date)) {
                newsItems.push({
                    date: date,
                    content: content
                });
            }
        });

        return {
            success: true,
            count: newsItems.length,
            news: newsItems
        };

    } catch (error) {
        console.error("Scraping Error:", error.message);
        return {
            success: false,
            error: error.message
        };
    }
}
module.exports = { scrapeWebsite }