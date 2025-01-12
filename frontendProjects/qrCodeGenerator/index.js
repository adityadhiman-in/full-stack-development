const img = document.querySelector("img");
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", () => {
  try {
    if (input.value) {
      img.setAttribute(
        "src",
        "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
          input.value
      );
      img.classList.add("show");
      input.value = "";
    } else {
      alert("Please enter a value to generate a QR code");
    }
  } catch (error) {
    alert("Something went wrong! Please try after sometime.");
    img.setAttribute("src", "");
    input.value = "";
  }
});
