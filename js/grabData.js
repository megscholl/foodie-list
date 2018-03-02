"use strict";


let restaurantName = "";
let restaurantXHR,
restaurantData;
let cityXHR;
let cityData;


function grabRestaurantData() {
    return new Promise((resolve, reject) => {
        restaurantXHR = new XMLHttpRequest();
        restaurantXHR.addEventListener('load', function() {
            restaurantData = JSON.parse(this.responseText); 
            // console.log("restaurantData", restaurantData);
            resolve(restaurantData);
        });
        restaurantXHR.addEventListener('error', function() {
            reject();
        });
        restaurantXHR.open("GET", `../json/restaurants.json`);
        restaurantXHR.send();
    });
}
grabRestaurantData();

function grabCityData() {
    // console.log("grabCityData function is working");
    return new Promise((resolve, reject) => {
        cityXHR = new XMLHttpRequest();
        cityXHR.addEventListener('load', function() {
            cityData = JSON.parse(this.responseText);
            // console.log("cityData: ", cityData);
            resolve(cityData);
        });
        cityXHR.addEventListener('error', function() {
            reject(console.log("error, please try again"));
        });
        cityXHR.open("GET", `../json/cities.json`);
        cityXHR.send();
    });
}

module.exports = {grabRestaurantData, grabCityData};