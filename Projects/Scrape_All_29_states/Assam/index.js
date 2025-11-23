const { scrapeWebsite } = require("./utils")
const config = require("../config")

async function GetAllAssamAnnoucements() {
    try {
        const result = await scrapeWebsite(config.Assam)
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

GetAllAssamAnnoucements()