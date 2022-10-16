export const fetchQuestions = async () => {
  let response = await fetch(
    "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"
  );
  response = await response.json();
  return response.results;
};

export const createQuestion = (question, questionElm) => {
  let q = "<p>" + question.question + "</p>";
  let randomNumber = getRandomNumber(0, 3);

  let options = "<ul class='list-unstyled'>";

  let incorrect_answers = [0, 1, 2];
  for (let index = 0; index < 4; index++) {
    if (index === randomNumber) {
      options +=
        "<li class='bg-danger cp m-2' id='correct'>" +
        question.correct_answer +
        "</li>";
    } else {
      options +=
        "<li class='bg-info cp m-2 wrong'>" +
        question.incorrect_answers[incorrect_answers[0]] +
        "</li>";
      incorrect_answers.shift();
    }
  }

  questionElm.innerHTML = q + "<br>" + options;
};

export function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}


