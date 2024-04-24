import { getChileLandmarks } from "../database.js"

export const chileLandmarks = () => {

    const landmarks = getChileLandmarks()

    let htmlString = `<article class="chile_landmarks"><h3>LANDMARKS</h3>`

    // HTML representations of chileLandmarks here
    for (const chileLandmarks of landmarks) {

        htmlString += `<section class="chileLandmarks-card">
            <div><img  class="chileLandmarks__image" src="${chileLandmarks.image}"></div>
            <div class="chileLandmarks__deathToll"><h5>${chileLandmarks.name} - ${chileLandmarks.deathToll}</h5></div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}