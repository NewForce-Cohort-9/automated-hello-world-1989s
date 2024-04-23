import { getPeruCities } from "../database.js"

export const peruCities = () => {

    const landmarks = getPeruCities()

    let htmlString = `<article class="peru_cities">`

    // HTML representations of peruCities here
    for (const peruCities of cities) {

        htmlString += `<section class="peruCities-card">
            <div><img  class="peruCities__image" src="${peruCities.image}"></div>
            <div class="peruCities__dangerRate">${peruCities.dangerRate}</div>
        </section>`
    }
    htmlString += `</section>`

    return htmlString
}