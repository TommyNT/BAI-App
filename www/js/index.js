var myApp = angular.module('myApp', ['ngRoute','ngCordova']);

function init() {
    document.addEventListener("deviceready", function () {
        $cordovaNativeAudio.then(success, error);
}, false);

// myApp.controller('MyController', ['$scope', '$cordovaNativeAudio', '$timeout', function($scope, $cordovaNativeAudio, $timeout) {

//   $cordovaNativeAudio
//     .preloadSimple('click', 'assets/bass.mp3')
//     .then(function (msg) {
//       console.log(msg);
//     }, function (error) {
//       alert(error);
//     });

//   $cordovaNativeAudio
//     .preloadComplex('music', 'audio/music.mp3', 1, 1)
//     .then(function (msg) {
//       console.log(msg);
//     }, function (error) {
//       console.error(error);
//     });

//   $scope.play = function () {
//     $cordovaNativeAudio.play('click');
//     $cordovaNativeAudio.loop('music');

//     // stop 'music' loop and unload
//     $timeout(function () {
//       $cordovaNativeAudio.stop('music');

//       $cordovaNativeAudio.unload('click');
//       $cordovaNativeAudio.unload('music');
//     }, 1000 * 60);
//   };


//     $scope.app = {
//         // Application Constructor
//         initialize: function() {
//             this.bindEvents();
//         },
//         // Bind Event Listeners
//         //
//         // Bind any events that are required on startup. Common events are:
//         // 'load', 'deviceready', 'offline', and 'online'.
//         bindEvents: function() {
//             document.addEventListener('deviceready', this.onDeviceReady, false);
//         },
//         // deviceready Event Handler
//         //
//         // The scope of 'this' is the event. In order to call the 'receivedEvent'
//         // function, we must explicitly call 'app.receivedEvent(...);'
//         onDeviceReady: function() {
//             $scope.app.receivedEvent('deviceready');
//             console.log('deviceready');
//         },
//         // Update DOM on a Received Event
//         receivedEvent: function(id) {

//             if( window.plugins && window.plugins.NativeAudio ) {

//                 var items = ['bass', 'snare', 'highhat', 'bongo'];
//                 for(var i=0; i<items.length; i++) {
//                     var asset = 'assets/' + items[i] + '.mp3';
//                     window.plugins.NativeAudio.preloadSimple(items[i], 
//                                                              asset, 
//                                                              function(msg){console.info(msg)}, 
//                                                              function(msg){ console.error( 'Error: ' + msg ); });
//                 }

//                 window.plugins.NativeAudio.preloadComplex('noise', 
//                                                           'assets/ambient.mp3', 
//                                                           1, // volume
//                                                           1, // voices
//                                                           0, // delay
//                 function(msg) {
//                     console.info(msg); 
//                     window.plugins.NativeAudio.play('noise', 
//                                                     function(msg){console.info(msg)}, 
//                                                     function(msg){ console.error( 'Error: ' + msg ); }, 
//                                                     function(msg){ console.error( 'Complete: ' + msg ); });
//                 }, 
//                                                           function(msg){ alert( 'Error: ' + msg ); });

//             }

//         },

//         play: function(drum) {
//             document.getElementById(drum).classList.add('touched');
//             window.plugins.NativeAudio.play(drum, 
//                                             function(msg){console.info(msg), document.getElementById(drum).classList.remove('touched');},
//                                             function(msg){ console.error( 'Error: ' + msg ); });
//         }
//     }

// }]);

myApp.controller('MyController', ['$scope', function($scope) {
  $scope.timeOfDay = 'morning';
  $scope.name = 'Nikki';
}]);
