(()=>{"use strict";let e=[{pizzaName:"The Parrot",pizzaDesc:"Tomato, basil, and mozzerella cheese. A classic flavour for sunny days."},{pizzaName:"The Merc",pizzaDesc:"Pineapple, olive, and jalepeños. Sweet, salty, and spicy!"},{pizzaName:"The Sailor",pizzaDesc:"Spinach, broccoli, and kombu. Full of vitamins for strength!"},{pizzaName:"The Plumber",pizzaDesc:"Mushrooms, turnip, and kale. Home-cooked tastes that make you feel super."},{pizzaName:"The Infinity",pizzaDesc:"Plant-based beef, chicken, and sausage. The future of meat-lovers."},{pizzaName:"The Custom",pizzaDesc:"Your choice of three toppings! Additional toppings 50p each."}];const t=()=>{const e=document.getElementById("homeButton"),t=document.getElementById("menuButton"),n=document.getElementById("contactButton");e.classList.add("buttonActive"),t.classList.remove("buttonActive"),n.classList.remove("buttonActive");const o=document.querySelector(".display"),c=document.createElement("h2");c.textContent="Your home for great vegetarian pizza!",document.createElement("p").textContent="Business hours:";const a=document.createElement("div");a.classList.add("hoursBlock");const d=document.createElement("ul");d.classList.add("daysList");const s=document.createElement("li");s.textContent="Monday: 11:00 - 18:00";const i=document.createElement("li");i.textContent="Tuesday: 11:00 - 18:00";const l=document.createElement("li");l.textContent="Wednesday: 11:00 - 18:00";const m=document.createElement("li");m.textContent="Thursday: 11:00 - 18:00";const u=document.createElement("li");u.textContent="Friday: 11:00 - 21:00";const r=document.createElement("li");r.textContent="Saturday: 11:00 - 21:00";const p=document.createElement("li");p.textContent="Sunday: 11:00 - 20:00",o.appendChild(c),o.appendChild(a),a.appendChild(d),d.appendChild(s),d.appendChild(i),d.appendChild(l),d.appendChild(m),d.appendChild(u),d.appendChild(r),d.appendChild(p)};function n(){const e=document.querySelector(".display");for(;e.firstChild;)e.removeChild(e.lastChild)}console.log("Index.js flowing!"),(()=>{const o=document.querySelector("#content"),c=document.createElement("div");c.classList.add("header");const a=document.createElement("div");a.classList.add("headerLogo");const d=document.createElement("img");d.setAttribute("src","../src/img/pizzaArt.png"),d.setAttribute("height","50vh");const s=document.createElement("img");s.setAttribute("src","../src/img/restaurantName.png"),s.setAttribute("height","50vh");const i=document.createElement("div");i.classList.add("tabNav");const l=document.createElement("button");l.id="homeButton",l.textContent="Home",l.addEventListener("click",(function(){n(),t()}));const m=document.createElement("button");m.id="menuButton",m.textContent="Menu",m.addEventListener("click",(function(){n(),(()=>{const t=document.getElementById("homeButton"),n=document.getElementById("menuButton"),o=document.getElementById("contactButton");t.classList.remove("buttonActive"),n.classList.add("buttonActive"),o.classList.remove("buttonActive");const c=document.querySelector(".display"),a=document.createElement("h2");a.textContent="Small: 10£ / Medium: 12£ / Large: 14£";const d=document.createElement("p");d.textContent="Ask about our vegan and gluten-free options!",c.appendChild(a),c.appendChild(d),function(){const t=document.querySelector(".display");for(const n in e){let o=document.createElement("div");o.classList.add("menuItem");let c=document.createElement("div");c.classList.add("pizzaName"),c.textContent=e[n].pizzaName;let a=document.createElement("div");a.classList.add("pizzaDesc"),a.textContent=e[n].pizzaDesc,o.appendChild(c),o.appendChild(a),t.appendChild(o)}}()})()}));const u=document.createElement("button");u.id="contactButton",u.textContent="Contact",u.addEventListener("click",(function(){n(),(()=>{const e=document.getElementById("homeButton"),t=document.getElementById("menuButton"),n=document.getElementById("contactButton");e.classList.remove("buttonActive"),t.classList.remove("buttonActive"),n.classList.add("buttonActive");const o=document.querySelector(".display"),c=document.createElement("h3");c.textContent="Want us to cater your next event, have feedback about your visit, or just want to say hi? Drop us a line!";const a=document.createElement("p");a.textContent="Phone: 07123 456 789";const d=document.createElement("p");d.textContent="info@pizzagreenhouse.com",o.appendChild(c),o.appendChild(a),o.appendChild(d)})()}));const r=document.createElement("div");r.classList.add("headerSocials");const p=document.createElement("img");p.setAttribute("src","../src/img/icons8-facebook-24.png");const h=document.createElement("img");h.setAttribute("src","../src/img/icons8-instagram-24.png");const C=document.createElement("img");C.setAttribute("src","../src/img/icons8-tiktok-24.png");const E=document.createElement("div");E.classList.add("leftSidebar");const v=document.createElement("div");v.classList.add("display");const g=document.createElement("div");g.classList.add("rightSidebar");const z=document.createElement("div");z.classList.add("footer"),z.textContent="Created by Jake Browning for The Odin Project, 2022",o.appendChild(c),c.appendChild(a),a.appendChild(d),a.appendChild(s),o.appendChild(i),i.appendChild(l),i.appendChild(m),i.appendChild(u),c.appendChild(r),r.appendChild(p),r.appendChild(h),r.appendChild(C),o.appendChild(E),o.appendChild(v),o.appendChild(g),o.appendChild(z)})(),t()})();