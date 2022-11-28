const drawContact = () => {
    console.log("drawContact flowing!")
    const display = document.querySelector(".display");
    const contactPizza = document.createElement("img");
    contactPizza.setAttribute("src", "../img/pizza3.jpg");
    contactPizza.setAttribute("width", "75%");
    const contactHeading = document.createElement("h2");
    contactHeading.textContent = "Contact us!";
    const blurb = document.createElement("p");
    blurb.textContent = "This will include contact details and an inquiry form";
    display.appendChild(contactPizza);
    display.appendChild(contactHeading);
    display.appendChild(blurb);
};

export { drawContact };