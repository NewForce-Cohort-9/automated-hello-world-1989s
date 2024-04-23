//........................****C H I L E****................................//
// import { chileLandmarks } from './chile/landmarks.js'



// const chileLandmarksElement = document.querySelector(".chileInfo")
// chileLandmarksElement.innerHTML = chileLandmarks();

//........................****P E R U****................................//

// import { landmarks } from '../landmarks.js';
// import { famousPeople } from '../famousPeople.js';
// import { cities } from '../cities.js';

// console.log('Landmarks:', landmarks);
// console.log('Famous People:', famousPeople);
// console.log('Cities:', cities);

// ........................****P O R T U G A L****................................//

import { portugalCelebsList } from './portugal/celebrities.js';
import { portugalCitiesList } from './portugal/cities.js';
import { portugalLandmarksList } from './portugal/landmarks.js';

const portugalCelebsHTML = document.querySelector("#portugalPeople")
portugalCelebsHTML.innerHTML = portugalCelebsList();

const portugalCitiesHTML = document.querySelector("#portugalCities")
portugalCitiesHTML.innerHTML = portugalCitiesList();

const portugalLandmarksHTML = document.querySelector("#portugalLandmarks")
portugalLandmarksHTML.innerHTML = portugalLandmarksList();
