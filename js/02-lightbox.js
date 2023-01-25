import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);

const reference = {
  gallery: document.querySelector(".gallery"),
  cardGallery: createCards(galleryItems),
};

reference.gallery.insertAdjacentHTML("afterbegin", reference.cardGallery);

function createCards(img) {
  return img
    .map(
      (image) =>
        `<a class="gallery__item" href="${image.original}" onclick="return false;">
<img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>`
    )
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
