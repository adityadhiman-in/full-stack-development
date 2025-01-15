const button = document.querySelector("button");
const colors = document.querySelectorAll(".colors");

// Function to generate random colors

const getRandomColors = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// function to set colors in color pallate

const setColors = () => {
  colors.forEach((colorDiv) => {
    const newColor = getRandomColors();
    colorDiv.style.backgroundColor = newColor;
    colorDiv.textContent = newColor;
  });
};

button.addEventListener("click", setColors);

// initialise with colors
setColors();
