var playlist = new Playlist();

var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");
var spaceOddity = new Song("Space Oddity", "David Bowie", "5:15");
var rocketMan = new Song("Rocket Man", "Elton John", "4:42");

var twoThousandOne = new Movie("2001: A Space Odyssey", 1968, "2:41:00");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);
playlist.add(spaceOddity);
playlist.add(rocketMan);
playlist.add(twoThousandOne);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function() {
	playlist.play();
	playlist.renderInElement(playlistElement);
};
var nextButton = document.getElementById("next");
nextButton.onclick = function() {
	playlist.next();
	playlist.renderInElement(playlistElement);
};
var stopButton = document.getElementById("stop");
stopButton.onclick = function() {
	playlist.stop();
	playlist.renderInElement(playlistElement);
};