"use strict";(()=>{const e=document.querySelector(".page-header"),n=document.querySelector(".main-nav"),t=document.querySelector(".main-nav__toggle"),d=()=>{n.classList.remove("main-nav--closed"),n.classList.add("main-nav--opened"),e.style.backgroundColor="#fac663",t.removeEventListener("click",o),t.removeEventListener("keydown",a),t.addEventListener("click",i),t.addEventListener("keydown",r)},s=()=>{n.classList.add("main-nav--closed"),n.classList.remove("main-nav--opened"),e.style.backgroundColor="#fffefd",t.removeEventListener("click",i),t.removeEventListener("keydown",r),t.addEventListener("click",o),t.addEventListener("keydown",a)},o=e=>{e.preventDefault(),d()},i=e=>{e.preventDefault(),s()},a=e=>{e.preventDefault(),window.utils.isEnterKeycode(e,d)},r=e=>{e.preventDefault(),window.utils.isEscKeycode(e,s)};t.addEventListener("click",o),t.addEventListener("keydown",a),document.addEventListener("keydown",e=>{window.utils.isEscKeycode(e,s)})})();