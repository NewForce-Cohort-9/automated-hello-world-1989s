import { getPeruLandmarks } from "../database.js";

// set up function to export celebs list
export const peruLandmarksList = () => {
    //invoke function to get data
    const landmarks = getPeruLandmarks()
    // start building HTML syntax string
    let landmarkString = '<article class="peruLandmarks-card"><h1>Landmarks</h1>'
    // go through each landmark
    for (const landmark of landmarks) {
        landmarkString += `<ul>
                        <img src="${landmark.imageUrl}"/>
                        <li><h3>${landmark.name}</h3></li>
                        <li>${landmark.deathToll}</li>


                        </ul>`
    }
landmarkString += `</article>`
return landmarkString
}
