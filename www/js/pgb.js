function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
	deviceInfo();
}

function deviceInfo() {

	// interests = 'Music '+ '<br>' +
	// 			'Web development'+ '<br>' +
	// 			'Bodybuilding';

	// document.getElementById("interests").innerHTML = interests;	
}

function sample1(){
	var audio = new Audio('file:///android_asset/www/samples/Slice - 002.wav');
	audio.play();
	console.log('sample1');
}

function sample2(){
	var audio = new Audio('file:///android_asset/www/samples/Slice - 006.wav');
	audio.play();
	console.log('sample2');
}

function sample3(){
	var audio = new Audio('file:///android_asset/www/samples/Slice - 007.wav');
	audio.play();
	console.log('sample3');
}