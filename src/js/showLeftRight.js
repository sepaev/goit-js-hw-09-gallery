
// работа с кнопками Escape, ArrowLeft, ArrowRight
import pictures from "./gallery-items.js";
import { refs, changeBigPicture } from './refs';
import { closeModalWindow } from './closeModalWindow';

export const showLeftRight = (e) => {
  let x = -1;
  pictures.forEach((picture, index, array) => {
    if (picture.original === refs.lightboxImage.src && x === -1) {
      if (e.code === 'ArrowLeft') {
        x = index > 0 ? index - 1 : array.length - 1;
      } else {
        x = index === array.length - 1 ? 0 : index + 1;
      }
      changeBigPicture(array[x].original, array[x].description);
    };
  });
}

export const checkKeydown = (event) => {
  if (!refs.lightbox.classList.contains('is-open')) return

  switch (event.code) {
    case 'Escape':
      closeModalWindow(event);
      break;
    
    case 'ArrowLeft':
      showLeftRight(event);
      break;
    
    case 'ArrowRight':
      showLeftRight(event);
      break;
  }
}