import { getLocations } from "../database.js"

export const japanLandmarks = () => {

    const landmarks = getLocations()

    let htmlString = `<article class="japan_landmarks">`

    // HTML representations of chileLandmarks here
    for (const japanLandmarks of landmarks) {

        htmlString += `<section class="japanLandmarks-card">
            <div><img  class="japanLandmarks__image" src="${japanLandmarks.image}"></div>
            <div class="japanLandmarks__deathToll">${japanLandmarks.deathToll}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}
