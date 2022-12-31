import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const localStorageKey = 'videoplayer-current-time';
const savedTime = localStorage.getItem(localStorageKey);

if (savedTime) {
    player.setCurrentTime(savedTime);
}

player.on('timeupdate', throttle(saveCurrentTime, 1000));
function saveCurrentTime (event) {
    localStorage.setItem(localStorageKey, event.seconds);
}
