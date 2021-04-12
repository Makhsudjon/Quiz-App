function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else{
        //showQuestion();
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show Choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i<choices.length; i++){
            console.log(i, choices.length)
            var element = document.getElementById("choice"+i);
            element.innerHTML = choices[i];
            guess("btn"+i, choices[i]);

        }

        showProgress();
    }

};
function showProgress(){
    var currentQuestionNumber = quiz.questionIndex+1;
    var element  = document.getElementById("progress");
    element.innerHTML = "Question "+currentQuestionNumber + " of "+ quiz.questions.length;

}
function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function (){
        quiz.guess(guess);
        populate();
    }
}
function showScores(){
    var  gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Your scores: "+quiz.score+"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;

}

var questions = [
    new Question("1How old is Florin ?", ["12", "25", "67", "78"], "12"),
    new Question("2How old is Florin ?", ["12", "25", "67", "78"], "12"),
    new Question("3How old is Florin ?", ["12", "25", "67", "78"], "12"),
    new Question("4How old is Florin ?", ["12", "25", "67", "78"], "12"),
    new Question("5How old is Florin ?", ["12", "25", "67", "78"], "12")
];

var quiz = new Quiz(questions);

populate();

