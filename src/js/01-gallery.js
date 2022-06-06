// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const makeGallery = (items) => {
    const galleryMarkup = [];
    const item = [...items].map((i) => `
  <a class="gallery__item" href='${i.original}'>
    <img
      class="gallery__image"
      src='${i.preview}'
      alt="${i.description}"
    />
  </a>
`).join("");
    galleryMarkup.push(item);
    galleryRef.insertAdjacentHTML('afterbegin', galleryMarkup)
}
     makeGallery(galleryItems);


let lightBox = new SimpleLightbox('.gallery a')
lightBox.on('show.simplelightbox', function () {
  lightBox.defaultOptions.captionDelay = 250;
  lightBox.defaultOptions.captionPosition = 'bottom';
  lightBox.defaultOptions.captionsData = 'alt';
})
console.log(galleryItems);
