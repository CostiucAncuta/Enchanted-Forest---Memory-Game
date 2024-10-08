const section = document.querySelector("section");
const timeRemainingCount = document.querySelector("span");
let timeRemaining = 60;
const flipsRemainingCount = document.querySelector("span");
const timeDisplay = document.getElementById("time-remaining");
const flipsDisplay = document.getElementById("flips");
const modal = document.getElementById("gameModal");
const modalMessage = document.getElementById("modalMessage");
const closeBtn = document.querySelector(".close-btn");
const restartBtn = document.getElementById("restartBtn");

let timeLeft = 60;
let flipsCount = 0;
let timer;
let hasStarted = false; // Flag to track if the game has started
let matches = 0; // keeping track of the number of matches

const getData = () => [
  { imgSrc: "images/dragon.png", name: "dragon" },
  { imgSrc: "images/echantedtree.png", name: "echantedtree" },
  { imgSrc: "images/fairy-moon.png", name: "fairy-moon" },
  { imgSrc: "images/glowingEgg1.png", name: "glowingEgg1" },
  { imgSrc: "images/glowingmushrooms.png", name: "glowingmushroms" },
  { imgSrc: "images/mushrooms.png", name: "mushrooms" },
  { imgSrc: "images/twofairies.png", name: "twofairies" },
  { imgSrc: "images/twowhitehorses.png", name: "twowhitehorses" },
  { imgSrc: "images/whitehorse.png", name: "whitehorse" },
  { imgSrc: "images/dragon.png", name: "dragon" },
  { imgSrc: "images/echantedtree.png", name: "echantedtree" },
  { imgSrc: "images/fairy-moon.png", name: "fairy-moon" },
  { imgSrc: "images/glowingEgg1.png", name: "glowingEgg1" },
  { imgSrc: "images/glowingmushrooms.png", name: "glowingmushroms" },
  { imgSrc: "images/mushrooms.png", name: "mushrooms" },
  { imgSrc: "images/twofairies.png", name: "twofairies" },
  { imgSrc: "images/twowhitehorses.png", name: "twowhitehorses" },
  { imgSrc: "images/whitehorse.png", name: "whitehorse" },
];
// Function to start the timer
function startTimer() {
  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      timeDisplay.textContent = timeLeft;
    } else {
      clearInterval(timer);
      showModal("Time is up! Game Over :(");
    }
  }, 1000); // Update every second
}

// Function to increment flips count
function incrementFlips() {
  flipsCount++;
  flipsDisplay.textContent = flipsCount;
}

// Function to show the modal with a custom message
function showModal(message) {
  modalMessage.textContent = message;
  modal.style.display = "block";
}

// Function to hide the modal
function hideModal() {
  modal.style.display = "none";
}

// Restart the game when the restart button is clicked
restartBtn.addEventListener("click", () => {
  hideModal();
  // Reset the game state, like reloading the page or resetting variables
  location.reload();
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", hideModal);

//Randomize
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

//Card generator
const cardGenerator = () => {
  const cardData = randomize();
  //generate the html
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //attach the info to the cards
    face.src = item.imgSrc;
    back.src = "images/card.back.jpg";
    back.style.backgroundSize = "cover";

    card.setAttribute("name", item.name);
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (event) => {
      if (!hasStarted) {
        startTimer();
        hasStarted = true; // Set the flag to true to prevent restarting the timer
      }
      card.classList.toggle("toggleCard");
      checkCards(event);
      incrementFlips();
    });
  });
};
//check cards
const checkCards = (event) => {
  console.log(event);
  const clickedCard = event.target;

  // Prevent clicking on already flipped cards
  if (clickedCard.classList.contains("flipped")) return;

  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");

      // If cards match, keep them flipped and optionally add another class if needed
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
      matches++;
      checkWin();
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1200);
      });
    }
  }
};

const checkWin = () => {
  if (matches === getData().length / 2) {
    clearInterval(timer); // Stop the timer
    showinScreen(); // show the winning screen
  }
};

const showinScreen = () => {
  window.location.href = "win.html";
};
function startGame() {
  cardGenerator();
}
document.addEventListener("DOMContentLoaded", startGame);

// JavaScript to handle mute/unmute functionality
const muteButton = document.getElementById("mute-btn");
const audioElement = document.getElementById("background-music");

muteButton.textContent = audioElement.muted ? "Unmute" : "Mute";
audioElement.addEventListener("canplaythrough", () => {
  console.log("Audio is ready to play.");
});
muteButton.addEventListener("click", () => {
  // Check if the audio is currently muted
  if (audioElement.muted) {
    // Unmute the audio
    audioElement.muted = false;
    audioElement
      .play()
      .catch((error) => console.log("Error playing audio:", error)); // Play the audio when unmuting
    muteButton.textContent = "Mute";
  } else {
    // Mute and pause the audio
    audioElement.muted = true;
    audioElement.pause(); // Pause the audio when muting
    muteButton.textContent = "Unmute";
  }
});

// document.addEventListener("DOMContentLoaded", () => {
//   // Get the button and the audio element
//   const muteButton = document.getElementById("mute-btn");
//   const audioElement = document.getElementById("background-music");

//   // Check if both elements exist
//   if (muteButton && audioElement) {
//     // Set the initial button text based on the audio element's state
//     muteButton.textContent = audioElement.muted ? "Unmute" : "Mute";

//     // Add an event listener for the mute button
//     muteButton.addEventListener("click", () => {
//       // Check if the audio is currently muted
//       if (audioElement.muted) {
//         // Unmute the audio
//         audioElement.muted = false;
//         muteButton.textContent = "Mute"; // Change button text to "Mute"
//       } else {
//         // Mute the audio
//         audioElement.muted = true;
//         muteButton.textContent = "Unmute"; // Change button text to "Unmute"
//       }
//     });
//   } else {
//     console.error("Mute button or audio element not found in the DOM.");
//   }
// });
