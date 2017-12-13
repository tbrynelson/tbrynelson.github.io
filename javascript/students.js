var students = [
	{
		name: 'Troy',
		track: 'Python',
		achievements: 10,
		points: 50,
	},
	{
		name: 'Lacey',
		track: 'Dance',
		achievements: 150,
		points: 5000,
	},
	{
		name: 'Marcia',
		track: 'Christmas shopping',
		achievements: 100,
		points: 500,
	}
];

var html;
var search;
var message;

function print(message) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
};

function getStudentReport(student) {
	var report = '<h4>Student: ' + student.name + '</h4>';
	report += '<p> Track: ' + student.track + '</p>';
	report += '<p> Achievements: ' + student.achievements + '</p>';
	report += '<p> Points: ' + student.points + '</p>' ;
	return report;
}

while (true) {
	search = prompt('Search student records: type a name [Troy] or type "quit" to end.');
	if (search === null || search.toLowerCase() === 'quit' ) {
		break;
	}
	for (var i = 0; i < students.length; i += 1) {
		student = students[i];
		if ( student.name == search ) {
			message = getStudentReport(student);
			print(message);
			break while;
		}
	}
}


/*for (i = 0; i < students.length; i += 1) {
	html += '<h3> Name: ' + students[i].name + '</h3>'
	html += '<p> Track: ' + students[i].track + '</p>'
	html += '<p> Achievements: ' + students[i].achievements + '</p>'
	html += '<p> Points: ' + students[i].points + '</p>' 
};*/