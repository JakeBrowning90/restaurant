import { drawMenu } from "./drawMenu";
import { drawGreeting } from './drawGreeting';
import { drawContact } from './drawContact';
import pizzaArtAsset from './img/pizzaArt.png';
import restaurantNameAsset from './img/restaurantName.png';
import facebookLogoAsset from './img/icons8-facebook-24.png';
import instagramLogoAsset from './img/icons8-instagram-24.png';
import tiktokLogoAsset from './img/icons8-tiktok-24.png';

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

    const pizzaLogo = new Image();
    pizzaLogo.src = pizzaArtAsset;
    pizzaLogo.setAttribute("height", "50vh");

    const restaurantName = new Image();
    restaurantName.src = restaurantNameAsset;
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
    const facebookLogo = new Image();
    facebookLogo.src = facebookLogoAsset;
    const instaLogo = new Image();
    instaLogo.src = instagramLogoAsset;
    const tiktokLogo = new Image();
    tiktokLogo.src = tiktokLogoAsset;

    const leftSidebar = document.createElement("div");
    leftSidebar.classList.add("leftSidebar");

    const display = document.createElement("div");
    display.classList.add("display");
    const rightSidebar = document.createElement("div");
    rightSidebar.classList.add("rightSidebar");

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