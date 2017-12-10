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
var quit = 'quit';
var results = [];

function print(message) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
};

html += '<h4> Student record </h4>';

while (search !== quit.toLowerCase()) {
	search = prompt("Whose record would you like to see?").toLowerCase();
	for (var i = 0; i < students.length; i++) {
		for (var key in students[i]) {
			if (students[i][key].toLowerCase() == search) {
				results.push(students[i]);
				html += "<p>" + results + "</p>";
				break;
			}
		}
	}
}



/*for (i = 0; i < students.length; i += 1) {
	html += '<h3> Name: ' + students[i].name + '</h3>'
	html += '<p> Track: ' + students[i].track + '</p>'
	html += '<p> Achievements: ' + students[i].achievements + '</p>'
	html += '<p> Points: ' + students[i].points + '</p>' 
};*/

print(html);