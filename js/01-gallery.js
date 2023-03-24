import { galleryItems } from './gallery-items.js';
// Change code below this line



 const galleryContainer = document.querySelector('.gallery');
 const itemsMarkup = createGalleryItemsMarkup(galleryItems);
 galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
 galleryContainer.addEventListener('click', onContainerClick);

// console.log(createGalleryItemsMarkup(galleryItems))

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
        </a>
        </li>
        `;
    })
    .join(' ');
}

const instance = basicLightbox.create(
    `
  <img width="1280" height="auto" src="">`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );
  
  function onContainerClick(evt) {
    evt.preventDefault();
    const datasetSource = evt.target.dataset.source;
    if (!datasetSource) return;
    instance.element().querySelector('img').src = datasetSource;
    instance.show();
  }
  
  function onEscKeyPress(evt) {
    if (evt.code !== 'Escape') return;
    instance.close();
  }