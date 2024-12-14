import { getChileCities} from "../database.js"

export const chileCities = () => {

    const cities = getChileCities()

    let htmlString = `<article class="chile_cities"><h3>CITIES</h3>`

    // HTML representations of chileCities here
    for (const chileCities of cities) {

        htmlString += `<section class="chileCities-card">
            <div><img  class="chileCities__image" src="${chileCities.image}"></div>
            <div class="chileCities__dangerRate">${chileCities.name} - ${chileCities.dangerRate}</div>
            
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}