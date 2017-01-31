function pieChart() {
	var dataset = [
	{ label: 'Abulia', count: 10},
	{ label: 'Betelgeuse', count: 20},
	{ label: 'Canataloupe', count: 30},
	{label: 'Dijkstra', count: 40}
	];

	var width = 360;
	var height = 360;
	var radius = Math.min(width, height) / 2;

	var color = d3.scaleOrdinal(d3.schemeCategory20b);

	var svg = d3.select('#chart')
		.append('svg')
		.attr('width', width)
		.attr('height', height)
		.append('g')
		.attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

	var arc = d3.arc()
		.innerRadius(0)
		.outerRadius(radius);

	var pie = d3.pie()
		.value(function(d) { return d.count; })
		.sort(null);

	var path = svg.selectAll('path')
		.data(pie(dataset))
		.enter()
		.append('path')
		.attr('d', arc)
		.attr('fill', function(d, i) {
			return color(d.data.label);
		});
}