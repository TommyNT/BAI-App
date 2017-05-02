function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

$(document).ready(function () {
	var audio = new Media('file:///android_asset/www/samples/Slice - 002.wav');
	// var audio = new Audio('./samples/Slice - 002.wav');
	var playing = false;
	$( "#sample1" ).click( function (){
		if (playing == false) {
			audio.play();
			playing = false;
			audio.seekTo(0);
		}
	});
});

$(document).ready(function () {
	var audio = new Media('file:///android_asset/www/samples/Slice - 003.wav');
	// var audio = new Audio('./samples/Slice - 003.wav');
	var playing = false;
	$( "#sample2" ).click( function (){
		if (playing == false) {
			audio.play();
			playing = false;
			audio.seekTo(0);
		}
	});
});

$(document).ready(function () {
	var audio = new Media('file:///android_asset/www/samples/Slice - 004.wav');
	// var audio = new Audio('./samples/Slice - 004.wav');
	var playing = false;
	$( "#sample3" ).click( function (){
		if (playing == false) {
			audio.play();
			playing = false;
			audio.seekTo(0);
		}
	});
});

$(document).ready(function () {
	var audio = new Media('file:///android_asset/www/samples/Slice - 005.wav');
	// var audio = new Audio('./samples/Slice - 005.wav');
	var playing = false;
	$( "#sample4" ).click( function (){
		if (playing == false) {
			audio.play();
			playing = false;
			audio.seekTo(0);
		}
	});
});

$(document).ready(function () {
	var audio = new Media('file:///android_asset/www/samples/Slice - 006.wav');
	// var audio = new Audio('./samples/Slice - 006.wav');
	var playing = false;
	$( "#sample5" ).click( function (){
		if (playing == false) {
			audio.play();
			playing = false;
			audio.seekTo(0);
		}
	});
});

$(document).ready(function () {
	var audio = new Media('file:///android_asset/www/samples/Slice - 007.wav');
	// var audio = new Audio('./samples/Slice - 007.wav');
	var playing = false;
	$( "#sample6" ).click( function (){
		if (playing == false) {
			audio.play();
			playing = false;
			audio.seekTo(0);
		}
	});
});

$(document).ready(function () {
	var audio = new Media('file:///android_asset/www/samples/Slice - 008.wav');
	// var audio = new Audio('./samples/Slice - 008.wav');
	var playing = false;
	$( "#sample7" ).click( function (){
		if (playing == false) {
			audio.play();
			playing = false;
			audio.seekTo(0);
		}
	});
});

$(document).ready(function () {
	var audio = new Media('file:///android_asset/www/samples/Slice - 010.wav');
	// var audio = new Audio('./samples/Slice - 010.wav');
	var playing = false;
	$( "#sample8" ).click( function (){
		if (playing == false) {
			audio.play();
			playing = false;
			audio.seekTo(0);
		}
	});
});

$(document).ready(function () {
	var audio = new Media('file:///android_asset/www/samples/Slice - 014.wav');
	// var audio = new Audio('./samples/Slice - 014.wav');
	var playing = false;
	$( "#sample9" ).click( function (){
		if (playing == false) {
			audio.play();
			playing = false;
			audio.seekTo(0);
		}
	});
});
