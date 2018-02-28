"use strict";


let showRestaurantData = document.getElementById("restaurants");
let showCityData = document.getElementById("cities");
let restaurantName = "";




function grabRestaurantData() {
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

function grabCityData() {
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


//
//
//

// function displayRestaurants() {
//     console.log("DISPLAY RESTAURANTS",  restaurantName);
//     for(var i = 0; i < grabRestaurantData.restaurants; i++){
//         console.log("LOOPING THROUGH RESTAURANT NAMES LIKE: ", displayRestaurants());
//     }
// }
// displayRestaurants();

// restaurants = 
// `
// <form>
//     <div class="selections">Select a Restaurant:
//         <select>
//             <option value="${restaurantName}">${restaurantName}</option> // grabRestaurantData will be replaced with the results from the loops through the Restaurant Data array

//         </select>
//     </div>
// </form>
// `;

// showRestaurantData.innerHTML = restaurants;

// cities = 
// `
// <form>
//     <div class="selections">Select a City: 
//         <select>
//             <option value="${restaurantName}">${restaurantName}</option> // grabRestaurantData will be replaced with the results from the loops through the City Data array
//         </select> 
//     </div>
// </form>
// `;

// showCityData.innerHTML = cities;

module.exports = {grabRestaurantData, grabCityData};