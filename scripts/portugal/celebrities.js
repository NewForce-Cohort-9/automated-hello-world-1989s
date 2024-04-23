import { getPortugalCelebs } from "../database.js";

// set up function to export celebs list
export const portugalCelebsList = () => {
    //invoke function to get data
    const celebs = getPortugalCelebs()
    // start building HTML syntax string
    let celebString = '<h3>FAMOUS PEOPLE</h3><div class="people">'
    // go through each celeb
    for (const celeb of celebs) {
        celebString += `<img src="${celeb.pic}"/>${celeb.troll1}${celeb.troll2}${celeb.troll3}${celeb.troll4}`
    }
celebString += `</div>`
return celebString
}