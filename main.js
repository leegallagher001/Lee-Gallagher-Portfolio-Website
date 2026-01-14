/* Hamburger Navigation Menu Toggle */

const hamburgerIcon = document.getElementById("hamburger-icon"); // Selects the hamburger icon element by ID
const menu = document.getElementById("menu"); // Selects the menu element by ID
const hamburgerMenu = document.querySelector(".hamburger-menu"); // Runs a query to select the first element with the class "hamburger-menu"

hamburgerIcon.addEventListener("click", function () { // Listens for a click on the hamburger icon element
    hamburgerMenu.classList.toggle("dropdown-menu"); // When click detected, toggle .dropdown-menu class
});

/* New Entry Form Toggle */

const newEntryButton = document.querySelector(".new-entry-btn");
const newEntryForm = document.getElementById("new-blog-entry-form");
const newEntryOpen = document.querySelector(".new-blog-entry");

newEntryButton.addEventListener("click", function () {
    newEntryOpen.classList.toggle("open-form");
});

/* New Entry Form Submit Button */
/* Submits the data entered to local storage */

const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function () {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const article = document.getElementById("article").value;

    const blogPost = {
        title: title,
        date: date,
        article: article
    }

    localStorage.setItem(title, JSON.stringify(blogPost));

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("article").value = "";
})

/* Display Saved Blog Posts */

window.addEventListener("load", function () {
    for (let i = 0; i < localStorage.length; i++) {
        const displayTitle = localStorage.getItem(title); // Get value by key
        const displayDate = localStorage.getItem(date);
        const displayArticle = localStorage.getItem(article);
        console.log("Title: " + displayTitle);
        console.log("Date: " + displayDate);
        console.log("Article: " + displayArticle);
        console.log("---------------------------");
    }
})