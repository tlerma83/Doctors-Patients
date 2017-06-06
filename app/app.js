"use strict";

var app = angular.module("DoctorApp", ["ngRoute"]);


app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "partials/doctors.html",
        controller: "DocCtrl"
    })
    .when("/patients/:lastName", {
        templateUrl: "partials/patients.html",
        controller: "PatientCtrl"
    })
    .otherwise("/");
});


app.run(function(FBCreds){
    let authCreditionals  = {
        apiKey: FBCreds.apiKey,
        authDomain: FBCreds.authDomain
    };
    firebase.initializeApp(authCreditionals);
});
