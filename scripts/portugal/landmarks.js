import { getPortugalLandmarks } from "../database.js";

// set up function to export landmarks list
export const portugalLandmarksList = () => {
    //invoke function to get data
    const landmarks = getPortugalLandmarks()
    // start building HTML syntax string
    let landmarksString = '<h3>LANDMARKS</h3><div class="landmarks">'
    // go through each city
    for (const landmark of landmarks) {
        landmarksString += `<div><img src="${landmark.pic}"/>
                        <h5>${landmark.name}</h5>
                        <p>Death Toll: ${landmark.deathToll}</p></div>`
    }
landmarksString += `</div>`
return landmarksString
}