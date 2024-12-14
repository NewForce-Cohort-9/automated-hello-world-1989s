import { getIrelandcelebrities } from "../database.js";


const celebrities = getIrelandcelebrities()

export const celebIList = () => {
    let celebIHTML = ""

    for (const celeb of celebrities) {
        celebIHTML += `<section class="irelandCeleb-card">
            <div><img src="${celeb.image}" alt="${celeb.name}"></div>
            <div class="celebInfo">Name:${celeb.name} Fun Info: ${celeb.fact}</div>
        </section>`
    }
     
    return celebIHTML
} ;

