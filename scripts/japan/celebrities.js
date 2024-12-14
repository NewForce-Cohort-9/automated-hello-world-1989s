import { getCelebs } from "../database.js"

export const japanCelebrities = () => {

    const celebrity = getCelebs()

    let htmlString = `<article class="japan_celebrities">`

    // HTML representations of chileLandmarks here
    for (const japanCelebrities of celebrity) {

        htmlString += `<section class="japanCelebrities-card">
            <div><img  class="japanCelebrities__image" src="${japanCelebrities.image}"></div>
            <div class="japanCelebrities__deathToll">${japanCelebrities.fact}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}
