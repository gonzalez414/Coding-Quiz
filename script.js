const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');

startButton.addEventListener('click', startGame)

function startGame() {
  console.log('Started');
  startButton.classList.add('hide');
  questionContainerElement.classList.remove('hide');
  setNextQuestion()
}

function setNextQuestion() {

}

function selectAnswer() {

}

const question = [
  {
    question: "What does CSS stand for?",
  answers: {
      a: 'Cursive Standard Style',
      b: 'Crazy Style Style',
      c: 'Cascading Style Sheets',
      d: 'Creative Style Station'
  },
  correctAnswer: 'c'

},
{
  question: "What is 10*10?",
  answers: {
      a: '10',
      b: '100,000',
      c: '1000',
      d: '100'
  },
  correctAnswer: '100'
},
{
  question: "what is a Boolean?",
  answers: {
      a: 'represents one of two values: true or false',
      b: 'represent and manipulate a sequence of characters',
      c: 'block of code designed to perform a particular task',
      d: 'none of the above'
  },
  correctAnswer: 'a'
},
{
  question: "HyperText Markup Language is short for.",
  answers: {
      a: 'String',
      b: 'HTMl',
      c: 'boolean',
      d: 'all of the above'
  },
  correctAnswer: 'b'

  }
]



  

    

  

 


