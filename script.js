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
// ----- SELECT ELEMENTS -----
const holes = document.querySelectorAll('.hole'); // array of holes
const scoreDisplay = document.getElementById('score'); // score span
const missesDisplay = document.getElementById('misses'); // optional misses span
const timeDisplay = document.getElementById('time'); // countdown timer
const startButton = document.getElementById('start'); // start button

// ----- GAME STATE VARIABLES -----
let score = 0;
let misses = 0;
let timeLeft = 30; // game duration in seconds
let moleTimerIds = []; // array to track active mole timeouts
let countdownTimerId = null;
let gameActive = false;

// ----- FUNCTIONS -----

// Reset game state
function resetGame() {
    score = 0;
    misses = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    missesDisplay.textContent = misses;
    timeDisplay.textContent = timeLeft;
    clearAllMoles();
}

// Start the game
function startGame() {
    if (gameActive) return; // prevent double start
    gameActive = true;
    resetGame();
    spawnMole(); // start spawning moles
    countdownTimerId = setInterval(updateTimer, 1000); // start countdown
}

// End the game
function endGame() {
    gameActive = false;
    clearInterval(countdownTimerId);
    clearAllMoles();
    alert(`Game Over!\nScore: ${score}\nMisses: ${misses}`);
}

// Update timer every second
function updateTimer() {
    timeLeft--;
    timeDisplay.textContent = timeLeft;
    if (timeLeft <= 0) {
        endGame();
    }
}

// Spawn a mole in a random hole
function spawnMole() {
    if (!gameActive) return;

    const availableHoles = Array.from(holes).filter(hole => !hole.classList.contains('mole'));
    if (availableHoles.length === 0) return; // all holes occupied

    const randomHole = availableHoles[Math.floor(Math.random() * availableHoles.length)];
    randomHole.classList.add('mole');

    // Mole disappears after 800ms if not clicked
    const moleTimeout = setTimeout(() => {
        if (randomHole.classList.contains('mole')) {
            randomHole.classList.remove('mole');
            misses++;
            missesDisplay.textContent = misses;
        }
    }, 800);

    moleTimerIds.push(moleTimeout);

    // Spawn next mole after random delay (300-1000ms)
    const nextMoleTimeout = setTimeout(spawnMole, Math.random() * 700 + 300);
    moleTimerIds.push(nextMoleTimeout);
}

// Clear all active mole timeouts and remove mole classes
function clearAllMoles() {
    moleTimerIds.forEach(id => clearTimeout(id));
    moleTimerIds = [];
    holes.forEach(hole => hole.classList.remove('mole'));
}

// ----- EVENT LISTENERS -----

// Start button
startButton.addEventListener('click', startGame);

// Handle mole clicks (hit)
holes.forEach(hole => {
    hole.addEventListener('click', () => {
        if (!gameActive) return;
        if (hole.classList.contains('mole')) {
            hole.classList.remove('mole');
            score++;
            scoreDisplay.textContent = score;
        } else {
            // optional: count as miss if clicking empty hole
            misses++;
            missesDisplay.textContent = misses;
        }
    });
});



