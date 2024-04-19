/* ========================= Form Page ==========================*/
console.clear();

const form = document.querySelector('[data-js="form"]');
const userQuestionInput = document.querySelector(
  '[data-js="user-question-input"]'
);
const userAnswerInput = document.querySelector(
  '[data-js="user-answer-input"]'
);


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
});

const inputCharactersLeft = document.createElement('p');
inputCharactersLeft.classList.add("remaining-characters");


