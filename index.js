import{A as k,S,i as B}from"./assets/vendor-C8OOIaQm.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const g of i.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const d=document.querySelector(".prev"),u=document.querySelector(".next"),m=document.querySelectorAll(".swiper-slide");let o=0,w=0,h=0;d.addEventListener("click",()=>l(o-1));u.addEventListener("click",()=>l(o+1));function l(e){m[o].classList.remove("active"),e<0?o=m.length-1:e>=m.length?o=0:o=e,m[o].classList.add("active"),E()}function E(){d.disabled=!1,u.disabled=!1,o===0&&(d.disabled=!0),o===m.length-1&&(u.disabled=!0),d.classList.toggle("disabled",d.disabled),u.classList.toggle("disabled",u.disabled)}document.addEventListener("keydown",e=>{e.key==="ArrowLeft"?l(o-1):e.key==="ArrowRight"?l(o+1):e.key==="Tab"&&(e.shiftKey?l(o-1):l(o+1))});const b=document.querySelector(".swiper-wrapper");b.addEventListener("touchstart",e=>{w=e.touches[0].clientX});b.addEventListener("touchend",e=>{h=e.changedTouches[0].clientX,I()});function I(){const e=h-w;e>50?l(o-1):e<-50&&l(o+1)}E();document.addEventListener("DOMContentLoaded",function(){console.log("DOM fully loaded");const e=new k(".faq-list",{elementClass:"faq-item",triggerClass:"faq-question",panelClass:"faq-open",activeClass:"active",showMultiple:!0,closeOnClickOutside:!0});console.log("Accordion initialized:",e)});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-item").forEach(t=>{t.addEventListener("click",()=>{t.classList.toggle("open"),t.querySelector(".faq-icon").classList.toggle("rotated")})})});document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".covers"),t=document.querySelector(".marquee");if(!e||!t)return;function n(s){const i=s.getBoundingClientRect();return i.top<window.innerHeight&&i.bottom>0}function r(){n(e)?t.classList.add("marquee-active"):t.classList.remove("marquee-active")}r(),window.addEventListener("scroll",r)});async function C(){try{const e=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!e.ok)throw new Error("Failed to fetch reviews");return await e.json()}catch{return B.error({title:"Error",message:"Sorry, something went wrong with reviews."}),[]}}function A(e){const t=document.getElementById("reviews-list");if(t.innerHTML="",!e||e.length===0){t.innerHTML='<p class="error">Not found</p>';return}const n=e.map(r=>`
    <li class="swiper-slide swiper-slide-reviews" id="review">
      <img class="reviewer-image" src="${r.avatar_url}" alt="user photo" width="48" height="48"/>
      <h3 class="reviewer-name">${r.author}</h3>
      <p class="review-text">${r.review}</p>
    </li>
  `).join("");t.insertAdjacentHTML("beforeend",n)}function y(e){const t=document.getElementById("prev"),n=document.getElementById("next");t.classList.toggle("disabled",e.isBeginning),n.classList.toggle("disabled",e.isEnd),t.disabled=e.isBeginning,n.disabled=e.isEnd}document.addEventListener("DOMContentLoaded",async()=>{const e=await C();A(e);const t=new S(".reviews-swiper",{slidesPerView:1,spaceBetween:16,breakpoints:{375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}},navigation:{nextEl:"#next",prevEl:"#prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touchRatio:1,loop:!1,on:{init:function(){y(this)},slideChange:function(){y(this)}}});document.getElementById("prev").addEventListener("keydown",function(n){(n.key==="ArrowLeft"||n.key==="Enter"||n.key===" ")&&(n.preventDefault(),t.slidePrev())}),document.getElementById("next").addEventListener("keydown",function(n){(n.key==="ArrowRight"||n.key==="Enter"||n.key===" ")&&(n.preventDefault(),t.slideNext())})});const q=document.getElementById("w-t-modal"),O=document.getElementById("w-t-close-btn"),M=document.querySelector(".w-t-modal-backdrop"),v=document.querySelector(".w-t-modal-content");function L(){v.classList.add("closing"),setTimeout(()=>{q.style.display="none",v.classList.remove("closing"),document.body.classList.remove("modal-open")},500)}function x(){q.style.display="flex",v.classList.remove("closing"),document.body.classList.add("modal-open")}O.addEventListener("click",L);M.addEventListener("click",L);document.addEventListener("keydown",e=>{e.key==="Escape"&&L()});const P=document.getElementById("work-together-form");P.addEventListener("submit",function(e){e.preventDefault(),x()});const a=document.getElementById("email"),c=document.getElementById("email-message");a.addEventListener("input",function(){const e=a.value;e===""?(a.classList.remove("valid","invalid"),c.textContent="",c.classList.remove("success","error")):/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)?(a.classList.remove("invalid"),a.classList.add("valid"),c.textContent="Success!",c.classList.remove("error"),c.classList.add("success")):(a.classList.remove("valid"),a.classList.add("invalid"),c.textContent="Invalid email, try again",c.classList.remove("success"),c.classList.add("error"))});const p=document.querySelector(".menu-btn"),f=document.querySelector(".header-menu-list");p&&f&&(p.addEventListener("click",()=>{f.classList.toggle("active")}),document.addEventListener("click",e=>{!p.contains(e.target)&&!f.contains(e.target)&&f.classList.remove("active")}));
//# sourceMappingURL=index.js.map
