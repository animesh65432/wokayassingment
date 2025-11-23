const config = require("../config")
const { scrapeWebsite } = require("./utils")

async function ScrapingGoaPage() {
    try {
        const res = await scrapeWebsite(config.Goa)
        console.log(res)
    } catch (error) {
        console.log("failed")
    }
}

ScrapingGoaPage()