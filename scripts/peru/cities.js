import { getPeruCities } from "../database.js";

// set up function to export celebs list
export const peruCitiesList = () => {
    //invoke function to get data
    const cities = getPeruCities()
    // start building HTML syntax string
    let cityString = '<article class="peruCities-card"><h2>Cities</h2>'
    // go through each celeb
    for (const city of cities) {
        cityString += `<ul>
                        <img src="${city.imageUrl}"/>
                        <li><h2>${city.name}</h2></li>
                        <li>Danger Rate: ${city.dangerRate}</li>
                        </ul>`
    }
cityString += `</article>`
return cityString
}