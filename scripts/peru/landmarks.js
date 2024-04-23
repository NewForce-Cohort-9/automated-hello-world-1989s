import { getPeruLandmarks } from "../database.js"

export const peruLandmarks = () => {

    const landmarks = getPeruLandmarks()

    let htmlString = `<article class="peru_landmarks">`

    // HTML representations of peruLandmarks here
    for (const peruLandmarks of landmarks) {

        htmlString += `<section class="peruLandmarks-card">
            <div><img  class="peruLandmarks__image" src="${peruLandmarks.image}"></div>
            <div class="peruLandmarks__deathToll">${peruLandmarks.deathToll}</div>
        </section>`
    }
    htmlString += `</section>`

    return htmlString
}
