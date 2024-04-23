//........................****C H I L E****................................//
// import { chileLandmarks } from './chile/landmarks.js'

// const chileHTMLlandmarks = chileLandmarks()

// const chileLandmarksElement = document.querySelector(".chileInfo")
// chileLandmarksElement.innerHTML = chileHTMLlandmarks;

//........................****P E R U****................................//

//import { landmarks } from '../landmarks.js';
//import { famousPeople } from '../famousPeople.js';
//import { cities } from '../cities.js';

//console.log('Landmarks:', landmarks);
//console.log('Famous People:', famousPeople);
//console.log('Cities:', cities);


import { japanLandmarks } from './japan/landmarks.js'

const japanHTMLlandmarks = japanLandmarks()

const japanLandmarksElement = document.querySelector(".japanInfo")
japanLandmarksElement.innerHTML = japanHTMLlandmarks;

import { japanCities } from './japan/cities.js'

const japanHTMLCities = japanCities()

const japanCitiesElement = document.querySelector(".japanCities")
japanCitiesElement.innerHTML = japanHTMLCities;

import { japanCelebrities } from './japan/celebrities.js'

const japanHTMLCelebrities = japanCelebrities()

const japanCelebritiesElement = document.querySelector(".japanCities")
japanCelebritiesElement.innerHTML = japanHTMLCelebrities;
// import { landmarks } from '../landmarks.js';
// import { famousPeople } from '../famousPeople.js';
// import { cities } from '../cities.js';

// console.log('Landmarks:', landmarks);
// console.log('Famous People:', famousPeople);
// console.log('Cities:', cities);

//........................****Ireland****................................//

import { celebIList } from './ireland/celebrities.js'

const irelandHTMLcelebrities = celebIList()

const irelandcelebritiesElement = document.querySelector(".irelandCEInfo")
irelandcelebritiesElement.innerHTML = irelandHTMLcelebrities;
