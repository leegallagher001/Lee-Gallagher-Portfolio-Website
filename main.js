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
    for (let i = 0; i < localStorage.length; i++) { // for each item in local storage

        const key = localStorage.key(i); // defines each key in local storage

        const blogPost = JSON.parse(this.localStorage.getItem(key)); // parses JSON string from local storage back into an object that the JavaScript can work with

        console.log("Title: " + blogPost.title); // logs title to console
        console.log("Date: " + blogPost.date); // logs date to console
        console.log("Article: " + blogPost.article); // logs article to console

        console.log("---------------------------"); // divider line for readability

        const blogDisplay = document.getElementById("blog-entries-display");
        const blogContainer = document.createElement("div");
        const blogEntry = document.createElement("div");

        blogContainer.style.border = "2px solid black";
        blogContainer.style.backgroundColor = "#5C5D5C";
        blogContainer.style.color = "white";
        blogContainer.style.marginBottom = "10px";
        blogContainer.style.display = "inline-block";
        blogContainer.style.width = "100%";

        blogEntry.style.margin = "20px";

        blogContainer.appendChild(blogEntry);

        const blogTitle = document.createElement("h2");
        blogTitle.innerHTML = blogPost.title;
        blogEntry.appendChild(blogTitle);

        const blogDate = document.createElement("p");
        blogDate.innerHTML = blogPost.date;
        blogEntry.appendChild(blogDate);

        const blogArticle = document.createElement("p");
        blogArticle.innerHTML = blogPost.article;
        blogEntry.appendChild(blogArticle);

        blogDisplay.appendChild(blogContainer);

    }
})