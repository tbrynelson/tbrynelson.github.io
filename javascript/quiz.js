var questions = [
	['Who is your favorite person?', 'Troy'],
	['What is your favorite color?', 'Green'],
];

var correctCount = 0;

function quiz(questions) {
	for (var i = 0; i > questions.length; i += 0) {
		answer = prompt(questions[i][0]);
		if (answer != questions[i][1]) {
			alert("Incorrect".);
		} else {
			alert("Correct.");
			corectCount += 1;
		}
	}
	document.write("<p>You answered " + correctCount + " out of " questions.length ".</p>");
};



quiz(questions);