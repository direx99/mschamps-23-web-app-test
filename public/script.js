const form = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const outputDiv = document.querySelector("#output");

form.addEventListener("submit", (e) => {
  const randomNumber = Math.floor(Math.random() * 10000);
  e.preventDefault();
  const name = nameInput.value;
  outputDiv.innerHTML = `
  Hello, ${name}! It's nice to meet you.<br />
  Your random magic number is ${randomNumber}.<br />
  Thanks for visiting our app.
  `;
});

var navigateButton = document.getElementById("navigate");

navigateButton.addEventListener("click", function () {
  window.location.href = "home.html";
});
