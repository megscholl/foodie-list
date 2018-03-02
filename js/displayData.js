"use strict";
// console.log("DISPLAY DATA JS IS DISPLAYING");

// // // // // REQUIRES \\ \\ \\ \\ \\
// let jsonData = require('./grabData'); 
let db = require('./grabData'); 

// let cityJsonData = {grabCityData} = require('./grabData');
// ^^ I wanted to see if I could create a variable set to a certain function within a .js file... it does not!

// // // // // VARIABLES TO RENDER THE DOM  \\ \\ \\ \\ \\
let showRestaurantData = document.getElementById("inner-container");
let showCityData = document.getElementById("cities");
let restaurants;
let restaurantName;
let restaurantArray = [];
let cityArray = [];
let cities;



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
                        }
                        // console.log("return array");
                        return restaurantArray;
                    });
            },            (reject)=>{
            }
    );
}
// console.log(restaurantArray);
// showRestaurantData.innerHTML = restaurantArray;
// displayRestaurants();

// console.log("what I'd like to render to DOM: ", restaurantArray);
// restaurantArray.innerHTML = showRestaurantData;


function displayCities() {
    db.grabCityData().then(
            (resolve)=>{
                let city = resolve;
                console.log("resolve", resolve);
                let cityData = Object.keys(resolve);
                    console.log("cityData: ", cityData);
                    cityData.forEach(function(location){
                        var cityName = resolve[location];
                        for(var j = 0; j < cityName.length; j++) {
                            cities = cityName[j].city;
                            cityArray.push(cities);
                        }
                        console.log("city array: ", cityArray);
                    });
            },
            (reject)=>{
            }
    );
}

// showRestaurantData.innerHTML = cityArray;
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





// // // // // CONSOLE LOGS \\ \\ \\ \\ \\
// console.log("RESTAURANTS: ", showRestaurantData);
// console.log("CITIES: ", showCityData);
// console.log("show me that jsonData works: ", grabRestaurantData); 

// console.log("I can grab only the restaurant data from grabData.js: ", jsonData.restaurantData());
// console.log("I can grab only the city data from grabData.js too: ", jsonData.grabCityData(city));
// ^^ do not grab data from those functions


// // // // // DISPLAY FUNCTIONS \\ \\ \\ \\ \\



module.exports = {displayRestaurants, displayCities};