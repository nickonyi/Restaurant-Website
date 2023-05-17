(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var c=n.getElementsByTagName("script");if(c.length)for(var a=c.length-1;a>-1&&!e;)e=c[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"c0c25a97f6045c9c4d8e.png",n=t.p+"aec72491ad7932903a95.png",c=t.p+"5b4476ba8959cc6d6d3d.png";function a(t,e,n,c){const a=document.createElement("div");a.classList.add("menu__item");const d=document.createElement("div");d.classList.add("menu__item-div");const i=document.createElement("div");i.classList.add("menu__item-header");const o=document.createElement("h3");o.classList.add("menu__item-name"),o.textContent=t;const s=document.createElement("div");s.classList.add("menu__item-decoration");const l=document.createElement("h3");l.classList.add("menu__item-price"),l.textContent=e;const r=document.createElement("p");r.classList.add("menu__item-description"),r.textContent=n,i.appendChild(o),i.appendChild(s),i.appendChild(l),d.appendChild(i),d.appendChild(r);const u=document.createElement("img");return u.classList.add("menu__item-image"),u.src=c,a.appendChild(d),a.appendChild(u),a}const d=function(){const t=document.querySelector("#main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("menu");const d=document.createElement("div");d.classList.add("menu__header-container");const i=document.createElement("h1");i.classList.add("menu__title"),i.textContent="L'Atelier de Cuisine";const o=document.createElement("h2");return o.classList.add("menu__text"),o.textContent="Menu",d.appendChild(i),d.appendChild(o),t.appendChild(d),t.appendChild(a("Pancakes","$12.00","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. ",e)),t.appendChild(a("Eggs","$15.00","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",n)),t.appendChild(a("Onions","$10.00","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",c)),t}())},i=function(){const t=document.querySelector(".main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("home");const e=document.createElement("h1");e.classList.add("home__title"),e.textContent="Welcome to";const n=document.createElement("h2");n.classList.add("home__text"),n.textContent="L'Atelier de Cuisine";const c=document.createElement("h2");c.classList.add("home__subtext"),c.textContent="An expereince you will never forget";const a=document.createElement("button");return a.classList.add("home__button"),a.textContent="See Menu",a.addEventListener("click",(t=>{d()})),t.appendChild(e),t.appendChild(n),t.appendChild(c),t.appendChild(a),t}())};function o(t,e,n,c){const a=document.createElement("div");a.classList.add("contact__box");const d=document.createElement("h2");d.classList.add("contact__box--header"),d.textContent=t;const i=document.createElement("p");i.classList.add("contact__box--text"),i.textContent=e;const o=document.createElement("p");o.classList.add("contact__box--text"),o.textContent=n;const s=document.createElement("div");return s.classList.add("contact__smallbox"),s.textContent=c,a.appendChild(d),a.appendChild(i),a.appendChild(o),a.appendChild(s),a}function s(){const t=document.createElement("header");return t.classList.add("header"),t.appendChild(function(){const t=document.createElement("nav");t.classList.add("nav");const e=document.createElement("button");e.classList.add("nav__button"),e.textContent="Home",e.addEventListener("click",(t=>{t.target.classList.contains("active")||(l(e),i())}));const n=document.createElement("button");n.classList.add("nav__button"),n.textContent="Menu",n.addEventListener("click",(t=>{t.target.classList.contains("active")||(l(n),d())}));const c=document.createElement("button");return c.classList.add("nav__button"),c.textContent="Contact",c.addEventListener("click",(t=>{t.target.classList.contains("active")||(l(c),function(){const t=document.querySelector(".main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.classList.add("contact");const e=document.createElement("h1");e.classList.add("contact__header"),e.textContent="L'Atelier de Cuisine";const n=document.createElement("div");return n.classList.add("contact__container"),n.appendChild(o("contact us","+1 123 456 789","cuisine@yahoo.com","Contact Form")),n.appendChild(o("Address","1234 Main Street","New York 1001","Book a Table")),t.appendChild(e),t.appendChild(n),t}())}())})),t.appendChild(e),t.appendChild(n),t.appendChild(c),t}()),t}function l(t){document.querySelectorAll(".nav__button").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("nav__button--active")}!function(){const t=document.getElementById("content");t.appendChild(s()),t.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),t.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("p");e.textContent=`Copyright © ${(new Date).getFullYear()} NickOnyi`;const n=document.createElement("a");n.href="https://github.com/nickonyi";const c=document.createElement("i");return c.classList.add("fab"),c.classList.add("fa-github"),n.appendChild(c),t.appendChild(e),t.appendChild(n),t}()),l(document.querySelector(".nav__button")),i()}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QndCNEMsSUFDcEJILEVBQVEzQyxZQTFCWixXQUNJLE1BQU0rQyxFQUFTekUsU0FBU2dCLGNBQWMsVUFDdEN5RCxFQUFPeEQsVUFBVUMsSUFBSSxVQUVyQixNQUFNd0QsRUFBWTFFLFNBQVNnQixjQUFjLEtBQ3pDMEQsRUFBVXBELFlBQWMsZ0JBQWUsSUFBSXFELE1BQU9DLHlCQUVsRCxNQUFNQyxFQUFhN0UsU0FBU2dCLGNBQWMsS0FDMUM2RCxFQUFXQyxLQUFPLDhCQUVsQixNQUFNQyxFQUFhL0UsU0FBU2dCLGNBQWMsS0FRMUMsT0FQQStELEVBQVc5RCxVQUFVQyxJQUFJLE9BQ3pCNkQsRUFBVzlELFVBQVVDLElBQUksYUFFekIyRCxFQUFXbkQsWUFBWXFELEdBQ3ZCTixFQUFPL0MsWUFBWWdELEdBQ25CRCxFQUFPL0MsWUFBWW1ELEdBRVpKLENBQ1gsQ0FPd0JPLElBRXBCdkIsRUFBZ0J6RCxTQUFTNkIsY0FBYyxpQkFDdkMsR0FFSixDQ3JHQSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC13ZWJzaXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtd2Vic2l0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXdlYnNpdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IG1lbnVJbWFnZTEgZnJvbSAnLi4vYXNzZXRzL21lbnUtMS5wbmcnO1xuaW1wb3J0IG1lbnVJbWFnZTIgZnJvbSAnLi4vYXNzZXRzL21lbnUtMi5wbmcnO1xuaW1wb3J0IG1lbnVJbWFnZTMgZnJvbSAnLi4vYXNzZXRzL21lbnUtMy5wbmcnO1xuXG5cblxuZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBtZW51SGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51X19oZWFkZXItY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51X190aXRsZScpO1xuICAgIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IGBMJ0F0ZWxpZXIgZGUgQ3Vpc2luZWA7XG5cbiAgICBjb25zdCBtZW51VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbWVudVRleHQuY2xhc3NMaXN0LmFkZCgnbWVudV9fdGV4dCcpO1xuICAgIG1lbnVUZXh0LnRleHRDb250ZW50ID0gYE1lbnVgO1xuXG4gICAgbWVudUhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xuICAgIG1lbnVIZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRleHQpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUhlYWRlckNvbnRhaW5lcik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnUGFuY2FrZXMnLCAnJDEyLjAwJywgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1aXNxdWFtLCB2b2x1cHRhdHVtLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1aXNxdWFtLCB2b2x1cHRhdHVtLiAnLCBtZW51SW1hZ2UxKSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChjcmVhdGVNZW51SXRlbSgnRWdncycsICckMTUuMDAnLCAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVpc3F1YW0sIHZvbHVwdGF0dW0uTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVpc3F1YW0sIHZvbHVwdGF0dW0uJywgbWVudUltYWdlMikpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUl0ZW0oJ09uaW9ucycsICckMTAuMDAnLCAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVpc3F1YW0sIHZvbHVwdGF0dW0uTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVpc3F1YW0sIHZvbHVwdGF0dW0uJywgbWVudUltYWdlMykpO1xuICAgIHJldHVybiBtZW51O1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbiwgaW1hZ2UpIHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW0nKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW1EaXYuY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbS1kaXYnKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW1IZWFkZXIuY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbS1oZWFkZXInKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbWVudUl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ21lbnVfX2l0ZW0tbmFtZScpO1xuICAgIG1lbnVJdGVtTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBjb25zdCBtZW51SXRlbURlY29yYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbURlY29yYXRpb24uY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbS1kZWNvcmF0aW9uJyk7XG5cblxuICAgIGNvbnN0IG1lbnVJdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1lbnVJdGVtUHJpY2UuY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbS1wcmljZScpO1xuICAgIG1lbnVJdGVtUHJpY2UudGV4dENvbnRlbnQgPSBwcmljZTtcblxuICAgIGNvbnN0IG1lbnVJdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWVudUl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51X19pdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgbWVudUl0ZW1EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gICAgbWVudUl0ZW1IZWFkZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1OYW1lKTtcbiAgICBtZW51SXRlbUhlYWRlci5hcHBlbmRDaGlsZChtZW51SXRlbURlY29yYXRpb24pO1xuICAgIG1lbnVJdGVtSGVhZGVyLmFwcGVuZENoaWxkKG1lbnVJdGVtUHJpY2UpO1xuICAgIG1lbnVJdGVtRGl2LmFwcGVuZENoaWxkKG1lbnVJdGVtSGVhZGVyKTtcbiAgICBtZW51SXRlbURpdi5hcHBlbmRDaGlsZChtZW51SXRlbURlc2NyaXB0aW9uKTtcblxuXG4gICAgY29uc3QgbWVudUl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1lbnVJdGVtSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbWVudV9faXRlbS1pbWFnZScpO1xuICAgIG1lbnVJdGVtSW1hZ2Uuc3JjID0gaW1hZ2U7XG5cbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51SXRlbURpdik7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUl0ZW1JbWFnZSk7XG5cbiAgICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsImltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuXG4gICAgY29uc3QgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBob21lVGl0bGUuY2xhc3NMaXN0LmFkZCgnaG9tZV9fdGl0bGUnKTtcbiAgICBob21lVGl0bGUudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byc7XG5cbiAgICBjb25zdCBob21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaG9tZVRleHQuY2xhc3NMaXN0LmFkZCgnaG9tZV9fdGV4dCcpO1xuICAgIGhvbWVUZXh0LnRleHRDb250ZW50ID0gYEwnQXRlbGllciBkZSBDdWlzaW5lYDtcblxuICAgIGNvbnN0IGhvbWVTdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBob21lU3ViVGV4dC5jbGFzc0xpc3QuYWRkKCdob21lX19zdWJ0ZXh0Jyk7XG4gICAgaG9tZVN1YlRleHQudGV4dENvbnRlbnQgPSBgQW4gZXhwZXJlaW5jZSB5b3Ugd2lsbCBuZXZlciBmb3JnZXRgO1xuXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnaG9tZV9fYnV0dG9uJyk7XG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9ICdTZWUgTWVudSc7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGxvYWRNZW51KCk7XG4gICAgfSk7XG5cblxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlKTtcbiAgICBob21lLmFwcGVuZENoaWxkKGhvbWVUZXh0KTtcbiAgICBob21lLmFwcGVuZENoaWxkKGhvbWVTdWJUZXh0KTtcbiAgICBob21lLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuXG4gICAgcmV0dXJuIGhvbWU7XG59XG5cblxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTsiLCJmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuXG4gICAgY29uc3QgY29udGFjdEhlYWRlckggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnRhY3RIZWFkZXJILmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfX2hlYWRlcicpO1xuICAgIGNvbnRhY3RIZWFkZXJILnRleHRDb250ZW50ID0gYEwnQXRlbGllciBkZSBDdWlzaW5lYDtcblxuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfX2NvbnRhaW5lcicpO1xuXG4gICAgY29udGFjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Qm94KCdjb250YWN0IHVzJywgJysxIDEyMyA0NTYgNzg5JywgJ2N1aXNpbmVAeWFob28uY29tJywgJ0NvbnRhY3QgRm9ybScpKTtcbiAgICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RCb3goJ0FkZHJlc3MnLCAnMTIzNCBNYWluIFN0cmVldCcsICdOZXcgWW9yayAxMDAxJywgJ0Jvb2sgYSBUYWJsZScpKTtcblxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlckgpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdENvbnRhaW5lcik7XG5cblxuXG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59XG5cbmZ1bmN0aW9uIGNvbnRhY3RCb3goQm94SGVhZGVyLCBCb3hUZXh0MSwgQm94VGV4dDIsIEJveFRleHQzKSB7XG4gICAgY29uc3QgY29udGFjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RCb3guY2xhc3NMaXN0LmFkZCgnY29udGFjdF9fYm94Jyk7XG5cbiAgICBjb25zdCBjb250YWN0Qm94MUggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRhY3RCb3gxSC5jbGFzc0xpc3QuYWRkKCdjb250YWN0X19ib3gtLWhlYWRlcicpO1xuICAgIGNvbnRhY3RCb3gxSC50ZXh0Q29udGVudCA9IEJveEhlYWRlcjtcblxuICAgIGNvbnN0IGNvbnRhY3RCb3gxUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0Qm94MVAuY2xhc3NMaXN0LmFkZCgnY29udGFjdF9fYm94LS10ZXh0Jyk7XG4gICAgY29udGFjdEJveDFQLnRleHRDb250ZW50ID0gQm94VGV4dDE7XG5cbiAgICBjb25zdCBjb250YWN0Qm94MVAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RCb3gxUDIuY2xhc3NMaXN0LmFkZCgnY29udGFjdF9fYm94LS10ZXh0Jyk7XG4gICAgY29udGFjdEJveDFQMi50ZXh0Q29udGVudCA9IEJveFRleHQyO1xuXG4gICAgY29uc3QgY29udGFjdFNtYWxsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdFNtYWxsQm94LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfX3NtYWxsYm94Jyk7XG4gICAgY29udGFjdFNtYWxsQm94LnRleHRDb250ZW50ID0gQm94VGV4dDM7XG5cbiAgICBjb250YWN0Qm94LmFwcGVuZENoaWxkKGNvbnRhY3RCb3gxSCk7XG4gICAgY29udGFjdEJveC5hcHBlbmRDaGlsZChjb250YWN0Qm94MVApO1xuICAgIGNvbnRhY3RCb3guYXBwZW5kQ2hpbGQoY29udGFjdEJveDFQMik7XG4gICAgY29udGFjdEJveC5hcHBlbmRDaGlsZChjb250YWN0U21hbGxCb3gpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RCb3g7XG59XG5cblxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdCgpKTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xuXG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2X19idXR0b24nKTtcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ1dHRvbik7XG4gICAgICAgIGxvYWRIb21lKCk7XG5cbiAgICB9KTtcblxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdl9fYnV0dG9uJyk7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKG1lbnVCdXR0b24pO1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2X19idXR0b24nKTtcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oY29udGFjdEJ1dHRvbik7XG4gICAgICAgIGxvYWRDb250YWN0KCk7XG4gICAgfSk7XG5cblxuXG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XG4gICAgcmV0dXJuIG5hdjtcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbikge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2X19idXR0b24nKTtcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbiAhPT0gdGhpcykge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdl9fYnV0dG9uLS1hY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIG1haW4uc2V0QXR0cmlidXRlKCdpZCcsICdtYWluJyk7XG5cbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG5cbiAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBOaWNrT255aWA7XG5cbiAgICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZ2l0aHViTGluay5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vbmlja29ueWlcIjtcblxuICAgIGNvbnN0IGdpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBnaXRodWJJY29uLmNsYXNzTGlzdC5hZGQoXCJmYWJcIik7XG4gICAgZ2l0aHViSWNvbi5jbGFzc0xpc3QuYWRkKFwiZmEtZ2l0aHViXCIpO1xuXG4gICAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplV2Vic2l0ZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcblxuICAgIHNldEFjdGl2ZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdl9fYnV0dG9uXCIpKTtcbiAgICBsb2FkSG9tZSgpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVXZWJzaXRlOyIsImltcG9ydCBpbml0aWFsaXplV2Vic2l0ZSBmcm9tIFwiLi93ZWJzaXRlXCI7XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7Il0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJnIiwiZ2xvYmFsVGhpcyIsInRoaXMiLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwibG9jYXRpb24iLCJkb2N1bWVudCIsImN1cnJlbnRTY3JpcHQiLCJzcmMiLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJsZW5ndGgiLCJpIiwiRXJyb3IiLCJyZXBsYWNlIiwicCIsImNyZWF0ZU1lbnVJdGVtIiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsIm1lbnVJdGVtIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1lbnVJdGVtRGl2IiwibWVudUl0ZW1IZWFkZXIiLCJtZW51SXRlbU5hbWUiLCJ0ZXh0Q29udGVudCIsIm1lbnVJdGVtRGVjb3JhdGlvbiIsIm1lbnVJdGVtUHJpY2UiLCJtZW51SXRlbURlc2NyaXB0aW9uIiwiYXBwZW5kQ2hpbGQiLCJtZW51SXRlbUltYWdlIiwibWFpbiIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51IiwibWVudUhlYWRlckNvbnRhaW5lciIsIm1lbnVUaXRsZSIsIm1lbnVUZXh0IiwiY3JlYXRlTWVudSIsImhvbWUiLCJob21lVGl0bGUiLCJob21lVGV4dCIsImhvbWVTdWJUZXh0IiwibWVudUJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJjcmVhdGVIb21lIiwiY29udGFjdEJveCIsIkJveEhlYWRlciIsIkJveFRleHQxIiwiQm94VGV4dDIiLCJCb3hUZXh0MyIsImNvbnRhY3RCb3gxSCIsImNvbnRhY3RCb3gxUCIsImNvbnRhY3RCb3gxUDIiLCJjb250YWN0U21hbGxCb3giLCJjcmVhdGVIZWFkZXIiLCJoZWFkZXIiLCJuYXYiLCJob21lQnV0dG9uIiwidGFyZ2V0IiwiY29udGFpbnMiLCJzZXRBY3RpdmVCdXR0b24iLCJtZW51QnV0dG9uIiwiY29udGFjdEJ1dHRvbiIsImNvbnRhY3QiLCJjb250YWN0SGVhZGVySCIsImNvbnRhY3RDb250YWluZXIiLCJjcmVhdGVDb250YWN0IiwiY3JlYXRlTmF2IiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyZW1vdmUiLCJjb250ZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVNYWluIiwiZm9vdGVyIiwiY29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2l0aHViTGluayIsImhyZWYiLCJnaXRodWJJY29uIiwiY3JlYXRlRm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==