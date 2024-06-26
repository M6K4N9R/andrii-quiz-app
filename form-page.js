/* ========================= Form Page ==========================*/

/* ==== Character Count -------------------------------------------*/

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
  // /* ----------Trying something new here

  if (userQuestionInput.value.length > 0) {
    userQuestionInput.setAttribute("rows", 10);
    userQuestionInput.classList.add("input--custom--styling");
  } else {
    userQuestionInput.setAttribute("rows", 1);
    userQuestionInput.classList.remove("input--custom--styling");
  }

  // Finish trying -------------- */

  characterLeftQuestion.textContent = MAX_LENGTH - e.target.value.length;
});
userAnswerInput.addEventListener("input", (e) => {
  // /* ----------Trying something new here

  if (userAnswerInput.value.length > 0) {
    userAnswerInput.setAttribute("rows", 10);
    userAnswerInput.classList.add("input--custom--styling");
  } else {
    userAnswerInput.setAttribute("rows", 1);
    userAnswerInput.classList.remove("input--custom--styling");
  }

  // Finish trying -------------- */
  characterLeftAnswer.textContent = MAX_LENGTH - e.target.value.length;
});

/* ==== Create a card -------------------------------------------*/

const onSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = document.createElement("article");
  newCard.classList.add("question-card");
  newCard.classList.add("user--card");

  const newCardBookmark = document.createElement("button");
  newCardBookmark.classList.add("bookmark");
  newCardBookmark.setAttribute("aria-label", "Bookmark");
  newCardBookmark.setAttribute("data-js", "bookmark--toggle-button");

  const newCardBookmarkImage = document.createElement("img");
  newCardBookmarkImage.classList.add("bookmark-img");
  newCardBookmarkImage.setAttribute(
    "src",
    "./resources/bookmark_transparent.png"
  );
  newCardBookmarkImage.setAttribute("alt", "Bookmark this question");
  newCardBookmarkImage.setAttribute("data-js", "bookmark--toggle-img");

  /* ===== Add functionality to Bookmark -----------------------------*/

  newCardBookmark.addEventListener("click", () => {
    const currentSource = newCardBookmarkImage.getAttribute("src");
    const newSource = currentSource.includes(
      "./resources/bookmark_transparent.png"
    )
      ? "./resources/bookmark_filled.png"
      : "./resources/bookmark_transparent.png";
    newCardBookmarkImage.setAttribute("src", newSource);
  });
  /*===================================================================*/

  const newCardQuestionText = document.createElement("h2");
  newCardQuestionText.classList.add("question-text");
  newCardQuestionText.textContent = data.userQuestion;

  const newCardButtonShowAnswer = document.createElement("button");
  newCardButtonShowAnswer.classList.add("show-answer");
  newCardButtonShowAnswer.setAttribute("data-js", "button--answer--hidden");
  newCardButtonShowAnswer.textContent = "Show answer";

  const newCardAnswerText = document.createElement("p");
  newCardAnswerText.classList.add("answer-text");
  newCardAnswerText.classList.add("answer-text-hidden");
  newCardAnswerText.setAttribute("data-js", "answer-text-hidden");
  newCardAnswerText.textContent = data.userAnswer;

  /* ===== Add functionality to Show Answer -----------------------------*/

  newCardButtonShowAnswer.addEventListener("click", () => {
    newCardAnswerText.classList.toggle("answer-text-hidden");
    newCardButtonShowAnswer.textContent.includes("Show answer")
      ? (newCardButtonShowAnswer.textContent = "Hide answer")
      : (newCardButtonShowAnswer.textContent = "Show answer");
  });
  /*===================================================================*/

  const newCardUnorderedList = document.createElement("ul");
  newCardUnorderedList.classList.add("tags");

  const newCardListTag1 = document.createElement("li");
  newCardListTag1.classList.add("seasons");
  newCardListTag1.textContent = `# ${data.userTags}`;

  const newCardListTag2 = document.createElement("li");
  newCardListTag2.classList.add("seasons");
  newCardListTag2.textContent = `# ${data.userTags}`;

  const newCardListTag3 = document.createElement("li");
  newCardListTag3.classList.add("seasons");
  newCardListTag3.textContent = `# ${data.userTags}`;

  newCardBookmark.append(newCardBookmarkImage);
  newCardUnorderedList.append(newCardListTag1);
  newCardUnorderedList.append(newCardListTag2);
  newCardUnorderedList.append(newCardListTag3);

  newCard.append(newCardBookmark);
  newCard.append(newCardQuestionText);
  newCard.append(newCardButtonShowAnswer);
  newCard.append(newCardAnswerText);
  newCard.append(newCardUnorderedList);

  userCardContainer.append(newCard);

  event.target.reset();
  characterLeftQuestion.textContent = MAX_LENGTH;
  characterLeftAnswer.textContent = MAX_LENGTH;
  userAnswerInput.rows = 1;
  userAnswerInput.classList.remove("input--custom--styling");
  userQuestionInput.rows = 1;
  userQuestionInput.classList.remove("input--custom--styling");
};

form.addEventListener("submit", onSubmit);

/* =============================== Fin ============================= */
