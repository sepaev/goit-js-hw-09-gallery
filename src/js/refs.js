// создание переменных

export const refs = {
  galery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  body: document.querySelector('body'),
  closeButton: document.querySelector('button[data-action="close-lightbox"]'),
}

export const changeBigPicture = (src, alt) => {
  refs.lightboxImage.src = src;
  refs.lightboxImage.alt = alt;
};