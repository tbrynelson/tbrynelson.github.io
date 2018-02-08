var questions = [
	new Question("What's my name?", ["Troy", "Lacey" ], "Troy"),
	new Question("What movie am I watching?", ["The Boss Baby", "Lord of the Rings"], "The Boss Baby"),
	new Question("What is my cat's name?", ["Sammy", "Dipshit"], "Sammy")
];

var quiz = new Quiz(questions);

QuizUI.displayNext();