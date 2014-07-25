var app = angular.module('Chat', ['ngRoute']);
app.config(function ($routeProvider, $httpProvider) {
    //routes
    $routeProvider.when('/', {
        templateUrl: '/App/views/home.html',
        controller: 'homeController'

    }).when('/userView', {
        templateUrl: '/App/views/userView.html',
        controller: 'homeController'
    })
    $httpProvider.interceptors.push('AuthInterceptor');
})

$(".alert").addClass("in").fadeOut(4500);

/* swap open/close side menu icons */
$('[data-toggle=collapse]').click(function () {
    // toggle icon
    $(this).find("i").toggleClass("glyphicon-chevron-right glyphicon-chevron-down");
});

var ChirpApp = {};
var messageReceived = [];
var Chirps = {};
var Messages = {};
var onSendChirp = function (userId, chirpMessageId, sentToId) {
    Chirps.username = document.getElementById(userId).value;
    Chirps.Chirps = document.getElementById(chirpMessageId).value;
    Chirps.url = document.getElementById(sentToId).value;

    var request = new XMLHttpRequest();
    request.open("POST", "https://" + Chirps.url + ".firebaseio.com/Chirps.json");
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            console.log(this.response);

            document.getElementById(chirpMessageId).value = "";
            document.getElementById(sentToId).value = "";
        }


    }
    request.onerror = function () {
        console.log('Error in onSendChirp');
    }

    request.send(JSON.stringify(Chirps));

};

var onSendMessage = function (userId, messageMessageId, sentToId) {
    Messages.username = document.getElementById(userId).value;
    Messages.Messages = document.getElementById(messageMessageId).value;
    Messages.url = document.getElementById(sentToId).value;

    var request = new XMLHttpRequest();
    request.open("POST", "https://" + Messages.url + ".firebaseio.com/Messages.json");
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            console.log(this.response);

            document.getElementById(messageMessageId).value = "";
            document.getElementById(sentToId).value = "";
        }


    }
    request.onerror = function () {
        console.log('Error in onSendChirp');
    }

    request.send(JSON.stringify(Messages));

};

var request = new XMLHttpRequest();
request.open("GET", "https://" + Chirps.url + ".firebaseio.com/Chirps.json");
request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
        var data = JSON.parse(this.response);
        for (var m in data) {
            MyApp.Tweets.push(data[m]);

        }
        // ChirpApp.writeOutput();
    }
    else {
        console.log("Cant Get no Chirps problem on GET: " + this.response);
    };
    request.onerror = function () {
        console.log('Error in onSendChirp');
    };

    request.send(JSON.stringify(Chirps));

    //ChirpApp.showChirps = function() {
    //console.log("Show me the Chirps!!!);
    //var request = new XMLHttpRequest();
    //request.open("GET", "https://" + Messages.url + ".firebaseio.com/Messages.json");
    //request.onload = function () {
    //    if (this.status >= 200 && this.status < 400) {

    //        var data = JSON.parse(this.response);
    //        for (var m in data) {
    //            MyApp.Tweets.push(data[m]);

    //        }
    //ChirpApp.writeOuput();
    //    }
    //else {
    // console.log("Your get is not working " + this.response); 
    //};
    //request.onerror = function () {
    //    console.log('Error in onSendChirp');
    //}

    //request.send();
    //};
    //////ChirpApp.writeOuput = function () {
    ////    holder = "";
    ////    for (var c in messageReceived) {
    ////        holder += messageReceived[c]. + ": " +
    ////        messageReceived[c].key + "
    ////    }

    // };
}