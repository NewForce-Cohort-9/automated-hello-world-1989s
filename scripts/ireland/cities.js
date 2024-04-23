import { getIrelandcities } from "../database.js";

const celebrities = getIrelandcities()

export const citiesIList = () => {
    let citiesIHTML = ""

    for (const city of cities) {
        citiesIHTML += `<section class="irelandCity">
        <div>${city.image}
         Name: ${city.name}
         Danger:${city.level}</div>
         </section>`
    }
     
    return citiesIHTML
} ;

