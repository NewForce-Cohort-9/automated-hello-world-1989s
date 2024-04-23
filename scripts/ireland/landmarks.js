import { getIrelandlandmarks } from "../database.js";

const landmarks = getIrelandlandmarks()

export const landmarksIList = () => {
    let landmarksIHTML = ""

    for (const landmark of landmarks) {
        landmarksIHTML += `<section class="irelandLandmark">
        <div><img src="${landmark.image}" alt="${landmark.name}"></div>
        <div>Name: ${landmark.landmark}
         DeathToll:${landmark.deathtoll}</div>
         </section>`
    }
     
    return landmarksIHTML
} ;