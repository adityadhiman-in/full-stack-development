const img = document.querySelector("img");
const button = document.querySelector("button");
const text = document.querySelector("input");

button.addEventListener("click", () => {
  img.setAttribute(
    "src",
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      text.value
  );
  img.classList.add("show");
  console.log(text.value);
});
