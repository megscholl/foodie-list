"use strict";

let data = require('./displayData');
var cityData;
// var ids;
var cityArray;
var cityIdArray;
var restaurantData;

// var cityData = data.displayCityData();


/* ************* 
LOOP THROUGH THE ARRAYS CREATED FOR RESTAURANTS AND CITIES AND MATCH THE IDS TO DISPLAY ONLY THOSE RESTAURANTS FROM THE SELECTED CITY
*/

function filterByCity(sort) {
    // console.log("hey there, ", sort.target.id);
    cityData = data.displayCities;
    restaurantData = data.displayRestaurants;
    // console.log("cities- ", cityData);
    console.log("MATCHING FUNCTION, ", cityArray);
    console.log("MCTHING UP IDS - ", cityIdArray);
}

filterByCity();

module.export = {filterByCity};