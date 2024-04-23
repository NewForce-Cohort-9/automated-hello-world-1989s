//........................****C H I L E****................................//
import { chileLandmarks } from './chile/landmarks.js'

const chileHTMLlandmarks = chileLandmarks()

const chileLandmarksElement = document.querySelector(".chileInfo")
chileLandmarksElement.innerHTML = chileHTMLlandmarks;
