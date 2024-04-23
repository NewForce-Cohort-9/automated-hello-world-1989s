import { getCities } from "../database.js"

export const japanCities = () => {

    const cities = getCities()

    let htmlString = `<article class="japan_landmarks">`

    // HTML representations of chileLandmarks here
    for (const japanCities of cities) {

        htmlString += `<section class="japanCities-card">
            <div><img  class="japanCities__image" src="${japanCities.image}"></div>
            <div class="japanCities__deathToll">${japanCities.crimeIndex}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}