parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"krre":[function(require,module,exports) {

},{"./..\\images\\icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"VyiV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.changeBigPicture=exports.refs=void 0;var e={galery:document.querySelector(".js-gallery"),lightbox:document.querySelector(".js-lightbox"),lightboxImage:document.querySelector(".lightbox__image"),body:document.querySelector("body"),closeButton:document.querySelector('button[data-action="close-lightbox"]')};exports.refs=e;var t=function(t,o){e.lightboxImage.src=t,e.lightboxImage.alt=o};exports.changeBigPicture=t;
},{}],"q5Rn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"JAqo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createGalery=void 0;var e=a(require("./gallery-items.js")),r=require("./refs");function a(e){return e&&e.__esModule?e:{default:e}}var n=function(){var a="";e.default.map(function(e){var r=e.preview,n=e.original,l=e.description;a+='<li class="gallery__item">\n                <a\n                  class="gallery__link"\n                  href="'.concat(n,'"\n                >\n                  <img\n                    class="gallery__image"\n                    src="').concat(r,'"\n                    data-source="').concat(n,'"\n                    alt="').concat(l,'"\n                  />\n                </a>\n              </li>')}),r.refs.galery.innerHTML=a};exports.createGalery=n;
},{"./gallery-items.js":"q5Rn","./refs":"VyiV"}],"Qe9W":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.openModalWindow=void 0;var e=require("./refs"),t=function(t){t.preventDefault(),"IMG"===t.target.nodeName&&((0,e.changeBigPicture)(t.target.dataset.source,t.target.attributes.alt.nodeValue),e.refs.lightbox.classList.add("is-open"),e.refs.body.style.overflow="hidden")};exports.openModalWindow=t;
},{"./refs":"VyiV"}],"p2cQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.closeModalWindow=void 0;var e=require("./refs"),o=function(o){o.preventDefault(),"IMG"!==o.target.nodeName&&e.refs.lightbox.classList.contains("is-open")&&((0,e.changeBigPicture)("",""),e.refs.lightbox.classList.remove("is-open"),e.refs.body.style.overflow="initial")};exports.closeModalWindow=o;
},{"./refs":"VyiV"}],"QbfB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkKeydown=exports.showLeftRight=void 0;var e=t(require("./gallery-items.js")),r=require("./refs"),o=require("./closeModalWindow");function t(e){return e&&e.__esModule?e:{default:e}}var i=function(o){var t=-1;e.default.forEach(function(e,i,s){e.original===r.refs.lightboxImage.src&&-1===t&&(t="ArrowLeft"===o.code?i>0?i-1:s.length-1:i===s.length-1?0:i+1,(0,r.changeBigPicture)(s[t].original,s[t].description))})};exports.showLeftRight=i;var s=function(e){if(r.refs.lightbox.classList.contains("is-open"))switch(e.code){case"Escape":(0,o.closeModalWindow)(e);break;case"ArrowLeft":case"ArrowRight":i(e)}};exports.checkKeydown=s;
},{"./gallery-items.js":"q5Rn","./refs":"VyiV","./closeModalWindow":"p2cQ"}],"Focm":[function(require,module,exports) {
"use strict";require("./css/styles.css");var e=require("./js/refs"),r=require("./js/createGalery"),s=require("./js/openModalWindow"),i=require("./js/closeModalWindow"),n=require("./js/showLeftRight");(0,r.createGalery)(),e.refs.galery.addEventListener("click",s.openModalWindow),e.refs.lightbox.addEventListener("click",i.closeModalWindow),document.addEventListener("keydown",function(e){return(0,n.checkKeydown)(e)});
},{"./css/styles.css":"krre","./js/refs":"VyiV","./js/createGalery":"JAqo","./js/openModalWindow":"Qe9W","./js/closeModalWindow":"p2cQ","./js/showLeftRight":"QbfB"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.3bc0d431.js.map