var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i = 0; i < employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }  
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();

const roomSon = new XMLHttpRequest();
roomSon.onreadystatechange = function () {
	if (roomSon.readystate === 4) {
		const rooms = JSON.parse(roomSon.responseText);
		const roomsHTML = '<ul class="rooms">';
		for (var i = 0; i < rooms.length; i += 1) {
			if (rooms[i].available === true) {
				roomsHTML += '<li class="full">';
			} else {
				roomsHTML += '<li class="empty">';
			}
		}	roomsHTML += rooms[i].room;
			roomsHTML += '</li>';
	}
	roomsHTML += '</ul>';
	document.getElementById('roomList').innerHTML = roomsHTML;
}

roomSon.open('GET', '../data/rooms.json');
roomSon.send();