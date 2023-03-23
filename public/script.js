const form = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const outputDiv = document.querySelector("#output");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value;
  outputDiv.innerHTML = `Hello, ${name}! It's nice to meet you.<br />Thanks for visiting my web app.`;
});
