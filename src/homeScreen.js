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
    console.log("homeScreen flowing!");
    const content = document.querySelector("#content");
    const header = document.createElement("div");
    header.classList.add("header");
    header.textContent = "header";

    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", function () {
        clearDisplay();
        drawGreeting();
    });

    const menuButton = document.createElement('button');
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", function () {
        clearDisplay();
        drawMenu();
    });

    const contactButton = document.createElement('button');
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", function () {
        clearDisplay();
        drawContact();
    });

    const leftSidebar = document.createElement("div");
    leftSidebar.classList.add("leftSidebar");
    leftSidebar.textContent = "left sidebar";
    const display = document.createElement("div");
    display.classList.add("display");
    const rightSidebar = document.createElement("div");
    rightSidebar.classList.add("rightSidebar");
    rightSidebar.textContent = "right sidebar";
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = "footer";

    content.appendChild(header);
    header.appendChild(homeButton);
    header.appendChild(menuButton);
    header.appendChild(contactButton);
    content.appendChild(leftSidebar);
    content.appendChild(display);
    content.appendChild(rightSidebar);
    content.appendChild(footer);
    };

export { drawHome };