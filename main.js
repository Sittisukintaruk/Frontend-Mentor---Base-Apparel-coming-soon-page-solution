const form = document.getElementById("form");
const input = document.getElementById("input");
const error = document.getElementById("error");
const text = document.getElementById("errorText");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (event) => {
  const email = input.value;
  event.preventDefault();
  if (!emailRegex.test(email)) {
    showError();
  } else {
    hideError();
  }
});

const showError = () => {
  error.classList.remove("hidden");
  error.classList.add("flex");
  text.classList.remove("invisible");
};

const hideError = () => {
  error.classList.add("hidden");
  text.classList.add("invisible");
};
