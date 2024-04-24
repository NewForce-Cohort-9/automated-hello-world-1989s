//........................****C H I L E****................................//
 import { chileLandmarks } from './chile/landmarks.js'

  const chileHTMLlandmarks = chileLandmarks()

  const chileLandmarksElement = document.querySelector(".chileInfo")
  if (chileLandmarksElement !== null){
    chileLandmarksElement.innerHTML = chileHTMLlandmarks;
}
  

//........................****P E R U****................................//




import { japanLandmarks } from './japan/landmarks.js'

const japanHTMLlandmarks = japanLandmarks()

const japanLandmarksElement = document.querySelector(".japanInfo")
if (japanLandmarksElement !== null){
    japanLandmarksElement.innerHTML = japanHTMLlandmarks;
}


import { japanCities } from './japan/cities.js'

const japanHTMLCities = japanCities()

const japanCitiesElement = document.querySelector(".japanCities")
if (japanCitiesElement !== null){
    japanCitiesElement.innerHTML = japanHTMLCities;
}


import { japanCelebrities } from './japan/celebrities.js'

const japanHTMLCelebrities = japanCelebrities()

const japanCelebritiesElement = document.querySelector(".japanCelebrities")
if (japanCelebritiesElement !== null){
    japanCelebritiesElement.innerHTML = japanHTMLCelebrities;
}


// ........................****P O R T U G A L****................................//

import { portugalCelebsList } from './portugal/celebrities.js';
import { portugalCitiesList } from './portugal/cities.js';
import { portugalLandmarksList } from './portugal/landmarks.js';

const portugalCelebsHTML = document.querySelector("#portugalPeople")
if (portugalCelebsHTML !== null) {
      portugalCelebsHTML.innerHTML = portugalCelebsList();
   }

const portugalCitiesHTML = document.querySelector("#portugalCities")

if (portugalCitiesHTML !== null) {
 portugalCitiesHTML.innerHTML = portugalCitiesList();   
}


const portugalLandmarksHTML = document.querySelector("#portugalLandmarks")
if (portugalLandmarksHTML !== null)
portugalLandmarksHTML.innerHTML = portugalLandmarksList();
//........................****Ireland****................................//

import { celebIList } from './ireland/celebrities.js'

const irelandHTMLcelebrities = celebIList()

const irelandcelebritiesElement = document.querySelector(".irelandCEInfo")
if (irelandcelebritiesElement !== null){
 irelandcelebritiesElement.innerHTML = irelandHTMLcelebrities;    
}


import { citiesIList } from './ireland/cities.js'

const irelandHTMLcities = citiesIList()

const irelandcitiesElement = document.querySelector(".irelandCIInfo")
if (irelandcitiesElement !== null) {
 irelandcitiesElement.innerHTML = irelandHTMLcities;   
}


import { landmarksIList } from './ireland/landmarks.js'

const irelandHTMLlandmarks = landmarksIList()

const irelandlandmarksElement = document.querySelector(".irelandLAInfo")
if (irelandlandmarksElement !== null) {
irelandlandmarksElement.innerHTML = irelandHTMLlandmarks;
}

