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
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
}

for (var i = 0; i < questions.length; i += 1) {
	question = questions[i][0];
	answer = questions[i][1];
	response = prompt(question).toLowerCase();
	if ( response === answer.toLowerCase() ) {
		correctCount += 1
	}
};

html = "<p>You answered " + correctCount + " out of " + questions.length + ".</p>";
print(html)