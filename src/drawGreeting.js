const drawGreeting = () => {
    //console.log("drawGreeting flowing!")

    const homeButton = document.getElementById("homeButton");
    const menuButton = document.getElementById("menuButton");
    const contactButton = document.getElementById("contactButton");
    homeButton.classList.add("buttonActive");
    menuButton.classList.remove("buttonActive");
    contactButton.classList.remove("buttonActive");

    const display = document.querySelector(".display");
    const tagline = document.createElement("h2");
    tagline.textContent = "Your home for great vegetarian pizza!";
    const openTimes = document.createElement("p");
    openTimes.textContent = "Business hours:";

    const hoursBlock = document.createElement("div");
    hoursBlock.classList.add("hoursBlock");

    const homePizza = document.createElement("img");
    homePizza.setAttribute("src", "../img/pizza1.jpg");
    homePizza.classList.add("pizzaBG");
    
    const daysList = document.createElement("ul");
    daysList.classList.add("daysList");
    const monday = document.createElement("li");
    monday.textContent = "Monday: 11:00 - 18:00"
    const tuesday = document.createElement("li");
    tuesday.textContent = "Tuesday: 11:00 - 18:00"
    const wednesday = document.createElement("li");
    wednesday.textContent = "Wednesday: 11:00 - 18:00"
    const thursday = document.createElement("li");
    thursday.textContent = "Thursday: 11:00 - 18:00"
    const friday = document.createElement("li");
    friday.textContent = "Friday: 11:00 - 21:00"
    const saturday = document.createElement("li");
    saturday.textContent = "Saturday: 11:00 - 21:00"
    const sunday = document.createElement("li");
    sunday.textContent = "Sunday: 11:00 - 20:00"
    display.appendChild(tagline);
    // display.appendChild(homePizza);

    display.appendChild(hoursBlock);
   // hoursBlock.appendChild(homePizza);
    hoursBlock.appendChild(daysList);
    
    daysList.appendChild(monday);
    daysList.appendChild(tuesday);
    daysList.appendChild(wednesday);
    daysList.appendChild(thursday);
    daysList.appendChild(friday);
    daysList.appendChild(saturday);
    daysList.appendChild(sunday);
};

export { drawGreeting };