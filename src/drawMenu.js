const drawMenu = () => {
    console.log("drawMenu flowing!")
    const display = document.querySelector(".display");
    const menuHeading = document.createElement("h2");
    menuHeading.textContent = "Menu";
    const blurb = document.createElement("p");
    blurb.textContent = "Small - 10£ / Medium - 12£ / Large - 14£";
    let menuItem = document.createElement("div");
    display.appendChild(menuHeading);
    display.appendChild(blurb);
};

export { drawMenu };