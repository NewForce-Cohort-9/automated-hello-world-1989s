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