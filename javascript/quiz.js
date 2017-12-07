var questions = [
	['Who is your favorite person?', 'Troy'],
	['What is your favorite color?', 'Green'],
	['What is Troy\'s girlfriend\'s name?', 'Lacey'],
	['Does Troy have a cat or a dog?', 'Cat'],
];

var correctCount = 0;
var question;
var answer;
var response;
var html;

function print(message) {
	document.write("<p>You answered " + correctCount + " out of " + questions.length + ".</p>");
};

for (var i = 0; i < questions.length; i += 1) {
	question = questions[i][0];
	answer = questions[i][1];
	response = prompt(question).lower();
	if ( response === answer.lower() ) {
		correctCount += 1
	}
}

html = "You got " + correctCount + " question(s) right!";