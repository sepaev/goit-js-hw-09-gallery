
// обрабатываем клик на галерее и открываем модалку
import {refs, changeBigPicture} from './refs';
export const openModalWindow = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') return

  changeBigPicture(e.target.dataset.source, e.target.attributes.alt.nodeValue);
  refs.lightbox.classList.add('is-open');
  refs.body.style.overflow = 'hidden';
}
