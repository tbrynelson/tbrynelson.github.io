function exec(func, arg) {
	func(arg);
}

exec(function say(something) {
	console.log(something);
}, 'Hi, there');

