import { getIrelandcelebrities } from "../database.js";


const celebrities = getIrelandcelebrities()

export const celebIList = () => {
    let celebIHTML = ""

    for (const celeb of celebrities) {
        celebIHTML += `${celeb.image}`
        celebIHTML += `Name:${celeb.name}`
        celebIHTML += `Fun Info: ${celeb.fact}`
    }
     
    return celebIHTML
} ;
