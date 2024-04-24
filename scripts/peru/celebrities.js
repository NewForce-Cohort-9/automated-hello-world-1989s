import { getPeruCelebs } from "../database.js"

export const peruCelebrities = () => {

    const celebs = getPeruCelebs()

    let htmlString = `<article class="peruCelebrities-card">`

    // HTML representations of peruCelebrities here
    for (const celebrities of celebs) {

        htmlString += `<article class="peruCelebrities-card">
            <div><img  class="peruCelebrities-card__image" src="${peruCelebrities.image}"></div>
            <div class="peruCelebrities-card__fact">${peruCelebrities.fact}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}