/* global $ */
//creating a reusable object with arguements
function Question (prompt, answers, correctAnswerIndex) {
  this.prompt = prompt;
  this.choices = answers;
  this.correctChoice = correctAnswerIndex;
}

//declaring var
var question1 = new Question('It is possible to sneeze with your eyes open.', ['true', 'false'], 1);
var question2 = new Question('8% of women and 0.5% of men have red-green color blindness.', ['true', 'false'], 1);
var question3 = new Question('Dolphins sleep with one eye open.', ['true', 'false'], 0);
var question4 = new Question('The world’s most common eye color is blue.', ['true', 'false'], 1);
var question5 = new Question('The largest eye on the planet belongs to the Colossal Squid.', ['true', 'false'], 0);
var question6 = new Question('Retina scans are more unique than fingerprint.', ['true', 'false'], 0);
var question7 = new Question('An eyeball cannot be transplanted.', ['true', 'false'], 0);
var question8 = new Question('Owls cannot move their eyeballs.', ['true', 'false'], 0);

// create an object
var quiz = {isGameOver: false, currentQuestion: 0, p1Points: 0, p2Points: 0, questions: [question1, question2, question3, question4, question5, question6, question7, question8]
};

//object name + properties
function currentQuestion () {
  return quiz.currentQuestion;
}

function correctAnswer () {
  return quiz.questions[quiz.currentQuestion].correctChoice;
}

function playTurn (choice) {
  if (quiz.isGameOver === true) {
    return false; //if game is true/game over, dont proceed
  }
var correct = false;
  if (choice === quiz.questions[quiz.currentQuestion].correctChoice) {
    correct = true;
    if (quiz.currentQuestion % 2 !== 0) {
      quiz.p2Points++;
    } else {
      quiz.p1Points++;
    }
  } // qns 2 % 2 = 0. point goes to p1
      // qns 1 % 2 !=0 point goes to p2
  //end of game, finished all qns
  ++quiz.currentQuestion;
  if (quiz.currentQuestion === numberOfQuestions()) {
    quiz.isGameOver = true;
  }
  return correct;
}

function numberOfQuestions () {
  return quiz.questions.length;
}

function numberOfAnswers () {
  return quiz.questions[quiz.currentQuestion].choices.length;
}

function whoWon () {
  if (quiz.isGameOver === false) return 0;
  if (quiz.p1Points > quiz.p2Points) return 1;
  if (quiz.p1Points < quiz.p2Points) return 2;
  if (quiz.p1Points === quiz.p2Points) return 3;
}

function isGameOver () {
  if (whoWon() !== 0) return true; //true means game is over
  else return false; // game is NOT over
}

function restart () {
  quiz.currentQuestion = 0;
  quiz.isGameOver = false;
  quiz.p1Points = 0;
  quiz.p2Points = 0;
  }

function updateDisplay () {
  if (isGameOver()) {
    $('h1').text('Game Over!! And the winner is ' + whoWon ());
  }
  if (whoWon() === 3) {
    $('h1').text('Game Over! It is a draw!');
  } else {
    $('h1').text('Game Over! And the winner is ' + whoWon());
  }
  $('h1').text((quiz.currentQuestion + 1) + '. ' + quiz.questions[quiz.currentQuestion].prompt);
  $('button').eq(0).text(quiz.questions[quiz.currentQuestion].choices[0]);
  $('button').eq(1).text(quiz.questions[quiz.currentQuestion].choices[1]);

    // update player scores
  $('h3').eq(0).text('Player 1: ' + quiz.p1Points);
  $('h3').eq(1).text('Player 2: ' + quiz.p2Points);
}

$(document).ready(function () {
  $('button').click(function () {
    if (isGameOver()) {
      restart();
    } else {
      playTurn($(this).index());
    }
    updateDisplay();
  });
  // update the display for the first time
  updateDisplay();
});

// countdown timer
var count = 15;
var counter = setInterval(timer, 1000);

function timer () {
  count = count - 1;
  if (count <= 0) {
    clearInterval(counter);
    count = 0;
    $('h2').text('Time is up!');
  }
  document.getElementById('timer').innerHTML = count + 's';
}

$(document).ready(function () {
  $('.button').click(function () {
    count = 15;
  });
});
