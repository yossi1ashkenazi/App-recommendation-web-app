const fs = require('fs');
let rawdata = fs.readFileSync('apps.json');
const apps = JSON.parse(rawdata);  //convert the json into an array we can work with

module.exports = {


    // this function get all the members from the req bodey and search in the db
    search: function (cat1, cat2, cat3, age, rating) { //For a deeper search I would create a search function I would inject a sort function and the object

        var results = [];
        let count = 0;
        for (var i = 0; i < apps.length; i++) {

            if ((apps[i]["category"] == cat1 || apps[i]["category"] == cat2 || apps[i]["category"] == cat3)
                && apps[i]["rating"] >= rating && apps[i]["min_age"] <= age) {
                results.push(apps[i]); //push the apps into the apps array
                console.log(apps[i]["id"]); // The server reports which applications are good
            }
        }
        console.log("number of resultes:" + results.length); //the server reports how many apllication
        return results;
    },
    // the function get the birhday in a string and convert it to an age
    _calculateAge: function (birthday) { // birthday is a string date
        var ageInMilliseconds = new Date() - new Date(birthday);
        return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
    }
}





