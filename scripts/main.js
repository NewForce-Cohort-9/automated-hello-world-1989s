//........................****C H I L E****................................//
import { chileLandmarks } from './chile/landmarks.js'

const chileHTMLlandmarks = chileLandmarks()

const chileLandmarksElement = document.querySelector(".chileInfo")
chileLandmarksElement.innerHTML = chileHTMLlandmarks;

//........................****P E R U****................................//

import { landmarks } from './peru/landmarks.js';
import { famousPeople } from './peru/celebrities.js';
import { cities } from './peru/cities.js';


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
//........................****Ireland****................................//

import { celebIList } from './ireland/celebrities.js'

const irelandHTMLcelebrities = celebIList()

const irelandcelebritiesElement = document.querySelector(".irelandCEInfo")
irelandcelebritiesElement.innerHTML = irelandHTMLcelebrities;
