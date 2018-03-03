"use strict";

// console.log("MAIN JS IS WORKING");

let foodie_list = require('./grabData');
let showAllData = require('./displayData');
let filteredData = require('./filterBy');
let formData = require('./form');
let filter = require('./filterBy');

showAllData.displayRestaurants();
// showAllData.grabCityData();