var timerEl = document.getElementById('timer');
var time = 50;
timerEl.textContent = time;
var setTimer;
var startEl = document.getElementById('start-button');
var introEl = document.getElementById('intro');
var quizEl = document.getElementById('quiz');
var questionEl = document.getElementById('question');
var questionNum = 0;
var choicesEl = document.getElementById('choices');
var choiceClass = document.getElementsByClassName('choice');
var answerEl = document.getElementById('answer');
quizEl.style.display = "none";

let questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
      answer: "3. alerts"
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console.log"],
      answer: "4. console.log"
    },
    {
      question: "String values must be enclosed within __________ when being assigned to variables",
      choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
      answer: "3. quotes"
    },
    {
      question: "Arrays in JavaScript cna be used to store __________.",
      choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
      answer: "4. all of the above"
    },
    {
      question: "The condition in an if/else statement is enclosed with ___________.",
      choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
      answer: "3. parenthesis"
    },
];

startEl.addEventListener("click", function(){
    introEl.style.display = "none";
    time = 49;
    setTimer = setInterval(function () {
        if (time > 0) {
        timerEl.textContent = time;
        time--;
        } else {
            timerEl.textContent = 0;
            clearInterval(setTimer);
        }
    }, 1000);

    displayQuestions();
});

function displayQuestions() {
    quizEl.style.display = "block";
    choiceClass.textContent = "";

    console.log(questions[questionNum]);
    console.log(questions[questionNum].choices);

    while (choicesEl.hasChildNodes()) {
        choicesEl.removeChild(choicesEl.lastChild);
    }

    for(var index = 0; index < questions[questionNum].choices.length; index++) {
        var buttonEl = document.createElement("button");
        buttonEl.textContent = questions[questionNum].choices[index];
        choicesEl.appendChild(buttonEl);
      }

    questionEl.textContent = questions[questionNum].question;

    choicesEl.children[0].addEventListener("click", function() {
        answerDisplay(choicesEl.children[0].textContent);
    });
    choicesEl.children[1].addEventListener("click", function() {
        answerDisplay(choicesEl.children[1].textContent);
    });
    choicesEl.children[2].addEventListener("click", function() {
        answerDisplay(choicesEl.children[2].textContent);
    });
    choicesEl.children[3].addEventListener("click", function() {
        answerDisplay(choicesEl.children[3].textContent);
    });
};

function answerDisplay(event) {
    if (event == questions[questionNum].answer) {
        answerEl.textContent = "Correct!";
    } else {
        answerEl.textContent = "Wrong!"
        time -= 10;
        console.log(questions[questionNum].answer);
        console.log(event);
    }

    answerEl.style.display = "block"
    setInterval(() => {
        answerEl.style.display = "none";
    },1000);

    if (questionNum > questions.length) {
        clearInterval(setTimer);
        return; 
    } else {
        questionNum++;
    }

    displayQuestions();
};
