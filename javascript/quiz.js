var questions = [
	['Who is your favorite person?', 'Troy'],
	['What is your favorite color?', 'Green'],
	['What is Troy\'s girlfriend\'s name?', 'Lacey'],
	['Does Troy have a cat or a dog?', 'Cat'],
];
var incorrectAnswers = [];
var correctAnswers = [];

var correctCount = 0;
var question;
var answer;
var response;
var html;


function print(message) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
}

function buildList(arr) {
	var listHTML = '<ol>';
	for (var i = 0; i < arr.length; i += 1) {
		listHTML += '<li>' + arr[i] + '</li>';
	}
	listHTML += "</ol>";
	return listHTML
	}

for (var i = 0; i < questions.length; i += 1) {
	question = questions[i][0];
	answer = questions[i][1];
	response = prompt(question).toLowerCase();
	if ( response === answer.toLowerCase() ) {
		correctCount += 1;
		correctAnswers.push(question);

	} else {
		incorrectAnswers.push(question);
	}
};

html = "<p>You answered " + correctCount + " out of " + questions.length + ".</p>"
html += '<h2>You got these questions correct:</h2>';
html += buildList(correctAnswers);
html += "<h2>You got these questions wrong:</h2>";
html += buildList(incorrectAnswers);

print(html)