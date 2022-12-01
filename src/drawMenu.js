let menu = [
    {"pizzaName": "The Parrot", "pizzaDesc": "Tomato, basil, and mozzerella cheese. A classic flavour for sunny days."},
    {"pizzaName": "The Merc", "pizzaDesc": "Pineapple, olive, and jalepeños. Sweet, salty, and spicy!"},
    {"pizzaName": "The Sailor", "pizzaDesc": "Spinach, broccoli, and kombu. Full of vitamins for strength!"},
    {"pizzaName": "The Plumber", "pizzaDesc": "Mushrooms, turnip, and kale. Home-cooked tastes that make you feel super."},
    {"pizzaName": "The Infinity", "pizzaDesc": "Plant-based beef, chicken, and sausage. The future of meat-lovers."},
    {"pizzaName": "The Custom", "pizzaDesc": "Your choice of three toppings! Additional toppings 50p each."}
];

// class Pizza {
//     constructor(pizzaName, pizzaDesc) {
//         this.pizzaName = pizzaName;
//         this.pizzaDesc = pizzaDesc;
//     }
// }

// function addPizzaToMenu(Pizza) {
//     menu.push(Pizza)
// }

// let samplePizza = new Pizza("The Margherita", "Tomato, basil, and mozzerella cheese");
// addPizzaToMenu(samplePizza);
// let samplePizza2 = new Pizza("The Merc", "Pineapple, olive, and jalepenos");
// addPizzaToMenu(samplePizza2);

function printMenu() {
    const display = document.querySelector(".display");
    for (const pizza in menu) {
        let menuItem = document.createElement("div");
        menuItem.classList.add("menuItem");
        let pizzaName = document.createElement("div");
        pizzaName.classList.add("pizzaName");
        pizzaName.textContent = menu[pizza].pizzaName;
        let pizzaDesc = document.createElement("div");
        pizzaDesc.classList.add("pizzaDesc");
        pizzaDesc.textContent = menu[pizza].pizzaDesc;
        menuItem.appendChild(pizzaName);
        menuItem.appendChild(pizzaDesc);
        display.appendChild(menuItem);
    }
}

const drawMenu = () => {
    //console.log("drawMenu flowing!")

    const homeButton = document.getElementById("homeButton");
    const menuButton = document.getElementById("menuButton");
    const contactButton = document.getElementById("contactButton");
    homeButton.classList.remove("buttonActive");
    menuButton.classList.add("buttonActive");
    contactButton.classList.remove("buttonActive");

    const display = document.querySelector(".display");
    const prices = document.createElement("h2");
    prices.textContent = "Small: 10£ / Medium: 12£ / Large: 14£";
    const requests = document.createElement("p");
    requests.textContent = "Ask about our vegan and gluten-free options!"
    display.appendChild(prices);
    display.appendChild(requests);
    printMenu();
};

export { drawMenu };