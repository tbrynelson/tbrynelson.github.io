var dice = {
	sides: 6,
	roll: function () {
		const randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber
	}
}

function Dice(sides) {
	this.sides = sides;
	this.roll = function () {
		const randomNumber = Math.floor(Math.random() * this.sides) + 1;
		return randomNumber
	}
}

var dice = new Dice(6);