import { getIrelandcities } from "../database.js";

const cities = getIrelandcities()

export const citiesIList = () => {
    let citiesIHTML = ""

    for (const city of cities) {
        citiesIHTML += `<section class="irelandCity">
        <div><img src="${city.image}" alt="${city.name}"></div>
        <div> Name: ${city.name}
         Danger:${city.level}</div>
         </section>`
    }
     
    return citiesIHTML
} ;

