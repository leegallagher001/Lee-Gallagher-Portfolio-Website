/* Hamburger Navigation Menu Toggle */

const hamburgerIcon = document.getElementById("hamburger-icon"); // Selects the hamburger icon element by ID
const menu = document.getElementById("menu"); // Selects the menu element by ID
const hamburgerMenu = document.querySelector(".hamburger-menu"); // Runs a query to select the first element with the class "hamburger-menu"

hamburgerIcon.addEventListener("click", function () { // Listens for a click on the hamburger icon element
    hamburgerMenu.classList.toggle("dropdown-menu"); // When click detected, toggle .dropdown-menu class
});