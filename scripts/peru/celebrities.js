import { getPeruCelebs } from "../database.js";

// set up function to export celebs list
export const peruCelebsList = () => {
    //invoke function to get data
    const celebs = getPeruCelebs()
    // start building HTML syntax string
    let celebString = '<article class="peruCelebrities-card"><h3>Famous People</h3>'
    // go through each celeb
    for (const celeb of celebs) {
        celebString += `<img src="${celeb.pic}"/>${celeb.fact}`
    }
celebString += `</article>`
return celebString
}