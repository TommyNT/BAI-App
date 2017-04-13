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