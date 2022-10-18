import { fetchQuestions, createQuestion } from "./js/helpers.js";

let questionElm = document.getElementById("question");
let result = document.getElementById("result");

let questions = await fetchQuestions();

createQuestion(questions[0], questionElm);

document.getElementById("correct").onclick = () => {
  console.log("correct");
  result.innerHTML = "Dogru Cevap...";
  result.classList.remove("bg-danger");
  result.classList.add("bg-success", "text-light", "text-center", "p-2");
  showResult();
};

document.querySelectorAll(".wrong").forEach((element) => {
  element.onclick = () => {
    console.log("wrong");
    result.innerHTML = "Yanlis Cevap...";
    result.classList.remove("bg-success");
    result.classList.add("bg-danger", "text-light", "text-center", "p-2");
    showResult();
  };
});

const showResult = () => {
  document.querySelectorAll(".list-unstyled > button").forEach((element) => {
    element.classList.add("bg-danger", "text-light");
    element.classList.remove("bg-info");
    element.disabled = true;
  });
  document.getElementById("correct").classList.add("bg-success");
  document.getElementById("correct").classList.remove("bg-danger");
  document.getElementById('next').disabled = false;

//   let next = document.createElement('DIV')
//   next.innerHTML = '<button onclick="nextQuestion()" id="next">Next</button>'
//   next.classList.add('d-flex', 'justify-content-center')
//   document.querySelector('body').appendChild(next)
};

document.getElementById('next').onclick = () => {
    createQuestion(questions[1], questionElm);
}