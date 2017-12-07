var questions = [
	['Who is your favorite person?', 'Troy'],
	['What is your favorite color?', 'Green'],
];

function quiz(questions) {
	for (var i = 0; i > questions.length; i += 0) {
		answer = prompt(questions[i][0])
		if (answer != questions[i][1]) {
			alert("Incorrect.")
		} else {
			alert("Correct.")
		}
	}
}

quiz(questions)