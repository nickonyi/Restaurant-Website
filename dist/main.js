(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var c=n.getElementsByTagName("script");if(c.length)for(var a=c.length-1;a>-1&&!e;)e=c[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=function(){const t=document.querySelector(".main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home");const e=document.createElement("h1");e.classList.add("home__title"),e.textContent="Welcome to";const n=document.createElement("h2");n.classList.add("home__text"),n.textContent="L'Atelier de Cuisine";const c=document.createElement("h2");c.classList.add("home__subtext"),c.textContent="An expereince you will never forget";const a=document.createElement("button");return a.classList.add("home__button"),a.textContent="See Menu",t.appendChild(e),t.appendChild(n),t.appendChild(c),t.appendChild(a),t}())},n=t.p+"c0c25a97f6045c9c4d8e.png",c=t.p+"aec72491ad7932903a95.png",a=t.p+"5b4476ba8959cc6d6d3d.png";function i(t,e,n,c){const a=document.createElement("div");a.classList.add("menu__item");const i=document.createElement("div");i.classList.add("menu__item-div");const d=document.createElement("h3");d.classList.add("menu__item-name"),d.textContent=t;const o=document.createElement("div");o.classList.add("menu__item-decoration");const s=document.createElement("h3");s.classList.add("menu__item-price"),s.textContent=e,i.appendChild(d),i.appendChild(o),i.appendChild(s);const l=document.createElement("p");l.classList.add("menu__item-description"),l.textContent=n;const r=document.createElement("img");return r.classList.add("menu__item-image"),r.src=c,a.appendChild(i),a.appendChild(l),a.appendChild(r),a}function d(){const t=document.createElement("header");return t.classList.add("header"),t.appendChild(function(){const t=document.createElement("nav");t.classList.add("nav");const d=document.createElement("button");d.classList.add("nav__button"),d.textContent="Home",d.addEventListener("click",(t=>{t.target.classList.contains("active")||(o(d),e())}));const s=document.createElement("button");s.classList.add("nav__button"),s.textContent="Menu",s.addEventListener("click",(t=>{t.target.classList.contains("active")||(o(s),function(){const t=document.querySelector("#main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("menu");const e=document.createElement("div");e.classList.add("menu__header-container");const d=document.createElement("h1");d.classList.add("menu__title"),d.textContent="L'Atelier de Cuisine";const o=document.createElement("h2");return o.classList.add("menu__text"),o.textContent="Menu",e.appendChild(d),e.appendChild(o),t.appendChild(e),t.appendChild(i("Pancakes","$12.00","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",n)),t.appendChild(i("Eggs","$15.00","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",c)),t.appendChild(i("Onions","$10.00","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",a)),t}())}())}));const l=document.createElement("button");return l.classList.add("nav__button"),l.textContent="Contact",l.addEventListener("click",(t=>{t.target.classList.contains("active")||(o(l),console.log("contact"))})),t.appendChild(d),t.appendChild(s),t.appendChild(l),t}()),t}function o(t){document.querySelectorAll(".nav__button").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("nav__button--active")}!function(){const t=document.getElementById("content");t.appendChild(d()),t.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),t.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("p");e.textContent=`Copyright © ${(new Date).getFullYear()} NickOnyi`;const n=document.createElement("a");n.href="https://github.com/nickonyi";const c=document.createElement("i");return c.classList.add("fab"),c.classList.add("fa-github"),n.appendChild(c),t.appendChild(e),t.appendChild(n),t}()),o(document.querySelector(".nav__button")),e()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWFqRSxTQUFTZSxjQUFjLEtBQzFDa0QsRUFBV0MsS0FBTyw4QkFFbEIsTUFBTUMsRUFBYW5FLFNBQVNlLGNBQWMsS0FRMUMsT0FQQW9ELEVBQVduRCxVQUFVQyxJQUFJLE9BQ3pCa0QsRUFBV25ELFVBQVVDLElBQUksYUFFekJnRCxFQUFXcEQsWUFBWXNELEdBQ3ZCTixFQUFPaEQsWUFBWWlELEdBQ25CRCxFQUFPaEQsWUFBWW9ELEdBRVpKLENBQ1gsQ0FPd0JPLElBRXBCMUIsRUFBZ0IxQyxTQUFTVyxjQUFjLGlCQUN2QyxHQUVKLENFckdBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcblxuICAgIGNvbnN0IGhvbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaG9tZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hvbWVfX3RpdGxlJyk7XG4gICAgaG9tZVRpdGxlLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8nO1xuXG4gICAgY29uc3QgaG9tZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhvbWVUZXh0LmNsYXNzTGlzdC5hZGQoJ2hvbWVfX3RleHQnKTtcbiAgICBob21lVGV4dC50ZXh0Q29udGVudCA9IGBMJ0F0ZWxpZXIgZGUgQ3Vpc2luZWA7XG5cbiAgICBjb25zdCBob21lU3ViVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaG9tZVN1YlRleHQuY2xhc3NMaXN0LmFkZCgnaG9tZV9fc3VidGV4dCcpO1xuICAgIGhvbWVTdWJUZXh0LnRleHRDb250ZW50ID0gYEFuIGV4cGVyZWluY2UgeW91IHdpbGwgbmV2ZXIgZm9yZ2V0YDtcblxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ2hvbWVfX2J1dHRvbicpO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnU2VlIE1lbnUnO1xuXG5cbiAgICBob21lLmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChob21lVGV4dCk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChob21lU3ViVGV4dCk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxuICAgIHJldHVybiBob21lO1xufVxuXG5cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7IiwiaW1wb3J0IG1lbnVJbWFnZTEgZnJvbSAnLi4vYXNzZXRzL21lbnUtMS5wbmcnO1xuaW1wb3J0IG1lbnVJbWFnZTIgZnJvbSAnLi4vYXNzZXRzL21lbnUtMi5wbmcnO1xuaW1wb3J0IG1lbnVJbWFnZTMgZnJvbSAnLi4vYXNzZXRzL21lbnUtMy5wbmcnO1xuXG5cblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBtZW51SGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51X19oZWFkZXItY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51X190aXRsZScpO1xuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IGBMJ0F0ZWxpZXIgZGUgQ3Vpc2luZWA7XG5cbiAgICBjb25zdCBtZW51VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudVRleHQuY2xhc3NMaXN0LmFkZCgnbWVudV9fdGV4dCcpO1xuICAgIG1lbnVUZXh0LnRleHRDb250ZW50ID0gYE1lbnVgO1xuXG4gICAgbWVudUhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgIG1lbnVIZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRleHQpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUhlYWRlckNvbnRhaW5lcik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnUGFuY2FrZXMnLCAnJDEyLjAwJywgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1aXNxdWFtLCB2b2x1cHRhdHVtLicsIG1lbnVJbWFnZTEpKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVJdGVtKCdFZ2dzJywgJyQxNS4wMCcsICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWlzcXVhbSwgdm9sdXB0YXR1bS4nLCBtZW51SW1hZ2UyKSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnT25pb25zJywgJyQxMC4wMCcsICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWlzcXVhbSwgdm9sdXB0YXR1bS4nLCBtZW51SW1hZ2UzKSk7XG4gICAgcmV0dXJuIG1lbnU7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBpbWFnZSkge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbScpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbURpdi5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtLWRpdicpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBtZW51SXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbS1uYW1lJyk7XG4gICAgbWVudUl0ZW1OYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IG1lbnVJdGVtRGVjb3JhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtRGVjb3JhdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtLWRlY29yYXRpb24nKTtcblxuXG4gICAgY29uc3QgbWVudUl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbWVudUl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtLXByaWNlJyk7XG4gICAgbWVudUl0ZW1QcmljZS50ZXh0Q29udGVudCA9IHByaWNlO1xuXG4gICAgbWVudUl0ZW1EaXYuYXBwZW5kQ2hpbGQobWVudUl0ZW1OYW1lKTtcbiAgICBtZW51SXRlbURpdi5hcHBlbmRDaGlsZChtZW51SXRlbURlY29yYXRpb24pO1xuICAgIG1lbnVJdGVtRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtUHJpY2UpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW0tZGVzY3JpcHRpb24nKTtcbiAgICBtZW51SXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBtZW51SXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWVudUl0ZW1JbWFnZS5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtLWltYWdlJyk7XG4gICAgbWVudUl0ZW1JbWFnZS5zcmMgPSBpbWFnZTtcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKG1lbnVJdGVtRGl2KTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbURlc2NyaXB0aW9uKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbUltYWdlKTtcblxuICAgIHJldHVybiBtZW51SXRlbTtcbn1cblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZE1lbnU7IiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcblxuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdl9fYnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGhvbWVCdXR0b24pO1xuICAgICAgICBsb2FkSG9tZSgpO1xuXG4gICAgfSk7XG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZfX2J1dHRvbicpO1xuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihtZW51QnV0dG9uKTtcbiAgICAgICAgbG9hZE1lbnUoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdl9fYnV0dG9uJyk7XG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGNvbnRhY3RCdXR0b24pO1xuICAgICAgICBsb2FkQ29udGFjdCgpO1xuICAgIH0pO1xuXG5cblxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuICAgIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihidXR0b24pIHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fYnV0dG9uJyk7XG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXZfX2J1dHRvbi0tYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuXG4gICAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gTmlja09ueWlgO1xuXG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL25pY2tvbnlpXCI7XG5cbiAgICBjb25zdCBnaXRodWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmFiXCIpO1xuICAgIGdpdGh1Ykljb24uY2xhc3NMaXN0LmFkZChcImZhLWdpdGh1YlwiKTtcblxuICAgIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgICBzZXRBY3RpdmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZfX2J1dHRvblwiKSk7XG4gICAgbG9hZEhvbWUoKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplV2Vic2l0ZTsiLCJmdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBjb25zb2xlLmxvZygnY29udGFjdCcpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJpbXBvcnQgaW5pdGlhbGl6ZVdlYnNpdGUgZnJvbSBcIi4vd2Vic2l0ZVwiO1xuXG5pbml0aWFsaXplV2Vic2l0ZSgpOyJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZyIsImdsb2JhbFRoaXMiLCJ0aGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93Iiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiaSIsIkVycm9yIiwicmVwbGFjZSIsInAiLCJtYWluIiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJob21lIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImhvbWVUaXRsZSIsImhvbWVUZXh0IiwiaG9tZVN1YlRleHQiLCJtZW51QnRuIiwiY3JlYXRlSG9tZSIsImNyZWF0ZU1lbnVJdGVtIiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsIm1lbnVJdGVtIiwibWVudUl0ZW1EaXYiLCJtZW51SXRlbU5hbWUiLCJtZW51SXRlbURlY29yYXRpb24iLCJtZW51SXRlbVByaWNlIiwibWVudUl0ZW1EZXNjcmlwdGlvbiIsIm1lbnVJdGVtSW1hZ2UiLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXIiLCJuYXYiLCJob21lQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsImNvbnRhaW5zIiwic2V0QWN0aXZlQnV0dG9uIiwibWVudUJ1dHRvbiIsIm1lbnUiLCJtZW51SGVhZGVyQ29udGFpbmVyIiwibWVudVRpdGxlIiwibWVudVRleHQiLCJjcmVhdGVNZW51IiwiY29udGFjdEJ1dHRvbiIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVOYXYiLCJidXR0b24iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJlbW92ZSIsImNvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZU1haW4iLCJmb290ZXIiLCJjb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJnaXRodWJMaW5rIiwiaHJlZiIsImdpdGh1Ykljb24iLCJjcmVhdGVGb290ZXIiXSwic291cmNlUm9vdCI6IiJ9