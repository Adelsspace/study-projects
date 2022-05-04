const container = document.querySelector(".container");

const colors = [
  "darksalmon",
  "darkred",
  "red",
  "blue",
  "green",
  "white",
  "purple",
  "aquamarine",
  "hotpink",
];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}

function setColor(element) {
  const randomColor = getRandomColor();
  element.style.background = randomColor;
  element.style.boxShadow = `0 0 2px ${randomColor}, 0 0 10px ${randomColor}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
