// Declaring a variable to create my questions 
var myQuestions = [
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
    }]; // end Questions
    
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');

    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton)

    function generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton)

    function showQuestions(myQuestions, quizContainer)

    // we'll need a place to store the output and the answer choices
    var output = [];
    var answers;

    // for each question...
    for(var i=0; i<questions.length; i++){
      
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for(letter in questions[i].answers){

        // ...add an html radio button
        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join('');
  


  function showResults(questions, quizContainer, resultsContainer){
    
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // keep track of user's answers
    var userAnswer = '';
    var numCorrect = 0;
    
    // for each question...
    for(var i=0; i<questions.length; i++){

      // find selected answer
      userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
      
      // if answer is correct
      if(userAnswer===questions[i].correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        
        // color the answers green
        answerContainers[i].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[i].style.color = 'red';
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  // show questions right away
  showQuestions(myQuestions, quizContainer);
  
  // on submit, show results
  submitButton.onclick = function(){
    showResults(myQuestions, quizContainer, resultsContainer);
  }



  

    

  

 


