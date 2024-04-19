/* ========================= Form Page ==========================*/
console.clear();

const form = document.querySelector('[data-js="form"]');
const userQuestionInput = document.querySelector(
  '[data-js="user-question-input"]'
);
console.log(userQuestionInput);
const userAnswerInput = document.querySelector('[data-js="user-answer-input"]');
const characterLeftQuestion = document.querySelector(
  '[data-js="remaining-characters-question"]'
);
const characterLeftAnswer = document.querySelector(
  '[data-js="remaining-characters-answer"]'
);
const MAX_LENGTH = 150;

const onSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  event.target.reset();
};


userQuestionInput.addEventListener("input", (e) => {
  characterLeftQuestion.textContent = MAX_LENGTH - e.target.value.length;
});
userAnswerInput.addEventListener("input", (e) => {
  characterLeftAnswer.textContent = MAX_LENGTH - e.target.value.length;
});

form.addEventListener("submit", onSubmit);
