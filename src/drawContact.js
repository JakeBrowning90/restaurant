const drawContact = () => {
    //console.log("drawContact flowing!")

    const homeButton = document.getElementById("homeButton");
    const menuButton = document.getElementById("menuButton");
    const contactButton = document.getElementById("contactButton");
    homeButton.classList.remove("buttonActive");
    menuButton.classList.remove("buttonActive");
    contactButton.classList.add("buttonActive");

    const display = document.querySelector(".display");
    const contactHeading = document.createElement("h3");
    contactHeading.textContent = "Want us to cater your next event, have feedback about your visit, or just want to say hi? Drop us a line!";
    const businessPhone = document.createElement("p");
    businessPhone.textContent = "Phone: 07123 456 789"
    const businessEmail = document.createElement("p");
    businessEmail.textContent = "info@pizzagreenhouse.com"
    display.appendChild(contactHeading);
    display.appendChild(businessPhone);
    display.appendChild(businessEmail);
};

export { drawContact };