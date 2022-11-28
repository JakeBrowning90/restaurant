const drawMenu = () => {
    console.log("drawMenu flowing!")
    const display = document.querySelector(".display");
    const menuPizza = document.createElement("img");
    menuPizza.setAttribute("src", "../img/pizza2.jpeg");
    menuPizza.setAttribute("width", "75%");
    const menuHeading = document.createElement("h2");
    menuHeading.textContent = "Menu";
    const blurb = document.createElement("p");
    blurb.textContent = "UL of menu items here";
    display.appendChild(menuPizza);
    display.appendChild(menuHeading);
    display.appendChild(blurb);
};

export { drawMenu };