const axios = require("axios")
const { agent } = require("../../httpAgent")
const cheerio = require("cheerio")

async function scarpeContent(url) {
    try {
        const response = await axios.get(url, {
            httpsAgent: agent,
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
            }
        });

        const $ = cheerio.load(response.data);

        const content = $(".cm-entry-summary").html() || $(".entry-content").html();
        let textContent = $(content).text().trim();

        textContent = textContent.replace(/\s+/g, ' ');

        return textContent;

    } catch (error) {
        console.error("Error fetching content:", error.message);
        return null;
    }
}


module.exports = { scarpeContent }