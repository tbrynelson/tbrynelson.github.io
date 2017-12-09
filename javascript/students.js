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

function print(message) {
	var outputDiv = document.getElementById('output');
	outputDiv.innerHTML = message;
};

html += '<h4> Here are my students: </h4>';



for (i = 0; i < students.length; i += 1) {
	html += '<h3> Name: ' + students[i].name + '</h3>'
	html += '<p> Track: ' + students[i].track + '</p>'
	html += '<p> Achievements: ' + students[i].achievements + '</p>'
	html += '<p> Points: ' + students[i].points + '</p>' 
};

print(html);