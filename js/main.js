"use strict";

// console.log("MAIN JS IS WORKING");

let foodie_list = require('./grabData');
let showAllData = require('./displayData');
let filteredData = require('./filterBy');
let formData = require('./form');
let filter = require('./filterBy');

showAllData.displayRestaurants();
showAllData.displayCities();
// showAllData.grabCityData();


// var nameContent;

// function first(){
//     nameContent="hey";
//     console.log("nameContent", nameContent);
// }

// function second() {
//     first();
//     console.log("hey here", nameContent);
// }
// second();