
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const imagesList = document.querySelector('.gallery');
imagesList.style.listStyle = 'none';

function createImages(image) {
    return image.map(
        ({ preview, original, description }) => `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
</li>`
    ).join('');
}

imagesList.insertAdjacentHTML('beforeend', createImages(galleryItems));

const lightbox = new SimpleLightbox('.gallery__link', {
    captionDelay: 250,
    captionsData: 'alt',
});


console.log(galleryItems);
