"use strict";
// console.log("DISPLAY DATA JS IS DISPLAYING");

// // // // // REQUIRES \\ \\ \\ \\ \\ 
let db = require('./grabData'); 

// // // // // VARIABLES TO RENDER THE DOM  \\ \\ \\ \\ \\
var showRestaurantData = document.getElementById("inner-container");
var showCityData = document.getElementById("cities");
var ratingData = document.getElementById("ratings");
var list = document.getElementById("list-group");
var restaurants;
var restaurant;
let restaurantName;
var cityArray = [];
var cities;
var ratingList = "";
var restaurantRating;
var ratings;
var ratingFromCity = "";
var cityID;
var ids;



var home = document.getElementById("home");


function displayRestaurants() {
    
    db.grabRestaurantData().then(

            (cityJsonData)=>{
                // console.log(cityJsonData);
                let sortedRestaurants = cityJsonData.restaurants.sort(function(a, b){
                    return b.my_rating - a.my_rating;
                });
                    console.log("sorted restaurants: ", sortedRestaurants);
                
                        for(var m = 0; m < sortedRestaurants.length; m++){
                            ids = sortedRestaurants[m].city_id;
                            console.log("city id's: ", ids);
                            // return ids;
                        }

                    restaurant = cityJsonData;
                    console.log(restaurant);
                    sortedRestaurants.forEach((restaurant) => {

                        
                        restaurantName = restaurant.restaurant;
                        restaurantRating = restaurant.my_rating;

                        // console.log("rating, ", restaurantRating);

                        // ratingList += ``;
                        ratingList += `<li class="list-group-item" style="text-align:left; max-height: 60%;"><a href="#">${restaurantName}</a> &nbsp;&nbsp;&nbsp; <span class="ratings">rating: <span class="rating-num">${restaurantRating}</span></span> </li>`;
                        // ratingList += `</ul>`;

                    });

            showRestaurantData.innerHTML = ratingList;
        },(reject)=>{
            });
}



function displayCities() {
    db.grabCityData().then(
            (cityJsonData)=>{
                
                let city = cityJsonData;
                    // console.log(city);
                
                let cityData = Object.keys(cityJsonData);
                // console.log("city Data ", cityData);

                    cityData.forEach(function(location){

                        var cityName = cityJsonData[location];
                        let cityDropList = "";
                        // let cityDropSelect = "";

                        for(var j = 0; j < cityName.length; j++) {

                            cities = cityName[j].city;
                            cityArray.push(cities);
                            cityDropList += `<option value="${cities}">${cities}</option>`;
                            // console.log("city - ", cities);

                            cityID = cityName[j].city_id;
                            console.log("cityID: ", cityID);

                        }
                        showCityData.innerHTML = cityDropList;
                    });
            },(reject)=>{
                });
}

displayCities();
// console.log("city id's: ", ids);

// let nashville = cities.onSelect("Nashville");

// if(nashville == "Nashville"){
//     console.log("NASHVILLE IS HOME");
// }else{
//     console.log("you're not home!");
// }

// let formInput = document.getElementById("user-input-form");

// let form = `<div id="formData"><form><input id="user-rAdd" type="text" size="12" placeholder="What restaurant would you like to add to your library?"></form></div>`;

// formInput.innerHTML = form;



module.exports = {displayRestaurants, displayCities};