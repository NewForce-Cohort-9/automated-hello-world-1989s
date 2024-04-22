import { getPortugalCities } from "../database.js";

// set up function to export cities list
export const portugalCitiesList = () => {
    //invoke function to get data
    const cities = getPortugalCities()
    // start building HTML syntax string
    let citiesString = '<h3>CITIES</h3><div class="cities">'
    // go through each city
    for (const city of cities) {
        citiesString += `<img src="${cities.pic}"/>
                        <ul>
                        <li><h2>${city.name}</h2></li>
                        <li>Danger Rate: ${city.crimeIndex}</li>
                        </ul>`
    }
citiesString += `</div>`
return citiesString
}