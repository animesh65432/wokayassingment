const axios = require("axios");
const cheerio = require("cheerio");
const { agent } = require("../../httpAgent")
const { scarpeContent } = require("./scarpeContent")

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

        $("#lcp_instance_0 li").each((i, el) => {
            const title = $(el).find("a").text().trim();
            const link = $(el).find("a").attr("href");
            const dateText = $(el)
                .clone()
                .children("a")
                .remove()
                .end()
                .text()
                .trim();

            announcements.push({
                title,
                link,
                date: dateText
            });
        });

        for (let i = 0; i < announcements.length; i++) {
            announcements[i].content = await scarpeContent(announcements[i].link);
        }

        return announcements;

    } catch (error) {
        console.log("Scraping Error:", error.message);
        return [];
    }
}

module.exports = { scrapeWebsite };
