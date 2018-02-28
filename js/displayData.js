"use strict";
console.log("DISPLAY DATA JS IS DISPLAYING");

// // // // // REQUIRES \\ \\ \\ \\ \\
// let jsonData = require('./grabData'); 
let {grabRestaurantData} = require('./grabData'); 

// let cityJsonData = {grabCityData} = require('./grabData');
// ^^ I wanted to see if I could create a variable set to a certain function within a .js file... it does not!

// // // // // VARIABLES TO RENDER THE DOM  \\ \\ \\ \\ \\
let showRestaurantData = document.getElementById("restaurants");
let showCityData = document.getElementById("cities");
let restaurants = "";
let restaurantName = restaurants;
let cities = "";
let cityName = cities;



function displayRestaurants(rest) {
    console.log("DISPLAY RESTAURANTS HERE: ",  grabRestaurantData.restaurants);
}

restaurants = 
`
<form>
    <div class="selections">Select a Restaurant:
        <select>
            <option value="${restaurantName}">${restaurantName}</option> // grabRestaurantData will be replaced with the results from the loops through the Restaurant Data array

        </select>
    </div>
</form>
`;

showRestaurantData.innerHTML = restaurants;


cities = 
`
<form>
    <div class="selections">Select a City: 
        <select>
            <option value="${cityName}">${cityName}</option> // grabRestaurantData will be replaced with the results from the loops through the City Data array
        </select> 
    </div>
</form>
`;

showCityData.innerHTML = cities;




// // // // // CONSOLE LOGS \\ \\ \\ \\ \\
console.log("RESTAURANTS: ", showRestaurantData);
console.log("CITIES: ", showCityData);
console.log("show me that jsonData works: ", grabRestaurantData); 

// console.log("I can grab only the restaurant data from grabData.js: ", jsonData.restaurantData());
// console.log("I can grab only the city data from grabData.js too: ", jsonData.grabCityData(city));
// ^^ do not grab data from those functions


// // // // // DISPLAY FUNCTIONS \\ \\ \\ \\ \\



module.export = {displayRestaurants};