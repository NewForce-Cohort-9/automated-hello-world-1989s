//........................****C H I L E****................................//
import { chileLandmarks } from './chile/landmarks.js'



const chileLandmarksElement = document.querySelector(".chileInfo")
chileLandmarksElement.innerHTML = chileLandmarks();

//........................****P E R U****................................//

import { peruLandmarks } from './peru/landmarks.js'

const peruLandmarksElement = document.querySelector(".peruInfo")
peruLandmarksElement.innerHTML = peruLandmarks();


import { peruCelebrities } from './peru/celebrities.js'

const peruCelebritiesElement = document.querySelector(".peruInfo")
peruCelebritiesElement.innerHTML = peruCelebrities();


import { peruCities } from './peru/cities.js'

const peruCitiesElement = document.querySelector(".peruInfo")
peruCitiesElement.innerHTML = peruCities();


console.log('Landmarks:', landmarks);
console.log('Celebrities:', celebrities);
console.log('Cities:', cities);