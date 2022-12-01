import { drawMenu } from "./drawMenu";
import { drawGreeting } from './drawGreeting';
import { drawContact } from './drawContact';

function clearDisplay() {
    const display = document.querySelector(".display");
    while (display.firstChild) {
        display.removeChild(display.lastChild);
      }
};

const drawHome = () => {
    //console.log("homeScreen flowing!");
    const content = document.querySelector("#content");
    const header = document.createElement("div");
    header.classList.add("header");

    const headerLogo = document.createElement('div');
    headerLogo.classList.add("headerLogo");
    const pizzaLogo = document.createElement('img');
    pizzaLogo.setAttribute("src", "../img/pizzaArt.png");
    pizzaLogo.setAttribute("height", "50vh");

    const restaurantName = document.createElement('img');
    restaurantName.setAttribute("src", "../img/restaurantName.png");
    restaurantName.setAttribute("height", "50vh");

    const tabNav = document.createElement('div');
    tabNav.classList.add("tabNav");

    const homeButton = document.createElement('button');
    homeButton.id = "homeButton";
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", function () {
        clearDisplay();
        drawGreeting();
    });

    const menuButton = document.createElement('button');
    menuButton.id = "menuButton";
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", function () {
        clearDisplay();
        drawMenu();
    });

    const contactButton = document.createElement('button');
    contactButton.id = "contactButton";
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", function () {
        clearDisplay();
        drawContact();
    });

    const headerSocials = document.createElement('div');
    headerSocials.classList.add("headerSocials");
    const facebookLogo = document.createElement('img');
    facebookLogo.setAttribute("src", "../img/icons8-facebook-24.png");
    const instaLogo = document.createElement('img');
    instaLogo.setAttribute("src", "../img/icons8-instagram-24.png");
    const tiktokLogo = document.createElement('img');
    tiktokLogo.setAttribute("src", "../img/icons8-tiktok-24.png");

    const leftSidebar = document.createElement("div");
    leftSidebar.classList.add("leftSidebar");
    //leftSidebar.textContent = "left sidebar";
    const display = document.createElement("div");
    display.classList.add("display");
    const rightSidebar = document.createElement("div");
    rightSidebar.classList.add("rightSidebar");
    //rightSidebar.textContent = "right sidebar";
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = "Created by Jake Browning for The Odin Project, 2022";

    content.appendChild(header);
    header.appendChild(headerLogo);
    headerLogo.appendChild(pizzaLogo);
    headerLogo.appendChild(restaurantName);
    content.appendChild(tabNav);
    tabNav.appendChild(homeButton);
    tabNav.appendChild(menuButton);
    tabNav.appendChild(contactButton);
    header.appendChild(headerSocials);
    headerSocials.appendChild(facebookLogo);
    headerSocials.appendChild(instaLogo);
    headerSocials.appendChild(tiktokLogo);
    content.appendChild(leftSidebar);
    content.appendChild(display);
    content.appendChild(rightSidebar);
    content.appendChild(footer);
    };

export { drawHome };