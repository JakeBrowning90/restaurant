const drawGreeting = () => {
    console.log("drawGreeting flowing!")
    const display = document.querySelector(".display");
    const homePizza = document.createElement("img");
    homePizza.setAttribute("src", "../img/pizza1.jpg");
    homePizza.setAttribute("width", "75%");
    const tagline = document.createElement("h2");
    tagline.textContent = "Pizza tagline";
    const blurb = document.createElement("p");
    blurb.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus non dui id placerat. Nulla et leo sit amet nisl faucibus facilisis. In rhoncus hendrerit erat, quis varius mauris rhoncus non. Donec porttitor pretium cursus. Etiam non finibus tortor. Ut sapien augue, condimentum eget velit id, sodales condimentum magna.";
    display.appendChild(homePizza);
    display.appendChild(tagline);
    display.appendChild(blurb);
};

export { drawGreeting };