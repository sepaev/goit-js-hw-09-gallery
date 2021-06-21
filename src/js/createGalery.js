import pictures from "./gallery-items.js";
import { refs } from './refs';
// создание галереи
export const createGalery = () => {
  let htmlText = '';
  pictures.map(({ preview, original, description }) => {
    htmlText += `<li class="gallery__item">
                <a
                  class="gallery__link"
                  href="${original}"
                >
                  <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                  />
                </a>
              </li>`
  });
  refs.galery.innerHTML = htmlText;
}

