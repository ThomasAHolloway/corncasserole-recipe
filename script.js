// 1. Click title to change its color
const title = document.querySelector("h1");
title.addEventListener("click", () => {
    title.style.color = title.style.color === "orange" ? "#b87333" : "orange";
});

// 2. Double-click description to toggle bold
const description = document.querySelector(".description");
description.addEventListener("dblclick", () => {
    description.style.fontWeight = description.style.fontWeight === "bold" ? "normal" : "bold";
});

// 3 & 4. Hover over image to add/remove glow
const image = document.querySelector("img");
image.addEventListener("mouseenter", () => {
    image.style.boxShadow = "0 0 20px 5px #ffd700";
});
image.addEventListener("mouseleave", () => {
    image.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
});

// 5. Click ingredients list to highlight
const ingredients = document.querySelector("ul");
ingredients.addEventListener("click", () => {
    ingredients.style.backgroundColor = ingredients.style.backgroundColor === "transparent" ? "#fff3e0" : "transparent";
});

// 6 & 7. Hover over instructions to change background
const instructions = document.querySelector("ol");
instructions.addEventListener("mouseenter", () => {
    instructions.style.backgroundColor = "#fff8dc";
});
instructions.addEventListener("mouseleave", () => {
    instructions.style.backgroundColor = "transparent";
});

// 8 & 9. Footer hover to change text color
const footer = document.querySelector("footer");
footer.addEventListener("mouseenter", () => {
    footer.style.color = "#d2691e";
});
footer.addEventListener("mouseleave", () => {
    footer.style.color = "#7b6a39";
});

// 10. Press "b" to toggle page background
document.addEventListener("keydown", (e) => {
    if(e.key === "b") {
        document.body.style.backgroundColor = document.body.style.backgroundColor === "white" ? "#fffaf2" : "white";
    }
});

// 11. Click the card to slightly enlarge it
const card = document.querySelector(".card");
card.addEventListener("click", () => {
    card.style.transform = "scale(1.05)";
    setTimeout(() => {
        card.style.transform = "scale(1)";
    }, 200);
});

// 12. Right-click image to rotate
image.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // prevent default context menu
    image.style.transform = image.style.transform === "rotate(15deg)" ? "rotate(0deg)" : "rotate(15deg)";
});

// 13. Hover over title to underline
title.addEventListener("mouseenter", () => {
    title.style.textDecoration = "underline";
});
title.addEventListener("mouseleave", () => {
    title.style.textDecoration = "none";
});


