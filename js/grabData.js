"use strict";

let showRestaurantData = document.getElementById("restaurants");

let showCityData = document.getElementById("cities");



function grabRestaurantData(rest) {
    console.log("grabRestaurantData function is working");
    return new Promise((resolve, reject) => {
        let restaurantXHR = new XMLHttpRequest();
        restaurantXHR.open("GET", `../json/restaurants.json`);
        // console.log("restaurantXHR: ", restaurantXHR);
        restaurantXHR.send();
        restaurantXHR.addEventListener('load', function() {
            let restaurantData = JSON.parse(restaurantXHR.responseText);
            console.log("restaurantData: ", restaurantData);
            resolve(restaurantData);
        });
        restaurantXHR.addEventListener('error', function() {
            reject(console.log("error, please try again"));
        }); 
    });
}
grabRestaurantData();

function grabCityData(city) {
    console.log("grabCityData function is working");
    return new Promise((resolve, reject) => {
        let cityXHR = new XMLHttpRequest();
        cityXHR.open("GET", `../json/cities.json`);
        cityXHR.send();
        // console.log("cityXHR: ", cityXHR);
        cityXHR.addEventListener('load', function() {
            var cityData = JSON.parse(cityXHR.responseText);
            console.log("cityData: ", cityData);
            resolve(cityData);
        });
        cityXHR.addEventListener('error', function() {
            reject(console.log("error, please try again"));
        });
    });
}
grabCityData();


module.exports = {grabRestaurantData, grabCityData};