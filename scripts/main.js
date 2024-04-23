//........................****C H I L E****................................//

// Chile Celebs
import { chileCelebs } from './chile/celebrities.js'

const chileHTMLcelebs = chileCelebs()

const chileCelebsElement = document.querySelector(".chilePeople")
chileCelebsElement.innerHTML = chileHTMLcelebs;

// Chile Landmarks
import { chileLandmarks } from './chile/landmarks.js'

const chileHTMLlandmarks = chileLandmarks()

const chileLandmarksElement = document.querySelector(".chileInfo")
chileLandmarksElement.innerHTML = chileHTMLlandmarks;

// Chile Cities
import { chileCities } from './chile/cities.js'

const chileHTMLcities = chileCities()

const chileCitiesElement = document.querySelector(".chilePlace")
chileCitiesElement.innerHTML = chileHTMLcities;

//........................****P E R U****................................//

// // import { landmarks } from '../landmarks.js';
// // import { famousPeople } from '../famousPeople.js';
// // import { cities } from '../cities.js';

// console.log('Landmarks:', landmarks);
// console.log('Famous People:', famousPeople);
// console.log('Cities:', cities);

//........................****Ireland****................................//

// import { celebIList } from './ireland/celebrities.js'

// const irelandHTMLcelebrities = celebIList()

// const irelandcelebritiesElement = document.querySelector(".irelandCEInfo")
// irelandcelebritiesElement.innerHTML = irelandHTMLcelebrities;