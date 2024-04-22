//........................****C H I L E****................................//
import { chileLandmarks } from './chile/landmarks.js'



const chileLandmarksElement = document.querySelector(".chileInfo")
chileLandmarksElement.innerHTML = chileLandmarks();

//........................****P E R U****................................//

import { landmarks } from './landmarks.js';
import { famousPeople } from './famousPeople.js';
import { cities } from './cities.js';

console.log('Landmarks:', landmarks);
console.log('Famous People:', famousPeople);
console.log('Cities:', cities);
