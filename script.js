import { fetchQuestions, getRandomNumber, createQuestion } from "./js/helpers.js";

let questionElm = document.getElementById("question");

let questions = await fetchQuestions();

createQuestion(questions[0], questionElm);

document.getElementById('correct').onclick = () => {
    console.log('correct')
}

document.querySelectorAll('.wrong').forEach(element => {
    element.onclick = () => {
        console.log('wrong')
    }
});




