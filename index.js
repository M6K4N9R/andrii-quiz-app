/* ========================= Home Page ==========================*/

/*------- Toggle Button with toggle class just for practice --------------------------*/

// const bookmarkButton = document.querySelector(
//   '[data-js="bookmark--toggle-button"]'
// );
// console.log(bookmarkButton);
// bookmarkButton.addEventListener("click", () => {
//   bookmarkButton.classList.toggle("bookmark--toggle-button");
// });

/*------- Toggle Button with toggle Attribute-----------------------------------------*/

const bookmarkButton = document.querySelector(
  '[data-js="bookmark--toggle-button"]'
);
const toggledImage = document.querySelector('[data-js="bookmark--toggle-img"]');

bookmarkButton.addEventListener("click", () => {
  const currentSource = toggledImage.getAttribute("src");
  const newSource = currentSource.includes("bookmark_transparent.png")
    ? "./resources/bookmark_filled.png"
    : "./resources/bookmark_transparent.png";

  toggledImage.setAttribute("src", newSource);
});

/*------- Show Answer Text Feature --------------------------------------------------*/

const showAnswerButton = document.querySelector(
  '[data-js="button--answer--hidden"]'
);
const showAnswerText = document.querySelector('[data-js="answer-text-hidden"]');

showAnswerButton.addEventListener("click", () => {
  showAnswerText.classList.toggle("answer-text-hidden");
  showAnswerButton.textContent = showAnswerButton.textContent.includes(
    "Show answer"
  )
    ? "Hide answer"
    : "Show answer";
});

/* ========================= Profile Page ==========================*/

const darkModeButton = document.querySelector('[data-js="dark--mode--button"]');
const profilePageContainer = document.querySelector(
  '[data-js="body--profile--page"]'
);
console.log(darkModeButton, profilePageContainer);
darkModeButton.addEventListener("click", () => {
  profilePageContainer.classList.toggle("dark-mode-theme");
});
/* ========================= Fin ==========================*/
