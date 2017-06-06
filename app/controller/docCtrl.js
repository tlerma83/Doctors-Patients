"use strict";

app.controller("DocCtrl", function(DataFactory, $scope){

    let doctorInfo = function () {
        DataFactory.getDoctors()
            .then((docObj)=>{
            $scope.docStuff = docObj;
        });
    };

    doctorInfo();
});
