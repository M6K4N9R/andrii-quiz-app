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

// const bookmarkButton = document.querySelector(
//   '[data-js="bookmark--toggle-button"]'
// );
// const toggledImage = document.querySelector('[data-js="bookmark--toggle-img"]');

// bookmarkButton.addEventListener("click", () => {
//   const currentSource = toggledImage.getAttribute("src");
//   const newSource = currentSource.includes("bookmark_transparent.png")
//     ? "./resources/bookmark_filled.png"
//     : "./resources/bookmark_transparent.png";

//   toggledImage.setAttribute("src", newSource);
// });

// /*------- Show Answer Text Feature --------------------------------------------------*/

// const showAnswerButton = document.querySelector(
//   '[data-js="button--answer--hidden"]'
// );
// const showAnswerText = document.querySelector('[data-js="answer-text-hidden"]');

// showAnswerButton.addEventListener("click", () => {
//   showAnswerText.classList.toggle("answer-text-hidden");
//   showAnswerButton.textContent = showAnswerButton.textContent.includes(
//     "Show answer"
//   )
//     ? "Hide answer"
//     : "Show answer";
// });

/* ========================= Form Page ==========================*/

const userCardContainer = document.querySelector(
  '[data-js="user--cards--container"]'
);
const form = document.querySelector('[data-js="form"]');
const userQuestionInput = document.querySelector(
  '[data-js="user-question-input"]'
);
const userAnswerInput = document.querySelector('[data-js="user-answer-input"]');
const characterLeftQuestion = document.querySelector(
  '[data-js="remaining-characters-question"]'
);
const characterLeftAnswer = document.querySelector(
  '[data-js="remaining-characters-answer"]'
);
const MAX_LENGTH = 150;

userQuestionInput.addEventListener("input", (e) => {
  characterLeftQuestion.textContent = MAX_LENGTH - e.target.value.length;
});
userAnswerInput.addEventListener("input", (e) => {
  characterLeftAnswer.textContent = MAX_LENGTH - e.target.value.length;
});

function createUserCard() {
  const newCard = document.createElement("article");
  newCard.classList.add("question-card");
  newCard.classList.add("user--card");

  const newCardButtonShowAnswer = document.createElement("button");
  newCardButtonShowAnswer.classList.add("bookmark");
  newCardButtonShowAnswer.setAttribute("aria-label", "Bookmark");
  newCardButtonShowAnswer.setAttribute("data-js", "bookmark--toggle-button");

  const newCardImage = document.createElement("img");
  newCardImage.classList.add("bookmark-img");
  newCardImage.setAttribute("src", "./resources/bookmark_transparent.png");
  newCardImage.setAttribute("alt", "Bookmark this question");
  newCardImage.setAttribute("data-js", "bookmark--toggle-img");

  const newCardQuestionText = document.createElement("h2");
  newCardQuestionText.classList.add("question-text");
  newCardQuestionText.textContent = data.userQuestion.value;

  const newCardButtonHideAnswer = document.createElement("button");
  newCardButtonHideAnswer.classList.add("show-answer");
  newCardButtonHideAnswer.setAttribute("data-js", "button--answer--hidden");
  newCardButtonHideAnswer.textContent = "Show answer";

  const newCardAnswerText = document.createElement("p");
  newCardAnswerText.classList.add("answer-text answer-text-hidden");
  newCardAnswerText.setAttribute("data-js", "answer-text-hidden");
  newCardAnswerText.textContent = data.userAnswer.value;

  const newCardUnorderedList = document.createElement("ul");
  newCardUnorderedList.classList.add("tags");

  const newCardListTag1 = document.createElement("li");
  newCardListTag1.classList.add("seasons");
  newCardListTag1.textContent = "# Season 1";

  const newCardListTag2 = document.createElement("li");
  newCardListTag2.classList.add("seasons");
  newCardListTag2.textContent = "# Season 2";

  const newCardListTag3 = document.createElement("li");
  newCardListTag3.classList.add("seasons");
  newCardListTag3.textContent = "# Season 3";

  newCardListTag1.append(newCardUnorderedList);
  newCardListTag2.append(newCardUnorderedList);
  newCardListTag3.append(newCardUnorderedList);

  newCardButtonShowAnswer.append(newCard);
  newCardImage.append(newCard);
  newCardQuestionText.append(newCard);
  newCardButtonHideAnswer.append(newCard);
  newCardAnswerText.append(newCard);
  newCardUnorderedList.append(newCard);

  newCard.append(userCardContainer);
}

const onSubmit = (event, callback) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  createUserCard;
  console.log(data);

  event.target.reset();
};

form.addEventListener("submit", onSubmit);

/* =============================== Profile Page ============================= */

/* just a comment */
