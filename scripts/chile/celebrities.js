import { getChileCelebs } from "../database.js"

export const chileCelebs = () => {

    const celebs = getChileCelebs()

    let htmlString = `<article class="chile_celebs"><h3>FAMOUS PEOPLE</h3>`

    // HTML representations of chileCelebs here
    for (const chileCelebs of celebs) {

        htmlString += `<section class="chileCelebs-card">
            <div><img  class="chileCelebs__image" src="${chileCelebs.image}"><p>${chileCelebs.name} - ${chileCelebs.fact}</p></div>
            
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}