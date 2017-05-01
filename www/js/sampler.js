$(document).ready(function () {
	// var audio = new Audio('file:///android_asset/www/samples/Slice - 002.wav');
	var audio = new Audio('./samples/Slice - 002.wav');
	var playing = false;
	$( "#sample1" ).on( "click", function (){
		if (playing == false) {
			audio.play();
			playing = false;
			audio.currentTime = 0;
		}
	});
});

$(document).ready(function () {
	// var audio = new Audio('file:///android_asset/www/samples/Slice - 002.wav');
	var audio = new Audio('./samples/Slice - 006.wav');
	var playing = false;
	$( "#sample2" ).on( "click", function (){
		if (playing == false) {
			audio.play();
			playing = false;
			audio.currentTime = 0;
		}
	});
});

$(document).ready(function () {
	// var audio = new Audio('file:///android_asset/www/samples/Slice - 002.wav');
	var audio = new Audio('./samples/Slice - 007.wav');
	var playing = false;
	$( "#sample3" ).on( "click", function (){
		if (playing == false) {
			audio.play();
			playing = false;
			audio.currentTime = 0;
		}
	});
});

$(document).ready(function () {
	// var audio = new Audio('file:///android_asset/www/samples/Slice - 002.wav');
	var audio = new Audio('./samples/Slice - 008.wav');
	var playing = false;
	$( "#sample4" ).on( "click", function (){
		if (playing == false) {
			audio.play();
			playing = false;
			audio.currentTime = 0;
		}
	});
});
