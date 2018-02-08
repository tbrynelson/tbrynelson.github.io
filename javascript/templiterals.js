const tempstring = {name: "Jojo", status: "Chilling", hours_awake: 20};

let tableHtml = `
	<table class="table">
		<thead>
			<tr>
				<td>Name</td>
				<td>Status</td>
				<td>Hours Awake</td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>${tempstring.name}</td>
				<td>${tempstring.status}</td>
				<td>${tempstring.hours_awake}</td>
			</tr>
		</tbody>
	</table>`;

const tableID = document.getElementById("table-test");
tableID.innerHTML = tableHtml;