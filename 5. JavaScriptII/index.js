const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
const count = document.getElementById("count");

let counter = 0;

increase.addEventListener("click", () => {
  counter++;
  count.textContent = counter;
});

decrease.addEventListener("click", () => {
  counter--;
  count.textContent = counter;
});

reset.addEventListener("click", () => {
  counter = 0;
  count.textContent = counter;
});
