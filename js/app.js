// variables
const userPoints = document.querySelector("#userPoints")
const userWrongs = document.querySelector("#userWrongs")
const questionElement = document.querySelector("#question")
const choicesElements = Array.from(document.getElementsByClassName("choice"))
const nextQuestionBtn = document.querySelector("#nextQuestion")

let currentQuestion = 0
let points = 0
let wrongs = 0
let answerChosen = null

// questions
const questions = [
  {
    question: "Qual foi o primeiro filme que eles viram juntos?",
    choices: ["Homem-aranha", "Moana", "Harry Potter", "Mario"],
    answer: "Mario",
  },
  {
    question: "Qual foi o dia em que eles começaram a conversar?",
    choices: ["28/03", "01/04", "21/03", "07/04"],
    answer: "28/03",
  },
  {
    question: "Que filme eles viram no dia do pedido de namoro?",
    choices: ["Barbie", "Sr Dos Anéis", "Mario", "Peppa"],
    answer: "Barbie",
  },
  {
    question:
      "Qual era a cor da blusa que a Laura estava usando no dia do segundo pedido de namoro?",
    choices: ["Branca", "Amarela", "Azul", "Verde"],
    answer: "Branca",
  },
  {
    question:
      "Qual foi a música que a Laura postou com o Alison pela primeira vez?",
    choices: [
      "Senhor do Tempo",
      "Mágico de Oz",
      "20 Ligações",
      "Samba in Paris",
    ],
    answer: "Samba in Paris",
  },
  {
    question:
      "Qual foi a música que o Alison postou com a Laura pela primeira vez?",
    choices: [
      "Big City Blues",
      "Papo Reto",
      "Star Shopping",
      "2k24 Vem Na Minha",
    ],
    answer: "Star Shopping",
  },
]

// functions
function loadQuestion() {
  const currentQuestionData = questions[currentQuestion]
  questionElement.innerText = currentQuestionData.question

  const choices = currentQuestionData.choices

  choices.forEach((choice, index) => {
    choicesElements[index].innerText = choices[index]
  })

  answerChosen = false
}

function checkAnswer(e) {
  if (answerChosen) return

  answerChosen = true

  const targetEl = e.target

  if (targetEl.innerText === questions[currentQuestion].answer) {
    alert("Resposta Correta!")
    points++
    userPoints.innerText = `Pontuação: ${points}`
  } else {
    alert(`Errado! A resposta certa é: ${questions[currentQuestion].answer}`)
    wrongs++
    userWrongs.innerText = `Erros: ${wrongs}`
  }
}

function toNextQuestion() {
  if (answerChosen) {
    currentQuestion++
    if (currentQuestion < questions.length) {
      loadQuestion()
    } else {
      alert(
        `Você chegou ao final do jogo! Você acertou ${points} de ${questions.length}!`
      )
      restartQuiz()
    }
  }
}

function restartQuiz() {
  currentQuestion = 0
  points = 0
  wrongs = 0
  userPoints.innerText = `Erros: 0`
  userWrongs.innerText = `Erros: 0`

  loadQuestion()
}

loadQuestion()

// events
choicesElements.forEach((choice) => {
  choice.addEventListener("click", checkAnswer)
})

nextQuestionBtn.addEventListener("click", (e) => {
  if (!answerChosen) {
    alert("Você precisa responder a pergunta para avançar!")
  } else {
    toNextQuestion()
  }
})
