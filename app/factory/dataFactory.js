"use strict";

app.factory("DataFactory", function($q, $http, FBCreds){

    let getDoctors = () => {
        let doctors = [];
        return $q((resolve, reject) =>{
            $http.get(`${FBCreds.databaseURL}/doctors.json`)
            .then((doctorObj) => {
                let docObjArray = doctorObj.data[0];
                for(let docs in docObjArray) {
                    doctors.push(docObjArray[docs]);
                }
                resolve(doctors);
            })
            .catch((error)=>{
                reject(error);
            });
        });
    };


    let getPatients = (doctorName) => {
        return $q((resolve, reject) =>{
            $http.get(`${FBCreds.databaseURL}/patients.json?orderBy="doctor_id"&equalTo="${doctorName}"`)

            .then((patienObj)=>{
                resolve(patienObj);

            }).catch((error)=>{
                reject(error);
            });
        });
    };

    return {getDoctors, getPatients};
});
