
function onBodyLoad() {		
    document.addEventListener("deviceready", onDeviceReady, false);
    document.addEventListener("touchmove", function (e) { e.preventDefault(); return false; }, false);
    document.addEventListener("touchstart", function (e) { e.preventDefault(); return false; }, false);	
}

function onDeviceReady() {
	PGLowLatencyAudio.preloadFX('sample1', 'samples/Slice - 002.mp3');
	PGLowLatencyAudio.preloadFX('sample2', 'samples/Slice - 003.mp3');
	PGLowLatencyAudio.preloadFX('sample3', 'samples/Slice - 004.mp3');
	PGLowLatencyAudio.preloadFX('sample4', 'samples/Slice - 005.mp3');
	PGLowLatencyAudio.preloadFX('sample5', 'samples/Slice - 006.mp3');
	PGLowLatencyAudio.preloadFX('sample6', 'samples/Slice - 007.mp3');
	PGLowLatencyAudio.preloadFX('sample7', 'samples/Slice - 008.mp3');
	PGLowLatencyAudio.preloadFX('sample8', 'samples/Slice - 010.mp3');
	PGLowLatencyAudio.preloadFX('sample9', 'samples/Slice - 014.mp3');
}

// $(document).ready(function () {
	// var audio = new Media('samples/Slice - 002.mp3');
	// var audio = new Audio('./samples/Slice - 002.mp3');
	// var playing = false;
	// $( "#sample1" ).click( function (){
		// if (playing == false) {
			// audio.play();
			// playing = false;
			// audio.seekTo(0);
		// }
	// });
// });

// function sample1(){
// 	var audio = new Media('samples/Slice - 002.mp3');
// 	var playing = false;
// 	if (playing == false) {
// 		audio.play();
// 		playing = false;
// 		audio.seekTo(0);
// 	}
// }


function sample1(){
	document.getElementById("sample1").className = "touched";
    PGLowLatencyAudio.play('sample1');
}

// $(document).ready(function () {
	// var audio = new Media('samples/Slice - 003.mp3');
	//var audio = new Audio('./samples/Slice - 003.mp3');
	// var playing = false;
	// $( "#sample2" ).click( function (){
		// if (playing == false) {
			// audio.play();
			// playing = false;
			// audio.seekTo(0);
		// }
	// });
// });

function sample2(){
	var audio = new Media('samples/Slice - 003.mp3');
	var playing = false;
	if (playing == false) {
		audio.play();
		playing = false;
		audio.seekTo(0);
	}
}

// $(document).ready(function () {
	// var audio = new Media('samples/Slice - 004.mp3');
	//var audio = new Audio('./samples/Slice - 004.mp3');
	// var playing = false;
	// $( "#sample3" ).click( function (){
		// if (playing == false) {
			// audio.play();
			// playing = false;
			// audio.seekTo(0);
		// }
	// });
// });

function sample3(){
	var audio = new Media('samples/Slice - 004.mp3');
	var playing = false;
	if (playing == false) {
		audio.play();
		playing = false;
		audio.seekTo(0);
	}
}

// $(document).ready(function () {
	// var audio = new Media('samples/Slice - 005.mp3');
	//var audio = new Audio('./samples/Slice - 005.mp3');
	// var playing = false;
	// $( "#sample4" ).click( function (){
		// if (playing == false) {
			// audio.play();
			// playing = false;
			// audio.seekTo(0);
		// }
	// });
// });

function sample4(){
	var audio = new Media('samples/Slice - 005.mp3');
	var playing = false;
	if (playing == false) {
		audio.play();
		playing = false;
		audio.seekTo(0);
	}
}

// $(document).ready(function () {
	// var audio = new Media('samples/Slice - 006.mp3');
	//var audio = new Audio('./samples/Slice - 006.mp3');
	// var playing = false;
	// $( "#sample5" ).click( function (){
		// if (playing == false) {
			// audio.play();
			// playing = false;
			// audio.seekTo(0);
		// }
	// });
// });

function sample5(){
	var audio = new Media('samples/Slice - 006.mp3');
	var playing = false;
	if (playing == false) {
		audio.play();
		playing = false;
		audio.seekTo(0);
	}
}

// $(document).ready(function () {
// 	var audio = new Media('samples/Slice - 007.mp3');
// 	// var audio = new Audio('./samples/Slice - 007.mp3');
// 	var playing = false;
// 	$( "#sample6" ).click( function (){
// 		if (playing == false) {
// 			audio.play();
// 			playing = false;
// 			audio.seekTo(0);
// 		}
// 	});
// });

function sample6(){
	var audio = new Media('samples/Slice - 007.mp3');
	var playing = false;
	if (playing == false) {
		audio.play();
		playing = false;
		audio.seekTo(0);
	}
}

// $(document).ready(function () {
	// var audio = new Media('samples/Slice - 008.mp3');
	// var audio = new Audio('./samples/Slice - 008.mp3');
	// var playing = false;
	// $( "#sample7" ).click( function (){
		// if (playing == false) {
			// audio.play();
			// playing = false;
			// audio.seekTo(0);
		// }
	// });
// });


function sample7(){
	var audio = new Media('samples/Slice - 008.mp3');
	var playing = false;
	if (playing == false) {
		audio.play();
		playing = false;
		audio.seekTo(0);
	}
}
// $(document).ready(function () {
	// var audio = new Media('samples/Slice - 010.mp3');
	// var audio = new Audio('./samples/Slice - 010.mp3');
	// var playing = false;
	// $( "#sample8" ).click( function (){
		// if (playing == false) {
			// audio.play();
			// playing = false;
			// audio.seekTo(0);
		// }
	// });
// });

function sample8(){
	var audio = new Media('samples/Slice - 010.mp3');
	var playing = false;
	if (playing == false) {
		audio.play();
		playing = false;
		audio.seekTo(0);
	}
}
// $(document).ready(function () {
	// var audio = new Media('samples/Slice - 014.mp3');
	// var audio = new Audio('./samples/Slice - 014.mp3');
	// var playing = false;
	// $( "#sample9" ).click( function (){
		// if (playing == false) {
			// audio.play();
			// playing = false;
			// audio.seekTo(0);
		// }
	// });
// });

function sample9(){
	var audio = new Media('samples/Slice - 014.mp3');
	var playing = false;
	if (playing == false) {
		audio.play();
		playing = false;
		audio.seekTo(0);
	}
}
