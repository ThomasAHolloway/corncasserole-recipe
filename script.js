// 1. Click on title to change color
const title = document.querySelector("h1");
title.addEventListener("click", () => {
    title.style.color = "#ff6600"; // turns title orange on click
});

// 2. Double-click on description to bold/unbold
const description = document.querySelector(".description");
description.addEventListener("dblclick", () => {
    description.style.fontWeight = description.style.fontWeight === "bold" ? "normal" : "bold";
});

// 3. Hover over image to add a border glow
const image = document.querySelector("img");
image.addEventListener("mouseenter", () => {
    image.style.boxShadow = "0 0 20px 5px #ffd700"; // golden glow
});
image.addEventListener("mouseleave", () => {
    image.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)"; // original shadow
});

// 4. Click on ingredients list to highlight items
const ingredients = document.querySelector("ul");
ingredients.addEventListener("click", () => {
    ingredients.style.backgroundColor = "#fff3e0"; // light highlight
});

// 5. Mouse over instructions to change background color
const instructions = document.querySelector("ol");
instructions.addEventListener("mouseover", () => {
    instructions.style.backgroundColor = "#fff8dc"; // light cream
});
instructions.addEventListener("mouseout", () => {
    instructions.style.backgroundColor = "transparent"; // reset
});

// 6. Footer hover to change text color
const footer = document.querySelector("footer");
footer.addEventListener("mouseenter", () => {
    footer.style.color = "#d2691e"; // chocolate color
});
footer.addEventListener("mouseleave", () => {
    footer.style.color = "#7b6a39"; // original color
});

// 7. Keypress event to toggle background color
document.addEventListener("keydown", (e) => {
    if(e.key === "b") { // press "b" to toggle page background
        document.body.style.backgroundColor = document.body.style.backgroundColor === "white" ? "#fffaf2" : "white";
    }
});

// 8. Click anywhere on card to slightly enlarge it
const card = document.querySelector(".card");
card.addEventListener("click", () => {
    card.style.transform = "scale(1.05)";
    setTimeout(() => {
        card.style.transform = "scale(1)";
    }, 200);
});

