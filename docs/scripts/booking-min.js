"use strict";(()=>{const e=document.querySelector("#booking-form"),t=document.querySelector(".overlay"),n=document.querySelector("#booking-open"),o=e.querySelector("#booking-close"),i=document.querySelector("#confirmation"),d=(i.querySelector("#confirmation-close"),i.querySelector("#confirmation-ok"),e=>{window.utils.isEscKeycode(e,s)}),r=()=>{t.classList.add("active"),window.utils.showElement(e),document.addEventListener("keydown",d)},s=()=>{window.utils.hideElement(e),t.classList.remove("active"),document.removeEventListener("keydown",d)},c=e=>{window.utils.isEscKeycode(e,l)},l=()=>{t.classList.remove("active"),window.utils.hideElement(i),document.removeEventListener("keydown",c)};n.addEventListener("click",e=>{e.preventDefault(),r()}),n.addEventListener("keydown",e=>{e.preventDefault(),window.utils.isEnterKeycode(e,r)}),o.addEventListener("click",e=>{e.preventDefault(),s()}),o.addEventListener("keydown",e=>{e.preventDefault(),window.utils.isEnterKeycode(e,s)}),e.addEventListener("submit",e=>{e.preventDefault(),s(),t.classList.add("active"),window.utils.showElement(i),document.addEventListener("keydown",c)}),i.addEventListener("click",e=>{"BUTTON"===e.target.tagName&&(e.preventDefault(),l())}),i.addEventListener("keydown",e=>{"BUTTON"===e.target.tagName&&(e.preventDefault(),window.utils.isEnterKeycode(e,l))})})();