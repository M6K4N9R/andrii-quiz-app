const darkModeButton = document.querySelector('[data-js="dark--mode--button"]');
const profilePageContainer = document.querySelector(
  '[data-js="body--profile--page"]'
);
console.log(darkModeButton, profilePageContainer);
darkModeButton.addEventListener("click", () => {
  profilePageContainer.classList.toggle("dark-mode-theme");
});
