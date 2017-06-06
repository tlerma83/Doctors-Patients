"use strict";

app.controller("PatientCtrl", function($scope, DataFactory, $routeParams){


    let showPatients = function () {
        DataFactory.getPatients($routeParams.lastName)

        .then((patientObj)=>{
            $scope.currentPatient = patientObj.data;
        });
    };

    showPatients();
});


