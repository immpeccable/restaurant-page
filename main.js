(()=>{"use strict";let e=()=>{let e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("class","introduction"),t.setAttribute("id","contentPage");let n=document.createElement("div");n.setAttribute("class","text1"),n.textContent="Delicious breakfasts waiting for you",t.appendChild(n);let a=document.createElement("div");a.setAttribute("class","text2"),a.textContent="Made with completely organic ingredients",t.appendChild(a);let d=document.createElement("img");d.src="images/CIV Sept 26.png",d.classList.add("chef-img"),t.appendChild(d);let s=document.createElement("div");s.textContent="Order online or visit us!",s.setAttribute("class","lastDiv"),t.appendChild(s),e.appendChild(t)},t=()=>{let e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("class","footer"),t.setAttribute("id","footer"),t.textContent="Tunahan Dündar";let n=document.createElement("a");n.href="https://github.com/immpeccable/restaurant-page";let a=document.createElement("img");a.src="images/GitHub-Mark.png",a.classList.add("github-img"),n.appendChild(a),t.appendChild(n),e.appendChild(t)};(()=>{let e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("class","header"),e.appendChild(t);let n=document.createElement("div");n.setAttribute("class","restaurant-name"),n.textContent="Chez Nous Cafe",t.appendChild(n);let a=document.createElement("div");a.setAttribute("class","header-buttons");let d=document.createElement("button"),s=document.createElement("button"),i=document.createElement("button");d.setAttribute("class","home"),d.setAttribute("id","home"),d.classList.add("activee"),d.textContent="Home",s.setAttribute("class","menu"),s.setAttribute("id","menu"),s.textContent="Menu",i.setAttribute("class","contact"),i.setAttribute("id","contact"),i.textContent="Contact",a.appendChild(d),a.appendChild(s),a.appendChild(i),t.appendChild(a)})();let n=1;1==n&&(e(),t());let a=document.getElementById("home"),d=document.getElementById("menu"),s=document.getElementById("contact"),i=document.getElementById("content"),c=0;a.addEventListener("click",(()=>{if(n=0,0!=c){c=0,console.log("home");let n=document.getElementById("contentPage"),l=document.getElementById("footer");i.removeChild(n),i.removeChild(l),d.classList.remove("activee"),s.classList.remove("activee"),a.classList.add("activee"),e(),t()}})),d.addEventListener("click",(()=>{if(n=0,1!=c){console.log("menu"),c=1;let e=document.getElementById("contentPage"),n=document.getElementById("footer");i.removeChild(e),i.removeChild(n),a.classList.remove("activee"),s.classList.remove("activee"),d.classList.add("activee"),(()=>{let e=["images/breakfast.png","images/breakfast(1).png","images/breakfast(2).png","images/breakfast(3).png","images/breakfast(4).png","images/breakfast(5).png","images/pancakes.png","images/cheese.png"],t=["TWO EGGS & BACON","TWO EGGS & SAUSAGE","PANCAKES, EGGS & BACON","TWO EGGS ANY STYLE","MEXICAN STYLE BURRITO","MACHACA PLATE","CHILAQUILES & EGGS","HUEVOS RANCHEROS"],n=["2 eggs and 4 slices of bacon served with potatoes, buttered toast and jelly","2 eggs and 4 sausages served with potatoes, buttered toast and jelly","3 pancakes, 2 eggs and 4 slices of bacon","served with potatoes, buttered toast and jelly","Chorizo, bacon, eggs & potatoes served with rice bean","2 scrambled eggs shredded with beef, onion","Serves with rice and beans","2 eggs over easy served with rice, beans and tortillas"],a=document.getElementById("content"),d=document.createElement("div");d.setAttribute("class","grid"),d.setAttribute("id","contentPage");for(let a=0;a<8;a++){let s=document.createElement("button");s.setAttribute("class","item");let i=document.createElement("img");i.classList.add("menu-img"),i.src=e[a],s.appendChild(i);let c=document.createElement("div"),l=document.createElement("div");c.classList.add("text1"),l.classList.add("text2"),c.textContent=t[a],l.textContent=n[a],s.appendChild(c),s.appendChild(l),d.appendChild(s)}a.appendChild(d)})(),t()}})),s.addEventListener("click",(()=>{if(n=0,2!=c){c=2,console.log("contact");let e=document.getElementById("contentPage"),n=document.getElementById("footer");i.removeChild(e),i.removeChild(n),d.classList.remove("activee"),a.classList.remove("activee"),s.classList.add("activee"),(()=>{let e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("class","contact-content"),t.setAttribute("id","contentPage");let n=document.createElement("div");n.setAttribute("class","telephone");let a=document.createElement("img");a.src="images/phone.png",n.appendChild(a);let d=document.createElement("div");d.textContent="+90 (123) 456 78 90",d.classList.add("tel-text"),n.appendChild(d);let s=document.createElement("div");s.setAttribute("class","address");let i=document.createElement("img");i.src="images/map-marker.png",s.appendChild(i);let c=document.createElement("div");c.setAttribute("class","address-text"),c.textContent="123 Main Street, New York, NY 10030",s.appendChild(c);let l=document.createElement("img");l.src="images/Screenshot from 2022-02-22 21-24-37.png",l.classList.add("address-image"),t.appendChild(n),t.appendChild(s),t.appendChild(l),e.appendChild(t)})(),t()}}))})();