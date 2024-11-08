const questions = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Lisbon",
    correct: "c"
  },
  {
    question: "Which planet is known as the Red Planet?",
    a: "Earth",
    b: "Mars",
    c: "Jupiter",
    d: "Saturn",
    correct: "b"
  },
  {
    question: "What is 2 + 2?",
    a: "3",
    b: "4",
    c: "5",
    d: "6",
    correct: "b"
  }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option");
const scoreElement = document.getElementById("score");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  options[0].innerText = currentQuestion.a;
  options[1].innerText = currentQuestion.b;
  options[2].innerText = currentQuestion.c;
  options[3].innerText = currentQuestion.d;
}

function selectAnswer(answer) {
  selectedAnswer = answer;
  options.forEach(option => option.classList.remove("selected"));
  document.getElementById(answer).classList.add("selected");
}

function nextQuestion() {
  if (selectedAnswer === questions[currentQuestionIndex].correct) {
    score++;
  }
  currentQuestionIndex++;
  selectedAnswer = null;
  options.forEach(option => option.classList.remove("selected"));
  
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    displayScore();
  }
}

function displayScore() {
  questionElement.style.display = "none";
  document.querySelector(".options").style.display = "none";
  document.getElementById("submit").style.display = "none";
  scoreElement.innerText = `You scored ${score} out of ${questions.length}`;
}

loadQuestion();
