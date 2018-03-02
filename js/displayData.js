"use strict";
// console.log("DISPLAY DATA JS IS DISPLAYING");

// // // // // REQUIRES \\ \\ \\ \\ \\
// let jsonData = require('./grabData'); 
let db = require('./grabData'); 

// // // // // VARIABLES TO RENDER THE DOM  \\ \\ \\ \\ \\
// let showRestaurantData = document.getElementById("inner-container");
// let showCityData = document.getElementById("cities");
let restaurants;
// let restaurantName;
let restaurantArray = [];
let cityArray = [];
let cities;
// let rating;
// let ratingArray = [];



function displayRestaurants() {
    // console.log("DISPLAY RESTAURANTS HERE: ",  db.grabRestaurantData);
    db.grabRestaurantData().then(

            (resolve)=>{
                let restaurant = resolve;
                // console.log("resolve", resolve);
                let restData = Object.keys(resolve);
                    // console.log("restData: ", restData);
                    restData.forEach(function(location){
                        var restName = resolve[location];
                        for(var i = 0; i < restName.length; i++) {
                            restaurants = restName[i].restaurant;
                            restaurantArray.push(restaurants);
                            console.log("restaurants - ", restaurants);
                            }
                    });
            },
            (reject)=>{
            }
    );
}

function displayCities() {
    db.grabCityData().then(
            (resolve)=>{
                let city = resolve;
                // console.log("resolve", resolve);
                let cityData = Object.keys(resolve);
                    // console.log("cityData: ", cityData);
                    cityData.forEach(function(location){
                        var cityName = resolve[location];
                        for(var j = 0; j < cityName.length; j++) {
                            cities = cityName[j].city;
                            cityArray.push(cities);
                            console.log("city - ", cities);
                        }
                    });
            },
            (reject)=>{
            }
    );
}

displayCities();

// cities = 
// `
// <form>
//     <div class="selections">Select a City: 
//         <select>
//             <option value="${cityNames}">${cityNames}</option> // grabRestaurantData will be replaced with the results from the loops through the City Data array
//         </select> 
//     </div>
// </form>
// `;

// showCityData.innerHTML = cities;

module.exports = {displayRestaurants, displayCities};