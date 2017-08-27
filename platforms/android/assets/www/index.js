/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var clicked = [];
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        console.log('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        if( window.plugins && window.plugins.NativeAudio ) {

            var items = ['007', '002', '003', '004', 'HiTom AR60sEarly V127 1', '006', 'Snare AR60sEarly V127 4', '010', '014', 'Snare 808X 1', '005', '008', 'bass', 'bongo', 'Floor Tom AR60sEarly V127 2', 'highhat', 'MidTom AR60sEarly V127 1', 'snare'];
            for(var i=0; i<items.length; i++) {
                var asset = 'assets/' + items[i] + '.mp3';
                window.plugins.NativeAudio.preloadSimple(items[i], 
                                                         asset, 
                                                         function(msg){console.info(msg)}, 
                                                         function(msg){ console.error( 'Error: ' + msg ); });
            }
        }

    },

    play: function(drum) {
        document.getElementById(drum).classList.add('touched');
        window.plugins.NativeAudio.play(drum, 
                                        function(msg){console.info(msg), setTimeout(function(){document.getElementById(drum).classList.remove('touched');}, 100);},
                                        function(msg){ console.error( 'Error: ' + msg ); });
    },

    startRec: function() {
        clicked = [];
        $(function(){
            $(".rec").css("color", "red");
            $('.pad').click(function(event) {
                clicked.push(event.target.id);
                localStorage.setItem("clicked", JSON.stringify((clicked)));
             });
        });
    },

    stopRec: function() {
        $(function(){
            $(".rec").css("color", "");
            clicked = [];
        });
    },

    repeatRec: function() {
        var local = (JSON.parse(localStorage.getItem("clicked")));
        jQuery.each(local, setTimeout(function() {
            console.log('' + this);
            window.plugins.NativeAudio.play('' + this, 
                function(msg){console.info(msg), setTimeout(function(){document.getElementById('' + this).classList.remove('touched');}, 100);},
                function(msg){ console.error( 'Error: ' + msg ); });
        }, 3000));
    },

    sendRec: function() {
        var data = (JSON.stringify(localStorage.getItem("clicked")));
        console.log('sendRec');
        console.log(data);
        $.ajax({
            type: "POST", // Method of sending data to server
            url: "php/send.php", // php script being sent to
            cache: false,  // requested pages won't be cached by server
            data: data, // data to be sent to server
            dataType: "json", // data type to be received back from server
            
        }).done(function(response){
            console.log(response);
            alert("Wysłano!")
        }).fail(function(response){
            console.log(response);
            alert("Nie wysłano!")
        });

    },

};