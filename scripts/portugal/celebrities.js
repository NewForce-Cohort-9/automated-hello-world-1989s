import { getPortugalCelebs } from "../database.js";

// set up function to export celebs list
export const portugalCelebsList = () => {
    //invoke function to get data
    const celebs = getPortugalCelebs()
    // start building HTML syntax string
    let celebString = '<h3 class="people">FAMOUS PEOPLE</h3><div>'
    // go through each celeb
    for (const celeb of celebs) {

    }

    
}