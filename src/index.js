import "./css/styles.css"
import { refs } from './js/refs';
import { createGalery } from './js/createGalery';
createGalery();

import { openModalWindow } from './js/openModalWindow';
refs.galery.addEventListener('click', openModalWindow);

import { closeModalWindow } from './js/closeModalWindow';
refs.lightbox.addEventListener('click', closeModalWindow);

import { checkKeydown } from './js/showLeftRight';

document.addEventListener('keydown', (e) => checkKeydown(e));