const { scrapeWebsite } = require("./utils")
const config = require("../config")


async function GetAllWebsiteAnnoucements() {
    try {
        const result = await scrapeWebsite(config.WEST_BENGAL_ANNOUCEMENT_URL)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

GetAllWebsiteAnnoucements()