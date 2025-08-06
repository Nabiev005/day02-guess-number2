const questions = [
  {
    question: "Кыргызстандын борбору кайсы шаар?",
    answers: ["Ош", "Бишкек", "Талас", "Нарын"],
    correct: "Бишкек",
  },
  {
    question: "HTML эмне үчүн колдонулат?",
    answers: ["Сүрөт иштетүү", "Текст редактор", "Веб бет түзүү", "Файл сактоо"],
    correct: "Веб бет түзүү",
  },
  {
    question: "JavaScript кайсы тилге кирет?",
    answers: ["Программалоо", "Сүрөт тартуу", "Англис тили", "Дизайн"],
    correct: "Программалоо",
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next");
const scoreEl = document.getElementById("score");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.classList.add("answer-btn");
    btn.textContent = answer;
    btn.addEventListener("click", () => selectAnswer(answer));
    answersEl.appendChild(btn);
  });
}

function selectAnswer(answer) {
  const correct = questions[currentQuestion].correct;
  if (answer === correct) {
    score++;
  }
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    nextBtn.disabled = true;
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = "Сынак бүтү";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.textContent = `Сенин упайың: ${score} / ${questions.length}`;
}

// Start app
showQuestion();
nextBtn.disabled = true;
