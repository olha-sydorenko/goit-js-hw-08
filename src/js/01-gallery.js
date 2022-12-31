import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

function createMarkup (array) {
 const markup = array.map(({ preview, original, description }) => {
     return `<li style = "list-style: none"><a class="gallery__item" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" />
   </a></li>`;  
}).join("");
gallery.innerHTML = markup;
}
createMarkup(galleryItems);

new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
    captionsDelay: 250,
    enableKeyboard: true,
});

console.log(galleryItems);
