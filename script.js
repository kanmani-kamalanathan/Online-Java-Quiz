function Quiz(questions){
  this.score=0;
  this.questions=questions;
  this.questionIndex=0;
}
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
Quiz.prototype.guess = function(answer) {
  if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
} 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
} 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
var questions=[
  new Question("Which one among these is not a primitive datatype?",["int","Float","boolean","char"],"Float"),
  new Question("Which class is available to all the class automatically?",["Swing","Applet","Object","ActionEvent"],"Object"),
  new Question("Which package is directly available to our class without importing it?",["swing","applet","net","lang"],"lang"),
  new Question("String class is defined in which package?",["lang","Swing","Applet","awt"],"lang"),
  new Question("Which is the best programming language?",["C","C++","Java","Dot Net"],"Java"),
  new Question("Which one among these is not a keyword?",["class","int","get","if"],"get"),
  new Question("Which one among these is not a class?",["Swing","Actionperformed","ActionEvent","Button"],"Actionperformed"),
  new Question("Which one among these is not a function of Object class?",["toString","finalize","equals","getDocumentBase"],"getDocumentBase"),
  new Question("Which function is not present in Applet class?",["init","main","start","destroy"],"main"),
  new Question("Which one among these is not a valid component?",["JButton","JList","JButtonGroup","JTextArea"],"JButtonGroup"),
];
var quiz = new Quiz(questions);
populate();
