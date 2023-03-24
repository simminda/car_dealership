// Create car blueprint using a constructor function.
function carDescription(year, make, model, colour, image, registrationNum, price) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.colour = colour;
    this.imageSrc = image;
    this.registrationNum = registrationNum;
    this.price = price;
};


// Create Car Objects
let car1 = new carDescription(
    "2019",
    "Mercedes-Benz", 
    "C-Class C200", 
    "White", 
    "img/2019-Mercedes-Benz-C-Class-C-200-Auto.webp", 
    "AA11SSGP",
    "R600 000"
    );

let car2 = new carDescription(
    "2020",
    "Toyota", 
    "Hilux 28 GD6 Legend 4x4", 
    "White", 
    "img/2020-Toyota-Hilux-28-GD-6-Raised-Body-Legend-4x4-Double-Cab.webp", 
    "BB22TTGP",
    "R602 000"
    );

let car3 = new carDescription(
    "2021",
    "Mini", 
    "Countryman Cooper S", 
    "Silver Grey", 
    "img/2021-MINI-Countryman-Cooper-S-Auto.webp", 
    "BS50SSGP",
    "R500 000"
    );

let car4 = new carDescription(
    "2021",
    "Volkswagen", 
    "Golf VII GTI", 
    "White", 
    "img/2021-Volkswagen-Golf-VII-GTI-20-TSI-Auto.webp", 
    "BT28TTGP",
    "R600 000"
    );

let car5 = new carDescription(
    "2023",
    "Volkswagen", 
    "Polo 2.0 GTI", 
    "Red", 
    "img/2023-Volkswagen-Polo-20-GTI-Auto-147kW.webp", 
    "FF77TTGP",
    "R601 400"
    );


/* 
Takes ID from button pressed on first page.
Uses localStorage to store it for retrieval in second document.
*/
function passValuesCar1() {
    let selection = document.getElementById("car1").id;
    localStorage.setItem("textvalue", selection)
    return false;
}
function passValuesCar2() {
    let selection = document.getElementById("car2").id;
    localStorage.setItem("textvalue", selection)
    return false;
}
function passValuesCar3() {
    let selection = document.getElementById("car3").id;
    localStorage.setItem("textvalue", selection)
    return false;
}
function passValuesCar4() {
    let selection = document.getElementById("car4").id;
    localStorage.setItem("textvalue", selection)
    return false;
}
function passValuesCar5() {
    let selection = document.getElementById("car5").id;
    localStorage.setItem("textvalue", selection)
    return false;
}


/* 
Populates the more information page with chosen car details.
Retrieves value stored in localStorage, which is a string.
Chooses a car object based on the string value.
*/
function populatePage() {
    let selectorStr = document.getElementById("pageTitle").innerHTML = localStorage.getItem("textvalue");
    let selector;
    if (selectorStr === "car1") {
        selector = car1;
    } else if (selectorStr === "car2") {
        selector = car2;
    } else if (selectorStr === "car3") {
        selector = car3;
    } else if (selectorStr === "car4") {
        selector = car4;
    } else if (selectorStr === "car5") {
        selector = car5;
    } 

    document.getElementById("pageTitle").innerHTML = selector.make + " " + selector.model;
    document.getElementById("description").innerHTML = selector.make + " " + selector.model;
    document.getElementById("price").innerHTML = selector.price;
    document.getElementById("carYear").innerHTML = "<strong>Year</strong>: " + selector.year;
    document.getElementById("colour").innerHTML = "<strong>Colour</strong>: " + selector.colour;
    document.getElementById("registration").innerHTML = "<strong>Registration</strong>: " + selector.registrationNum;
    // Set image
    let image = document.getElementById("carImage")
    image.src = selector.imageSrc;
    image.style.width = "640px";
};











/* 
I did not explore refactoring options to make the code more re-usable because I did this project early in my Javascript career and it took a while to debug. 
I had to move on to other pojects once this one had met the task objectives.
*/








