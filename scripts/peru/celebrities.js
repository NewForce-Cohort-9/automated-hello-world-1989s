import { getPeruCelebs } from "../database.js"

export const peruCelebrities = () => {

    const landmarks = getPeruCelebs()

    let htmlString = `<article class="peru_celebs">`

    // HTML representations of peruCelebrities here
    for (const peruCelebs of celebs) {

        htmlString += `<section class="peruCelebs-card">
            <div><img  class="peruCelebs__image" src="${peruCelebrities.image}"></div>
            <div class="peruCities__dangerRate">${peruCelebrities.dangerRate}</div>
        </section>`
    }
    htmlString += `</section>`

    return htmlString
}