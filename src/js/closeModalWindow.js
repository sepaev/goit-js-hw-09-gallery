// обрабатываем клик на кнопку закрытия или overlay
import { refs, changeBigPicture } from './refs';

export const closeModalWindow = e => {
  e.preventDefault();
  if (e.target.nodeName === 'IMG') return
  if (!refs.lightbox.classList.contains('is-open')) return
  
  changeBigPicture('', '');
  refs.lightbox.classList.remove('is-open');
  refs.body.style.overflow = 'initial';
};

