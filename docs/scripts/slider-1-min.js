"use strict";(()=>{const e=new Siema({selector:"#slider-1",perPage:1,multipleDrag:!0}),t=document.querySelector("#prev-1"),n=document.querySelector("#next-1");t.addEventListener("click",()=>e.prev()),t.addEventListener("keydown",()=>window.utils.isEnterKeycode(e.prev)),n.addEventListener("click",()=>e.next()),n.addEventListener("keydown",()=>window.utils.isEnterKeycode(e.next)),Siema.prototype.addPagination=function(){const e=this,t=e.selector.parentElement.querySelector(".slider__dots");for(let n=0;n<e.innerElements.length;n++){const e=document.createElement("li");e.classList.add("slider__dot"),0===n&&e.classList.add("active"),e.dataset.index=n,t.appendChild(e)}t.addEventListener("click",function(n){const i=n.target;"LI"===i.tagName&&(e.goTo(i.dataset.index),t.querySelectorAll("li").forEach(e=>e.classList.remove("active")),i.classList.add("active"))})},e.addPagination()})();